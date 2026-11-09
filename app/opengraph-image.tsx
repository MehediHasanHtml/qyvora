import { renderOg, ogSize } from "@/lib/og";

export const alt = "Qyvora Studio: We build intelligent digital experiences for ambitious businesses";
export const size = ogSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return renderOg({
    eyebrow: "AI Development Agency",
    title: "We Build Intelligent Digital Experiences for Ambitious Businesses.",
  });
}
