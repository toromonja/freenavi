import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Shield,
  Briefcase,
  PiggyBank,
  Calculator,
  ArrowRight,
  AlertCircle,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "freenavi｜フリーランスの税金・制度ガイド",
  description: "フリーランスの確定申告・インボイス・社会保険・節税をわかりやすく解説。手取り計算ツール無料。",
  alternates: {
    canonical: "https://freenavi.toromonja.com",
  },
};

// カテゴリナビゲーション
const categories = [
  {
    icon: FileText,
    label: "税金",
    href: "/guides/kakutei-shinkoku",
    description: "確定申告・所得税・消費税の基礎から実践まで",
    colorClass: "text-blue-600",
    iconBg: "bg-blue-100",
    border: "border-blue-100",
  },
  {
    icon: Shield,
    label: "社会保険",
    href: "/guides/shakai-hoken",
    description: "国民健康保険・国民年金・任意継続の選び方",
    colorClass: "text-purple-600",
    iconBg: "bg-purple-100",
    border: "border-purple-100",
  },
  {
    icon: Briefcase,
    label: "開業",
    href: "/guides/kaigyo",
    description: "開業届の出し方・青色申告のはじめ方",
    colorClass: "text-orange-600",
    iconBg: "bg-orange-100",
    border: "border-orange-100",
  },
  {
    icon: PiggyBank,
    label: "節税",
    href: "/guides/setsuzei",
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
  { q: "国民健康保険が高すぎる…", href: "/guides/shakai-hoken" },
  { q: "節税って何をすればいいかわからない", href: "/guides/setsuzei" },
  { q: "開業届ってどこに出すの？", href: "/guides/kaigyodoke" },
  { q: "住民税の請求が突然来てびっくりした", href: "/guides/kakutei-shinkoku" },
  { q: "フリーランスの健康保険、どれが得？", href: "/guides/shakai-hoken" },
  { q: "経費にできるものって何？", href: "/tools/expense" },
  { q: "青色申告と白色申告の違いは？", href: "/guides/blue-declaration" },
  { q: "iDeCoって本当に節税になる？", href: "/guides/ideco" },
  { q: "副業収入の確定申告ってどうするの？", href: "/guides/kakutei-shinkoku" },
  { q: "消費税の納税義務、いつから始まる？", href: "/guides/invoice" },
];


export default function HomePage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "freenavi",
            "url": "https://freenavi.toromonja.com",
            "description": "フリーランスの税金・制度ガイドサービス",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://freenavi.toromonja.com/guides",
              "query-input": "required name=search_term_string"
            }
          }),
        }}
      />
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
                href="/guides/kakutei-shinkoku"
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

    </div>
  );
}
