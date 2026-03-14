import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, CheckCircle, AlertTriangle, ArrowRight, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "開業届の書き方と提出方法",
  description: "開業届の各項目の書き方・提出方法を解説。青色申告承認申請書の同時提出も必須！",
  alternates: {
    canonical: "https://freenavi.toromonja.com/guides/kaigyodoke",
  },
};

const fields = [
  {
    label: "提出先",
    example: "○○税務署長 殿",
    note: "納税地（自宅または事務所）を管轄する税務署名を記入します。",
  },
  {
    label: "提出日",
    example: "令和◯年◯月◯日",
    note: "実際に提出する日を記入します。",
  },
  {
    label: "納税地",
    example: "東京都渋谷区◯◯1-2-3",
    note: "自宅を事業所とする場合は自宅の住所。別途事務所がある場合はその住所も選択できます。",
  },
  {
    label: "氏名・生年月日",
    example: "山田 太郎 / 昭和◯◯年◯月◯日",
    note: "本名をフルネームで記入します。",
  },
  {
    label: "個人番号（マイナンバー）",
    example: "12桁の番号",
    note: "マイナンバーカードまたは通知カードを見て記入します。",
  },
  {
    label: "職業",
    example: "ウェブデザイナー / ITエンジニア / ライター など",
    note: "「フリーランス」ではなく具体的な職種を記入します。業種によって後から変更も可能です。",
  },
  {
    label: "屋号",
    example: "（空欄でも可）",
    note: "屋号がない場合は空欄でOK。後から変更・追加もできます。",
  },
  {
    label: "開業日",
    example: "令和◯年◯月◯日",
    note: "最初に収入を得た日や業務を開始した日が目安。正確でなくても大丈夫です。",
  },
  {
    label: "事業の概要",
    example: "Webサイトのデザイン・制作 / ライティング業務など",
    note: "事業内容をわかりやすく記入します。複数の業務がある場合はまとめて書けます。",
  },
  {
    label: "所得の種類",
    example: "事業所得",
    note: "フリーランスの場合は原則「事業所得」を選択します。",
  },
];

const submissionMethods = [
  {
    method: "税務署窓口",
    detail: "管轄の税務署の窓口に直接持参します。控えに受付印をもらえるので、その場で確認できます。",
    merit: "その場で不明点を聞ける",
  },
  {
    method: "郵送",
    detail: "税務署宛てに書類を郵送します。控えと返送用封筒（切手付き）を同封すれば、受付印を押して返送してもらえます。",
    merit: "税務署に行かなくてよい",
  },
  {
    method: "e-Tax（オンライン）",
    detail: "マイナンバーカードとカードリーダー（またはスマートフォン）があればオンラインで提出できます。",
    merit: "24時間いつでも提出可能",
  },
];

const afterSubmission = [
  {
    title: "国民健康保険の加入手続き",
    detail: "会社員をやめた場合、退職日の翌日から14日以内に市区町村窓口で国民健康保険に加入します。",
  },
  {
    title: "国民年金への種別変更",
    detail: "会社の厚生年金から国民年金（第1号被保険者）への切り替えが必要です。市区町村窓口で手続きします。",
  },
  {
    title: "青色申告承認申請書の提出（未提出の場合）",
    detail: "開業届と同時に提出しなかった場合は、忘れず提出してください。期限は開業から2ヶ月以内です。",
  },
  {
    title: "帳簿・会計ソフトの準備",
    detail: "青色申告をするには日々の帳簿をつける必要があります。freee・マネーフォワードなどの会計ソフトを早めに導入しましょう。",
  },
];

