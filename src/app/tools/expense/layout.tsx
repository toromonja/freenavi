import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "経費判定チェッカー｜この支出は経費になる？",
  description: "カテゴリを選ぶだけで経費になる・ならないを即判定。按分の考え方も解説。",
  alternates: {
    canonical: "https://freenavi.toromonja.com/tools/expense",
  },
};

export default function ExpenseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
