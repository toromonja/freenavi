"use client";

import { useState, useMemo } from "react";
import {
  Receipt,
  AlertTriangle,
  ChevronDown,
  TrendingDown,
  TrendingUp,
  Info,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

type ClientType = "btoc" | "btob" | "mixed";
type TaxType = "inclusive" | "exclusive";

function formatMan(yen: number): string {
  const man = Math.abs(yen) / 10_000;
  return man.toFixed(1);
}

function formatYen(yen: number): string {
  return Math.round(Math.abs(yen)).toLocaleString();
}

export default function InvoiceToolPage() {
  const [sales, setSales] = useState<string>("");
  const [clientType, setClientType] = useState<ClientType>("btob");
  const [taxType, setTaxType] = useState<TaxType>("exclusive");

  const result = useMemo(() => {
    const salesYen = (parseFloat(sales) || 0) * 10_000;
    if (salesYen <= 0) return null;

    // 税込売上から消費税額を算出
    // 税別請求の場合: 消費税 = 売上 × 10%
    // 税込請求の場合: 消費税 = 売上 × 10/110
    const consumptionTax =
      taxType === "exclusive"
        ? salesYen * 0.1
        : salesYen * (10 / 110);

    // BtoC（個人向け）の場合、取引先への影響はほぼゼロ
    const btocFactor = clientType === "btoc" ? 0 : clientType === "mixed" ? 0.5 : 1.0;

    // ---- 登録しない場合（免税事業者のまま）----
    // 取引先は仕入税額控除を一部しか使えない → 取引先の実質負担
    // 現在〜2026年9月: 控除率80% → 取引先が20%分を負担
    const unregisteredImpactCurrent = consumptionTax * (1 - 0.8) * btocFactor;
    // 2026年10月〜: 控除率50% → 取引先が50%分を負担
    const unregisteredImpactFuture = consumptionTax * (1 - 0.5) * btocFactor;

    // ---- 登録する場合（課税事業者）----
    // 2割特例（〜2026年9月申告分）: 消費税の20%を納税
    const registeredTaxCurrent = consumptionTax * 0.2;
    // 2026年10月〜（簡易課税 第5種・サービス業想定 みなし仕入率50%）: 50%を納税
    const registeredTaxFuture = consumptionTax * 0.5;

    // 手取りへの影響（マイナスが損）
    // 登録しない: 取引先が値引き交渉や取引中止をしてくる可能性を「影響額」として示す
    // 登録する: 消費税分が純粋に手取り減

    return {
      salesYen,
      consumptionTax,
      btocFactor,
      clientType,
      unregisteredImpactCurrent,
      unregisteredImpactFuture,
      registeredTaxCurrent,
      registeredTaxFuture,
    };
  }, [sales, clientType, taxType]);

  // 結論判定
  const conclusion = useMemo(() => {
    if (!result) return null;

    if (result.clientType === "btoc") {
      return {
        type: "no",
        text: "登録不要の可能性が高いです",
        detail:
          "個人（一般消費者）向けのみの取引では、インボイスを求められることはほぼありません。登録しても消費税の納税義務だけが増えるため、現時点では登録不要と考えられます。",
      };
    }

    // 登録した場合の納税額 vs 登録しない場合の取引先への影響（値引き圧力）
    if (result.unregisteredImpactFuture > result.registeredTaxFuture) {
      return {
        type: "yes",
        text: "登録を検討することをおすすめします",
        detail:
          "2026年10月以降、未登録のままでいると取引先が受けられる消費税控除がさらに縮小されます。取引先からの値引き要求や取引打ち切りリスクと比べると、登録して消費税を納税するほうが手取りを守れる可能性があります。",
      };
    }

    return {
      type: "depends",
      text: "取引先との関係次第です",
      detail:
        "現時点では登録しない選択も十分あり得ます。ただし2026年10月以降は取引先への影響が大きくなるため、主要取引先と相談しながら判断することをおすすめします。",
    };
  }, [result]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* ページヘッダー */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <Receipt className="w-5 h-5" />
            </div>
            <span className="text-blue-200 text-sm font-medium">無料計算ツール</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-3">
            インボイス影響試算ツール
          </h1>
          <p className="text-blue-100 text-lg">
            登録する・しない、どちらが得か数字で確認しましょう
          </p>
        </div>
      </div>

      {/* 2026年変更 警告バナー */}
      <div className="bg-red-600 text-white">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          <p className="text-sm font-medium">
            2026年10月から経過措置が <strong>80%控除 → 50%控除</strong> に変わります。取引先への影響が大きくなります。
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
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-14 text-right text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                    万円
                  </span>
                </div>
              </div>

              {/* 主な取引先 */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  主な取引先
                </label>
                <div className="relative">
                  <select
                    value={clientType}
                    onChange={(e) => setClientType(e.target.value as ClientType)}
                    className="w-full appearance-none border border-gray-200 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                  >
                    <option value="btoc">個人（一般消費者）のみ</option>
                    <option value="btob">法人・フリーランス（BtoB）のみ</option>
                    <option value="mixed">個人・法人が混合</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
                <p className="mt-1.5 text-xs text-gray-400">
                  取引先の種類によって影響が大きく変わります
                </p>
              </div>

              {/* 消費税の扱い */}
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  消費税の請求方法
                </label>
                <div className="relative">
                  <select
                    value={taxType}
                    onChange={(e) => setTaxType(e.target.value as TaxType)}
                    className="w-full appearance-none border border-gray-200 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                  >
                    <option value="exclusive">税別で請求（本体価格＋消費税）</option>
                    <option value="inclusive">税込で請求（消費税込みの金額）</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed">
                ※ 計算結果は概算です。実際の金額は税理士にご確認ください。
              </p>
            </div>

            {/* 仕組みの説明 */}
            <div className="mt-4 bg-blue-50 rounded-2xl border border-blue-100 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-semibold text-blue-800">計算の仕組み</span>
              </div>
              <div className="space-y-2 text-xs text-blue-700 leading-relaxed">
                <p>
                  <strong>登録しない場合の影響：</strong><br />
                  取引先（法人など）は、インボイス未登録の事業者への支払いに対して、消費税の仕入税額控除を全額使えません。控除できない分は取引先の実質コスト増になります。
                </p>
                <p>
                  <strong>登録した場合の納税：</strong><br />
                  2割特例（〜2026年9月）では売上消費税の20%、以降は簡易課税（みなし仕入率50%）想定で50%を納税します。
                </p>
              </div>
            </div>
          </div>

          {/* 結果表示 */}
          <div className="lg:col-span-3 space-y-4">
            {!result ? (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col items-center justify-center text-center min-h-64">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Receipt className="w-7 h-7 text-blue-500" />
                </div>
                <p className="text-gray-500 font-medium">
                  年間売上を入力すると、シミュレーション結果が表示されます
                </p>
              </div>
            ) : (
              <>
                {/* 比較テーブル */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="bg-gray-50 px-5 py-3 border-b border-gray-100">
                    <h3 className="font-bold text-gray-900">
                      あなたの場合のシミュレーション
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      年間売上 {formatMan(result.salesYen)}万円 ／
                      消費税相当額 {formatMan(result.consumptionTax)}万円
                    </p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[440px]">
                      <thead>
                        <tr className="bg-gray-50/50">
                          <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3 border-b border-gray-100 w-1/3">
                            時期
                          </th>
                          <th className="text-center text-xs font-semibold text-gray-600 px-4 py-3 border-b border-gray-100">
                            <div className="flex items-center justify-center gap-1">
                              <TrendingDown className="w-3.5 h-3.5 text-gray-500" />
                              登録しない
                            </div>
                            <span className="font-normal text-gray-400">（取引先への影響）</span>
                          </th>
                          <th className="text-center text-xs font-semibold text-blue-700 px-4 py-3 border-b border-gray-100 bg-blue-50/50">
                            <div className="flex items-center justify-center gap-1">
                              <TrendingUp className="w-3.5 h-3.5 text-blue-500" />
                              登録する
                            </div>
                            <span className="font-normal text-blue-500">（自分の納税額）</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="px-4 py-4 border-b border-gray-100">
                            <div className="text-sm font-semibold text-gray-800">
                              現在〜2026年9月
                            </div>
                            <div className="text-xs text-gray-400 mt-0.5">
                              経過措置80%控除
                            </div>
                          </td>
                          <td className="px-4 py-4 border-b border-gray-100 text-center">
                            {result.clientType === "btoc" ? (
                              <span className="text-emerald-600 font-semibold text-sm">
                                影響なし
                              </span>
                            ) : (
                              <div>
                                <div className="text-orange-600 font-bold text-lg">
                                  {formatMan(result.unregisteredImpactCurrent)}万円
                                </div>
                                <div className="text-xs text-gray-400">
                                  取引先の負担増
                                </div>
                              </div>
                            )}
                          </td>
                          <td className="px-4 py-4 border-b border-gray-100 text-center bg-blue-50/30">
                            <div>
                              <div className="text-blue-700 font-bold text-lg">
                                {formatMan(result.registeredTaxCurrent)}万円
                              </div>
                              <div className="text-xs text-gray-400">
                                納税額（2割特例）
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-gray-50/30">
                          <td className="px-4 py-4">
                            <div className="text-sm font-semibold text-gray-800">
                              2026年10月〜
                            </div>
                            <div className="text-xs text-red-500 mt-0.5 font-medium">
                              経過措置50%控除に縮小
                            </div>
                          </td>
                          <td className="px-4 py-4 text-center">
                            {result.clientType === "btoc" ? (
                              <span className="text-emerald-600 font-semibold text-sm">
                                影響なし
                              </span>
                            ) : (
                              <div>
                                <div className="text-red-600 font-bold text-xl">
                                  {formatMan(result.unregisteredImpactFuture)}万円
                                </div>
                                <div className="text-xs text-gray-400">
                                  取引先の負担増
                                </div>
                              </div>
                            )}
                          </td>
                          <td className="px-4 py-4 text-center bg-blue-50/30">
                            <div>
                              <div className="text-blue-700 font-bold text-xl">
                                {formatMan(result.registeredTaxFuture)}万円
                              </div>
                              <div className="text-xs text-gray-400">
                                納税額（簡易課税想定）
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 結論 */}
                {conclusion && (
                  <div
                    className={`rounded-2xl border-2 p-5 ${
                      conclusion.type === "yes"
                        ? "bg-blue-50 border-blue-300"
                        : conclusion.type === "no"
                        ? "bg-emerald-50 border-emerald-300"
                        : "bg-amber-50 border-amber-300"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle
                        className={`w-5 h-5 shrink-0 mt-0.5 ${
                          conclusion.type === "yes"
                            ? "text-blue-500"
                            : conclusion.type === "no"
                            ? "text-emerald-500"
                            : "text-amber-500"
                        }`}
                      />
                      <div>
                        <h3
                          className={`font-bold mb-2 ${
                            conclusion.type === "yes"
                              ? "text-blue-800"
                              : conclusion.type === "no"
                              ? "text-emerald-800"
                              : "text-amber-800"
                          }`}
                        >
                          結論：{conclusion.text}
                        </h3>
                        <p
                          className={`text-sm leading-relaxed ${
                            conclusion.type === "yes"
                              ? "text-blue-700"
                              : conclusion.type === "no"
                              ? "text-emerald-700"
                              : "text-amber-700"
                          }`}
                        >
                          {conclusion.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* 追記・注意 */}
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-4 space-y-2">
                  <p className="text-xs font-semibold text-gray-600 mb-2">計算の前提・注意事項</p>
                  <ul className="space-y-1.5 text-xs text-gray-500 leading-relaxed">
                    <li>・「登録しない場合の影響」は取引先の実質負担増であり、直接あなたの手取りが減るわけではありません。ただし値引き交渉や取引中止のリスクとして考慮してください。</li>
                    <li>・「登録する場合の納税額」は2割特例（〜2026年9月）および簡易課税5種（みなし仕入率50%）の概算です。業種によって異なります。</li>
                    <li>・ 実際の判断は取引先との関係・売上規模・業種によって異なります。税理士に相談することをおすすめします。</li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>

        {/* 関連リンク */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <h3 className="font-semibold text-gray-700 mb-4 text-sm">あわせて読みたい</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/guides/invoice"
              className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition-all group"
            >
              <Receipt className="w-5 h-5 text-blue-500 shrink-0" />
              <div>
                <p className="font-medium text-gray-800 text-sm group-hover:text-blue-700">
                  インボイス制度ガイド
                </p>
                <p className="text-xs text-gray-500">仕組みをわかりやすく解説</p>
              </div>
            </Link>
            <Link
              href="/tools/teardown"
              className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-emerald-300 hover:shadow-sm transition-all group"
            >
              <Receipt className="w-5 h-5 text-emerald-500 shrink-0" />
              <div>
                <p className="font-medium text-gray-800 text-sm group-hover:text-emerald-700">
                  手取りシミュレーター
                </p>
                <p className="text-xs text-gray-500">所得税・住民税・国保を一括計算</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
