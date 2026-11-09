import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Container, Section } from "@/components/ui/primitives";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { Visual } from "@/components/visuals/mockups";
import { industries } from "@/lib/content/pages";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, webPageSchema, type Crumb } from "@/lib/schema";

const title = "Industry Website Solutions for Automotive, Real Estate, Healthcare and Legal";
const description =
  "Websites and platforms designed for car dealerships, automotive services, real estate, healthcare, doctors, law firms and professional services businesses.";

export const metadata: Metadata = buildMetadata({ title: "Industry Website Solutions", description, path: "/industries" });

const crumbs: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries" },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Industries"
        title="Digital solutions built around your industry."
        lede="A dealership, a clinic and a law firm need very different websites. Each solution below starts from how customers in that industry search, compare and decide."
      />
      <Section labelledBy="list-title" className="pt-16">
        <Container>
          <h2 id="list-title" className="sr-only">
            Industry solutions
          </h2>
          <ul className="grid gap-5 md:grid-cols-2">
            {industries.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-accent-line"
                >
                  <div className="relative h-60 overflow-hidden border-b border-line bg-bg/40 px-8 pt-8">
                    <div className="mx-auto max-w-md origin-top scale-95">
                      <Visual kind={p.visual} />
                    </div>
                    <div aria-hidden className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <p className="eyebrow">{p.eyebrow}</p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-fg">{p.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-fg">
                      View solution <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <CtaBand
        title="Don't see your industry? We can still help."
        body="We also build for consultancies, ecommerce brands, agencies and local businesses. Tell us how your customers buy and we will design around it."
      />
      <JsonLd data={graph(webPageSchema({ path: "/industries", name: title, description, type: "CollectionPage" }), breadcrumbSchema(crumbs))} />
    </>
  );
}
