import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "免責事項 | freenavi",
  description:
    "freenavの免責事項。提供する情報の正確性・計算結果の取り扱い・専門家への相談推奨について説明します。",
};

const LAST_UPDATED = "2026年3月14日";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen">
      {/* ページヘッダー */}
      <div className="bg-gray-800 text-white">
        <div className="max-w-3xl mx-auto px-4 py-10 md:py-12">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">免責事項</h1>
          <p className="text-gray-400 text-sm">最終更新日：{LAST_UPDATED}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10 md:py-14">
        {/* 重要注記 */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-5 mb-10 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-amber-800 mb-1">
              本サービスの情報は参考情報です
            </p>
            <p className="text-sm text-amber-700 leading-relaxed">
              freenavが提供するガイド・計算ツールの結果は、あくまで一般的な解説・概算であり、
              個別の税務・法務アドバイスではありません。
              重要な判断の前には必ず税理士・社会保険労務士などの専門家にご相談ください。
            </p>
          </div>
        </div>

        <div className="space-y-10 text-gray-700">
          {/* 情報の正確性 */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">1. 情報の正確性について</h2>
            <p className="text-sm leading-relaxed mb-3">
              本サービスが提供する情報は、執筆・更新時点での法令・制度・税率等に基づいています。
              ただし、税法・社会保険制度は毎年改正されるため、掲載情報が現時点で最新・正確であることを保証するものではありません。
            </p>
            <p className="text-sm leading-relaxed">
              情報の誤りや古い内容が含まれる場合があります。最新かつ正確な情報については、
              国税庁・厚生労働省・お住まいの市区町村・税務署の公式情報をご確認ください。
            </p>
            <div className="mt-4 space-y-2">
              {[
                { label: "国税庁 公式サイト", href: "https://www.nta.go.jp/" },
                { label: "e-Tax（電子申告）", href: "https://www.e-tax.nta.go.jp/" },
                { label: "日本年金機構", href: "https://www.nenkin.go.jp/" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 underline underline-offset-2 mr-4"
                >
                  {link.label}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </section>

          {/* 計算ツールについて */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">2. 計算ツールの結果について</h2>
            <p className="text-sm leading-relaxed mb-3">
              本サービスが提供する手取りシミュレーター・国保料シミュレーター・インボイス影響試算ツール等の
              計算結果はすべて概算です。
            </p>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-4 space-y-2 text-sm">
              <p className="font-semibold text-gray-700">概算である理由</p>
              <ul className="space-y-1.5 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 shrink-0 mt-0.5">・</span>
                  国民健康保険料は市区町村ごとに料率・上限額が異なります
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 shrink-0 mt-0.5">・</span>
                  所得控除の種類・金額は個人の状況（扶養・医療費・寄附等）によって異なります
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 shrink-0 mt-0.5">・</span>
                  税率・料率は毎年改定される場合があります
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 shrink-0 mt-0.5">・</span>
                  業種・事業形態によって適用される税制が異なる場合があります
                </li>
              </ul>
            </div>
            <p className="text-sm leading-relaxed mt-3">
              計算結果を確定申告・税務申告の根拠として直接使用することはお控えください。
              正確な税額は税理士または税務署にご確認ください。
            </p>
          </section>

          {/* 専門家への相談推奨 */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">3. 専門家への相談について</h2>
            <p className="text-sm leading-relaxed mb-3">
              税務・法務・社会保険に関する重要な判断（確定申告の方法・インボイス登録の決定・
              法人化の判断等）については、必ず専門家にご相談ください。
            </p>
            <div className="bg-blue-50 rounded-xl border border-blue-100 p-4 text-sm text-blue-800">
              <p className="font-semibold mb-2">相談先の目安</p>
              <ul className="space-y-1.5 text-blue-700">
                <li>・ 税金・確定申告 → <strong>税理士</strong></li>
                <li>・ 社会保険・労務 → <strong>社会保険労務士</strong></li>
                <li>・ 基本的な税の相談 → <strong>最寄りの税務署（無料）</strong></li>
                <li>・ 国保の保険料 → <strong>お住まいの市区町村窓口</strong></li>
              </ul>
            </div>
          </section>

          {/* 法改正への対応 */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">4. 法改正への対応について</h2>
            <p className="text-sm leading-relaxed mb-3">
              税法・社会保険制度は毎年改正されます。本サービスは法改正に合わせてコンテンツを更新するよう努めますが、
              更新が遅れる場合や更新漏れが発生する可能性があります。
            </p>
            <p className="text-sm leading-relaxed">
              重要な制度変更については、国税庁・厚生労働省等の公式情報を必ずご確認ください。
              古い情報や誤りを発見した場合は、お知らせいただけると幸いです。
            </p>
          </section>

          {/* 損害について */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">5. 損害・トラブルについて</h2>
            <p className="text-sm leading-relaxed">
              本サービスの利用または利用不能によって生じた損害（税務上の不利益・ペナルティ等を含む）について、
              本サービスは一切の責任を負いません。
              本サービスのコンテンツ・計算結果の利用は、すべてユーザー自身の責任においてご判断ください。
            </p>
          </section>

          {/* 著作権 */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">6. 著作権について</h2>
            <p className="text-sm leading-relaxed">
              本サービス上のテキスト・図表・ツール等のコンテンツは、本サービスに帰属します。
              無断転載・複製は禁止します。引用する場合は出典を明記してください。
            </p>
          </section>
        </div>

        {/* 関連ページ */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-emerald-600 border border-gray-200 rounded-lg px-4 py-2 hover:border-emerald-300 transition-colors"
            >
              サービスについて
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/privacy"
              className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-emerald-600 border border-gray-200 rounded-lg px-4 py-2 hover:border-emerald-300 transition-colors"
            >
              プライバシーポリシー
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
