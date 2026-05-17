"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2, Brain, LayoutPanelTop, Gauge, Building2, Sparkles,
  TrendingUp, Paintbrush, ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";

type Service = {
  icon: React.ElementType;
  title: string;
  problem: string;
  solution: string;
  benefit: string;
  outcome: string;
  href: string;
  span?: "wide" | "tall";
  tone: "violet" | "cyan" | "amber" | "neutral";
};

const services: Service[] = [
  {
    icon: Code2,
    title: "Frontend Development",
    problem: "Slow, bloated, hard-to-maintain codebases.",
    solution: "Production-grade Next.js + TypeScript with a reusable design system.",
    benefit: "Ship features faster, reduce bug surface, scale without rewrites.",
    outcome: "+62% engineering velocity",
    href: "#contact",
    tone: "violet",
    span: "wide",
  },
  {
    icon: Brain,
    title: "AI-Integrated Frontend",
    problem: "AI features bolted on look generic and feel slow.",
    solution: "Streaming UIs, agent dashboards & RAG interfaces designed for trust.",
    benefit: "Differentiated AI product UX that converts trials to paid.",
    outcome: "3.1× trial-to-paid lift",
    href: "#contact",
    tone: "cyan",
    span: "tall",
  },
  {
    icon: LayoutPanelTop,
    title: "Landing Page Redesign",
    problem: "Your hero doesn't convert and analytics are flat.",
    solution: "Conversion-architected landing pages with A/B-ready components.",
    benefit: "Higher CTR, lower CAC, more demos booked.",
    outcome: "+148% CVR avg.",
    href: "#contact",
    tone: "amber",
  },
  {
    icon: Gauge,
    title: "Website Optimization",
    problem: "Lighthouse below 70 and Core Web Vitals failing.",
    solution: "INP, LCP & CLS engineering with critical-path tuning.",
    benefit: "Faster pages, better rankings, lower bounce.",
    outcome: "95+ Lighthouse",
    href: "#contact",
    tone: "neutral",
  },
  {
    icon: Building2,
    title: "Real Estate Websites",
    problem: "Generic listings, weak lead capture, no map UX.",
    solution: "Luxury property UI, IDX/MLS-ready, lead-gen forms & map search.",
    benefit: "More qualified buyer & seller leads on autopilot.",
    outcome: "4.2× lead volume",
    href: "#real-estate",
    tone: "violet",
  },
  {
    icon: Sparkles,
    title: "AI Startup Websites",
    problem: "Founders launch with template sites that look like everyone else.",
    solution: "Premium positioning, animated UI mockups, investor-grade design.",
    benefit: "Credibility that closes pilots and raises rounds.",
    outcome: "Investor-ready in 14 days",
    href: "#ai-startups",
    tone: "cyan",
    span: "wide",
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimization",
    problem: "Traffic is fine — revenue isn't.",
    solution: "CRO audits, heatmap-driven rebuilds, scientific A/B testing.",
    benefit: "Compound revenue from the traffic you already have.",
    outcome: "+38% revenue per visit",
    href: "#contact",
    tone: "amber",
  },
  {
    icon: Paintbrush,
    title: "Tailwind Refactoring",
    problem: "Legacy CSS sprawl and unmaintainable HTML templates.",
    solution: "HTML → Tailwind v4 conversion with a tokenized design system.",
    benefit: "Cleaner code, faster iteration, dark-mode for free.",
    outcome: "−71% CSS bundle",
    href: "#contact",
    tone: "neutral",
  },
];

const toneClasses = {
  violet: "from-primary/20 via-primary/5 to-transparent text-primary",
  cyan: "from-secondary/20 via-secondary/5 to-transparent text-secondary",
  amber: "from-accent/20 via-accent/5 to-transparent text-accent",
  neutral: "from-foreground/10 via-foreground/[0.03] to-transparent text-foreground",
};

export function Services() {
  return (
    <Section id="services" className="relative">
      <Container>
        <SectionHeader
          eyebrow="Services"
          title={
            <>
              Productized services for{" "}
              <span className="text-gradient animate-aurora">modern teams</span>
            </>
          }
          description="Eight focused offers. Each one engineered around a business outcome — not pretty pixels."
        />

        <div className="mt-16 grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            const span =
              s.span === "wide" ? "lg:col-span-2"
              : s.span === "tall" ? "lg:row-span-2"
              : "";
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: (i % 4) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-surface p-6 transition-all duration-500 hover:border-border-strong hover:shadow-elev-md hover:-translate-y-1 ${span}`}
              >
                <div
                  aria-hidden
                  className={`absolute inset-x-0 -top-px h-40 bg-gradient-to-b ${toneClasses[s.tone]} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className={`relative inline-flex size-11 items-center justify-center rounded-2xl border border-border bg-surface-2 ${toneClasses[s.tone].split(' ').slice(-1)[0]}`}>
                  <Icon className="size-5" />
                </div>

                <h3 className="relative mt-5 font-display text-xl font-semibold tracking-tight">
                  {s.title}
                </h3>

                <dl className="relative mt-3 space-y-2 text-sm text-muted-foreground">
                  <div><dt className="font-semibold text-foreground/80">Problem.</dt> <dd className="inline">{s.problem}</dd></div>
                  <div><dt className="font-semibold text-foreground/80">Solution.</dt> <dd className="inline">{s.solution}</dd></div>
                  <div><dt className="font-semibold text-foreground/80">Benefit.</dt> <dd className="inline">{s.benefit}</dd></div>
                </dl>

                <div className="relative mt-auto flex items-center justify-between pt-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border-strong/60 bg-surface-2 px-2.5 py-1 text-xs font-medium">
                    {s.outcome}
                  </span>
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors group-hover:text-primary"
                  >
                    Learn more
                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
