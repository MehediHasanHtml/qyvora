"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto max-w-2xl px-4 py-32 text-center">
      <p className="font-mono text-sm text-accent-text">Something went wrong</p>
      <h1 className="heading mt-4 text-h1 text-fg">We could not load this page.</h1>
      <p className="mt-5 text-lede text-muted">Please try again. If the problem continues, email us and we will help directly.</p>
      <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
        <button
          type="button"
          onClick={reset}
          className="inline-flex h-12 items-center justify-center rounded-full btn-aurora px-6 text-[0.95rem] font-medium"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex h-12 items-center justify-center rounded-full border border-line-strong px-6 text-[0.95rem] font-medium text-fg hover:bg-surface-2"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
