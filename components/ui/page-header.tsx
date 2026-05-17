import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type Breadcrumb = { label: string; href?: string };

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
  align = "left",
  size = "lg",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  breadcrumbs?: Breadcrumb[];
  children?: React.ReactNode;
  align?: "left" | "center";
  size?: "md" | "lg" | "xl";
  className?: string;
}) {
  const sizeClass = {
    md: "text-display-md",
    lg: "text-display-lg",
    xl: "text-display-xl",
  }[size];

  return (
    <section className={cn("relative isolate overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20", className)}>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      <Container>
        {breadcrumbs?.length ? (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
              {breadcrumbs.map((b, i) => (
                <li key={`${b.label}-${i}`} className="flex items-center gap-1.5">
                  {i > 0 ? <ChevronRight className="size-3.5 opacity-50" /> : null}
                  {b.href ? (
                    <Link href={b.href} className="hover:text-foreground">
                      {b.label}
                    </Link>
                  ) : (
                    <span className="text-foreground">{b.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <div
          className={cn(
            "flex flex-col gap-5",
            align === "center" ? "items-center text-center max-w-3xl mx-auto" : "items-start text-left max-w-3xl",
          )}
        >
          {eyebrow ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1 text-eyebrow text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary animate-pulse-glow" />
              {eyebrow}
            </span>
          ) : null}
          <h1 className={cn("font-display text-balance", sizeClass)}>{title}</h1>
          {description ? (
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">{description}</p>
          ) : null}
          {children ? <div className="mt-4 flex flex-wrap gap-3">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
