import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/** Shared Open Graph image layout used by every route. */
export function renderOg({ eyebrow, title, footer = "qyvora.vercel.app" }: { eyebrow: string; title: string; footer?: string }) {
  const fontSize = title.length > 70 ? 54 : title.length > 45 ? 64 : 76;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#030408",
          backgroundImage:
            "radial-gradient(700px 420px at 100% 40%, rgba(0,183,191,0.16), transparent 70%), radial-gradient(800px 500px at 0% 100%, rgba(104,94,247,0.3), transparent 70%), radial-gradient(700px 380px at 50% 0%, rgba(224,177,0,0.1), transparent 70%), linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 100% 100%, 100% 100%, 48px 48px, 48px 48px",
          padding: "64px 72px",
          color: "#F0F2F5",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 13,
              backgroundImage: "linear-gradient(135deg, #685EF7 0%, #00B7BF 55%, #E0B100 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: 26, height: 26, borderRadius: 13, border: "4px solid #fff", display: "flex" }} />
          </div>
          <div style={{ fontSize: 28, fontWeight: 600, display: "flex" }}>
            Qyvora<span style={{ color: "#9B9EA6", marginLeft: 8, fontWeight: 400 }}>Studio</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: "#9C93FF", display: "flex" }}>{eyebrow}</div>
          <div style={{ fontSize, lineHeight: 1.08, letterSpacing: -2, fontWeight: 700, maxWidth: 1000, display: "flex" }}>{title}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#9B9EA6" }}>
          <span>AI Development and Digital Product Studio</span>
          <span>{footer}</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
