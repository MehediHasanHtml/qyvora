import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Award, Globe2, Sparkles, Rocket, Brain, Layers } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { OutcomesGrid } from "@/components/ui/outcomes-grid";
import { FinalCTA } from "@/components/sections/final-cta";
import { siteConfig } from "@/lib/site";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Mehedi — AI Frontend Engineer & Studio",
  description:
    "Mehedi is an AI frontend engineer and studio founder building premium web experiences for AI startups, SaaS founders and luxury real-estate brands worldwide.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

const values = [
  { icon: Sparkles, title: "Craft over volume", body: "We ship a handful of premium engagements each quarter. No throughput model." },
  { icon: Brain, title: "AI as a tool, not a crutch", body: "We use AI to accelerate research, copy and QA — never to lower the design ceiling." },
  { icon: Rocket, title: "Outcomes are the deliverable", body: "Lighthouse 95+, conversion lifts and ranking gains — not Figma files." },
  { icon: Layers, title: "Tokenized systems", body: "Every site we ship is a design system you can grow, not a single-use template." },
];

const journey = [
  { year: "2018", title: "First HTML/CSS commissions", body: "Started building websites for local agencies and small businesses." },
  { year: "2020", title: "Pivoted to React + Next.js", body: "Specialized in modern frontend after the rise of Server Components." },
  { year: "2022", title: "First SaaS clients", body: "Began shipping production product UI for SaaS startups in Europe and the US." },
  { year: "2024", title: "AI startup focus", body: "Started building for YC and Antler-backed AI founders — streaming UIs, agent dashboards." },
  { year: "2026", title: "Qyvora Studio", body: "Productized the studio around AI startups, SaaS systems and luxury real estate." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            Premium frontend craft —{" "}
            <span className="text-gradient animate-aurora">engineered, not improvised</span>.
          </>
        }
        description="Mehedi is an AI frontend engineer and studio founder building the websites and product surfaces that define the next generation of AI startups, SaaS brands and luxury real estate."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        size="xl"
      >
        <Button asChild variant="gradient" size="lg">
          <Link href="/contact">Work with Mehedi <ArrowUpRight className="size-4" /></Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/case-studies">See selected work</Link>
        </Button>
      </PageHeader>

      <Section className="!pt-4">
        <Container>
          <OutcomesGrid
            items={[
              { value: "8+", label: "Years engineering" },
              { value: "120+", label: "Sites shipped" },
              { value: "14", label: "Countries served" },
              { value: "98", label: "Avg Lighthouse" },
            ]}
          />
        </Container>
      </Section>

      <Section>
        <Container size="lg">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-border-strong bg-surface p-1 shadow-elev-lg">
                <div className="aspect-square overflow-hidden rounded-2xl bg-aurora animate-aurora flex items-center justify-center">
                  <Image src="/Mehedi Hasan — AI Frontend Engineer.jpg" alt="Mehedi Hasan — AI Frontend Engineer and founder of Mehedi Studio" width={500} height={500} className="object-cover" /> 
                </div>
                <div className="p-6">
                  <div className="text-eyebrow text-muted-foreground">{siteConfig.founder.role}</div>
                  <div className="mt-1 font-display text-2xl font-semibold tracking-tight">
                    {siteConfig.founder.name} Hasan
                  </div>
                  <div className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Globe2 className="size-3.5" /> Worldwide · Async-first
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
                <p>
                  I'm Mehedi — an AI frontend engineer and the founder of Qyvora Studio. For 8+ years
                  I've been building premium web experiences for AI startups, SaaS founders and luxury
                  real-estate brands worldwide.
                </p>
                <p>
                  What started as HTML/CSS commissions in 2018 has become a studio that ships
                  investor-grade product surfaces for YC-backed AI startups, conversion-architected
                  landing pages for Series A SaaS teams, and luxury property sites that rank #1 in
                  Dubai's premium neighborhoods.
                </p>
                <p>
                  My belief: in a world where AI can generate a website in 30 seconds, the difference
                  between a forgettable site and one that closes pilots, raises rounds and ranks
                  globally is <span className="font-medium text-foreground">craft</span> — visual,
                  technical, and conversion craft.
                </p>
                <p>
                  Every engagement is run by me directly. No account managers, no offshore handoffs.
                  Just senior frontend craft on a startup timeline.
                </p>
              </div>

              <div className="mt-10">
                <div className="text-eyebrow text-muted-foreground">Core expertise</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "AI Frontend Engineer",
                    "Conversion-Focused Specialist",
                    "SaaS Frontend Systems",
                    "Next.js 16 (App Router, RSC)",
                    "Tailwind v4 Design Systems",
                    "TypeScript",
                    "Framer Motion",
                    "Real Estate Web (IDX/MLS)",
                    "Schema / SEO / AEO",
                  ].map((skill) => (
                    <span key={skill} className="rounded-full border border-border bg-surface-2 px-3 py-1 text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface/40 border-y border-border">
        <Container>
          <SectionHeader
            eyebrow="Values"
            title="How we work"
            description="Four operating principles that shape every engagement."
          />
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-3xl border border-border bg-surface p-6 transition-all hover:border-border-strong hover:shadow-elev-md">
                <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-aurora text-white shadow-elev-sm">
                  <v.icon className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="lg">
          <SectionHeader
            eyebrow="Journey"
            title="From HTML commissions to AI studio"
            description="A short history of how Mehedi became a studio focused on AI startups, SaaS systems and luxury real estate."
          />
          <ol className="relative mt-14 max-w-3xl mx-auto">
            <div aria-hidden className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-border-strong via-border to-border-strong" />
            {journey.map((j) => (
              <li key={j.year} className="relative mb-8 pl-12">
                <span className="absolute left-0 top-1 inline-flex size-9 items-center justify-center rounded-full bg-foreground text-background font-mono text-xs font-semibold">
                  <Award className="size-4" />
                </span>
                <div className="text-eyebrow text-primary">{j.year}</div>
                <div className="mt-1 font-display text-xl font-semibold">{j.title}</div>
                <p className="mt-1 text-muted-foreground">{j.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
