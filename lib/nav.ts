import { serviceDivisions, industries, pagesBySlugs } from "@/lib/content/pages";
import { solutions } from "@/lib/site";

/** Small, serializable menu data passed to the client header. */
export type MenuLink = { label: string; href: string; description?: string };
export type MenuColumn = { title: string; href: string; links: MenuLink[] };
export type Menus = {
  services: MenuColumn[];
  industries: MenuLink[];
  solutions: MenuLink[];
};

const industryShort: Record<string, string> = {
  "car-dealership-website-development": "Inventory, vehicle pages and test drive booking",
  "automotive-website-development": "Service booking, quotes and local search",
  "real-estate-website-development": "Listings, property search and agent leads",
  "healthcare-website-development": "Clinics, providers and appointment booking",
  "doctor-website-development": "Personal practice sites for specialists",
  "law-firm-website-development": "Practice areas, attorneys and consultations",
  "business-website-development": "Consulting, finance, construction and more",
};

export function getMenus(): Menus {
  return {
    services: serviceDivisions.map((d) => ({
      title: d.label,
      href: d.href,
      links: d.pages.map((p) => ({ label: p.name, href: `/${p.slug}` })),
    })),
    industries: industries.map((p) => ({
      label: p.name,
      href: `/${p.slug}`,
      description: industryShort[p.slug],
    })),
    solutions: solutions.map((s) => ({
      label: s.label,
      href: `/solutions#${s.id}`,
      description: `${s.short} ${pagesBySlugs(s.pages)
        .map((p) => p.name)
        .slice(0, 2)
        .join(", ")}.`,
    })),
  };
}
