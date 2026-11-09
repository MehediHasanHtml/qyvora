import Link from "next/link";
import { ArrowRight, Bot, Code2, LayoutTemplate, Quote } from "lucide-react";
import { ButtonLink, Container, Eyebrow, IconTile, Section, SectionHeading, Tag, TextLink } from "@/components/ui/primitives";
import { FaqList } from "@/components/ui/faq-list";
import { ProjectCard } from "@/components/project-card";
import { Visual } from "@/components/visuals/mockups";
import { serviceDivisions } from "@/lib/content/pages";
import { projects } from "@/lib/content/projects";
import { homeFaqs, processSteps, reasons, testimonials } from "@/lib/content/home";
import { siteConfig } from "@/lib/site";
import type { VisualKind } from "@/lib/content/types";

/* ── Trusted expertise ─────────────────────────────────────── */

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Vue 3",
  "Nuxt",
  "Node.js",
  "PostgreSQL",
  "OpenAI API",
  "Claude API",
  "Gemini API",
  "Vercel",
];

export function Expertise() {
  const liveProjects = projects.filter((p) => p.liveUrl).length;
  const industriesServed = Array.from(new Set(projects.map((p) => p.industry)));
  const facts = [
    { value: `${siteConfig.team.experienceYears}+`, label: "Years of production web development experience" },
    { value: "3", label: "Service divisions: AI development, websites, and SaaS products" },
    { value: siteConfig.fiverrRating, label: "Average rating from verified Fiverr clients" },
    { value: String(liveProjects), label: "Live projects you can open and inspect today" },
  ];
  return (
    <Section labelledBy="expertise-title" className="border-y border-line bg-bg-elevated py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_2fr] lg:items-end">
          <div>
            <Eyebrow>Trusted expertise</Eyebrow>
            <h2 id="expertise-title" className="heading mt-4 text-[1.75rem] leading-[1.1] text-fg">
              Experience you can verify, not claims you have to trust.
            </h2>
          </div>
          <dl className="grid grid-cols-2 divide-line sm:grid-cols-4 sm:divide-x">
            {facts.map((f) => (
              <div key={f.label} className="py-3 sm:px-6 first:sm:pl-0">
                <dt className="sr-only">{f.label}</dt>
                <dd>
                  <span className="heading block text-4xl text-fg">{f.value}</span>
                  <span className="mt-2 block text-sm leading-snug text-muted">{f.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-12 grid gap-8 border-t border-line pt-8 lg:grid-cols-[0.8fr_2fr]">
          <p className="eyebrow pt-1">Technologies we work with</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm text-fg/75">
            {technologies.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p className="eyebrow pt-1">Industries in our portfolio</p>
          <ul className="flex flex-wrap gap-2">
            {industriesServed.map((i) => (
              <li key={i}>
                <Tag className="text-[0.75rem]">{i}</Tag>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

/* ── Services ──────────────────────────────────────────────── */

const divisionIcons = { ai: Bot, web: LayoutTemplate, product: Code2 } as const;

export function Services() {
  return (
    <Section id="services" labelledBy="services-title">
      <Container>
        <SectionHeading
          id="services-title"
          eyebrow="Services"
          title="Everything You Need to Build and Scale Your Digital Business."
          description="Three connected disciplines under one roof, so strategy, design, engineering and AI are planned together instead of handed between vendors."
        />
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {serviceDivisions.map((d) => {
            const Icon = divisionIcons[d.id];
            return (
              <article
                key={d.id}
                className="group relative flex flex-col rounded-2xl border border-line bg-surface p-7 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-accent-line"
              >
                <div aria-hidden className="absolute inset-x-6 top-0 h-px hairline-top opacity-0 transition-opacity group-hover:opacity-100" />
                <IconTile>
                  <Icon />
                </IconTile>
                <p className="eyebrow mt-6">{d.label}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-fg">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{d.description}</p>
                <p className="mt-5 rounded-lg border border-line bg-bg/40 p-3 text-sm text-fg/85">
                  <span className="mb-1 block font-mono text-[0.68rem] uppercase tracking-wider text-accent-text">Business value</span>
                  {d.value}
                </p>
                <ul className="mt-6 space-y-2 border-t border-line pt-5">
                  {d.pages.slice(0, 5).map((p) => (
                    <li key={p.slug}>
                      <Link href={`/${p.slug}`} className="flex items-center justify-between text-sm text-fg/80 transition-colors hover:text-fg">
                        {p.name}
                        <ArrowRight aria-hidden className="size-3.5 text-muted" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {d.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                <TextLink href={d.href} className="mt-7">
                  Explore {d.label}
                </TextLink>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

/* ── Industries ────────────────────────────────────────────── */

const industryTiles: { name: string; href: string; message: string; visual: VisualKind; wide?: boolean }[] = [
  {
    name: "Automotive",
    href: "/car-dealership-website-development",
    message: "Inventory driven dealer websites with fast search, vehicle pages and test drive booking.",
    visual: "inventory",
    wide: true,
  },
  {
    name: "Real Estate",
    href: "/real-estate-website-development",
    message: "Listing platforms with instant filters and inquiries routed to the right agent.",
    visual: "listings",
  },
  {
    name: "Healthcare",
    href: "/healthcare-website-development",
    message: "Calm, accessible clinic and doctor websites with online appointments.",
    visual: "booking",
  },
  {
    name: "Legal",
    href: "/law-firm-website-development",
    message: "Authoritative firm websites with practice areas and consultation intake.",
    visual: "legal",
  },
  {
    name: "Startups and SaaS",
    href: "/saas-development",
    message: "Launch sites, MVPs and subscription platforms built to grow.",
    visual: "saas",
  },
  {
    name: "Professional Services",
    href: "/business-website-development",
    message: "Premium websites for consultancies, finance, construction and agencies.",
    visual: "business",
    wide: true,
  },
];

export function Industries() {
  return (
    <Section labelledBy="industries-title" className="border-t border-line bg-bg-elevated">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="industries-title"
            eyebrow="Industry solutions"
            title="Digital Solutions Built Around Your Industry."
            description="Each industry buys differently. We design around the decisions your customers actually make, from choosing a car to booking a consultation."
          />
          <TextLink href="/industries" className="shrink-0">
            All industries
          </TextLink>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industryTiles.map((t) => (
            <article
              key={t.name}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-accent-line ${
                t.wide ? "lg:col-span-2" : ""
              }`}
            >
              <div className="relative h-56 overflow-hidden border-b border-line bg-bg/40 px-6 pt-6">
                <div className="mx-auto max-w-md origin-top scale-[0.92] transition-transform duration-500 group-hover:scale-95">
                  <Visual kind={t.visual} />
                </div>
                <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold tracking-tight text-fg">
                  <Link href={t.href} className="after:absolute after:inset-0">
                    {t.name}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t.message}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-fg">
                  View solution <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ── AI development ────────────────────────────────────────── */

const aiCapabilities = [
  { name: "AI powered websites", body: "Assistants, smart search and lead qualification on your site.", href: "/ai-website-development" },
  { name: "AI web applications", body: "Tools that read documents, draft replies and run workflows.", href: "/ai-web-application-development" },
  { name: "AI SaaS products", body: "Subscription products with metering, billing and an AI core.", href: "/ai-saas-development" },
  { name: "AI assistants", body: "Chat grounded in your knowledge, with sources and handoff.", href: "/ai-chatbot-development" },
  { name: "AI agents", body: "Agents that book, look up and update records with approval.", href: "/ai-chatbot-development" },
  { name: "Intelligent automation", body: "Email triage, data extraction and system sync.", href: "/ai-integration-automation" },
  { name: "AI dashboards", body: "Summaries, anomaly alerts and natural language reporting.", href: "/ai-web-application-development" },
];

const aiBenefits = [
  {
    title: "Better customer experiences",
    body: "Customers get accurate answers and next steps in seconds, at any hour, in their own words.",
  },
  {
    title: "Less repetitive work",
    body: "Reading, sorting, copying and drafting move to software, while people approve the result.",
  },
  {
    title: "New business opportunities",
    body: "Your expertise and data become products, premium features or services you could not offer before.",
  },
];

export function AiDevelopment() {
  return (
    <Section labelledBy="ai-title" className="overflow-hidden">
      <div aria-hidden className="absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/3 rounded-full bg-[radial-gradient(closest-side,rgb(124_58_237/0.16),transparent)]" />
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              id="ai-title"
              eyebrow="AI development"
              title="Turn Your Ideas Into Intelligent Digital Products."
              description="AI is useful when it does a real job reliably. We start with the job, design an interface people trust, and add the guardrails, testing and cost controls that production needs."
            />
            <div className="mt-10 space-y-6">
              {aiBenefits.map((b, i) => (
                <div key={b.title} className="flex gap-4">
                  <span className="heading text-2xl text-accent-text">0{i + 1}</span>
                  <div>
                    <h3 className="font-semibold text-fg">{b.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{b.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 max-w-md">
              <Visual kind="agent" />
            </div>
          </div>
          <div>
            <ul className="divide-y divide-line border-y border-line">
              {aiCapabilities.map((c) => (
                <li key={c.name}>
                  <Link href={c.href} className="group flex items-center gap-5 py-6 transition-colors">
                    <span className="flex-1">
                      <span className="heading block text-[1.5rem] leading-tight text-fg transition-colors group-hover:text-accent-text">
                        {c.name}
                      </span>
                      <span className="mt-1 block text-sm text-muted">{c.body}</span>
                    </span>
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-colors group-hover:border-accent-line group-hover:text-accent-text">
                      <ArrowRight aria-hidden className="size-4" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl border border-line bg-surface p-6">
              <p className="text-sm font-medium text-fg">Models we build with</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                OpenAI, Anthropic Claude and Google Gemini, chosen per project for quality, speed, cost and data policy. You own
                the API keys and the data, and the provider can be changed later.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ── Featured projects ─────────────────────────────────────── */

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);
  return (
    <Section labelledBy="projects-title" className="border-t border-line">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="projects-title"
            eyebrow="Featured projects"
            title="Real Projects. Thoughtful Engineering. Exceptional Experiences."
            description="Every project here is a real build you can open. Each one is labeled clearly, and we never publish results we cannot verify."
          />
          <ButtonLink href="/projects" variant="secondary" arrow className="shrink-0 self-start lg:self-auto">
            View all projects
          </ButtonLink>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ── Why Qyvora ────────────────────────────────────────────── */

export function WhyQyvora() {
  return (
    <Section labelledBy="why-title" className="border-t border-line bg-bg-elevated">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.6fr]">
          <div>
            <SectionHeading
              id="why-title"
              eyebrow="Why Qyvora"
              title="A Technology Partner That Thinks Beyond Development."
            />
            <figure className="mt-10 overflow-hidden rounded-2xl border border-line bg-surface">
              <figcaption className="p-5">
                <span
                  aria-hidden
                  className="heading mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-aurora text-lg text-white"
                >
                  Q
                </span>
                <p className="font-medium text-fg">{siteConfig.team.name}</p>
                <p className="text-sm text-muted">Design and engineering</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  You work directly with the people who design and build your product, from the first call to launch.
                </p>
                <TextLink href="/about" className="mt-4">
                  About Qyvora
                </TextLink>
              </figcaption>
            </figure>
          </div>
          <ol className="grid gap-x-10 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <li key={r.title} className="border-t border-line py-7">
                <span className="font-mono text-xs text-accent-text">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-fg">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{r.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}

/* ── Process ───────────────────────────────────────────────── */

export function Process() {
  return (
    <Section labelledBy="process-title">
      <Container>
        <SectionHeading
          id="process-title"
          eyebrow="Development process"
          title="Eight clear steps from first conversation to launch."
          description="You always know what is happening, what comes next and what you will receive at the end of each step."
          align="center"
        />
        <ol className="relative mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, i) => (
            <li key={s.title} className="flex flex-col bg-bg p-6 sm:p-7">
              <span className="heading text-4xl text-accent-text/90">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 font-semibold text-fg">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.body}</p>
              <p className="mt-6 inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-wider text-fg/70">
                <span aria-hidden className="size-1.5 rounded-full bg-accent-text" />
                {s.output}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

/* ── Testimonials ──────────────────────────────────────────── */

export function Testimonials() {
  const [lead, ...rest] = testimonials;
  return (
    <Section labelledBy="testimonials-title" className="border-t border-line bg-bg-elevated">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <SectionHeading
              id="testimonials-title"
              eyebrow="Verified client feedback"
              title="What clients say about working with us."
              description="These reviews were left by clients on Fiverr for work we delivered. They are shown with the reviewers' public usernames."
            />
            <figure className="mt-10">
              <Quote aria-hidden className="size-8 text-accent-text" />
              <blockquote className="heading mt-4 text-[1.5rem] leading-[1.2] text-fg">{lead.quote}</blockquote>
              <figcaption className="mt-5 text-sm text-muted">
                {lead.author} <span>· Fiverr review</span>
              </figcaption>
            </figure>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {rest.map((t) => (
              <figure key={t.author} className="flex flex-col rounded-2xl border border-line bg-surface p-6">
                <blockquote className="flex-1 leading-relaxed text-fg/90">{t.quote}</blockquote>
                <figcaption className="mt-5 text-sm text-muted">
                  {t.author} <span>· Fiverr review</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ── FAQ ───────────────────────────────────────────────────── */

export function HomeFaq() {
  return (
    <Section labelledBy="faq-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.6fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading id="faq-title" eyebrow="FAQ" title="Questions founders and business owners ask us." />
            <p className="mt-6 text-muted">
              Cannot find your answer?{" "}
              <Link href="/contact" className="text-fg underline underline-offset-4 hover:text-accent-text">
                Ask us directly
              </Link>{" "}
              and we will reply {siteConfig.contact.responseTime}.
            </p>
          </div>
          <FaqList items={homeFaqs} />
        </div>
      </Container>
    </Section>
  );
}
