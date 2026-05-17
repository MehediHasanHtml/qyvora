import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, withWordmark = true }: { className?: string; withWordmark?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Qyvora studio — AI-powered frontend studio, home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="relative inline-flex size-9 items-center justify-center rounded-xl bg-foreground text-background shadow-elev-md ring-1 ring-border-strong/40 overflow-hidden">
        <span aria-hidden className="absolute inset-0 bg-aurora opacity-90 animate-aurora" />
        <span className="relative font-display text-[0.95rem] font-bold tracking-tight text-white">
          Q
        </span>
      </span>
      {withWordmark ? (
        <span className="font-display text-[1.05rem] font-semibold tracking-tight">
          Qyvora<span className="text-muted-foreground">.studio</span>
        </span>
      ) : null}
    </Link>
  );
}
