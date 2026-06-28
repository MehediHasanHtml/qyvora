"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Zap,
  Layers,
  Cpu,
  LineChart,
  Globe2,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const trustChips = [
  "Next.js 16 Certified Patterns",
  "Tailwind v4 Architecture",
  "Lighthouse 95+ Guarantee",
];

const stats = [
  { value: "120+", label: "Sites shipped" },
  { value: "98", label: "Avg Lighthouse" },
  { value: "3.1×", label: "Conv. uplift" },
  { value: "14", label: "Countries served" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32 lg:pt-52 lg:pb-40">
      {/* Background layers */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2">
          <div className="size-[640px] rounded-full bg-aurora opacity-20 blur-3xl animate-aurora" />
        </div>
      </div>

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Copy column */}
          <div className="lg:col-span-7 xl:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
            >
              <span className="relative inline-flex size-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-success/60" />
                <span className="relative size-2 rounded-full bg-success" />
              </span>
              AI Frontend Engineer · Booking Q3 — 3 slots for AI startup launches
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 font-display text-display-xl text-balance"
            >
              AI Frontend Engineer for
              <br className="hidden sm:block" />
              <span className="text-gradient animate-aurora">world-class startups</span>
              <br className="hidden sm:block" />
              & global brands.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty"
            >
              Premium AI frontend studio engineering high-conversion websites and SaaS interfaces
              for AI startups, SaaS founders and real-estate brands across the USA, UK, Dubai,
              Canada and Australia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-5 flex flex-wrap gap-2"
            >
              {["AI Startup Frontend Partner", "Conversion-Focused Specialist", "SaaS Systems Expert", "Modern Redesign Studio"].map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border-strong/60 bg-surface/50 px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  <span className="size-1 rounded-full bg-primary" />
                  {chip}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button asChild variant="gradient" size="xl">
                <Link href="/contact">
                  Start a project <ArrowUpRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link href="/case-studies">
                  See recent work <Sparkles className="size-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-7 flex flex-wrap gap-x-5 gap-y-2"
            >
              {trustChips.map((chip) => (
                <li
                  key={chip}
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="size-4 text-success" />
                  {chip}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* UI Mockup column */}
          <div className="relative lg:col-span-5">
            <HeroMockup />
          </div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-surface px-6 py-7">
              <div className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1.5 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function HeroMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-lg lg:ml-auto"
    >
      {/* Glow behind */}
      <div aria-hidden className="absolute -inset-6 rounded-[2.5rem] bg-aurora opacity-25 blur-3xl animate-aurora" />

      {/* Browser frame */}
      <div className="relative overflow-hidden rounded-3xl border border-border-strong glass-strong shadow-elev-lg">
        <div className="flex items-center justify-between border-b border-border bg-surface-2/60 px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-danger/70" />
            <span className="size-2.5 rounded-full bg-warning/70" />
            <span className="size-2.5 rounded-full bg-success/70" />
          </div>
          <div className="flex items-center gap-2 rounded-md bg-surface px-3 py-1 text-[11px] text-muted-foreground">
            <Globe2 className="size-3" />
            mehedihtml.com/ai-startup-demo
          </div>
          <div className="w-8" />
        </div>

        <div className="relative space-y-4 p-5">
          {/* App nav */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="size-7 rounded-lg bg-aurora animate-aurora" />
              <div className="text-sm font-semibold">Claude AI</div>
            </div>
            <div className="hidden gap-1 sm:flex">
              {["Dashboard", "Agents", "Data"].map((l) => (
                <div key={l} className="rounded-md bg-surface-2 px-2.5 py-1 text-[11px] text-muted-foreground">{l}</div>
              ))}
            </div>
          </div>

          {/* Bento cards */}
          <div className="grid grid-cols-3 gap-3">
            <MockCard icon={<Zap className="size-4" />} title="Latency" value="47ms" tone="primary" />
            <MockCard icon={<LineChart className="size-4" />} title="Conv." value="+312%" tone="accent" />
            <MockCard icon={<Cpu className="size-4" />} title="Agents" value="124" tone="secondary" />
          </div>

          {/* Chart card */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-2/60 p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-muted-foreground">Monthly revenue</div>
                <div className="font-display text-xl font-semibold">$184,200</div>
              </div>
              <div className="inline-flex items-center gap-1 rounded-full border border-success/30 bg-success/10 px-2 py-0.5 text-[11px] font-medium text-success">
                ▲ 24.6%
              </div>
            </div>
            <ChartSpark />
          </div>

          {/* AI suggestion row */}
          <div className="flex items-start gap-2.5 rounded-xl border border-primary/20 bg-primary/10 p-3">
            <Sparkles className="mt-0.5 size-4 shrink-0 text-primary" />
            <div className="text-[12px] leading-relaxed">
              <span className="font-medium text-foreground">AI insight: </span>
              <span className="text-muted-foreground">
                Pricing page LCP dropped 38%. Suggested: preload hero font + defer testimonial video.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, x: -10, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="absolute -left-6 bottom-10 hidden rounded-2xl border border-border-strong glass-strong p-3 shadow-elev-md sm:flex"
      >
        <div className="flex items-center gap-2.5">
          <div className="flex size-9 items-center justify-center rounded-xl bg-aurora text-white shadow-elev-sm">
            <Layers className="size-4" />
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Lighthouse</div>
            <div className="font-display text-sm font-semibold">98 · 100 · 100 · 100</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function MockCard({
  icon, title, value, tone,
}: { icon: React.ReactNode; title: string; value: string; tone: "primary" | "accent" | "secondary" }) {
  const toneMap = {
    primary: "from-primary/20 to-transparent text-primary border-primary/20",
    accent: "from-accent/20 to-transparent text-accent border-accent/20",
    secondary: "from-secondary/20 to-transparent text-secondary border-secondary/20",
  };
  return (
    <div className={`relative overflow-hidden rounded-xl border bg-gradient-to-b p-3 ${toneMap[tone]}`}>
      <div className="flex items-center justify-between">
        <span>{icon}</span>
      </div>
      <div className="mt-3 text-[11px] uppercase tracking-wider text-muted-foreground">{title}</div>
      <div className="font-display text-lg font-semibold text-foreground">{value}</div>
    </div>
  );
}

function ChartSpark() {
  return (
    <svg viewBox="0 0 200 60" className="mt-3 h-16 w-full" aria-hidden>
      <defs>
        <linearGradient id="spark" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(72% 0.22 285)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="oklch(72% 0.22 285)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,45 C20,38 30,42 45,30 C60,20 75,28 90,22 C108,15 120,28 135,18 C152,8 168,18 185,8 L200,4 L200,60 L0,60 Z"
        fill="url(#spark)"
      />
      <path
        d="M0,45 C20,38 30,42 45,30 C60,20 75,28 90,22 C108,15 120,28 135,18 C152,8 168,18 185,8 L200,4"
        fill="none"
        stroke="oklch(72% 0.22 285)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
