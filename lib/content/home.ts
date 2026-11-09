import type { Faq } from "./types";

export const homeFaqs: Faq[] = [
  {
    q: "What services does Qyvora offer?",
    a: "Qyvora Studio offers three groups of services: AI development (AI websites, AI web applications, AI SaaS products, chatbots, agents and automation), website development (custom, startup, business and landing page websites, redesigns and Next.js development), and SaaS and application development (SaaS platforms, MVPs, admin dashboards, CRMs and customer portals). We also build dedicated solutions for car dealerships, real estate, healthcare and law firms.",
  },
  {
    q: "Can you build AI powered websites?",
    a: "Yes. We build websites with AI assistants grounded in your own content, natural language search, smart inquiry forms and personalized sections. The website is still designed for speed and SEO first, with AI added where it saves your customers time or your team work.",
  },
  {
    q: "Do you develop AI SaaS applications?",
    a: "Yes. We build AI SaaS products end to end, including the AI workflow, accounts and teams, subscription billing, usage limits, an admin console and the marketing website.",
  },
  {
    q: "Can you build a startup MVP?",
    a: "Yes. We help founders choose the smallest version of the product worth launching, then build it in a few weeks on production quality code that can grow into the full product.",
  },
  {
    q: "Do you develop websites for car dealerships?",
    a: "Yes. We build dealership websites with inventory feeds, fast vehicle search, gallery first vehicle pages, finance calculators, test drive booking and lead routing.",
  },
  {
    q: "Can you build real estate websites?",
    a: "Yes. We build property listing platforms and agency websites with listing feeds, advanced search, property pages, agent profiles and inquiry management. Our portfolio includes DOMUS Imobiliare, a real estate agency website with apartment listings and a guided inquiry form.",
  },
  {
    q: "Do you work with doctors and law firms?",
    a: "Yes. We build clinic, practice and doctor websites with treatment pages and appointment booking, and law firm websites with practice area pages, attorney profiles and consultation booking. Content in regulated fields is always reviewed by your own professionals.",
  },
  {
    q: "Can you redesign an existing website?",
    a: "Yes. We start with an audit of what currently works, including pages that rank and convert, then redesign and rebuild with a redirect plan so your search visibility is protected.",
  },
  {
    q: "What technologies do you use?",
    a: "Our main stack is Next.js, React, TypeScript and Tailwind CSS, with Node.js and PostgreSQL or PHP, Laravel and MySQL on the backend. We also work with Vue 3 and Nuxt. For AI we use the OpenAI, Anthropic Claude and Google Gemini APIs, and we usually deploy on Vercel.",
  },
  {
    q: "How long does a project take?",
    a: "A landing page or startup website usually takes two to four weeks. A custom business website takes four to eight weeks. MVPs take four to ten weeks, and SaaS platforms or larger AI applications take longer. You get a timeline with the proposal, before any commitment.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. Qyvora works remotely with clients worldwide, with a focus on the United States, United Kingdom, Canada, Australia, Europe and the UAE. We are based in Dhaka, Bangladesh (GMT+6), communicate in English, and schedule calls in your time zone.",
  },
  {
    q: "How does your pricing work?",
    a: "Most projects are priced as a fixed quote based on an agreed scope, with payments split into milestones. Ongoing work such as maintenance or new features can be billed monthly. We send a written proposal after a free discovery conversation.",
  },
  {
    q: "Do you provide ongoing maintenance?",
    a: "Yes. After launch we offer monthly support for updates, security patches, performance checks, content changes and new features. Many clients continue with us after the first release.",
  },
];

/** Verified Fiverr reviews of work delivered by the studio. Quotes are verbatim. */
export const testimonials = [
  {
    quote: "Outstanding service. He understood my requirements and quickly delivered exactly what I requested. No modifications or updates needed. The first version was perfect.",
    author: "tmillergra",
  },
  {
    quote: "We have used him a couple of times now and he continues to deliver timely and perfectly. Will use again!",
    author: "jineshjpatel",
  },
  {
    quote: "Fast response. Great communication. It was great work and very fast.",
    author: "nataliamorel6",
  },
  {
    quote: "Everything was professional. I would love working with him again.",
    author: "star202",
  },
] as const;

export const processSteps = [
  { title: "Discovery and Strategy", body: "We learn your business, customers and goals, and agree what success looks like.", output: "Goals and success measures" },
  { title: "Research and Planning", body: "Competitors, content, search demand and technical requirements turned into a clear scope.", output: "Scope, sitemap and timeline" },
  { title: "UX and UI Design", body: "Wireframes for structure, then visual design for key screens on desktop and mobile.", output: "Approved designs" },
  { title: "Architecture and Technology", body: "Stack, data model, integrations and hosting chosen for your needs, not our habits.", output: "Technical plan" },
  { title: "Development and Integration", body: "Weekly working releases you can click through, with integrations connected as we go.", output: "Working software every week" },
  { title: "Quality Assurance", body: "Testing on real devices and browsers, accessibility checks and form and link testing.", output: "Tested release candidate" },
  { title: "SEO and Performance", body: "Metadata, structured data, redirects, image optimization and Core Web Vitals checks.", output: "Search ready, fast pages" },
  { title: "Launch and Ongoing Support", body: "Careful go live, analytics and search console setup, then monthly support if you want it.", output: "Live product and handover" },
] as const;

export const reasons = [
  { title: "Experienced frontend engineering", body: "More than eight years building production interfaces means fewer surprises, fewer bugs and fewer rebuilds." },
  { title: "AI integrated development", body: "We build AI features into products and use AI in our own workflow to research, test and ship faster, with a person reviewing every result." },
  { title: "Premium UI and UX", body: "Thoughtful design makes your business look established and makes every task easier for your customers." },
  { title: "Business focused decisions", body: "Every page and feature is tied to a goal such as inquiries, signups or hours saved, so budget goes where it pays back." },
  { title: "Modern architecture", body: "Next.js, TypeScript and clean component systems mean your product stays maintainable as it grows." },
  { title: "Performance and SEO built in", body: "Fast, server rendered pages and correct structured data help you get found and keep visitors from leaving." },
  { title: "Scalable solutions", body: "Start with what you need now, on foundations that support the next phase without starting over." },
  { title: "Direct communication", body: "You talk to the person building your product. No account managers passing messages along." },
  { title: "International collaboration", body: "Clear written updates, calls scheduled in your time zone and a working style used to remote teams since 2020." },
] as const;
