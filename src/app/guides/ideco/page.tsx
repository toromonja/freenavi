import type { Metadata } from "next";
import Link from "next/link";
import { PiggyBank, CheckCircle, AlertTriangle, ArrowRight, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "フリーランスのiDeCo完全ガイド",
  description: "フリーランスがiDeCoで節税しながら老後に備える方法。上限額・始め方・デメリットも解説。",
  alternates: {
    canonical: "https://freenavi.toromonja.com/guides/ideco",
  },
};

const taxBenefits = [
  {
    number: 1,
    title: "掛金が全額 所得控除",
    detail: "毎月の掛金が全額「小規模企業共済等掛金控除」として所得から引かれます。所得税・住民税が両方下がります。",
    icon: "💰",
  },
  {
    number: 2,
    title: "運用益が非課税",
    detail: "通常の投資では運用益に約20%課税されますが、iDeCo口座内の運用益は非課税です。長期運用で大きな差になります。",
    icon: "📈",
  },
  {
    number: 3,
    title: "受取時にも税優遇",
    detail: "一時金で受け取ると「退職所得控除」、年金形式だと「公的年金等控除」が適用されます。",
    icon: "🎁",
  },
];

const simulations = [
  {
    income: 300,
    taxRate: 0.20,
    maxContrib: 816000,
    annualSaving: Math.round(816000 * 0.20 + 816000 * 0.10),
  },
  {
    income: 500,
    taxRate: 0.20,
    maxContrib: 816000,
    annualSaving: Math.round(816000 * 0.20 + 816000 * 0.10),
  },
  {
    income: 800,
    taxRate: 0.23,
    maxContrib: 816000,
    annualSaving: Math.round(816000 * 0.23 + 816000 * 0.10),
  },
];

const setupSteps = [
  {
    step: 1,
    title: "金融機関を選ぶ",
    detail: "SBI証券・楽天証券・マネックス証券などネット証券がおすすめ。手数料が低く、運用商品が豊富です。",
  },
  {
    step: 2,
    title: "口座開設を申し込む",
    detail: "選んだ金融機関のウェブサイトから申し込みます。基礎年金番号・マイナンバーが必要。書類が届くまで1〜2ヶ月かかります。",
  },
  {
    step: 3,
    title: "掛金額を設定する",
    detail: "フリーランスの上限は月68,000円。最低5,000円から1,000円単位で設定できます。途中で変更も可能（年1回）。",
  },
  {
    step: 4,
    title: "運用商品を選ぶ",
    detail: "インデックスファンド（全世界株・S&P500など）がコストが低くおすすめ。最初は1本に絞るとシンプルです。",
  },
  {
    step: 5,
    title: "確定申告で控除を申告する",
    detail: "毎年送られてくる「小規模企業共済等掛金払込証明書」を使って確定申告で控除を申告します。",
  },
];

const demerits = [
  { title: "60歳まで原則引き出しできない", detail: "急な資金需要には対応できません。生活費の6ヶ月分程度の貯金を確保してから始めましょう。" },
  { title: "口座手数料がかかる", detail: "国民年金基金連合会への手数料（月105円）が必ず発生します。金融機関の手数料は機関によって異なります。" },
  { title: "元本割れのリスクがある", detail: "運用商品によっては元本割れします。元本確保型商品もありますが利回りが低い傾向があります。" },
  { title: "受取時に税金がかかる", detail: "受取時に退職所得控除・公的年金等控除が使えますが、大きな金額になると課税される場合があります。" },
];

