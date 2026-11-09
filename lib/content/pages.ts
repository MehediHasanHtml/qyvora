import { aiServices } from "./services-ai";
import { webServices } from "./services-web";
import { productServices } from "./services-product";
import { industryPages } from "./industries";
import type { LandingPage } from "./types";

export const landingPages: LandingPage[] = [...aiServices, ...webServices, ...productServices, ...industryPages];

export const servicePages = landingPages.filter((p) => p.kind === "service");

export function getLandingPage(slug: string) {
  return landingPages.find((p) => p.slug === slug);
}

export function pagesBySlugs(slugs: readonly string[]) {
  return slugs.map((s) => getLandingPage(s)).filter((p): p is LandingPage => Boolean(p));
}

export const serviceDivisions = [
  {
    id: "ai",
    label: "AI Development",
    title: "AI powered products and features",
    description:
      "AI websites, web applications, SaaS products, assistants and automation, grounded in your data and designed for people to trust.",
    value: "Answer customers instantly, remove repetitive work and open new revenue lines.",
    tech: ["OpenAI", "Claude", "Gemini", "Next.js"],
    href: "/services#ai",
    pages: aiServices,
  },
  {
    id: "web",
    label: "Website Development",
    title: "Premium websites that convert",
    description:
      "Custom, startup, business and landing page websites with original design, strong SEO and very fast loading.",
    value: "Look credible to international buyers and turn more visits into inquiries.",
    tech: ["Next.js", "React", "Tailwind CSS", "Headless CMS"],
    href: "/services#web",
    pages: webServices,
  },
  {
    id: "product",
    label: "SaaS and Applications",
    title: "SaaS platforms and web applications",
    description:
      "SaaS platforms, MVPs, admin dashboards, CRMs and customer portals with clean architecture and integrations.",
    value: "Launch faster, replace spreadsheets and scale without rewrites.",
    tech: ["TypeScript", "Node.js", "PHP and Laravel", "PostgreSQL and MySQL", "Vue and Nuxt"],
    href: "/services#product",
    pages: productServices,
  },
] as const;

export const industries = industryPages;
