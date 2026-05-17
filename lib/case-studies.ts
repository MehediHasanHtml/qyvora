export type CaseStudy = {
  slug: string;
  client: string;
  category: "AI startup" | "SaaS" | "Real estate" | "Landing page";
  title: string;
  summary: string;
  hero: string;
  industry: string;
  region: string;
  timeline: string;
  services: string[];
  problem: string;
  approach: string[];
  outcome: string[];
  metrics: { label: string; value: string; sub?: string }[];
  quote: { text: string; author: string; role: string };
  tone: "violet" | "cyan" | "amber" | "neutral";
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "claude-ai",
    client: "Claude AI",
    category: "AI startup",
    title: "From wait-list to $1.4M ARR in 90 days",
    summary:
      "Re-architected the landing site and built the operator dashboard for a YC-backed AI agent platform. Streaming chat, eval surfaces and a pricing rebuild.",
    hero: "AI startup",
    industry: "AI agents · YC W26",
    region: "San Francisco · USA",
    timeline: "5 weeks",
    services: ["AI Frontend", "Landing redesign", "Pricing UX", "Dashboard UI"],
    problem:
      "The previous site looked like a Bootstrap template. Trial-to-paid conversion was stuck at 4.1% and demo bookings were flat. The dashboard's streaming UI dropped messages and pricing was hidden three clicks deep.",
    approach: [
      "Conversion-architected hero with animated agent mockup and dual CTA (book demo + start trial)",
      "Production streaming chat with tool-use surfaces, citation drawer and guardrail retry",
      "Pricing rebuild: trial-first messaging, transparent token-based tiers, annual toggle",
      "Operator dashboard with eval tables, cost/latency widgets and trace inspector",
    ],
    outcome: [
      "Trial-to-paid conversion went from 4.1% to 12.7% in 60 days",
      "Demo bookings 3.4× over previous quarter",
      "Investor follow-up emails specifically called out the redesigned site",
      "Lighthouse went from 62 to 98 across all routes",
    ],
    metrics: [
      { label: "Trial → paid", value: "+312%", sub: "4.1% → 12.7%" },
      { label: "LCP", value: "0.9s", sub: "from 4.1s" },
      { label: "Mobile CVR", value: "+184%" },
      { label: "ARR (90d)", value: "$1.4M" },
    ],
    quote: {
      text:
        "Qyvora.studio shipped our AI dashboard 3 weeks faster than our previous studio — and our trial-to-paid jumped from 4.1% to 12.7%. Worth every dollar.",
      author: "Priya Shah",
      role: "Co-founder, Claude AI",
    },
    tone: "violet",
  },
  {
    slug: "lumen-saas",
    client: "Lumen SaaS",
    category: "SaaS",
    title: "Landing page redesign that added $84K MRR",
    summary:
      "Hero-to-pricing rebuild for a Series A SaaS. Conversion-focused copy, A/B-ready components and a motion language that finally matched their product.",
    hero: "SaaS",
    industry: "B2B SaaS · Series A",
    region: "Berlin · Germany",
    timeline: "3 weeks",
    services: ["Landing redesign", "Conversion copy", "Motion design"],
    problem:
      "Series A SaaS with strong product, weak narrative. The landing page led with features, not outcomes. Bounce was 71% on mobile, visit-to-trial was 1.4%.",
    approach: [
      "Repositioned the hero around the buyer's KPI, not the product's features",
      "Added social proof above the fold with rotating logos and a single hero metric",
      "Rebuilt pricing as outcome tiers (with FAQs and money-back guarantee)",
      "Shipped on Next.js 16 + Tailwind v4 with A/B-ready hero variants",
    ],
    outcome: [
      "Visit-to-trial conversion 1.4% → 3.5% in the first month",
      "$84K in net-new MRR added in the first 60 days",
      "INP dropped to 92ms; mobile bounce −38%",
      "Sales team reports leads now arrive 'pre-sold' on positioning",
    ],
    metrics: [
      { label: "Visit → trial", value: "+148%" },
      { label: "MRR (60d)", value: "+$84K" },
      { label: "INP", value: "92ms" },
      { label: "Bounce", value: "−38%" },
    ],
    quote: {
      text:
        "Our landing page redesign added $84K in MRR within the first 60 days. The motion design alone made investors take us seriously.",
      author: "Jonas Krüger",
      role: "CEO, Lumen SaaS",
    },
    tone: "cyan",
  },
  {
    slug: "atlas-realty-dubai",
    client: "Atlas Realty Dubai",
    category: "Real estate",
    title: "Luxury listings that rank #1 in 3 Dubai neighborhoods",
    summary:
      "Premium agent brand site, IDX-ready listing engine, map search and lead capture. Built for Palm Jumeirah, Dubai Marina and Downtown listings.",
    hero: "Real estate",
    industry: "Luxury real estate · Dubai UAE",
    region: "Dubai · UAE",
    timeline: "6 weeks",
    services: ["Real Estate Frontend", "IDX integration", "Local SEO", "Map UX"],
    problem:
      "A boutique Dubai brokerage with $500M+ in listings was running a WordPress theme that loaded in 7 seconds. Listings weren't indexed. The lead form was an 11-field WPForms widget; nobody completed it.",
    approach: [
      "Editorial-grade listing pages with parallax photo galleries and schema markup",
      "Mapbox search with neighborhood polygons (Palm, Marina, Downtown, Emirates Hills)",
      "Multi-step lead form with progressive disclosure (3 steps, not 11 fields)",
      "Local SEO architecture: LocalBusiness schema, hreflang EN/AR, neighborhood hub pages",
    ],
    outcome: [
      "Ranking #1 for 'Palm Jumeirah villa for sale', 'Dubai Marina penthouse', and 'Downtown Dubai apartments'",
      "Lead form completions 4.2× the previous form",
      "Average listing time-on-page +210%",
      "Lighthouse 98 across performance, accessibility, best-practices and SEO",
    ],
    metrics: [
      { label: "Leads /mo", value: "4.2×" },
      { label: "Local rankings", value: "#1 × 3", sub: "Palm, Marina, Downtown" },
      { label: "Lighthouse", value: "98" },
      { label: "Time on listing", value: "+210%" },
    ],
    quote: {
      text:
        "The real-estate site Qyvora.studio built ranks #1 in three Dubai neighborhoods. Lead form completions are up 4.2x.",
      author: "Sarah Al-Mansoori",
      role: "Principal, Atlas Realty Dubai",
    },
    tone: "amber",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
