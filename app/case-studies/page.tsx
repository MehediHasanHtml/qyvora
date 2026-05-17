import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/ui/page-header";
import { FinalCTA } from "@/components/sections/final-cta";
import { caseStudies } from "@/lib/case-studies";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Studies — Premium Frontend Outcomes",
  description:
    "Conversion lifts, ranking gains, and revenue wins from AI startups, SaaS teams, and luxury real-estate brands. Measurable case studies in Next.js + Tailwind v4.",
  alternates: { canonical: `${siteConfig.url}/case-studies` },
};

const toneBg = {
  violet: "from-primary/30 via-primary/10 to-transparent",
  cyan: "from-secondary/30 via-secondary/10 to-transparent",
  amber: "from-accent/30 via-accent/10 to-transparent",
  neutral: "from-foreground/10 via-foreground/5 to-transparent",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case studies"
        title={
          <>
            Work engineered for{" "}
            <span className="text-gradient animate-aurora">measurable outcomes</span>.
          </>
        }
        description="Conversion lifts, ranking gains and revenue wins from AI startups, SaaS teams and luxury real-estate brands worldwide."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Case studies" }]}
        size="xl"
      />

      <Section className="!pt-6">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {caseStudies.map((c) => (
              <Link
                key={c.slug}
                href={`/case-studies/${c.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-surface transition-all hover:border-border-strong hover:shadow-elev-lg hover:-translate-y-1"
              >
                <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${toneBg[c.tone]}`}>
                  <div aria-hidden className="absolute inset-0 grid-bg opacity-40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="font-display text-5xl font-semibold tracking-tight text-foreground/85 transition-transform duration-700 group-hover:scale-105">
                      {c.client}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-background/70 px-3 py-1 text-xs font-medium backdrop-blur">
                    {c.category}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-balance">
                    {c.title}
                  </h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{c.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {c.metrics.slice(0, 3).map((m) => (
                      <span key={m.label} className="rounded-full border border-border-strong/60 bg-surface-2 px-3 py-1 text-xs font-medium">
                        {m.label}: <span className="text-foreground">{m.value}</span>
                      </span>
                    ))}
                  </div>
                  <span className="mt-auto pt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                    Read the case study
                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
