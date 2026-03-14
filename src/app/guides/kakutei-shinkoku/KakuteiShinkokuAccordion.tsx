"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "副業収入が20万円以下でも確定申告が必要ですか？",
    a: "会社員の方は、副業収入（給与以外の所得）が年間20万円以下であれば確定申告は不要です。ただし、住民税の申告は必要な場合があります。フリーランス（個人事業主）として活動している場合は、所得の金額に関わらず確定申告が必要です（所得が48万円以下の基礎控除内に収まる場合を除く）。",
  },
  {
    q: "経費はどこまで認められますか？",
    a: "「事業に必要な費用」であれば原則経費になります。主な例として、パソコン・スマホ代、通信費、書籍・セミナー費、自宅兼事務所の家賃（按分）、交通費・出張費、ソフトウェア・サービス利用料などがあります。「事業との関連性」が説明できることが重要で、プライベートとの按分も必要です。迷った場合は税理士に相談するのが確実です。",
  },
  {
    q: "確定申告しなかったらどうなりますか？",
    a: "申告しないと「無申告加算税」（本来の税額の15〜20%）が課されます。さらに、延滞税（年約8〜14%）も発生します。悪質な場合は「重加算税」（35〜40%）が課されることもあります。税務署は各種情報から所得を把握しているため、必ず申告することをおすすめします。申告が遅れた場合でも「期限後申告」として提出できます。",
  },
  {
    q: "開業届を出していないと確定申告できませんか？",
    a: "開業届を出していなくても確定申告は可能です。ただし、青色申告の特別控除（65万円）を受けるためには、事前に「青色申告承認申請書」を提出しておく必要があります。開業届と同時に提出するのが一般的です。",
  },
  {
    q: "初めての確定申告、何から始めればいいですか？",
    a: "まずfreeeやマネーフォワードなどの会計ソフトに登録しましょう。銀行口座やクレジットカードと連携すると、取引が自動で取り込まれます。あとはソフトの案内に従って帳簿をつけていくだけです。申告書の作成もソフトが自動でサポートしてくれます。",
  },
];

export default function KakuteiShinkokuAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="bg-white border border-gray-200 rounded-xl overflow-hidden"
        >
          <button
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="font-medium text-gray-800 text-sm leading-relaxed">
              Q. {faq.q}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === i && (
            <div className="px-5 pb-5 border-t border-gray-100">
              <p className="text-sm text-gray-600 leading-relaxed pt-4">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
