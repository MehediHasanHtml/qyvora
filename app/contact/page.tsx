import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Mail, Clock, Globe2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Mehedi — Start an AI Frontend Project",
  description:
    "Tell us about your AI startup launch, SaaS landing redesign, real-estate site or Next.js project. Reply within 12 hours. Booking 3 slots for Q3.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let's build something
            <span className="text-gradient animate-aurora">worth ranking #1</span>.
          </>
        }
        description="Tell me about your project — AI startup launch, SaaS redesign, real-estate site, or a focused frontend engagement. I reply within 12 hours."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        size="xl"
      />

      <Section className="!pt-4">
        <Container size="lg">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <aside className="lg:col-span-5">
              <div className="sticky top-28 space-y-5">
                <div className="rounded-3xl border border-border bg-surface p-7">
                  <div className="text-eyebrow text-muted-foreground">Direct channels</div>
                  <div className="mt-5 space-y-4">
                    <Link
                      href={`mailto:${siteConfig.contact.email}`}
                      className="flex items-start gap-3 rounded-2xl border border-border bg-surface-2/60 p-4 transition-colors hover:bg-surface-3"
                    >
                      <span className="inline-flex size-10 items-center justify-center rounded-xl bg-aurora text-white shadow-elev-sm">
                        <Mail className="size-4" />
                      </span>
                      <div>
                        <div className="text-eyebrow text-muted-foreground">Email</div>
                        <div className="mt-0.5 font-medium">{siteConfig.contact.email}</div>
                      </div>
                    </Link>

                    <Link
                      href={siteConfig.contact.bookingUrl}
                      target="_blank"
                      rel="noopener"
                      className="flex items-start gap-3 rounded-2xl border border-border bg-surface-2/60 p-4 transition-colors hover:bg-surface-3"
                    >
                      <span className="inline-flex size-10 items-center justify-center rounded-xl bg-aurora text-white shadow-elev-sm">
                        <Calendar className="size-4" />
                      </span>
                      <div>
                        <div className="text-eyebrow text-muted-foreground">Strategy call</div>
                        <div className="mt-0.5 font-medium">30-min free intro · book directly</div>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="rounded-3xl border border-border bg-surface p-7">
                  <div className="text-eyebrow text-muted-foreground">Response time</div>
                  <div className="mt-3 inline-flex items-center gap-2">
                    <Clock className="size-4 text-success" />
                    <span className="font-medium">Within 12 hours</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    I personally read and reply to every inquiry. No account managers.
                  </p>
                </div>

                <div className="rounded-3xl border border-border bg-surface p-7">
                  <div className="text-eyebrow text-muted-foreground">Worldwide</div>
                  <div className="mt-3 inline-flex items-center gap-2">
                    <Globe2 className="size-4 text-primary" />
                    <span className="font-medium">14 countries served</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {siteConfig.locations.map((l) => (
                      <span key={l} className="rounded-full border border-border bg-surface-2 px-2.5 py-0.5 text-xs text-muted-foreground">
                        {l}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-primary/30 bg-surface p-7 shadow-glow">
                  <div className="text-eyebrow text-primary">Q3 availability</div>
                  <div className="mt-3 font-display text-2xl font-semibold">3 slots remaining</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    For AI startup launches and SaaS redesigns. Real-estate sites are booked on a rolling basis.
                  </p>
                  <Button asChild variant="gradient" size="lg" className="mt-4 w-full">
                    <Link href={siteConfig.contact.bookingUrl} target="_blank" rel="noopener">
                      Reserve a slot
                    </Link>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
