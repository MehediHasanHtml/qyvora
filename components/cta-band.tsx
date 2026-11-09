import { Clock, Globe2, MessageSquare } from "lucide-react";
import { ButtonLink, Container } from "@/components/ui/primitives";
import { siteConfig } from "@/lib/site";

export function CtaBand({
  title = "Have an Ambitious Idea? Let's Build Something Exceptional.",
  body = "Whether you're launching a startup, developing an AI product, scaling a SaaS business, or transforming your company's digital presence, Qyvora is ready to help.",
  primaryHref = "/contact",
  primaryLabel = "Let's Discuss Your Project",
}: {
  title?: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden border-t border-line py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 bg-glow" />
      <div aria-hidden className="absolute inset-0 grid-lines opacity-60" />
      <Container size="lg" className="relative text-center">
        <h2 id="cta-title" className="heading mx-auto max-w-4xl text-h2 text-fg">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lede text-muted">{body}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href={primaryHref} size="lg" arrow track="cta_start_project">
            {primaryLabel}
          </ButtonLink>
          <ButtonLink href={siteConfig.callCta.href} size="lg" variant="secondary" track="cta_discovery_call">
            Schedule a Discovery Call
          </ButtonLink>
        </div>
        <ul className="mx-auto mt-12 flex max-w-2xl flex-col items-center justify-center gap-4 text-sm text-muted sm:flex-row sm:gap-8">
          <li className="inline-flex items-center gap-2">
            <Clock aria-hidden className="size-4 text-accent-text" /> Reply {siteConfig.contact.responseTime}
          </li>
          <li className="inline-flex items-center gap-2">
            <MessageSquare aria-hidden className="size-4 text-accent-text" /> Free discovery conversation
          </li>
          <li className="inline-flex items-center gap-2">
            <Globe2 aria-hidden className="size-4 text-accent-text" /> Clients worldwide
          </li>
        </ul>
      </Container>
    </section>
  );
}
