"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUpRight, Menu, ChevronRight, Sparkles } from "lucide-react";
import { siteConfig, servicesList, seoLandingPages } from "@/lib/site";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 12));

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:pt-4"
    >
      <nav
        aria-label="Primary"
        className={cn(
          "flex w-full max-w-6xl items-center justify-between gap-4 rounded-full border px-2.5 py-2 transition-all duration-500",
          scrolled
            ? "glass-strong border-border-strong/60 shadow-elev-md"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="flex items-center pl-2">
          <Logo />
        </div>

        {/* Desktop NavigationMenu */}
        <div className="hidden lg:block">
          <DesktopNav pathname={pathname} />
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button asChild variant="gradient" size="sm" className="h-10 px-5">
            <Link href={siteConfig.primaryCta.href}>
              {siteConfig.primaryCta.label}
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <MobileNav pathname={pathname} />
        </div>
      </nav>
    </motion.header>
  );
}

function DesktopNav({ pathname }: { pathname: string }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-muted-foreground data-[state=open]:bg-surface-2 data-[state=open]:text-foreground">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[640px] grid-cols-2 gap-1 p-3">
              <div className="col-span-2 mb-1 rounded-xl bg-surface-2/60 p-4">
                <div className="text-eyebrow text-muted-foreground">Featured</div>
                <Link
                  href="/services/ai-startups"
                  className="mt-2 flex items-start gap-3 rounded-lg p-2 hover:bg-surface"
                >
                  <span className="mt-0.5 inline-flex size-9 items-center justify-center rounded-xl bg-aurora text-white shadow-elev-sm">
                    <Sparkles className="size-4" />
                  </span>
                  <div>
                    <div className="font-medium">AI Startup Solutions</div>
                    <p className="text-sm text-muted-foreground">
                      Investor-grade product surfaces, agent dashboards, RAG UIs.
                    </p>
                  </div>
                </Link>
              </div>
              {servicesList.slice(0, 8).map((s) => (
                <Link
                  key={s.slug}
                  href={`/services#${s.slug}`}
                  className="group rounded-lg p-3 transition-colors hover:bg-surface-2"
                >
                  <div className="text-sm font-medium group-hover:text-primary">
                    {s.name}
                  </div>
                  <div className="mt-0.5 text-xs text-muted-foreground line-clamp-1">
                    {s.short}
                  </div>
                </Link>
              ))}
              <Link
                href="/services"
                className="col-span-2 mt-1 inline-flex items-center justify-between rounded-xl border border-border bg-surface-2/60 px-4 py-3 text-sm font-medium hover:bg-surface-2"
              >
                See all services <ChevronRight className="size-4" />
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-muted-foreground data-[state=open]:bg-surface-2 data-[state=open]:text-foreground">
            Solutions
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[520px] grid-cols-2 gap-1 p-3">
              {seoLandingPages.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${p.slug}`}
                  className="rounded-lg p-3 transition-colors hover:bg-surface-2"
                >
                  <div className="text-sm font-medium">{p.h1}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground line-clamp-2">
                    {p.intent}
                  </div>
                </Link>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {[
          { label: "Case Studies", href: "/case-studies" },
          { label: "Blog", href: "/blog" },
          { label: "About", href: "/about" },
        ].map((item) => (
          <NavigationMenuItem key={item.href}>
            <Link
              href={item.href}
              className={cn(
                "inline-flex h-9 items-center justify-center rounded-md bg-transparent px-3 text-sm font-medium transition-colors hover:bg-surface-2 hover:text-foreground",
                pathname.startsWith(item.href) ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {item.label}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileNav({ pathname }: { pathname: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open menu"
        className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface/60 text-foreground"
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-sm bg-background border-border">
        <SheetHeader className="px-6 pt-6">
          <SheetTitle className="text-left text-eyebrow text-muted-foreground">
            Navigation
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-1 overflow-y-auto px-3 pb-6">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium transition-colors",
                  active ? "bg-surface-2 text-foreground" : "text-muted-foreground hover:bg-surface-2 hover:text-foreground",
                )}
              >
                {item.label}
                <ArrowUpRight className="size-4 opacity-60" />
              </Link>
            );
          })}

          <div className="mt-4 px-1">
            <div className="px-3 pb-2 text-eyebrow text-muted-foreground">SEO landing pages</div>
            <div className="space-y-1">
              {seoLandingPages.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${p.slug}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-surface-2 hover:text-foreground"
                >
                  {p.h1}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-4 border-t border-border pt-4 px-1">
            <Button asChild variant="gradient" size="lg" className="w-full">
              <Link href={siteConfig.primaryCta.href} onClick={() => setOpen(false)}>
                {siteConfig.primaryCta.label}
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
