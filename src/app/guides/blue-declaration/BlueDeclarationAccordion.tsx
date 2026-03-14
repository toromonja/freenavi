"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "開業してすぐ青色申告できますか？",
    a: "はい。開業日から2ヶ月以内に「青色申告承認申請書」を提出すれば、その年から青色申告が使えます。開業届と同時に提出するのが最もスムーズです。1月1日〜1月15日開業の場合は3月15日が期限です。",
  },
  {
    q: "会計ソフトを使わないと青色申告できませんか？",
    a: "手書きの帳簿でも法律上は問題ありません。ただし、65万円控除を受けるには複式簿記が必要で、手書きは非常に手間がかかります。freeeやマネーフォワードなどのソフトを使うと自動化でき、年間数千円〜1万円程度のコストで済みます。",
  },
  {
    q: "青色申告65万円控除と55万円控除の違いは？",
    a: "e-Tax（電子申告）で申告すると65万円控除、紙で申告すると55万円控除になります。差額10万円の節税効果のためにも、e-Taxでの申告をおすすめします。マイナンバーカードとスマートフォンがあれば自宅から申告できます。",
  },
  {
    q: "副業がある場合も青色申告できますか？",
    a: "副業の所得が「事業所得」として認められる場合は青色申告できます。ただし、副業の規模・継続性・営利性などから「雑所得」と判断される場合は青色申告の対象外です。主な基準は「事業として継続的に行っているか」です。",
  },
  {
    q: "赤字が出た年に青色申告するメリットはありますか？",
    a: "あります。青色申告では純損失を最大3年間繰り越せるため、翌年以降に黒字が出た際に相殺して税金を減らせます。白色申告では繰り越しができないため、赤字の年こそ青色申告のメリットが大きいです。",
  },
];

export default function BlueDeclarationAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <button
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="font-medium text-gray-800 text-sm leading-relaxed">
              Q. {faq.q}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
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
