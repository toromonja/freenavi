"use client";

import { useState, useMemo } from "react";
import { Shield, ChevronDown, AlertCircle, Info, ArrowRight } from "lucide-react";
import Link from "next/link";

// 都道府県・市区町村別料率データ（概算）
const AREA_DATA = [
  {
    label: "東京都（23区）",
    incomeRate: 0.0949,
    equalPerPerson: 54972,
    flatPerHousehold: 0,
  },
  {
    label: "神奈川県（横浜市）",
    incomeRate: 0.0989,
    equalPerPerson: 57828,
    flatPerHousehold: 0,
  },
  {
    label: "大阪府（大阪市）",
    incomeRate: 0.0835,
    equalPerPerson: 60588,
    flatPerHousehold: 25968,
  },
  {
    label: "愛知県（名古屋市）",
    incomeRate: 0.0772,
    equalPerPerson: 50424,
    flatPerHousehold: 16440,
  },
  {
    label: "埼玉県（さいたま市）",
    incomeRate: 0.0895,
    equalPerPerson: 53280,
    flatPerHousehold: 21600,
  },
  {
    label: "千葉県（千葉市）",
    incomeRate: 0.0878,
    equalPerPerson: 50760,
    flatPerHousehold: 19800,
  },
  {
    label: "兵庫県（神戸市）",
    incomeRate: 0.0927,
    equalPerPerson: 58140,
    flatPerHousehold: 22680,
  },
  {
    label: "福岡県（福岡市）",
    incomeRate: 0.0884,
    equalPerPerson: 57240,
    flatPerHousehold: 24360,
  },
  {
    label: "北海道（札幌市）",
    incomeRate: 0.0924,
    equalPerPerson: 52680,
    flatPerHousehold: 23040,
  },
  {
    label: "宮城県（仙台市）",
    incomeRate: 0.0868,
    equalPerPerson: 51480,
    flatPerHousehold: 20520,
  },
  {
    label: "広島県（広島市）",
    incomeRate: 0.0891,
    equalPerPerson: 55560,
    flatPerHousehold: 22320,
  },
  {
    label: "京都府（京都市）",
    incomeRate: 0.0942,
    equalPerPerson: 56760,
    flatPerHousehold: 24120,
  },
  {
    label: "静岡県（静岡市）",
    incomeRate: 0.0833,
    equalPerPerson: 48960,
    flatPerHousehold: 18720,
  },
  {
    label: "その他（全国平均概算）",
    incomeRate: 0.085,
    equalPerPerson: 54000,
    flatPerHousehold: 18000,
  },
] as const;

// 国保料の上限額（2026年度）
const MAX_PREMIUM = 1_060_000;

// 軽減基準額（2026年度）
const BASE_REDUCTION = 430_000;
const REDUCTION_5_PER_PERSON = 290_000;
const REDUCTION_2_PER_PERSON = 535_000;

type ReductionLevel = "none" | "2wari" | "5wari" | "7wari";

function calcReduction(incomeYen: number, members: number): ReductionLevel {
  if (incomeYen <= BASE_REDUCTION) return "7wari";
  if (incomeYen <= BASE_REDUCTION + REDUCTION_5_PER_PERSON * members) return "5wari";
  if (incomeYen <= BASE_REDUCTION + REDUCTION_2_PER_PERSON * members) return "2wari";
  return "none";
}

function reductionRate(level: ReductionLevel): number {
  if (level === "7wari") return 0.7;
  if (level === "5wari") return 0.5;
  if (level === "2wari") return 0.2;
  return 0;
}

const reductionLabel: Record<ReductionLevel, string> = {
  "7wari": "7割軽減",
  "5wari": "5割軽減",
  "2wari": "2割軽減",
  none: "軽減なし",
};

