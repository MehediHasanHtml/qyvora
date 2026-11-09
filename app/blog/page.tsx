import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Container, Section } from "@/components/ui/primitives";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { readingMinutes, sortedPosts } from "@/lib/content/posts";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import { breadcrumbSchema, graph, ids, webPageSchema, type Crumb } from "@/lib/schema";

const title = "Insights on AI Development, SaaS and High Performing Websites";
const description =
  "Practical guides from Qyvora Studio on AI website costs, startup websites, SaaS development, industry websites, SEO and answer engine optimization.";

export const metadata: Metadata = buildMetadata({ title: "Insights and Guides", description, path: "/blog" });

const crumbs: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "Insights", path: "/blog" },
];

export default function BlogPage() {
  const [lead, ...rest] = sortedPosts;
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Insights"
        title="Practical guides for building better digital products."
        lede="Clear answers to the questions founders and business owners ask us most, written from real project experience."
      />
      <Section labelledBy="posts-title" className="pt-16">
        <Container>
          <h2 id="posts-title" className="sr-only">
            Articles
          </h2>
          <Link
            href={`/blog/${lead.slug}`}
            className="group grid gap-8 rounded-2xl border border-line bg-surface p-8 transition-colors hover:border-accent-line sm:p-10 lg:grid-cols-[1.4fr_1fr] lg:items-end"
          >
            <div>
              <p className="eyebrow text-accent-text">Latest · {lead.category}</p>
              <h3 className="heading mt-4 text-[clamp(1.65rem,1.35rem+1vw,2.25rem)] leading-[1.08] text-fg">{lead.title}</h3>
            </div>
            <div>
              <p className="leading-relaxed text-muted">{lead.description}</p>
              <p className="mt-6 flex items-center gap-3 text-sm text-muted">
                <time dateTime={lead.published}>{formatDate(lead.published)}</time>
                <span aria-hidden>·</span>
                {readingMinutes(lead.body)} min read
                <ArrowRight aria-hidden className="ml-auto size-4 text-fg transition-transform group-hover:translate-x-1" />
              </p>
            </div>
          </Link>
          <ul className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-accent-line"
                >
                  <p className="eyebrow">{p.category}</p>
                  <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-fg">{p.title}</h3>
                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
                  <p className="mt-6 flex items-center gap-2 text-xs text-muted">
                    <time dateTime={p.updated}>Updated {formatDate(p.updated)}</time>
                    <span aria-hidden>·</span>
                    {readingMinutes(p.body)} min read
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <CtaBand title="Have a question we have not answered?" body="Send it with your project details and we will reply personally." />
      <JsonLd
        data={graph(webPageSchema({ path: "/blog", name: title, description, type: "CollectionPage" }), breadcrumbSchema(crumbs), {
          "@type": "Blog",
          "@id": `${absoluteUrl("/blog")}#blog`,
          name: "Qyvora Studio Insights",
          url: absoluteUrl("/blog"),
          publisher: { "@id": ids.organization },
          blogPost: sortedPosts.map((p) => ({ "@id": `${absoluteUrl(`/blog/${p.slug}`)}#article` })),
        })}
      />
    </>
  );
}
