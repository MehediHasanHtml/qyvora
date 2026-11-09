import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { pagesBySlugs } from "@/lib/content/pages";
import { solutions } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, webPageSchema, type Crumb } from "@/lib/schema";

const title = "Solutions for Startups, SaaS Founders and Growing Businesses";
const description =
  "Find the right Qyvora solution for your stage: startup launches and MVPs, SaaS platforms, AI products, and upgrades for established businesses.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/solutions" });

const crumbs: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "Solutions", path: "/solutions" },
];

const detail: Record<string, { problem: string; approach: string }> = {
  startups: {
    problem: "You need to look credible, explain a new idea clearly and learn from real users before the money runs out.",
    approach: "We help you choose the smallest launch that proves the idea, then build a website and product foundation you will not need to throw away.",
  },
  saas: {
    problem: "You need a product that handles accounts, billing and growth without slowing your roadmap.",
    approach: "We design the core workflow and the business layer together, on a stack that stays fast and maintainable as customers arrive.",
  },
  ai: {
    problem: "You have a model, a workflow or deep expertise, and need to turn it into software people trust and pay for.",
    approach: "We start with one job the AI must do reliably, design an interface around it, and add testing, guardrails and cost controls.",
  },
  established: {
    problem: "Your website and tools have not kept up with the business, and every change feels slow and expensive.",
    approach: "We audit what works, protect your search visibility, and modernize the website and internal systems in sensible phases.",
  },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Solutions"
        title="The right solution for where your business is today."
        lede="Founders, SaaS teams, AI entrepreneurs and established companies need different things. Start with your situation and we will point you to the services that fit."
      />
      {solutions.map((s, i) => {
        const pages = pagesBySlugs(s.pages);
        const d = detail[s.id];
        return (
          <Section key={s.id} id={s.id} labelledBy={`${s.id}-title`} className={i % 2 ? "border-y border-line bg-bg-elevated" : ""}>
            <Container>
              <div className="grid gap-12 lg:grid-cols-2">
                <div>
                  <SectionHeading id={`${s.id}-title`} eyebrow={s.label} title={s.short} />
                  <dl className="mt-8 space-y-6">
                    <div>
                      <dt className="eyebrow">The challenge</dt>
                      <dd className="mt-2 leading-relaxed text-fg/85">{d.problem}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow">How we help</dt>
                      <dd className="mt-2 leading-relaxed text-fg/85">{d.approach}</dd>
                    </div>
                  </dl>
                </div>
                <ul className="space-y-3">
                  {pages.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/${p.slug}`}
                        className="group flex items-start gap-4 rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent-line"
                      >
                        <span className="flex-1">
                          <span className="block text-lg font-semibold tracking-tight text-fg">{p.name}</span>
                          <span className="mt-1.5 block text-sm leading-relaxed text-muted">{p.description}</span>
                        </span>
                        <ArrowRight aria-hidden className="mt-1 size-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Container>
          </Section>
        );
      })}
      <CtaBand />
      <JsonLd data={graph(webPageSchema({ path: "/solutions", name: title, description, type: "CollectionPage" }), breadcrumbSchema(crumbs))} />
    </>
  );
}
