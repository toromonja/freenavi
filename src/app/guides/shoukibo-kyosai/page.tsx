import type { Metadata } from "next";
import Link from "next/link";
import { PiggyBank, CheckCircle, AlertTriangle, ArrowRight, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "小規模企業共済でフリーランスが退職金を作る方法",
  description: "小規模企業共済の節税効果・加入方法・iDeCoとの違いをわかりやすく解説。",
  alternates: {
    canonical: "https://freenavi.toromonja.com/guides/shoukibo-kyosai",
  },
};

const merits = [
  {
    icon: "💰",
    title: "掛金が全額 所得控除",
    detail: "月最大7万円（年84万円）の掛金が全額「小規模企業共済等掛金控除」として所得控除になります。所得税・住民税が両方下がります。",
    highlight: true,
  },
  {
    icon: "🏖️",
    title: "廃業・退職時に退職金として受け取れる",
    detail: "廃業・解約時に「退職所得」として受け取ると退職所得控除が使えます。通常の収入より大幅に税負担が軽くなります。",
    highlight: false,
  },
  {
    icon: "🏦",
    title: "低金利で借入できる貸付制度",
    detail: "掛金残高の範囲内で低金利（年1〜2%程度）で借入できます。資金繰りが厳しい時の安全網になります。",
    highlight: false,
  },
  {
    icon: "📈",
    title: "元本保証ではないが安全性が高い",
    detail: "国（中小企業基盤整備機構）が運営する制度です。民間の金融商品と比べて安全性が高く、長期加入ほど戻り率が高くなります。",
    highlight: false,
  },
];

const simulations = [
  { income: 300, taxRate: 0.20, contrib: 840000 },
  { income: 500, taxRate: 0.20, contrib: 840000 },
  { income: 800, taxRate: 0.23, contrib: 840000 },
];

const receiveTypes = [
  {
    type: "一時金（退職所得）",
    condition: "廃業・65歳以上の任意解約時",
    tax: "退職所得控除が適用。大きな金額でも税負担が軽い。",
    recommended: true,
  },
  {
    type: "分割受取（公的年金等所得）",
    condition: "60歳以上・10年以上加入時",
    tax: "公的年金等控除が適用。毎年一定額を受け取れる。",
    recommended: false,
  },
  {
    type: "一時金 + 分割の併用",
    condition: "60歳以上・一定条件あり",
    tax: "一時金と分割を組み合わせることが可能。",
    recommended: false,
  },
];

