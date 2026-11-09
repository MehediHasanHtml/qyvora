import type { Metadata } from "next";
import { Bot, Code2, LayoutTemplate, Layers } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ButtonLink, Container, IconTile, Section, SectionHeading } from "@/components/ui/primitives";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site";
import { projects } from "@/lib/content/projects";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, ids, webPageSchema, type Crumb } from "@/lib/schema";

const title = "About Qyvora Studio, an AI Development Agency";
const description =
  "Qyvora Studio is an AI development and digital product agency building websites, web applications and SaaS platforms for businesses worldwide.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/about" });

const crumbs: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

const capabilities = [
  { Icon: Bot, title: "AI development", body: "AI powered websites, chatbots, agents and automations connected to your real data and tools." },
  { Icon: LayoutTemplate, title: "Website development", body: "Fast, search friendly business, startup and landing page websites with original design." },
  { Icon: Layers, title: "SaaS and applications", body: "SaaS platforms, MVPs, dashboards and customer portals built on a clean, typed codebase." },
  { Icon: Code2, title: "Full stack engineering", body: "Next.js, React, Vue and Nuxt interfaces on Node.js or PHP and Laravel backends, with PostgreSQL or MySQL databases." },
];

const timeline = [
  { year: "2018", title: "First production websites", body: "Our team started building websites and interfaces for businesses with HTML, CSS and JavaScript." },
  { year: "2024", title: "Web applications", body: "Moved into API driven web applications with Vue 3, Nuxt and REST APIs." },
  { year: "2025", title: "Dashboards and marketplaces", body: "Delivered typed Nuxt dashboards and a multi vendor marketplace frontend." },
  { year: "2026", title: "Qyvora Studio", body: "Launched Qyvora Studio to offer AI development, websites and SaaS builds to businesses worldwide, including clinic, law office and real estate websites across Europe." },
];

const principles = [
  { title: "Honest by default", body: "We publish only real projects and verifiable facts. If a result is not measured, we do not claim it." },
  { title: "Business first", body: "Every page, feature and integration should move a business goal. If it does not, we suggest leaving it out." },
  { title: "Craft that lasts", body: "Clean, typed code and consistent design systems, so your product is easy to extend long after launch." },
  { title: "AI with judgement", body: "We use AI where it is reliable and useful, add guardrails where it is not, and keep a person in charge of quality." },
];

const collaboration = [
  { title: "Language", body: "All communication is in English, written and spoken." },
  { title: "Time zones", body: `Based in ${siteConfig.base.city} (${siteConfig.base.timezone}) with overlapping hours for the UK, Europe, the UAE and Australia, and evening slots for North America.` },
  { title: "Updates", body: "Weekly progress updates with working links you can click through, plus calls when decisions are needed." },
  { title: "Ownership", body: "Code, hosting, domains and API accounts are set up under your ownership from the start." },
];

export default function AboutPage() {
  const liveProjects = projects.filter((p) => p.liveUrl).length;
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="About Qyvora"
        title="An AI development agency for ambitious digital products."
        lede="Qyvora Studio designs and builds AI powered websites, web applications and SaaS platforms. You work directly with the people designing and building your product, without layers of account management in between."
      >
        <ButtonLink href="/contact" size="lg" arrow track="cta_start_project">
          Start a Project
        </ButtonLink>
        <ButtonLink href="/projects" size="lg" variant="secondary">
          See Our Work
        </ButtonLink>
      </PageHero>

      <Section labelledBy="studio-title">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:items-start">
            <div>
              <SectionHeading id="studio-title" eyebrow="Who we are" title="A digital product studio built around engineering." />
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-fg/85">
                <p>
                  Qyvora Studio is a software development agency based in {siteConfig.base.city}, working with startups and
                  established businesses around the world. We plan, design and engineer websites, web applications and SaaS
                  products, and add AI where it saves time or creates value.
                </p>
                <p>
                  Our work spans dental clinic, law office and real estate agency websites, SaaS dashboards, ecommerce
                  marketplaces and editorial products. Clients on Fiverr rate our work {siteConfig.fiverrRating} out of 5,
                  with repeat clients highlighting fast delivery and clear communication.
                </p>
              </div>
              <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
                {[
                  ["Experience", `${siteConfig.team.experienceYears}+ years in production web development`],
                  ["Live projects", `${liveProjects} you can open and inspect today`],
                  ["Based in", `${siteConfig.base.city}, ${siteConfig.base.country}`],
                  ["Core stack", "Next.js, React, TypeScript, Vue, Nuxt, Tailwind CSS, Node.js, PHP, Laravel, MySQL"],
                ].map(([k, v]) => (
                  <div key={k} className="bg-surface p-5">
                    <dt className="eyebrow">{k}</dt>
                    <dd className="mt-2 text-sm text-fg">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {capabilities.map(({ Icon, title: t, body }) => (
                <li key={t} className="card p-6">
                  <IconTile>
                    <Icon />
                  </IconTile>
                  <h3 className="mt-5 font-semibold text-fg">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section labelledBy="journey-title" className="border-y border-line bg-bg-elevated">
        <Container size="lg">
          <SectionHeading id="journey-title" eyebrow="Our story" title="From first websites to an AI development agency" />
          <ol className="mt-12 border-l border-line">
            {timeline.map((t) => (
              <li key={t.year} className="relative pb-10 pl-8 last:pb-0">
                <span aria-hidden className="absolute -left-[5px] top-2 size-2.5 rounded-full bg-accent-text" />
                <p className="font-mono text-sm text-accent-text">{t.year}</p>
                <h3 className="mt-1 text-lg font-semibold text-fg">{t.title}</h3>
                <p className="mt-1 text-muted">{t.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section labelledBy="principles-title">
        <Container>
          <SectionHeading id="principles-title" eyebrow="How we work" title="Principles behind every project" />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <li key={p.title} className="rounded-2xl border border-line bg-surface p-6">
                <h3 className="font-semibold text-fg">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section labelledBy="collab-title" className="border-t border-line">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr]">
            <SectionHeading
              id="collab-title"
              eyebrow="International collaboration"
              title="Working together from anywhere"
              description="Qyvora works remotely with clients worldwide. We do not have offices outside Bangladesh, and we do not pretend to. What we do have is a reliable way of working across borders."
            />
            <dl className="divide-y divide-line border-y border-line">
              {collaboration.map((c) => (
                <div key={c.title} className="grid gap-2 py-6 sm:grid-cols-[160px_1fr]">
                  <dt className="font-medium text-fg">{c.title}</dt>
                  <dd className="text-muted">{c.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </Section>

      <CtaBand />
      <JsonLd
        data={graph(webPageSchema({ path: "/about", name: title, description, type: "AboutPage", about: ids.organization }), breadcrumbSchema(crumbs))}
      />
    </>
  );
}
