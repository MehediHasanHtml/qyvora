/**
 * Portfolio projects. All facts come from the studio's published work
 * on the studio portfolio. Do not add metrics or client names that are not verified.
 *
 * engagement:
 *  "client"         Paid work for a named client (only with permission)
 *  "internal"       Built by Qyvora for itself
 *  "self-initiated" Built independently as a product or experiment
 *  "concept"        A design or demo, not used by a real business
 *  "portfolio"      Real build shown in the portfolio; engagement details not published
 */
export type Engagement = "client" | "internal" | "self-initiated" | "concept" | "portfolio";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  industry: string;
  year: number;
  engagement: Engagement;
  overview: string;
  challenge: string;
  solution: string;
  features: string[];
  outcomes: string[];
  tech: string[];
  /** Screenshot. When missing, a coded preview is shown instead. */
  image?: { src: string; width: number; height: number; alt: string };
  liveUrl?: string;
  relatedServices: string[];
  featured?: boolean;
};

export const engagementLabel: Record<Engagement, string> = {
  client: "Client project",
  internal: "Internal project",
  "self-initiated": "Self initiated",
  concept: "Concept",
  portfolio: "Portfolio project",
};

export const engagementNote: Record<Engagement, string> = {
  client: "Built for a paying client and published with permission.",
  internal: "Designed and built by Qyvora Studio for its own use.",
  "self-initiated": "Built independently by our team as a product or experiment.",
  concept: "A design and engineering demonstration, not used by a real business.",
  portfolio: "A real build by the Qyvora Studio team. Client and commercial details are not published.",
};

