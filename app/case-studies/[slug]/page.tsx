import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Quote, TrendingUp, MapPin, Clock, Briefcase } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/json-ld";
import { FinalCTA } from "@/components/sections/final-cta";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { siteConfig } from "@/lib/site";

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) return {};
  return {
    title: `${c.title} — ${c.client} Case Study`,
    description: c.summary,
    alternates: { canonical: `${siteConfig.url}/case-studies/${c.slug}` },
    openGraph: {
      title: c.title,
      description: c.summary,
      type: "article",
      url: `${siteConfig.url}/case-studies/${c.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.title,
    description: c.summary,
    author: { "@type": "Organization", name: siteConfig.legalName },
    publisher: { "@type": "Organization", name: siteConfig.legalName, logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo.png` } },
    about: c.client,
    keywords: c.services.join(", "),
  };

  return (
    <>
      <PageHeader
        eyebrow={c.category}
        title={c.title}
        description={c.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case studies", href: "/case-studies" },
          { label: c.client },
        ]}
        size="xl"
      />

      <Section className="!pt-4">
        <Container>
          {/* Meta strip */}
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
            {[
              { icon: Briefcase, label: "Client", value: c.client },
              { icon: MapPin, label: "Region", value: c.region },
              { icon: Clock, label: "Timeline", value: c.timeline },
              { icon: TrendingUp, label: "Industry", value: c.industry },
            ].map((m) => (
              <div key={m.label} className="bg-surface p-6">
                <m.icon className="size-4 text-primary" />
                <div className="mt-2 text-eyebrow text-muted-foreground">{m.label}</div>
                <div className="mt-0.5 font-display font-semibold">{m.value}</div>
              </div>
            ))}
          </div>

          {/* Metrics */}
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {c.metrics.map((m) => (
              <div key={m.label} className="rounded-2xl border border-border bg-surface p-6">
                <div className="text-eyebrow text-muted-foreground">{m.label}</div>
                <div className="mt-2 font-display text-3xl font-semibold tracking-tight">{m.value}</div>
                {m.sub ? <div className="mt-1 text-xs text-muted-foreground">{m.sub}</div> : null}
              </div>
            ))}
          </div>

          {/* Body */}
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-12">
            <article className="lg:col-span-8 space-y-12">
              <section>
                <h2 className="font-display text-display-md">The problem</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{c.problem}</p>
              </section>

              <section>
                <h2 className="font-display text-display-md">Our approach</h2>
                <ol className="mt-6 space-y-4">
                  {c.approach.map((step, i) => (
                    <li key={step} className="flex gap-4 rounded-2xl border border-border bg-surface p-5">
                      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-aurora text-white font-mono text-sm">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-foreground leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ol>
              </section>

              <section>
                <h2 className="font-display text-display-md">The outcome</h2>
                <ul className="mt-6 space-y-3">
                  {c.outcome.map((o) => (
                    <li key={o} className="flex items-start gap-3 text-lg leading-relaxed">
                      <TrendingUp className="mt-1 size-5 shrink-0 text-success" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </article>

            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                <div className="rounded-3xl border border-border bg-surface p-7">
                  <div className="text-eyebrow text-muted-foreground">Services</div>
                  <ul className="mt-4 space-y-2 text-sm">
                    {c.services.map((s) => (
                      <li key={s} className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-primary" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <figure className="rounded-3xl border border-primary/30 bg-surface p-7 shadow-glow">
                  <Quote className="size-6 text-primary/60" />
                  <blockquote className="mt-3 text-base leading-relaxed">
                    "{c.quote.text}"
                  </blockquote>
                  <figcaption className="mt-4 border-t border-border pt-4">
                    <div className="font-medium">{c.quote.author}</div>
                    <div className="text-sm text-muted-foreground">{c.quote.role}</div>
                  </figcaption>
                </figure>

                <Button asChild variant="gradient" size="lg" className="w-full">
                  <Link href="/contact">Start a project <ArrowUpRight className="size-4" /></Link>
                </Button>
              </div>
            </aside>
          </div>

          {/* Other cases */}
          <div className="mt-24 border-t border-border pt-12">
            <div className="text-eyebrow text-muted-foreground">More case studies</div>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {caseStudies.filter((x) => x.slug !== c.slug).map((other) => (
                <Link
                  key={other.slug}
                  href={`/case-studies/${other.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-5 hover:border-border-strong hover:shadow-elev-md"
                >
                  <div>
                    <div className="text-eyebrow text-muted-foreground">{other.category}</div>
                    <div className="mt-1 font-display font-semibold">{other.title}</div>
                  </div>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <FinalCTA />
      <JsonLd data={articleSchema} id={`ld-case-${c.slug}`} />
    </>
  );
}
