import * as React from "react";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import type { Crumb } from "@/lib/schema";

export function PageHero({
  crumbs,
  eyebrow,
  title,
  lede,
  children,
  aside,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  children?: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <section aria-labelledby="page-title" className="relative -mt-16 overflow-hidden border-b border-line pt-16">
      <div aria-hidden className="absolute inset-x-0 top-0 h-[520px] bg-glow fade-b" />
      <div aria-hidden className="absolute inset-x-0 top-0 h-[520px] grid-lines" />
      <Container className={`relative pb-16 pt-10 sm:pb-20 lg:pt-14 ${aside ? "grid items-end gap-12 lg:grid-cols-[1.3fr_1fr]" : ""}`}>
        <div className="max-w-4xl">
          <Breadcrumbs items={crumbs} />
          <Eyebrow className="mt-8">{eyebrow}</Eyebrow>
          <h1 id="page-title" className="heading mt-4 text-h1 text-fg">
            {title}
          </h1>
          {lede ? <p className="mt-6 max-w-2xl text-lede text-muted">{lede}</p> : null}
          {children ? <div className="mt-9 flex flex-col gap-3 sm:flex-row">{children}</div> : null}
        </div>
        {aside}
      </Container>
    </section>
  );
}
