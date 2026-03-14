"use client";

import { useState } from "react";
import {
  ClipboardCheck,
  CheckCircle,
  AlertCircle,
  XCircle,
  ChevronDown,
} from "lucide-react";

type Verdict = "ok" | "conditional" | "no";

interface ExpenseRule {
  verdict: Verdict;
  title: string;
  reason: string;
  tips?: string;
  apportionNote?: string;
}

interface CategoryData {
  label: string;
  emoji: string;
  defaultVerdict: Verdict;
  rules: Array<{
    keywords: string[];
    rule: ExpenseRule;
  }>;
  fallback: ExpenseRule;
}

const CATEGORIES: CategoryData[] = [
  {
    label: "PC・周辺機器",
    emoji: "💻",
    defaultVerdict: "ok",
    rules: [
      {
        keywords: ["ゲーム", "個人", "プライベート", "趣味"],
        rule: {
          verdict: "conditional",
          title: "条件付きで経費になる可能性があります",
          reason: "業務以外の用途がある場合は、業務使用割合で按分して計上する必要があります。",
          apportionNote: "按分の目安：週あたりの業務使用時間 ÷ 総使用時間 で計算します。",
          tips: "購入時のレシートと「業務で使う」という記録を残しておきましょう。",
        },
      },
    ],
    fallback: {
      verdict: "ok",
      title: "経費になります",
      reason: "業務で使用するPC・周辺機器（モニター・キーボード・マウスなど）は全額経費になります。",
      tips: "10万円以上の場合は固定資産として減価償却が必要です（青色申告の場合、30万円未満は一括経費計上可）。",
    },
  },
  {
    label: "通信費（スマホ・ネット）",
    emoji: "📱",
    defaultVerdict: "conditional",
    rules: [
      {
        keywords: ["仕事専用", "法人契約", "業務専用", "事業専用"],
        rule: {
          verdict: "ok",
          title: "経費になります",
          reason: "業務専用の回線・契約であれば全額経費になります。",
          tips: "個人名義でも業務専用として使っている実態があれば全額計上できます。",
        },
      },
    ],
    fallback: {
      verdict: "conditional",
      title: "業務使用割合で按分すれば経費になります",
      reason: "スマホ・インターネット回線はプライベートと兼用が多いため、業務使用分のみ経費計上できます。",
      apportionNote: "按分の目安：業務使用50〜80%が一般的。月次利用明細から実態に合わせた割合で計算します。",
      tips: "割合の根拠を記録しておくと税務調査の際に安心です。",
    },
  },
  {
    label: "交通費",
    emoji: "🚃",
    defaultVerdict: "ok",
    rules: [
      {
        keywords: ["旅行", "観光", "プライベート", "個人", "家族"],
        rule: {
          verdict: "conditional",
          title: "条件付きで経費になる可能性があります",
          reason: "業務目的の移動に限って経費計上できます。プライベート部分は按分が必要です。",
          tips: "出張の場合、業務と観光が混在する場合は業務部分のみ経費にします。",
        },
      },
      {
        keywords: ["打合せ", "訪問", "出張", "現場", "取引先", "クライアント"],
        rule: {
          verdict: "ok",
          title: "経費になります",
          reason: "取引先への訪問・打合せなど業務上の移動は全額経費になります。",
          tips: "交通系ICカードの利用明細や領収書を保管しておきましょう。目的・訪問先も記録すると安心です。",
        },
      },
    ],
    fallback: {
      verdict: "ok",
      title: "経費になります",
      reason: "業務上の移動（打合せ・仕入れ・郵便局など）にかかる交通費は経費になります。",
      tips: "電車・バス・タクシー・駐車場代なども対象です。領収書またはICカード明細を保管しましょう。",
    },
  },
  {
    label: "飲食費",
    emoji: "🍽️",
    defaultVerdict: "conditional",
    rules: [
      {
        keywords: ["打合せ", "接待", "取引先", "クライアント", "商談"],
        rule: {
          verdict: "ok",
          title: "接待交際費として経費になります",
          reason: "取引先・クライアントとの打合せ・接待の飲食代は「接待交際費」として経費になります。",
          tips: "領収書の裏に「参加者名・会社名・目的」を記載しておきましょう。1人あたり5,000円程度が目安。",
        },
      },
      {
        keywords: ["個人", "一人", "昼食", "夕食", "朝食", "ランチ", "ひとりで"],
        rule: {
          verdict: "conditional",
          title: "原則として認められにくい支出です",
          reason: "個人の飲食代は「生活費」とみなされやすく、業務との関連性を証明しにくいため経費計上は困難です。",
          tips: "在宅勤務中のランチ代は業務との関連性が認められにくいです。外出先での会議中の飲食など、明確に業務に関連する場合は記録を残しましょう。",
        },
      },
    ],
    fallback: {
      verdict: "conditional",
      title: "用途によって判断が分かれます",
      reason: "業務上の取引先との飲食（接待交際費）は経費になりますが、個人の食事代は認められにくい傾向があります。",
      tips: "参加者・目的・場所を記録しておくことが重要です。",
    },
  },
  {
    label: "書籍・セミナー",
    emoji: "📚",
    defaultVerdict: "ok",
    rules: [
      {
        keywords: ["趣味", "娯楽", "小説", "マンガ", "漫画", "ゲーム"],
        rule: {
          verdict: "conditional",
          title: "業務との関連性次第です",
          reason: "趣味・娯楽目的の書籍は業務との関連性が認められにくいです。業務に活かす理由があれば経費になる場合があります。",
          tips: "例：マンガでも「イラストレーターとして参考にする」など業務との関連を説明できれば経費化できます。",
        },
      },
    ],
    fallback: {
      verdict: "ok",
      title: "経費になります",
      reason: "業務に関連する書籍・雑誌・セミナー・研修費・オンライン講座の費用は「研修費」または「新聞図書費」として経費になります。",
      tips: "「どの業務に役立てるか」を明確にしておくと安心です。レシートと一緒に保管しましょう。",
    },
  },
  {
    label: "家賃・光熱費",
    emoji: "🏠",
    defaultVerdict: "conditional",
    rules: [
      {
        keywords: ["事務所", "オフィス", "専用", "事業所"],
        rule: {
          verdict: "ok",
          title: "経費になります",
          reason: "事業専用の事務所・オフィスの家賃・光熱費は全額経費になります。",
          tips: "賃貸契約書・領収書を保管しておきましょう。",
        },
      },
    ],
    fallback: {
      verdict: "conditional",
      title: "業務使用割合で按分すれば経費になります",
      reason: "自宅兼事務所の場合、仕事に使っているスペース・時間の割合で家賃・光熱費を按分できます。",
      apportionNote: "按分の計算方法：作業部屋の面積 ÷ 自宅全体の面積 × 家賃 = 経費計上額。光熱費は使用時間の割合で按分します。",
      tips: "間取り図や時間の記録を残しておくと根拠として使えます。一般的に20〜50%程度が目安です。",
    },
  },
  {
    label: "衣類・スーツ",
    emoji: "👔",
    defaultVerdict: "conditional",
    rules: [
      {
        keywords: ["ユニフォーム", "制服", "作業服", "安全靴", "白衣"],
        rule: {
          verdict: "ok",
          title: "経費になります",
          reason: "業務専用の制服・作業服・安全靴・白衣などは「消耗品費」として経費になります。",
          tips: "業務専用であることが前提です。普段着として着用できるものは認められません。",
        },
      },
    ],
    fallback: {
      verdict: "conditional",
      title: "一般的には認められにくい支出です",
      reason: "スーツや衣類は「私的にも使用できる」として、税務上は経費として認められにくいのが現状です。ただし業務専用で私的使用が不可能なものは例外です。",
      tips: "エンジニアや在宅ワーカーのスーツ代は特に認められにくいです。税理士への相談をおすすめします。",
    },
  },
  {
    label: "その他",
    emoji: "📦",
    defaultVerdict: "conditional",
    rules: [
      {
        keywords: ["生命保険", "医療保険", "個人保険"],
        rule: {
          verdict: "no",
          title: "経費にはなりません",
          reason: "事業主個人の生命保険・医療保険の保険料は経費になりません。ただし「生命保険料控除」として所得控除は使えます。",
          tips: "従業員のために支払う保険料は経費になります（福利厚生費）。",
        },
      },
      {
        keywords: ["所得税", "住民税", "税金", "国民年金", "国保", "国民健康保険"],
        rule: {
          verdict: "no",
          title: "経費にはなりません",
          reason: "所得税・住民税・個人の国民年金・国民健康保険料は経費になりません（所得控除は使えます）。",
          tips: "国民年金・国保は「社会保険料控除」として所得控除の対象です。",
        },
      },
      {
        keywords: ["健康診断", "人間ドック"],
        rule: {
          verdict: "conditional",
          title: "事業主本人の場合は原則経費不可です",
          reason: "事業主本人の健康診断費用は経費として認められません。ただし従業員（雇用者）のための健康診断費用は「福利厚生費」として経費になります。",
          tips: "個人事業主は医療費控除として確定申告で一部控除できる場合があります。",
        },
      },
      {
        keywords: ["ソフトウェア", "サブスク", "サービス", "ツール", "クラウド", "アプリ"],
        rule: {
          verdict: "ok",
          title: "経費になります",
          reason: "業務に使用するソフトウェア・クラウドサービス・サブスクリプション費用は経費になります。",
          tips: "Adobe・GitHub・Slack・Notion・ChatGPT Plusなど業務利用のものはすべて対象です。",
        },
      },
      {
        keywords: ["名刺", "印刷", "チラシ", "広告", "マーケティング"],
        rule: {
          verdict: "ok",
          title: "経費になります",
          reason: "事業の宣伝・広告にかかる費用（名刺・チラシ・Web広告など）は「広告宣伝費」として経費になります。",
          tips: "領収書を保管し、何のための広告かを記録しておきましょう。",
        },
      },
    ],
    fallback: {
      verdict: "conditional",
      title: "内容によって判断が異なります",
      reason: "業務との関連性・必要性を説明できるかどうかが判断の基準になります。",
      tips: "「なぜこの支出が業務に必要か」を説明できるよう記録を残しておきましょう。迷った場合は税理士に相談することをおすすめします。",
    },
  },
];

