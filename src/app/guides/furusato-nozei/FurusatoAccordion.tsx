"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "会社員の時にワンストップ特例を使っていました。フリーランスになった今も使えますか？",
    a: "フリーランス（個人事業主）で確定申告をする方は、ワンストップ特例は使えません。確定申告書に「寄附金控除」の欄があるので、そちらで申告してください。ただし、ワンストップ特例の申請書を提出していた場合は、確定申告で申告し直すと自動的にワンストップ特例は無効になります。",
  },
  {
    q: "確定申告した後に追加でふるさと納税をしました。どうすればいいですか？",
    a: "確定申告後に寄附した場合は、翌年の確定申告で控除を申告してください。当年の申告に間に合わなかった場合、「更正の請求」（申告内容の訂正）を5年以内に行うこともできますが、翌年申告の方が手続きが簡単です。",
  },
  {
    q: "上限額を超えてふるさと納税してしまいました。",
    a: "上限額を超えた分は2,000円の自己負担ではなく、全額が自己負担になります。上限額内の寄附と上限を超えた分を合計した金額から、控除できる上限額分だけが控除され、残りは控除なしになります。事前に上限額をしっかり確認してから寄附しましょう。",
  },
  {
    q: "ふるさと納税の返礼品は所得になりますか？",
    a: "一時所得として申告が必要な場合があります。ただし、一時所得は年間50万円の控除があるため、ふるさと納税の返礼品だけで50万円を超えることは通常ありません。寄附額の3割が返礼品の目安のため、約167万円以上寄附しない限り申告不要です。",
  },
];

export default function FurusatoAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <button
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="font-medium text-gray-800 text-sm leading-relaxed">Q. {faq.q}</span>
            <ChevronDown className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`} />
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
