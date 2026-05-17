export type Post = {
  slug: string;
  title: string;
  description: string;
  category: "AI Frontend" | "Conversion" | "Real Estate" | "Performance" | "SEO + AEO";
  date: string;       // ISO yyyy-mm-dd
  readMinutes: number;
  /** Plain-text body — rendered as paragraphs split on \n\n. Markdown-free for now. */
  body: string;
};

export const posts: Post[] = [
  {
    slug: "ai-startup-website-checklist",
    title: "The 2026 AI Startup Website Checklist (Investor-Ready in 14 Days)",
    description:
      "What every AI startup landing page needs in 2026 to close pilots, raise rounds and earn ChatGPT citations.",
    category: "AI Frontend",
    date: "2026-04-21",
    readMinutes: 9,
    body: `Every AI founder we work with asks the same question: "What does the landing page actually need to look like in 2026?"

After shipping launch sites for 30+ AI startups in the last 18 months, here's the working checklist we use internally.

## 1. A hero that answers, not describes

The old SaaS hero formula ("Powerful X for modern Y") is dead for AI. Your hero needs to answer the buyer's job-to-be-done in one sentence, with a measurable promise. "Cut support resolution time by 73%" beats "AI for customer success" every time.

## 2. An animated UI mockup, not a stock illustration

Investors and buyers want to see the product. A 6-second animated mockup of your actual UI — agent responding, dashboard updating, citations appearing — converts better than any stock illustration. Use Framer Motion for production, GSAP only when you need a scroll-locked sequence.

## 3. Streaming chat or agent demo above the fold

If your product has a chat surface, embed a 10-second demo that actually streams. Use the OpenAI/Anthropic SDK on the edge with a token-rate-limited public demo route. Conversion lift in our tests: +52% over a static "Watch demo" video.

## 4. Schema + AEO from day one

You won't be in Google's classical index for months. But ChatGPT, Perplexity, Claude and Gemini are indexing your site weekly. Structured FAQ schema, semantic chunking and entity-rich copy get you cited inside AI answers before SEO kicks in. Today this matters more than backlinks.

## 5. Pricing that doesn't hide

The single most common AI startup mistake: hiding pricing behind "Talk to sales." Unless your ACV is six figures, transparent token-tier pricing converts 3-4× better. Show the math: tokens, requests, seats. Buyers compare to OpenAI's pricing page — give them apples to apples.

## 6. Three social proofs above the fold

Logos, a single hero metric ("$1.4M ARR in 90 days"), and one short customer quote. That's the trio.

## 7. Lighthouse 95+ is table stakes

Your competitors are shipping on Vercel + Next.js 16 with edge runtime. A 4-second LCP signals "small team, not serious." LCP < 1.2s, INP < 200ms, CLS < 0.05. No exceptions.

## The 14-day reality

If you have copy, brand and product screenshots: 14 days to investor-ready. If you don't: add 5 days for positioning and copywriting. We've shipped this exact sequence for 30+ AI startups — it works.

Want help shipping yours? We have 3 AI startup launch slots open for Q3.`,
  },
  {
    slug: "seo-vs-aeo-2026",
    title: "SEO vs AEO in 2026: Why You Need Both",
    description:
      "How Answer Engine Optimization works alongside classical SEO — and the exact schema, entity and content patterns that get you cited inside ChatGPT, Google AI Overview, Perplexity and Claude.",
    category: "SEO + AEO",
    date: "2026-04-04",
    readMinutes: 11,
    body: `In 2024 SEO meant "rank on Google." In 2026, half of high-intent queries never touch a search results page — they happen inside ChatGPT, Google AI Overview, Perplexity, Claude and Gemini.

This is why every premium site we ship now is engineered for two things simultaneously: classical SEO and Answer Engine Optimization (AEO).

## What's actually different about AEO

Classical SEO ranks pages. AEO gets your brand quoted inside an AI's answer. The mechanics:

- Schema markup (FAQ, Service, Organization, Article)
- Semantic chunking — short, declarative paragraphs an LLM can lift verbatim
- Entity-rich copy mapped to Knowledge Graph nodes
- Conversational headings that match how people ask AIs questions
- E-E-A-T markup (Experience, Expertise, Authoritativeness, Trust)

The crawl rules are different too. GPTBot, ClaudeBot, PerplexityBot, Google-Extended and OAI-SearchBot each respect robots.txt differently. We allow all of them — opting out of AI crawlers is opting out of the next decade of search.

## The minimum viable AEO stack

1. JSON-LD with FAQ + Service + Organization schema on every key page
2. One declarative answer paragraph per H2/H3 (the AI cites these)
3. Entity-rich anchor text and internal linking
4. Author / studio bios with Person schema
5. Topical hub-and-spoke structure (one pillar page, 5-10 spoke pages per topic)

Done well, this gets you cited inside ChatGPT and Perplexity within 30-60 days of launch.

## What still works for classical SEO

Everything you already know: technical SEO, Core Web Vitals, internal linking, topical authority, backlinks. The difference is that AEO compounds faster for new sites. SEO is a 6-12 month game. AEO can show citations within weeks if the schema is clean.

Both matter. Ship both.`,
  },
  {
    slug: "tailwind-v4-design-system",
    title: "Building a Production Tailwind v4 Design System",
    description:
      "Tailwind v4's CSS-first config changes everything. Here's the exact @theme structure, OKLCH color system and @utility patterns we use to ship premium agency-grade websites.",
    category: "AI Frontend",
    date: "2026-03-18",
    readMinutes: 13,
    body: `Tailwind v4 is the biggest leap since v3. The biggest unlock isn't performance — it's that you can finally ship a real design system without a tailwind.config.js.

Here's the architecture we use on every Mehedi project.

## CSS-first @theme

Everything lives in globals.css. The @theme block defines tokens that Tailwind compiles into utility classes. No JS config, no plugins for color manipulation, no PostCSS dance.

## OKLCH color system, not hex

OKLCH is perceptually uniform. Equal lightness steps look equal. Mixing colors works correctly. Dark-mode variants are predictable. We define one primary color in light mode (oklch(58% 0.22 280)) and shift only the L channel in dark mode (oklch(72% 0.22 285)) — chroma and hue stay constant.

## @utility for compound patterns

Custom utilities like .glass, .text-gradient, .grid-bg and .bg-mesh are defined with @utility. They compose into Tailwind's classlist as if they were built-in.

## Light glassmorphism, not heavy

Glassmorphism is overused. We use it for the navbar pill, premium card hovers and the final-CTA shell — that's it. Light blur (14-20px), saturated backdrop (160-180%), 1px border at 90% opacity. Anything more screams 2021.

## Aurora gradients on a 200% canvas

The signature Mehedi gradient is a 135deg three-stop OKLCH gradient (violet → cyan → amber) painted on a 200% background-size canvas and animated with background-position. The result feels alive without being distracting.

## The one rule

Premium feels like restraint. Build a strong system, then use 10% of what it can do. The most premium sites we ship use 4 colors, 3 type sizes and 2 motion patterns.`,
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
