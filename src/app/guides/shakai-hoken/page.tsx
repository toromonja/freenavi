import type { Metadata } from "next";
import { Shield, CheckCircle, AlertCircle, ArrowRight, Info } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "フリーランスの社会保険・国民健康保険 完全ガイド",
  description:
    "フリーランスの国民健康保険・任意継続の比較、保険料の仕組み、軽減制度、国民年金の免除制度、退職時の手続きをわかりやすく解説します。",
};

const comparisonRows = [
  {
    item: "保険料の水準",
    kokuho: "前年所得に応じて変動（所得が低いと安い）",
    ninizoku: "退職前の保険料の約2倍（上限あり）",
  },
  {
    item: "加入できる期間",
    kokuho: "制限なし",
    ninizoku: "退職後最長2年間",
  },
  {
    item: "扶養の扱い",
    kokuho: "家族も各自加入（保険料が増える）",
    ninizoku: "扶養家族の保険料が不要",
  },
  {
    item: "申請期限",
    kokuho: "退職から14日以内",
    ninizoku: "退職から20日以内（厳守）",
  },
  {
    item: "こんな人におすすめ",
    kokuho: "前年所得が低い・扶養家族がいない",
    ninizoku: "前年所得が高い・扶養家族がいる",
  },
];

const reductionLevels = [
  {
    level: "7割軽減",
    condition: "世帯の所得が43万円以下（均等割額の7割を軽減）",
    detail: "低所得世帯向け。均等割の7割分を軽減してもらえます。",
    color: "emerald",
  },
  {
    level: "5割軽減",
    condition: "43万円 + 29万円×被保険者数 以下",
    detail: "中低所得世帯向け。均等割の5割分を軽減してもらえます。",
    color: "blue",
  },
  {
    level: "2割軽減",
    condition: "43万円 + 53.5万円×被保険者数 以下",
    detail: "低中所得世帯向け。均等割の2割分を軽減してもらえます。",
    color: "purple",
  },
];

const nenkinExemptions = [
  {
    type: "全額免除",
    condition: "前年所得が一定以下（単身：57万円以下が目安）",
    effect: "保険料が全額免除。ただし将来の年金額は半額になる。",
    color: "emerald",
  },
  {
    type: "3/4免除",
    condition: "全額免除より少し所得が高い場合",
    effect: "保険料の3/4が免除。",
    color: "blue",
  },
  {
    type: "半額免除",
    condition: "3/4免除より少し所得が高い場合",
    effect: "保険料の半額が免除。",
    color: "purple",
  },
  {
    type: "1/4免除",
    condition: "半額免除より少し所得が高い場合",
    effect: "保険料の1/4が免除。",
    color: "amber",
  },
  {
    type: "納付猶予",
    condition: "50歳未満で所得が少ない場合",
    effect: "支払いを猶予（免除ではないが、延滞にならない）。",
    color: "rose",
  },
];

const checklist = [
  { item: "健康保険の資格喪失証明書を会社からもらう", note: "国保加入手続きに必要" },
  { item: "国民健康保険に加入する（退職から14日以内）", note: "市区町村の窓口またはオンライン" },
  { item: "国民年金の種別変更をする（退職から14日以内）", note: "第2号→第1号被保険者への変更" },
  { item: "任意継続にする場合は退職から20日以内に申請", note: "期限を1日でも過ぎると申請不可" },
  { item: "所得が少ない場合は国民年金の免除申請を検討", note: "7月〜翌6月が申請期間" },
  { item: "国保料の軽減制度に該当するか確認する", note: "自動適用の場合もあるが確認を推奨" },
];

const colorBg: Record<string, string> = {
  emerald: "bg-emerald-50 border-emerald-200",
  blue: "bg-blue-50 border-blue-200",
  purple: "bg-purple-50 border-purple-200",
  amber: "bg-amber-50 border-amber-200",
  rose: "bg-rose-50 border-rose-200",
};

const colorText: Record<string, string> = {
  emerald: "text-emerald-700",
  blue: "text-blue-700",
  purple: "text-purple-700",
  amber: "text-amber-700",
  rose: "text-rose-700",
};

