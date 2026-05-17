import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Users, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { OutcomesGrid } from "@/components/ui/outcomes-grid";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";
import { type SeoLandingContent } from "@/lib/seo-content";

export function SeoLandingTemplate({
  content,
  slug,
}: {
  content: SeoLandingContent;
  slug: string;
}) {
  const { hero, outcomes, pillars, process, whoFor, faqs, related } = content;

  // Split headline around the highlight phrase so we can wrap it in gradient text.
  const headlineParts = hero.h1.split(hero.headlineHighlight);

  return (
    <>
      <PageHeader
        eyebrow={hero.eyebrow}
        title={
          <>
            {headlineParts[0]}
            <span className="text-gradient animate-aurora">{hero.headlineHighlight}</span>
            {headlineParts[1]}
          </>
        }
        description={hero.sub}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: hero.eyebrow }]}
        size="xl"
      >
        <Button asChild variant="gradient" size="lg">
          <Link href="/contact">{hero.primaryCta} <ArrowUpRight className="size-4" /></Link>
        </Button>
        {hero.secondaryCta ? (
          <Button asChild variant="outline" size="lg">
            <Link href="/case-studies">{hero.secondaryCta}</Link>
          </Button>
        ) : null}
      </PageHeader>

      <Section className="!pt-4">
        <Container>
          <OutcomesGrid items={[...outcomes]} />
        </Container>
      </Section>

      {/* Pillars */}
      <Section>
        <Container>
          <SectionHeader
            eyebrow="What's included"
            title={`Four pillars of ${hero.eyebrow.toLowerCase()}`}
            description={`A complete, fixed-scope engagement engineered around outcomes — not hours billed.`}
          />
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
            {pillars.map((p, i) => (
              <article
                key={p.title}
                className="group rounded-3xl border border-border bg-surface p-7 transition-all hover:border-border-strong hover:shadow-elev-md"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-aurora text-white shadow-elev-sm font-mono text-sm font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-xl font-semibold tracking-tight">{p.title}</h2>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section className="bg-surface/40 border-y border-border">
        <Container>
          <SectionHeader
            eyebrow="How it works"
            title="A predictable, 5-step delivery process"
            description="Each step is fixed-scope. You always know what's happening, what's next and what's done."
          />
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((s) => (
              <div key={s.step} className="rounded-2xl border border-border bg-surface p-5">
                <div className="font-mono text-xs text-muted-foreground">{s.step}</div>
                <div className="mt-3 font-display font-semibold">{s.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Who this is for */}
      <Section>
        <Container size="lg">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1 text-eyebrow text-muted-foreground">
                <Users className="size-3.5 text-primary" /> Who this is for
              </span>
              <h2 className="mt-5 font-display text-display-md text-balance">
                Built specifically for teams that need <span className="text-gradient animate-aurora">premium outcomes</span>.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                If you're one of these teams, this engagement is built around exactly your problem.
              </p>
            </div>
            <ul className="space-y-3">
              {whoFor.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-5"
                >
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-success" />
                  <span className="leading-relaxed">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <FAQ
        items={faqs}
        eyebrow={`${hero.eyebrow} FAQ`}
        title="Frequently asked questions"
        description="The exact questions founders and growth leads ask before booking this engagement."
      />

      {/* Related — internal linking for topical authority */}
      <Section className="!pt-0">
        <Container size="lg">
          <div className="rounded-3xl border border-border bg-surface-2/40 p-8">
            <div className="flex items-center gap-2 text-eyebrow text-muted-foreground">
              <Sparkles className="size-3.5 text-primary" /> Related solutions
            </div>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group flex items-center justify-between rounded-2xl border border-border bg-surface p-4 text-sm font-medium hover:border-border-strong hover:shadow-elev-sm"
                >
                  {r.label}
                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
