# Qyvora Studio: Delivery Report

Date: November 9, 2026. Covers the full rebuild of the Qyvora Studio website in this repository. Everything below was built and tested locally against a production build (`next build` and `next start`). Nothing has been deployed yet.

## 1. Completed pages (48 indexable)

| Group | Pages |
|---|---|
| Core | Home, About, Services, Solutions, Industries, Projects, Insights (blog), Contact, Privacy Policy, Terms and Conditions, custom 404, error page |
| AI services (5) | AI Website Development, AI Web Application Development, AI SaaS Development, AI Chatbot and Agent Development, AI Integration and Automation |
| Website services (5) | Custom Website, Startup Website, Landing Page, Website Redesign and Optimization, Next.js Development |
| SaaS and applications (3) | Custom Web Applications (dashboards, CRM, portals), SaaS Platform, MVP Development |
| Industries (7) | Car Dealerships, Automotive Businesses, Real Estate, Healthcare, Doctors and Specialists, Law Firms, Professional Services |
| Case studies (11) | Family Smile, DOMUS Imobiliare, AKORA Dental Clinic, Advokat Ivan Ivanov, Kottali Dental Practice, Advokat Hristiyan Boynin, My Birth Press, Digital Port, HRMS Dashboard, ReadyEcommerce, Qyvora Studio Website |
| Articles (7) | AI website cost, startup website checklist, car dealership website guide, real estate website features, choosing an AI agency, SEO and AEO, Tailwind v4 design systems |

## 2. Services implemented

Three divisions (AI Development, Website Development, SaaS and Applications) with 13 service pages, 7 industry pages and 4 audience solutions (startup founders, SaaS founders, AI entrepreneurs, established businesses). Each landing page has: a direct answer block, business outcomes, features, audience fit, a four step delivery plan, typical technology, related projects, FAQs, related services and a prefilled inquiry link.

## 3. Features implemented

- Sticky header with accessible mega menus for Services, Solutions and Industries (keyboard, Escape, outside click), and a mobile menu
- Dark and light themes with a persistent toggle (dark is the default)
- Coded interface illustrations for every service and industry (no stock images, no client JavaScript)
- Simple contact form: name, email, optional project type and message; validation, honeypot and minimum fill time; loading, error and real success states; prefill from `?type=` and `?intent=call`
- Email delivery through Web3Forms, sent from the browser; real error states, no fake success
- Google Analytics 4 that only loads after consent, with conversion events
- Breadcrumbs on all inner pages, article table of contents, author byline
- Permanent redirects from every old URL

## 4. Technologies used

Next.js 16.2 (App Router, static generation, Turbopack), React 19, TypeScript, Tailwind CSS v4, next/font (Inter, Sora, Geist Mono), next/image (AVIF and WebP), next/og, next-themes, lucide-react. Removed from use: Framer Motion, Base UI and shadcn components, which are no longer imported (the packages are still listed in `package.json` and can be removed).

## 5. SEO implementation

- Unique title, description and canonical URL on every page (verified by crawl: no duplicates, all descriptions 70 to 160 characters)
- Open Graph and Twitter cards; generated social images per service, industry, project and article
- One H1 per page (verified on all 44 pages)
- XML sitemap (44 URLs), robots.txt (all crawlers allowed, `/api/` excluded), generated `/llms.txt`
- Server rendered HTML for all content; FAQs use native details elements so answers are in the HTML
- Internal linking between services, industries, projects and articles (62 internal links checked, none broken)
- 10 legacy URLs redirect with 308 (permanent)
- Keyword map with one primary keyword per page: `docs/seo-keyword-map.md`
- hreflang intentionally not used, since there are no localized versions

## 6. Structured data

Connected JSON LD graph with stable `@id` references: Organization, WebSite, WebPage, AboutPage, ContactPage, CollectionPage, Service, OfferCatalog, BreadcrumbList, FAQPage, Blog, BlogPosting, CreativeWork and ItemList. No ratings, reviews or street address are included.

**Validation status:** all 88 JSON LD blocks across 44 pages parse as valid JSON. **Not yet run:** Google Rich Results Test and the Schema.org Validator, because they need a public URL. Run both after deployment. FAQ rich results are not expected for a commercial site.

## 7. Lighthouse scores (lab, local production build)

Measured on November 9, 2026 with Lighthouse 13.6 in headless Chrome against `next start` on localhost, after the pre launch fixes (static gradients instead of looping animations, high priority project images, list markup and tap target fixes).

| Page | Mobile perf | Desktop perf | Accessibility | Best practices | SEO |
|---|---|---|---|---|---|
| Home | 88 to 96 | 100 | 100 | 100 | 100 |
| About | 99 | 100 | 100 | 100 | 100 |
| Contact | 90 to 98 | 100 | 100 | 100 | 100 |
| Projects | 96 to 99 | 99 to 100 | 100 | 100 | 100 |
| Family Smile case study | 88 to 89 | 99 | 100 | 100 | 100 |
| Healthcare landing page | 97 to 99 | 100 | 100 | 100 | 100 |
| AI agency article | 100 | 100 | 100 | 100 | 100 |

