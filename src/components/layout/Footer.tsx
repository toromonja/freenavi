import Link from "next/link";
import { Calculator } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Calculator className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-white font-bold">freenavi</span>
            </Link>
            <p className="text-sm leading-relaxed">
              フリーランスの税金・制度をわかりやすく解説するガイドサービス
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3">コンテンツ</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guides/kakutei-shinkoku" className="hover:text-emerald-400 transition-colors">税金ガイド</Link></li>
              <li><Link href="/guides/shakai-hoken" className="hover:text-emerald-400 transition-colors">社会保険</Link></li>
              <li><Link href="/guides/kaigyo" className="hover:text-emerald-400 transition-colors">開業ガイド</Link></li>
              <li><Link href="/guides/setsuzei" className="hover:text-emerald-400 transition-colors">節税テク</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold mb-3">ツール</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tools/teardown" className="hover:text-emerald-400 transition-colors">手取り計算機</Link></li>
              <li><Link href="/tools/invoice" className="hover:text-emerald-400 transition-colors">インボイス試算</Link></li>
              <li><Link href="/tools/kokuho" className="hover:text-emerald-400 transition-colors">国保料シミュレーター</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold mb-3">サイト情報</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors">このサイトについて</Link></li>
              <li><Link href="/privacy" className="hover:text-emerald-400 transition-colors">プライバシーポリシー</Link></li>
              <li><Link href="/disclaimer" className="hover:text-emerald-400 transition-colors">免責事項</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <p>&copy; 2026 freenavi. All rights reserved.</p>
          <p className="text-gray-500">
            ※ 本サイトの情報は一般的な解説であり、個別の税務・法務アドバイスではありません。
          </p>
        </div>
      </div>
    </footer>
  );
}
