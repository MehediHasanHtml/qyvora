import { renderOg, ogSize } from "@/lib/og";
import { getLandingPage, landingPages } from "@/lib/content/pages";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Qyvora Studio service";

export function generateStaticParams() {
  return landingPages.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getLandingPage(slug);
  return renderOg({ eyebrow: page?.eyebrow ?? "Qyvora Studio", title: page?.h1 ?? "Qyvora Studio" });
}