Ranges show variation between runs on the same build. Before the fixes, Home on mobile scored 70 because five looping gradient animations repainted every frame. Measure again on the live URL with PageSpeed Insights, since Vercel's CDN usually scores higher than a local server.

## 8. Core Web Vitals

Lab values (mobile, simulated): LCP 0.9 to 1.5 s on most pages and about 3.4 s on case study pages (large screenshot under simulated slow 4G), TBT 80 to 490 ms, CLS 0 on every page. Desktop: LCP 0.3 to 0.9 s, TBT 0 to 20 ms, CLS 0.

**Field data is not available.** Real user Core Web Vitals (LCP, INP, CLS) only appear in Search Console and PageSpeed Insights after the site has enough traffic on its public URL.

## 9. Accessibility audit

- Semantic landmarks, skip link, one H1 per page, logical heading order
- Visible focus styles, keyboard operable menus, Escape to close, focus returned to the trigger
- Form labels, required markers, `aria-invalid` and `aria-describedby` errors, live error region, focus moved to the first invalid field
- Color contrast checked by Lighthouse in the dark theme; light theme tokens chosen for WCAG AA contrast
- Reduced motion respected for all animations
- Decorative illustrations exposed as single labeled images

A manual screen reader test (NVDA or VoiceOver) has not been done and is recommended.

## 10. Remaining issues and open items

1. **Contact form delivery.** Inquiries go through Web3Forms with the access key in `lib/contact.ts`. Send one test inquiry after deployment and confirm the email arrives.
2. **Project engagement labels.** All portfolio projects are labeled "Portfolio project" because client status was not confirmed. Change `engagement` to `client` in `lib/content/projects.ts` for any project you have permission to name as client work.
3. **Project screenshots are loaded from `api.mehedihtml.com`.** If that server goes down, the images break. Consider copying them into `public/projects/`.
4. **Discovery call booking** uses the inquiry form. Add a real Cal.com or Calendly link in `lib/site.ts` (`callCta`) when you have one.
5. **Mobile Lighthouse performance** is 88 to 94, below the 95 target (see section 7).
6. **Legal pages** are written to match how the site works, but they are not legal advice. Have them reviewed for your jurisdiction.
7. **Testimonial punctuation.** Two Fiverr quotes had dashes removed (replaced with a period and a comma) to meet the no dash rule. The wording is otherwise unchanged.
8. **Unused packages** (`framer-motion`, `@base-ui/react`, `shadcn`, `tw-animate-css`, `class-variance-authority`) can be removed with `pnpm remove`.
9. **Keyword volumes** in the keyword map are not filled in, since they have not been verified with a keyword tool.
10. **Pricing.** No prices are published.

## 11. Deployment instructions

1. Commit and push to the GitHub repository connected to Vercel.
2. In Vercel, optionally add `NEXT_PUBLIC_SITE_URL` (and `NEXT_PUBLIC_WEB3FORMS_KEY` if you want to override the form key) under Project Settings, then Environment Variables.
3. Redeploy. Then submit a test inquiry on the live site and confirm the email arrives.
4. If you move to a custom domain, set `NEXT_PUBLIC_SITE_URL`, add the domain in Vercel, and redirect the old `vercel.app` address to it.

## 12. Google Search Console setup

The existing verification tag (`google-site-verification`) is kept in the page head.

1. Open Search Console and confirm the `https://qyvora.vercel.app` property is verified. If you use a custom domain, add a Domain property and verify it with DNS.
2. Go to Sitemaps and submit `sitemap.xml`.
3. Use URL Inspection on the homepage and two or three service pages, then click Request Indexing.
4. Check the Pages report after a few days for redirect and indexing status of the old URLs.
5. Run the Rich Results Test and the Schema.org Validator on the homepage, a service page, a case study and an article.
6. Add the same site to Bing Webmaster Tools (it can import from Search Console).

## 13. Recommended next steps

1. Send a test inquiry on the live site and confirm it arrives through Web3Forms.
2. Confirm which projects can be labeled as client work, and ask those clients for a short testimonial and permission to share results.
3. Write the planned articles in the keyword map: AI process automation, healthcare website accessibility, law firm websites, doctor websites.
4. Build one real AI demo (for example, an assistant grounded in this site's content) to support the AI service pages with working proof.
5. Create company profiles (LinkedIn, GitHub, X, Facebook) for Qyvora Studio and add them in `lib/site.ts` under `social`. They then appear in the footer and structured data automatically.
6. Review Search Console monthly by page and country. Record impressions, clicks, position and inquiries per landing page.
7. Earn links through genuine contributions: guest articles, open source work, directory profiles on Clutch or GoodFirms with real reviews.
