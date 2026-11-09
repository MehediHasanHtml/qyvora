import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${siteConfig.url}${path === "/" ? "" : path}` || siteConfig.url;
}

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  /** Use the title as is, without the brand suffix. */
  absoluteTitle?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
  /** True when the route has its own opengraph-image file. */
  ownImage?: boolean;
};

/**
 * Builds consistent, page specific metadata: canonical URL, Open Graph and
 * Twitter cards. Open Graph images come from opengraph-image files.
 */
export function buildMetadata({
  title,
  description,
  path,
  absoluteTitle,
  type = "website",
  publishedTime,
  modifiedTime,
  noindex,
  ownImage,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  // Drop the brand suffix when it would push the title past about 65 characters.
  const withBrand = `${title} | ${siteConfig.name}`;
  const useAbsolute = absoluteTitle || withBrand.length > 65;
  const fullTitle = useAbsolute ? title : withBrand;
  // Pages with their own opengraph-image file override this default automatically.
  const image = { url: "/opengraph-image", width: 1200, height: 630, alt: siteConfig.statement };
  return {
    title: useAbsolute ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      ...(ownImage ? {} : { images: [image] }),
      ...(type === "article" ? { publishedTime, modifiedTime, authors: [siteConfig.name] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(siteConfig.xHandle ? { creator: siteConfig.xHandle } : {}),
      ...(ownImage ? {} : { images: [image.url] }),
    },
    robots: noindex ? { index: false, follow: true } : undefined,
  };
}

/** Shortens text at a word boundary for meta descriptions. */
export function truncate(text: string, max = 158) {
  if (text.length <= max) return text;
  return `${text.slice(0, max).replace(/[\s,.;:]+\S*$/, "")}…`;
}
