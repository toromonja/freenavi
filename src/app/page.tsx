import Link from "next/link";
import {
  FileText,
  Shield,
  Briefcase,
  PiggyBank,
  Calculator,
  ArrowRight,
  AlertCircle,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

// カテゴリナビゲーション
const categories = [
  {
    icon: FileText,
    label: "税金",
    href: "/tax",
    description: "確定申告・所得税・消費税の基礎から実践まで",
    colorClass: "text-blue-600",
    iconBg: "bg-blue-100",
    border: "border-blue-100",
  },
  {
    icon: Shield,
    label: "社会保険",
    href: "/insurance",
    description: "国民健康保険・国民年金・任意継続の選び方",
    colorClass: "text-purple-600",
    iconBg: "bg-purple-100",
    border: "border-purple-100",
  },
  {
    icon: Briefcase,
    label: "開業",
    href: "/startup",
    description: "開業届の出し方・青色申告のはじめ方",
    colorClass: "text-orange-600",
    iconBg: "bg-orange-100",
    border: "border-orange-100",
  },
  {
    icon: PiggyBank,
    label: "節税",
    href: "/savings",
    description: "経費・小規模企業共済・iDeCoで手取りを増やす",
    colorClass: "text-emerald-600",
    iconBg: "bg-emerald-100",
    border: "border-emerald-100",
  },
  {
    icon: Calculator,
    label: "計算ツール",
    href: "/tools",
    description: "手取り・インボイス・国民年金を無料で計算",
    colorClass: "text-rose-600",
    iconBg: "bg-rose-100",
    border: "border-rose-100",
  },
];

// よくある悩みカード
const worries = [
  { q: "確定申告って何をすればいいの？", href: "/guides/kakutei-shinkoku" },
  { q: "インボイス、登録すべき？損する？", href: "/guides/invoice" },
  { q: "国民健康保険が高すぎる…", href: "/insurance/kenko-hoken" },
  { q: "節税って何をすればいいかわからない", href: "/savings" },
  { q: "開業届ってどこに出すの？", href: "/startup" },
  { q: "住民税の請求が突然来てびっくりした", href: "/tax/jumin-zei" },
  { q: "フリーランスの健康保険、どれが得？", href: "/insurance/kenko-hoken" },
  { q: "経費にできるものって何？", href: "/savings/keihi" },
  { q: "青色申告と白色申告の違いは？", href: "/tax/blue-white" },
  { q: "iDeCoって本当に節税になる？", href: "/savings/ideco" },
  { q: "副業収入の確定申告ってどうするの？", href: "/tax/fukugyo" },
  { q: "消費税の納税義務、いつから始まる？", href: "/tax/shohi-zei" },
];

// 2026年重要トピック
const recentTopics = [
  {
    tag: "2026年改正",
    title: "定額減税の継続・拡充について",
    href: "/tax/teigaku-genzei-2026",
    date: "2026-03-01",
  },
  {
    tag: "インボイス",
    title: "免税事業者からの仕入税額控除（2割特例）の経過措置",
    href: "/tax/invoice-keikasochi",
    date: "2026-02-15",
  },
  {
    tag: "社会保険",
    title: "2026年度 国民健康保険料の上限額引き上げ",
    href: "/insurance/kokumin-hoken-2026",
    date: "2026-02-01",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-emerald-200 text-sm font-medium mb-4 tracking-wide uppercase">
              フリーランス向け 税務・制度ガイド
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              フリーランスの税金・制度、
              <br />
              <span className="text-emerald-200">全部わかる</span>
            </h1>
            <p className="text-emerald-100 text-lg md:text-xl leading-relaxed mb-8">
              確定申告からインボイス、社会保険、節税まで。
              むずかしい税務の話を、やさしい言葉で解説します。
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/tax/kakutei-shinkoku"
                className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 font-semibold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors"
              >
                確定申告ガイドを読む
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/tools/teardown"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 border border-emerald-400 text-white font-semibold px-6 py-3 rounded-xl hover:bg-emerald-400 transition-colors"
              >
                <Calculator className="w-4 h-4" />
                手取りを計算する
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* よくある悩みセクション */}
      <section className="py-16 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              こんなお悩み、ありませんか？
            </h2>
            <p className="text-gray-500">気になるテーマからすぐに調べられます</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {worries.map((worry) => (
              <Link
                key={worry.href}
                href={worry.href}
                className="flex items-center gap-3 bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 rounded-xl px-4 py-4 transition-all group"
              >
                <AlertCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-emerald-700">
                  {worry.q}
                </span>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-500 ml-auto shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* カテゴリナビゲーション */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              テーマから探す
            </h2>
            <p className="text-gray-500">知りたいカテゴリを選んでください</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className={`flex items-start gap-4 p-5 rounded-2xl border bg-white hover:shadow-md transition-all group ${cat.border}`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${cat.iconBg} ${cat.colorClass}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{cat.label}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 ml-auto shrink-0 mt-1" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 計算ツールCTAセクション */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Calculator className="w-5 h-5 text-emerald-200" />
                <span className="text-emerald-200 text-sm font-medium">無料ツール</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                今すぐ使える計算ツール
              </h2>
              <p className="text-emerald-100 leading-relaxed">
                年収を入力するだけで、手取り・税金・社会保険料を
                <br className="hidden md:block" />
                シミュレーションできます。登録不要・完全無料。
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <Link
                href="/tools/teardown"
                className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 font-bold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors whitespace-nowrap"
              >
                <Calculator className="w-4 h-4" />
                📊 手取りを計算する
              </Link>
              <Link
                href="/tools/invoice"
                className="inline-flex items-center justify-center gap-2 bg-emerald-400 text-white font-medium px-6 py-3 rounded-xl hover:bg-emerald-300 transition-colors whitespace-nowrap"
              >
                インボイス影響を試算する
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 最新の制度変更 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                2026年 重要トピック
              </h2>
              <p className="text-gray-500 text-sm">最新の制度改正・変更点をまとめています</p>
            </div>
            <Link
              href="/news"
              className="hidden sm:flex items-center gap-1 text-emerald-600 hover:text-emerald-700 text-sm font-medium"
            >
              すべて見る
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentTopics.map((topic) => (
              <Link
                key={topic.href}
                href={topic.href}
                className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:border-emerald-200 transition-all group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    {topic.tag}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-800 leading-snug group-hover:text-emerald-700 mb-3">
                  {topic.title}
                </h3>
                <p className="text-xs text-gray-400">{topic.date}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6 sm:hidden">
            <Link
              href="/news"
              className="inline-flex items-center gap-1 text-emerald-600 text-sm font-medium"
            >
              すべてのトピックを見る
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
