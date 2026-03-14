import type { Metadata } from "next";
import {
  FileText,
  BookOpen,
  Calendar,
  Send,
  CreditCard,
  ChevronDown,
  CheckCircle,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import KakuteiShinkokuAccordion from "./KakuteiShinkokuAccordion";

export const metadata: Metadata = {
  title: "確定申告とは？フリーランスがやることを全部まとめました",
  description:
    "フリーランスの確定申告を初心者向けにわかりやすく解説。青色申告・白色申告の違い、申告の手順、よくある疑問にすべて答えます。",
};

const steps = [
  {
    number: 1,
    icon: FileText,
    title: "青色申告の申請をする",
    subtitle: "開業届と一緒に提出",
    description:
      "フリーランスを始めたら、まず税務署に「開業届」を出します。同時に「青色申告承認申請書」も提出すると、最大65万円の控除が受けられます。",
    tips: [
      "開業日から2ヶ月以内に提出（その年の青色申告が使える）",
      "e-Taxまたは税務署窓口で提出できる",
      "マイナンバーカードがあればオンラインで完結",
    ],
    color: "emerald",
  },
  {
    number: 2,
    icon: BookOpen,
    title: "毎月の帳簿をつける",
    subtitle: "freee・マネーフォワードがおすすめ",
    description:
      "青色申告をするには「帳簿（複式簿記）」が必要です。難しそうに聞こえますが、会計ソフトを使えば自動でほぼ完成します。",
    tips: [
      "freee・マネーフォワードは銀行口座と連携できて便利",
      "領収書・レシートは必ず保管（7年間）",
      "毎月少しずつ記帳するのがポイント",
    ],
    color: "blue",
  },
  {
    number: 3,
    icon: Calendar,
    title: "1月に書類を集める",
    subtitle: "年明け最初の作業",
    description:
      "1月になったら確定申告に必要な書類を集めましょう。取引先からの支払調書、銀行の年間利用明細、社会保険料の控除証明書などが必要です。",
    tips: [
      "支払調書：取引先から1月末ごろに郵送される",
      "社会保険料控除証明書：年金機構・健保組合から届く",
      "医療費控除を使う場合は医療費の領収書も集める",
    ],
    color: "purple",
  },
  {
    number: 4,
    icon: Send,
    title: "2月16日〜3月15日に申告する",
    subtitle: "e-Taxでオンライン申告が便利",
    description:
      "確定申告書を作成して税務署に提出します。e-Taxを使えば自宅から24時間申告でき、青色申告65万円控除も使えます（紙提出は55万円控除）。",
    tips: [
      "e-Taxはマイナンバーカード + スマホで利用可能",
      "freee・マネーフォワードからそのままe-Tax送信できる",
      "期限を過ぎると無申告加算税・延滞税のペナルティあり",
    ],
    color: "orange",
  },
  {
    number: 5,
    icon: CreditCard,
    title: "3月15日までに納税する",
    subtitle: "振替納税なら4月下旬まで猶予",
    description:
      "申告と同時に税金を納めます。振替納税の手続きをしておくと、4月下旬に口座から自動引き落としされるので安心です。",
    tips: [
      "クレジットカード納付・コンビニ納付・ペイジーも使える",
      "延納（半分を5月まで猶予）という制度もある",
      "住民税は6月以降に別途通知が来る（自分で支払う）",
    ],
    color: "rose",
  },
];

const comparisonData = [
  {
    item: "控除額",
    blue65: "最大65万円（e-Tax利用時）",
    blue10: "10万円",
    white: "なし（0円）",
  },
  {
    item: "帳簿の方式",
    blue65: "複式簿記（会計ソフトで簡単）",
    blue10: "簡易簿記",
    white: "簡易な記録でOK",
  },
  {
    item: "赤字の繰越",
    blue65: "3年間繰越できる",
    blue10: "3年間繰越できる",
    white: "繰越できない",
  },
  {
    item: "手間",
    blue65: "やや手間（ソフト利用推奨）",
    blue10: "比較的簡単",
    white: "最も簡単",
  },
  {
    item: "おすすめ",
    blue65: "◎ 一番おすすめ",
    blue10: "○ 次点",
    white: "× 損する可能性大",
  },
];

const colorMap: Record<string, string> = {
  emerald: "bg-emerald-500",
  blue: "bg-blue-500",
  purple: "bg-purple-500",
  orange: "bg-orange-500",
  rose: "bg-rose-500",
};

const borderColorMap: Record<string, string> = {
  emerald: "border-emerald-200",
  blue: "border-blue-200",
  purple: "border-purple-200",
  orange: "border-orange-200",
  rose: "border-rose-200",
};

const bgColorMap: Record<string, string> = {
  emerald: "bg-emerald-50",
  blue: "bg-blue-50",
  purple: "bg-purple-50",
  orange: "bg-orange-50",
  rose: "bg-rose-50",
};

const textColorMap: Record<string, string> = {
  emerald: "text-emerald-700",
  blue: "text-blue-700",
  purple: "text-purple-700",
  orange: "text-orange-700",
  rose: "text-rose-700",
};

export default function KakuteiShinkokuPage() {
  return (
    <div className="min-h-screen">
      {/* ページヘッダー */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-emerald-200" />
            <span className="text-emerald-200 text-sm font-medium">確定申告ガイド</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            確定申告とは？
            <br />
            フリーランスがやることを全部まとめました
          </h1>
          <p className="text-emerald-100 text-lg">
            初めてでも大丈夫。ステップごとに説明します。
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 md:py-14">
        {/* ステップセクション */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            確定申告の流れ
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            開業から申告まで、やることをまとめました
          </p>

          <div className="space-y-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className={`bg-white rounded-2xl border-2 ${borderColorMap[step.color]} overflow-hidden`}
                >
                  <div className={`${bgColorMap[step.color]} px-5 py-4 flex items-center gap-4`}>
                    <div
                      className={`w-10 h-10 ${colorMap[step.color]} rounded-xl flex items-center justify-center shrink-0`}
                    >
                      <span className="text-white font-bold text-sm">STEP</span>
                    </div>
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <Icon className={`w-5 h-5 ${textColorMap[step.color]} shrink-0`} />
                      <div>
                        <h3 className={`font-bold ${textColorMap[step.color]}`}>
                          {step.title}
                        </h3>
                        <p className="text-xs text-gray-500">{step.subtitle}</p>
                      </div>
                    </div>
                    <span
                      className={`text-3xl font-black ${textColorMap[step.color]} opacity-30 shrink-0`}
                    >
                      {step.number}
                    </span>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-gray-700 leading-relaxed mb-4">{step.description}</p>
                    <div className="space-y-2">
                      {step.tips.map((tip, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle
                            className={`w-4 h-4 ${textColorMap[step.color]} shrink-0 mt-0.5`}
                          />
                          <p className="text-sm text-gray-600">{tip}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 青色 vs 白色 比較表 */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            白色申告 vs 青色申告（比較表）
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            ほとんどのフリーランスに青色申告（65万円控除）がおすすめです
          </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full min-w-[560px]">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left text-sm font-semibold text-gray-600 px-4 py-3 border-b border-gray-200">
                    比較項目
                  </th>
                  <th className="text-center text-sm font-semibold text-emerald-700 px-4 py-3 border-b border-gray-200 bg-emerald-50">
                    青色（65万円控除）
                  </th>
                  <th className="text-center text-sm font-semibold text-blue-700 px-4 py-3 border-b border-gray-200">
                    青色（10万円控除）
                  </th>
                  <th className="text-center text-sm font-semibold text-gray-600 px-4 py-3 border-b border-gray-200">
                    白色申告
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="text-sm font-medium text-gray-700 px-4 py-3 border-b border-gray-100">
                      {row.item}
                    </td>
                    <td className="text-sm text-center text-gray-700 px-4 py-3 border-b border-gray-100 bg-emerald-50/50">
                      {row.blue65}
                    </td>
                    <td className="text-sm text-center text-gray-700 px-4 py-3 border-b border-gray-100">
                      {row.blue10}
                    </td>
                    <td className="text-sm text-center text-gray-500 px-4 py-3 border-b border-gray-100">
                      {row.white}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex items-start gap-2 bg-amber-50 rounded-xl p-4 border border-amber-100">
            <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              青色申告（65万円控除）を使うには、<strong>e-Tax（電子申告）</strong>での提出が必要です。
              紙提出の場合は55万円控除になります。
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            よくある質問
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            初心者がよく疑問に思うことをまとめました
          </p>
          <KakuteiShinkokuAccordion />
        </section>

        {/* 計算ツールCTA */}
        <section>
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">
                青色申告でいくら節税できる？
              </h3>
              <p className="text-emerald-100 text-sm">
                手取りシミュレーターで実際にシミュレーションしてみましょう
              </p>
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
