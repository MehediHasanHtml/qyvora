import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ButtonLink, Container, Eyebrow, Section, Tag } from "@/components/ui/primitives";
import { EngagementBadge, ProjectCard, ProjectMedia } from "@/components/project-card";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { engagementNote, getProject, projects } from "@/lib/content/projects";
import { pagesBySlugs } from "@/lib/content/pages";
import { absoluteUrl, buildMetadata, truncate } from "@/lib/seo";
import { breadcrumbSchema, graph, projectSchema, webPageSchema, type Crumb } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return buildMetadata({
    title: `${p.name} Case Study: ${p.tagline}`.length <= 62 ? `${p.name} Case Study: ${p.tagline}` : `${p.name}: ${p.tagline}`,
    description: truncate(p.overview, 158),
    path: `/projects/${p.slug}`, ownImage: true,
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const path = `/projects/${project.slug}`;
  const crumbs: Crumb[] = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: project.name, path },
  ];
  const services = pagesBySlugs(project.relatedServices);
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      <article>
        <header className="relative -mt-16 overflow-hidden pt-16">
          <div aria-hidden className="absolute inset-x-0 top-0 h-[520px] bg-glow fade-b" />
          <Container className="relative pb-12 pt-10 lg:pt-14">
            <Breadcrumbs items={crumbs} />
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <EngagementBadge project={project} />
              <span className="eyebrow">
                {project.industry} · {project.year}
              </span>
            </div>
            <h1 id="page-title" className="heading mt-5 max-w-4xl text-h1 text-fg">
              {project.name}: {project.tagline}
            </h1>
            <p className="mt-6 max-w-3xl text-lede text-muted">{project.overview}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {project.liveUrl ? (
                <ButtonLink href={project.liveUrl} external size="lg" track="project_live_preview">
                  Open live preview
                </ButtonLink>
              ) : null}
              <ButtonLink href="/contact" variant="secondary" size="lg" arrow track="cta_start_project_case_study">
                Start a similar project
              </ButtonLink>
            </div>
          </Container>
        </header>

        <Container>
          <div className="overflow-hidden rounded-2xl border border-line-strong bg-surface-2 shadow-pop">
            <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-2.5">
              <span className="flex gap-1.5" aria-hidden>
                <span className="size-2.5 rounded-full bg-line-strong" />
                <span className="size-2.5 rounded-full bg-line-strong" />
                <span className="size-2.5 rounded-full bg-line-strong" />
              </span>
              <span className="mx-auto truncate font-mono text-xs text-muted">{project.name}</span>
            </div>
            <div className={project.image ? "" : "aspect-[16/8]"}>
              <ProjectMedia project={project} priority sizes="(min-width: 1280px) 1200px, 100vw" />
            </div>
          </div>
          <p className="mt-3 text-xs text-muted">{engagementNote[project.engagement]}</p>
        </Container>

        <Section className="pb-8" labelledBy="story">
          <Container>
            <h2 id="story" className="sr-only">
              Project story
            </h2>
            <div className="grid gap-14 lg:grid-cols-[1.6fr_1fr]">
              <div className="space-y-12">
                <div>
                  <Eyebrow>The challenge</Eyebrow>
                  <p className="heading mt-4 text-[1.5rem] leading-[1.25] text-fg">{project.challenge}</p>
                </div>
                <div>
                  <Eyebrow>The solution</Eyebrow>
                  <p className="mt-4 text-lg leading-relaxed text-fg/85">{project.solution}</p>
                </div>
                <div>
                  <Eyebrow>Key features</Eyebrow>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-fg/90">
                        <Check aria-hidden className="mt-1 size-4 shrink-0 text-accent-text" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Eyebrow>What was delivered</Eyebrow>
                  <ul className="mt-5 divide-y divide-line border-y border-line">
                    {project.outcomes.map((o) => (
                      <li key={o} className="py-4 text-fg/90">
                        {o}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs text-muted">
                    We only list delivered work here. Commercial metrics are published only when a client has shared and
                    approved them.
                  </p>
                </div>
              </div>

              <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
                <div className="rounded-2xl border border-line bg-surface p-6">
                  <dl className="space-y-5 text-sm">
                    <div>
                      <dt className="eyebrow">Industry</dt>
                      <dd className="mt-1.5 text-fg">{project.industry}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow">Year</dt>
                      <dd className="mt-1.5 text-fg">{project.year}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow">Technologies</dt>
                      <dd className="mt-2 flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <Tag key={t}>{t}</Tag>
                        ))}
                      </dd>
                    </div>
                  </dl>
                </div>
                {services.length ? (
                  <div className="rounded-2xl border border-line bg-surface p-6">
                    <p className="eyebrow">Related services</p>
                    <ul className="mt-4 space-y-2.5">
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link href={`/${s.slug}`} className="flex items-center justify-between text-sm text-fg hover:text-accent-text">
                            {s.name} <ArrowRight aria-hidden className="size-3.5" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </aside>
            </div>
          </Container>
        </Section>
      </article>

      <Section labelledBy="more-title" className="border-t border-line">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <h2 id="more-title" className="heading text-[1.65rem] text-fg">
              More projects
            </h2>
            <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg">
              <ArrowLeft aria-hidden className="size-3.5" /> All projects
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {others.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand title="Planning something similar? Let's talk it through." />
      <JsonLd
        data={graph(
          webPageSchema({ path, name: `${project.name}: ${project.tagline}`, description: project.overview, about: `${absoluteUrl(path)}#project` }),
          projectSchema(project),
          breadcrumbSchema(crumbs),
        )}
      />
    </>
  );
}
