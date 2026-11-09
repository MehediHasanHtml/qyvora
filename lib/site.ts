/**
 * Single source of truth for brand and business facts.
 * Everything here must be verifiable. Do not add client names, stats,
 * awards, or offices that cannot be backed up.
 */
export const siteConfig = {
  name: "Qyvora Studio",
  shortName: "Qyvora",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://qyvora.vercel.app").replace(/\/$/, ""),
  positioning: "Your AI Powered Digital Product and Web Development Partner",
  statement: "We build intelligent digital experiences for ambitious businesses.",
  mission: "Qyvora transforms ambitious business ideas into intelligent, high performing digital experiences.",
  description:
    "Qyvora Studio designs and builds AI powered websites, intelligent web applications, SaaS platforms and premium business websites for startups and growing companies worldwide.",
  locale: "en_US",
  // Updated whenever the main content is revised. Used by the sitemap.
  contentUpdated: "2026-11-09",
  // The studio speaks as a team. No personal names or personal profiles on the site.
  team: {
    name: "Qyvora Studio Team",
    experienceYears: 8,
    summary:
      "The Qyvora Studio team designs and engineers production websites, web applications and SaaS products with Next.js, React, Vue, PHP, Laravel and modern AI tooling, for clients worldwide.",
  },
  base: {
    city: "Dhaka",
    country: "Bangladesh",
    countryCode: "BD",
    timezone: "GMT+6",
  },
  contact: {
    email: "mehedihtml@gmail.com",
    responseTime: "within one business day",
  },
  // Company profiles only. Leave a value empty to hide it from the footer and structured data.
  social: {
    linkedin: "",
    github: "",
    x: "",
    facebook: "",
  },
  xHandle: "",
  fiverrRating: "5.0",
  analytics: {
    gaId: "G-9V8F8DMBRH",
    googleSiteVerification: "82ue5EW2szjeY7ggNNWrmr7cHtIIcmTb2njiAvZQRVw",
  },
  primaryCta: { label: "Start a Project", href: "/contact" },
  callCta: { label: "Schedule a Discovery Call", href: "/contact?intent=call" },
  targetMarkets: [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "Netherlands",
    "Switzerland",
    "United Arab Emirates",
  ],
} as const;

export type NavLink = { label: string; href: string; description?: string };

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Audience based solutions. Each one points to existing service pages. */
export const solutions = [
  {
    id: "startups",
    label: "For Startup Founders",
    short: "Launch a credible product and website fast.",
    pages: ["startup-website-development", "mvp-development", "landing-page-development"],
  },
  {
    id: "saas",
    label: "For SaaS Founders",
    short: "Ship and scale a subscription product.",
    pages: ["saas-development", "ai-saas-development", "nextjs-development-agency"],
  },
  {
    id: "ai",
    label: "For AI Entrepreneurs",
    short: "Turn a model or workflow into a product people pay for.",
    pages: ["ai-web-application-development", "ai-chatbot-development", "ai-integration-automation"],
  },
  {
    id: "established",
    label: "For Established Businesses",
    short: "Modernize your website and internal tools.",
    pages: ["website-redesign", "custom-website-development", "custom-web-application-development", "ai-website-development"],
  },
] as const;
