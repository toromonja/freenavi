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

export const metadata: Metadata = {
  title: {
    default: "freenavi - フリーランスの税金・制度ガイド",
    template: "%s | freenavi",
  },
  description:
    "確定申告、インボイス、社会保険、節税…フリーランスに必要な税務・制度情報をわかりやすく解説。手取り計算ツールも無料で使えます。",
  keywords: ["フリーランス", "確定申告", "インボイス", "節税", "手取り計算", "社会保険"],
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://freenavi.toromonja.com"
  ),
  openGraph: {
    type: "website",
    siteName: "freenavi",
    locale: "ja_JP",
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
