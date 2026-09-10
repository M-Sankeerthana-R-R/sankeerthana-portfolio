type Props = {
  index?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ index, title, description }: Props) {
  return (
    <div className="mb-10 sm:mb-12 max-w-2xl">
      {index && (
        <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-accent-bright)] mb-3">
          {index}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-muted)]">
          {description}
        </p>
      )}
    </div>
  );
}
