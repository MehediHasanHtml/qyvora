"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/container";

const wordmarks = [
  "Claude AI", "Lumen SaaS", "Sablier", "Forge.dev", "Atlas Realty",
  "Helios", "Nimbus", "Vault.io", "Orbital", "Pixelfield", "Quantra",
];

const testimonials = [
  {
    quote:
      "Qyvora.studio shipped our AI dashboard 3 weeks faster than our previous studio — and our trial-to-paid jumped from 4.1% to 12.7%. Worth every dollar.",
    author: "Priya Shah",
    role: "Co-founder, Claude AI",
    rating: 5,
  },
  {
    quote:
      "Our landing page redesign added $84K in MRR within the first 60 days. The motion design alone made investors take us seriously.",
    author: "Jonas Krüger",
    role: "CEO, Lumen SaaS",
    rating: 5,
  },
  {
    quote:
      "The real-estate site Qyvora.studio built ranks #1 in three Dubai neighborhoods. Lead form completions are up 4.2x.",
    author: "Sarah Al-Mansoori",
    role: "Principal, Atlas Realty Dubai",
    rating: 5,
  },
];

export function SocialProof() {
  return (
    <section className="relative border-y border-border bg-surface/40 py-20 sm:py-24">
      <Container>
        <p className="text-center text-eyebrow text-muted-foreground">
          Trusted by AI startups, SaaS teams & global property brands
        </p>

        {/* Marquee */}
        <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-12">
            {[...wordmarks, ...wordmarks].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="font-display text-2xl font-medium tracking-tight text-muted-foreground/70 transition-colors hover:text-foreground"
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col rounded-3xl border border-border bg-surface p-7 shadow-elev-sm transition-all hover:border-border-strong hover:shadow-elev-md"
            >
              <Quote className="size-6 text-primary/40" />
              <div className="mt-4 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="size-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-4 text-base leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-medium">{t.author}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
