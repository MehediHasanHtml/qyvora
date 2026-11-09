import type { NextConfig } from "next";

/**
 * Old URLs from the previous version of the site. They are permanently
 * redirected so existing links and search rankings carry over.
 */
const legacyRedirects: { source: string; destination: string }[] = [
  { source: "/services/ai-startups", destination: "/ai-website-development" },
  { source: "/services/real-estate", destination: "/real-estate-website-development" },
  { source: "/ai-startup-website-development", destination: "/startup-website-development" },
  { source: "/landing-page-redesign", destination: "/landing-page-development" },
  { source: "/frontend-optimization-services", destination: "/website-redesign" },
  { source: "/tailwind-css-development", destination: "/nextjs-development-agency" },
  { source: "/case-studies", destination: "/projects" },
  { source: "/case-studies/:slug", destination: "/projects" },
  { source: "/privacy", destination: "/privacy-policy" },
  { source: "/terms-and-conditions", destination: "/terms" },
];

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Project screenshots are served from the founder's portfolio API.
      { protocol: "https", hostname: "api.mehedihtml.com", pathname: "/storage/**" },
    ],
  },
  async redirects() {
    return legacyRedirects.map((r) => ({ ...r, permanent: true }));
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
