import { siteConfig } from "@/lib/site";
import { serviceDivisions, industries } from "@/lib/content/pages";
import { projects, engagementLabel } from "@/lib/content/projects";
import { sortedPosts } from "@/lib/content/posts";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

/** A plain text summary for AI assistants and answer engines, generated from site content. */
export function GET() {
  const lines: string[] = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.description}`,
    "",
    "## Key facts",
    "",
    `- Type: AI development and digital product agency`,
    `- Team: ${siteConfig.team.summary}`,
    `- Based in: ${siteConfig.base.city}, ${siteConfig.base.country} (${siteConfig.base.timezone}). Works remotely with clients worldwide. No offices in other countries.`,
    `- Main markets: ${siteConfig.targetMarkets.join(", ")}`,
    `- Contact: ${siteConfig.contact.email}. Project inquiries: ${absoluteUrl("/contact")}`,
    "",
  ];
  for (const d of serviceDivisions) {
    lines.push(`## ${d.label}`, "");
    for (const p of d.pages) lines.push(`- [${p.name}](${absoluteUrl(`/${p.slug}`)}): ${p.description}`);
    lines.push("");
  }
  lines.push("## Industry solutions", "");
  for (const p of industries) lines.push(`- [${p.name}](${absoluteUrl(`/${p.slug}`)}): ${p.description}`);
  lines.push("", "## Projects", "");
  for (const p of projects)
    lines.push(`- [${p.name}](${absoluteUrl(`/projects/${p.slug}`)}): ${p.tagline}, ${p.industry}, ${p.year}. ${engagementLabel[p.engagement]}.`);
  lines.push("", "## Insights", "");
  for (const p of sortedPosts) lines.push(`- [${p.title}](${absoluteUrl(`/blog/${p.slug}`)}): ${p.description}`);
  lines.push("", "## Reference", "", `- Sitemap: ${absoluteUrl("/sitemap.xml")}`, "");

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
