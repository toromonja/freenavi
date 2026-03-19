import { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://freenavi.toromonja.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/guides", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/guides/kakutei-shinkoku", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/guides/invoice", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/guides/shakai-hoken", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/guides/setsuzei", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/guides/kaigyo", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/guides/blue-declaration", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/guides/invoice-format", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/guides/nenkin-menjo", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/guides/ideco", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/guides/shoukibo-kyosai", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/guides/furusato-nozei", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/guides/kaigyodoke", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/tools", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/tools/teardown", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/tools/invoice", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/tools/kokuho", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/tools/expense", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/about", priority: 0.4, changeFrequency: "yearly" as const },
    { url: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/disclaimer", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
