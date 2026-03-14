import type { Metadata } from "next";
import Link from "next/link";
import { PiggyBank, CheckCircle, AlertTriangle, ArrowRight, Info } from "lucide-react";
import FurusatoAccordion from "./FurusatoAccordion";

export const metadata: Metadata = {
  title: "フリーランスのふるさと納税｜確定申告での控除の受け方",
  description:
    "フリーランスのふるさと納税の注意点・確定申告での申告方法・控除上限額の目安・おすすめの流れを初心者向けに解説します。",
};

const limitTable = [
  { income: 200, familyNone: "約2.4万円", familySpouse: "約1.8万円" },
  { income: 300, familyNone: "約3.5万円", familySpouse: "約2.8万円" },
  { income: 400, familyNone: "約4.2万円", familySpouse: "約3.4万円" },
  { income: 500, familyNone: "約6.1万円", familySpouse: "約5.4万円" },
  { income: 600, familyNone: "約7.7万円", familySpouse: "約6.9万円" },
  { income: 800, familyNone: "約12.9万円", familySpouse: "約12.1万円" },
  { income: 1000, familyNone: "約17.6万円", familySpouse: "約16.8万円" },
];

const annualFlow = [
  {
    timing: "6月ごろ",
    action: "前年の住民税決定通知書を確認",
    detail: "市区町村から届く「住民税決定通知書」に所得が記載されています。これをもとに上限額を確認します。",
  },
  {
    timing: "7〜11月",
    action: "ふるさと納税サイトで上限額を確認・寄附",
    detail: "「さとふる」「ふるさとチョイス」などのサイトで上限額シミュレーションを行い、上限内で寄附します。",
  },
  {
    timing: "12月末まで",
    action: "その年の分の寄附を完了させる",
    detail: "当年分の控除対象は12月31日までの寄附です。年末に慌てないよう早めに完了させましょう。",
  },
  {
    timing: "翌年1〜3月",
    action: "確定申告で寄附金控除を申告する",
    detail: "各自治体から届く「寄附金受領証明書」を使って確定申告の「寄附金控除」欄に記入します。",
  },
];

export default function FurusatoNozeiPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-rose-500 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center gap-2 mb-4">
            <PiggyBank className="w-5 h-5 text-rose-100" />
            <span className="text-rose-100 text-sm font-medium">節税ガイド</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            フリーランスのふるさと納税
            <br />
            確定申告での控除の受け方
          </h1>
          <p className="text-rose-50 text-lg">
            実質2,000円の自己負担で地域の特産品がもらえる節税制度です
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 md:py-14 space-y-14">

        {/* フリーランスの注意点 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            フリーランスとふるさと納税の大事な注意点
          </h2>
          <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-5 flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-amber-800 mb-2">
                ワンストップ特例は使えません
              </h3>
              <p className="text-sm text-amber-700 leading-relaxed">
                ワンストップ特例（確定申告不要でふるさと納税の控除を受けられる制度）は、
                <strong>確定申告をしない会社員向けの制度</strong>です。
                フリーランスは確定申告をするため、ワンストップ特例の申請書を提出しても無効になります。
                必ず確定申告で「寄附金控除」として申告してください。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税の仕組み */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">ふるさと納税の仕組み</h2>
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              {[
                { label: "自己負担額", value: "2,000円", note: "上限内なら何件寄附しても2,000円" },
                { label: "残りの寄附額", value: "全額控除", note: "所得税＋住民税から控除" },
                { label: "返礼品", value: "寄附額の3割", note: "地域の特産品・体験など" },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-3">
                  <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                  <p className="font-bold text-gray-900 text-lg">{item.value}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.note}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-start gap-2 bg-rose-50 rounded-xl p-3 border border-rose-100">
              <Info className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
              <p className="text-sm text-rose-800">
                例えば、5万円のふるさと納税をした場合、<strong>2,000円の自己負担</strong>で
                約1.5万円相当の返礼品がもらえ、残り4.8万円が税金から控除されます。
              </p>
            </div>
          </div>
        </section>

        {/* 確定申告での申告方法 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">確定申告での控除の受け方</h2>
          <div className="space-y-3">
            {[
              { step: 1, title: "寄附金受領証明書を集める", detail: "各自治体から送付される証明書を保管します。複数の自治体に寄附した場合は全部揃えます。" },
              { step: 2, title: "確定申告書の「寄附金控除」欄に記入する", detail: "e-Taxやfreeeの確定申告機能で「寄附金控除」を選び、寄附先・金額を入力します。" },
              { step: 3, title: "証明書を添付またはデータで提出する", detail: "e-Taxの場合はデータ送信、紙申告の場合は証明書を添付します。" },
            ].map((s) => (
              <div key={s.step} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                <div className="w-8 h-8 bg-rose-500 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">{s.step}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 控除上限額一覧表 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">控除上限額の目安（所得別）</h2>
          <p className="text-gray-500 text-sm mb-5">
            上限額は所得・家族構成によって変わります。以下はあくまで目安です。
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full min-w-[400px]">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left text-sm font-semibold text-gray-600 px-4 py-3 border-b border-gray-200">事業所得（年）</th>
                  <th className="text-center text-sm font-semibold text-rose-700 px-4 py-3 border-b border-gray-200 bg-rose-50">独身・配偶者なし</th>
                  <th className="text-center text-sm font-semibold text-gray-600 px-4 py-3 border-b border-gray-200">配偶者あり（専業）</th>
                </tr>
              </thead>
              <tbody>
                {limitTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}>
                    <td className="text-sm font-medium text-gray-800 px-4 py-3 border-b border-gray-100">{row.income}万円</td>
                    <td className="text-sm text-center font-semibold text-rose-600 px-4 py-3 border-b border-gray-100 bg-rose-50/40">{row.familyNone}</td>
                    <td className="text-sm text-center text-gray-600 px-4 py-3 border-b border-gray-100">{row.familySpouse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            ※ 青色申告65万円控除後の事業所得を想定した概算です。実際の上限額は各ふるさと納税サイトのシミュレーターでご確認ください。
          </p>
        </section>

        {/* おすすめの流れ */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">おすすめの年間スケジュール</h2>
          <p className="text-gray-500 text-sm mb-6">この流れで進めると無駄なく控除が受けられます</p>
          <div className="space-y-3">
            {annualFlow.map((f, i) => (
              <div key={i} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                <div className="shrink-0">
                  <span className="text-xs font-bold bg-rose-100 text-rose-700 px-2.5 py-1 rounded-full">{f.timing}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-sm">{f.action}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{f.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-start gap-2 bg-emerald-50 rounded-xl p-4 border border-emerald-100">
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <p className="text-sm text-emerald-800 leading-relaxed">
              フリーランスは所得が変動しやすいため、年末に近い時期に年間所得の見込みを確認してから上限額を算出すると安心です。
              上限を超えた分は全額自己負担になるので、少し余裕を持った金額で寄附するのが安全です。
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">よくある質問</h2>
          <p className="text-gray-500 text-sm mb-6">ふるさと納税でよく疑問になることをまとめました</p>
          <FurusatoAccordion />
        </section>

        {/* CTA */}
        <section>
          <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">その他の節税方法も確認しよう</h3>
              <p className="text-rose-100 text-sm">iDeCo・小規模企業共済と組み合わせるとさらにお得です</p>
            </div>
            <Link
              href="/guides/setsuzei"
              className="inline-flex items-center gap-2 bg-white text-rose-700 font-bold px-6 py-3 rounded-xl hover:bg-rose-50 transition-colors whitespace-nowrap shrink-0"
            >
              節税ガイドを見る
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
