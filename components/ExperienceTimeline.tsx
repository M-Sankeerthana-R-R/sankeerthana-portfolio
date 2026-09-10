import Link from "next/link";
import { experience } from "@/data/experience";

export default function ExperienceTimeline() {
  return (
    <ol className="flex flex-col">
      {experience.map((entry, i) => (
        <li
          key={entry.org}
          className={`grid sm:grid-cols-[220px_1fr] gap-3 sm:gap-8 py-8 ${
            i !== 0 ? "border-t border-[var(--color-border)]" : ""
          }`}
        >
          <div>
            <p className="font-medium text-[var(--color-ink)]">{entry.org}</p>
            <p className="text-sm text-[var(--color-muted)] mt-1">{entry.role}</p>
            <p className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--color-faint)] mt-2">
              {entry.period}
            </p>
            <p className="text-xs text-[var(--color-faint)] mt-1">{entry.context}</p>
          </div>
          <div>
            <ul className="flex flex-col gap-2.5">
              {entry.bullets.map((b) => (
                <li key={b} className="text-[15px] leading-relaxed text-[var(--color-muted)]">
                  {b}
                </li>
              ))}
            </ul>
            {entry.projectSlug && (
              <Link
                href={`/work/${entry.projectSlug}`}
                className="inline-block mt-4 text-sm text-[var(--color-accent-bright)] hover:underline"
              >
                Related case study
              </Link>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
