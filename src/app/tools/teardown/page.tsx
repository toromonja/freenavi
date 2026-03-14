"use client";

import { useState, useMemo } from "react";
import { Calculator, ChevronDown, AlertCircle, Lightbulb } from "lucide-react";

// 都道府県別国保料率（概算）
const PREFECTURES = [
  { name: "東京都", rate: 0.098 },
  { name: "神奈川県", rate: 0.099 },
  { name: "大阪府", rate: 0.102 },
  { name: "愛知県", rate: 0.097 },
  { name: "埼玉県", rate: 0.095 },
  { name: "千葉県", rate: 0.096 },
  { name: "兵庫県", rate: 0.101 },
  { name: "福岡県", rate: 0.103 },
  { name: "北海道", rate: 0.104 },
  { name: "宮城県", rate: 0.099 },
  { name: "広島県", rate: 0.100 },
  { name: "京都府", rate: 0.102 },
  { name: "静岡県", rate: 0.097 },
  { name: "茨城県", rate: 0.098 },
  { name: "その他", rate: 0.100 },
];

// 所得税の超過累進税率
function calcIncomeTax(taxableIncome: number): number {
  if (taxableIncome <= 0) return 0;
  const brackets = [
    { limit: 1_950_000, rate: 0.05, deduction: 0 },
    { limit: 3_300_000, rate: 0.10, deduction: 97_500 },
    { limit: 6_950_000, rate: 0.20, deduction: 427_500 },
    { limit: 9_000_000, rate: 0.23, deduction: 636_000 },
    { limit: 18_000_000, rate: 0.33, deduction: 1_536_000 },
    { limit: 40_000_000, rate: 0.40, deduction: 2_796_000 },
    { limit: Infinity, rate: 0.45, deduction: 4_796_000 },
  ];
  for (const b of brackets) {
    if (taxableIncome <= b.limit) {
      return Math.max(0, taxableIncome * b.rate - b.deduction);
    }
  }
  return 0;
}

function formatMan(yen: number): string {
  return Math.round(yen / 10_000).toLocaleString();
}

function formatYen(yen: number): string {
  return Math.round(yen).toLocaleString();
}

type AoiroType = "65" | "10" | "none";
type SpouseType = "none" | "full" | "part";

