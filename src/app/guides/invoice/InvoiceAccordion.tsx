"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "インボイス登録しないと取引を断られますか？",
    a: "取引先によります。取引継続・価格維持を条件にインボイス登録を求めてくる取引先もいますが、強制ではありません。ただし、2026年10月以降は経過措置が50%に縮小されるため、取引先が負担を感じやすくなります。まずは取引先と話し合って判断することをおすすめします。",
  },
  {
    q: "年収1,000万円以下のフリーランスも登録が必要ですか？",
    a: "インボイス登録は任意です。ただし、年収1,000万円以下の「免税事業者」がインボイスを発行したい場合は、あえて「課税事業者」として登録する必要があります。登録すると消費税の申告・納税義務が発生します。",
  },
  {
    q: "「2割特例」とは何ですか？",
    a: "インボイス制度への対応のために免税事業者から課税事業者になった方に限り、消費税の納税額を売上消費税額の2割に抑えられる特例です。2026年9月末（申告期限が2027年3月末）まで適用されます。申告書に「2割特例を選択する」と記載するだけで使えます。",
  },
  {
    q: "インボイス登録番号はどこに記載しますか？",
    a: "請求書・領収書に「T + 13桁の番号」を記載します。また、適用税率ごとの合計金額と消費税額も明記する必要があります。会計ソフトのテンプレートを使えば、自動的に対応書式で作成できます。",
  },
];

export default function InvoiceAccordion() {
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
