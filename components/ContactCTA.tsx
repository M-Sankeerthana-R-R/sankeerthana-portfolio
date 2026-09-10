import { site } from "@/data/site";

export default function ContactCTA() {
  return (
    <div className="border border-[var(--color-border)] rounded-lg px-6 py-14 sm:px-14 sm:py-20 text-center">
      <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-balance max-w-xl mx-auto">
        Let&apos;s build something intelligent.
      </h2>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
        <a href={`mailto:${site.email}`} className="text-[var(--color-ink)] hover:text-[var(--color-accent-bright)] transition-colors">
          {site.email}
        </a>
        <a href={site.github} target="_blank" rel="noopener noreferrer" className="text-[var(--color-ink)] hover:text-[var(--color-accent-bright)] transition-colors">
          GitHub
        </a>
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--color-ink)] hover:text-[var(--color-accent-bright)] transition-colors">
          LinkedIn
        </a>
        <a href={site.resumeHref} target="_blank" className="text-[var(--color-ink)] hover:text-[var(--color-accent-bright)] transition-colors">
          Resume
        </a>
      </div>
    </div>
  );
}
