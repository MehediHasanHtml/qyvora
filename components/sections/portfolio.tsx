"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Gauge, Smartphone, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";

type CaseStudy = {
  category: "AI startup" | "SaaS" | "Real estate" | "Landing page";
  client: string;
  title: string;
  summary: string;
  metrics: { label: string; value: string; icon: React.ElementType }[];
  tone: "violet" | "cyan" | "amber" | "neutral";
  span?: "wide";
};

const cases: CaseStudy[] = [
  {
    category: "AI startup",
    client: "Claude AI",
    title: "From wait-list to $1.4M ARR in 90 days",
    summary:
      "Re-architected landing & dashboard for a YC-backed agent platform. Streaming UI, eval surfaces and pricing redesign.",
    metrics: [
      { label: "Trial → paid", value: "+312%", icon: TrendingUp },
      { label: "LCP", value: "0.9s", icon: Gauge },
      { label: "Mobile CVR", value: "+184%", icon: Smartphone },
    ],
    tone: "violet",
    span: "wide",
  },
  {
    category: "SaaS",
    client: "Lumen SaaS",
    title: "Landing redesign that added $84K MRR",
    summary:
      "Hero → pricing rebuild with conversion-focused copy and A/B-ready components on Next.js + Tailwind v4.",
    metrics: [
      { label: "Visit → trial", value: "+148%", icon: TrendingUp },
      { label: "INP", value: "92ms", icon: Gauge },
    ],
    tone: "cyan",
  },
  {
    category: "Real estate",
    client: "Atlas Realty Dubai",
    title: "Luxury listings that rank #1 in 3 neighborhoods",
    summary:
      "Premium agent brand site + IDX-ready listing engine with map search, lead capture & schema.",
    metrics: [
      { label: "Leads /mo", value: "4.2×", icon: TrendingUp },
      { label: "Lighthouse", value: "98", icon: Gauge },
    ],
    tone: "amber",
  },
  {
    category: "Landing page",
    client: "Forge.dev",
    title: "AI redesign concept → live in 9 days",
    summary:
      "Concept-to-ship redesign using AI-assisted wireframing, then production Next.js handoff.",
    metrics: [
      { label: "Time to ship", value: "9d", icon: Sparkles },
      { label: "Bounce", value: "−41%", icon: TrendingUp },
    ],
    tone: "neutral",
  },
];

const toneBg = {
  violet: "from-primary/30 via-primary/10 to-transparent",
  cyan: "from-secondary/30 via-secondary/10 to-transparent",
  amber: "from-accent/30 via-accent/10 to-transparent",
  neutral: "from-foreground/10 via-foreground/5 to-transparent",
};

export function Portfolio() {
  return (
    <Section id="work" className="relative">
      <Container>
        <SectionHeader
          eyebrow="Selected work"
          title={
            <>
              Case studies engineered for{" "}
              <span className="text-gradient animate-aurora">measurable outcomes</span>.
            </>
          }
          description="Before/after redesigns, performance turnarounds and conversion lifts for global teams."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
          {cases.map((c, i) => (
            <motion.article
              key={c.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.08 }}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-surface transition-all hover:border-border-strong hover:shadow-elev-lg hover:-translate-y-1 ${c.span === "wide" ? "md:col-span-2" : ""}`}
            >
              <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${toneBg[c.tone]}`}>
                <div aria-hidden className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-display text-5xl font-semibold tracking-tight text-foreground/85 transition-transform duration-700 group-hover:scale-105">
                    {c.client}
                  </div>
                </div>
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-background/70 px-3 py-1 text-xs font-medium backdrop-blur">
                  {c.category}
                </div>
                <div className="absolute top-4 right-4 inline-flex size-9 items-center justify-center rounded-full bg-foreground text-background opacity-0 transition-opacity group-hover:opacity-100">
                  <ArrowUpRight className="size-4" />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-balance">{c.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{c.summary}</p>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="rounded-2xl border border-border bg-surface-2 p-3.5">
                      <m.icon className="size-4 text-primary" />
                      <div className="mt-2 font-display text-lg font-semibold">{m.value}</div>
                      <div className="text-[11px] text-muted-foreground">{m.label}</div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors group-hover:text-primary"
                >
                  Read the case study
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