export default function ShoukiboKyosaiPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center gap-2 mb-4">
            <PiggyBank className="w-5 h-5 text-amber-100" />
            <span className="text-amber-100 text-sm font-medium">節税ガイド</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            小規模企業共済で
            <br />
            フリーランスが退職金を作る方法
          </h1>
          <p className="text-amber-50 text-lg">
            掛金全額が所得控除になり、将来は退職金として受け取れる制度です
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 md:py-14 space-y-14">

        {/* 制度概要 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">小規模企業共済とは？</h2>
          <p className="text-gray-600 leading-relaxed">
            小規模企業共済は、国（中小企業基盤整備機構）が運営するフリーランス・個人事業主向けの退職金制度です。
            毎月の掛金が全額所得控除になるため節税効果が非常に高く、
            廃業・解約時には退職金として優遇された税制で受け取れます。
            「節税しながら老後・廃業に備える」一石二鳥の制度です。
          </p>
        </section>

        {/* メリット */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">主なメリット</h2>
          <div className="space-y-3">
            {merits.map((merit, i) => (
              <div key={i} className={`flex items-start gap-4 rounded-xl border p-4 ${merit.highlight ? "bg-amber-50 border-amber-200" : "bg-white border-gray-200"}`}>
                <div className="text-2xl shrink-0">{merit.icon}</div>
                <div>
                  <p className={`font-semibold mb-1 ${merit.highlight ? "text-amber-800" : "text-gray-800"}`}>
                    {merit.title}
                    {merit.highlight && <span className="ml-2 text-xs bg-amber-200 text-amber-800 px-1.5 py-0.5 rounded font-medium">最大のメリット</span>}
                  </p>
                  <p className={`text-sm leading-relaxed ${merit.highlight ? "text-amber-700" : "text-gray-600"}`}>{merit.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 節税シミュレーション */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">節税シミュレーション（月7万円・年84万円の場合）</h2>
          <p className="text-gray-500 text-sm mb-5">月7万円（年間最大）を掛金にした場合の年間節税額の目安</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full min-w-[420px]">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left text-sm font-semibold text-gray-600 px-4 py-3 border-b border-gray-200">事業所得（年）</th>
                  <th className="text-center text-sm font-semibold text-gray-600 px-4 py-3 border-b border-gray-200">所得税率</th>
                  <th className="text-center text-sm font-semibold text-amber-700 px-4 py-3 border-b border-gray-200 bg-amber-50">年間節税額（目安）</th>
                </tr>
              </thead>
              <tbody>
                {simulations.map((sim, i) => {
                  const saving = Math.round(sim.contrib * (sim.taxRate + 0.10));
                  return (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}>
                      <td className="text-sm font-medium text-gray-800 px-4 py-3 border-b border-gray-100">{sim.income}万円</td>
                      <td className="text-sm text-center text-gray-600 px-4 py-3 border-b border-gray-100">{Math.round(sim.taxRate * 100)}%</td>
                      <td className="text-sm text-center font-bold text-amber-600 px-4 py-3 border-b border-gray-100 bg-amber-50/50">
                        約{Math.round(saving / 10000)}万円
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">※ 住民税10%を含む概算値です。実際の節税額は控除の適用順序等によって異なります。</p>
        </section>

        {/* 加入条件・掛金 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">加入条件と掛金</h2>
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-3">
            {[
              { label: "加入対象", value: "個人事業主・フリーランス（常時使用する従業員が20人以下の小規模事業者）" },
              { label: "掛金の範囲", value: "月1,000円〜70,000円（500円単位で設定）" },
              { label: "掛金の変更", value: "いつでも変更可能（増額・減額）" },
              { label: "掛納付方法", value: "月払い・半年払い・年払いが選択可能" },
              { label: "最低加入期間", value: "制限なし（ただし加入6ヶ月未満で解約すると掛金が戻らない）" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 py-2 border-b border-gray-100 last:border-0">
                <span className="text-sm font-semibold text-gray-600 w-32 shrink-0">{item.label}</span>
                <p className="text-sm text-gray-700 leading-relaxed">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-start gap-2 bg-red-50 rounded-xl p-3 border border-red-200">
            <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
            <p className="text-xs text-red-700">
              加入期間が6ヶ月未満で任意解約した場合、掛金が全額返還されません。長期運用を前提に加入してください。
            </p>
          </div>
        </section>

        {/* 受け取り方 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">受け取り方と税優遇</h2>
          <div className="space-y-3">
            {receiveTypes.map((rt, i) => (
              <div key={i} className={`rounded-xl border p-4 ${rt.recommended ? "bg-amber-50 border-amber-200" : "bg-white border-gray-200"}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-sm font-bold px-2.5 py-1 rounded-full ${rt.recommended ? "bg-amber-200 text-amber-800" : "bg-gray-100 text-gray-600"}`}>
                    {rt.type}
                    {rt.recommended && " ★おすすめ"}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-1"><span className="font-medium">条件：</span>{rt.condition}</p>
                <p className="text-sm text-gray-700"><span className="font-medium">税の扱い：</span>{rt.tax}</p>
              </div>
            ))}
          </div>
        </section>

        {/* iDeCoとの比較 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">iDeCoとの比較・どちらを優先すべき？</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full min-w-[480px]">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left text-sm font-semibold text-gray-600 px-4 py-3 border-b border-gray-200 w-1/3">比較項目</th>
                  <th className="text-center text-sm font-semibold text-amber-700 px-4 py-3 border-b border-gray-200 bg-amber-50">小規模企業共済</th>
                  <th className="text-center text-sm font-semibold text-blue-700 px-4 py-3 border-b border-gray-200">iDeCo</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: "月の上限", kyosai: "70,000円", ideco: "68,000円" },
                  { item: "引き出し", kyosai: "廃業・退職時", ideco: "60歳まで原則不可" },
                  { item: "貸付制度", kyosai: "あり（低金利）", ideco: "なし" },
                  { item: "運用", kyosai: "共済が行う", ideco: "自分で選ぶ" },
                  { item: "元本", kyosai: "加入期間次第で変動", ideco: "運用次第" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}>
                    <td className="text-sm font-medium text-gray-700 px-4 py-3 border-b border-gray-100">{row.item}</td>
                    <td className="text-sm text-center text-gray-700 px-4 py-3 border-b border-gray-100 bg-amber-50/40">{row.kyosai}</td>
                    <td className="text-sm text-center text-gray-600 px-4 py-3 border-b border-gray-100">{row.ideco}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex items-start gap-2 bg-emerald-50 rounded-xl p-4 border border-emerald-100">
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <p className="text-sm text-emerald-800 leading-relaxed">
              <strong>両方加入が最大の節税です。</strong>
              どちらを先に始めるか迷ったら、「廃業時の資金が必要」なら小規模企業共済、
              「老後の資産運用をしたい」ならiDeCoを優先しましょう。
            </p>
          </div>
        </section>

        {/* 申し込み方法 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">申し込み方法</h2>
          <div className="space-y-3">
            {[
              { method: "代理店（金融機関・商工会）経由", detail: "銀行・信用金庫・商工会議所が代理店になっています。窓口で申込書を入手して加入できます。" },
              { method: "中小機構の公式サイト", detail: "「小規模企業共済」で検索して中小企業基盤整備機構の公式サイトから資料請求・申込ができます。" },
            ].map((m, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{m.method}</p>
                  <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{m.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-start gap-2 bg-blue-50 rounded-xl p-3 border border-blue-100">
            <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
            <p className="text-xs text-blue-700">加入時に「開業届の控え」など事業を証明する書類が必要です。</p>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/guides/ideco" className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition-all group">
              <PiggyBank className="w-5 h-5 text-blue-500 shrink-0" />
              <div>
                <p className="font-medium text-gray-800 text-sm group-hover:text-blue-700">iDeCoガイド</p>
                <p className="text-xs text-gray-500">老後資産形成の節税制度</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
            </Link>
            <Link href="/tools/teardown" className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-emerald-300 hover:shadow-sm transition-all group">
              <PiggyBank className="w-5 h-5 text-emerald-500 shrink-0" />
              <div>
                <p className="font-medium text-gray-800 text-sm group-hover:text-emerald-700">手取りシミュレーター</p>
                <p className="text-xs text-gray-500">共済加入後の節税額を試算</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
