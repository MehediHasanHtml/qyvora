"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Search, Bot, Mic, Code, Layers, CircleCheck, Brain } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";

const seo = [
  "Semantic HTML5 + accessible landmarks",
  "Service / FAQ / Organization / LocalBusiness schema",
  "Optimized heading hierarchy and internal linking",
  "Core Web Vitals: LCP < 1.2s, INP < 200ms, CLS < 0.05",
  "Auto-generated sitemap.xml + robots.txt strategy",
  "Image optimization, lazy loading & priority hints",
];

const aeo = [
  "Conversational, answer-first content blocks",
  "Entity-rich copy mapped to Knowledge Graph",
  "Structured FAQs visible to ChatGPT, Perplexity & Gemini",
  "Schema-rich pages indexed by Google AI Overview",
  "Voice-search optimized question/answer headings",
  "Author E-E-A-T markup & expert attribution",
];

const engines = [
  { name: "Google", color: "bg-secondary/15 text-secondary border-secondary/30" },
  { name: "ChatGPT", color: "bg-success/15 text-success border-success/30" },
  { name: "Perplexity", color: "bg-primary/15 text-primary border-primary/30" },
  { name: "Claude", color: "bg-accent/15 text-accent border-accent/30" },
  { name: "Gemini", color: "bg-secondary/15 text-secondary border-secondary/30" },
  { name: "Voice", color: "bg-foreground/10 text-foreground border-foreground/20" },
];

export function SeoAeo() {
  return (
    <Section id="seo-aeo" className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 grid-bg opacity-50" />
      <Container>
        <SectionHeader
          eyebrow="SEO + AEO"
          title={
            <>
              Ranked by Google.{" "}
              <span className="text-gradient animate-aurora">Cited by ChatGPT.</span>
            </>
          }
          description="Every site we ship is engineered to win the next generation of search — classical SEO and Answer Engine Optimization, in one architecture."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-2.5">
          {engines.map((e) => (
            <span
              key={e.name}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium ${e.color}`}
            >
              <CircleCheck className="size-3.5" />
              Optimized for {e.name}
            </span>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-border bg-surface p-8"
          >
            <div className="flex items-center gap-3">
              <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
                <Search className="size-6" />
              </div>
              <h3 className="font-display text-2xl font-semibold tracking-tight">
                Technical SEO architecture
              </h3>
            </div>
            <p className="mt-3 text-muted-foreground">
              Search-engine-first foundations — built from the metadata API up.
            </p>
            <ul className="mt-6 space-y-3">
              {seo.map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-sm">
                  <CircleCheck className="mt-0.5 size-4 shrink-0 text-success" />
                  <span className="leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-border bg-surface p-8"
          >
            <div className="flex items-center gap-3">
              <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <Brain className="size-6" />
              </div>
              <h3 className="font-display text-2xl font-semibold tracking-tight">
                Answer Engine Optimization
              </h3>
            </div>
            <p className="mt-3 text-muted-foreground">
              Make your brand the answer AI assistants reach for, not the result they skip.
            </p>
            <ul className="mt-6 space-y-3">
              {aeo.map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-sm">
                  <Bot className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { icon: Code, title: "Schema markup", body: "JSON-LD for Service, Org, FAQ, Article, LocalBusiness." },
            { icon: Layers, title: "Topical clusters", body: "Hub & spoke architecture for authority on AI frontend." },
            { icon: Mic, title: "Voice search", body: "Conversational headings & natural-language FAQs." },
          ].map((b) => (
            <div key={b.title} className="rounded-2xl border border-border bg-surface-2 p-5">
              <b.icon className="size-5 text-accent" />
              <div className="mt-3 font-semibold">{b.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
