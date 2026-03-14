import type { Metadata } from "next";
import { Briefcase, AlertTriangle, CheckCircle, ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import KaigyoChecklist from "./KaigyoChecklist";

export const metadata: Metadata = {
  title: "フリーランス開業ガイド｜最初にやること全まとめ",
  description: "開業届・青色申告申請書・国保切り替えなど、フリーランス開業時にやることをチェックリストで解説。",
  alternates: {
    canonical: "https://freenavi.toromonja.com/guides/kaigyo",
  },
};

const kaigyoFields = [
  {
    field: "氏名・住所",
    note: "現住所を正確に記入。マイナンバーも必要。",
  },
  {
    field: "開業日",
    note: "実際に事業を始めた日。まだ始めていない場合は提出日でOK。",
  },
  {
    field: "職業",
    note: "「Webデザイナー」「フリーライター」「プログラマー」など具体的に記入。",
  },
  {
    field: "屋号",
    note: "なくてもOK。あとから変更も可能。「○○デザイン」など事業名として使う。",
  },
  {
    field: "所得の種類",
    note: "フリーランスは「事業所得」を選択。アルバイトと掛け持ちの場合も事業所得。",
  },
  {
    field: "青色申告の有無",
    note: "「する」を選んで同時に青色申告承認申請書も提出するのがおすすめ。",
  },
];

const monthlyRoutine = [
  {
    timing: "毎月（月末まで）",
    tasks: [
      "その月の収入・経費を会計ソフトに入力する",
      "請求書の未払いがないか確認する",
      "領収書・レシートをスキャンまたは保管する",
    ],
    color: "emerald",
  },
  {
    timing: "四半期ごと（3月・6月・9月・12月）",
    tasks: [
      "売上の推移を確認して年間の着地を予想する",
      "税金の概算を計算してキャッシュフローを管理する",
      "不要な経費がないか見直す",
    ],
    color: "blue",
  },
  {
    timing: "年1回（1〜3月）",
    tasks: [
      "書類（支払調書・控除証明書）を集める",
      "e-Taxで確定申告をする（2月16日〜3月15日）",
      "3月15日までに所得税を納税する",
      "ふるさと納税の申告も確定申告で行う",
    ],
    color: "amber",
  },
];

const colorBorder: Record<string, string> = {
  emerald: "border-l-emerald-500",
  blue: "border-l-blue-500",
  amber: "border-l-amber-500",
};

const colorBadge: Record<string, string> = {
  emerald: "bg-emerald-100 text-emerald-700",
  blue: "bg-blue-100 text-blue-700",
  amber: "bg-amber-100 text-amber-700",
};

export default function KaigyoPage() {
  return (
    <div className="min-h-screen">
      {/* ページヘッダー */}
      <div className="bg-gradient-to-br from-orange-500 to-rose-500 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="w-5 h-5 text-orange-100" />
            <span className="text-orange-100 text-sm font-medium">開業ガイド</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            フリーランス開業ガイド
            <br />
            最初にやること全まとめ
          </h1>
          <p className="text-orange-50 text-lg">
            開業届から帳簿ソフト導入まで、チェックリストで確認しながら進められます
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 md:py-14 space-y-14">
        {/* 開業チェックリスト */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            開業チェックリスト
          </h2>
          <p className="text-gray-500 text-sm mb-5">
            クリックするとチェックが付きます。期限のある手続きは特に注意してください。
          </p>
          <KaigyoChecklist />
        </section>

        {/* 開業届の書き方 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            開業届の書き方
          </h2>
          <p className="text-gray-500 text-sm mb-5">
            「個人事業の開業・廃業等届出書」に記入して税務署に提出します。
            e-Taxからオンライン提出もできます。
          </p>

          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-semibold text-gray-700 text-sm">
                迷いやすいフィールドの解説
              </h3>
            </div>
            <div className="divide-y divide-gray-100">
              {kaigyoFields.map((item, i) => (
                <div key={i} className="flex items-start gap-4 px-5 py-4">
                  <span className="text-sm font-semibold text-gray-700 w-28 shrink-0">
                    {item.field}
                  </span>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600 leading-relaxed">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-start gap-2 bg-blue-50 rounded-xl p-4 border border-blue-100">
            <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
            <p className="text-sm text-blue-800 leading-relaxed">
              開業届は<strong>e-Tax（電子申告）</strong>または税務署の窓口・郵送で提出できます。
              e-Taxを使う場合はマイナンバーカードとスマートフォンがあればOKです。
            </p>
          </div>
        </section>

        {/* 青色申告申請の注意点 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            青色申告申請の注意点
          </h2>
          <p className="text-gray-500 text-sm mb-5">
            青色申告は「申請書を出すだけ」でOK。でも期限だけは厳守してください。
          </p>

          <div className="space-y-3">
            <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-5 flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-red-800 mb-1">
                  ⚠️ 期限を過ぎるとその年は使えません
                </h3>
                <ul className="space-y-1.5 text-sm text-red-700">
                  <li>・ 新規開業の場合：開業日から<strong>2ヶ月以内</strong>に提出</li>
                  <li>・ 既に開業している場合（翌年分から適用）：<strong>3月15日まで</strong>に提出</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-emerald-500" />
                申請のタイミング
              </h3>
              <div className="space-y-3">
                {[
                  {
                    case: "開業届と同時に提出（推奨）",
                    detail: "最もスムーズ。開業届と青色申告承認申請書をまとめて税務署に持参またはe-Taxで提出。",
                  },
                  {
                    case: "開業から2ヶ月以内",
                    detail: "開業届を先に出した場合でも、2ヶ月以内であれば当年から青色申告が使えます。",
                  },
                  {
                    case: "翌年1月1日〜3月15日",
                    detail: "今年の開業年に間に合わなかった場合。翌年分から青色申告を使えます。",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{item.case}</p>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 開業後の毎月のルーティン */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            開業後の毎月のルーティン
          </h2>
          <p className="text-gray-500 text-sm mb-5">
            定期的にやることを習慣化しておくと、確定申告が楽になります
          </p>

          <div className="space-y-4">
            {monthlyRoutine.map((routine) => (
              <div
                key={routine.timing}
                className={`bg-white border border-l-4 rounded-xl p-5 shadow-sm ${colorBorder[routine.color]}`}
              >
                <div className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3 ${colorBadge[routine.color]}`}>
                  {routine.timing}
                </div>
                <ul className="space-y-2">
                  {routine.tasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700 leading-relaxed">{task}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 関連リンク */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4">あわせて読みたい</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                href: "/guides/kakutei-shinkoku",
                title: "確定申告ガイド",
                description: "青色申告の手順を詳しく解説",
              },
              {
                href: "/guides/setsuzei",
                title: "節税ガイド",
                description: "iDeCo・小規模企業共済で節税",
              },
              {
                href: "/guides/shakai-hoken",
                title: "社会保険ガイド",
                description: "国保・任意継続の比較と手続き",
              },
              {
                href: "/tools/teardown",
                title: "手取りシミュレーター",
                description: "開業後の手取り額を計算",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-orange-300 hover:shadow-sm transition-all group"
              >
                <Briefcase className="w-5 h-5 text-orange-400 shrink-0" />
                <div>
                  <p className="font-medium text-gray-800 text-sm group-hover:text-orange-700">
                    {link.title}
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
