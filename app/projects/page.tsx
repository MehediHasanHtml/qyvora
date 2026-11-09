import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Container, Section } from "@/components/ui/primitives";
import { ProjectCard } from "@/components/project-card";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { engagementLabel, engagementNote, projects, type Engagement } from "@/lib/content/projects";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, webPageSchema, type Crumb } from "@/lib/schema";

const title = "Projects and Case Studies";
const description =
  "Real websites and web applications built by Qyvora Studio: dental clinic, law office and real estate websites, SaaS dashboards, ecommerce and more.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/projects" });

const crumbs: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
];

export default function ProjectsPage() {
  const used = Array.from(new Set(projects.map((p) => p.engagement))) as Engagement[];
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Projects"
        title="Real projects. Thoughtful engineering."
        lede="Every project below is a real build with screenshots and, where possible, a live link you can open. We label each one honestly and never publish results we cannot verify."
        aside={
          <div className="rounded-2xl border border-line bg-surface/70 p-6 text-sm">
            <p className="eyebrow">How projects are labeled</p>
            <dl className="mt-4 space-y-4">
              {used.map((e) => (
                <div key={e}>
                  <dt className="font-medium text-fg">{engagementLabel[e]}</dt>
                  <dd className="mt-1 text-muted">{engagementNote[e]}</dd>
                </div>
              ))}
            </dl>
          </div>
        }
      />
      <Section labelledBy="projects-list" className="pt-16">
        <Container>
          <h2 id="projects-list" className="sr-only">
            All projects
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} priority={i < 2} />
            ))}
          </div>
        </Container>
      </Section>
      <CtaBand title="Want your project to be the next one here?" />
      <JsonLd
        data={graph(webPageSchema({ path: "/projects", name: title, description, type: "CollectionPage" }), breadcrumbSchema(crumbs), {
          "@type": "ItemList",
          "@id": `${absoluteUrl("/projects")}#list`,
          itemListElement: projects.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: absoluteUrl(`/projects/${p.slug}`),
            name: p.name,
          })),
        })}
      />
    </>
  );
}