// よくある経費カード（一覧表示用）
const COMMON_EXPENSES = [
  { label: "PC・周辺機器", emoji: "💻", verdict: "ok" as Verdict, note: "10万円以上は減価償却" },
  { label: "スマホ・ネット通信費", emoji: "📱", verdict: "conditional" as Verdict, note: "業務割合で按分" },
  { label: "交通費（打合せ等）", emoji: "🚃", verdict: "ok" as Verdict, note: "領収書・明細を保管" },
  { label: "打合せ飲食代", emoji: "☕", verdict: "ok" as Verdict, note: "参加者・目的を記録" },
  { label: "書籍・セミナー", emoji: "📚", verdict: "ok" as Verdict, note: "業務関連のもの" },
  { label: "自宅家賃（按分）", emoji: "🏠", verdict: "conditional" as Verdict, note: "仕事スペースの割合" },
  { label: "業務ソフト・サブスク", emoji: "💾", verdict: "ok" as Verdict, note: "Adobe・GitHub等" },
  { label: "名刺・広告費", emoji: "📊", verdict: "ok" as Verdict, note: "事業宣伝のもの" },
  { label: "個人の食事代", emoji: "🍱", verdict: "conditional" as Verdict, note: "原則は難しい" },
  { label: "スーツ・衣類", emoji: "👔", verdict: "conditional" as Verdict, note: "私的使用可で難しい" },
  { label: "生命保険料", emoji: "🛡️", verdict: "no" as Verdict, note: "所得控除は使える" },
  { label: "所得税・住民税", emoji: "🏛️", verdict: "no" as Verdict, note: "経費不可" },
];

