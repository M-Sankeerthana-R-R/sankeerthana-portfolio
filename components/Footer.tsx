import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-(--container-content) px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-[var(--color-faint)]">
          © {new Date().getFullYear()} {site.fullName}
        </p>
        <div className="flex gap-6 text-sm">
          <a
            href={`mailto:${site.email}`}
            className="text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
          >
            Email
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
