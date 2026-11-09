import * as React from "react";
import { cn } from "@/lib/utils";

/** Building blocks for coded interface illustrations. Decorative only. */

export function Frame({
  url,
  className,
  bodyClassName,
  children,
}: {
  url?: string;
  className?: string;
  bodyClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-line-strong/80 bg-bg-elevated shadow-pop", className)}>
      <div className="flex items-center gap-2 border-b border-line bg-surface/80 px-3 py-2">
        <span className="flex gap-1.5">
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
        </span>
        {url ? (
          <span className="mx-auto truncate rounded-md bg-surface-2 px-3 py-0.5 font-mono text-[0.6rem] text-muted">{url}</span>
        ) : null}
      </div>
      <div className={cn("p-4", bodyClassName)}>{children}</div>
    </div>
  );
}

export function Line({ w = "100%", className }: { w?: string; className?: string }) {
  return <span className={cn("block h-1.5 rounded-full bg-line-strong/80", className)} style={{ width: w }} />;
}

export function Box({ className, children }: { className?: string; children?: React.ReactNode }) {
  return <div className={cn("rounded-lg border border-line bg-surface", className)}>{children}</div>;
}

export function Dot({ className }: { className?: string }) {
  return <span className={cn("inline-block size-1.5 rounded-full bg-accent-text", className)} />;
}

export function Pill({ children, active, className }: { children: React.ReactNode; active?: boolean; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[0.6rem] font-medium",
        active ? "border-accent-line bg-accent-soft text-accent-text" : "border-line bg-surface-2 text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Illustration({ label, className, children }: { label: string; className?: string; children: React.ReactNode }) {
  return (
    <div role="img" aria-label={label} className={cn("relative select-none", className)}>
      {children}
    </div>
  );
}
