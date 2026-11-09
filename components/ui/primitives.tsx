import * as React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  size = "xl",
  children,
}: {
  className?: string;
  size?: "md" | "lg" | "xl";
  children: React.ReactNode;
}) {
  const max = { md: "max-w-3xl", lg: "max-w-5xl", xl: "max-w-7xl" }[size];
  return <div className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", max, className)}>{children}</div>;
}

export function Section({
  id,
  className,
  children,
  labelledBy,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("relative py-20 [contain-intrinsic-size:auto_900px] [content-visibility:auto] sm:py-28", className)}>
      {children}
    </section>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("eyebrow inline-flex items-center gap-2", className)}>
      {children}
    </p>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Tag = "h2",
}: {
  id?: string;
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <Eyebrow className={cn(align === "center" && "justify-center")}>{eyebrow}</Eyebrow> : null}
      <Tag id={id} className={cn("heading mt-4 text-h2 text-fg", Tag === "h1" && "text-h1")}>
        {title}
      </Tag>
      {description ? <p className="mt-5 text-lede text-muted">{description}</p> : null}
    </div>
  );
}

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  arrow?: boolean;
  external?: boolean;
  track?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  arrow = false,
  external = false,
  track,
}: ButtonLinkProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[background-color,border-color,color] duration-200 ease-out",
    size === "md" ? "h-10 px-5 text-sm" : "h-12 px-6 text-[0.95rem]",
    variant === "primary" &&
      "btn-aurora",
    variant === "secondary" && "border border-line-strong bg-surface/40 text-fg hover:border-fg/30 hover:bg-surface-2",
    variant === "ghost" && "text-fg hover:text-accent-text",
    className,
  );
  const Icon = external ? ArrowUpRight : ArrowRight;
  const content = (
    <>
      {children}
      {arrow || external ? (
        <Icon aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      ) : null}
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} data-track={track}>
        {content}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={href} className={classes} data-track={track}>
      {content}
    </Link>
  );
}

export function TextLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent-text",
        className,
      )}
    >
      {children}
      <ArrowRight aria-hidden className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
    </Link>
  );
}

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-line bg-surface-2/60 px-2 py-0.5 font-mono text-[0.7rem] tracking-wide text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function IconTile({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-lg border border-accent-line bg-accent-soft text-accent-text [&_svg]:size-[18px]",
        className,
      )}
    >
      {children}
    </span>
  );
}
