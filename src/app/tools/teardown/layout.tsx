import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "フリーランス手取りシミュレーター｜無料計算ツール",
  description: "売上・経費を入力するだけで所得税・住民税・国保料・国民年金を計算。手取り額を即確認。",
  alternates: {
    canonical: "https://freenavi.toromonja.com/tools/teardown",
  },
};

export default function TeardownLayout({ children }: { children: React.ReactNode }) {
  return children;
}
