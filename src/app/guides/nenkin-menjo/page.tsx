import type { Metadata } from "next";
import Link from "next/link";
import { Shield, AlertTriangle, CheckCircle, ArrowRight, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "国民年金の免除・猶予制度ガイド",
  description: "収入が少ない時期に使える国民年金の免除・猶予制度の申請方法と年金への影響を解説。",
  alternates: {
    canonical: "https://freenavi.toromonja.com/guides/nenkin-menjo",
  },
};

const exemptionLevels = [
  {
    type: "全額免除",
    incomeStandard: "（扶養親族等なし）前年所得 約67万円以下が目安",
    penaltyNote: "将来の年金額は満額の1/2",
    color: "emerald",
    reductionRate: "保険料 0円",
  },
  {
    type: "3/4免除",
    incomeStandard: "全額免除より少し所得が高い場合",
    penaltyNote: "将来の年金額は満額の5/8",
    color: "blue",
    reductionRate: "保険料 約5,035円/月",
  },
  {
    type: "半額免除",
    incomeStandard: "3/4免除より少し所得が高い場合",
    penaltyNote: "将来の年金額は満額の3/4",
    color: "purple",
    reductionRate: "保険料 約10,070円/月",
  },
  {
    type: "1/4免除",
    incomeStandard: "半額免除より少し所得が高い場合",
    penaltyNote: "将来の年金額は満額の7/8",
    color: "amber",
    reductionRate: "保険料 約15,105円/月",
  },
  {
    type: "納付猶予（50歳未満）",
    incomeStandard: "50歳未満・所得基準を満たす場合",
    penaltyNote: "受給資格期間にカウントされるが年金額には反映されない",
    color: "rose",
    reductionRate: "保険料 0円（猶予）",
  },
];

const colorStyle: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  emerald: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", badge: "bg-emerald-100 text-emerald-800" },
  blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700", badge: "bg-blue-100 text-blue-800" },
  purple: { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-700", badge: "bg-purple-100 text-purple-800" },
  amber: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700", badge: "bg-amber-100 text-amber-800" },
  rose: { bg: "bg-rose-50", border: "border-rose-200", text: "text-rose-700", badge: "bg-rose-100 text-rose-800" },
};

const applicationSteps = [
  {
    step: 1,
    title: "申請書類を入手する",
    detail: "お住まいの市区町村の窓口またはウェブサイトから「国民年金保険料免除・納付猶予申請書」を入手します。",
  },
  {
    step: 2,
    title: "必要書類を用意する",
    detail: "マイナンバーカードまたは基礎年金番号がわかるもの。失業・廃業が理由の場合は雇用保険受給資格者証や廃業届の控えも用意します。",
  },
  {
    step: 3,
    title: "市区町村窓口または年金事務所に申請する",
    detail: "市区町村の国民年金担当窓口に提出します。郵送でも申請可能です。",
  },
  {
    step: 4,
    title: "審査結果の通知を受け取る",
    detail: "申請から1〜2ヶ月程度で審査結果が通知されます。承認された場合、対象期間の保険料が免除・猶予されます。",
  },
];