const colorBadge: Record<string, string> = {
  emerald: "bg-emerald-100 text-emerald-800",
  blue: "bg-blue-100 text-blue-800",
  purple: "bg-purple-100 text-purple-800",
  amber: "bg-amber-100 text-amber-800",
  rose: "bg-rose-100 text-rose-800",
};

export default function ShakaiHokenPage() {
  return (
    <div className="min-h-screen">
      {/* ページヘッダー */}
      <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-purple-200" />
            <span className="text-purple-200 text-sm font-medium">社会保険ガイド</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            フリーランスの社会保険・
            <br />
            国民健康保険 完全ガイド
          </h1>
          <p className="text-purple-100 text-lg">
            退職後の手続き・保険料の仕組み・お得な制度をわかりやすく解説します
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 md:py-14 space-y-14">
        {/* 国保 vs 任意継続 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            国民健康保険 vs 任意継続、どちらが得？
          </h2>
          <p className="text-gray-500 text-sm mb-4">
            退職後は14〜20日以内に手続きが必要です。どちらが安いかは前年所得によって異なります。
          </p>

          {/* 判断チャート */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-5">
            <div className="flex items-start gap-2 mb-3">
              <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <p className="text-sm font-semibold text-amber-800">どちらを選ぶべき？簡単な判断基準</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-4 border border-amber-100">
                <p className="text-xs font-semibold text-gray-500 mb-1">国民健康保険がおすすめ</p>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                    退職後すぐに収入が減った（前年所得が低い）
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                    扶養家族がいない
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                    長期的に保険料を抑えたい
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-4 border border-amber-100">
                <p className="text-xs font-semibold text-gray-500 mb-1">任意継続がおすすめ</p>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-500 mt-0.5 shrink-0" />
                    退職前の収入が高かった（前年所得が高い）
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-500 mt-0.5 shrink-0" />
                    扶養家族がいる（扶養分の保険料が不要）
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-500 mt-0.5 shrink-0" />
                    2年以内に再就職する予定
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 比較表 */}
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full min-w-[520px]">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left text-sm font-semibold text-gray-600 px-4 py-3 border-b border-gray-200 w-1/3">
                    比較項目
                  </th>
                  <th className="text-center text-sm font-semibold text-purple-700 px-4 py-3 border-b border-gray-200 bg-purple-50">
                    国民健康保険
                  </th>
                  <th className="text-center text-sm font-semibold text-blue-700 px-4 py-3 border-b border-gray-200">
                    任意継続
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="text-sm font-medium text-gray-700 px-4 py-3 border-b border-gray-100">
                      {row.item}
                    </td>
                    <td className="text-sm text-center text-gray-700 px-4 py-3 border-b border-gray-100 bg-purple-50/40">
                      {row.kokuho}
                    </td>
                    <td className="text-sm text-center text-gray-700 px-4 py-3 border-b border-gray-100">
                      {row.ninizoku}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 国保の保険料の仕組み */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            国保の保険料はどうやって決まる？
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            国保の保険料は「所得割」「均等割」「平等割」の3つで構成されます
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
            {[
              {
                name: "所得割",
                description: "前年の所得に応じて計算される部分。所得が多いほど高くなります。",
                formula: "（所得 − 43万円）× 料率",
                color: "purple",
              },
              {
                name: "均等割",
                description: "加入者1人あたり一定額かかる部分。家族が多いほど高くなります。",
                formula: "被保険者数 × 一定額",
                color: "blue",
              },
              {
                name: "平等割",
                description: "世帯ごとに一定額かかる部分（設定していない自治体もあります）。",
                formula: "世帯あたり一定額",
                color: "indigo",
              },
            ].map((item) => (
              <div key={item.name} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                <div className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3 ${colorBadge[item.color] ?? "bg-gray-100 text-gray-700"}`}>
                  {item.name}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.description}</p>
                <div className="bg-gray-50 rounded-lg px-3 py-2">
                  <p className="text-xs font-mono text-gray-500">{item.formula}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-2 bg-purple-50 rounded-xl p-4 border border-purple-100">
            <AlertCircle className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
            <p className="text-sm text-purple-800 leading-relaxed">
              料率は<strong>市区町村ごとに異なります</strong>。東京都と地方では保険料が大きく変わることもあります。
              手取りシミュレーターでは都道府県別の概算料率を使って計算しています。
              より正確な金額は各自治体の窓口やウェブサイトでご確認ください。
            </p>
          </div>
        </section>

        {/* 国保の軽減制度 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            国保料が安くなる「軽減制度」
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            所得が低い世帯は、均等割額が自動的に軽減されます（申請不要の場合が多い）
          </p>

          <div className="space-y-3">
            {reductionLevels.map((level) => (
              <div
                key={level.level}
                className={`rounded-xl border p-4 ${colorBg[level.color]}`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-sm font-bold px-3 py-1 rounded-full ${colorBadge[level.color]}`}>
                    {level.level}
                  </span>
                  <p className={`text-sm font-medium ${colorText[level.color]}`}>
                    {level.condition}
                  </p>
                </div>
                <p className="text-sm text-gray-600 pl-1">{level.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-start gap-2 bg-gray-50 rounded-xl p-4 border border-gray-200">
            <Info className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
            <p className="text-sm text-gray-500 leading-relaxed">
              軽減は均等割のみに適用されます。所得割には別の計算が適用されます。
              退職した年は前年所得がまだ高いため軽減が受けられないことがありますが、
              翌年以降に所得が減れば軽減対象になります。
            </p>
          </div>
        </section>

        {/* 国民年金の仕組みと免除制度 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            国民年金の仕組みと免除制度
          </h2>
          <p className="text-gray-500 text-sm mb-5">
            所得が少ない年は保険料の免除を申請できます。未納とは違い、年金受給資格に影響が少ない制度です
          </p>

          {/* 年金の基礎 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-5 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-4">国民年金の基本</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "月々の保険料", value: "20,140円", note: "2026年度" },
                { label: "年間の保険料", value: "241,680円", note: "月額 × 12ヶ月" },
                { label: "老齢基礎年金（満額）", value: "816,000円/年", note: "40年間納付した場合" },
              ].map((item) => (
                <div key={item.label} className="text-center bg-gray-50 rounded-xl p-3">
                  <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                  <p className="font-bold text-gray-900 text-lg">{item.value}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 免除制度 */}
          <div className="space-y-2">
            {nenkinExemptions.map((item) => (
              <div
                key={item.type}
                className={`rounded-xl border p-4 ${colorBg[item.color]}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1.5">
                  <span className={`shrink-0 text-xs font-bold px-2.5 py-1 rounded-full w-fit ${colorBadge[item.color]}`}>
                    {item.type}
                  </span>
                  <p className={`text-sm font-medium ${colorText[item.color]}`}>
                    {item.condition}
                  </p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.effect}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-start gap-2 bg-amber-50 rounded-xl p-4 border border-amber-100">
            <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-amber-800 mb-1">
                未納と免除は全く違います
              </p>
              <p className="text-sm text-amber-700 leading-relaxed">
                保険料を未納のままにすると、将来の年金受給資格を失う可能性があります。
                支払いが難しい場合は必ず<strong>免除申請</strong>をしてください。
                免除を受けても受給資格の期間にはカウントされます（年金額は減りますが、無収入の期間を保護できます）。
              </p>
            </div>
          </div>
        </section>

        {/* 退職時の手続きチェックリスト */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            退職時の手続きチェックリスト
          </h2>
          <p className="text-gray-500 text-sm mb-5">
            退職後の手続きには期限があります。忘れずに対応しましょう
          </p>

          <div className="space-y-2">
            {checklist.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3.5 shadow-sm"
              >
                <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs text-gray-400 font-bold">{i + 1}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800">{item.item}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">
                国保料がいくらになるか計算したい
              </h3>
              <p className="text-purple-100 text-sm">
                手取りシミュレーターで国保料の概算も確認できます
              </p>
            </div>
            <Link
              href="/tools/teardown"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-6 py-3 rounded-xl hover:bg-purple-50 transition-colors whitespace-nowrap shrink-0"
            >
              手取り・国保料を計算
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