export default function TeardownPage() {
  const [sales, setSales] = useState<string>("");
  const [expenses, setExpenses] = useState<string>("");
  const [aoiro, setAoiro] = useState<AoiroType>("65");
  const [spouse, setSpouse] = useState<SpouseType>("none");
  const [prefecture, setPrefecture] = useState<string>("東京都");

  const result = useMemo(() => {
    const salesYen = (parseFloat(sales) || 0) * 10_000;
    const expensesYen = (parseFloat(expenses) || 0) * 10_000;

    if (salesYen <= 0) return null;

    // 1. 青色申告特別控除
    const aoiroDeduction =
      aoiro === "65" ? 650_000 : aoiro === "10" ? 100_000 : 0;

    // 2. 事業所得
    const businessIncome = Math.max(0, salesYen - expensesYen - aoiroDeduction);

    // 3. 国民年金
    const nenkinAnnual = 20_140 * 12; // 241,680円

    // 4. 国保料（概算）
    const prefData = PREFECTURES.find((p) => p.name === prefecture) ?? PREFECTURES[0];
    const kokuhoPremium = Math.max(0, businessIncome * prefData.rate);

    // 5. 社会保険料控除（国民年金 + 国保）
    const socialInsuranceDeduction = nenkinAnnual + kokuhoPremium;

    // 6. 基礎控除
    const basicDeduction = 480_000;

    // 7. 配偶者控除（専業の場合38万）
    const spouseDeduction = spouse === "full" ? 380_000 : 0;

    // 8. 課税所得
    const taxableIncome = Math.max(
      0,
      businessIncome - basicDeduction - socialInsuranceDeduction - spouseDeduction
    );

    // 9. 所得税（復興特別所得税込み）
    const baseTax = calcIncomeTax(taxableIncome);
    const incomeTax = baseTax * 1.021; // 復興特別所得税

    // 10. 住民税
    const residentTax = Math.max(0, taxableIncome * 0.10) + 5_500;

    // 11. 手取り
    const takeHome = Math.max(
      0,
      salesYen - expensesYen - incomeTax - residentTax - nenkinAnnual - kokuhoPremium
    );

    // 実効税率
    const effectiveRate =
      salesYen > 0
        ? ((incomeTax + residentTax + nenkinAnnual + kokuhoPremium) / salesYen) * 100
        : 0;

    return {
      salesYen,
      expensesYen,
      aoiroDeduction,
      businessIncome,
      taxableIncome,
      incomeTax,
      residentTax,
      nenkinAnnual,
      kokuhoPremium,
      takeHome,
      effectiveRate,
      spouseDeduction,
    };
  }, [sales, expenses, aoiro, spouse, prefecture]);

  // 節税アドバイス
  const advices = useMemo(() => {
    if (!result) return [];
    const list: string[] = [];

    // 青色申告していない場合
    if (aoiro === "none") {
      const saving = 650_000 * 0.2; // 概算（税率20%として）
      list.push(
        `青色申告（65万円控除）に切り替えると、最大約${formatMan(saving)}万円の節税効果があります。`
      );
    } else if (aoiro === "10") {
      list.push(
        "電子申告（e-Tax）で青色申告65万円控除にアップグレードできます。freeeやマネーフォワードを使えば手間なく対応可能です。"
      );
    }

    // iDeCo
    const idecoMax = 816_000; // 月6.8万 × 12
    const idecoSaving = idecoMax * 0.2;
    list.push(
      `iDeCo（月6.8万円・年間約82万円）に加入すると、最大約${formatMan(idecoSaving)}万円の節税が期待できます。`
    );

    // 小規模企業共済
    list.push(
      "小規模企業共済（月最大7万円）に加入すると、年間最大84万円が所得控除になります。退職金代わりにもなるお得な制度です。"
    );

    return list;
  }, [result, aoiro]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* ページヘッダー */}
      <div className="bg-emerald-600 text-white">
        <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <Calculator className="w-5 h-5" />
            </div>
            <span className="text-emerald-200 text-sm font-medium">無料計算ツール</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-3">
            フリーランス 手取りシミュレーター
          </h1>
          <p className="text-emerald-100 text-lg">
            売上から実際の手取りを計算しよう
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* 入力フォーム */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-5">条件を入力</h2>

              {/* 年間売上 */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  年間売上
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={sales}
                    onChange={(e) => setSales(e.target.value)}
                    placeholder="500"
                    min={0}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-14 text-right text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                    万円
                  </span>
                </div>
              </div>

              {/* 年間経費 */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  年間経費
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={expenses}
                    onChange={(e) => setExpenses(e.target.value)}
                    placeholder="100"
                    min={0}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-14 text-right text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                    万円
                  </span>
                </div>
              </div>

              {/* 青色申告 */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  青色申告
                </label>
                <div className="relative">
                  <select
                    value={aoiro}
                    onChange={(e) => setAoiro(e.target.value as AoiroType)}
                    className="w-full appearance-none border border-gray-200 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent bg-white"
                  >
                    <option value="65">している（65万円控除）</option>
                    <option value="10">している（10万円控除）</option>
                    <option value="none">していない</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* 配偶者 */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  配偶者
                </label>
                <div className="relative">
                  <select
                    value={spouse}
                    onChange={(e) => setSpouse(e.target.value as SpouseType)}
                    className="w-full appearance-none border border-gray-200 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent bg-white"
                  >
                    <option value="none">なし</option>
                    <option value="full">あり（専業・収入なし）</option>
                    <option value="part">あり（パート・収入あり）</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* 都道府県 */}
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  都道府県
                  <span className="ml-1 text-xs text-gray-400 font-normal">（国保料の計算に使用）</span>
                </label>
                <div className="relative">
                  <select
                    value={prefecture}
                    onChange={(e) => setPrefecture(e.target.value)}
                    className="w-full appearance-none border border-gray-200 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent bg-white"
                  >
                    {PREFECTURES.map((p) => (
                      <option key={p.name} value={p.name}>{p.name}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed">
                ※ この計算は概算です。正確な税額は税理士または税務署にご確認ください。
              </p>
            </div>
          </div>

          {/* 結果表示 */}
          <div className="lg:col-span-3 space-y-4">
            {!result ? (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col items-center justify-center text-center min-h-64">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <Calculator className="w-7 h-7 text-emerald-500" />
                </div>
                <p className="text-gray-500 font-medium">
                  年間売上を入力すると、手取り額が計算されます
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  すべての計算はブラウザ内で行われます
                </p>
              </div>
            ) : (
              <>
                {/* メイン結果カード */}
                <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm overflow-hidden">
                  {/* 手取り額 */}
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6 text-white text-center">
                    <p className="text-emerald-100 text-sm font-medium mb-1">年間 手取り額</p>
                    <p className="text-5xl font-bold tracking-tight mb-1">
                      {formatMan(result.takeHome)}
                      <span className="text-2xl font-normal ml-1">万円</span>
                    </p>
                    <p className="text-emerald-200 text-sm">
                      実質負担率：{result.effectiveRate.toFixed(1)}%（売上に対する税・社保の割合）
                    </p>
                  </div>

                  {/* 内訳 */}
                  <div className="p-5">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                      内訳
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between py-2 border-b border-gray-50">
                        <span className="text-gray-700 font-medium">売上</span>
                        <span className="font-semibold text-gray-900">
                          {formatMan(result.salesYen)} 万円
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-gray-50">
                        <span className="text-gray-600">▲ 経費</span>
                        <span className="text-red-500 font-medium">
                          -{formatMan(result.expensesYen)} 万円
                        </span>
                      </div>
                      {result.aoiroDeduction > 0 && (
                        <div className="flex items-center justify-between py-2 border-b border-gray-50">
                          <span className="text-gray-600">▲ 青色申告控除</span>
                          <span className="text-red-500 font-medium">
                            -{formatMan(result.aoiroDeduction)} 万円
                          </span>
                        </div>
                      )}
                      {result.spouseDeduction > 0 && (
                        <div className="flex items-center justify-between py-2 border-b border-gray-50">
                          <span className="text-gray-600">▲ 配偶者控除</span>
                          <span className="text-red-500 font-medium">
                            -{formatMan(result.spouseDeduction)} 万円
                          </span>
                        </div>
                      )}
                      <div className="flex items-center justify-between py-2 border-b border-gray-50">
                        <span className="text-gray-600">▲ 所得税（復興税込）</span>
                        <span className="text-red-500 font-medium">
                          -{formatYen(result.incomeTax)} 円
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-gray-50">
                        <span className="text-gray-600">▲ 住民税</span>
                        <span className="text-red-500 font-medium">
                          -{formatYen(result.residentTax)} 円
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-gray-50">
                        <span className="text-gray-600">▲ 国民年金</span>
                        <span className="text-red-500 font-medium">
                          -{formatYen(result.nenkinAnnual)} 円
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-gray-50">
                        <span className="text-gray-600">▲ 国民健康保険</span>
                        <span className="text-red-500 font-medium">
                          -{formatYen(result.kokuhoPremium)} 円
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-3 bg-emerald-50 rounded-xl px-3 -mx-1">
                        <span className="font-bold text-gray-900">手取り</span>
                        <span className="font-bold text-emerald-600 text-xl">
                          {formatMan(result.takeHome)} 万円
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 節税アドバイス */}
                {advices.length > 0 && (
                  <div className="bg-amber-50 rounded-2xl border border-amber-100 p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <Lightbulb className="w-5 h-5 text-amber-500" />
                      <h3 className="font-bold text-amber-800">節税アドバイス</h3>
                    </div>
                    <div className="space-y-3">
                      {advices.map((advice, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-amber-400 text-white text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                            {i + 1}
                          </span>
                          <p className="text-sm text-amber-900 leading-relaxed">{advice}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 免責注記 */}
                <div className="flex items-start gap-2 bg-gray-50 rounded-xl p-4">
                  <AlertCircle className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-500 leading-relaxed">
                    この計算は概算であり、実際の税額は個人の状況により異なります。
                    国保料は都道府県・市区町村ごとに異なるため、実際の金額は各自治体にご確認ください。
                    正確な税額については、税理士または最寄りの税務署にご相談ください。
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
