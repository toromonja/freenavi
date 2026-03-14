import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-8xl font-bold text-emerald-500 mb-4">404</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          ページが見つかりません
        </h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          お探しのページは移動・削除されたか、URLが間違っている可能性があります。
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            <Home className="w-4 h-4" />
            トップページへ戻る
          </Link>
          <Link
            href="/guides"
            className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-emerald-300 text-gray-700 hover:text-emerald-700 font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            ガイド一覧を見る
          </Link>
        </div>
      </div>
    </div>
  );
}
