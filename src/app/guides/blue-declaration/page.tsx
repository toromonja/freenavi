import type { Metadata } from "next";
import Link from "next/link";
import { FileText, CheckCircle, AlertTriangle, ArrowRight, Star } from "lucide-react";
import BlueDeclarationAccordion from "./BlueDeclarationAccordion";

export const metadata: Metadata = {
  title: "青色申告とは？65万円控除の受け方",
  description: "青色申告のメリット・白色との違い・申請方法を解説。e-Taxで65万円控除を受けよう。",
  alternates: {
    canonical: "https://freenavi.toromonja.com/guides/blue-declaration",
  },
};

const merits = [
  {
    title: "最大65万円の特別控除",
    description:
      "e-Taxで申告すると65万円、紙申告でも55万円が所得から控除されます。税率20%なら年間最大13万円の節税効果。",
    highlight: true,
  },
  {
    title: "赤字を3年間繰り越せる",
    description:
      "事業が赤字になった年の損失を翌年以降3年間繰り越し、黒字と相殺できます。開業初年度などに特に効果的。",
    highlight: false,
  },
  {
    title: "青色事業専従者給与が認められる",
    description:
      "家族を従業員として雇用している場合、その給与を全額経費にできます（白色は上限50万円）。",
    highlight: false,
  },
  {
    title: "少額減価償却資産の特例",
    description:
      "30万円未満の資産を一括で経費計上できます（白色は10万円未満）。PC・カメラなど購入時に効果大。",
    highlight: false,
  },
];

const comparisonRows = [
  { item: "特別控除", blue65: "65万円（e-Tax）/ 55万円（紙）", blue10: "10万円", white: "なし" },
  { item: "帳簿の種類", blue65: "複式簿記", blue10: "簡易簿記", white: "簡易な記録" },
  { item: "赤字の繰越", blue65: "3年間可", blue10: "3年間可", white: "不可" },
  { item: "少額資産一括計上", blue65: "30万円未満", blue10: "10万円未満", white: "10万円未満" },
  { item: "専従者給与", blue65: "全額経費", blue10: "全額経費", white: "上限50万円" },
  { item: "手続きの手間", blue65: "やや多い（ソフトで解決）", blue10: "少ない", white: "最も少ない" },
];

const softwareList = [
  {
    name: "freee",
    price: "月980円〜",
    features: ["銀行・カード自動連携", "スマホアプリ充実", "e-Tax連携が簡単"],
    bestFor: "初心者・スマホ派",
  },
  {
    name: "マネーフォワード クラウド確定申告",
    price: "月1,280円〜",
    features: ["家計簿アプリ連携", "見やすいダッシュボード", "会計知識ゼロでOK"],
    bestFor: "マネフォユーザー",
  },
  {
    name: "やよいの青色申告 オンライン",
    price: "初年度無料〜月1,100円",
    features: ["国内シェアNo.1", "サポートが充実", "クラウド対応"],
    bestFor: "安定・実績を重視する人",
  },
];

const steps = [
  {
    number: 1,
    title: "開業届を準備する",
    description: "「個人事業の開業・廃業等届出書」を国税庁のサイトからダウンロードするか、e-Taxから作成します。",
  },
  {
    number: 2,
    title: "青色申告承認申請書を同時に準備する",
    description: "「所得税の青色申告承認申請書」も同様に準備します。開業届と同じタイミングで提出できます。",
  },
  {
    number: 3,
    title: "税務署に提出（窓口・郵送・e-Tax）",
    description: "開業日から2ヶ月以内に管轄の税務署に提出します。e-Taxならマイナンバーカードで自宅から完結。",
  },
  {
    number: 4,
    title: "会計ソフトで帳簿をつける",
    description: "申請後はfreeeやマネーフォワードで日々の取引を記録します。銀行口座・カードと連携すれば自動化できます。",
  },
  {
    number: 5,
    title: "e-Taxで確定申告する",
    description: "翌年2〜3月の確定申告でe-Tax（電子申告）を選ぶと65万円控除が適用されます。",
  },
];

