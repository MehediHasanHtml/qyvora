import { Plus } from "lucide-react";
import type { Faq } from "@/lib/content/types";
import { cn } from "@/lib/utils";

/** Native details elements: accessible, zero JavaScript and fully crawlable. */
export function FaqList({ items, className }: { items: Faq[]; className?: string }) {
  return (
    <div className={cn("divide-y divide-line border-y border-line", className)}>
      {items.map((item) => (
        <details key={item.q} className="group py-1">
          <summary className="flex items-start justify-between gap-6 py-5 text-left">
            <h3 className="text-[1.05rem] font-medium leading-snug text-fg">{item.q}</h3>
            <span
              aria-hidden
              className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-transform duration-300 group-open:rotate-45 group-open:border-accent-line group-open:text-accent-text"
            >
              <Plus className="size-3.5" />
            </span>
          </summary>
          <p className="max-w-3xl pb-6 pr-12 leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
