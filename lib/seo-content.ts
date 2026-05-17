import type { SeoLandingSlug } from "@/lib/site";

export type SeoLandingContent = {
  hero: {
    eyebrow: string;
    h1: string;
    headlineHighlight: string;
    sub: string;
    primaryCta: string;
    secondaryCta?: string;
  };
  outcomes: { value: string; label: string }[];
  pillars: { title: string; body: string }[];
  process: { step: string; title: string; body: string }[];
  whoFor: string[];
  faqs: { q: string; a: string }[];
  /** Internal links to weave topical authority */
  related: { label: string; href: string }[];
};

export const seoContent: Record<SeoLandingSlug, SeoLandingContent> = {
  "ai-startup-website-development": {
    hero: {
      eyebrow: "AI Startup Website Development",
      h1: "AI Startup Website Development — Investor-Grade in 14 Days",
      headlineHighlight: "investor-grade in 14 days",
      sub:
        "Premium AI startup website development for YC, Antler and solo AI founders. Investor-grade landing sites, agent dashboards, RAG chat surfaces and pricing pages engineered for trial-to-paid conversion on Next.js 16 + Tailwind v4.",
      primaryCta: "Book an AI launch sprint",
      secondaryCta: "See AI case studies",
    },
    outcomes: [
      { value: "14d", label: "Time to launch" },
      { value: "3.1×", label: "Trial → paid lift" },
      { value: "98", label: "Lighthouse score" },
      { value: "+312%", label: "Mobile CVR" },
    ],
    pillars: [
      {
        title: "Investor-grade landing surface",
        body: "Hero, social proof, animated product mockup, pricing and FAQ — engineered around investor diligence checklists and buyer KPIs. Schema-rich for AEO from day one.",
      },
      {
        title: "Agent dashboards & RAG UI",
        body: "Streaming chat, tool-use surfaces, citation drawers, eval tables and cost/latency widgets — production patterns built on the OpenAI and Anthropic SDKs.",
      },
      {
        title: "Conversion-first pricing pages",
        body: "Transparent token-tier pricing with annual toggle, FAQ and trial-first messaging. Most AI startups see 2-4× lift just from rebuilding pricing.",
      },
      {
        title: "AEO + SEO architecture",
        body: "Service, FAQ, Organization, Article schema. Entity-rich copy. Conversational headings. Cited inside ChatGPT, Perplexity, Claude and Gemini within 30-60 days.",
      },
    ],
    process: [
      { step: "01", title: "Discovery", body: "Buyer KPIs, positioning, scope alignment. Done async in 48 hours." },
      { step: "02", title: "Wireframe", body: "Conversion-architected layout validated against measurable outcomes." },
      { step: "03", title: "UI + motion", body: "Premium visual language, animated UI mockups, motion-aware components." },
      { step: "04", title: "Build", body: "Next.js 16, Tailwind v4, RSC-first. Edge deploy on Vercel." },
      { step: "05", title: "Launch", body: "Analytics, schema, AEO QA. Live in 14 days." },
    ],
    whoFor: [
      "Pre-seed and seed-stage AI founders preparing to fundraise",
      "YC, Antler and accelerator-backed teams shipping a launch site",
      "AI startups with a working product but a generic Bootstrap template",
      "Series A AI teams rebuilding the entire marketing surface",
    ],
    faqs: [
      { q: "How fast can you build an AI startup website?", a: "Two weeks for an investor-grade landing site. Three weeks if we include a streaming chat or agent dashboard preview. Most AI founders go from kickoff to launch in 14–21 days." },
      { q: "Do you only build for venture-backed startups?", a: "No. We work with bootstrapped, accelerator-backed and venture-backed AI founders. Pricing scales with scope, not your funding round." },
      { q: "What's included in AI startup website development?", a: "Conversion-architected landing site, animated UI mockups, AI-aware copywriting, schema markup for AEO, Lighthouse 95+ guarantee, Vercel deployment. Optional: streaming chat or agent dashboard preview." },
      { q: "Will the site work for technical buyers?", a: "Yes. We build for technical-product buyers — clear architecture diagrams, transparent pricing, agent eval surfaces and developer-grade documentation patterns." },
      { q: "Do you build the product UI too?", a: "Yes. AI dashboard interfaces, streaming chat, agent operator surfaces, RAG UIs — all built on the same Tailwind v4 design system as your marketing site." },
      { q: "What stack do you use?", a: "Next.js 16 (App Router, RSC), React 19, TypeScript, Tailwind CSS v4, Framer Motion, deployed on Vercel edge. CMS-agnostic — works with Sanity, Contentful, or none at all." },
    ],
    related: [
      { label: "AI Startup Solutions", href: "/services/ai-startups" },
      { label: "Landing Page Redesign", href: "/landing-page-redesign" },
      { label: "Next.js Development Agency", href: "/nextjs-development-agency" },
    ],
  },

  "landing-page-redesign": {
    hero: {
      eyebrow: "Landing Page Redesign Agency",
      h1: "Landing Page Redesign Agency — Conversion-Architected",
      headlineHighlight: "conversion-architected",
      sub:
        "Premium landing page redesign agency for SaaS, AI startups and growth teams. Hero-to-pricing rebuilds engineered for measurable conversion lift on Next.js + Tailwind v4. Average +148% CVR.",
      primaryCta: "Get a landing redesign quote",
      secondaryCta: "See conversion wins",
    },
    outcomes: [
      { value: "+148%", label: "Avg conversion lift" },
      { value: "2 wks", label: "Typical timeline" },
      { value: "98", label: "Lighthouse score" },
      { value: "$84K", label: "MRR added (Lumen)" },
    ],
    pillars: [
      { title: "Conversion-first architecture", body: "Hero, social proof, problem/solution, pricing, FAQ, CTA — sequenced for the buyer's psychology, not the marketing team's org chart." },
      { title: "A/B-ready components", body: "Every major block ships as variants you can A/B test the day after launch. PostHog, Vercel Analytics or GrowthBook ready." },
      { title: "Conversion copy included", body: "Senior copywriting for headlines, sub-headlines, value props, CTAs and FAQ. No need to bring a separate copywriter." },
      { title: "Premium motion language", body: "Framer Motion with restraint — micro-interactions and entrance animations that feel premium without being distracting." },
    ],
    process: [
      { step: "01", title: "Audit", body: "Heatmaps, analytics, competitor teardown. We diagnose what the current page is actually doing wrong." },
      { step: "02", title: "Strategy", body: "Conversion architecture, positioning rewrite, hero hypothesis." },
      { step: "03", title: "Design", body: "Premium visual language with motion, social proof and pricing patterns." },
      { step: "04", title: "Build", body: "Next.js + Tailwind v4 with A/B-ready variants." },
      { step: "05", title: "Launch + iterate", body: "Live in 14 days. Then we iterate on the data." },
    ],
    whoFor: [
      "SaaS founders with a flat conversion curve",
      "AI startups with a generic landing page",
      "Growth teams running paid traffic to a low-converting page",
      "Series A/B companies repositioning around new buyer segments",
    ],
    faqs: [
      { q: "How long does a landing page redesign take?", a: "Two weeks for a complete hero-to-pricing rebuild on Next.js + Tailwind v4. Three weeks if you need new positioning and copy from scratch." },
      { q: "What conversion lift can I expect?", a: "Our average is +148% over the prior page in the first 60 days. Lumen SaaS saw +$84K MRR. Neura AI went from 4.1% to 12.7% trial-to-paid. Results vary by category and traffic quality." },
      { q: "Do you write the copy?", a: "Yes. Every landing redesign includes senior conversion copywriting: headlines, sub-headlines, value props, CTAs, social proof and FAQ. You don't need a separate copywriter." },
      { q: "Can you A/B test the new design?", a: "Yes. Every block ships as A/B-ready variants. We can wire PostHog, Vercel Analytics, GrowthBook or your existing experimentation platform." },
      { q: "What if my current site is on Webflow / WordPress?", a: "We migrate. Most redesigns ship on Next.js + Vercel for performance, but we can preserve your CMS workflow or rebuild on Sanity/Contentful as needed." },
      { q: "Do you redesign full sites or just landing pages?", a: "Both. A landing-only engagement is ~2 weeks. Full marketing sites with blog, pricing, customers, and product pages run 4-6 weeks." },
    ],
    related: [
      { label: "AI Startup Solutions", href: "/services/ai-startups" },
      { label: "Conversion-Focused UI/UX", href: "/services" },
      { label: "Frontend Optimization Services", href: "/frontend-optimization-services" },
    ],
  },

  "real-estate-website-development": {
    hero: {
      eyebrow: "Real Estate Website Development",
      h1: "Real Estate Website Development — Luxury, IDX-Ready, Lead-Gen Tuned",
      headlineHighlight: "luxury, IDX-ready, lead-gen tuned",
      sub:
        "Premium real estate website development for brokerages, agents and luxury property developers in Dubai, Miami, London, Toronto and Sydney. IDX/MLS-ready, map search, multi-step lead capture, schema-rich listings.",
      primaryCta: "Get a real-estate quote",
      secondaryCta: "See real estate case studies",
    },
    outcomes: [
      { value: "4.2×", label: "Lead volume" },
      { value: "#1", label: "In 3 Dubai neighborhoods" },
      { value: "8", label: "Premium markets" },
      { value: "98", label: "Lighthouse score" },
    ],
    pillars: [
      { title: "Luxury listing UX", body: "Editorial-grade listing pages with parallax photo galleries, cinematic typography and schema markup for Google rich snippets." },
      { title: "IDX / MLS integration", body: "RealtyFeed, iHomefinder, Showcase IDX or custom RETS feeds wired into our premium UI. Listings, search and lead capture in one design system." },
      { title: "Map & search UX", body: "Mapbox-powered search with polygon drawing, neighborhood layers, cluster + heatmap views, saved searches and email alerts." },
      { title: "Lead-gen engine", body: "Multi-step inquiry forms, instant property valuations, Cal.com / Calendly booking, CRM routing (Salesforce, HubSpot, Follow Up Boss, kvCORE)." },
    ],
    process: [
      { step: "01", title: "Brand discovery", body: "Brokerage positioning, target neighborhoods, lead-gen goals." },
      { step: "02", title: "IDX/MLS scope", body: "Feed audit, listing schema design, search UX wireframes." },
      { step: "03", title: "Premium UI", body: "Listing detail, agent profile, neighborhood hub pages." },
      { step: "04", title: "Build + integrate", body: "Next.js, Mapbox, IDX feed, CRM routing." },
      { step: "05", title: "Launch + local SEO", body: "LocalBusiness schema, neighborhood pages, review aggregation." },
    ],
    whoFor: [
      "Luxury brokerages with $5M+ listings needing a premium online presence",
      "Top-producing agents building a personal brand",
      "Property developers launching new buildings or communities",
      "Multi-locale brokerages serving Dubai, Miami, London, Toronto, Sydney",
    ],
    faqs: [
      { q: "Do you build IDX/MLS-powered real estate websites?", a: "Yes. We integrate IDX/MLS feeds (RealtyFeed, iHomefinder, Showcase IDX, custom RETS) with our premium UI. Listings, agent profiles, search and lead capture all in one Tailwind v4 design system." },
      { q: "How long does a real estate website take to build?", a: "Premium agent or brokerage sites ship in 3–5 weeks. Luxury single-listing pages in 7–10 days. Multi-locale portals (EN/AR) in 6-8 weeks." },
      { q: "Can you build a Dubai real estate website?", a: "Yes — Dubai is one of our most-served markets. We work with brokerages across Palm Jumeirah, Downtown, Dubai Marina, Emirates Hills and Business Bay on multi-language (EN/AR), RTL-aware listing portals." },
      { q: "Will my real estate site rank locally?", a: "Yes. LocalBusiness schema, neighborhood hub pages, review aggregation and topical clusters around your service area are built in. Atlas Realty's site ranks #1 in three Dubai neighborhoods." },
      { q: "What about lead capture and CRM?", a: "Multi-step inquiry forms, instant property valuations, Cal.com/Calendly booking, and CRM routing to Salesforce, HubSpot, Follow Up Boss, Sierra Interactive, kvCORE or your custom CRM." },
      { q: "Do you build for multi-language markets?", a: "Yes. i18n-ready Next.js sites with hreflang, RTL support for Arabic, and locale-aware content negotiation. Built for global luxury markets." },
    ],
    related: [
      { label: "Real Estate Solutions", href: "/services/real-estate" },
      { label: "Frontend Optimization Services", href: "/frontend-optimization-services" },
      { label: "Next.js Development Agency", href: "/nextjs-development-agency" },
    ],
  },

  "frontend-optimization-services": {
    hero: {
      eyebrow: "Frontend Optimization Services",
      h1: "Frontend Optimization Services — Lighthouse 95+, Core Web Vitals, INP",
      headlineHighlight: "Lighthouse 95+, Core Web Vitals, INP",
      sub:
        "Premium frontend optimization services for SaaS, AI startups and ecommerce. LCP, INP and CLS engineering for measurable Core Web Vitals gains, ranking lift and conversion improvement.",
      primaryCta: "Get a performance audit",
      secondaryCta: "See performance case studies",
    },
    outcomes: [
      { value: "98", label: "Lighthouse target" },
      { value: "< 1.2s", label: "LCP guarantee" },
      { value: "< 200ms", label: "INP target" },
      { value: "< 0.05", label: "CLS target" },
    ],
    pillars: [
      { title: "Critical path optimization", body: "Resource hints, font subsetting, preload/preconnect tuning, render-blocking script elimination, edge SSR." },
      { title: "INP & interaction tuning", body: "Main-thread debugging, long-task splitting, React 19 concurrent rendering, debounced handlers, Server Action latency tuning." },
      { title: "LCP engineering", body: "Above-the-fold image optimization, priority hints, AVIF/WebP, responsive sizes, edge image transforms." },
      { title: "CLS elimination", body: "Image dimensions, font swap policies, layout-stable component patterns. Zero shift on hero load." },
    ],
    process: [
      { step: "01", title: "Audit", body: "Real User Monitoring data, Lighthouse run, WebPageTest waterfall, INP profile." },
      { step: "02", title: "Plan", body: "Prioritized hit list with effort vs impact estimates." },
      { step: "03", title: "Ship fixes", body: "Critical path, INP, LCP and CLS in that order." },
      { step: "04", title: "Validate", body: "Real User Monitoring confirms gains in 14 days." },
      { step: "05", title: "Document", body: "Performance budget doc so the gains stick." },
    ],
    whoFor: [
      "SaaS teams with Lighthouse below 70 and ranking pressure",
      "AI startups whose dashboards feel laggy on real devices",
      "Ecommerce sites losing revenue to mobile LCP",
      "Marketing teams whose ads are being penalized for landing page experience",
    ],
    faqs: [
      { q: "What Core Web Vitals scores can you guarantee?", a: "LCP under 1.2s, INP under 200ms, CLS under 0.05. Lighthouse 95+ on performance, accessibility, best-practices and SEO. We don't take on engagements where these aren't achievable." },
      { q: "How long does a frontend optimization engagement take?", a: "Most engagements ship in 2–3 weeks. Faster for landing pages (under a week). Slower for complex SaaS dashboards (4-5 weeks)." },
      { q: "Do you work on existing codebases or only new builds?", a: "Both. About 60% of our optimization work is on existing Next.js, Remix, Nuxt or Vue codebases. We don't require a rewrite to ship gains." },
      { q: "What metrics do you target?", a: "Real User INP, LCP, CLS, TTFB, FID. We instrument with Vercel Analytics, Cloudflare RUM, or your existing tooling. Lighthouse is a starting point — RUM is the truth." },
      { q: "Can you fix INP issues specifically?", a: "Yes. INP became a Core Web Vital in March 2024. We profile main-thread work, split long tasks, debounce handlers, and tune React 19 concurrent rendering. Average INP improvement: 65%." },
      { q: "Will optimization hurt my conversion or feature work?", a: "No. We ship fixes against your existing test suite and feature flags. Most teams keep merging features in parallel — we don't block engineering." },
    ],
    related: [
      { label: "Website Optimization service", href: "/services" },
      { label: "Next.js Development Agency", href: "/nextjs-development-agency" },
      { label: "Tailwind CSS Development", href: "/tailwind-css-development" },
    ],
  },

  "tailwind-css-development": {
    hero: {
      eyebrow: "Tailwind CSS Development",
      h1: "Tailwind CSS Development & v4 Refactoring Agency",
      headlineHighlight: "v4 refactoring",
      sub:
        "Expert Tailwind CSS v4 development, refactoring, design system and component library work for SaaS, AI and product teams. CSS-first @theme, OKLCH color systems, tokenized component libraries.",
      primaryCta: "Discuss a Tailwind project",
      secondaryCta: "See Tailwind work",
    },
    outcomes: [
      { value: "−71%", label: "Avg CSS bundle" },
      { value: "v4", label: "CSS-first config" },
      { value: "OKLCH", label: "Color system" },
      { value: "98", label: "Lighthouse score" },
    ],
    pillars: [
      { title: "Tailwind v4 CSS-first @theme", body: "Migrate off tailwind.config.js. Tokens, breakpoints, utilities and animations defined in CSS via @theme inline and @utility." },
      { title: "HTML → Tailwind conversion", body: "Convert legacy HTML/CSS templates into modern Tailwind v4 with a tokenized design system, dark mode, and responsive cleanup." },
      { title: "Design system & tokens", body: "OKLCH color palette, type scale, spacing, shadows, motion easing — all defined as design tokens that Figma, Storybook and code can share." },
      { title: "Component library development", body: "Reusable component libraries on top of shadcn/ui, Radix, or @base-ui/react with your tokens. Storybook-ready." },
    ],
    process: [
      { step: "01", title: "Audit", body: "Existing CSS, design tokens, component sprawl, dark mode coverage." },
      { step: "02", title: "Token plan", body: "OKLCH palette, spacing scale, type ramp, motion easing." },
      { step: "03", title: "Migrate", body: "tailwind.config.js → CSS @theme. v3 → v4 refactor." },
      { step: "04", title: "Componentize", body: "shadcn/ui or custom primitives wired to tokens." },
      { step: "05", title: "Document", body: "Storybook + token docs so the system stays alive." },
    ],
    whoFor: [
      "Teams migrating from Tailwind v3 to v4",
      "Studios refactoring legacy HTML/CSS into Tailwind",
      "SaaS teams adopting shadcn/ui or building custom component libraries",
      "Design teams that want code-shared tokens with Figma",
    ],
    faqs: [
      { q: "Do you work with Tailwind CSS v4?", a: "Yes — Tailwind v4 is our default. We use the CSS-first @theme block, OKLCH color tokens, @utility for custom patterns, and ship everything without a tailwind.config.js." },
      { q: "Can you refactor my existing v3 project to v4?", a: "Yes. Migration is typically 1-2 weeks for medium projects. We convert tailwind.config.js to @theme, update opacity syntax, fix dark-mode selectors, and refactor custom plugins." },
      { q: "What about HTML → Tailwind conversion?", a: "One of our most-booked services. We convert legacy HTML/CSS templates into Tailwind v4 with a tokenized design system, dark mode, and responsive cleanup. CSS bundles drop 70%+." },
      { q: "Do you build shadcn/ui component libraries?", a: "Yes. We extend shadcn/ui with custom variants, tokens and patterns specific to your brand — and document the result in Storybook." },
      { q: "Can you build a design system?", a: "Yes. OKLCH color palette, type scale, spacing system, shadows, motion easing — defined as design tokens that work across code, Figma and Storybook." },
      { q: "What about dark mode?", a: "Built in. Every system we ship has light + dark with OKLCH perceptual color shifting (chroma and hue stay constant, lightness shifts predictably)." },
    ],
    related: [
      { label: "Frontend Optimization Services", href: "/frontend-optimization-services" },
      { label: "Next.js Development Agency", href: "/nextjs-development-agency" },
      { label: "All Services", href: "/services" },
    ],
  },

  "nextjs-development-agency": {
    hero: {
      eyebrow: "Next.js Development Agency",
      h1: "Next.js Development Agency — App Router, RSC, Edge",
      headlineHighlight: "App Router, RSC, Edge",
      sub:
        "Premium Next.js 16 development agency for AI startups, SaaS teams and global brands. App Router, Server Components, edge runtime, streaming, ISR — production-grade Next.js engineering worldwide.",
      primaryCta: "Start a Next.js project",
      secondaryCta: "See Next.js case studies",
    },
    outcomes: [
      { value: "16", label: "Next.js version" },
      { value: "RSC", label: "Server Components" },
      { value: "Edge", label: "Runtime" },
      { value: "98", label: "Lighthouse score" },
    ],
    pillars: [
      { title: "App Router & React Server Components", body: "RSC-first architecture, streaming with Suspense, parallel and intercepting routes, server actions, edge runtime where it matters." },
      { title: "Next.js 16 patterns", body: "Turbopack dev + build, partial prerendering, metadata API, dynamic OG images, font subsetting, image optimization at the edge." },
      { title: "SaaS & AI product surfaces", body: "Auth (Clerk, NextAuth, Better-auth), billing (Stripe), database (Drizzle, Prisma), tRPC or Server Actions — production patterns we've shipped 100+ times." },
      { title: "Performance & SEO from day one", body: "Lighthouse 95+, Core Web Vitals < 1.2s LCP, SEO + AEO architecture, schema markup, sitemap, robots. Not bolted on later." },
    ],
    process: [
      { step: "01", title: "Scope", body: "Routes, auth model, data layer, streaming surfaces." },
      { step: "02", title: "Architect", body: "RSC boundaries, server actions, edge vs node decisions." },
      { step: "03", title: "Build", body: "Next.js 16 + Tailwind v4 + TypeScript. Type-safe end to end." },
      { step: "04", title: "Performance", body: "LCP, INP, CLS, bundle size, RUM validation." },
      { step: "05", title: "Ship + monitor", body: "Vercel edge deploy with monitoring and analytics." },
    ],
    whoFor: [
      "AI startups building agent dashboards and streaming chat UIs",
      "SaaS teams migrating from Pages Router or other React frameworks",
      "Founders building production MVPs in 2-4 weeks",
      "Agencies subcontracting senior Next.js engineering",
    ],
    faqs: [
      { q: "Do you work with Next.js 16 and the App Router?", a: "Yes — Next.js 16 with App Router is our default stack. React Server Components first, client components only where needed. Turbopack for dev and build." },
      { q: "Can you migrate from Pages Router to App Router?", a: "Yes. Migration is typically 2-6 weeks depending on complexity. We do it route-by-route so the app stays shippable throughout." },
      { q: "Do you integrate auth and billing?", a: "Yes. Clerk, NextAuth, Better-auth, Lucia, Supabase Auth for auth. Stripe for billing including subscriptions, metered usage, and customer portal. All Server Action wired and edge-ready." },
      { q: "What about the data layer?", a: "Drizzle ORM, Prisma, Kysely, raw SQL — we work with all of them. Postgres, Neon, Supabase, PlanetScale on the database side. tRPC or Server Actions for the API layer." },
      { q: "Can you deploy somewhere other than Vercel?", a: "Yes. Vercel is our default for edge runtime, but we ship to Cloudflare Pages, Netlify, AWS (via SST or OpenNext), and self-hosted Docker too." },
      { q: "Do you write tests?", a: "Yes. Playwright for E2E, Vitest for unit, RTL for components. Plus visual regression with Chromatic when relevant. We don't ship without coverage on critical paths." },
    ],
    related: [
      { label: "AI Startup Website Development", href: "/ai-startup-website-development" },
      { label: "Frontend Optimization Services", href: "/frontend-optimization-services" },
      { label: "Tailwind CSS Development", href: "/tailwind-css-development" },
    ],
  },
};