export default function IDeCoPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center gap-2 mb-4">
            <PiggyBank className="w-5 h-5 text-blue-200" />
            <span className="text-blue-200 text-sm font-medium">節税ガイド</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            フリーランスのiDeCo完全ガイド
            <br />
            節税しながら老後に備える
          </h1>
          <p className="text-blue-100 text-lg">
            掛金全額が所得控除になる、フリーランス最強の節税制度のひとつです
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 md:py-14 space-y-14">

        {/* iDeCoとは */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">iDeCoとは？3つの税優遇</h2>
          <p className="text-gray-500 text-sm mb-6">
            iDeCo（個人型確定拠出年金）は、自分で積み立てた掛金を運用して老後に受け取る制度です。
            節税効果が非常に大きく、フリーランスには特に有利な制度です。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {taxBenefits.map((benefit) => (
              <div key={benefit.number} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm text-center">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <div className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full inline-block mb-2">
                  税優遇 {benefit.number}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{benefit.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{benefit.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 上限額 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">フリーランスのiDeCo上限額</h2>
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-5 text-center">
            <p className="text-blue-600 text-sm font-medium mb-2">国民年金第1号被保険者（フリーランス・自営業）</p>
            <div className="flex items-center justify-center gap-6 mb-3">
              <div>
                <p className="text-3xl md:text-4xl font-black text-blue-700">68,000円</p>
                <p className="text-blue-500 text-sm">月額上限</p>
              </div>
              <div className="text-blue-300 text-2xl">=</div>
              <div>
                <p className="text-3xl md:text-4xl font-black text-blue-700">816,000円</p>
                <p className="text-blue-500 text-sm">年額上限</p>
              </div>
            </div>
            <p className="text-xs text-blue-600">最低掛金：月5,000円。1,000円単位で設定可能。</p>
          </div>
          <div className="mt-3 flex items-start gap-2 bg-amber-50 rounded-xl p-3 border border-amber-100">
            <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-700">小規模企業共済に加入している場合、iDeCoと合算した上限はそれぞれ独立しています（両方で最大月13.8万円まで所得控除できます）。</p>
          </div>
        </section>

        {/* 節税シミュレーション */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">節税シミュレーション（年間最大掛金の場合）</h2>
          <p className="text-gray-500 text-sm mb-5">月68,000円（年816,000円）を掛金にした場合の年間節税額の目安</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full min-w-[420px]">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left text-sm font-semibold text-gray-600 px-4 py-3 border-b border-gray-200">事業所得（年）</th>
                  <th className="text-center text-sm font-semibold text-gray-600 px-4 py-3 border-b border-gray-200">所得税率</th>
                  <th className="text-center text-sm font-semibold text-emerald-700 px-4 py-3 border-b border-gray-200 bg-emerald-50">年間節税額（目安）</th>
                </tr>
              </thead>
              <tbody>
                {simulations.map((sim, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}>
                    <td className="text-sm font-medium text-gray-800 px-4 py-3 border-b border-gray-100">{sim.income}万円</td>
                    <td className="text-sm text-center text-gray-600 px-4 py-3 border-b border-gray-100">{Math.round(sim.taxRate * 100)}%</td>
                    <td className="text-sm text-center font-bold text-emerald-600 px-4 py-3 border-b border-gray-100 bg-emerald-50/50">
                      約{Math.round(sim.annualSaving / 10000)}万円
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">※ 所得税率は課税所得による。住民税10%を含む概算値です。</p>
        </section>

        {/* 始め方 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">iDeCoの始め方</h2>
          <p className="text-gray-500 text-sm mb-6">申込みから運用開始まで1〜2ヶ月かかります。早めに動くのが吉です</p>
          <div className="space-y-3">
            {setupSteps.map((s) => (
              <div key={s.step} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">{s.step}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* デメリット */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">注意点・デメリット</h2>
          <p className="text-gray-500 text-sm mb-5">始める前に必ず確認してください</p>
          <div className="space-y-2">
            {demerits.map((d, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{d.title}</p>
                  <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{d.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 小規模企業共済との比較 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">iDeCo vs 小規模企業共済、どちらを優先すべき？</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full min-w-[480px]">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left text-sm font-semibold text-gray-600 px-4 py-3 border-b border-gray-200 w-1/3">比較項目</th>
                  <th className="text-center text-sm font-semibold text-blue-700 px-4 py-3 border-b border-gray-200 bg-blue-50">iDeCo</th>
                  <th className="text-center text-sm font-semibold text-amber-700 px-4 py-3 border-b border-gray-200">小規模企業共済</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: "月の上限", ideco: "68,000円", kyosai: "70,000円" },
                  { item: "所得控除", ideco: "全額控除", kyosai: "全額控除" },
                  { item: "引き出し", ideco: "60歳まで不可", kyosai: "廃業・退職時に可能" },
                  { item: "運用", ideco: "自分で運用", kyosai: "共済が運用（元本保証なし）" },
                  { item: "貸付制度", ideco: "なし", kyosai: "あり（低金利）" },
                  { item: "おすすめの人", ideco: "老後資産を自分で運用したい人", kyosai: "廃業時の退職金を作りたい人" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}>
                    <td className="text-sm font-medium text-gray-700 px-4 py-3 border-b border-gray-100">{row.item}</td>
                    <td className="text-sm text-center text-gray-700 px-4 py-3 border-b border-gray-100 bg-blue-50/40">{row.ideco}</td>
                    <td className="text-sm text-center text-gray-600 px-4 py-3 border-b border-gray-100">{row.kyosai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex items-start gap-2 bg-emerald-50 rounded-xl p-4 border border-emerald-100">
            <TrendingUp className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <p className="text-sm text-emerald-800 leading-relaxed">
              <strong>両方に加入するのが最もお得です。</strong>
              iDeCoと小規模企業共済は制度が独立しているため、合算すると月最大13.8万円（年165.6万円）の所得控除が受けられます。
              余裕があれば両方に加入することをおすすめします。
            </p>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/guides/shoukibo-kyosai" className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-amber-300 hover:shadow-sm transition-all group">
              <PiggyBank className="w-5 h-5 text-amber-500 shrink-0" />
              <div>
                <p className="font-medium text-gray-800 text-sm group-hover:text-amber-700">小規模企業共済ガイド</p>
                <p className="text-xs text-gray-500">退職金代わりの節税制度</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
            </Link>
            <Link href="/tools/teardown" className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-emerald-300 hover:shadow-sm transition-all group">
              <PiggyBank className="w-5 h-5 text-emerald-500 shrink-0" />
              <div>
                <p className="font-medium text-gray-800 text-sm group-hover:text-emerald-700">手取りシミュレーター</p>
                <p className="text-xs text-gray-500">iDeCo加入後の節税額を試算</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
