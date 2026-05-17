import { siteConfig } from "@/lib/site";
import { faqs } from "@/lib/faqs";

const URL = siteConfig.url;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${URL}/#organization`,
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  url: URL,
  logo: { "@type": "ImageObject", url: `${URL}/logo.png`, width: 512, height: 512 },
  image: `${URL}${siteConfig.ogImage}`,
  description: siteConfig.description,
  email: siteConfig.contact.email,
  founder: { "@type": "Person", name: siteConfig.founder.name, jobTitle: siteConfig.founder.role },
  sameAs: Object.values(siteConfig.social),
  areaServed: siteConfig.locations.map((name) => ({ "@type": "Place", name })),
  knowsAbout: [
    "AI frontend development",
    "Next.js development",
    "Tailwind CSS",
    "SaaS UI design",
    "AI startup websites",
    "Landing page optimization",
    "Real estate website development",
    "Conversion rate optimization",
    "SEO",
    "Answer Engine Optimization",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${URL}/#website`,
  url: URL,
  name: siteConfig.name,
  description: siteConfig.description,
  publisher: { "@id": `${URL}/#organization` },
  inLanguage: "en",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${URL}/?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${URL}/#founder`,
  name: siteConfig.founder.name,
  jobTitle: siteConfig.founder.role,
  worksFor: { "@id": `${URL}/#organization` },
  url: URL,
  sameAs: Object.values(siteConfig.social),
  knowsAbout: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AI integration"],
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${URL}/#service-business`,
  name: siteConfig.legalName,
  url: URL,
  image: `${URL}${siteConfig.ogImage}`,
  priceRange: "$$$",
  areaServed: { "@type": "Place", name: "Worldwide" },
  serviceType: "Frontend & AI website development",
  provider: { "@id": `${URL}/#organization` },
};

export const services = [
  { name: "AI Frontend Development", description: "Streaming UIs, AI dashboards and agent interfaces built with Next.js and Tailwind." },
  { name: "AI Startup Website Development", description: "Investor-grade landing pages and product UI for AI startups, shipped in 2–3 weeks." },
  { name: "Landing Page Redesign", description: "Conversion-architected landing page rebuilds with measurable lift." },
  { name: "Website Optimization", description: "Core Web Vitals, LCP, INP, accessibility and SEO tuning to 95+ Lighthouse." },
  { name: "Real Estate Website Development", description: "Luxury property sites, brokerage portals, IDX-ready listings and map search." },
  { name: "Premium Mobile Responsive Design", description: "Mobile-first responsive interfaces that look premium on any device." },
  { name: "HTML to Tailwind Conversion", description: "Legacy HTML/CSS refactored into a Tailwind v4 token system." },
  { name: "Website Modernization", description: "Legacy site modernization to Next.js + Tailwind + modern motion." },
  { name: "Speed Optimization", description: "Performance engineering for INP, LCP, CLS and edge delivery." },
  { name: "Conversion-Focused UI/UX", description: "Research-driven UX that compounds revenue per visitor." },
];

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${URL}/#services`,
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.name,
      description: s.description,
      provider: { "@id": `${URL}/#organization` },
      areaServed: "Worldwide",
    },
  })),
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${URL}/#faq`,
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: URL },
  ],
};

export const allSchemas = [
  organizationSchema,
  websiteSchema,
  personSchema,
  professionalServiceSchema,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
];
