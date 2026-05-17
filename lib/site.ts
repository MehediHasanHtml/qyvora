export const siteConfig = {
  name: "Qyvora studio",
  legalName: "Qyvora studio — AI Frontend Studio",
  /**
   * Premium worldwide-tier positioning. Rotated across the site so we never
   * appear as a generic "frontend developer."
   */
  positioning: {
    primary: "AI Frontend Engineer for World-Class Startups",
    rotations: [
      "AI Frontend Engineer",
      "Conversion-Focused Frontend Specialist",
      "AI Startup Frontend Partner",
      "Premium Web Experience Studio",
      "SaaS Frontend Systems Expert",
      "Modern Website Redesign Agency",
    ],
  },
  tagline: "AI Frontend Engineer · Conversion-Focused Web Studio",
  description:
    "Qyvora studio is a premium AI frontend studio engineering high-conversion websites and SaaS interfaces for AI startups, SaaS founders, and real estate brands worldwide. Next.js, Tailwind v4, and conversion-first design.",
  url: "https://mehedihtml.com",
  ogImage: "/og.png",
  author: "Mehedi",
  email: "mehedihtml@gmail.com",
  founder: {
    name: "Mehedi",
    role: "AI Frontend Engineer · Founder",
    bio: "8+ years engineering premium web experiences for AI startups, SaaS teams, and global property brands. Shipped 120+ sites across 14 countries.",
  },
  locations: ["Worldwide", "USA", "UK", "Dubai", "Canada", "Australia", "Germany", "Singapore"],
  social: {
    twitter: "https://x.com/mehedihasan_cse",
    github: "https://github.com/MehediHasanHtmll",
    linkedin: "https://www.linkedin.com/in/mehedi-hasan-020a47168/",
    dribbble: "https://dribbble.com/mehedihtml",
  },
  contact: {
    email: "mehedihtml@gmail.com",
    bookingUrl: "https://cal.com/mehedi",
  },
  // Top-level navigation — real routes (not anchors)
  nav: [
    { label: "Services", href: "/services" },
    { label: "AI Startups", href: "/services/ai-startups" },
    { label: "Real Estate", href: "/services/real-estate" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  primaryCta: { label: "Start a project", href: "/contact" },
  secondaryCta: { label: "View work", href: "/case-studies" },
} as const;

export type SiteConfig = typeof siteConfig;

/** Programmatic SEO landing pages — slug → focus keyword */
export const seoLandingPages = [
  {
    slug: "ai-startup-website-development",
    h1: "AI Startup Website Development",
    title: "AI Startup Website Development Agency — Premium, Investor-Grade",
    intent: "AI founders looking for a launch-ready premium website.",
    primaryKeyword: "AI startup website development",
    relatedKeywords: [
      "AI startup web design agency",
      "AI SaaS website developer",
      "AI website development services",
      "AI startup landing page design",
      "ChatGPT-style UI development",
    ],
  },
  {
    slug: "landing-page-redesign",
    h1: "Landing Page Redesign Agency",
    title: "Landing Page Redesign Agency — Conversion-Architected",
    intent: "Marketers and founders rebuilding underperforming landing pages.",
    primaryKeyword: "landing page redesign agency",
    relatedKeywords: [
      "landing page redesign services",
      "high-conversion landing page design",
      "SaaS landing page redesign",
      "landing page optimization agency",
      "premium landing page developer",
    ],
  },
  {
    slug: "real-estate-website-development",
    h1: "Real Estate Website Development",
    title: "Real Estate Website Development — Luxury Property Sites",
    intent: "Brokerages and agents building premium property portals.",
    primaryKeyword: "real estate website development",
    relatedKeywords: [
      "luxury real estate website design",
      "real estate agency web development",
      "IDX MLS website developer",
      "real estate lead generation website",
      "Dubai real estate website developer",
    ],
  },
  {
    slug: "frontend-optimization-services",
    h1: "Frontend Optimization Services",
    title: "Frontend Optimization Services — Core Web Vitals 95+",
    intent: "Teams needing speed, INP, LCP, and SEO performance fixes.",
    primaryKeyword: "frontend optimization service",
    relatedKeywords: [
      "website performance optimization",
      "Core Web Vitals optimization service",
      "Next.js performance optimization",
      "LCP optimization service",
      "Lighthouse 95 optimization",
    ],
  },
  {
    slug: "tailwind-css-development",
    h1: "Tailwind CSS Development",
    title: "Tailwind CSS Development & v4 Refactoring Agency",
    intent: "Teams adopting Tailwind v4 or refactoring legacy CSS.",
    primaryKeyword: "Tailwind CSS expert",
    relatedKeywords: [
      "Tailwind CSS developer for hire",
      "Tailwind v4 refactoring service",
      "HTML to Tailwind conversion",
      "Tailwind design system development",
      "Tailwind component library development",
    ],
  },
  {
    slug: "nextjs-development-agency",
    h1: "Next.js Development Agency",
    title: "Next.js Development Agency — App Router, RSC, Edge",
    intent: "Founders and teams building production Next.js applications.",
    primaryKeyword: "next.js agency",
    relatedKeywords: [
      "Next.js development services",
      "Next.js 16 development agency",
      "App Router development",
      "Next.js SaaS development",
      "Next.js website development company",
    ],
  },
] as const;

export type SeoLandingSlug = (typeof seoLandingPages)[number]["slug"];

/** Services — used for /services index, JSON-LD, and footer */
export const servicesList = [
  { slug: "ai-frontend-development", name: "AI-Integrated Frontend Development", short: "Streaming UIs, agent dashboards, RAG interfaces." },
  { slug: "ai-startup-websites",     name: "AI Startup Websites",                 short: "Investor-grade product + landing surfaces." },
  { slug: "landing-page-redesign",   name: "Landing Page Redesign",               short: "Conversion-architected page rebuilds." },
  { slug: "website-optimization",    name: "Website Optimization",                short: "Core Web Vitals & Lighthouse 95+." },
  { slug: "real-estate-websites",    name: "Real Estate Websites",                short: "Luxury listings, map UX, lead gen." },
  { slug: "saas-frontend-systems",   name: "SaaS Frontend Systems",               short: "Scalable component libraries & dashboards." },
  { slug: "conversion-optimization", name: "Conversion Optimization",             short: "Scientific A/B testing & UX research." },
  { slug: "tailwind-refactoring",    name: "Tailwind v4 Refactoring",             short: "Legacy HTML → tokenized design systems." },
  { slug: "nextjs-development",      name: "Next.js Development",                 short: "App Router, RSC, edge deploys." },
  { slug: "speed-optimization",      name: "Speed Optimization",                  short: "LCP, INP, CLS engineering." },
  { slug: "mobile-responsive",       name: "Premium Mobile Responsive Design",    short: "Mobile-first interfaces, any device." },
  { slug: "website-modernization",   name: "Website Modernization",               short: "Legacy → Next.js + Tailwind v4 refresh." },
] as const;
