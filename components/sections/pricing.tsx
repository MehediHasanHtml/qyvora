"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

type Tier = {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  highlighted?: boolean;
  badge?: string;
};

const tiers: Tier[] = [
  {
    name: "Startup",
    price: "$4,800",
    period: "/project",
    description: "Premium landing or pre-launch site, shipped in 2 weeks.",
    features: [
      "Up to 5 pages",
      "Next.js 16 + Tailwind v4",
      "Conversion-focused copy",
      "Schema + base SEO/AEO",
      "Lighthouse 95+ guarantee",
      "1 round of revisions",
    ],
    cta: "Start launch sprint",
    href: "#contact",
  },
  {
    name: "Growth",
    price: "$12,400",
    period: "/project",
    description: "Full marketing site or SaaS product surface, end-to-end.",
    features: [
      "Up to 14 pages + blog/MDX",
      "Custom motion & micro-interactions",
      "Component library + design tokens",
      "Advanced SEO + AEO architecture",
      "CMS / headless integration",
      "A/B-ready conversion blocks",
      "3 rounds of revisions",
    ],
    cta: "Book a growth build",
    href: "#contact",
    highlighted: true,
    badge: "Most popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Multi-region marketing + product UI, scaled team & SLA.",
    features: [
      "Unlimited pages & locales",
      "Dedicated senior team",
      "Design system + Storybook",
      "Schema + analytics + experimentation",
      "Performance & SEO retainer",
      "Quarterly roadmap & SLA",
      "Slack / on-call support",
    ],
    cta: "Talk to founder",
    href: "#contact",
  },
];

export function Pricing() {
  return (
    <Section id="pricing" className="relative">
      <Container>
        <SectionHeader
          eyebrow="Pricing"
          title={
            <>
              Productized packages.{" "}
              <span className="text-gradient animate-aurora">No agency surprises.</span>
            </>
          }
          description="Fixed scope. Fixed price. Senior craft, on a startup timeline."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className={`relative flex flex-col rounded-3xl border p-8 transition-all hover:-translate-y-1 ${
                t.highlighted
                  ? "border-primary/40 bg-surface shadow-glow ring-glow"
                  : "border-border bg-surface hover:border-border-strong hover:shadow-elev-md"
              }`}
            >
              {t.highlighted ? (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-aurora px-3 py-1 text-xs font-semibold text-white shadow-elev-sm">
                  <Sparkles className="size-3" /> {t.badge}
                </div>
              ) : null}

              <h3 className="font-display text-xl font-semibold">{t.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-4xl font-semibold tracking-tight">{t.price}</span>
                {t.period ? <span className="text-sm text-muted-foreground">{t.period}</span> : null}
              </div>

              <Button
                asChild
                variant={t.highlighted ? "gradient" : "outline"}
                size="lg"
                className="mt-6 w-full"
              >
                <Link href={t.href}>
                  {t.cta} <ArrowUpRight className="size-4" />
                </Link>
              </Button>

              <ul className="mt-8 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className={`mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full ${t.highlighted ? "bg-primary/20 text-primary" : "bg-surface-2 text-foreground"}`}>
                      <Check className="size-3" />
                    </span>
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          50% to start, 50% on launch. Worldwide invoicing in USD, EUR or GBP.
        </p>
      </Container>
    </Section>
  );
}