export default function KaigyodokePage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-rose-500 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="w-5 h-5 text-rose-100" />
            <span className="text-rose-100 text-sm font-medium">開業・手続きガイド</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            開業届の書き方と提出方法
            <br />
            青色申告申請書も同時に出そう
          </h1>
          <p className="text-rose-50 text-lg">
            記入例付きで各項目をわかりやすく解説します
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 md:py-14 space-y-14">

        {/* 開業届とは */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">開業届とは？出す必要はある？</h2>
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              開業届（正式名：「個人事業の開業・廃業等届出書」）は、個人で事業を始めたことを税務署に知らせる書類です。
              法律上は<strong>事業開始から1ヶ月以内に提出する義務</strong>がありますが、罰則はなく、後から提出しても受け付けてもらえます。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { title: "出すメリット", items: ["青色申告（65万円控除）の申請ができる", "屋号で銀行口座を開設できる", "小規模企業共済に加入できる", "事業者としての信頼感が増す"] },
                { title: "出さないデメリット", items: ["青色申告できず白色申告のみ", "最大65万円の控除が受けられない", "一部の補助金・融資の対象外になる場合も", "事業所得ではなく雑所得とみなされるリスク"] },
              ].map((col) => (
                <div key={col.title} className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-800 text-sm mb-2">{col.title}</h3>
                  <ul className="space-y-1.5">
                    {col.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 書き方の解説 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">書き方の解説（記入例付き）</h2>
          <p className="text-gray-500 text-sm mb-5">
            国税庁のWebサイトから用紙をダウンロードするか、e-Taxでオンライン入力できます。
          </p>
          <div className="space-y-3">
            {fields.map((field, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                <div className="flex flex-wrap items-start gap-3 mb-2">
                  <span className="text-xs font-bold bg-rose-100 text-rose-700 px-2.5 py-1 rounded-full shrink-0">{field.label}</span>
                  <span className="text-sm font-mono text-gray-600 bg-gray-50 px-3 py-0.5 rounded border border-gray-200">{field.example}</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{field.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 青色申告申請書の同時提出 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            青色申告承認申請書も必ず同時に提出してください
          </h2>
          <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-5 flex items-start gap-3 mb-5">
            <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-amber-800 mb-2">期限を過ぎると当年は白色申告になります</h3>
              <p className="text-sm text-amber-700 leading-relaxed">
                青色申告（65万円控除）は、<strong>開業した年から適用を受けたい場合、開業日から2ヶ月以内</strong>に
                「青色申告承認申請書」を提出する必要があります。
                開業届と同時に提出するのが最も確実です。期限を過ぎると、その年は白色申告になります。
              </p>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-3 text-sm">青色申告申請書で選ぶ項目</h3>
            <div className="space-y-3">
              {[
                { label: "備付帳簿名", value: "「仕訳帳」「総勘定元帳」「現金出納帳」などにチェックを入れます。会計ソフトを使う場合はすべてにチェックでOK。" },
                { label: "所得の種類", value: "「事業所得」を選択します。" },
                { label: "簿記方式", value: "「複式簿記」を選択すると65万円控除の対象になります（会計ソフトなら自動で複式）。" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 py-2 border-b border-gray-100 last:border-0">
                  <span className="text-xs font-semibold text-gray-600 w-28 shrink-0 pt-0.5">{item.label}</span>
                  <p className="text-xs text-gray-700 leading-relaxed">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-start gap-2 bg-emerald-50 rounded-xl p-3 border border-emerald-100">
              <Info className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <p className="text-xs text-emerald-800 leading-relaxed">
                青色申告の詳細（65万円控除の条件・メリット）は
                <Link href="/guides/blue-declaration" className="underline font-semibold ml-0.5">
                  青色申告ガイド
                </Link>
                で解説しています。
              </p>
            </div>
          </div>
        </section>

        {/* 提出方法 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">提出方法</h2>
          <p className="text-gray-500 text-sm mb-5">
            開業届と青色申告承認申請書を一緒に提出します。どの方法でも書類の様式は同じです。
          </p>
          <div className="space-y-3">
            {submissionMethods.map((m, i) => (
              <div key={i} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                <div className="w-8 h-8 bg-rose-500 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">{i + 1}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-800 text-sm">{m.method}</h3>
                    <span className="text-xs bg-rose-50 text-rose-700 px-2 py-0.5 rounded-full border border-rose-100">{m.merit}</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{m.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-start gap-2 bg-blue-50 rounded-xl p-4 border border-blue-100">
            <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
            <p className="text-sm text-blue-800 leading-relaxed">
              開業届の控え（受付印あり）は後で融資や補助金の申請時に必要になる場合があります。必ず控えを受け取るか、コピーを保管しておきましょう。
            </p>
          </div>
        </section>

        {/* 提出後にやること */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">提出後にやること</h2>
          <p className="text-gray-500 text-sm mb-5">
            開業届を出した後も、忘れずに対応が必要な手続きがあります。
          </p>
          <div className="space-y-3">
            {afterSubmission.map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-gradient-to-r from-rose-500 to-orange-500 rounded-2xl p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">開業後の手続きを全部確認したい</h3>
              <p className="text-rose-100 text-sm">開業チェックリスト付きで必要な手続きをまとめています</p>
            </div>
            <Link
              href="/guides/kaigyo"
              className="inline-flex items-center gap-2 bg-white text-rose-700 font-bold px-6 py-3 rounded-xl hover:bg-rose-50 transition-colors whitespace-nowrap shrink-0"
            >
              開業ガイドを見る
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
