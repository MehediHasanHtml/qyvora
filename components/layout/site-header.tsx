"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import type { Menus } from "@/lib/nav";
import { cn } from "@/lib/utils";

type MenuKey = "services" | "solutions" | "industries";

const items: { label: string; href: string; menu?: MenuKey }[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", menu: "services" },
  { label: "Solutions", href: "/solutions", menu: "solutions" },
  { label: "Industries", href: "/industries", menu: "industries" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader({ menus }: { menus: Menus }) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const navRef = React.useRef<HTMLDivElement>(null);
  const closeTimer = React.useRef<number | undefined>(undefined);

  // Close menus whenever the route changes.
  const [lastPath, setLastPath] = React.useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(null);
    setMobileOpen(false);
  }

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      if (open) {
        const trigger = document.getElementById(`trigger-${open}`);
        setOpen(null);
        trigger?.focus();
      }
      setMobileOpen(false);
    }
    function onClick(e: MouseEvent) {
      if (open && navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  React.useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  const hoverOpen = (key: MenuKey) => {
    window.clearTimeout(closeTimer.current);
    setOpen(key);
  };
  const hoverClose = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(null), 160);
  };

  return (
    <>
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled || open || mobileOpen
          ? "border-line bg-bg/85 backdrop-blur-md supports-[backdrop-filter]:bg-bg/75"
          : "border-transparent bg-transparent",
      )}
    >
      <div ref={navRef} className="relative" onMouseLeave={hoverClose}>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <Logo />

          <nav aria-label="Main" className="hidden min-[1200px]:block">
            <ul className="flex items-center gap-0.5 xl:gap-1">
              {items.map((item) =>
                item.menu ? (
                  <li key={item.label} onMouseEnter={() => hoverOpen(item.menu!)}>
                    <button
                      id={`trigger-${item.menu}`}
                      type="button"
                      aria-expanded={open === item.menu}
                      aria-controls={`menu-${item.menu}`}
                      onClick={() => setOpen(open === item.menu ? null : item.menu!)}
                      className={cn(
                        "inline-flex h-9 items-center gap-1 rounded-full px-2.5 text-sm transition-colors xl:px-3",
                        open === item.menu || isActive(pathname, item.href) ? "text-fg" : "text-muted hover:text-fg",
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        aria-hidden
                        className={cn("size-3.5 transition-transform duration-200", open === item.menu && "rotate-180")}
                      />
                    </button>
                  </li>
                ) : (
                  <li key={item.label} onMouseEnter={() => hoverClose()}>
                    <Link
                      href={item.href}
                      aria-current={isActive(pathname, item.href) ? "page" : undefined}
                      className={cn(
                        "inline-flex h-9 items-center rounded-full px-2.5 text-sm transition-colors xl:px-3",
                        isActive(pathname, item.href) ? "text-fg" : "text-muted hover:text-fg",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/contact"
              data-track="cta_start_project_header"
              className="hidden h-9 items-center gap-1.5 whitespace-nowrap rounded-full btn-aurora px-4 text-sm font-medium sm:inline-flex"
            >
              Start a Project
              <ArrowRight aria-hidden className="size-3.5" />
            </Link>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-full border border-line text-fg min-[1200px]:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="size-[18px]" /> : <Menu className="size-[18px]" />}
            </button>
          </div>
        </div>

        {/* Desktop mega menus */}
        <div className="hidden min-[1200px]:block" onMouseEnter={() => window.clearTimeout(closeTimer.current)}>
          <MegaPanel id="menu-services" open={open === "services"} label="Services">
            <div className="grid grid-cols-[1fr_1fr_1fr_0.9fr] gap-8">
              {menus.services.map((col) => (
                <div key={col.title}>
                  <Link href={col.href} className="eyebrow transition-colors hover:text-fg">
                    {col.title}
                  </Link>
                  <ul className="mt-4 space-y-1">
                    {col.links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="-mx-2 block rounded-md px-2 py-1.5 text-sm text-fg/85 transition-colors hover:bg-surface-2 hover:text-fg"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <MenuFeature
                title="Not sure what you need?"
                body="Tell us about the problem. We will recommend the simplest way to solve it."
                href="/contact?intent=call"
                cta="Schedule a Discovery Call"
                secondary={{ label: "View all services", href: "/services" }}
              />
            </div>
          </MegaPanel>

          <MegaPanel id="menu-industries" open={open === "industries"} label="Industries">
            <div className="grid grid-cols-[2fr_0.9fr] gap-8">
              <ul className="grid grid-cols-2 gap-x-6 gap-y-1">
                {menus.industries.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="group -mx-3 block rounded-lg px-3 py-3 transition-colors hover:bg-surface-2">
                      <span className="block text-sm font-medium text-fg">{l.label}</span>
                      <span className="mt-0.5 block text-xs text-muted">{l.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <MenuFeature
                title="Real industry work"
                body="See the dental, legal and real estate websites in our portfolio."
                href="/projects"
                cta="Explore Projects"
                secondary={{ label: "All industries", href: "/industries" }}
              />
            </div>
          </MegaPanel>

          <MegaPanel id="menu-solutions" open={open === "solutions"} label="Solutions">
            <ul className="grid grid-cols-4 gap-4">
              {menus.solutions.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block h-full rounded-xl border border-line bg-surface p-5 transition-colors hover:border-accent-line"
                  >
                    <span className="block text-sm font-medium text-fg">{l.label}</span>
                    <span className="mt-2 block text-xs leading-relaxed text-muted">{l.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </MegaPanel>
        </div>
      </div>
    </header>

      {/* Mobile menu sits outside the header: the header backdrop filter would trap a fixed child. */}
      <div
        id="mobile-menu"
        hidden={!mobileOpen}
        className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-t border-line bg-bg min-[1200px]:hidden"
      >
        <nav aria-label="Mobile" className="px-4 pb-10 pt-4 sm:px-6">
          <ul className="divide-y divide-line">
            <MobileLink href="/" label="Home" />
            <MobileGroup label="Services" href="/services" allLabel="All services">
              {menus.services.map((col) => (
                <div key={col.title} className="pt-3">
                  <p className="eyebrow">{col.title}</p>
                  <ul className="mt-2">
                    {col.links.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="block py-2 text-[0.95rem] text-fg/85">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </MobileGroup>
            <MobileGroup label="Solutions" href="/solutions" allLabel="All solutions">
              <ul className="pt-2">
                {menus.solutions.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="block py-2 text-[0.95rem] text-fg/85">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </MobileGroup>
            <MobileGroup label="Industries" href="/industries" allLabel="All industries">
              <ul className="pt-2">
                {menus.industries.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="block py-2 text-[0.95rem] text-fg/85">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </MobileGroup>
            <MobileLink href="/projects" label="Projects" />
            <MobileLink href="/blog" label="Insights" />
            <MobileLink href="/about" label="About" />
            <MobileLink href="/contact" label="Contact" />
          </ul>
          <div className="mt-8 grid gap-3">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full btn-aurora text-[0.95rem] font-medium"
            >
              Start a Project <ArrowRight aria-hidden className="size-4" />
            </Link>
            <Link
              href="/contact?intent=call"
              className="inline-flex h-12 items-center justify-center rounded-full border border-line-strong text-[0.95rem] font-medium text-fg"
            >
              Schedule a Discovery Call
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

function MegaPanel({ id, open, label, children }: { id: string; open: boolean; label: string; children: React.ReactNode }) {
  return (
    <div
      id={id}
      role="region"
      aria-label={`${label} menu`}
      hidden={!open}
      className="absolute inset-x-0 top-full border-b border-line bg-bg shadow-pop"
    >
      <div className="mx-auto max-w-7xl animate-fade-up px-8 py-8">{children}</div>
    </div>
  );
}

function MenuFeature({
  title,
  body,
  href,
  cta,
  secondary,
}: {
  title: string;
  body: string;
  href: string;
  cta: string;
  secondary: { label: string; href: string };
}) {
  return (
    <div className="flex flex-col justify-between rounded-xl border border-line bg-surface bg-glow p-5">
      <div>
        <p className="text-sm font-medium text-fg">{title}</p>
        <p className="mt-2 text-xs leading-relaxed text-muted">{body}</p>
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <Link href={href} className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-text hover:underline">
          {cta} <ArrowRight aria-hidden className="size-3.5" />
        </Link>
        <Link href={secondary.href} className="text-xs text-muted hover:text-fg">
          {secondary.label}
        </Link>
      </div>
    </div>
  );
}

function MobileLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="flex items-center justify-between py-4 text-lg text-fg">
        {label}
      </Link>
    </li>
  );
}

function MobileGroup({
  label,
  href,
  allLabel,
  children,
}: {
  label: string;
  href: string;
  allLabel: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <details className="group">
        <summary className="flex items-center justify-between py-4 text-lg text-fg">
          {label}
          <ChevronDown aria-hidden className="size-4 text-muted transition-transform group-open:rotate-180" />
        </summary>
        <div className="pb-4">
          {children}
          <Link href={href} className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent-text">
            {allLabel} <ArrowRight aria-hidden className="size-3.5" />
          </Link>
        </div>
      </details>
    </li>
  );
}
