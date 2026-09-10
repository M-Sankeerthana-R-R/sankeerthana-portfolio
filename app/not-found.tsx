import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-(--container-content) px-6 py-32 text-center">
      <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-accent-bright)]">
        404
      </p>
      <h1 className="mt-3 text-3xl font-medium tracking-tight">Page not found</h1>
      <p className="mt-3 text-[var(--color-muted)]">
        That page doesn&apos;t exist. Head back home to see the work.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-md bg-[var(--color-accent)] px-5 py-3 text-sm font-medium text-white hover:bg-[var(--color-accent-bright)] transition-colors"
      >
        Back home
      </Link>
    </div>
  );
}
