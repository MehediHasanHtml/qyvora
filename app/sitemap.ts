import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { landingPages } from "@/lib/content/pages";
import { projects } from "@/lib/content/projects";
import { posts } from "@/lib/content/posts";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date(siteConfig.contentUpdated);
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly", lastModified = updated) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    page("/", 1, "weekly"),
    page("/services", 0.9),
    page("/solutions", 0.7),
    page("/industries", 0.8),
    page("/projects", 0.8),
    page("/about", 0.7),
    page("/contact", 0.8),
    page("/blog", 0.7, "weekly"),
    ...landingPages.map((p) => page(`/${p.slug}`, p.kind === "service" ? 0.85 : 0.85)),
    ...projects.map((p) => page(`/projects/${p.slug}`, 0.6)),
    ...posts.map((p) => page(`/blog/${p.slug}`, 0.6, "monthly", new Date(p.updated))),
    page("/privacy-policy", 0.2, "yearly"),
    page("/terms", 0.2, "yearly"),
  ];
}
