"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Search, Microscope, Target, PenLine, Brush, Code2, Gauge, Rocket,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";

const steps = [
  { icon: Search, title: "Discovery", body: "Goals, users, KPIs, constraints. We align on outcome before pixels.", week: "Week 0" },
  { icon: Microscope, title: "Research", body: "Competitor teardown, analytics dive, heatmaps, brand & market context.", week: "Week 1" },
  { icon: Target, title: "UX Strategy", body: "IA, user flows, conversion architecture, content priorities.", week: "Week 1" },
  { icon: PenLine, title: "Wireframing", body: "Low-fi layouts validated against KPIs before any visual design.", week: "Week 2" },
  { icon: Brush, title: "UI Design", body: "Premium visual language: type, color tokens, motion, components.", week: "Week 2–3" },
  { icon: Code2, title: "Development", body: "Next.js 16 + Tailwind v4. RSC-first, type-safe, reusable.", week: "Week 3–5" },
  { icon: Gauge, title: "Optimization", body: "Lighthouse 95+, INP, LCP, accessibility & SEO/AEO polish.", week: "Week 5" },
  { icon: Rocket, title: "Launch", body: "Vercel deploy, monitoring, analytics, post-launch optimization.", week: "Week 6" },
];

export function Process() {
  return (
    <Section id="process" className="relative bg-surface/40 border-y border-border">
      <Container>
        <SectionHeader
          eyebrow="Process"
          title="From kickoff to launch in 6 weeks"
          description="A disciplined system that ships premium frontend without endless revisions or scope creep."
        />

        <div className="relative mt-16">
          <div aria-hidden className="absolute left-1/2 top-0 -ml-px hidden h-full w-px bg-gradient-to-b from-transparent via-border-strong to-transparent lg:block" />
          <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all hover:border-border-strong hover:shadow-elev-md hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <div className="inline-flex size-11 items-center justify-center rounded-xl bg-aurora text-white shadow-elev-sm">
                      <Icon className="size-5" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  </div>
                  <div className="mt-5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {s.week}
                  </div>
                  <h3 className="mt-1 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