function VerdictIcon({ verdict }: { verdict: Verdict }) {
  if (verdict === "ok") return <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />;
  if (verdict === "conditional") return <AlertCircle className="w-5 h-5 text-amber-500 shrink-0" />;
  return <XCircle className="w-5 h-5 text-red-500 shrink-0" />;
}

const verdictStyle: Record<Verdict, string> = {
  ok: "bg-emerald-50 border-emerald-200",
  conditional: "bg-amber-50 border-amber-200",
  no: "bg-red-50 border-red-200",
};

const verdictBadge: Record<Verdict, string> = {
  ok: "bg-emerald-100 text-emerald-700",
  conditional: "bg-amber-100 text-amber-700",
  no: "bg-red-100 text-red-700",
};

const verdictBadgeLabel: Record<Verdict, string> = {
  ok: "◎ 経費になる",
  conditional: "△ 条件付き",
  no: "× 経費にならない",
};

const commonVerdictDot: Record<Verdict, string> = {
  ok: "bg-emerald-400",
  conditional: "bg-amber-400",
  no: "bg-red-400",
};

export default function ExpensePage() {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [judged, setJudged] = useState<boolean>(false);
  const [currentResult, setCurrentResult] = useState<ExpenseRule | null>(null);

  const handleJudge = () => {
    if (!description.trim()) return;

    const category = CATEGORIES[selectedCategory];
    const lowerDesc = description.toLowerCase();

    // キーワードマッチング
    let matched: ExpenseRule | null = null;
    for (const ruleEntry of category.rules) {
      if (ruleEntry.keywords.some((kw) => lowerDesc.includes(kw))) {
        matched = ruleEntry.rule;
        break;
      }
    }

    setCurrentResult(matched ?? category.fallback);
    setJudged(true);
  };

  const handleReset = () => {
    setDescription("");
    setJudged(false);
    setCurrentResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* ページヘッダー */}
      <div className="bg-amber-600 text-white">
        <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <ClipboardCheck className="w-5 h-5" />
            </div>
            <span className="text-amber-200 text-sm font-medium">無料ツール</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-3">
            経費判定チェッカー
          </h1>
          <p className="text-amber-100 text-lg">
            「これは経費になる？」をカテゴリと用途から判定します
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-10">
        {/* 判定フォーム */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
          <h2 className="text-lg font-bold text-gray-900 mb-5">支出の内容を入力</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {/* カテゴリ選択 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                カテゴリを選択
              </label>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(Number(e.target.value));
                    setJudged(false);
                    setCurrentResult(null);
                  }}
                  className="w-full appearance-none border border-gray-200 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
                >
                  {CATEGORIES.map((cat, i) => (
                    <option key={i} value={i}>
                      {cat.emoji} {cat.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* 用途の説明 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                用途の説明
                <span className="ml-1 text-xs text-gray-400 font-normal">（例：打合せのためのカフェ代）</span>
              </label>
              <input
                type="text"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                  setJudged(false);
                  setCurrentResult(null);
                }}
                onKeyDown={(e) => e.key === "Enter" && handleJudge()}
                placeholder="どんな用途で使いましたか？"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleJudge}
              disabled={!description.trim()}
              className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 disabled:bg-gray-200 disabled:text-gray-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              <ClipboardCheck className="w-4 h-4" />
              判定する
            </button>
            {judged && (
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-700 text-sm font-medium px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
              >
                リセット
              </button>
            )}
          </div>
        </div>

        {/* 判定結果 */}
        {judged && currentResult && (
          <div className={`rounded-2xl border-2 p-6 ${verdictStyle[currentResult.verdict]}`}>
            <div className="flex items-start gap-3 mb-4">
              <VerdictIcon verdict={currentResult.verdict} />
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full ${verdictBadge[currentResult.verdict]}`}
                  >
                    {verdictBadgeLabel[currentResult.verdict]}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg leading-snug">
                  {currentResult.title}
                </h3>
              </div>
            </div>

            <div className="space-y-3 pl-8">
              <div>
                <p className="text-sm font-semibold text-gray-600 mb-1">理由</p>
                <p className="text-sm text-gray-700 leading-relaxed">{currentResult.reason}</p>
              </div>

              {currentResult.apportionNote && (
                <div className="bg-white/60 rounded-xl p-3 border border-current/10">
                  <p className="text-xs font-semibold text-gray-600 mb-1">按分の方法</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {currentResult.apportionNote}
                  </p>
                </div>
              )}

              {currentResult.tips && (
                <div>
                  <p className="text-xs font-semibold text-gray-500 mb-1">ポイント</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{currentResult.tips}</p>
                </div>
              )}
            </div>

            <div className="mt-4 ml-8 text-xs text-gray-400">
              ※ 判定はキーワードによる概算です。個別の状況や税法の解釈により異なる場合があります。
              確実な判断には税理士へのご相談をおすすめします。
            </div>
          </div>
        )}

        {/* よくある経費一覧 */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">よくある経費 一覧</h2>
          <p className="text-gray-500 text-sm mb-5">
            フリーランスが経費計上しやすいものをまとめました
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {COMMON_EXPENSES.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-xl px-4 py-3.5 shadow-sm flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-lg shrink-0">
                  {item.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">{item.label}</p>
                  <p className="text-xs text-gray-400">{item.note}</p>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <div
                    className={`w-2 h-2 rounded-full ${commonVerdictDot[item.verdict]}`}
                  />
                  <span className={`text-xs font-semibold ${
                    item.verdict === "ok"
                      ? "text-emerald-600"
                      : item.verdict === "conditional"
                      ? "text-amber-600"
                      : "text-red-600"
                  }`}>
                    {item.verdict === "ok" ? "◎" : item.verdict === "conditional" ? "△" : "×"}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>◎ 経費になる</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <span>△ 条件付き（按分・要件あり）</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <span>× 経費にならない</span>
            </div>
          </div>
        </section>

        {/* 免責注記 */}
        <div className="flex items-start gap-2 bg-gray-50 rounded-xl p-4 border border-gray-200">
          <AlertCircle className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
          <p className="text-xs text-gray-500 leading-relaxed">
            このツールはキーワードによる概算判定です。実際の経費計上可否は、個人の事業状況・税法の解釈・税務署の判断によって異なります。
            正確な判断については、税理士または税務署にご相談ください。
          </p>
        </div>
      </div>
    </div>
  );
}
