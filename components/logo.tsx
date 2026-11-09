import Link from "next/link";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={cn("size-8", className)}>
      <defs>
        <linearGradient id="qy-aurora" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#685EF7" />
          <stop offset="0.55" stopColor="#00B7BF" />
          <stop offset="1" stopColor="#E0B100" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="url(#qy-aurora)" />
      <circle cx="15.2" cy="15.2" r="7.2" fill="none" stroke="#fff" strokeWidth="2.6" />
      <path d="M18.6 18.6 L24.2 24.2" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="15.2" cy="15.2" r="1.6" fill="#fff" opacity="0.85" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="font-display text-[1.05rem] font-semibold tracking-tight text-fg">
        Qyvora{" "}<span className="font-normal text-muted min-[1200px]:max-xl:sr-only">Studio</span>
      </span>
    </Link>
  );
}
