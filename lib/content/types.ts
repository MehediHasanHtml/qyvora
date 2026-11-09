export type VisualKind =
  | "website"
  | "chat"
  | "agent"
  | "dashboard"
  | "saas"
  | "automation"
  | "landing"
  | "code"
  | "inventory"
  | "listings"
  | "booking"
  | "legal"
  | "business"
  | "mvp"
  | "redesign";

export type ProjectType =
  | "ai-website"
  | "ai-web-app"
  | "ai-saas"
  | "ai-chatbot"
  | "ai-integration"
  | "business-website"
  | "startup-website"
  | "landing-page"
  | "redesign"
  | "web-app"
  | "saas"
  | "mvp"
  | "automotive"
  | "real-estate"
  | "healthcare"
  | "law-firm"
  | "other";

export type Item = { title: string; body: string };
export type Faq = { q: string; a: string };

export type LandingPage = {
  slug: string;
  kind: "service" | "industry";
  group: "ai" | "web" | "product" | "industry";
  /** Short label used in menus and cards. */
  name: string;
  /** SEO title without the brand suffix. Keep under about 60 characters. */
  title: string;
  /** Meta description, about 140 to 160 characters. */
  description: string;
  eyebrow: string;
  h1: string;
  lede: string;
  visual: VisualKind;
  /** Direct answer block for search and answer engines. */
  answer: Faq;
  outcomes: Item[];
  features: Item[];
  audience: string[];
  tech: string[];
  process: Item[];
  faqs: Faq[];
  related: string[];
  projects?: string[];
  projectType: ProjectType;
  keywords: { primary: string; secondary: string[] };
};
