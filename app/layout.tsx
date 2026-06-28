import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { siteConfig } from "@/lib/site";
import { allSchemas } from "@/lib/jsonld";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { cn } from "@/lib/utils";

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const display = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  // Variable font — full weight range available for display headings
});

const SITE_URL = siteConfig.url;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.legalName,
  authors: [{ name: siteConfig.author, url: SITE_URL }],
  creator: siteConfig.author,
  publisher: siteConfig.legalName,
  keywords: [
    "AI frontend developer",
    "AI startup website development",
    "landing page redesign agency",
    "premium frontend developer",
    "real estate website developer",
    "modern website redesign",
    "frontend optimization service",
    "conversion-focused web design",
    "Next.js agency",
    "Tailwind CSS expert",
    "AI UI developer",
    "SaaS frontend developer",
    "website performance optimization",
    "AEO optimization",
    "ChatGPT visibility optimization",
  ],
  category: "Technology",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: siteConfig.legalName,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    // og:image is injected automatically by app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    creator: "@mehedihtml",
    // twitter:image is injected automatically by app/opengraph-image.tsx
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(sans.variable, display.variable, "font-sans")}>
      <meta name="google-site-verification" content="82ue5EW2szjeY7ggNNWrmr7cHtIIcmTb2njiAvZQRVw" />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-9V8F8DMBRH"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9V8F8DMBRH');
        `}
      </Script>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main" className="relative">{children}</main>
          <Footer />
        </ThemeProvider>
        <JsonLd data={allSchemas} id="ld-main" />
      </body>
    </html>
  );
}
