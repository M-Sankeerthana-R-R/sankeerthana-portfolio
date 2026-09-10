import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import { projects, getProject, getAdjacentProjects } from "@/data/projects";
import CaseStudySection from "@/components/CaseStudySection";
import DriveVideoPlayer from "@/components/DriveVideoPlayer";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.tagline,
    openGraph: { title: project.name, description: project.tagline },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { next } = getAdjacentProjects(slug);

  return (
    <article className="mx-auto max-w-(--container-content) px-6 py-14 sm:py-20">
      <Link
        href="/#work"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
      >
        <ArrowLeft size={14} aria-hidden="true" />
        All work
      </Link>

      <header className="mt-8 max-w-2xl">
        <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-accent-bright)]">
          {project.domain} · {project.period} · {project.format}
        </p>
        <h1 className="mt-3 text-3xl sm:text-5xl font-medium tracking-tight text-balance">
          {project.name}
        </h1>
        <p className="mt-4 text-lg text-[var(--color-muted)]">{project.tagline}</p>

        {project.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border-strong)] px-4 py-2.5 text-sm text-[var(--color-ink)] hover:border-[var(--color-accent)] transition-colors"
              >
                {link.kind === "github" ? (
                  <Code2 size={15} aria-hidden="true" />
                ) : (
                  <ExternalLink size={15} aria-hidden="true" />
                )}
                {link.label}
              </a>
            ))}
          </div>
        )}
        {project.links.some((l) => l.note) && (
          <p className="mt-3 text-xs text-[var(--color-faint)] max-w-md">
            {project.links.find((l) => l.note)?.note}
          </p>
        )}
      </header>

      <div className="mt-14">
        <CaseStudySection index="01" title="Problem">
          <p className="text-[15px] leading-relaxed text-[var(--color-muted)]">
            {project.problem}
          </p>
        </CaseStudySection>

        <CaseStudySection index="02" title="Product">
          <ul className="flex flex-col gap-3">
            {project.product.map((p) => (
              <li key={p} className="text-[15px] leading-relaxed text-[var(--color-muted)]">
                {p}
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection index="03" title="My contribution">
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-xs uppercase tracking-wide text-[var(--color-faint)]">
                Team / project
              </p>
              <p className="mt-1.5 text-[15px] leading-relaxed text-[var(--color-muted)]">
                {project.contribution.team}
              </p>
            </div>
            <div className="border-l-2 border-[var(--color-accent)] pl-4">
              <p className="text-xs uppercase tracking-wide text-[var(--color-accent-bright)]">
                My contribution
              </p>
              <p className="mt-1.5 text-[15px] leading-relaxed text-[var(--color-ink)]">
                {project.contribution.mine}
              </p>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection index="04" title="How it works">
          <ul className="flex flex-col gap-3">
            {project.architecture.map((a) => (
              <li key={a} className="text-[15px] leading-relaxed text-[var(--color-muted)] flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] shrink-0" aria-hidden="true" />
                {a}
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection index="05" title="Tech stack">
          <ul className="flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <li
                key={t}
                className="font-[family-name:var(--font-mono)] text-xs px-2.5 py-1.5 rounded border border-[var(--color-border)] text-[var(--color-muted)]"
              >
                {t}
              </li>
            ))}
          </ul>
        </CaseStudySection>

        {project.media && project.media.length > 0 && (
          <CaseStudySection index="06" title="Demo">
            <div className="flex flex-col gap-6">
              {project.media.map((m) => (
                <DriveVideoPlayer
                  key={m.driveFileId}
                  driveFileId={m.driveFileId}
                  label={m.label}
                  caption={m.caption}
                />
              ))}
            </div>
          </CaseStudySection>
        )}

        {project.outcome && (
          <CaseStudySection index="07" title="Outcome">
            <p className="text-[15px] leading-relaxed text-[var(--color-muted)]">
              {project.outcome}
            </p>
          </CaseStudySection>
        )}
      </div>

      <div className="mt-4 pt-8 border-t border-[var(--color-border)]">
        <p className="text-xs leading-relaxed text-[var(--color-faint)] max-w-2xl">
          <span className="text-[var(--color-muted)] font-medium">Sourcing note — </span>
          {project.sourceNote}
        </p>
      </div>

      <div className="mt-14 pt-8 border-t border-[var(--color-border)]">
        <Link
          href={`/work/${next.slug}`}
          className="group flex items-center justify-between gap-4"
        >
          <div>
            <p className="text-xs text-[var(--color-faint)]">Next project</p>
            <p className="mt-1 text-xl font-medium text-[var(--color-ink)]">{next.name}</p>
          </div>
          <ArrowUpRight
            size={22}
            className="text-[var(--color-faint)] group-hover:text-[var(--color-accent-bright)] transition-colors"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}
