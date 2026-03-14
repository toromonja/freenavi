"use client";

import { useState } from "react";

interface CheckItem {
  id: string;
  text: string;
  note: string;
  urgent?: boolean;
}

const items: CheckItem[] = [
  {
    id: "kaigyodoke",
    text: "開業届を税務署に提出する",
    note: "開業日から1ヶ月以内が目安（遅れても受け付けてもらえます）",
  },
  {
    id: "aoiro-apply",
    text: "青色申告承認申請書を提出する",
    note: "開業から2ヶ月以内に提出必須！期限を過ぎるとその年は使えない",
    urgent: true,
  },
  {
    id: "kokuho",
    text: "国民健康保険に加入する",
    note: "退職から14日以内。市区町村の窓口で「健康保険資格喪失証明書」が必要",
    urgent: true,
  },
  {
    id: "nenkin",
    text: "国民年金の種別変更をする",
    note: "退職により第2号→第1号被保険者へ変更。年金事務所または市区町村窓口で手続き",
    urgent: true,
  },
  {
    id: "kaikei",
    text: "帳簿ソフトを導入する（freee / マネーフォワード）",
    note: "早めに始めるほど後が楽。無料プランから始めてOK",
  },
  {
    id: "bank",
    text: "事業用の銀行口座を開設する",
    note: "プライベートと分けると帳簿管理がラクになる。楽天銀行・GMOあおぞらなどがおすすめ",
  },
  {
    id: "invoice",
    text: "インボイス登録を検討する",
    note: "BtoB取引がメインなら登録を検討。個人向けのみなら不要の可能性が高い",
  },
];

export default function KaigyoChecklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const completedCount = checked.size;
  const totalCount = items.length;
  const progress = Math.round((completedCount / totalCount) * 100);

  return (
    <div>
      {/* 進捗バー */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">
            進捗 {completedCount} / {totalCount} 完了
          </span>
          <span className="text-sm font-bold text-emerald-600">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-emerald-500 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        {completedCount === totalCount && (
          <p className="text-center text-sm font-semibold text-emerald-600 mt-3">
            全項目完了です！開業準備ばっちりです
          </p>
        )}
      </div>

      {/* チェックリスト */}
      <div className="space-y-2">
        {items.map((item) => {
          const isChecked = checked.has(item.id);
          return (
            <button
              key={item.id}
              onClick={() => toggle(item.id)}
              className={`w-full flex items-start gap-3 rounded-xl border px-4 py-3.5 text-left transition-all ${
                isChecked
                  ? "bg-emerald-50 border-emerald-300"
                  : item.urgent
                  ? "bg-red-50 border-red-200 hover:border-red-300"
                  : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm"
              }`}
            >
              {/* チェックボックス */}
              <div
                className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                  isChecked
                    ? "bg-emerald-500 border-emerald-500"
                    : "border-gray-300 bg-white"
                }`}
              >
                {isChecked && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-0.5">
                  <span
                    className={`text-sm font-medium leading-snug ${
                      isChecked ? "line-through text-gray-400" : "text-gray-800"
                    }`}
                  >
                    {item.text}
                  </span>
                  {item.urgent && !isChecked && (
                    <span className="shrink-0 text-xs bg-red-100 text-red-700 font-semibold px-1.5 py-0.5 rounded">
                      期限あり
                    </span>
                  )}
                </div>
                <p className={`text-xs leading-relaxed ${isChecked ? "text-gray-400" : "text-gray-500"}`}>
                  {item.note}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
