const stages = [
  { label: "Signal", note: "sensor · text · query" },
  { label: "Model", note: "vision · language · GAN" },
  { label: "System", note: "routing · monitoring" },
  { label: "Product", note: "interface · workflow" },
];

export default function SystemMap() {
  return (
    <div
      role="img"
      aria-label="A pipeline diagram showing signal flowing into a model, then a system, then a product."
      className="relative border-y border-[var(--color-border)] py-10 overflow-x-auto"
    >
      <svg
        viewBox="0 0 800 40"
        preserveAspectRatio="none"
        className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px w-full text-[var(--color-border-strong)]"
        aria-hidden="true"
      >
        <line x1="0" y1="20" x2="800" y2="20" stroke="currentColor" strokeWidth="1" />
        <circle
          cx="0"
          cy="20"
          r="3"
          fill="var(--color-accent-bright)"
          className="motion-safe:animate-[travel_6s_linear_infinite]"
        />
      </svg>

      <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-4 min-w-[520px] sm:min-w-0">
        {stages.map((stage) => (
          <div key={stage.label} className="flex flex-col items-start sm:items-center text-left sm:text-center">
            <span
              className="h-2.5 w-2.5 rounded-full border border-[var(--color-accent-bright)] bg-[var(--color-bg)]"
              aria-hidden="true"
            />
            <span className="mt-3 text-sm font-medium text-[var(--color-ink)]">
              {stage.label}
            </span>
            <span className="mt-1 font-[family-name:var(--font-mono)] text-[11px] text-[var(--color-faint)]">
              {stage.note}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
