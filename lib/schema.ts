import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";
import type { Faq, LandingPage } from "@/lib/content/types";
import type { Project } from "@/lib/content/projects";
import type { Post } from "@/lib/content/posts";

/**
 * JSON LD builders. Entities are linked by stable @id values so search and
 * answer engines can connect the organization, pages and services.
 * Only verifiable facts are included: no ratings, reviews or street address.
 */
const URL = siteConfig.url;
export const ids = {
  organization: `${URL}/#organization`,
  website: `${URL}/#website`,
  logo: `${URL}/#logo`,
};

const sameAs = [siteConfig.social.linkedin, siteConfig.social.github, siteConfig.social.x, siteConfig.social.facebook].filter(Boolean);

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": ids.organization,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: URL,
    slogan: siteConfig.statement,
    description: siteConfig.description,
    logo: { "@type": "ImageObject", "@id": ids.logo, url: absoluteUrl("/logo.svg"), contentUrl: absoluteUrl("/logo.svg"), caption: siteConfig.name },
    image: { "@id": ids.logo },
    email: siteConfig.contact.email,
    address: { "@type": "PostalAddress", addressLocality: siteConfig.base.city, addressCountry: siteConfig.base.countryCode },
    areaServed: { "@type": "Place", name: "Worldwide" },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: siteConfig.contact.email,
      url: absoluteUrl("/contact"),
      availableLanguage: ["English"],
    },
    knowsAbout: [
      "AI website development",
      "AI web application development",
      "AI SaaS development",
      "AI chatbot development",
      "Next.js",
      "React",
      "TypeScript",
      "Vue.js",
      "PHP",
      "Laravel",
      "MySQL",
      "SaaS development",
      "Real estate websites",
      "Car dealership websites",
      "Technical SEO",
    ],
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": ids.website,
    url: URL,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": ids.organization },
    inLanguage: "en",
  };
}


export type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(crumbs[crumbs.length - 1]?.path ?? "/")}#breadcrumb`,
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

type WebPageInput = {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "FAQPage";
  hasBreadcrumb?: boolean;
  about?: string;
};

export function webPageSchema({ path, name, description, type = "WebPage", hasBreadcrumb = true, about }: WebPageInput) {
  const url = absoluteUrl(path);
  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": ids.website },
    publisher: { "@id": ids.organization },
    inLanguage: "en",
    ...(hasBreadcrumb ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {}),
    ...(about ? { about: { "@id": about } } : {}),
  };
}

export function faqSchema(path: string, faqs: Faq[]) {
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(page: LandingPage) {
  const url = absoluteUrl(`/${page.slug}`);
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name: page.name,
    serviceType: page.keywords.primary,
    description: page.description,
    url,
    provider: { "@id": ids.organization },
    areaServed: { "@type": "Place", name: "Worldwide" },
    audience: { "@type": "BusinessAudience", audienceType: page.audience.join(", ") },
    mainEntityOfPage: { "@id": `${url}#webpage` },
  };
}

export function projectSchema(project: Project) {
  const url = absoluteUrl(`/projects/${project.slug}`);
  return {
    "@type": "CreativeWork",
    "@id": `${url}#project`,
    name: project.name,
    headline: `${project.name}: ${project.tagline}`,
    description: project.overview,
    url,
    dateCreated: String(project.year),
    creator: { "@id": ids.organization },
    publisher: { "@id": ids.organization },
    genre: project.industry,
    keywords: project.tech.join(", "),
    ...(project.image ? { image: project.image.src.startsWith("http") ? project.image.src : absoluteUrl(project.image.src) } : {}),
    ...(project.liveUrl ? { sameAs: project.liveUrl } : {}),
    mainEntityOfPage: { "@id": `${url}#webpage` },
  };
}

export function articleSchema(post: Post) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  return {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    url,
    datePublished: post.published,
    dateModified: post.updated,
    articleSection: post.category,
    inLanguage: "en",
    image: absoluteUrl(`/blog/${post.slug}/opengraph-image`),
    author: { "@id": ids.organization },
    publisher: { "@id": ids.organization },
    isPartOf: { "@id": ids.website },
    mainEntityOfPage: { "@id": `${url}#webpage` },
  };
}

/** Wraps nodes in one @graph document. */
export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
