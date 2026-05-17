"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Rocket, Cpu, Layers, Boxes, Sparkles, Award, Globe2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";

const reasons = [
  { icon: Rocket, title: "Fast delivery", body: "Most projects ship in 3–6 weeks. No 6-month engagements." },
  { icon: Cpu, title: "AI-powered workflow", body: "We use AI to accelerate research, copy, QA & code — without losing craft." },
  { icon: Layers, title: "Modern frontend expertise", body: "Next.js 16, React 19, TypeScript, Tailwind v4, Server Components first." },
  { icon: Boxes, title: "Scalable systems", body: "Tokenized design systems and component libraries you keep growing." },
  { icon: Sparkles, title: "Startup-focused thinking", body: "We've shipped for YC, Antler, solo founders, and bootstrapped studios." },
  { icon: Award, title: "Premium design quality", body: "Visual craft on par with Linear, Vercel, Stripe and Framer." },
  { icon: Globe2, title: "Worldwide service", body: "Clients in 14 countries — async-first, timezone-friendly delivery." },
];

export function WhyChoose() {
  return (
    <Section id="why" className="relative bg-surface/40 border-y border-border">
      <Container>
        <SectionHeader
          eyebrow="Why choose Mehedi"
          title={
            <>
              The studio that treats your{" "}
              <span className="text-gradient animate-aurora">website like a product</span>.
            </>
          }
          description="Most agencies hand you a pretty deck and a slow CMS theme. We hand you a measurable, AI-aware product surface engineered for growth."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-surface p-6 transition-all hover:border-border-strong hover:shadow-elev-md ${i === 0 ? "lg:row-span-1" : ""}`}
            >
              <div className="inline-flex size-11 items-center justify-center rounded-2xl bg-aurora text-white shadow-elev-sm">
                <r.icon className="size-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