export const projects: Project[] = [
  {
    slug: "family-smile",
    name: "Family Smile",
    tagline: "Family dental clinic website",
    industry: "Healthcare",
    year: 2026,
    engagement: "portfolio",
    overview:
      "A Romanian language website for Family Smile, a family dental clinic in Galați led by Dr. Florentina Cuignet-Miron, built to make children and adults feel at ease before their first visit.",
    challenge:
      "Many patients, and most children, arrive at a dental clinic nervous. The site had to feel warm and friendly, explain treatments in plain language and make booking or calling the clinic a single tap from any page.",
    solution:
      "A hand coded static site with a custom illustrated hero, a dedicated section for children and first visits, a doctor profile, short oral health articles and an FAQ. Opening hours, address, phone and online booking stay visible from the first screen.",
    features: [
      "Illustrated, family friendly hero",
      "Services from consultations to sealants and scaling",
      "Dedicated section for children and first visits",
      "Doctor profile",
      "Oral health tips and FAQ",
      "Call and online booking actions on every screen",
      "Dentist structured data for local search",
    ],
    outcomes: [
      "A clinic website that explains every treatment in plain language",
      "A clear path to booking or calling from every section",
      "A lightweight static build with lazy loaded images",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "JSON LD"],
    image: {
      src: "/projects/family-smile.webp",
      width: 1280,
      height: 720,
      alt: "Family Smile home page with a friendly tooth illustration, the headline healthy smiles for the whole family and online booking and phone buttons",
    },
    liveUrl: "https://mehedihtml.com/family-smile/",
    relatedServices: ["healthcare-website-development", "doctor-website-development"],
    featured: true,
  },
  {
    slug: "domus-imobiliare",
    name: "DOMUS Imobiliare",
    tagline: "Real estate agency website",
    industry: "Real Estate",
    year: 2026,
    engagement: "portfolio",
    overview:
      "A Romanian language website for DOMUS, a real estate agency in Galați, presenting apartments for sale and rent and the agency's services for sellers, buyers and landlords.",
    challenge:
      "Apartment seekers want to see real listings quickly, and sellers want to know the agency can price and promote their home. One site had to serve both audiences and turn each into a phone call or inquiry.",
    solution:
      "A static site that leads with apartment listings, then services, a selling path and a four step process. A guided inquiry form asks whether the visitor wants to buy, sell, rent or let, plus property type, rooms and budget, so the agency receives qualified requests.",
    features: [
      "Apartment listing cards for sale and rent",
      "Services for buying, selling, renting, valuation, promotion and notary support",
      "Dedicated section for owners who want to sell",
      "Guided inquiry form with intent, property type, rooms and budget",
      "FAQ and embedded office map",
      "Phone and WhatsApp contact actions",
      "Real estate agent structured data",
    ],
    outcomes: [
      "One site that serves buyers, renters and sellers",
      "Qualified inquiries that arrive with intent, rooms and budget",
      "Lazy loaded listing photos for fast mobile browsing",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "JSON LD"],
    image: {
      src: "/projects/domus-imobiliare.webp",
      width: 1280,
      height: 720,
      alt: "DOMUS Imobiliare home page headed apartments for sale and for rent in Galați",
    },
    liveUrl: "https://mehedihtml.com/domus-imobiliare/",
    relatedServices: ["real-estate-website-development", "business-website-development"],
    featured: true,
  },
  {
    slug: "akora-dental",
    name: "AKORA Dental Clinic",
    tagline: "Dental clinic website",
    industry: "Healthcare",
    year: 2026,
    engagement: "portfolio",
    overview:
      "A Bulgarian language website for the AKORA dental clinic in Shumen, led by Dr. Aytyul Shentyurk, covering aesthetic dentistry, endodontics, prosthetics, pediatric dentistry and surgery.",
    challenge:
      "Patients often do not know which treatment they need. The site had to present five areas of care clearly, reassure parents and first time patients, and make booking simple.",
    solution:
      "A calm, image led static site with service cards, a step by step explanation of the first exam, a section for children, patient reviews and an FAQ. The booking form asks for the service and a preferred time so the clinic can call back prepared.",
    features: [
      "Five service areas with clear descriptions",
      "How the first exam works, step by step",
      "Section for children's first visits",
      "Patient reviews and FAQ",
      "Booking form with service and preferred time",
      "Embedded clinic map",
      "Dentist structured data for local search",
    ],
    outcomes: [
      "A clear overview of every treatment area on one page",
      "Booking requests that arrive with the service and preferred time",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "JSON LD"],
    image: {
      src: "/projects/akora-dental.webp",
      width: 1280,
      height: 720,
      alt: "AKORA dental clinic home page with the headline a beautiful and healthy smile, with care and attention",
    },
    liveUrl: "https://mehedihtml.com/akora-dental/",
    relatedServices: ["healthcare-website-development", "doctor-website-development"],
  },
  {
    slug: "advokat-ivanov",
    name: "Advokat Ivan Ivanov",
    tagline: "Law office website",
    industry: "Legal",
    year: 2026,
    engagement: "portfolio",
    overview:
      "A Bulgarian language website for attorney Ivan Ivanov of the Vratsa Bar Association, who handles criminal, civil, family, property, commercial and administrative cases in Vratsa, Montana, Vidin and Sofia.",
    challenge:
      "People looking for a lawyer are often stressed and unsure how to describe their problem. The site had to help them find their type of case quickly and understand what happens at a consultation.",
    solution:
      "A bold, typographic static site with a filterable list of legal questions, a three step consultation guide, office details with a map and an inquiry form that asks for the topic of the case. The phone number stays in the header on every screen.",
    features: [
      "Filterable list of practice areas and common questions",
      "Three step consultation guide",
      "Office section with embedded map",
      "Inquiry form with case topic",
      "Phone call action in the header",
      "Legal service structured data",
    ],
    outcomes: [
      "Visitors can find their type of case in seconds",
      "A clear explanation of the consultation before the first call",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "JSON LD"],
    image: {
      src: "/projects/advokat-ivanov.webp",
      width: 1280,
      height: 720,
      alt: "Attorney Ivan Ivanov website with a large headline, a photo of the attorney at his desk and call and booking buttons",
    },
    liveUrl: "https://mehedihtml.com/advokat-ivanov/",
    relatedServices: ["law-firm-website-development", "business-website-development"],
  },
  {
    slug: "kottali-dental",
    name: "Kottali Dental Practice",
    tagline: "Dental practice website",
    industry: "Healthcare",
    year: 2026,
    engagement: "portfolio",
    overview:
      "A Greek language website for the dental practice of Georgia I. Kottali in Karditsa, covering checkups, cleaning, fillings, gum treatment, extractions, children's dentistry and emergencies.",
    challenge:
      "A small practice needs to look trustworthy, answer common questions and get patients to call. The site had to do that in a warm tone, without feeling clinical.",
    solution:
      "A light, welcoming static site with six service cards, a section on children's first visits, patient reviews, an FAQ and a map. Call to book actions repeat through the page so a patient never has to scroll back to find the number.",
    features: [
      "Six service cards including emergency care",
      "Section on children's first visits",
      "Patient reviews and FAQ",
      "Embedded practice map",
      "Repeated call to book actions",
      "Dentist structured data for local search",
    ],
    outcomes: [
      "A warm, trustworthy presence for a local practice",
      "A phone call is never more than one tap away",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "JSON LD"],
    image: {
      src: "/projects/kottali-dental.webp",
      width: 1280,
      height: 720,
      alt: "Kottali dental practice home page with the headline care for your smile, with patience and warmth",
    },
    liveUrl: "https://mehedihtml.com/kottali-dental/",
    relatedServices: ["doctor-website-development", "healthcare-website-development"],
  },
  {
    slug: "advokat-boynin",
    name: "Advokat Hristiyan Boynin",
    tagline: "Law office website with two locations",
    industry: "Legal",
    year: 2026,
    engagement: "portfolio",
    overview:
      "A Bulgarian language website for the law office of Hristiyan Boynin, in practice since 2015, covering labor, criminal, civil and commercial law from offices in Pleven and Lukovit.",
    challenge:
      "Clients of a two office practice need to know which office to contact, and people who were dismissed from work need to act before legal deadlines run out.",
    solution:
      "A refined, editorial static site with four practice areas, a dedicated section warning dismissed employees that the appeal deadline is already running, client testimonials, both offices with their own maps and an inquiry form that asks for the topic and the preferred office.",
    features: [
      "Four practice areas",
      "Urgent section on appeal deadlines for dismissed employees",
      "Client testimonials",
      "Two office locations with embedded maps",
      "Inquiry form with topic and preferred office",
      "Phone and WhatsApp contact actions",
      "Legal service structured data",
    ],
    outcomes: [
      "Inquiries that arrive already routed to the right office",
      "A time sensitive call to action for employment cases",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "JSON LD"],
    image: {
      src: "/projects/advokat-boynin.webp",
      width: 1280,
      height: 720,
      alt: "Hristiyan Boynin law office home page with the headline protecting rights, solutions for the future",
    },
    liveUrl: "https://mehedihtml.com/advokat-boynin/",
    relatedServices: ["law-firm-website-development", "business-website-development"],
  },
  {
    slug: "my-birth-press",
    name: "My Birth Press",
    tagline: "Personalized digital newspaper",
    industry: "Publishing and Ecommerce",
    year: 2026,
    engagement: "portfolio",
    overview:
      "A product that turns any birth date into a personalized digital newspaper of the world news, history, science and culture from that day, with a free preview and paid editions.",
    challenge:
      "Create a newspaper inspired experience that combines editorial design, interactive page navigation and a smooth path from free preview to purchase.",
    solution:
      "Users enter a birth date and receive a multipage digital newspaper. A birthday timeline connects notable events across each year of a person's life, gift editions can be created for someone else, and a preview comes before the paid options, including a print ready PDF.",
    features: [
      "Personalized historical discovery by birth date",
      "Interactive multipage digital newspaper",
      "Birthday life timeline",
      "Gift editions",
      "Preview to purchase journey",
      "Print ready PDF option",
      "Responsive design for desktop and mobile",
    ],
    outcomes: [
      "A complete product journey from first input to paid edition",
      "Editorial layouts that work on desktop and mobile",
    ],
    tech: ["Next.js 16", "React", "TypeScript", "Tailwind CSS v4", "shadcn/ui"],
    image: {
      src: "https://api.mehedihtml.com/storage/32/conversions/01M50E3R8DVZX1N8VWQ45E95R4-webp.webp",
      width: 1280,
      height: 612,
      alt: "My Birth Press home page inviting visitors to enter a birth date to create a personalized newspaper",
    },
    liveUrl: "https://my-birth-press.vercel.app/",
    relatedServices: ["startup-website-development", "mvp-development"],
    featured: true,
  },
  {
    slug: "digital-port",
    name: "Digital Port",
    tagline: "Modern frontend dashboard",
    industry: "SaaS and Dashboards",
    year: 2025,
    engagement: "portfolio",
    overview:
      "A dashboard interface built as a scalable foundation for a growing product, with a typed component architecture and a consistent design system.",
    challenge:
      "Dashboards quickly collect interface debt: inconsistent components, untyped data handling and slow renders. The product needed a foundation that would stay clean as it grew.",
    solution:
      "Built with Nuxt and TypeScript, using Nuxt UI and Tailwind CSS as the design system layer. Every view is composed from small, typed components with defined data contracts.",
    features: [
      "Typed component architecture",
      "Design system on Nuxt UI and Tailwind tokens",
      "Fast route transitions",
      "Server rendering friendly structure",
    ],
    outcomes: [
      "A fully typed component architecture",
      "A consistent design system through shared tokens",
      "Fast route transitions with server rendering support",
    ],
    tech: ["Nuxt", "Vue 3", "TypeScript", "Nuxt UI", "Tailwind CSS"],
    image: {
      src: "https://api.mehedihtml.com/storage/6/conversions/digitalport-webp.webp",
      width: 1280,
      height: 610,
      alt: "Digital Port home page built with Nuxt, showing the hero section and navigation",
    },
    liveUrl: "https://digital-port-two.vercel.app/",
    relatedServices: ["saas-development", "custom-web-application-development"],
  },
  {
    slug: "hrms-dashboard",
    name: "HRMS Dashboard",
    tagline: "HR management dashboard",
    industry: "SaaS and Dashboards",
    year: 2026,
    engagement: "portfolio",
    overview:
      "An HR management system frontend that brings attendance, leave, payroll, work hour analytics and reminders into one readable view.",
    challenge:
      "HR teams need attendance, leave requests, payroll, analytics and reminders in one place. The data is dense and must stay readable on desktop and tablet.",
    solution:
      "A modular card and widget system with full sidebar navigation covering employees, leave, payroll, performance, reports and access control. Widgets share one visual language, so new modules can be added without a redesign.",
    features: [
      "Attendance summaries and charts",
      "Leave applications",
      "Payroll overviews",
      "Work hour analytics",
      "Leaderboards and birthday reminders",
      "Sidebar navigation for every HR module",
    ],
    outcomes: [
      "A complete HRMS frontend with dashboard, employee, leave and payroll views",
      "A reusable widget system that keeps dense data scannable",
      "A responsive admin layout for smaller screens",
    ],
    tech: ["HTML5", "CSS3", "Bootstrap 5", "jQuery", "Bootstrap Icons"],
    image: {
      src: "https://api.mehedihtml.com/storage/2/conversions/hrms-dashboard-webp.webp",
      width: 1280,
      height: 611,
      alt: "HRMS dashboard with attendance charts, leave summaries and payroll widgets",
    },
    liveUrl: "https://mehedihtml.com/hrms/dashboard.html",
    relatedServices: ["custom-web-application-development", "saas-development"],
    featured: true,
  },
  {
    slug: "readyecommerce",
    name: "ReadyEcommerce",
    tagline: "Multi vendor marketplace frontend",
    industry: "Ecommerce",
    year: 2025,
    engagement: "portfolio",
    overview:
      "A hand coded multi vendor marketplace storefront with product grids, shop listings, a working cart and language and currency switching.",
    challenge:
      "Marketplace interfaces have many moving parts: sliders, carousels, category navigation, shop listings, cart and localized currency and language switching. All of it must stay consistent and fast on every device.",
    solution:
      "Reusable product cards, carousels for popular products and top rated shops, a cart panel with quantity controls and a localized header with language and currency selectors, built with Bootstrap 5 and jQuery.",
    features: [
      "Product grids and shop listings",
      "Reusable product cards with discount badges",
      "Carousels for popular products and top rated shops",
      "Cart panel with quantity controls",
      "Language and currency selectors",
      "Digital product support",
    ],
    outcomes: [
      "A full marketplace interface covering home, products, shops, cart and blog",
      "A consistent product card system across all listings",
      "Responsive layouts verified from mobile to widescreen",
    ],
    tech: ["HTML5", "CSS3", "Bootstrap 5", "jQuery", "Slick Slider"],
    image: {
      src: "https://api.mehedihtml.com/storage/3/conversions/readyecommerce-webp.webp",
      width: 1280,
      height: 607,
      alt: "ReadyEcommerce marketplace home page with product carousels and shop listings",
    },
    liveUrl: "https://mehedihtml.com/readyecommerce/index.html",
    relatedServices: ["business-website-development", "custom-web-application-development"],
  },
  {
    slug: "qyvora-website",
    name: "Qyvora Studio Website",
    tagline: "AI agency website and content platform",
    industry: "Agency and Marketing",
    year: 2026,
    engagement: "internal",
    overview:
      "This website. A statically rendered agency platform with service and industry landing pages, a project portfolio, insights articles, structured data and a qualified project inquiry flow.",
    challenge:
      "Present a growing studio to international buyers with credibility and clarity, rank for specific commercial searches, and turn visitors into qualified inquiries without invented claims.",
    solution:
      "A content model where every service, industry, project and article is typed data rendered into server components. Each page gets its own metadata, Open Graph image and connected JSON LD, and the inquiry form validates and qualifies leads on the server.",
    features: [
      "Twenty one service and industry landing pages",
      "Per page metadata and generated social images",
      "Connected Organization, Service and Article structured data",
      "Qualified project inquiry form with spam protection",
      "Dark and light themes",
      "Accessible navigation with mega menus",
    ],
    outcomes: [
      "Static pages served from the edge with minimal client JavaScript",
      "A content system that makes adding a new service page a data change",
    ],
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Vercel"],
    relatedServices: ["ai-website-development", "nextjs-development-agency"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function projectsBySlugs(slugs: readonly string[] = []) {
  return slugs.map((s) => getProject(s)).filter((p): p is Project => Boolean(p));
}
