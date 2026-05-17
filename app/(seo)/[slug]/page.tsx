import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoLandingTemplate } from "@/components/seo-landing-template";
import { JsonLd } from "@/components/json-ld";
import { seoLandingPages, siteConfig, type SeoLandingSlug } from "@/lib/site";
import { seoContent } from "@/lib/seo-content";

export async function generateStaticParams() {
  return seoLandingPages.map((p) => ({ slug: p.slug }));
}

function isValidSlug(slug: string): slug is SeoLandingSlug {
  return seoLandingPages.some((p) => p.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isValidSlug(slug)) return {};

  const page = seoLandingPages.find((p) => p.slug === slug)!;
  const content = seoContent[slug];

  return {
    title: page.title,
    description: content.hero.sub,
    keywords: [page.primaryKeyword, ...page.relatedKeywords],
    alternates: { canonical: `${siteConfig.url}/${slug}` },
    openGraph: {
      type: "website",
      url: `${siteConfig.url}/${slug}`,
      title: page.title,
      description: content.hero.sub,
      siteName: siteConfig.legalName,
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: content.hero.sub,
    },
  };
}

export default async function SeoLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isValidSlug(slug)) notFound();

  const page = seoLandingPages.find((p) => p.slug === slug)!;
  const content = seoContent[slug];

  // Page-specific JSON-LD: Service + FAQPage
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/${slug}#service`,
    name: page.h1,
    serviceType: page.h1,
    description: content.hero.sub,
    url: `${siteConfig.url}/${slug}`,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: { "@type": "Place", name: "Worldwide" },
    audience: { "@type": "Audience", audienceType: page.intent },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/${slug}#faq`,
    mainEntity: content.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: page.h1, item: `${siteConfig.url}/${slug}` },
    ],
  };

  return (
    <>
      <SeoLandingTemplate content={content} slug={slug} />
      <JsonLd data={[serviceSchema, faqSchema, breadcrumbSchema]} id={`ld-${slug}`} />
    </>
  );
}
