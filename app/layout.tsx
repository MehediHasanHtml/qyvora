import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter, Sora } from "next/font/google";
import "./globals.css";

import { siteConfig } from "@/lib/site";
import { getMenus } from "@/lib/nav";
import { graph, organizationSchema, websiteSchema } from "@/lib/schema";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Analytics } from "@/components/analytics";
import { JsonLd } from "@/components/json-ld";

// Same pairing as the live site: Inter for text, Sora for display headings.
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], display: "swap", variable: "--font-sora" });
// Mono is only used for small code-like tags, so it is not preloaded.
const geistMono = Geist_Mono({ subsets: ["latin"], display: "swap", variable: "--font-geist-mono", preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Qyvora Studio | AI Development and Digital Product Agency",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: `${siteConfig.url}/about` }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Technology",
  formatDetection: { telephone: false },
  verification: { google: siteConfig.analytics.googleSiteVerification },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  icons: { icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/logo.svg", type: "image/svg+xml" }] },
};

export const viewport: Viewport = {
  themeColor: "#030408",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${sora.variable} ${geistMono.variable} dark`}
    >
      <body className="min-h-dvh bg-bg font-sans text-fg antialiased">
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-white"
          >
            Skip to content
          </a>
          <SiteHeader menus={getMenus()} />
          <main id="main">{children}</main>
          <SiteFooter />
          <Analytics gaId={siteConfig.analytics.gaId} />
        </ThemeProvider>
        <JsonLd data={graph(organizationSchema(), websiteSchema())} />
      </body>
    </html>
  );
}
