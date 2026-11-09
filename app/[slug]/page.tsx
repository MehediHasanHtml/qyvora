import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingTemplate } from "@/components/landing-template";
import { JsonLd } from "@/components/json-ld";
import { getLandingPage, landingPages } from "@/lib/content/pages";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, graph, serviceSchema, webPageSchema, type Crumb } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return landingPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) return {};
  return buildMetadata({ title: page.title, description: page.description, path: `/${page.slug}`, ownImage: true });
}

export default async function LandingPageRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) notFound();

  const path = `/${page.slug}`;
  const crumbs: Crumb[] = [
    { name: "Home", path: "/" },
    page.kind === "industry" ? { name: "Industries", path: "/industries" } : { name: "Services", path: "/services" },
    { name: page.name, path },
  ];

  return (
    <>
      <LandingTemplate page={page} crumbs={crumbs} />
      <JsonLd
        data={graph(
          webPageSchema({ path, name: page.title, description: page.description, about: `${absoluteUrl(path)}#service` }),
          serviceSchema(page),
          breadcrumbSchema(crumbs),
          faqSchema(path, page.faqs),
        )}
      />
    </>
  );
}
