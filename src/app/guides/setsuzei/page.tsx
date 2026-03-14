import type { Metadata } from "next";
import {
  PiggyBank,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "フリーランスの節税ガイド｜合法的に税金を減らす方法",
  description: "iDeCo・小規模企業共済・青色申告・ふるさと納税など、フリーランスが使える節税方法を解説。",
  alternates: {
    canonical: "https://freenavi.toromonja.com/guides/setsuzei",
  },
};

const impactTable = [
  {
    method: "青色申告65万円控除",
    savings: "最大 約13万円",
    difficulty: 1,
    href: "#aoiro",
    highlight: true,
  },
  {
    method: "小規模企業共済（月7万円）",
    savings: "最大 約17万円",
    difficulty: 1,
    href: "#kyosai",
    highlight: true,
  },
  {
    method: "iDeCo（月6.8万円）",
    savings: "最大 約16万円",
    difficulty: 1,
    href: "#ideco",
    highlight: false,
  },
  {
    method: "ふるさと納税",
    savings: "所得に応じる",
    difficulty: 1,
    href: "#furusato",
    highlight: false,
  },
  {
    method: "経費の最適化",
    savings: "無限大（上限なし）",
    difficulty: 2,
    href: "#keihi",
    highlight: false,
  },
];

const methods = [
  {
    id: "aoiro",
    icon: TrendingUp,
    title: "青色申告65万円控除",
    tag: "最もカンタン・即効性あり",
    tagColor: "emerald",
    savings: "最大 約13万円の節税",
    steps: [
      "開業届と一緒に「青色申告承認申請書」を税務署に提出する",
      "会計ソフト（freee・マネーフォワード）で帳簿をつける",
      "e-Tax（電子申告）で確定申告する",
    ],
    notes: [
      "e-Tax申告が必須（紙提出は55万円控除）",
      "申請は開業から2ヶ月以内または前年の3月15日まで",
      "複式簿記が必要（会計ソフトで自動化できる）",
    ],
    detail:
      "フリーランスが最初にやるべき節税策です。65万円の所得控除により、税率20%の方なら年間約13万円の節税になります。会計ソフトを使えば帳簿も難しくなく、費用対効果が最も高い節税法です。",
  },
  {
    id: "kyosai",
    icon: PiggyBank,
    title: "小規模企業共済",
    tag: "退職金代わりにもなる",
    tagColor: "amber",
    savings: "最大 約17万円の節税（掛金全額が控除）",
    steps: [
      "中小機構のウェブサイトで資料請求または申込書を取り寄せる",
      "掛金を月500円〜7万円の範囲で設定する",
      "確定申告で「小規模企業共済等掛金控除」を申告する",
    ],
    notes: [
      "掛金は全額所得控除（年間最大84万円）",
      "廃業・退職時に退職金として受け取れる",
      "貸付制度（低金利で借入できる）も利用可能",
      "途中解約は元本割れの可能性あり（長期運用が前提）",
    ],
    detail:
      "フリーランスに退職金はありませんが、小規模企業共済はその代わりになる制度です。掛金が全額所得控除になるため、月7万円（年84万円）を掛けると税率20%の方で年間約17万円の節税になります。老後の資金形成と節税を同時に実現できます。",
  },
  {
    id: "ideco",
    icon: TrendingUp,
    title: "iDeCo（個人型確定拠出年金）",
    tag: "老後資金と節税を同時に",
    tagColor: "blue",
    savings: "最大 約16万円の節税（掛金全額が控除）",
    steps: [
      "銀行・証券会社でiDeCo口座を開設する（金融機関を選ぶ）",
      "掛金を月5,000円〜6.8万円の範囲で設定する（フリーランスは月最大6.8万円）",
      "確定申告で「小規模企業共済等掛金控除」を申告する",
    ],
    notes: [
      "フリーランス（国民年金第1号被保険者）の上限：月6.8万円",
      "60歳まで原則引き出し不可",
      "運用益も非課税",
      "受取時に退職所得控除・公的年金控除が使える",
    ],
    detail:
      "iDeCoは老後の年金を自分で積み立てながら、掛金が全額所得控除になる制度です。月6.8万円（年81.6万円）を掛けると税率20%の方で年間約16万円の節税になります。60歳まで引き出せない制約がありますが、長期的な節税・資産形成に非常に有効です。",
  },
  {
    id: "furusato",
    icon: Zap,
    title: "ふるさと納税",
    tag: "返礼品がもらえてお得",
    tagColor: "rose",
    savings: "住民税・所得税の一部が控除（2,000円の自己負担のみ）",
    steps: [
      "ふるさと納税サイト（さとふる・ふるさとチョイスなど）で上限額を確認する",
      "上限額の範囲で寄附して返礼品を受け取る",
      "確定申告で「寄附金控除」を申告する（フリーランスはワンストップ特例より確定申告が確実）",
    ],
    notes: [
      "自己負担は一律2,000円（上限内なら何件でも）",
      "フリーランスは確定申告が必要（ワンストップ特例は会社員向け）",
      "上限額は所得・家族構成によって変わる",
      "返礼品は寄附額の3割以内が目安",
    ],
    detail:
      "ふるさと納税は地方自治体への寄附で、寄附額から2,000円を引いた金額が住民税・所得税から控除されます。実質2,000円の負担で地域の特産品をもらえるため、確定申告するフリーランスなら必ず活用したい制度です。",
  },
  {
    id: "keihi",
    icon: TrendingUp,
    title: "経費の最適化",
    tag: "合法的に所得を減らす",
    tagColor: "gray",
    savings: "経費が増えるほど節税（上限なし）",
    steps: [
      "事業に関連する支出はすべてレシート・領収書を保管する",
      "自宅兼事務所の家賃・光熱費は「按分」で経費計上する",
      "会計ソフトに日々入力して漏れを防ぐ",
    ],
    notes: [
      "按分の目安：仕事で使う面積・時間の割合で計算",
      "スマホ・PC・書籍・セミナー費なども対象",
      "プライベートとの兼用は合理的な割合で按分",
      "過剰な経費計上は税務調査のリスクがある",
    ],
    detail:
      "経費を正しく計上することで課税所得を合法的に減らせます。事業に必要な支出であれば経費になります。自宅兼事務所の家賃（仕事スペースの割合分）、通信費、書籍・勉強代、PCなどは経費計上できます。判断に迷う場合は税理士に相談しましょう。",
  },
];

