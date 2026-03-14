import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://freenavi.toromonja.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "freenavi｜フリーランスの税金・制度ガイド",
    template: "%s | freenavi",
  },
  description: "フリーランスの確定申告・インボイス・社会保険・節税をわかりやすく解説。手取り計算ツール・国保シミュレーターも無料で使えます。",
  keywords: ["フリーランス", "確定申告", "インボイス", "国民健康保険", "節税", "青色申告", "iDeCo", "手取り計算"],
  authors: [{ name: "freenavi" }],
  creator: "freenavi",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "freenavi",
    title: "freenavi｜フリーランスの税金・制度ガイド",
    description: "フリーランスの確定申告・インボイス・社会保険・節税をわかりやすく解説。手取り計算ツールも無料。",
    images: [
      {
        url: "/ogp.svg",
        width: 1200,
        height: 630,
        alt: "freenavi｜フリーランスの税金・制度ガイド",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "freenavi｜フリーランスの税金・制度ガイド",
    description: "フリーランスの確定申告・インボイス・社会保険・節税をわかりやすく解説。手取り計算ツールも無料。",
    images: ["/ogp.svg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
