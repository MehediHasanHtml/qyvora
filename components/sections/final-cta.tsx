"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Mail, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function FinalCTA() {
  return (
    <section id="contact" className="relative isolate overflow-hidden py-24 sm:py-32 lg:py-40">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="size-[900px] rounded-full bg-aurora opacity-25 blur-3xl animate-aurora" />
        </div>
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] border border-border-strong glass-strong p-10 shadow-elev-lg sm:p-16"
        >
          <div aria-hidden className="absolute -top-32 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-aurora opacity-20 blur-3xl animate-aurora" />

          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <Sparkles className="size-3.5 text-primary" />
              Booking Q3 — 3 slots remaining
            </span>

            <h2 className="mt-6 font-display text-display-xl text-balance">
              Ready to ship the{" "}
              <span className="text-gradient animate-aurora">best website</span>{" "}
              your category has ever seen?
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground text-pretty">
              Whether you're an AI founder, SaaS team, or real-estate brand — let's build a
              site engineered to win in search, AI answers, and conversion.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="gradient" size="xl">
                <Link href={siteConfig.contact.bookingUrl}>
                  Book a free strategy call <Calendar className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link href={`mailto:${siteConfig.contact.email}`}>
                  Email the founder <Mail className="size-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-success animate-pulse-glow" />
                Reply within 12 hours
              </span>
              <span>·</span>
              <span>Worldwide — USA, UK, Dubai, Canada, Australia</span>
              <span>·</span>
              <Link href={siteConfig.contact.bookingUrl} className="inline-flex items-center gap-1 hover:text-foreground">
                or jump straight on a call <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
