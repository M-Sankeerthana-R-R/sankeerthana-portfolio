export default function CaseStudySection({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-12 border-t border-[var(--color-border)] first:border-none first:pt-0">
      <div className="grid sm:grid-cols-[180px_1fr] gap-4 sm:gap-12">
        <div>
          <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-accent-bright)]">
            {index}
          </p>
          <h2 className="mt-1 text-lg font-medium text-[var(--color-ink)]">{title}</h2>
        </div>
        <div className="max-w-2xl">{children}</div>
      </div>
    </section>
  );
}
