import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/**
 * All search and AI answer engine crawlers are welcome. Only the API is
 * excluded, since it has no content worth indexing.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
