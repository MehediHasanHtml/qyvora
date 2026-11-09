import { Bot, Globe2, Layers, Rocket } from "lucide-react";
import { ButtonLink, Container } from "@/components/ui/primitives";
import { HeroVisual } from "@/components/visuals/hero-visual";

const trust = [
  { Icon: Bot, label: "AI Powered Development" },
  { Icon: Rocket, label: "Startup Focused Solutions" },
  { Icon: Layers, label: "Scalable Digital Products" },
  { Icon: Globe2, label: "Worldwide Collaboration" },
];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative -mt-16 overflow-hidden pt-16">
      <div aria-hidden className="absolute inset-x-0 top-0 h-[720px] bg-glow fade-b" />
      <div aria-hidden className="absolute inset-x-0 top-0 h-[720px] grid-lines" />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-[360px] size-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-aurora opacity-15 blur-3xl light:opacity-10" />
      <Container className="relative grid items-center gap-14 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.02fr_1fr] lg:gap-10 lg:pb-28 lg:pt-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1 text-xs text-muted">
            <span className="size-1.5 animate-pulse-dot rounded-full bg-accent-text" />
            Your AI Powered Digital Product and Web Development Partner
          </p>
          <h1 id="hero-title" className="heading mt-7 text-display text-fg">
            Building intelligent digital experiences for the{" "}
            <span className="text-gradient">next generation</span> of business.
          </h1>
          <p className="mt-7 max-w-xl text-lede text-muted">
            We design and develop AI powered websites, intelligent applications, scalable SaaS platforms, and premium
            digital experiences for startups and ambitious businesses worldwide.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" size="lg" arrow track="cta_start_project_hero">
              Start Your Project
            </ButtonLink>
            <ButtonLink href="/projects" size="lg" variant="secondary">
              Explore Our Work
            </ButtonLink>
          </div>
          <ul className="mt-12 grid max-w-xl grid-cols-2 gap-x-6 gap-y-3 border-t border-line pt-6 sm:gap-x-8">
            {trust.map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-sm text-fg/85">
                <Icon aria-hidden className="size-4 shrink-0 text-accent-text" />
                {label}
              </li>
            ))}
          </ul>
        </div>
        <HeroVisual />
      </Container>
    </section>
  );
}
