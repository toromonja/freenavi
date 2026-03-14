import type { Metadata } from "next";
import {
  AlertTriangle,
  CheckCircle,
  XCircle,
  ArrowRight,
  Users,
  Building2,
  FileText,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import InvoiceAccordion from "./InvoiceAccordion";

export const metadata: Metadata = {
  title: "インボイス制度をわかりやすく解説 | 登録すべき？しなくていい？",
  description:
    "フリーランス向けにインボイス制度を解説。登録すべきか判定チャート、2026年の経過措置変更、登録手順、メリット・デメリット比較表をまとめました。",
};

const steps = [
  {
    number: 1,
    title: "国税庁の「適格請求書発行事業者の登録申請」サイトにアクセス",
    description: "e-Taxまたは郵送で申請できます。e-Taxの場合はマイナンバーカードが必要です。",
  },
  {
    number: 2,
    title: "「適格請求書発行事業者の登録申請書」を提出",
    description: "氏名・住所・事業内容などを記入して提出します。法人番号・個人番号も必要です。",
  },
  {
    number: 3,
    title: "審査・登録番号の通知（約1〜3ヶ月）",
    description: "登録が完了すると「T+13桁」形式の登録番号が発行されます（個人：マイナンバーとは別の番号）。",
  },
  {
    number: 4,
    title: "請求書に登録番号を記載して取引開始",
    description:
      "インボイス（適格請求書）には、登録番号・税率・税額・適用税率ごとの金額などを記載する必要があります。",
  },
];

export default function InvoicePage() {
  return (
    <div className="min-h-screen">
      {/* ページヘッダー */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-blue-200" />
            <span className="text-blue-200 text-sm font-medium">インボイスガイド</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            インボイス制度を
            <br />
            わかりやすく解説
          </h1>
          <p className="text-blue-100 text-lg">
            「登録すべき？しなくていい？」に答えます
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 md:py-14">
        {/* 2026年変更 警告バナー */}
        <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-5 mb-10 flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
          <div>
            <h2 className="font-bold text-red-800 mb-1">
              2026年10月〜 重要な変更があります
            </h2>
            <p className="text-red-700 text-sm leading-relaxed">
              インボイス未登録の免税事業者から仕入れた際の「経過措置（仕入税額控除の特例）」が、
              <strong>2026年9月末で80%控除が終了し、10月から50%控除</strong>に変わります。
              取引先が課税事業者（会社・法人など）の場合、未登録のままでいると取引への影響が大きくなる可能性があります。
            </p>
          </div>
        </div>

        {/* 登録すべき？判定チャート */}
        <section className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            「登録すべき？」判定チャート
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            取引先の種類によって判断が変わります
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 個人向け */}
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs text-emerald-600 font-medium">取引先が</p>
                  <h3 className="font-bold text-emerald-800">個人（一般消費者）のみ</h3>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span className="font-bold text-emerald-700 text-lg">登録不要の可能性が大きい</span>
              </div>
              <p className="text-sm text-emerald-800 leading-relaxed">
                個人消費者はインボイスを必要としません。
                ハンドメイド販売・個人向けデザインなど、BtoC（個人向け）取引がメインなら、
                登録しなくてもほぼ影響はありません。
              </p>
              <div className="mt-3 pt-3 border-t border-emerald-200">
                <p className="text-xs text-emerald-600">
                  ただし：将来的に法人取引が増える場合は登録を検討しましょう
                </p>
              </div>
            </div>

            {/* 法人向け */}
            <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs text-orange-600 font-medium">取引先が</p>
                  <h3 className="font-bold text-orange-800">会社・フリーランス（BtoB）</h3>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
                <span className="font-bold text-orange-700 text-lg">登録を検討すべき</span>
              </div>
              <p className="text-sm text-orange-800 leading-relaxed">
                取引先が課税事業者（会社など）の場合、インボイス未登録だと取引先が消費税の控除を受けられなくなります。
                取引継続や価格交渉への影響が出る可能性があります。
              </p>
              <div className="mt-3 pt-3 border-t border-orange-200">
                <p className="text-xs text-orange-600">
                  特に：2026年10月以降は経過措置が50%に縮小されるため要注意
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 登録手順 */}
        <section className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            インボイス登録の手順
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            オンライン（e-Tax）で申請するのが最も簡単です
          </p>

          <div className="space-y-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-4"
              >
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">{step.number}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* メリット・デメリット比較表 */}
        <section className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            登録する vs しない 比較表
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            どちらが自分に合っているか確認しましょう
          </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full min-w-[480px]">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left text-sm font-semibold text-gray-600 px-4 py-3 border-b border-gray-200 w-1/4">
                    比較項目
                  </th>
                  <th className="text-center text-sm font-semibold text-blue-700 px-4 py-3 border-b border-gray-200 bg-blue-50">
                    登録する
                  </th>
                  <th className="text-center text-sm font-semibold text-gray-600 px-4 py-3 border-b border-gray-200">
                    登録しない
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    item: "消費税の納税",
                    registered: "必要（課税事業者になる）",
                    notRegistered: "不要（免税事業者のまま）",
                  },
                  {
                    item: "取引先への影響",
                    registered: "相手が消費税控除を受けられる",
                    notRegistered: "2026年10月〜影響大（50%控除に縮小）",
                  },
                  {
                    item: "請求書の記載",
                    registered: "登録番号・税率・税額の記載必要",
                    notRegistered: "従来通りでOK",
                  },
                  {
                    item: "手取りへの影響",
                    registered: "消費税分（10%）を納税する必要あり",
                    notRegistered: "免税なので消費税分はそのまま手元に",
                  },
                  {
                    item: "おすすめの人",
                    registered: "BtoB取引がメインのフリーランス",
                    notRegistered: "個人向け（BtoC）がメインの方",
                  },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="text-sm font-medium text-gray-700 px-4 py-3 border-b border-gray-100">
                      {row.item}
                    </td>
                    <td className="text-sm text-center text-gray-700 px-4 py-3 border-b border-gray-100 bg-blue-50/50">
                      {row.registered}
                    </td>
                    <td className="text-sm text-center text-gray-500 px-4 py-3 border-b border-gray-100">
                      {row.notRegistered}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 space-y-3">
            <div className="flex items-start gap-2 bg-blue-50 rounded-xl p-4 border border-blue-100">
              <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
              <p className="text-sm text-blue-800">
                <strong>2割特例：</strong>
                インボイス登録した免税事業者は、2026年9月末まで消費税の納税額を売上税額の2割に抑えられる「2割特例」が使えます（申告書に記載するだけでOK）。
              </p>
            </div>
            <div className="flex items-start gap-2 bg-amber-50 rounded-xl p-4 border border-amber-100">
              <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">
                <strong>注意：</strong>
                インボイス登録は任意ですが、一度登録すると取り消しには手続きが必要です。
                よく検討してから決断しましょう。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            よくある質問
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            インボイスについて多く聞かれる疑問をまとめました
          </p>
          <InvoiceAccordion />
        </section>

        {/* 関連リンク */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">あわせて読みたい</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/guides/kakutei-shinkoku"
              className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-emerald-300 hover:shadow-sm transition-all group"
            >
              <FileText className="w-5 h-5 text-emerald-500 shrink-0" />
              <div>
                <p className="font-medium text-gray-800 text-sm group-hover:text-emerald-700">
                  確定申告ガイド
                </p>
                <p className="text-xs text-gray-500">青色申告の始め方も解説</p>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
            </Link>
            <Link
              href="/tools/teardown"
              className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-emerald-300 hover:shadow-sm transition-all group"
            >
              <FileText className="w-5 h-5 text-emerald-500 shrink-0" />
              <div>
                <p className="font-medium text-gray-800 text-sm group-hover:text-emerald-700">
                  手取りシミュレーター
                </p>
                <p className="text-xs text-gray-500">インボイス登録後の影響を試算</p>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
