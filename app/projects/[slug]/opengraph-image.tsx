import { renderOg, ogSize } from "@/lib/og";
import { getProject, projects } from "@/lib/content/projects";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Qyvora Studio project case study";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  return renderOg({ eyebrow: `Case study · ${p?.industry ?? "Project"}`, title: p ? `${p.name}: ${p.tagline}` : "Qyvora Studio project" });
}
