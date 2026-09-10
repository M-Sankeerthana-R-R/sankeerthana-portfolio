"use client";

import { useState } from "react";
import { ExternalLink, ChevronDown } from "lucide-react";
import { certifications } from "@/data/certifications";

export default function CertificationSection() {
  const [showAll, setShowAll] = useState(false);
  const featured = certifications.filter((c) => c.featured);
  const rest = certifications.filter((c) => !c.featured);

  return (
    <div>
      <ul className="grid sm:grid-cols-3 gap-4">
        {featured.map((c) => (
          <li
            key={c.title}
            className="border border-[var(--color-border)] rounded-lg p-5 flex flex-col gap-2"
          >
            <p className="text-sm font-medium text-[var(--color-ink)] leading-snug">
              {c.title}
            </p>
            <p className="text-xs text-[var(--color-muted)]">{c.issuer}</p>
            <div className="mt-auto flex items-center justify-between pt-3">
              <span className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--color-faint)]">
                {c.date}
              </span>
              {c.driveViewUrl && (
                <a
                  href={c.driveViewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-faint)] hover:text-[var(--color-accent-bright)] transition-colors"
                  aria-label={`View ${c.title}`}
                >
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>

      {rest.length > 0 && (
        <div className="mt-6">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
            aria-expanded={showAll}
          >
            {showAll ? "Show less" : `View all ${certifications.length} certifications`}
            <ChevronDown
              size={14}
              className={`transition-transform ${showAll ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </button>

          {showAll && (
            <ul className="mt-4 flex flex-col divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
              {rest.map((c) => (
                <li key={c.title} className="py-3 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-[var(--color-ink)]">{c.title}</p>
                    <p className="text-xs text-[var(--color-faint)] mt-0.5">
                      {c.issuer} · {c.date}
                    </p>
                  </div>
                  {c.driveViewUrl && (
                    <a
                      href={c.driveViewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-faint)] hover:text-[var(--color-accent-bright)] transition-colors shrink-0"
                      aria-label={`View ${c.title}`}
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
