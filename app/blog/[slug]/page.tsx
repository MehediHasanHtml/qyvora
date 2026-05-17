import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Calendar, Clock, ChevronLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/json-ld";
import { FinalCTA } from "@/components/sections/final-cta";
import { posts, getPost } from "@/lib/posts";
import { siteConfig } from "@/lib/site";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `${siteConfig.url}/blog/${p.slug}` },
    openGraph: {
      title: p.title,
      description: p.description,
      type: "article",
      publishedTime: p.date,
      url: `${siteConfig.url}/blog/${p.slug}`,
    },
  };
}

const dateFmt = new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" });

function renderBody(body: string) {
  return body.split(/\n\n+/).map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="mt-12 font-display text-display-md">
          {block.slice(3)}
        </h2>
      );
    }
    if (block.startsWith("- ")) {
      const items = block.split("\n").map((l) => l.replace(/^- /, ""));
      return (
        <ul key={i} className="my-6 space-y-2">
          {items.map((it, j) => (
            <li key={j} className="flex gap-3 text-foreground/90 leading-relaxed">
              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    }
    if (/^\d+\.\s/.test(block)) {
      const items = block.split("\n").map((l) => l.replace(/^\d+\.\s/, ""));
      return (
        <ol key={i} className="my-6 space-y-2">
          {items.map((it, j) => (
            <li key={j} className="flex gap-3 text-foreground/90 leading-relaxed">
              <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-aurora text-white font-mono text-xs">
                {j + 1}
              </span>
              <span>{it}</span>
            </li>
          ))}
        </ol>
      );
    }
    return (
      <p key={i} className="my-5 text-lg leading-relaxed text-foreground/90 text-pretty">
        {block}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    description: p.description,
    articleSection: p.category,
    datePublished: p.date,
    dateModified: p.date,
    wordCount: p.body.split(/\s+/).length,
    author: { "@type": "Person", name: siteConfig.founder.name, url: siteConfig.url },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/blog/${p.slug}` },
  };

  const related = posts.filter((x) => x.slug !== p.slug).slice(0, 2);

  return (
    <>
      <PageHeader
        eyebrow={p.category}
        title={p.title}
        description={p.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: p.title.length > 50 ? p.title.slice(0, 50) + "…" : p.title },
        ]}
        size="lg"
      >
        <div className="inline-flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><Calendar className="size-3.5" /> {dateFmt.format(new Date(p.date))}</span>
          <span>·</span>
          <span className="inline-flex items-center gap-1.5"><Clock className="size-3.5" /> {p.readMinutes} min read</span>
          <span>·</span>
          <span>By {siteConfig.founder.name}</span>
        </div>
      </PageHeader>

      <Section className="!pt-0">
        <Container size="md">
          <article className="prose-mehedi mx-auto max-w-2xl">
            {renderBody(p.body)}
          </article>

          <div className="mx-auto mt-16 max-w-2xl border-t border-border pt-8">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground">
              <ChevronLeft className="size-4" /> Back to blog
            </Link>
          </div>

          {/* Related */}
          {related.length ? (
            <div className="mx-auto mt-16 max-w-2xl border-t border-border pt-10">
              <div className="text-eyebrow text-muted-foreground">Keep reading</div>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group rounded-2xl border border-border bg-surface p-5 hover:border-border-strong hover:shadow-elev-md"
                  >
                    <div className="text-eyebrow text-primary">{r.category}</div>
                    <div className="mt-2 font-display text-base font-semibold text-balance group-hover:text-foreground">
                      {r.title}
                    </div>
                    <div className="mt-4 inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary">
                      Read essay <ArrowUpRight className="size-3.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </Container>
      </Section>

      <FinalCTA />
      <JsonLd data={articleSchema} id={`ld-post-${p.slug}`} />
    </>
  );
}
