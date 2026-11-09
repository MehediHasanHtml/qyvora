import type { Metadata } from "next";
import { Clock, Globe2, MessageSquare, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, ids, webPageSchema, type Crumb } from "@/lib/schema";

const title = "Start a Project or Book a Discovery Call";
const description =
  "Tell Qyvora Studio about your AI product, website or SaaS project. Send a short message and get a reply within one business day.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/contact" });

const crumbs: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

const expectations = [
  {
    Icon: Clock,
    title: `Reply ${siteConfig.contact.responseTime}`,
    body: "Every inquiry is read by a senior member of our team, not an automated sales sequence.",
  },
  {
    Icon: MessageSquare,
    title: "Free discovery conversation",
    body: "A 30 minute call or written exchange to understand your goals before any proposal.",
  },
  {
    Icon: Globe2,
    title: "Working across time zones",
    body: `We are based in ${siteConfig.base.city} (${siteConfig.base.timezone}). Mornings suit Australia and the UAE, afternoons overlap with the UK and Europe, and evening slots cover North American mornings.`,
  },
  {
    Icon: ShieldCheck,
    title: "Clear terms",
    body: "Fixed scope proposals, milestone payments, and code and accounts owned by you from day one.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section aria-labelledby="page-title" className="relative -mt-16 overflow-hidden pt-16">
        <div aria-hidden className="absolute inset-x-0 top-0 h-[520px] bg-glow fade-b" />
        <div aria-hidden className="absolute inset-x-0 top-0 h-[520px] grid-lines" />
        <Container className="relative pb-24 pt-10 lg:pt-14">
          <Breadcrumbs items={crumbs} />
          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1.45fr] lg:gap-16">
            <div>
              <Eyebrow>Contact</Eyebrow>
              <h1 id="page-title" className="heading mt-4 text-h1 text-fg">
                Let&apos;s discuss your project.
              </h1>
              <p className="mt-6 text-lede text-muted">
                Send us a short message about what you need. We read every message and reply within one business
                day.
              </p>
              <ul className="mt-10 space-y-6">
                {expectations.map(({ Icon, title: t, body }) => (
                  <li key={t} className="flex gap-4">
                    <span aria-hidden className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-line bg-surface text-accent-text">
                      <Icon className="size-4" />
                    </span>
                    <div>
                      <h2 className="font-medium text-fg">{t}</h2>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ContactForm email={siteConfig.contact.email} />
            </div>
          </div>
        </Container>
      </section>
      <JsonLd
        data={graph(webPageSchema({ path: "/contact", name: title, description, type: "ContactPage", about: ids.organization }), breadcrumbSchema(crumbs))}
      />
    </>
  );
}
