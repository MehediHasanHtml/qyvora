import * as React from "react";
import { TrendingUp } from "lucide-react";

type Outcome = { value: string; label: string };

export function OutcomesGrid({ items }: { items: Outcome[] }) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
      {items.map((s) => (
        <div key={s.label} className="bg-surface px-6 py-7">
          <TrendingUp className="size-4 text-primary" />
          <div className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {s.value}
          </div>
          <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