export default function NenkinMenjoPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-purple-200" />
            <span className="text-purple-200 text-sm font-medium">社会保険ガイド</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            国民年金が払えない時の
            <br />
            免除・猶予制度を使おう
          </h1>
          <p className="text-purple-100 text-lg">
            放置は絶対NG。正しい手続きで年金を守りましょう
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 md:py-14 space-y-14">

        {/* 放置NGの注意喚起 */}
        <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-5 flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
          <div>
            <h2 className="font-bold text-red-800 mb-2">払えなくても「放置」は絶対にやめてください</h2>
            <ul className="space-y-1.5 text-sm text-red-700">
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />未納のまま放置すると、老齢・障害・遺族年金の受給資格を失う可能性があります</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />免除・猶予は「申請が必要」です。自動的には適用されません</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />免除・猶予を受ければ受給資格期間（10年）にはカウントされます</li>
            </ul>
          </div>
        </div>

        {/* 免除の種類 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">免除・猶予制度の種類</h2>
          <p className="text-gray-500 text-sm mb-6">
            前年の所得に応じて5段階の制度が利用できます。申請期間は7月〜翌年6月分（前年所得で判定）。
          </p>
          <div className="space-y-3">
            {exemptionLevels.map((level) => {
              const style = colorStyle[level.color];
              return (
                <div key={level.type} className={`rounded-xl border p-4 ${style.bg} ${style.border}`}>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`text-sm font-bold px-3 py-1 rounded-full ${style.badge}`}>{level.type}</span>
                    <span className={`text-xs font-semibold ${style.text}`}>{level.reductionRate}</span>
                  </div>
                  <p className={`text-sm mb-1 ${style.text}`}><span className="font-medium">所得基準：</span>{level.incomeStandard}</p>
                  <p className={`text-xs ${style.text} opacity-80`}><span className="font-medium">年金額への影響：</span>{level.penaltyNote}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-4 flex items-start gap-2 bg-gray-50 rounded-xl p-4 border border-gray-200">
            <Info className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
            <p className="text-sm text-gray-600 leading-relaxed">
              所得基準は扶養親族の人数によって変わります。また失業・廃業した場合は特例として所得基準を満たしやすくなる場合があります。
              詳しくは市区町村の窓口または日本年金機構にお問い合わせください。
            </p>
          </div>
        </section>

        {/* 年金額への影響 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">免除を受けると年金はどうなる？</h2>
          <p className="text-gray-500 text-sm mb-5">
            免除・猶予を受けても「未納」にはなりません。ただし将来受け取る年金額が変わります。
          </p>
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <p className="text-sm font-semibold text-gray-700">老齢基礎年金（満額）との比較</p>
            </div>
            <div className="divide-y divide-gray-100">
              {[
                { status: "40年間すべて納付", rate: "満額（816,000円/年）", marker: "bg-emerald-500" },
                { status: "全額免除期間あり", rate: "免除期間は満額の1/2が年金に反映", marker: "bg-blue-500" },
                { status: "納付猶予期間あり", rate: "猶予期間は年金額に反映されない（受給資格はカウント）", marker: "bg-amber-500" },
                { status: "未納期間あり", rate: "未納期間は年金額・受給資格のどちらにも反映されない", marker: "bg-red-500" },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-3 px-5 py-3">
                  <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${row.marker}`} />
                  <span className="text-sm font-medium text-gray-700 w-48 shrink-0">{row.status}</span>
                  <span className="text-sm text-gray-600">{row.rate}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex items-start gap-2 bg-emerald-50 rounded-xl p-4 border border-emerald-100">
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <p className="text-sm text-emerald-800 leading-relaxed">
              免除を受けた期間でも国庫負担分（税金）は年金に反映されます。
              全額免除の場合、保険料は払っていないのに年金額の1/2は将来受け取れます。
              未納と比べると大きな差があります。
            </p>
          </div>
        </section>

        {/* 申請方法 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">申請方法</h2>
          <p className="text-gray-500 text-sm mb-6">
            申請期間は毎年7月〜翌年6月分。過去2年1ヶ月前まで遡って申請できます。
          </p>
          <div className="space-y-3">
            {applicationSteps.map((s) => (
              <div key={s.step} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center shrink-0">
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

        {/* 追納制度 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">追納制度（後から払い戻せる）</h2>
          <p className="text-gray-500 text-sm mb-5">
            収入が回復したら、免除・猶予期間の保険料を後から納付（追納）して年金額を増やせます
          </p>
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-3">
            {[
              { label: "追納できる期間", value: "免除・猶予を受けた月から10年以内" },
              { label: "加算額", value: "追納が遅れるほど加算額（利子相当）が増えます。3年以内の追納なら加算なし" },
              { label: "手続き", value: "年金事務所または市区町村窓口で「国民年金保険料追納申込書」を提出" },
              { label: "節税効果", value: "追納した保険料は「社会保険料控除」として所得控除の対象になります" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 py-2 border-b border-gray-100 last:border-0">
                <span className="text-sm font-semibold text-gray-600 w-28 shrink-0">{item.label}</span>
                <p className="text-sm text-gray-700 leading-relaxed">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">国保料・手取りを合わせて確認したい</h3>
              <p className="text-purple-100 text-sm">社会保険全般のガイドも参考にしてください</p>
            </div>
            <Link
              href="/guides/shakai-hoken"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-6 py-3 rounded-xl hover:bg-purple-50 transition-colors whitespace-nowrap shrink-0"
            >
              社会保険ガイドを見る
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
