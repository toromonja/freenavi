import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "インボイス影響試算ツール｜登録・未登録の損得計算",
  description: "インボイス登録した場合・しない場合の消費税負担を試算。2026年以降の経過措置変更も考慮。",
  alternates: {
    canonical: "https://freenavi.toromonja.com/tools/invoice",
  },
};

export default function InvoiceToolLayout({ children }: { children: React.ReactNode }) {
  return children;
}
