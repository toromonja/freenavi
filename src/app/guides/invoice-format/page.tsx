import type { Metadata } from "next";
import Link from "next/link";
import { Receipt, CheckCircle, AlertTriangle, ArrowRight, Info } from "lucide-react";
import InvoiceFormatAccordion from "./InvoiceFormatAccordion";

export const metadata: Metadata = {
  title: "インボイス対応の請求書の書き方",
  description: "適格請求書に必要な6項目と書き方を解説。登録番号の記載方法も。",
  alternates: {
    canonical: "https://freenavi.toromonja.com/guides/invoice-format",
  },
};

const requiredItems = [
  {
    number: 1,
    title: "適格請求書発行事業者の氏名または名称",
    detail: "自分の氏名・屋号を記載します。法人の場合は会社名。",
    important: false,
  },
  {
    number: 2,
    title: "登録番号（T + 13桁の数字）",
    detail: "インボイス登録後に付与される番号。「T123456789012X」のような形式。必ず記載が必要です。",
    important: true,
  },
  {
    number: 3,
    title: "取引年月日",
    detail: "サービス提供日・商品引渡し日など、取引が行われた日付を記載します。",
    important: false,
  },
  {
    number: 4,
    title: "取引内容（軽減税率の対象品目はその旨も記載）",
    detail: "「Webデザイン制作費」「コンサルティング費用」など、何の取引かを明記します。",
    important: false,
  },
  {
    number: 5,
    title: "税率ごとの合計金額（税抜または税込）と適用税率",
    detail: "10%・8%（軽減税率）それぞれの合計金額と税率を明記します。税率が1種類でも記載が必要です。",
    important: true,
  },
  {
    number: 6,
    title: "税率ごとの消費税額",
    detail: "10%対象の消費税額と8%対象の消費税額を分けて記載します。",
    important: true,
  },
  {
    number: 7,
    title: "書類の交付を受ける事業者の氏名または名称",
    detail: "取引先（請求先）の会社名・氏名を記載します。（不特定多数向けのレシートは省略可）",
    important: false,
  },
];

