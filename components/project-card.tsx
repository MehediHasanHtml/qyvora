import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { engagementLabel, type Project } from "@/lib/content/projects";
import { Tag } from "@/components/ui/primitives";
import { Visual } from "@/components/visuals/mockups";
import { cn } from "@/lib/utils";

export function ProjectMedia({ project, priority, sizes }: { project: Project; priority?: boolean; sizes: string }) {
  if (project.image) {
    return (
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={project.image.width}
        height={project.image.height}
        sizes={sizes}
        preload={priority}
        fetchPriority={priority ? "high" : undefined}
        loading={priority ? "eager" : "lazy"}
        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
      />
    );
  }
  return (
    <div className="flex h-full items-center justify-center bg-surface-2 p-6 dot-grid">
      <div className="w-full max-w-sm">
        <Visual kind="code" />
      </div>
    </div>
  );
}

export function EngagementBadge({ project, className }: { project: Project; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-bg/80 px-2.5 py-1 text-[0.68rem] font-medium text-fg backdrop-blur",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "size-1.5 rounded-full",
          project.engagement === "client" ? "bg-success" : project.engagement === "concept" ? "bg-muted" : "bg-accent-text",
        )}
      />
      {engagementLabel[project.engagement]}
    </span>
  );
}

export function ProjectCard({ project, priority, large }: { project: Project; priority?: boolean; large?: boolean }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-line-strong">
      <div className={cn("relative overflow-hidden border-b border-line bg-surface-2", large ? "aspect-[16/8.5]" : "aspect-[16/9]")}>
        <ProjectMedia
          project={project}
          priority={priority}
          sizes={large ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"}
        />
        <EngagementBadge project={project} className="absolute left-3 top-3" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow">
          {project.industry} · {project.year}
        </p>
        <h3 className="mt-3 text-xl font-semibold tracking-tight text-fg">
          <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0">
            {project.name}
          </Link>
          <span className="font-normal text-muted">: {project.tagline}</span>
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{project.overview}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <div className="relative z-10 mt-auto flex items-center gap-5 pt-6 text-sm">
          <span className="inline-flex items-center gap-1.5 font-medium text-fg">
            Read case study <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-track="project_live_preview"
              className="inline-flex min-h-6 items-center gap-1 py-1 text-muted transition-colors hover:text-fg"
            >
              Live preview <ArrowUpRight aria-hidden className="size-3.5" />
              <span className="sr-only">of {project.name} (opens in a new tab)</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
