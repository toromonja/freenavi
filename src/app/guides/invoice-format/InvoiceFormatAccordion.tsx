"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "登録番号はどこで確認できますか？",
    a: "インボイス登録後、国税庁から通知される「適格請求書発行事業者の登録通知書」に記載されています。また、国税庁の「適格請求書発行事業者公表サイト」でも確認できます。",
  },
  {
    q: "手書きの領収書でもインボイスとして使えますか？",
    a: "必要事項がすべて記載されていれば手書きでも有効です。ただし、登録番号・税率ごとの税額・適用税率の記載が必要です。実務上は会計ソフトのテンプレートの利用を推奨します。",
  },
  {
    q: "インボイス登録前に発行した請求書はどうなりますか？",
    a: "登録前の請求書はインボイスではありません。登録後に発行する請求書から登録番号を記載してください。遡って請求書を修正・再発行する必要はありません。",
  },
  {
    q: "1万円未満の少額取引はインボイスが不要と聞きましたが？",
    a: "少額特例として、小売業・飲食業・タクシー業などは税込1万円未満の取引についてインボイスの交付義務が免除されます。ただしフリーランスのサービス業では通常この特例は使えないため、取引先がインボイスを求める場合は発行が必要です。",
  },
  {
    q: "freeeやマネーフォワードでインボイス対応の請求書を作れますか？",
    a: "はい。どちらのソフトも設定欄に登録番号を入力するだけで、インボイス対応の請求書テンプレートが自動的に作成されます。税率ごとの内訳も自動計算されるため、手動での計算ミスを防げます。",
  },
];

export default function InvoiceFormatAccordion() {
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
