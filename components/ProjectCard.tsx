import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const isFeature = project.tier === 1;
  const isCompact = project.tier === 3;

  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group block border border-[var(--color-border)] rounded-lg hover:border-[var(--color-border-strong)] transition-colors ${
        isFeature ? "p-8 sm:p-10" : isCompact ? "p-6" : "p-7"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--color-accent-bright)] mb-2">
            {project.homepageAccent}
          </p>
          <h3
            className={`font-medium tracking-tight text-[var(--color-ink)] ${
              isFeature ? "text-2xl sm:text-3xl" : isCompact ? "text-lg" : "text-xl"
            }`}
          >
            {project.name}
          </h3>
        </div>
        <ArrowUpRight
          size={isFeature ? 22 : 18}
          className="text-[var(--color-faint)] group-hover:text-[var(--color-accent-bright)] transition-colors shrink-0 mt-1"
          aria-hidden="true"
        />
      </div>

      <p
        className={`mt-3 text-[var(--color-muted)] ${
          isFeature ? "text-base max-w-lg" : "text-sm"
        }`}
      >
        {project.tagline}
      </p>

      {!isCompact && (
        <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
          {project.techStack.slice(0, isFeature ? 6 : 4).map((tech) => (
            <li
              key={tech}
              className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--color-faint)]"
            >
              {tech}
            </li>
          ))}
        </ul>
      )}
    </Link>
  );
}
