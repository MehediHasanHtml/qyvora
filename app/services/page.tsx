import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ButtonLink, Container, Section, SectionHeading, Tag } from "@/components/ui/primitives";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { serviceDivisions, industries } from "@/lib/content/pages";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { breadcrumbSchema, graph, ids, webPageSchema, type Crumb } from "@/lib/schema";

const title = "AI, Website and SaaS Development Services";
const description =
  "Explore every Qyvora Studio service: AI websites, AI applications and agents, custom and startup websites, SaaS platforms, MVPs and industry solutions.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/services" });

const crumbs: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="All services"
        title="Everything you need to build, launch and scale a digital business."
        lede="Qyvora brings strategy, design, engineering and AI together in one team. Choose a single service or combine them into one plan."
      >
        <ButtonLink href="/contact" size="lg" arrow track="cta_start_project">
          Start a Project
        </ButtonLink>
        <ButtonLink href="/contact?intent=call" size="lg" variant="secondary" track="cta_discovery_call">
          Schedule a Discovery Call
        </ButtonLink>
      </PageHero>

      {serviceDivisions.map((d, i) => (
        <Section key={d.id} id={d.id} labelledBy={`${d.id}-title`} className={i % 2 ? "border-y border-line bg-bg-elevated" : ""}>
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.6fr]">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <SectionHeading id={`${d.id}-title`} eyebrow={d.label} title={d.title} description={d.description} />
                <p className="mt-6 text-sm text-fg/85">
                  <span className="font-mono text-[0.7rem] uppercase tracking-wider text-accent-text">Business value </span>
                  {d.value}
                </p>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {d.pages.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/${p.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent-line"
                    >
                      <h3 className="text-lg font-semibold tracking-tight text-fg">{p.name}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {p.tech.slice(0, 3).map((t) => (
                          <Tag key={t}>{t}</Tag>
                        ))}
                      </div>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-fg">
                        Explore service <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </Section>
      ))}

      <Section labelledBy="industry-title" className="border-t border-line">
        <Container>
          <SectionHeading
            id="industry-title"
            eyebrow="Industry solutions"
            title="Built for your industry"
            description="Dedicated solutions with features designed around how customers in each industry decide."
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/${p.slug}`}
                  className="flex items-center justify-between rounded-xl border border-line bg-surface px-5 py-4 text-sm font-medium text-fg transition-colors hover:border-accent-line"
                >
                  {p.name}
                  <ArrowRight aria-hidden className="size-4 text-muted" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand />
      <JsonLd
        data={graph(
          webPageSchema({ path: "/services", name: title, description, type: "CollectionPage" }),
          breadcrumbSchema(crumbs),
          {
            "@type": "OfferCatalog",
            "@id": `${absoluteUrl("/services")}#catalog`,
            name: "Qyvora Studio services",
            provider: { "@id": ids.organization },
            itemListElement: serviceDivisions.map((d) => ({
              "@type": "OfferCatalog",
              name: d.label,
              itemListElement: d.pages.map((p) => ({
                "@type": "Offer",
                itemOffered: { "@id": `${absoluteUrl(`/${p.slug}`)}#service`, "@type": "Service", name: p.name },
              })),
            })),
          },
        )}
      />
    </>
  );
}
