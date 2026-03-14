import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Receipt,
  Shield,
  PiggyBank,
  Briefcase,
  ChevronRight,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "フリーランス完全ガイド | 税金・保険・開業をわかりやすく解説",
  description:
    "確定申告・インボイス・国民健康保険・節税・開業届…フリーランスに必要な知識を全部まとめました。初心者でもわかりやすい解説です。",
};

type ArticleStatus = "published" | "coming_soon";

interface Article {
  title: string;
  href: string;
  description: string;
  status: ArticleStatus;
}

interface Category {
  icon: React.ElementType;
  label: string;
  color: string;
  iconBg: string;
  iconColor: string;
  borderColor: string;
  articles: Article[];
}

const categories: Category[] = [
  {
    icon: FileText,
    label: "税金・確定申告",
    color: "emerald",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    borderColor: "border-emerald-200",
    articles: [
      {
        title: "確定申告とは？フリーランスがやることを全部まとめました",
        href: "/guides/kakutei-shinkoku",
        description: "ステップ形式で解説。青色申告・白色申告の違いも比較表付きで説明します。",
        status: "published",
      },
      {
        title: "青色申告65万円控除を最大限に活用する方法",
        href: "/guides/blue-declaration",
        description: "e-Taxで申告するだけで最大65万円の控除。手順と注意点を解説。",
        status: "coming_soon",
      },
      {
        title: "経費判定チェッカー（ツール）",
        href: "/tools/expense",
        description: "自宅兼事務所・スマホ・書籍…カテゴリと用途を入力するだけで経費判定できます。",
        status: "published",
      },
    ],
  },
  {
    icon: Receipt,
    label: "インボイス制度",
    color: "blue",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    borderColor: "border-blue-200",
    articles: [
      {
        title: "インボイス制度をわかりやすく解説",
        href: "/guides/invoice",
        description: "登録すべき？しない？判定チャートと2026年の重要変更を解説します。",
        status: "published",
      },
      {
        title: "インボイス登録後の請求書の書き方",
        href: "/guides/invoice-format",
        description: "適格請求書に必要な記載事項と、freee・マネフォでの設定方法。",
        status: "coming_soon",
      },
    ],
  },
  {
    icon: Shield,
    label: "社会保険",
    color: "purple",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    borderColor: "border-purple-200",
    articles: [
      {
        title: "フリーランスの社会保険・国民健康保険 完全ガイド",
        href: "/guides/shakai-hoken",
        description: "国保 vs 任意継続の比較・保険料の仕組み・軽減制度を解説。",
        status: "published",
      },
      {
        title: "国民年金の免除制度｜収入が少ない年に使える制度",
        href: "/guides/nenkin-menjo",
        description: "所得が少ない場合に保険料を全額・半額免除できる制度の申請方法。",
        status: "coming_soon",
      },
    ],
  },
  {
    icon: PiggyBank,
    label: "節税",
    color: "amber",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    borderColor: "border-amber-200",
    articles: [
      {
        title: "フリーランスの節税ガイド｜合法的に税金を減らす方法",
        href: "/guides/setsuzei",
        description: "iDeCo・小規模企業共済・ふるさと納税・経費…効果の大きい順に解説。",
        status: "published",
      },
      {
        title: "iDeCoの始め方｜フリーランスにとってのメリット",
        href: "/guides/ideco",
        description: "月最大6.8万円の掛金が全額所得控除。開設手順と注意点を解説。",
        status: "coming_soon",
      },
      {
        title: "小規模企業共済とは？退職金代わりにもなる節税術",
        href: "/guides/shoukibo-kyosai",
        description: "年間最大84万円が所得控除。フリーランスの老後に備える制度。",
        status: "coming_soon",
      },
      {
        title: "ふるさと納税｜フリーランスの節税活用法",
        href: "/guides/furusato-nozei",
        description: "確定申告と組み合わせるとお得。ワンストップ特例との違いも解説。",
        status: "coming_soon",
      },
    ],
  },
  {
    icon: Briefcase,
    label: "開業・手続き",
    color: "rose",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    borderColor: "border-rose-200",
    articles: [
      {
        title: "フリーランス開業ガイド｜最初にやること全まとめ",
        href: "/guides/kaigyo",
        description: "開業届・青色申告申請書・国保加入…開業チェックリスト付きで解説。",
        status: "published",
      },
      {
        title: "開業届の書き方｜記入例付き完全解説",
        href: "/guides/kaigyodoke",
        description: "職業欄・屋号・所得の種類…迷いやすい項目を記入例付きで解説。",
        status: "coming_soon",
      },
    ],
  },
];

