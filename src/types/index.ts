// カテゴリ定義
export type Category =
  | "tax"
  | "insurance"
  | "startup"
  | "savings"
  | "tools";

export const CATEGORY_LABELS: Record<Category, string> = {
  tax: "税金",
  insurance: "社会保険",
  startup: "開業",
  savings: "節税",
  tools: "計算ツール",
};

// 記事・ガイド
export interface Article {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: Category;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
}

// 計算ツール
export interface CalculatorResult {
  grossIncome: number;
  taxableIncome: number;
  incomeTax: number;
  residentTax: number;
  socialInsurance: number;
  netIncome: number;
}

// ナビゲーション
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}