export default function BlueDeclarationPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-emerald-200" />
            <span className="text-emerald-200 text-sm font-medium">確定申告ガイド</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            青色申告とは？
            <br />
            白色との違いと65万円控除の受け方
          </h1>
          <p className="text-emerald-100 text-lg">
            フリーランスが必ず知っておきたい、最大の節税制度を解説します
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 md:py-14 space-y-14">

        {/* メリット一覧 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">青色申告のメリット</h2>
          <p className="text-gray-500 text-sm mb-6">白色申告と比べて、青色申告には多くの特典があります</p>
          <div className="space-y-3">
            {merits.map((merit, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 rounded-xl border p-4 ${merit.highlight ? "bg-emerald-50 border-emerald-200" : "bg-white border-gray-200"}`}
              >
                <CheckCircle className={`w-5 h-5 shrink-0 mt-0.5 ${merit.highlight ? "text-emerald-500" : "text-gray-400"}`} />
                <div>
                  <p className={`font-semibold mb-1 ${merit.highlight ? "text-emerald-800" : "text-gray-800"}`}>
                    {merit.title}
                    {merit.highlight && (
                      <span className="ml-2 text-xs bg-emerald-200 text-emerald-800 px-2 py-0.5 rounded-full font-medium">
                        最大の節税効果
                      </span>
                    )}
                  </p>
                  <p className={`text-sm leading-relaxed ${merit.highlight ? "text-emerald-700" : "text-gray-600"}`}>
                    {merit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 白色 vs 青色 比較表 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">白色申告 vs 青色申告</h2>
          <p className="text-gray-500 text-sm mb-6">ほとんどの場合、青色申告（65万円控除）が圧倒的にお得です</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full min-w-[560px]">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left text-sm font-semibold text-gray-600 px-4 py-3 border-b border-gray-200 w-1/4">比較項目</th>
                  <th className="text-center text-sm font-semibold text-emerald-700 px-4 py-3 border-b border-gray-200 bg-emerald-50">青色（65万円）</th>
                  <th className="text-center text-sm font-semibold text-blue-700 px-4 py-3 border-b border-gray-200">青色（10万円）</th>
                  <th className="text-center text-sm font-semibold text-gray-500 px-4 py-3 border-b border-gray-200">白色申告</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}>
                    <td className="text-sm font-medium text-gray-700 px-4 py-3 border-b border-gray-100">{row.item}</td>
                    <td className="text-sm text-center text-gray-700 px-4 py-3 border-b border-gray-100 bg-emerald-50/50">{row.blue65}</td>
                    <td className="text-sm text-center text-gray-600 px-4 py-3 border-b border-gray-100">{row.blue10}</td>
                    <td className="text-sm text-center text-gray-500 px-4 py-3 border-b border-gray-100">{row.white}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 65万円控除の条件 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">65万円控除を受けるための条件</h2>
          <p className="text-gray-500 text-sm mb-5">2つの条件を満たすだけでOKです</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            {[
              {
                number: "条件1",
                title: "複式簿記で帳簿をつける",
                detail: "会計ソフトを使えば自動で複式簿記の帳簿が作成されます。手書きは現実的ではないため、ソフトの利用をおすすめします。",
                color: "emerald",
              },
              {
                number: "条件2",
                title: "e-Tax（電子申告）で申告する",
                detail: "紙で申告すると55万円控除になります。e-Taxはマイナンバーカード＋スマートフォンで自宅から申告可能です。",
                color: "blue",
              },
            ].map((cond) => (
              <div key={cond.number} className={`rounded-xl border-2 p-5 ${cond.color === "emerald" ? "bg-emerald-50 border-emerald-200" : "bg-blue-50 border-blue-200"}`}>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full mb-2 inline-block ${cond.color === "emerald" ? "bg-emerald-200 text-emerald-800" : "bg-blue-200 text-blue-800"}`}>
                  {cond.number}
                </span>
                <h3 className={`font-bold mb-2 ${cond.color === "emerald" ? "text-emerald-800" : "text-blue-800"}`}>{cond.title}</h3>
                <p className={`text-sm leading-relaxed ${cond.color === "emerald" ? "text-emerald-700" : "text-blue-700"}`}>{cond.detail}</p>
              </div>
            ))}
          </div>
          <div className="flex items-start gap-2 bg-amber-50 rounded-xl p-4 border border-amber-100">
            <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800 leading-relaxed">
              e-Taxを使っていても、紙の決算書・収支内訳書を添付した場合は55万円控除になります。
              e-Taxで送信する際は「貸借対照表」「損益計算書」もオンラインで提出してください。
            </p>
          </div>
        </section>

        {/* 申請手順 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">青色申告を始める手順</h2>
          <p className="text-gray-500 text-sm mb-6">開業届と同時に申請するのが最もスムーズです</p>
          <div className="space-y-3">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">{step.number}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-start gap-2 bg-red-50 rounded-xl p-4 border border-red-200">
            <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
            <p className="text-sm text-red-700 leading-relaxed">
              <strong>開業から2ヶ月以内</strong>に青色申告承認申請書を提出しないと、その年は白色申告になります。
              期限を過ぎると翌年分からしか青色申告が使えません。
            </p>
          </div>
        </section>

        {/* 帳簿ソフト紹介 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">おすすめの帳簿ソフト</h2>
          <p className="text-gray-500 text-sm mb-6">どれを使っても青色申告65万円控除に対応しています</p>
          <div className="space-y-3">
            {softwareList.map((sw, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900">{sw.name}</h3>
                    <p className="text-sm text-gray-500">{sw.price}</p>
                  </div>
                  <span className="shrink-0 text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">
                    {sw.bestFor}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {sw.features.map((f, j) => (
                    <span key={j} className="flex items-center gap-1 text-xs text-gray-600 bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">よくある質問</h2>
          <p className="text-gray-500 text-sm mb-6">青色申告でよく疑問になることをまとめました</p>
          <BlueDeclarationAccordion />
        </section>

        {/* CTA */}
        <section>
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">青色申告でどれだけ節税できる？</h3>
              <p className="text-emerald-100 text-sm">手取りシミュレーターで実際に計算してみましょう</p>
            </div>
            <Link
              href="/tools/teardown"
              className="inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors whitespace-nowrap shrink-0"
            >
              手取りを計算する
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
