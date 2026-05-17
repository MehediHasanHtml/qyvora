import Link from "next/link";
import { Globe2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/site";
import { GithubIcon, LinkedinIcon, TwitterIcon, DribbbleIcon, MailIcon } from "@/components/icons/social";

const groups = [
  {
    label: "Services",
    links: [
      { label: "Frontend Development", href: "#services" },
      { label: "AI Frontend", href: "#ai-startups" },
      { label: "Landing Page Redesign", href: "#services" },
      { label: "Website Optimization", href: "#services" },
      { label: "Real Estate Websites", href: "#real-estate" },
      { label: "AI Startup Websites", href: "#ai-startups" },
      { label: "Conversion Optimization", href: "#services" },
      { label: "Tailwind Refactoring", href: "#services" },
    ],
  },
  {
    label: "Solutions",
    links: [
      { label: "For AI Startups", href: "#ai-startups" },
      { label: "For SaaS Founders", href: "#services" },
      { label: "For Real Estate Brands", href: "#real-estate" },
      { label: "For Agencies", href: "#services" },
      { label: "Speed Optimization", href: "#services" },
      { label: "SEO + AEO", href: "#seo-aeo" },
    ],
  },
  {
    label: "Studio",
    links: [
      { label: "Process", href: "#process" },
      { label: "Case Studies", href: "#work" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    label: "Regions",
    links: [
      { label: "United States", href: "#contact" },
      { label: "United Kingdom", href: "#contact" },
      { label: "Dubai & UAE", href: "#contact" },
      { label: "Canada", href: "#contact" },
      { label: "Australia", href: "#contact" },
      { label: "Worldwide", href: "#contact" },
    ],
  },
];

const socials = [
  { icon: TwitterIcon, href: siteConfig.social.twitter, label: "Twitter" },
  { icon: GithubIcon, href: siteConfig.social.github, label: "GitHub" },
  { icon: LinkedinIcon, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: DribbbleIcon, href: siteConfig.social.dribbble, label: "Dribbble" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/40">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-2">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline}. Premium frontend and AI-powered websites for global startups
              and growth teams.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground transition-all hover:border-border-strong hover:text-foreground"
                >
                  <s.icon className="size-4" />
                </Link>
              ))}
            </div>
            <Link
              href={`mailto:${siteConfig.contact.email}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
            >
              <MailIcon className="size-4" />
              {siteConfig.contact.email}
            </Link>
          </div>

          {groups.map((g) => (
            <div key={g.label}>
              <h4 className="font-display text-sm font-semibold tracking-tight">{g.label}</h4>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Globe2 className="size-4" />
            Available worldwide — 14 countries served
          </p>
        </div>
      </Container>
    </footer>
  );
}
