import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/primitives";
import { Markdown, headingsOf } from "@/components/markdown";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { getPost, posts, readingMinutes, sortedPosts } from "@/lib/content/posts";
import { pagesBySlugs } from "@/lib/content/pages";
import { siteConfig } from "@/lib/site";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema, graph, webPageSchema, type Crumb } from "@/lib/schema";
import { formatDate } from "@/lib/utils";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`, ownImage: true,
    type: "article",
    publishedTime: post.published,
    modifiedTime: post.updated,
  });
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const crumbs: Crumb[] = [
    { name: "Home", path: "/" },
    { name: "Insights", path: "/blog" },
    { name: post.title, path },
  ];
  const toc = headingsOf(post.body);
  const services = pagesBySlugs(post.relatedServices);
  const more = sortedPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="relative -mt-16 overflow-hidden border-b border-line pt-16">
          <div aria-hidden className="absolute inset-x-0 top-0 h-[480px] bg-glow fade-b" />
          <Container size="lg" className="relative pb-14 pt-10 lg:pt-14">
            <Breadcrumbs items={crumbs} />
            <p className="eyebrow mt-8 text-accent-text">{post.category}</p>
            <h1 id="page-title" className="heading mt-4 text-h1 text-fg">
              {post.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lede text-muted">{post.description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted">
              <span className="inline-flex items-center gap-3">
                <span
                  aria-hidden
                  className="heading inline-flex size-9 items-center justify-center rounded-full bg-aurora text-xs text-white"
                >
                  Q
                </span>
                <span>
                  <Link href="/about" rel="author" className="font-medium text-fg hover:text-accent-text">
                    {siteConfig.team.name}
                  </Link>
                  <span className="block text-xs">Design and engineering</span>
                </span>
              </span>
              <span aria-hidden>·</span>
              <span>
                Published <time dateTime={post.published}>{formatDate(post.published)}</time>
              </span>
              {post.updated !== post.published ? (
                <>
                  <span aria-hidden>·</span>
                  <span>
                    Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
                  </span>
                </>
              ) : null}
              <span aria-hidden>·</span>
              <span>{readingMinutes(post.body)} min read</span>
            </div>
          </Container>
        </header>

        <Container size="lg">
          <div className="grid gap-12 py-14 lg:grid-cols-[1fr_220px] lg:py-20">
            <div className="max-w-[68ch]">
              <div className="prose-qy">
                <Markdown body={post.body} />
              </div>
              <div className="mt-14 rounded-2xl border border-line bg-surface p-6">
                <p className="text-sm font-medium text-fg">About {siteConfig.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{siteConfig.team.summary}</p>
              </div>
            </div>
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-8">
                {toc.length ? (
                  <nav aria-label="On this page">
                    <p className="eyebrow">On this page</p>
                    <ul className="mt-4 space-y-2.5 border-l border-line">
                      {toc.map((h) => (
                        <li key={h.id}>
                          <a href={`#${h.id}`} className="-ml-px block border-l border-transparent pl-4 text-sm text-muted hover:border-accent-text hover:text-fg">
                            {h.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                ) : null}
                {services.length ? (
                  <div>
                    <p className="eyebrow">Related services</p>
                    <ul className="mt-4 space-y-2.5">
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link href={`/${s.slug}`} className="text-sm text-fg hover:text-accent-text">
                            {s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </aside>
          </div>
        </Container>
      </article>

      <section aria-labelledby="more-title" className="border-t border-line py-20">
        <Container>
          <h2 id="more-title" className="heading text-[1.65rem] text-fg">
            Keep reading
          </h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {more.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 hover:border-accent-line">
                  <span className="eyebrow">{p.category}</span>
                  <span className="mt-3 flex-1 font-semibold leading-snug text-fg">{p.title}</span>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-muted group-hover:text-fg">
                    Read article <ArrowRight aria-hidden className="size-3.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand primaryHref={services[0] ? `/contact?type=${services[0].projectType}` : "/contact"} />
      <JsonLd
        data={graph(
          webPageSchema({ path, name: post.title, description: post.description, about: `${absoluteUrl(path)}#article` }),
          articleSchema(post),
          breadcrumbSchema(crumbs),
        )}
      />
    </>
  );
}
