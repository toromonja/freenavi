import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "freenavのプライバシーポリシーです。",
  alternates: {
    canonical: "https://freenavi.toromonja.com/privacy",
  },
};

const LAST_UPDATED = "2026年3月14日";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* ページヘッダー */}
      <div className="bg-gray-800 text-white">
        <div className="max-w-3xl mx-auto px-4 py-10 md:py-12">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">プライバシーポリシー</h1>
          <p className="text-gray-400 text-sm">最終更新日：{LAST_UPDATED}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10 md:py-14">
        <div className="prose prose-gray max-w-none space-y-10 text-gray-700">
          {/* 基本方針 */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">1. 基本方針</h2>
            <p className="text-sm leading-relaxed">
              freenavi（以下「本サービス」）は、ユーザーのプライバシーを尊重し、
              個人情報の保護に努めます。本ページでは、本サービスにおける情報の取り扱いについて説明します。
            </p>
          </section>

          {/* 取得する情報 */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">2. 取得する情報</h2>
            <p className="text-sm leading-relaxed mb-4">
              本サービスは、ユーザーの個人情報（氏名・住所・メールアドレス等）を直接収集することは行っていません。
              ただし、以下の情報をアクセス解析ツールを通じて自動的に収集しています。
            </p>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-4">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 shrink-0 mt-0.5">・</span>
                  アクセス日時・閲覧ページ・滞在時間
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 shrink-0 mt-0.5">・</span>
                  ブラウザの種類・OS・デバイスの種類
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 shrink-0 mt-0.5">・</span>
                  IPアドレス（地域の特定に使用。個人の特定はしません）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 shrink-0 mt-0.5">・</span>
                  参照元URL（どのページから来たか）
                </li>
              </ul>
            </div>
            <p className="text-sm leading-relaxed mt-4 bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-emerald-800">
              <strong>計算ツールへの入力値（年収・所得・経費等）は、サーバーに送信されません。</strong>
              すべての計算はブラウザ内（お使いの端末上）で行われ、本サービスは一切取得・保存していません。
            </p>
          </section>

          {/* Cookieの使用 */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">3. Cookieの使用</h2>
            <p className="text-sm leading-relaxed mb-3">
              本サービスは、アクセス解析の目的でCookie（クッキー）を使用する場合があります。
              Cookieはブラウザの設定から無効にすることができます。
              ただし、Cookieを無効にした場合、一部の機能が正常に動作しない場合があります。
            </p>
            <p className="text-sm leading-relaxed">
              本サービスが使用するアクセス解析ツールは、収集したデータをユーザーの同意なく第三者に販売・提供することはありません。
            </p>
          </section>

          {/* 第三者への提供 */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">4. 情報の第三者提供</h2>
            <p className="text-sm leading-relaxed">
              本サービスは、法令に基づく場合を除き、取得した情報を第三者に提供・販売することはありません。
            </p>
          </section>

          {/* 外部サービス */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">5. 外部サービスへのリンク</h2>
            <p className="text-sm leading-relaxed">
              本サービスには外部サイトへのリンクが含まれる場合があります。
              リンク先のサービスにおける情報の取り扱いは、各サービスのプライバシーポリシーに従います。
              本サービスはリンク先の内容・プライバシー対応について責任を負いません。
            </p>
          </section>

          {/* プライバシーポリシーの変更 */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">6. プライバシーポリシーの変更</h2>
            <p className="text-sm leading-relaxed">
              本ポリシーは、法令の改正や運営方針の変更に伴い、予告なく変更する場合があります。
              変更後のポリシーは本ページに掲載した時点で効力を生じます。
              定期的にご確認いただくことをおすすめします。
            </p>
          </section>

          {/* お問い合わせ */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">7. お問い合わせ</h2>
            <p className="text-sm leading-relaxed">
              本ポリシーに関するお問い合わせ、または本サービスへのご意見・ご質問については、
              サイト内の各ページよりお問い合わせください。
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
              href="/disclaimer"
              className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-emerald-600 border border-gray-200 rounded-lg px-4 py-2 hover:border-emerald-300 transition-colors"
            >
              免責事項
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