const reductionColor: Record<ReductionLevel, string> = {
  "7wari": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "5wari": "bg-blue-100 text-blue-700 border-blue-200",
  "2wari": "bg-purple-100 text-purple-700 border-purple-200",
  none: "bg-gray-100 text-gray-600 border-gray-200",
};

function formatYen(yen: number): string {
  return Math.round(yen).toLocaleString();
}

function formatMan(yen: number): string {
  return (Math.round(yen / 1000) / 10).toFixed(1);
}

export default function KokuhoPage() {
  const [income, setIncome] = useState<string>("");
  const [areaIndex, setAreaIndex] = useState<number>(0);
  const [members, setMembers] = useState<number>(1);

  const result = useMemo(() => {
    const incomeYen = (parseFloat(income) || 0) * 10_000;
    if (incomeYen < 0) return null;

    const area = AREA_DATA[areaIndex];

    // 計算：所得割 = (所得 - 43万円) × 料率 ※基礎控除43万円を差し引く
    const incomeForCalc = Math.max(0, incomeYen - BASE_REDUCTION);
    const incomeShare = incomeForCalc * area.incomeRate;
    const equalShare = area.equalPerPerson * members;
    const flatShare = area.flatPerHousehold;

    const premiumBeforeReduction = Math.min(incomeShare + equalShare + flatShare, MAX_PREMIUM);

    // 軽減判定（所得割計算前の所得で判定）
    const reductionLevel = calcReduction(incomeYen, members);
    const rate = reductionRate(reductionLevel);

    // 軽減は均等割・平等割にのみ適用
    const reducedEqualShare = equalShare * (1 - rate);
    const reducedFlatShare = flatShare * (1 - rate);
    const premiumAfterReduction = Math.min(
      incomeShare + reducedEqualShare + reducedFlatShare,
      MAX_PREMIUM
    );

    // 任意継続の目安（退職前の給与から計算できないため、参考値として表示）
    // 健保の標準報酬月額上限 = 月139万円相当の保険料が上限
    // 政府管掌健保の保険料率 約9.98%（2026年度）を使用
    // 任意継続は上限あり（標準報酬月額上限30万円）
    // 参考値：30万 × 9.98% × 2 × 12 = 約71.9万円（上限目安）

    return {
      incomeYen,
      incomeShare,
      equalShare,
      flatShare,
      premiumBeforeReduction,
      reductionLevel,
      reducedEqualShare,
      reducedFlatShare,
      premiumAfterReduction,
      monthlyPremium: premiumAfterReduction / 12,
      area,
    };
  }, [income, areaIndex, members]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* ページヘッダー */}
      <div className="bg-purple-600 text-white">
        <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <span className="text-purple-200 text-sm font-medium">無料計算ツール</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-3">
            国保料シミュレーター
          </h1>
          <p className="text-purple-100 text-lg">
            前年の所得から、国民健康保険料の目安を計算します
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* 入力フォーム */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-5">条件を入力</h2>

              {/* 前年所得 */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  前年の所得
                  <span className="ml-1 text-xs text-gray-400 font-normal">
                    （経費・控除後の事業所得）
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    placeholder="300"
                    min={0}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-14 text-right text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                    万円
                  </span>
                </div>
                <p className="mt-1 text-xs text-gray-400">
                  青色申告特別控除後の金額を入力してください
                </p>
              </div>

              {/* 都道府県・市区町村 */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  お住まいの地域
                </label>
                <div className="relative">
                  <select
                    value={areaIndex}
                    onChange={(e) => setAreaIndex(Number(e.target.value))}
                    className="w-full appearance-none border border-gray-200 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white"
                  >
                    {AREA_DATA.map((area, i) => (
                      <option key={i} value={i}>
                        {area.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* 加入人数 */}
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  国保に加入する人数
                  <span className="ml-1 text-xs text-gray-400 font-normal">（本人含む）</span>
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setMembers((m) => Math.max(1, m - 1))}
                    className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 font-bold text-lg transition-colors"
                    aria-label="減らす"
                  >
                    −
                  </button>
                  <span className="text-2xl font-bold text-gray-900 w-12 text-center">
                    {members}
                  </span>
                  <button
                    onClick={() => setMembers((m) => Math.min(8, m + 1))}
                    className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 font-bold text-lg transition-colors"
                    aria-label="増やす"
                  >
                    ＋
                  </button>
                  <span className="text-sm text-gray-500 ml-1">人</span>
                </div>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed">
                ※ この計算は概算です。正確な金額はお住まいの市区町村にご確認ください。
              </p>
            </div>

            {/* 料率の内訳（情報カード） */}
            {result && (
              <div className="bg-purple-50 rounded-2xl border border-purple-100 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Info className="w-4 h-4 text-purple-500" />
                  <span className="text-sm font-semibold text-purple-800">
                    {result.area.label}の料率
                  </span>
                </div>
                <div className="space-y-1.5 text-xs text-purple-700">
                  <div className="flex justify-between">
                    <span>所得割率</span>
                    <span className="font-semibold">
                      {(result.area.incomeRate * 100).toFixed(2)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>均等割（1人あたり）</span>
                    <span className="font-semibold">
                      {formatYen(result.area.equalPerPerson)}円
                    </span>
                  </div>
                  {result.area.flatPerHousehold > 0 && (
                    <div className="flex justify-between">
                      <span>平等割（世帯）</span>
                      <span className="font-semibold">
                        {formatYen(result.area.flatPerHousehold)}円
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between pt-1.5 border-t border-purple-200">
                    <span>年間上限額</span>
                    <span className="font-semibold">106万円</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 結果表示 */}
          <div className="lg:col-span-3 space-y-4">
            {!result || income === "" ? (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col items-center justify-center text-center min-h-64">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-7 h-7 text-purple-500" />
                </div>
                <p className="text-gray-500 font-medium">
                  前年の所得を入力すると、国保料の目安が計算されます
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  0円（開業初年度など）も入力できます
                </p>
              </div>
            ) : (
              <>
                {/* メイン結果 */}
                <div className="bg-white rounded-2xl border border-purple-100 shadow-sm overflow-hidden">
                  {/* 年間保険料（軽減後） */}
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-6 text-white text-center">
                    <p className="text-purple-100 text-sm font-medium mb-1">
                      年間保険料（概算・軽減適用後）
                    </p>
                    <p className="text-5xl font-bold tracking-tight mb-1">
                      {formatMan(result.premiumAfterReduction)}
                      <span className="text-2xl font-normal ml-1">万円</span>
                    </p>
                    <p className="text-purple-200 text-sm">
                      月額換算：約 {formatYen(result.monthlyPremium)} 円 / 月
                    </p>
                  </div>

                  {/* 内訳 */}
                  <div className="p-5">
                    {/* 軽減判定バッジ */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-sm font-medium text-gray-600">軽減判定：</span>
                      <span
                        className={`text-sm font-bold px-3 py-1 rounded-full border ${reductionColor[result.reductionLevel]}`}
                      >
                        {reductionLabel[result.reductionLevel]}
                      </span>
                    </div>

                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                      保険料の内訳
                    </h3>
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between py-2 border-b border-gray-50">
                        <span className="text-sm text-gray-600">所得割</span>
                        <span className="text-sm font-medium text-gray-800">
                          {formatYen(result.incomeShare)} 円
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-gray-50">
                        <div>
                          <span className="text-sm text-gray-600">均等割</span>
                          {result.reductionLevel !== "none" && (
                            <span className="ml-2 text-xs text-purple-600 font-medium">
                              （{Math.round(reductionRate(result.reductionLevel) * 100)}%軽減）
                            </span>
                          )}
                        </div>
                        <div className="text-right">
                          {result.reductionLevel !== "none" && (
                            <p className="text-xs text-gray-400 line-through">
                              {formatYen(result.equalShare)} 円
                            </p>
                          )}
                          <span className="text-sm font-medium text-gray-800">
                            {formatYen(result.reducedEqualShare)} 円
                          </span>
                        </div>
                      </div>
                      {result.area.flatPerHousehold > 0 && (
                        <div className="flex items-center justify-between py-2 border-b border-gray-50">
                          <div>
                            <span className="text-sm text-gray-600">平等割</span>
                            {result.reductionLevel !== "none" && (
                              <span className="ml-2 text-xs text-purple-600 font-medium">
                                （{Math.round(reductionRate(result.reductionLevel) * 100)}%軽減）
                              </span>
                            )}
                          </div>
                          <div className="text-right">
                            {result.reductionLevel !== "none" && (
                              <p className="text-xs text-gray-400 line-through">
                                {formatYen(result.flatShare)} 円
                              </p>
                            )}
                            <span className="text-sm font-medium text-gray-800">
                              {formatYen(result.reducedFlatShare)} 円
                            </span>
                          </div>
                        </div>
                      )}
                      {result.premiumAfterReduction >= MAX_PREMIUM && (
                        <div className="bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-xs text-amber-700 flex items-start gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                          年間上限額（106万円）に達したため、上限額を適用しています。
                        </div>
                      )}
                      <div className="flex items-center justify-between py-3 bg-purple-50 rounded-xl px-3 -mx-1">
                        <span className="font-bold text-gray-900">合計（年額）</span>
                        <span className="font-bold text-purple-600 text-xl">
                          {formatMan(result.premiumAfterReduction)} 万円
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 軽減制度の説明 */}
                {result.reductionLevel !== "none" && (
                  <div className="bg-emerald-50 rounded-2xl border border-emerald-100 p-5">
                    <div className="flex items-start gap-2">
                      <Info className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-emerald-800 mb-1">
                          {reductionLabel[result.reductionLevel]}が適用されます
                        </p>
                        <p className="text-sm text-emerald-700 leading-relaxed">
                          所得が低い世帯は、均等割・平等割が自動的に軽減されます。
                          申請不要で自動適用されますが、念のため加入時に市区町村の窓口で確認することをおすすめします。
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* 任意継続との比較 */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-500" />
                    任意継続との比較（参考）
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    任意継続は退職時の給与水準によって保険料が決まります。
                    政府管掌健保（協会けんぽ）の場合、在職時の保険料の約2倍（ただし上限あり）です。
                    退職前の月給から計算した任意継続保険料と比較して、安い方を選ぶのが基本です。
                  </p>
                  <div className="bg-blue-50 rounded-xl border border-blue-100 p-3 text-sm text-blue-800">
                    <p className="font-semibold mb-1">任意継続保険料の目安</p>
                    <ul className="space-y-1 text-xs text-blue-700">
                      <li>・ 月給30万円の場合：約3〜3.5万円/月（年間約36〜42万円）</li>
                      <li>・ 月給50万円の場合：約5〜5.5万円/月（年間約60〜66万円）</li>
                      <li>・ 上限：標準報酬月額上限（約30万円）ベースの保険料</li>
                    </ul>
                    <p className="text-xs text-blue-600 mt-2">
                      ※ 加入していた健保組合によって料率が異なります。正確な金額は退職先の人事部または健保組合にご確認ください。
                    </p>
                  </div>
                  <div className="mt-3">
                    <Link
                      href="/guides/shakai-hoken"
                      className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      国保 vs 任意継続の詳しい比較を見る
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* 免責注記 */}
                <div className="flex items-start gap-2 bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <AlertCircle className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-500 leading-relaxed">
                    この計算は概算です。国保料は市区町村ごとに詳細な料率・上限額が異なり、介護保険料（40歳以上）が別途加算されます。
                    正確な金額はお住まいの市区町村の窓口またはウェブサイトでご確認ください。
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
