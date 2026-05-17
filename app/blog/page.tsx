import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/ui/page-header";
import { posts } from "@/lib/posts";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog — AI Frontend, Conversion & SEO Insights",
  description:
    "Long-form essays on AI frontend engineering, conversion optimization, SEO + AEO architecture, real-estate web design and the craft of premium Next.js sites.",
  alternates: { canonical: `${siteConfig.url}/blog` },
};

const dateFmt = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" });

export default function BlogIndexPage() {
  const [featured, ...rest] = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title={
          <>
            Field notes from a{" "}
            <span className="text-gradient animate-aurora">premium frontend studio</span>.
          </>
        }
        description="Long-form essays on AI frontend, conversion optimization, SEO + AEO architecture and the craft of shipping premium Next.js sites."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        size="xl"
      />

      <Section className="!pt-6">
        <Container>
          {/* Featured */}
          {featured ? (
            <Link
              href={`/blog/${featured.slug}`}
              className="group relative grid grid-cols-1 overflow-hidden rounded-3xl border border-border bg-surface transition-all hover:border-border-strong hover:shadow-elev-lg lg:grid-cols-2"
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 lg:h-auto">
                <div aria-hidden className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="font-display text-3xl font-semibold leading-tight text-foreground/90 text-balance">
                    {featured.title}
                  </div>
                </div>
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-background/70 px-3 py-1 text-xs font-medium backdrop-blur">
                  Featured · {featured.category}
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="inline-flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Calendar className="size-3.5" /> {dateFmt.format(new Date(featured.date))}</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1.5"><Clock className="size-3.5" /> {featured.readMinutes} min read</span>
                </div>
                <h2 className="mt-4 font-display text-display-md text-balance">{featured.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{featured.description}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground group-hover:text-primary">
                  Read essay
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ) : null}

          {/* Rest */}
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col rounded-3xl border border-border bg-surface p-6 transition-all hover:border-border-strong hover:shadow-elev-md hover:-translate-y-1"
              >
                <div className="text-eyebrow text-primary">{p.category}</div>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-balance">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">{p.description}</p>
                <div className="mt-auto pt-6 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{dateFmt.format(new Date(p.date))}</span>
                  <span>{p.readMinutes} min read</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
