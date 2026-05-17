import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { servicesList, siteConfig } from "@/lib/site";
import { FinalCTA } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Services — AI Frontend Engineering & Web Studio",
  description:
    "12 productized services from Mehedi: AI frontend, AI startup websites, SaaS systems, landing page redesign, real estate, Next.js development, Tailwind v4 refactoring, conversion optimization, and more.",
  alternates: { canonical: `${siteConfig.url}/services` },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            Productized services engineered for{" "}
            <span className="text-gradient animate-aurora">measurable outcomes</span>.
          </>
        }
        description="Twelve focused offers. Each one designed around a business outcome — investor-grade launches, conversion lifts, ranking gains and speed wins — not pretty pixels."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        size="xl"
      >
        <Button asChild variant="gradient" size="lg">
          <Link href="/contact">Start a project <ArrowUpRight className="size-4" /></Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/case-studies">See case studies</Link>
        </Button>
      </PageHeader>

      <Section className="!pt-6">
        <Container>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {servicesList.map((s, i) => (
              <Link
                key={s.slug}
                id={s.slug}
                href="/contact"
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-surface p-6 transition-all hover:border-border-strong hover:shadow-elev-md hover:-translate-y-1"
              >
                <div>
                  <div className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")} / {String(servicesList.length).padStart(2, "0")}
                  </div>
                  <h2 className="mt-4 font-display text-xl font-semibold tracking-tight">
                    {s.name}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.short}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-sm font-medium">Discuss this service</span>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