const priorities = [
  {
    order: 1,
    title: "青色申告の申請をする",
    reason: "手間が少なく・即効性があり・無料でできる最大の節税",
    urgent: true,
  },
  {
    order: 2,
    title: "帳簿ソフトを導入して経費を正しく記録する",
    reason: "経費漏れをなくすだけで数万円の節税になることも",
    urgent: false,
  },
  {
    order: 3,
    title: "ふるさと納税をする（確定申告で一緒に申告）",
    reason: "実質2,000円の負担で節税になる。やらないと損",
    urgent: false,
  },
  {
    order: 4,
    title: "iDeCoまたは小規模企業共済を検討する",
    reason: "長期的な節税と資産形成を同時に実現",
    urgent: false,
  },
];

const difficultyStars = (level: number) =>
  Array.from({ length: 3 }, (_, i) => (
    <Star
      key={i}
      className={`w-3 h-3 ${i < level ? "fill-amber-400 text-amber-400" : "text-gray-200"}`}
    />
  ));

const tagColors: Record<string, string> = {
  emerald: "bg-emerald-100 text-emerald-700",
  amber: "bg-amber-100 text-amber-700",
  blue: "bg-blue-100 text-blue-700",
  rose: "bg-rose-100 text-rose-700",
  gray: "bg-gray-100 text-gray-600",
};

const headerColors: Record<string, string> = {
  emerald: "bg-emerald-50 border-emerald-200",
  amber: "bg-amber-50 border-amber-200",
  blue: "bg-blue-50 border-blue-200",
  rose: "bg-rose-50 border-rose-200",
  gray: "bg-gray-50 border-gray-200",
};

