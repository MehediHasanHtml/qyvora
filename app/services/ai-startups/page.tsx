import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Bot, Brain, Cpu, Layers, Sparkles, Workflow, Zap, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { OutcomesGrid } from "@/components/ui/outcomes-grid";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";
import { siteConfig } from "@/lib/site";
import { faqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "AI Startup Solutions — Frontend, Dashboards & Launch Sites",
  description:
    "Investor-grade AI startup websites, agent dashboards, RAG interfaces and streaming chat surfaces. Engineered in Next.js + Tailwind v4 for trial-to-paid conversion.",
  alternates: { canonical: `${siteConfig.url}/services/ai-startups` },
};

const offers = [
  {
    icon: Sparkles,
    title: "AI Startup Launch Site",
    body: "Investor-grade landing + product preview in 14 days. Premium positioning, animated UI mockups, schema-rich content for AEO visibility.",
    bullets: ["Hero → pricing in 5 sections", "AI-aware copywriting included", "ChatGPT / Perplexity citation-ready"],
  },
  {
    icon: Bot,
    title: "Agent Dashboards",
    body: "Operator surfaces for usage, evals, cost and latency. Built for product teams shipping agents at scale.",
    bullets: ["Real-time eval tables", "Cost / token / latency widgets", "Trace inspector UX patterns"],
  },
  {
    icon: Brain,
    title: "RAG & Streaming Chat UIs",
    body: "Production-grade chat with tool-use surfaces, citations, retry, guardrails and streaming-aware skeletons.",
    bullets: ["OpenAI + Anthropic SDK ready", "Citation drawers + source pinning", "Stop / regenerate / branch flows"],
  },
  {
    icon: Workflow,
    title: "Founder MVP Frontend",
    body: "Pre-launch landing + product shell in 2–3 weeks. Instrumented for PostHog/Plausible from day one.",
    bullets: ["Auth + billing surfaces", "Onboarding flow", "Empty-state design"],
  },
];

const stack = [
  { icon: Cpu, name: "Next.js 16", role: "App Router, RSC, edge runtime" },
  { icon: Layers, name: "Tailwind v4", role: "Tokenized design system" },
  { icon: ShieldCheck, name: "TypeScript", role: "Strict, end-to-end types" },
  { icon: Zap, name: "Vercel + Edge", role: "Global low-latency delivery" },
];

const aiFaqs = [
  { q: "How long does an AI startup launch site take?", a: "Two to three weeks for a complete investor-grade landing and product preview. Most founders go from kickoff to launch in 14–21 days." },
  { q: "Do you build the chat / agent UI itself?", a: "Yes. We build production-grade streaming chat with tool-use surfaces, citations, guardrails and retry — wired to OpenAI, Anthropic, or your own gateway." },
  { q: "Can you integrate with our existing API?", a: "Yes. We integrate with REST, GraphQL, tRPC, or streaming SSE endpoints. We also wire analytics (PostHog, Plausible, Vercel) and observability." },
  { q: "Is the design investor-grade?", a: "Visual craft on par with Linear, Vercel, Stripe and Framer. Founders consistently report investors taking pitches more seriously post-redesign." },
  ...faqs.slice(0, 4),
];

export default function AiStartupsPage() {
  return (
    <>
      <PageHeader
        eyebrow="AI Startup Solutions"
        title={
          <>
            Frontend that makes your{" "}
            <span className="text-gradient animate-aurora">AI feel inevitable</span>.
          </>
        }
        description="From pre-seed launch sites to operator dashboards — we design and ship the surfaces that turn a model into a product investors and customers can't ignore."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "AI Startups" }]}
        size="xl"
      >
        <Button asChild variant="gradient" size="lg">
          <Link href="/contact">Book an AI launch <ArrowUpRight className="size-4" /></Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/case-studies">See AI case studies</Link>
        </Button>
      </PageHeader>

      <Section className="!pt-4">
        <Container>
          <OutcomesGrid
            items={[
              { value: "3.1×", label: "Trial → paid lift" },
              { value: "14d", label: "Avg launch time" },
              { value: "98", label: "Lighthouse score" },
              { value: "+312%", label: "Mobile conversion" },
            ]}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="What we ship"
            title="Four AI-native frontend offers"
            description="Every offer is a fixed-scope, fixed-price engagement. No retainers, no sprawl."
          />
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
            {offers.map((o) => {
              const Icon = o.icon;
              return (
                <article key={o.title} className="group rounded-3xl border border-border bg-surface p-7 transition-all hover:border-border-strong hover:shadow-elev-md">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-aurora text-white shadow-elev-sm">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-display text-xl font-semibold tracking-tight">{o.title}</h3>
                  </div>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{o.body}</p>
                  <ul className="mt-5 space-y-2 text-sm">
                    {o.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface/40 border-y border-border">
        <Container>
          <SectionHeader
            eyebrow="Engineering stack"
            title="The opinionated AI frontend stack"
            description="Production-grade defaults so you spend zero cycles re-litigating tech choices."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stack.map((s) => (
              <div key={s.name} className="rounded-2xl border border-border bg-surface p-5">
                <s.icon className="size-5 text-primary" />
                <div className="mt-3 font-display font-semibold">{s.name}</div>
                <div className="mt-0.5 text-sm text-muted-foreground">{s.role}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <FAQ
        items={aiFaqs}
        eyebrow="AI startup FAQ"
        title="AI startup founders ask us…"
        description="Real questions from YC, Antler and solo AI founders we've worked with."
      />

      <FinalCTA />
    </>
  );
}
