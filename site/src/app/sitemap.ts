import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { INDUSTRIES } from "@/lib/industries";
import { ARTICLES } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const staticPaths: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/services/", priority: 0.9, freq: "monthly" },
    { path: "/who-we-serve/", priority: 0.8, freq: "monthly" },
    { path: "/about/", priority: 0.7, freq: "monthly" },
    { path: "/resources/", priority: 0.8, freq: "weekly" },
    { path: "/free-orm-scan/", priority: 0.9, freq: "monthly" },
    { path: "/request-a-quote/", priority: 0.7, freq: "monthly" },
    { path: "/contact/", priority: 0.7, freq: "monthly" },
    { path: "/privacy-policy/", priority: 0.3, freq: "yearly" },
    { path: "/terms-of-service/", priority: 0.3, freq: "yearly" },
  ];

  const entries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${base}${p.path}`,
    lastModified: now,
    changeFrequency: p.freq,
    priority: p.priority,
  }));

  for (const s of SERVICES) {
    entries.push({
      url: `${base}/services/${s.slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const i of INDUSTRIES) {
    entries.push({
      url: `${base}/industries/${i.slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const a of ARTICLES) {
    entries.push({
      url: `${base}/resources/${a.slug}/`,
      lastModified: new Date(a.dateModified),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return entries;
}