const colorMap: Record<string, { header: string; badge: string; link: string }> = {
  emerald: {
    header: "bg-emerald-50 border-emerald-200",
    badge: "bg-emerald-100 text-emerald-700",
    link: "hover:text-emerald-600 hover:border-emerald-300",
  },
  blue: {
    header: "bg-blue-50 border-blue-200",
    badge: "bg-blue-100 text-blue-700",
    link: "hover:text-blue-600 hover:border-blue-300",
  },
  purple: {
    header: "bg-purple-50 border-purple-200",
    badge: "bg-purple-100 text-purple-700",
    link: "hover:text-purple-600 hover:border-purple-300",
  },
  amber: {
    header: "bg-amber-50 border-amber-200",
    badge: "bg-amber-100 text-amber-700",
    link: "hover:text-amber-600 hover:border-amber-300",
  },
  rose: {
    header: "bg-rose-50 border-rose-200",
    badge: "bg-rose-100 text-rose-700",
    link: "hover:text-rose-600 hover:border-rose-300",
  },
};

export default function GuidesPage() {
  return (
    <div className="min-h-screen">
      {/* ページヘッダー */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-emerald-200" />
            <span className="text-emerald-200 text-sm font-medium">ガイド一覧</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-3">
            フリーランス 完全ガイド
          </h1>
          <p className="text-emerald-100 text-lg">
            税金・保険・開業…全部わかりやすく解説します
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-14 space-y-10">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const colors = colorMap[cat.color];
          return (
            <section key={cat.label}>
              {/* カテゴリヘッダー */}
              <div
                className={`flex items-center gap-3 rounded-2xl border px-5 py-4 mb-4 ${colors.header}`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${cat.iconBg}`}
                >
                  <Icon className={`w-4 h-4 ${cat.iconColor}`} />
                </div>
                <h2 className="font-bold text-gray-900 text-lg">{cat.label}</h2>
                <span
                  className={`ml-auto text-xs font-medium px-2.5 py-1 rounded-full ${colors.badge}`}
                >
                  {cat.articles.length}記事
                </span>
              </div>

              {/* 記事カード */}
              <div className="space-y-2 pl-0 md:pl-2">
                {cat.articles.map((article) =>
                  article.status === "published" ? (
                    <Link
                      key={article.href}
                      href={article.href}
                      className={`flex items-start gap-4 bg-white border border-gray-100 rounded-xl px-5 py-4 transition-all group shadow-sm ${colors.link} hover:shadow-md`}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-gray-800 text-sm leading-snug group-hover:text-current">
                            {article.title}
                          </h3>
                          <span className="shrink-0 text-xs bg-emerald-100 text-emerald-700 font-medium px-2 py-0.5 rounded-full">
                            公開中
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed">
                          {article.description}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  ) : (
                    <div
                      key={article.href}
                      className="flex items-start gap-4 bg-gray-50 border border-gray-100 rounded-xl px-5 py-4"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-gray-400 text-sm leading-snug">
                            {article.title}
                          </h3>
                          <span className="shrink-0 text-xs bg-gray-200 text-gray-500 font-medium px-2 py-0.5 rounded-full">
                            近日公開
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed">
                          {article.description}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
