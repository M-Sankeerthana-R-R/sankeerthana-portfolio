import Link from "next/link";
import { site, focusAreas } from "@/data/site";
import SystemMap from "@/components/SystemMap";

export default function Hero() {
  return (
    <section className="mx-auto max-w-(--container-content) px-6 pt-16 sm:pt-24 pb-8">
      <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-accent-bright)] mb-5">
        {site.role}
      </p>
      <h1 className="text-4xl sm:text-6xl font-medium tracking-tight text-balance max-w-3xl">
        {site.name}
        <span className="block text-[var(--color-muted)] mt-1">
          {site.tagline}
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[var(--color-muted)]">
        {site.heroStatement}
      </p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {focusAreas.map((area) => (
          <li
            key={area}
            className="text-xs px-3 py-1.5 rounded-full border border-[var(--color-border)] text-[var(--color-muted)]"
          >
            {area}
          </li>
        ))}
      </ul>

      <div className="mt-9 flex flex-wrap items-center gap-4">
        <Link
          href="#work"
          className="inline-flex items-center rounded-md bg-[var(--color-accent)] px-5 py-3 text-sm font-medium text-white hover:bg-[var(--color-accent-bright)] transition-colors"
        >
          View my work
        </Link>
        <Link
          href={site.resumeHref}
          target="_blank"
          className="inline-flex items-center rounded-md border border-[var(--color-border-strong)] px-5 py-3 text-sm font-medium text-[var(--color-ink)] hover:border-[var(--color-accent)] transition-colors"
        >
          Resume
        </Link>
      </div>

      <div className="mt-16 sm:mt-20">
        <SystemMap />
      </div>
    </section>
  );
}
