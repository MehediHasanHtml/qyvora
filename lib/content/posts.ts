export const blogCategories = [
  "AI Development",
  "AI SaaS and Applications",
  "Startup Development",
  "Website Design",
  "Automotive Technology",
  "Real Estate Technology",
  "Healthcare Websites",
  "Business Automation",
  "SEO and Performance",
  "Development Case Studies",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export type Post = {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  published: string;
  updated: string;
  /**
   * Lightweight markdown: "## " and "### " headings, "- " bullets,
   * "1. " numbered items, **bold** and [links](/path).
   */
  body: string;
  relatedServices: string[];
};

export const posts: Post[] = [
  {
    slug: "ai-website-development-cost",
    title: "How Much Does AI Website Development Cost?",
    description:
      "What drives the cost of an AI powered website, the ongoing costs most people forget, and how to scope a first version that gives a return without overspending.",
    category: "AI Development",
    published: "2026-11-09",
    updated: "2026-11-09",
    relatedServices: ["ai-website-development", "ai-chatbot-development"],
    body: `"How much does an AI website cost?" has no single answer, because "AI website" can mean very different things. A marketing site with a small assistant is one project. A site where AI generates personalized proposals from your pricing rules is another. This guide explains what actually drives the price so you can compare quotes on equal terms.

## The short answer

An AI website costs the price of a good website plus the price of each AI feature. The website part covers strategy, design, development, content and SEO. The AI part covers designing the feature, connecting it to your data, testing its answers and adding guardrails. Then there is a monthly running cost for model usage and hosting.

The biggest mistake is pricing only the build. A cheap build with weak testing can cost more later in wrong answers, lost trust and rework.

## What drives the build cost

- **Number and type of pages.** A five page startup site and a fifty page service business site are very different jobs before any AI is added.
- **How much your AI must know.** Answering from ten website pages is simple. Answering from thousands of documents with permissions is a real engineering project.
- **Whether the AI takes actions.** Answering questions is cheaper than booking appointments, updating a CRM or sending emails, because actions need confirmation steps, error handling and logging.
- **Integrations.** Each connection to a CRM, booking tool or database adds design, development and testing time.
- **Quality expectations.** A regulated business needs stricter testing and review than a hobby project.
- **Design ambition.** Custom visual design, illustration and animation take more time than a clean, simple layout.

## Ongoing costs to budget for

**Model usage.** AI providers charge per amount of text processed. For most business websites this is modest, but it grows with traffic and with long documents. You should own the provider account so the bill and the data are yours.

**Hosting and services.** Hosting, a vector database if you use one, email delivery and monitoring tools each have their own plans, many with free tiers at low volume.

**Improvement time.** The first weeks after launch reveal questions nobody predicted. Budget a few hours a month to review conversations and improve content and instructions.

## How to keep the cost under control

1. Start with one AI feature that solves a clear, frequent problem.
2. Use your existing content as the knowledge source before creating new material.
3. Set usage limits from day one so a spike in traffic cannot surprise you.
4. Launch on one page or channel, measure, then expand.
5. Ask every agency to quote the same scope in writing so quotes are comparable.

## Questions to ask before you hire

- Who owns the code, the AI provider account and the data?
- How will you test that the assistant gives correct answers?
- What happens when the AI does not know the answer?
- What will this cost me each month at my current traffic?
- How can I change the AI provider later?

If an agency cannot answer these clearly, the price is not the most important number to worry about.

## How we price

At Qyvora we quote a fixed price after a short discovery conversation, based on the pages, features and integrations you actually need. If your goals fit a smaller first phase, we will tell you. You can [request a quote](/contact) or read more about our [AI website development service](/ai-website-development).`,
  },
  {
    slug: "ai-startup-website-checklist",
    title: "What Should a Startup Website Include? A Practical Checklist",
    description:
      "A clear checklist for founders launching a startup website: the sections that matter, what to leave out, and how to make a young company look credible.",
    category: "Startup Development",
    published: "2026-04-21",
    updated: "2026-11-09",
    relatedServices: ["startup-website-development", "landing-page-development"],
    body: `A startup website has one job early on: help the right visitor understand what you do quickly enough to take the next step. Everything on this list supports that job. Anything that does not can wait.

## 1. A one sentence explanation

Visitors should know what your product does and who it is for within a few seconds. Write it as plainly as you would explain it to a friend. "Scheduling software for physiotherapy clinics" beats "Reimagining the future of care."

## 2. A real look at the product

Show the actual product: a screenshot, a short screen recording or an interactive demo. Abstract illustrations make visitors work harder to understand what they would get. If the product is not ready, show the core screen as a realistic design and say it is in development.

## 3. The problem, in your customer's words

Describe the problem the way customers describe it in calls and emails. When visitors recognize their own words, they trust that you understand them.

## 4. How it works

Three or four simple steps are usually enough. This section answers the quiet question "is this going to be hard to set up?"

## 5. Honest proof

Early startups rarely have famous logos, and that is fine. Use what is true:

- Quotes from pilot users, with permission
- The founders' relevant experience
- Numbers you can stand behind, such as waitlist size
- Partners or programs you are genuinely part of

Never invent logos or testimonials. Investors and customers check, and being caught costs far more than having a modest proof section.

## 6. Pricing or a clear way to start

If pricing is simple, show it. If it is custom, explain what it depends on and how to get a quote. Hidden pricing with no explanation creates friction.

## 7. One primary call to action

Pick one main action, such as "Start free trial", "Join the waitlist" or "Book a demo", and repeat it consistently. A secondary option is fine, but five competing buttons is not.

## 8. Answers to common objections

A short FAQ handles questions about security, setup time, integrations and contracts before they become reasons to leave.

## 9. Speed and mobile quality

A startup site that loads slowly or breaks on a phone signals a team that does not pay attention to detail. Aim for fast loading on mobile networks, readable text without zooming and buttons that are easy to tap.

## 10. Foundations for search and analytics

Set up page titles, descriptions, a sitemap, structured data and analytics events from day one. It is much easier than adding them later, and it means you learn from your first visitors.

## What can wait

Careers pages with no open roles, long company history, complex animations and a large blog can all wait until you have a reason for them.

## Need help?

We design and build [startup websites](/startup-website-development) and focused [landing pages](/landing-page-development) on a modern, fast stack. [Tell us about your launch](/contact).`,
  },
  {
    slug: "car-dealership-website-features",
    title: "How to Build a Car Dealership Website That Sells",
    description:
      "The features that matter on a car dealership website, from inventory feeds and vehicle pages to finance calculators, test drive booking and lead routing.",
    category: "Automotive Technology",
    published: "2026-11-09",
    updated: "2026-11-09",
    relatedServices: ["car-dealership-website-development", "automotive-website-development"],
    body: `Most car buyers research online long before they visit a showroom. Your website is where they decide whether you are worth the trip. This guide covers what a dealership website needs.

## Start with the inventory, not the home page

The inventory is the product. Before design starts, answer three questions:

1. Where does vehicle data come from? Usually a dealer management system or an inventory provider that offers an API or a scheduled feed.
2. How often does it change? Sold vehicles must disappear quickly, or buyers lose trust.
3. Who owns photo quality? Great photos sell cars. The website should display them well, but someone must take them well.

## Search and filters that feel instant

Shoppers filter by make, model, year, price, mileage, body style, fuel type and transmission. Filters should update results immediately, remember choices when the shopper goes back, and work comfortably with a thumb on a phone.

## Vehicle detail pages are where leads happen

A strong vehicle detail page puts the photo gallery first, then price, key specs and the main actions. Include:

- A large, swipeable gallery with fast loading
- Price, mileage, year, transmission and fuel clearly visible
- Full features and options list
- Links to vehicle history reports where you provide them
- A contact bar that stays visible while scrolling
- Similar vehicles to keep shoppers browsing

## Finance calculators, done honestly

A monthly payment calculator helps buyers judge affordability. Make inputs clear, label results as estimates, and link to your finance application. Avoid showing rates you cannot offer.

## Test drive and appointment booking

Let shoppers request a test drive for a specific vehicle at a specific time. The request should arrive with the stock number, the vehicle name and the customer's details, so the salesperson can confirm quickly.

## Lead routing and CRM

Every form should send the lead to the right person within seconds. Many dealer CRMs accept leads in a standard automotive lead format or through an API. Fast response matters, because buyers often contact several dealers at once.

## Speed and search visibility

Dealer sites carry a lot of images, so performance needs care: modern image formats, correct sizes for each screen, and lazy loading below the fold. Server rendered vehicle pages with structured data and clean URLs help search engines understand your stock.

## A practical checklist

- Automatic inventory sync with sold units removed
- Fast filters that work on mobile
- Gallery first vehicle pages with a persistent contact option
- Finance estimate tool clearly labeled as an estimate
- Test drive and appointment requests
- Lead routing to people and CRM
- Location, hours and directions on every page footer
- Analytics events for calls, forms and bookings

If you are planning a new dealership website, see our [car dealership website development](/car-dealership-website-development) service or [start a conversation](/contact).`,
  },
  {
    slug: "real-estate-website-features",
    title: "What Features Should a Real Estate Website Have?",
    description:
      "The essential features of a real estate website for agencies and brokers: listing feeds, property search, listing pages, agent profiles and inquiry management.",
    category: "Real Estate Technology",
    published: "2026-11-09",
    updated: "2026-11-09",
    relatedServices: ["real-estate-website-development"],
    body: `Property seekers browse a lot of listings before they contact anyone. A real estate website wins when it makes that browsing fast and pleasant, and makes contacting an agent effortless. Here are the features that matter most, drawn from building real estate websites such as [DOMUS Imobiliare](/projects/domus-imobiliare).

## Automatic listing feeds

Manually updating listings leads to stale data. Connect the website to your listing source so new properties appear and sold or let properties disappear automatically. In the US that usually means an MLS or IDX feed. In other markets it is often a CRM or portal export.

## Search that matches how people look

Essential filters are location, price, property type, bedrooms and bathrooms. Useful extras include size, parking, outdoor space, pet friendly and move in date for rentals. Two details make a big difference:

- **Instant results.** Filtering should update without a full page reload.
- **Saved state.** Going back to results should keep the filters and scroll position.

## Listing pages that answer questions

The listing page is where interest becomes an inquiry. Put the decisions first: price, location, size, bedrooms and the best photos. Then add the full description, floor plan, features, map and nearby amenities. Keep an inquiry or viewing request button visible as visitors scroll.

## Agent profiles

People buy from people. Agent profiles with a photo, a short biography, languages spoken, areas covered and current listings help visitors choose who to contact.

## Inquiry and lead management

Each inquiry should go to the listing agent with the property details attached, and into your CRM. A short form with name, contact details, preferred viewing time and a message is usually enough.

## Saved searches and alerts

For active buyers, saved searches and email alerts bring them back when a matching property appears. This needs an account system, so it is often a second phase feature.

## Area guides

Neighborhood or area pages help buyers who know where they want to live but not which property. They also give search engines useful, original content to index.

## Performance on mobile

Listing sites are image heavy. Lazy loading, responsive image sizes and a mobile first layout keep the experience fast on phones, where most property searches happen.

## Structured data and SEO

Clean URLs, server rendered listing pages and structured data help search engines understand your listings and area pages.

To plan your platform, see our [real estate website development](/real-estate-website-development) service or [send us your project details](/contact).`,
  },
  {
    slug: "how-to-choose-an-ai-development-agency",
    title: "How to Choose an AI Development Agency",
    description:
      "A practical guide to choosing an AI development partner: the questions to ask, warning signs to watch for, and how to compare proposals fairly.",
    category: "AI SaaS and Applications",
    published: "2026-11-09",
    updated: "2026-11-09",
    relatedServices: ["ai-web-application-development", "ai-saas-development"],
    body: `Almost every development agency now offers AI services. Some have deep experience. Many have added the word to their website. Here is how to tell the difference and choose a partner who will deliver something that works in production.

## Look for product thinking, not only model knowledge

Connecting to an AI model is the easy part. The hard parts are deciding what the AI should do, designing an interface people trust, handling errors, controlling cost and measuring quality. Ask the agency to describe how they would approach your problem before they talk about models.

## Ask how they test quality

This is the most revealing question. A strong answer mentions collecting real examples, defining what a good result looks like, running those examples after every change, and reviewing real conversations after launch. A weak answer is "we write good prompts."

## Check what they have actually built

Ask to see working software, not only slides. Be wary of portfolios full of impressive results with no names, links or detail. A smaller portfolio of real, verifiable work is worth more than a long list of claims.

## Understand who owns what

You should own:

- The code, in your own repository
- The AI provider accounts and API keys
- Your data and any data generated by the system
- Hosting and domain accounts

If an agency wants to keep these, ask why.

## Ask about data and privacy

Which providers will process your data? Is it used for training? Where is it stored? Can sensitive information be removed before it reaches a model? A good partner answers clearly and puts it in writing.

## Compare proposals on scope, not only price

Ask each agency to describe the first release in detail: the user journeys, integrations, testing approach and what is explicitly not included. Two quotes for "an AI chatbot" can describe completely different amounts of work.

## Warning signs

- Guaranteed results such as specific accuracy, rankings or revenue
- No plan for what happens when the AI is wrong
- Vague answers about monthly running costs
- Pressure to sign quickly
- Testimonials and logos you cannot verify

## Good signs

- They suggest a smaller first phase than you expected
- They ask about your users and process before your budget
- They explain tradeoffs between providers honestly
- They show real, working examples
- You talk directly with the people who will build it

## How we work

At Qyvora, you work directly with the designers and engineers building your product. Read about our [AI web application development](/ai-web-application-development) and [AI SaaS development](/ai-saas-development) services, or [book a discovery call](/contact?intent=call).`,
  },
  {
    slug: "seo-vs-aeo-2026",
    title: "SEO and AEO: How to Be Found in Google and in AI Answers",
    description:
      "How search optimization and answer engine optimization work together, and the practical steps that help your business appear in Google and AI answers.",
    category: "SEO and Performance",
    published: "2026-04-04",
    updated: "2026-11-09",
    relatedServices: ["nextjs-development-agency", "website-redesign"],
    body: `People now find businesses in two ways: through search results and through answers from AI assistants such as Google's AI Overviews, ChatGPT, Perplexity, Gemini and Copilot. The good news is that the same foundations help with both.

## What is AEO?

Answer engine optimization, or AEO, means making your content easy for AI systems to understand, trust and cite when they answer a question. Classic SEO helps your pages rank in search results. AEO helps your information appear inside generated answers. They overlap heavily, because most answer engines rely on search indexes and on the same signals of quality.

## There are no secret tricks

Be skeptical of anyone selling special techniques to get into AI answers. Answer engines change constantly, and nobody can guarantee placement. What consistently helps is useful, clear, accurate content on a technically sound website.

## Technical foundations

- **Server rendered HTML** so crawlers see your full content without running scripts
- **Fast loading** and stable layout on mobile
- **Clean URLs** with one canonical version of each page
- **XML sitemap** and a robots file that does not block important crawlers by mistake
- **Structured data** that accurately describes your organization, services and articles
- **Descriptive titles and meta descriptions** unique to each page

## Content that answers questions

Answer engines look for clear, direct answers. Practical ways to provide them:

1. Use headings that match real questions customers ask.
2. Answer the question in the first paragraph under the heading, then add detail.
3. Write specific facts instead of vague claims.
4. Keep your business information consistent everywhere it appears.
5. Show who wrote the content and why they are qualified.

## Entities and consistency

AI systems build an understanding of who you are from many sources. Use the same business name, description, founder name and links across your website, social profiles and directories. Structured data with consistent identifiers helps connect these signals.

## Original experience

Content anyone could write is easy to replace. Content based on real projects, real decisions and real lessons is not. Case studies and practical guides from your own experience are among the most valuable things you can publish.

## Measure what you can

Use Google Search Console to track impressions, clicks and queries. Watch for traffic from AI assistants in your analytics referrals. Track inquiries by landing page. Rankings and citations move slowly, so review trends monthly rather than daily.

We build websites with these foundations included. See our [Next.js development](/nextjs-development-agency) and [website redesign](/website-redesign) services.`,
  },
  {
    slug: "tailwind-v4-design-system",
    title: "Building a Production Design System with Tailwind CSS v4",
    description:
      "How we structure design tokens, themes and components with Tailwind CSS v4 so a website stays consistent, accessible and easy to extend.",
    category: "Website Design",
    published: "2026-03-18",
    updated: "2026-11-09",
    relatedServices: ["nextjs-development-agency", "custom-website-development"],
    body: `Tailwind CSS v4 moved configuration into CSS. That makes it simpler to build a real design system, where colors, type and spacing are defined once and used everywhere. Here is the structure we use, including on this website.

## Start with semantic tokens

Instead of using raw colors such as violet 600 throughout components, define tokens that describe purpose: background, surface, line, foreground, muted text and accent. Components use the purpose, and themes decide the actual color.

## Themes by swapping values

With semantic tokens, a dark and light theme are two sets of values for the same names. Components never need to know which theme is active. This is how this site supports both themes with no duplicated component styles.

## Map tokens into Tailwind

Tailwind v4's theme block maps your CSS variables to utility classes. Once mapped, a class such as bg surface or text muted uses the current theme's value automatically.

## A deliberate type scale

Define a small set of sizes for display headings, section headings, body text and labels, using fluid sizing so they scale smoothly between phone and desktop. Fewer sizes create a calmer, more premium result.

## Accessible contrast from the start

Check every text and background pair against WCAG contrast guidelines when you choose tokens, not after the site is built. Accent colors in particular often need a lighter version for text on dark backgrounds.

## Utilities for repeated patterns

Patterns used many times, such as a card surface or a label style, can be defined once as custom utilities. Keep the list short. If everything becomes a custom utility, you lose the benefits of the system.

## Motion with restraint

Define a few animations for specific purposes, and disable them for visitors who prefer reduced motion. Motion should explain or guide, not decorate.

## The result

A small, well named system makes a website faster to build, easier to keep consistent and simpler for the next developer to understand. See how we apply it in our [custom website development](/custom-website-development) and [Next.js development](/nextjs-development-agency) work.`,
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function readingMinutes(body: string) {
  return Math.max(3, Math.round(body.split(/\s+/).length / 220));
}

export const sortedPosts = [...posts].sort((a, b) => (a.published < b.published ? 1 : -1));
