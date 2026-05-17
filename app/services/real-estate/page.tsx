import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin, Home, Mail, Award, Building2, Search } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { OutcomesGrid } from "@/components/ui/outcomes-grid";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Real Estate Website Development — Luxury Property Sites",
  description:
    "Premium real estate websites for brokerages, agents and luxury developers. IDX/MLS-ready, map search, multi-step lead capture, schema-rich listings. Dubai, Miami, London, Toronto, Sydney.",
  alternates: { canonical: `${siteConfig.url}/services/real-estate` },
};

const offers = [
  {
    icon: Building2,
    title: "Luxury Property Site",
    body: "Editorial-grade listing pages, parallax galleries, premium typography. The brand site every $5M+ listing deserves.",
    bullets: ["Listing schema markup", "Premium agent bios", "Cinematic photo galleries"],
  },
  {
    icon: Search,
    title: "Search & Map UX",
    body: "Mapbox-powered search with drawing tools, neighborhood polygons, saved searches and instant filtering.",
    bullets: ["Polygon draw to filter", "Cluster + heatmap layers", "Saved-search & alerts"],
  },
  {
    icon: Mail,
    title: "Lead-Gen Engine",
    body: "Multi-step inquiry forms, instant property valuations, calendar booking and CRM integrations.",
    bullets: ["Salesforce + HubSpot ready", "Calendly / Cal.com booking", "Email + SMS lead routing"],
  },
  {
    icon: Award,
    title: "Agent Brand & SEO",
    body: "Schema-rich agent profile pages, video intros, reviews and local SEO that wins neighborhood searches.",
    bullets: ["LocalBusiness schema", "Neighborhood landing pages", "Review aggregation"],
  },
];

const markets = ["Dubai · UAE", "Miami · FL", "London · UK", "Toronto · CA", "Sydney · AU", "Singapore", "Lisbon · PT", "New York · NY"];

const reFaqs = [
  { q: "Do you build IDX / MLS websites?", a: "Yes. We integrate IDX/MLS feeds (RealtyFeed, iHomefinder, Showcase IDX, custom RETS) with our premium UI. Listings, search and lead capture all in one tokenized design system." },
  { q: "How long does a real estate site take?", a: "Most premium agent or brokerage sites ship in 3–5 weeks. A single luxury listing landing page can ship in 7–10 days." },
  { q: "Can you do Dubai-specific real estate work?", a: "Yes — Dubai is one of our most-served markets. We work with Palm Jumeirah, Downtown, Dubai Marina and Emirates Hills brokerages on multi-language (EN/AR) listing sites with map search." },
  { q: "Will my site rank locally?", a: "Yes. LocalBusiness schema, neighborhood hub pages, review aggregation, and topical clusters around your service area are built in. We've ranked client sites #1 in three Dubai neighborhoods." },
  { q: "Do you handle lead routing to my CRM?", a: "Yes — Salesforce, HubSpot, Follow Up Boss, Sierra, kvCORE and custom CRMs. Inquiry → CRM → email + SMS in under 5 seconds." },
  { q: "Can you build for multi-language markets?", a: "Yes. We build i18n-ready sites with proper hreflang, RTL support for Arabic, and locale-aware content negotiation." },
];

export default function RealEstatePage() {
  return (
    <>
      <PageHeader
        eyebrow="Real Estate Solutions"
        title={
          <>
            Property websites that{" "}
            <span className="text-gradient animate-aurora">close deals</span>.
          </>
        }
        description="Luxury listing sites, agent brands and brokerage portals — engineered for premium markets in Dubai, Miami, London, Toronto and Sydney."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Real Estate" }]}
        size="xl"
      >
        <Button asChild variant="gradient" size="lg">
          <Link href="/contact">Get a real-estate quote <ArrowUpRight className="size-4" /></Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/case-studies">See property case studies</Link>
        </Button>
      </PageHeader>

      <Section className="!pt-4">
        <Container>
          <OutcomesGrid
            items={[
              { value: "4.2×", label: "Lead volume" },
              { value: "#1", label: "In 3 neighborhoods" },
              { value: "98", label: "Lighthouse score" },
              { value: "8", label: "Premium markets" },
            ]}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Property offers"
            title="Four real-estate frontend offers"
            description="Each engineered for premium properties, agents and brokerages — from luxury listings to multi-language portals."
          />
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
            {offers.map((o) => (
              <article key={o.title} className="group rounded-3xl border border-border bg-surface p-7 transition-all hover:border-border-strong hover:shadow-elev-md">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-aurora text-white shadow-elev-sm">
                    <o.icon className="size-5" />
                  </span>
                  <h3 className="font-display text-xl font-semibold tracking-tight">{o.title}</h3>
                </div>
                <p className="mt-4 text-muted-foreground leading-relaxed">{o.body}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {o.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface/40 border-y border-border">
        <Container>
          <SectionHeader
            eyebrow="Markets served"
            title="Premium property markets, worldwide"
            description="We work with brokerages and agents across the world's most competitive luxury real-estate markets."
          />
          <div className="mt-12 flex flex-wrap justify-center gap-2.5">
            {markets.map((m) => (
              <span key={m} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium">
                <MapPin className="size-3.5 text-primary" />
                {m}
              </span>
            ))}
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { icon: Home, title: "Luxury listing UX", body: "Editorial photography layouts, parallax heroes, cinematic galleries." },
              { icon: Award, title: "Agent branding", body: "Premium profile pages, schema-rich bios, review aggregation." },
              { icon: Building2, title: "Brokerage portals", body: "Multi-agent, multi-locale, IDX/MLS-ready listing engines." },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl border border-border bg-surface p-6">
                <b.icon className="size-5 text-accent" />
                <div className="mt-3 font-display font-semibold">{b.title}</div>
                <p className="mt-1.5 text-sm text-muted-foreground">{b.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <FAQ
        items={reFaqs}
        eyebrow="Real estate FAQ"
        title="Real estate brands ask us…"
        description="What brokerages, agents and developers ask before kicking off a property site."
      />

      <FinalCTA />
    </>
  );
}
