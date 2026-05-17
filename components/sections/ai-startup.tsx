"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bot, Boxes, Workflow, ShieldCheck, ArrowUpRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Bot,
    title: "AI SaaS UI systems",
    body: "Streaming chat, tool-use surfaces, citations, retry & guardrail patterns — designed for product teams shipping agents.",
  },
  {
    icon: Boxes,
    title: "AI dashboard interfaces",
    body: "Operator dashboards for usage, evals, cost & latency. Built with chart-grade typography and dense-but-readable layouts.",
  },
  {
    icon: Workflow,
    title: "Startup MVP frontend",
    body: "Pre-launch landing + product shell shipped in 2–3 weeks. Investor-ready, instrumented for analytics from day one.",
  },
  {
    icon: ShieldCheck,
    title: "Scalable frontend systems",
    body: "Tokenized design system, type-safe APIs, RSC-first data fetching, and reusable Tailwind v4 patterns.",
  },
];

export function AiStartup() {
  return (
    <Section id="ai-startups" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 dot-bg opacity-50" />
      <Container>
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeader
              align="left"
              eyebrow="AI startups"
              title={
                <>
                  Frontend that makes your{" "}
                  <span className="text-gradient animate-aurora">AI feel inevitable</span>.
                </>
              }
              description="From pre-seed landing pages to operator dashboards — we design and ship the surfaces that turn a model into a product."
            />
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="default" size="lg">
                <Link href="/services/ai-startups">Book an AI launch <ArrowUpRight className="size-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/case-studies">See AI case studies</Link>
              </Button>
            </div>

            <ul className="mt-10 space-y-2 text-sm text-muted-foreground">
              {[
                "Used by YC, Antler & solo AI founders",
                "Streaming-aware UI patterns (OpenAI, Anthropic SDKs)",
                "Agent dashboards with eval / cost / latency surfaces",
              ].map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 size-4 text-primary" />
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-6 transition-all hover:border-border-strong hover:shadow-elev-md"
                >
                  <div aria-hidden className="absolute -top-12 -right-12 size-40 rounded-full bg-aurora opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
                  <div className="relative inline-flex size-12 items-center justify-center rounded-2xl border border-border bg-surface-2 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="relative mt-5 font-display text-lg font-semibold">{f.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