export default function SetsuzeiPage() {
  return (
    <div className="min-h-screen">
      {/* ページヘッダー */}
      <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center gap-2 mb-4">
            <PiggyBank className="w-5 h-5 text-amber-100" />
            <span className="text-amber-100 text-sm font-medium">節税ガイド</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            フリーランスの節税ガイド
            <br />
            <span className="text-amber-100">合法的に税金を減らす方法</span>
          </h1>
          <p className="text-amber-50 text-lg">
            効果の大きい順に、やさしく解説します
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 md:py-14 space-y-14">
        {/* 節税インパクト一覧表 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            節税インパクト一覧表
          </h2>
          <p className="text-gray-500 text-sm mb-5">
            効果の大きい順に並べています。まず上から順番に検討しましょう
          </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left text-sm font-semibold text-gray-600 px-4 py-3 border-b border-gray-200">
                    節税方法
                  </th>
                  <th className="text-center text-sm font-semibold text-gray-600 px-4 py-3 border-b border-gray-200">
                    年間節税額（目安）
                  </th>
                  <th className="text-center text-sm font-semibold text-gray-600 px-4 py-3 border-b border-gray-200">
                    難易度
                  </th>
                  <th className="text-center text-sm font-semibold text-gray-600 px-4 py-3 border-b border-gray-200">
                    詳細
                  </th>
                </tr>
              </thead>
              <tbody>
                {impactTable.map((row, i) => (
                  <tr
                    key={i}
                    className={`${row.highlight ? "bg-amber-50/40" : i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}
                  >
                    <td className="px-4 py-3.5 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        {row.highlight && (
                          <span className="text-xs bg-amber-100 text-amber-700 font-semibold px-1.5 py-0.5 rounded">
                            おすすめ
                          </span>
                        )}
                        <span className="font-medium text-sm text-gray-800">{row.method}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 border-b border-gray-100 text-center">
                      <span className="text-sm font-semibold text-emerald-600">{row.savings}</span>
                    </td>
                    <td className="px-4 py-3.5 border-b border-gray-100">
                      <div className="flex items-center justify-center gap-0.5">
                        {difficultyStars(row.difficulty)}
                      </div>
                    </td>
                    <td className="px-4 py-3.5 border-b border-gray-100 text-center">
                      <a
                        href={row.href}
                        className="text-xs text-emerald-600 hover:text-emerald-700 font-medium underline underline-offset-2"
                      >
                        詳しく見る
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-400 mt-3">
            ※ 節税額は所得税率20%・住民税10%として試算した目安です。実際は所得金額により異なります。
          </p>
        </section>

        {/* 各節税方法の詳細 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            各節税方法の詳細
          </h2>

          <div className="space-y-6">
            {methods.map((method) => {
              const Icon = method.icon;
              return (
                <div
                  key={method.id}
                  id={method.id}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm scroll-mt-20"
                >
                  {/* ヘッダー */}
                  <div className={`px-5 py-4 border-b ${headerColors[method.tagColor]}`}>
                    <div className="flex items-start gap-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${tagColors[method.tagColor].replace("text-", "bg-").replace("-700", "-100").replace("-600", "-100")}`}>
                        <Icon className={`w-4 h-4 ${tagColors[method.tagColor].split(" ")[1]}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-bold text-gray-900 text-lg">{method.title}</h3>
                          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${tagColors[method.tagColor]}`}>
                            {method.tag}
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-emerald-600">{method.savings}</p>
                      </div>
                    </div>
                  </div>

                  {/* 本文 */}
                  <div className="p-5">
                    <p className="text-sm text-gray-600 leading-relaxed mb-5">{method.detail}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 手順 */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-3">実践手順</h4>
                        <div className="space-y-2">
                          {method.steps.map((step, i) => (
                            <div key={i} className="flex items-start gap-2.5">
                              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                                {i + 1}
                              </div>
                              <p className="text-sm text-gray-600 leading-relaxed">{step}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* 注意事項 */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-3">注意事項</h4>
                        <div className="space-y-1.5">
                          {method.notes.map((note, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                              <p className="text-xs text-gray-500 leading-relaxed">{note}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* まず何をすべき？優先順位ガイド */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            まず何をすべき？優先順位ガイド
          </h2>
          <p className="text-gray-500 text-sm mb-5">
            全部一度にやろうとせず、優先度の高いものから始めましょう
          </p>

          <div className="space-y-3">
            {priorities.map((p) => (
              <div
                key={p.order}
                className={`flex items-start gap-4 rounded-xl border px-4 py-4 ${p.urgent ? "bg-amber-50 border-amber-200" : "bg-white border-gray-200"}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${p.urgent ? "bg-amber-400 text-white" : "bg-gray-100 text-gray-600"}`}
                >
                  {p.order}
                </div>
                <div>
                  <p className={`font-semibold mb-0.5 ${p.urgent ? "text-amber-800" : "text-gray-800"}`}>
                    {p.title}
                    {p.urgent && (
                      <span className="ml-2 text-xs bg-amber-200 text-amber-800 px-1.5 py-0.5 rounded font-medium">
                        最優先
                      </span>
                    )}
                  </p>
                  <p className={`text-sm ${p.urgent ? "text-amber-700" : "text-gray-500"}`}>
                    {p.reason}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-start gap-2 bg-gray-50 rounded-xl p-4 border border-gray-200">
            <AlertCircle className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
            <p className="text-sm text-gray-500 leading-relaxed">
              節税に積極的に取り組む一方、税法に違反した脱税は絶対に避けてください。
              すべての節税方法は合法的な制度の活用です。不明な点は税理士に相談しましょう。
            </p>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">
                節税前後の手取りを比較したい
              </h3>
              <p className="text-amber-50 text-sm">
                青色申告・iDeCoありなしで手取りがどう変わるか計算できます
              </p>
            </div>
            <Link
              href="/tools/teardown"
              className="inline-flex items-center gap-2 bg-white text-amber-700 font-bold px-6 py-3 rounded-xl hover:bg-amber-50 transition-colors whitespace-nowrap shrink-0"
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
