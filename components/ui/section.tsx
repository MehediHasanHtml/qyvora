import * as React from "react";
import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  id?: string;
  bleed?: boolean;
};

export function Section({ id, className, bleed, children, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full",
        bleed ? "py-0" : "py-20 sm:py-28 lg:py-36",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center max-w-3xl mx-auto" : "items-start text-left max-w-3xl",
        className,
      )}
    >
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          <span className="size-1.5 rounded-full bg-primary animate-pulse-glow" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-display-lg font-display text-balance">{title}</h2>
      {description ? (
        <p className="text-lg text-muted-foreground text-pretty leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}