export default function InvoiceFormatPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center gap-2 mb-4">
            <Receipt className="w-5 h-5 text-blue-200" />
            <span className="text-blue-200 text-sm font-medium">インボイスガイド</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            インボイス対応の請求書の書き方
            <br />
            必須項目チェックリスト
          </h1>
          <p className="text-blue-100 text-lg">
            適格請求書（インボイス）に必要な記載事項を解説します
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 md:py-14 space-y-14">

        {/* 必須項目 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            適格請求書に必要な記載項目
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            以下の項目がすべて揃って初めて「適格請求書（インボイス）」として認められます
          </p>
          <div className="space-y-3">
            {requiredItems.map((item) => (
              <div
                key={item.number}
                className={`flex items-start gap-4 rounded-xl border p-4 ${item.important ? "bg-blue-50 border-blue-200" : "bg-white border-gray-200"}`}
              >
                <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${item.important ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-600"}`}>
                  {item.number}
                </div>
                <div>
                  <p className={`font-semibold mb-1 text-sm ${item.important ? "text-blue-800" : "text-gray-800"}`}>
                    {item.title}
                    {item.important && (
                      <span className="ml-2 text-xs bg-blue-200 text-blue-800 px-1.5 py-0.5 rounded font-medium">新たに必要</span>
                    )}
                  </p>
                  <p className={`text-sm leading-relaxed ${item.important ? "text-blue-700" : "text-gray-600"}`}>
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 請求書テンプレートイメージ */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            請求書テンプレートのイメージ
          </h2>
          <p className="text-gray-500 text-sm mb-5">インボイス対応の請求書はこのような形式になります</p>
          <div className="bg-white border-2 border-gray-300 rounded-2xl p-6 font-mono text-sm shadow-sm">
            <div className="text-center mb-6">
              <p className="text-xl font-bold text-gray-900 not-italic font-sans">請 求 書</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6 text-xs">
              <div>
                <p className="text-gray-500 font-sans">請求先</p>
                <p className="font-semibold text-gray-900">株式会社○○ 御中</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500 font-sans">発行日</p>
                <p className="font-semibold text-gray-900">2026年3月31日</p>
                <p className="text-gray-500 font-sans mt-1">登録番号</p>
                <p className="font-semibold text-blue-700">T1234567890123</p>
              </div>
            </div>
            <div className="border border-gray-300 rounded mb-4 overflow-hidden text-xs">
              <div className="bg-gray-100 grid grid-cols-12 px-3 py-2 font-semibold text-gray-700">
                <span className="col-span-6">品目</span>
                <span className="col-span-2 text-right">数量</span>
                <span className="col-span-2 text-right">単価</span>
                <span className="col-span-2 text-right">金額</span>
              </div>
              <div className="grid grid-cols-12 px-3 py-2 border-t border-gray-200 text-gray-800">
                <span className="col-span-6">Webサイト制作費（10%）</span>
                <span className="col-span-2 text-right">1</span>
                <span className="col-span-2 text-right">300,000</span>
                <span className="col-span-2 text-right">300,000</span>
              </div>
            </div>
            <div className="space-y-1 text-xs text-right mb-4">
              <div className="flex justify-between text-gray-700">
                <span>10%対象 小計</span>
                <span>300,000円</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>消費税（10%）</span>
                <span className="text-blue-700 font-semibold">30,000円</span>
              </div>
              <div className="flex justify-between font-bold text-gray-900 text-sm border-t border-gray-300 pt-2">
                <span>合計（税込）</span>
                <span>330,000円</span>
              </div>
            </div>
            <div className="text-right text-xs text-gray-500">
              <p>山田太郎</p>
              <p>〒000-0000 東京都○○区○○</p>
              <p>登録番号：T1234567890123</p>
            </div>
          </div>
          <div className="mt-4 flex items-start gap-2 bg-blue-50 rounded-xl p-4 border border-blue-100">
            <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
            <p className="text-sm text-blue-800 leading-relaxed">
              freee・マネーフォワード・やよいなどの会計ソフトでは、登録番号を設定するだけで
              上記のようなインボイス対応の請求書テンプレートが自動生成されます。
            </p>
          </div>
        </section>

        {/* 登録番号がない場合 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            インボイス未登録の場合の対応
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 mb-2">
                インボイス未登録のまま請求する場合
              </p>
              <ul className="space-y-2 text-sm text-amber-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  請求書に登録番号を記載しないで発行する（インボイスとして認められない）
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  取引先は受け取った請求書に対して消費税の仕入税額控除を全額は使えない
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  2026年10月以降は経過措置が50%控除に縮小されるため取引先の負担が増える
                </li>
              </ul>
              <p className="text-sm text-amber-700 mt-3">
                BtoB取引（法人・フリーランスが相手）がメインの場合は、インボイス登録を検討してください。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">よくある質問</h2>
          <p className="text-gray-500 text-sm mb-6">請求書の書き方でよく疑問になることをまとめました</p>
          <InvoiceFormatAccordion />
        </section>

        {/* 関連リンク */}
        <section className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/guides/invoice"
            className="flex-1 flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition-all group"
          >
            <Receipt className="w-5 h-5 text-blue-500 shrink-0" />
            <div>
              <p className="font-medium text-gray-800 text-sm group-hover:text-blue-700">インボイス制度ガイド</p>
              <p className="text-xs text-gray-500">登録すべき？の判断チャート</p>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
          </Link>
          <Link
            href="/tools/invoice"
            className="flex-1 flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition-all group"
          >
            <Receipt className="w-5 h-5 text-blue-500 shrink-0" />
            <div>
              <p className="font-medium text-gray-800 text-sm group-hover:text-blue-700">インボイス影響試算ツール</p>
              <p className="text-xs text-gray-500">登録・未登録の損得を数字で比較</p>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
          </Link>
        </section>
      </div>
    </div>
  );
}
