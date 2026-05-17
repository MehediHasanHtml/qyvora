"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Home, Mail, Award, ArrowUpRight, Bed, Bath, Maximize } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const pillars = [
  { icon: Home, title: "Luxury property UI", body: "Editorial-grade photography layouts, parallax hero galleries, premium typography." },
  { icon: Mail, title: "Lead generation", body: "Multi-step inquiry forms, instant valuations, CRM integrations." },
  { icon: MapPin, title: "Map & search UX", body: "Mapbox-powered search, drawing tools, neighborhood polygons, saved searches." },
  { icon: Award, title: "Agent branding", body: "Premium agent profile pages, schema-rich bios, video intros, reviews." },
];

export function RealEstate() {
  return (
    <Section id="real-estate" className="relative overflow-hidden">
      <Container>
        <SectionHeader
          eyebrow="Real estate"
          title={
            <>
              Property websites that{" "}
              <span className="text-gradient animate-aurora">close deals</span>.
            </>
          }
          description="Luxury listing sites, agent brands and brokerage portals. Built for Dubai, Miami, London, Toronto and Sydney markets."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Property mockup */}
          <div className="lg:col-span-7">
            <PropertyMock />
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="rounded-2xl border border-border bg-surface p-5 transition-all hover:border-border-strong hover:shadow-elev-sm"
                >
                  <div className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-surface-2 text-accent">
                    <Icon className="size-4" />
                  </div>
                  <h3 className="mt-4 font-display font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Button asChild variant="default" size="lg">
            <Link href="/services/real-estate">Get a real-estate quote <ArrowUpRight className="size-4" /></Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/case-studies">See property case studies</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

function PropertyMock() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden rounded-3xl border border-border-strong bg-surface shadow-elev-lg"
    >
      {/* "Hero photo" */}
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/40" />
        <div className="absolute inset-0 dot-bg opacity-40" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface to-transparent" />
        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur">
          <span className="size-1.5 rounded-full bg-success animate-pulse-glow" />
          New listing · Palm Jumeirah
        </div>
        <div className="absolute top-4 right-4 rounded-full bg-foreground/90 px-3 py-1 text-xs font-medium text-background">
          $12.4M
        </div>
      </div>

      {/* Property details */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-semibold">Skyline Villa, Palm Jumeirah</h3>
            <p className="mt-1 inline-flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="size-3.5" /> Dubai, UAE · Freehold
            </p>
          </div>
          <button className="inline-flex items-center gap-1 rounded-full bg-aurora px-3.5 py-1.5 text-xs font-medium text-white">
            Book viewing
          </button>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3 text-center">
          {[
            { icon: Bed, value: "6", label: "Bedrooms" },
            { icon: Bath, value: "8", label: "Bathrooms" },
            { icon: Maximize, value: "12,400 sqft", label: "Built area" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-surface-2 p-3">
              <s.icon className="mx-auto size-4 text-muted-foreground" />
              <div className="mt-1.5 font-semibold">{s.value}</div>
              <div className="text-[11px] text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {["Private pool", "Sea view", "Smart home", "Concierge", "Beach access"].map((t) => (
            <span key={t} className="rounded-full border border-border bg-surface-2 px-2.5 py-1 text-[11px] text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
