import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import type { LandingPage } from "@/lib/content/types";
import { pagesBySlugs } from "@/lib/content/pages";
import { projectsBySlugs } from "@/lib/content/projects";
import { ButtonLink, Container, Eyebrow, Section, SectionHeading, Tag } from "@/components/ui/primitives";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { FaqList } from "@/components/ui/faq-list";
import { ProjectCard } from "@/components/project-card";
import { CtaBand } from "@/components/cta-band";
import { Visual } from "@/components/visuals/mockups";
import type { Crumb } from "@/lib/schema";

export function LandingTemplate({ page, crumbs }: { page: LandingPage; crumbs: Crumb[] }) {
  const related = pagesBySlugs(page.related);
  const relatedProjects = projectsBySlugs(page.projects);
  const inquiryHref = `/contact?type=${page.projectType}`;

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="page-title" className="relative -mt-16 overflow-hidden pt-16">
        <div aria-hidden className="absolute inset-x-0 top-0 h-[620px] bg-glow fade-b" />
        <div aria-hidden className="absolute inset-x-0 top-0 h-[620px] grid-lines" />
        <Container className="relative grid items-center gap-14 pb-16 pt-10 lg:grid-cols-[1.05fr_1fr] lg:pb-24 lg:pt-14">
          <div>
            <Breadcrumbs items={crumbs} />
            <Eyebrow className="mt-8">{page.eyebrow}</Eyebrow>
            <h1 id="page-title" className="heading mt-4 text-h1 text-fg">
              {page.h1}
            </h1>
            <p className="mt-6 max-w-xl text-lede text-muted">{page.lede}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={inquiryHref} size="lg" arrow track="cta_start_project_landing">
                Start Your Project
              </ButtonLink>
              <ButtonLink href="/contact?intent=call" size="lg" variant="secondary" track="cta_discovery_call">
                Schedule a Discovery Call
              </ButtonLink>
            </div>
          </div>
          <div className="lg:pl-6">
            <Visual kind={page.visual} />
          </div>
        </Container>
      </section>

      {/* Direct answer */}
      <Section className="pb-0 pt-4 sm:pt-6" labelledBy="answer-title">
        <Container size="lg">
          <div className="relative overflow-hidden rounded-2xl border border-accent-line bg-surface p-7 sm:p-10">
            <div aria-hidden className="absolute inset-0 bg-glow opacity-60" />
            <div className="relative">
              <p className="eyebrow inline-flex items-center gap-2 text-accent-text">
                <Sparkles aria-hidden className="size-3.5" /> Quick answer
              </p>
              <h2 id="answer-title" className="heading mt-4 text-[clamp(1.5rem,1.25rem+0.8vw,2rem)] leading-tight text-fg">
                {page.answer.q}
              </h2>
              <p className="mt-4 max-w-3xl text-[1.05rem] leading-relaxed text-fg/85">{page.answer.a}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Outcomes */}
      <Section labelledBy="outcomes-title">
        <Container>
          <SectionHeading id="outcomes-title" eyebrow="Business outcomes" title="What this means for your business" />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
            {page.outcomes.map((o, i) => (
              <div key={o.title} className="bg-bg p-7">
                <span className="heading text-2xl text-accent-text">0{i + 1}</span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-fg">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{o.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Features */}
      <Section labelledBy="features-title" className="border-y border-line bg-bg-elevated">
        <Container>
          <SectionHeading
            id="features-title"
            eyebrow="What we build"
            title={`Inside our ${page.name.toLowerCase()} work`}
            description="Every engagement is scoped to your goals. These are the building blocks we combine most often."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.features.map((f) => (
              <li key={f.title} className="rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-line-strong">
                <span aria-hidden className="inline-flex size-8 items-center justify-center rounded-lg bg-accent-soft text-accent-text">
                  <Check className="size-4" />
                </span>
                <h3 className="mt-5 font-semibold text-fg">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Audience and technology */}
      <Section labelledBy="fit-title">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading id="fit-title" eyebrow="Who it is for" title="A good fit if you are one of these" />
              <ul className="mt-8 divide-y divide-line border-y border-line">
                {page.audience.map((a) => (
                  <li key={a} className="flex items-center gap-3 py-4 text-fg/90">
                    <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-accent-text" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading eyebrow="How we deliver" title="A focused four step plan" />
              <ol className="mt-8 space-y-5">
                {page.process.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-line font-mono text-xs text-accent-text">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-fg">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-10">
                <p className="eyebrow">Typical technology</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {page.tech.map((t) => (
                    <Tag key={t} className="text-[0.75rem]">
                      {t}
                    </Tag>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related projects */}
      {relatedProjects.length ? (
        <Section labelledBy="work-title" className="border-t border-line">
          <Container>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading id="work-title" eyebrow="Related work" title="Projects in this area" />
              <ButtonLink href="/projects" variant="secondary" arrow className="shrink-0 self-start sm:self-auto">
                All projects
              </ButtonLink>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {relatedProjects.slice(0, 2).map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {/* FAQ */}
      <Section labelledBy="faq-title" className="border-t border-line bg-bg-elevated">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.6fr]">
            <SectionHeading id="faq-title" eyebrow="FAQ" title={`${page.name} questions`} />
            <FaqList items={page.faqs} />
          </div>
        </Container>
      </Section>

      {/* Related services */}
      <Section labelledBy="related-title" className="py-16 sm:py-20">
        <Container>
          <h2 id="related-title" className="eyebrow">
            Related services
          </h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/${r.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent-line"
                >
                  <span className="eyebrow">{r.eyebrow}</span>
                  <span className="mt-3 text-lg font-semibold tracking-tight text-fg">{r.name}</span>
                  <span className="mt-2 line-clamp-2 flex-1 text-sm text-muted">{r.description}</span>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-fg">
                    Explore <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand
        title={`Let's talk about your ${page.name.toLowerCase()} project.`}
        body="Share a few details about your goals and timeline. You will get a clear reply with next steps, not a sales sequence."
        primaryHref={inquiryHref}
      />
    </>
  );
}
