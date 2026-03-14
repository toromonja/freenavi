import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "国民健康保険料シミュレーター｜都道府県別計算",
  description: "前年所得と都道府県を入力するだけで国保料を試算。軽減判定・任意継続との比較も。",
  alternates: {
    canonical: "https://freenavi.toromonja.com/tools/kokuho",
  },
};

export default function KokuhoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
