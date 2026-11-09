import Link from "next/link";
import { ButtonLink, Container } from "@/components/ui/primitives";

export const metadata = { title: "Page not found", robots: { index: false } };

const helpful = [
  { label: "All services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/blog" },
];

export default function NotFound() {
  return (
    <section aria-labelledby="nf-title" className="relative -mt-16 overflow-hidden pt-16">
      <div aria-hidden className="absolute inset-0 bg-glow" />
      <div aria-hidden className="absolute inset-0 grid-lines" />
      <Container size="md" className="relative py-32 text-center">
        <p className="font-mono text-sm text-accent-text">Error 404</p>
        <h1 id="nf-title" className="heading mt-4 text-h1 text-fg">
          This page could not be found.
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-lede text-muted">
          The link may be outdated or the page may have moved. These pages are a good place to continue.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg" arrow>
            Back to home
          </ButtonLink>
          <ButtonLink href="/contact" size="lg" variant="secondary">
            Contact us
          </ButtonLink>
        </div>
        <ul className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {helpful.map((h) => (
            <li key={h.href}>
              <Link href={h.href} className="text-muted underline underline-offset-4 hover:text-fg">
                {h.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
