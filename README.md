# Qyvora Studio website

Marketing and lead generation site for Qyvora Studio, an AI development and digital product studio.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4. Every page is statically generated.

## Run locally

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
pnpm start      # serve the production build
pnpm lint
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | No | Overrides the [Web3Forms](https://web3forms.com) access key in `lib/contact.ts`. The contact form sends inquiries to Web3Forms from the browser, which emails them to the inbox the key was created for. |
| `NEXT_PUBLIC_SITE_URL` | No | Canonical site URL. Defaults to `https://qyvora.vercel.app`. Set it when you move to a custom domain. |

## Where content lives

All copy is typed data, so pages stay consistent and adding a page is mostly a data change.

| What | File |
|---|---|
| Brand facts, contact, socials, analytics IDs | `lib/site.ts` |
| AI service pages | `lib/content/services-ai.ts` |
| Website service pages | `lib/content/services-web.ts` |
| SaaS and application pages | `lib/content/services-product.ts` |
| Industry pages | `lib/content/industries.ts` |
| Projects and case studies | `lib/content/projects.ts` |
| Blog articles | `lib/content/posts.ts` |
| Homepage FAQ, testimonials, process, reasons | `lib/content/home.ts` |
| Inquiry form options and validation | `lib/contact.ts` |

### Content rules

- **Only verifiable facts.** No invented clients, logos, statistics, awards or results.
- **Project labels.** Each project has an `engagement` field: `client`, `internal`, `self-initiated`, `concept` or `portfolio`. Use `client` only with the client's permission.
- **No dashes in visible copy.** Write "AI powered", not "AI-powered", and "2 to 4 weeks", not "2–4 weeks". URLs and code are exempt.
- **American English** spelling.

### Adding a service or industry page

Add an entry to the right file in `lib/content/`. The route, metadata, Open Graph image, JSON LD, sitemap entry, menus and `llms.txt` update automatically.

## SEO

- Per page metadata through `buildMetadata()` in `lib/seo.ts`
- Connected JSON LD (Organization, WebSite, WebPage, Service, BreadcrumbList, FAQPage, BlogPosting, CreativeWork) in `lib/schema.ts`
- `app/sitemap.ts`, `app/robots.ts`, and a generated `/llms.txt`
- Old URLs permanently redirect to their new pages (see `next.config.ts`)
- Keyword map: `docs/seo-keyword-map.md`

## Analytics and consent

Google Analytics 4 loads only after a visitor accepts the cookie banner. Conversion events: `generate_lead` (successful inquiry), `email_click`, `cta_*` button clicks and `project_live_preview`. Visitors can reopen the choice with "Cookie settings" in the footer.

## Deployment

The project deploys to Vercel with no extra configuration. Add the environment variables in the Vercel project settings, then redeploy.
