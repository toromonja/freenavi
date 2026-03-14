import type { Metadata } from "next";
import Link from "next/link";
import { Calculator, Shield, BookOpen, ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "freenavについて | フリーランス税務・制度ガイド",
  description:
    "freenavは、フリーランス・個人事業主が税金・社会保険・開業などの制度をわかりやすく理解できるガイドサービスです。",
};

const features = [
  {
    icon: BookOpen,
    title: "わかりやすさを最優先",
    description:
      "難しい税務用語をできるだけ使わず、フリーランス初心者の方が「何をすればいいか」を素早く理解できるように解説しています。",
  },
  {
    icon: Calculator,
    title: "無料の計算ツール",
    description:
      "手取りシミュレーター・国保料計算・インボイス影響試算など、数字を入力するだけで税金の目安がわかるツールを無料で提供しています。",
  },
  {
    icon: Shield,
    title: "情報の正確性への配慮",
    description:
      "可能な限り正確な情報を提供するよう努めていますが、税法は毎年改正されます。重要な判断には必ず専門家（税理士等）にご相談ください。",
  },
];

const principles = [
  "フリーランスの税金・制度情報をわかりやすく解説すること",
  "難しい言葉を使わず、初心者でも理解できるコンテンツを提供すること",
  "計算ツールで「自分の数字」をすぐに確認できる環境を作ること",
  "情報の誤りや古い情報を速やかに修正・更新すること",
  "最終的な判断は専門家（税理士・社労士等）に委ねることを推奨すること",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* ページヘッダー */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <Calculator className="w-5 h-5" />
            </div>
            <span className="text-2xl font-bold">freenavi</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            freenavについて
          </h1>
          <p className="text-emerald-100 text-lg leading-relaxed">
            フリーランス・個人事業主のための、税務・制度ガイドサービスです
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10 md:py-14 space-y-12">
        {/* サービス概要 */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">freenavとは</h2>
          <div className="prose prose-gray max-w-none space-y-4 text-gray-700">
            <p className="leading-relaxed">
              freenavi（フリーナビ）は、フリーランス・個人事業主として働く方が、
              税金・社会保険・開業手続きなどの制度を「わかりやすく」理解できるガイドサービスです。
            </p>
            <p className="leading-relaxed">
              「確定申告って何をすればいいの？」「インボイスって登録すべき？」「手取りはいくらになる？」
              ——フリーランスになりたての方や、制度について改めて調べたい方の疑問に、
              難しい言葉を使わずにお答えします。
            </p>
            <p className="leading-relaxed">
              すべての計算ツールは無料・登録不要で、ブラウザ上で即座に使えます。
              入力したデータはサーバーに送信されません。
            </p>
          </div>
        </section>

        {/* 特徴 */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-5">サービスの特徴</h2>
          <div className="space-y-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl p-5 shadow-sm"
                >
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 運営方針 */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">運営方針</h2>
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-5">
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              freenavは以下の方針のもとで運営しています。
            </p>
            <ul className="space-y-2.5">
              {principles.map((principle, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 leading-relaxed">{principle}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 免責事項への案内 */}
        <section>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-3">
            <Shield className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-800 mb-2">
                本サービスの情報について
              </h3>
              <p className="text-sm text-amber-700 leading-relaxed mb-3">
                本サービスで提供する情報・計算結果はあくまで一般的な解説・概算であり、
                個別の税務・法務アドバイスではありません。
                税法は毎年改正されるため、最新の情報は国税庁や税務署にてご確認ください。
              </p>
              <Link
                href="/disclaimer"
                className="inline-flex items-center gap-1 text-amber-700 hover:text-amber-800 text-sm font-medium underline underline-offset-2"
              >
                免責事項の詳細を見る
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* リンク集 */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">関連ページ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/privacy", label: "プライバシーポリシー", description: "情報の取り扱いについて" },
              { href: "/disclaimer", label: "免責事項", description: "情報の正確性・責任の範囲" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-emerald-300 hover:shadow-sm transition-all group"
              >
                <div>
                  <p className="font-medium text-gray-800 text-sm group-hover:text-emerald-700">
                    {link.label}
                  </p>
                  <p className="text-xs text-gray-500">{link.description}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 ml-auto shrink-0" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
