import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

// Route segment config — this image is generated at build time.
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0f",
          backgroundImage:
            "radial-gradient(900px 600px at 78% 12%, rgba(124,92,255,0.30), transparent 60%), radial-gradient(700px 500px at 12% 96%, rgba(217,70,239,0.18), transparent 55%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          color: "#fafafa",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 16,
              backgroundImage: "linear-gradient(135deg, #7c5cff, #d946ef)",
              fontSize: 34,
              fontWeight: 800,
              color: "#fff",
            }}
          >
            Q
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#e5e5ea",
            }}
          >
            Qyvora Studio
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div
            style={{
              display: "flex",
              fontSize: 74,
              lineHeight: 1.05,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              maxWidth: 980,
            }}
          >
            AI Frontend Engineer for world-class startups & global brands.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              lineHeight: 1.4,
              color: "#a1a1aa",
              maxWidth: 920,
            }}
          >
            High-conversion websites & SaaS interfaces — Next.js · Tailwind v4 ·
            conversion-first design.
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", fontSize: 26, color: "#c4b5fd", fontWeight: 600 }}>
            qyvora.vercel.app
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {["AI Startups", "SaaS", "Real Estate"].map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  fontSize: 22,
                  color: "#d4d4d8",
                  border: "1px solid rgba(255,255,255,0.18)",
                  borderRadius: 999,
                  padding: "8px 20px",
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
