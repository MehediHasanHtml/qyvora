import Link from "next/link";
import { Mail } from "lucide-react";
import { Logo } from "@/components/logo";
import { GithubIcon, LinkedinIcon, TwitterIcon, FacebookIcon } from "@/components/icons/social";
import { serviceDivisions, industries } from "@/lib/content/pages";
import { siteConfig } from "@/lib/site";
import { CookieSettingsButton } from "@/components/analytics";

const company = [
  { label: "About Qyvora", href: "/about" },
  { label: "All Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  const featuredServices = serviceDivisions.flatMap((d) => d.pages.slice(0, 3));
  const socials = [
    { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
    { href: siteConfig.social.github, label: "GitHub", Icon: GithubIcon },
    { href: siteConfig.social.x, label: "X", Icon: TwitterIcon },
    { href: siteConfig.social.facebook, label: "Facebook", Icon: FacebookIcon },
  ].filter((s) => s.href);
  return (
    <footer className="relative border-t border-line bg-bg-elevated">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Logo />
            <p className="heading mt-8 max-w-sm text-[1.65rem] leading-[1.1] text-fg">Building Better Digital Businesses, Worldwide.</p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              Qyvora Studio is an AI development and digital product agency. Our team designs and builds AI powered
              websites, web applications and SaaS platforms for ambitious businesses.
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              data-track="email_click"
              className="mt-6 inline-flex items-center gap-2 text-sm text-fg transition-colors hover:text-accent-text"
            >
              <Mail aria-hidden className="size-4" /> {siteConfig.contact.email}
            </a>
            <p className="mt-2 text-sm text-muted">
              Based in {siteConfig.base.city}, {siteConfig.base.country}. Working with clients worldwide.
            </p>
            {socials.length ? (
            <ul className="mt-6 flex items-center gap-2" aria-label="Social profiles">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} (opens in a new tab)`}
                    className="inline-flex size-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-fg"
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
            ) : null}
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <FooterColumn
              title="Services"
              links={featuredServices.map((p) => ({ label: p.name, href: `/${p.slug}` }))}
            />
            <FooterColumn title="Industries" links={industries.map((p) => ({ label: p.name, href: `/${p.slug}` }))} />
            <FooterColumn title="Company" links={company} />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Qyvora Studio. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/privacy-policy" className="hover:text-fg">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-fg">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <CookieSettingsButton className="hover:text-fg" />
            </li>
            <li>
              <a href="/sitemap.xml" className="hover:text-fg">
                Sitemap
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="eyebrow">{title}</p>
      <ul className="mt-5 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-fg/80 transition-colors hover:text-fg">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
