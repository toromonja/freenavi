import type { Metadata } from "next";
import Link from "next/link";
import {
  Calculator,
  Receipt,
  Shield,
  ClipboardCheck,
  ChevronRight,
  Wrench,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "計算ツール・シミュレーター | freenavi",
  description:
    "手取りシミュレーター・インボイス影響試算・国保料シミュレーターなど、フリーランスに役立つ無料計算ツールを提供しています。",
};

interface Tool {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
  status: "available" | "coming_soon";
  badge?: string;
  iconBg: string;
  iconColor: string;
}

const tools: Tool[] = [
  {
    icon: Calculator,
    title: "手取りシミュレーター",
    description:
      "年間売上・経費・青色申告の有無を入力するだけで、所得税・住民税・国保料を差し引いた実際の手取り額を計算します。節税アドバイスも自動表示。",
    href: "/tools/teardown",
    status: "available",
    badge: "人気No.1",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    icon: Receipt,
    title: "インボイス影響試算",
    description:
      "インボイス登録する場合・しない場合で、手取りがどう変わるかを数字で比較。2026年10月の経過措置変更（80%→50%）の影響も試算できます。",
    href: "/tools/invoice",
    status: "available",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Shield,
    title: "国保料シミュレーター",
    description:
      "前年の所得から国民健康保険料の目安を試算します。都道府県・市区町村ごとの料率に対応予定。",
    href: "/tools/kokuho",
    status: "coming_soon",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: ClipboardCheck,
    title: "経費判定チェッカー",
    description:
      "「これは経費になる？」をカテゴリ別にチェック。自宅兼事務所・スマホ・書籍・交通費など、按分の考え方も解説します。",
    href: "/tools/expense",
    status: "coming_soon",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen">
      {/* ページヘッダー */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center gap-2 mb-4">
            <Wrench className="w-5 h-5 text-emerald-200" />
            <span className="text-emerald-200 text-sm font-medium">無料ツール</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-3">
            計算ツール・シミュレーター
          </h1>
          <p className="text-emerald-100 text-lg">
            数字を入れるだけで、あなたの税金がわかります
          </p>
          <p className="text-emerald-200 text-sm mt-2">
            すべてのツールはブラウザ内で計算します。登録不要・完全無料。
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((tool) => {
            const Icon = tool.icon;
            if (tool.status === "available") {
              return (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all group flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center ${tool.iconBg}`}
                    >
                      <Icon className={`w-5 h-5 ${tool.iconColor}`} />
                    </div>
                    <div className="flex items-center gap-2">
                      {tool.badge && (
                        <span className="text-xs bg-emerald-100 text-emerald-700 font-semibold px-2.5 py-1 rounded-full">
                          {tool.badge}
                        </span>
                      )}
                      <span className="text-xs bg-emerald-50 text-emerald-600 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
                        使える
                      </span>
                    </div>
                  </div>
                  <h2 className="font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {tool.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">
                    {tool.description}
                  </p>
                  <div className="flex items-center gap-1 mt-4 text-emerald-600 text-sm font-medium">
                    使ってみる
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              );
            }

            return (
              <div
                key={tool.href}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-5 flex flex-col opacity-75"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center ${tool.iconBg} opacity-60`}
                  >
                    <Icon className={`w-5 h-5 ${tool.iconColor}`} />
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-400">
                    <Lock className="w-3 h-3" />
                    <span className="text-xs font-medium bg-gray-200 text-gray-500 px-2 py-0.5 rounded-full">
                      近日公開
                    </span>
                  </div>
                </div>
                <h2 className="font-bold text-gray-500 mb-2">{tool.title}</h2>
                <p className="text-sm text-gray-400 leading-relaxed flex-1">
                  {tool.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* 注意書き */}
        <div className="mt-10 bg-gray-50 rounded-2xl border border-gray-200 p-5">
          <h3 className="font-semibold text-gray-700 mb-2 text-sm">ご利用にあたって</h3>
          <ul className="space-y-1.5 text-xs text-gray-500 leading-relaxed">
            <li>・ 計算結果はあくまで概算です。実際の税額は個人の状況により異なります。</li>
            <li>・ 入力した数値はサーバーに送信されません。ブラウザ内でのみ計算されます。</li>
            <li>・ 正確な税額・保険料については、税理士または税務署・各自治体にご確認ください。</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
