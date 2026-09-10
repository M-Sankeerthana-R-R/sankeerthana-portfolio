export default function AboutSection() {
  return (
    <div className="grid sm:grid-cols-[1fr_1.3fr] gap-8 sm:gap-16">
      <div>
        <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-accent-bright)]">
          Keshav Memorial Institute of Technology
        </p>
        <p className="mt-2 text-sm text-[var(--color-muted)]">
          B.Tech, Computer Science Engineering · CGPA 9.33
        </p>
        <p className="mt-1 text-xs text-[var(--color-faint)]">Sep 2023 – Present</p>
      </div>
      <div className="flex flex-col gap-4 text-[15px] leading-relaxed text-[var(--color-muted)]">
        <p>
          I work across AI/ML, generative AI, and full-stack systems — usually where those
          three meet a real interface someone has to actually use. DBGuard reads SQL activity
          across multiple signals to flag what matters; Vidura puts a 3D presenter in a live
          Microsoft Teams call that can act on spoken commands; Tara is a desktop assistant I
          built on my own time because I wanted to see how far I could push response latency
          on a speech-driven system.
        </p>
        <p>
          I&apos;m as comfortable in the model layer (GANs, transformers, ViT) as I am in the
          system around it — APIs, monitoring dashboards, database security, mobile clients.
          300+ solved LeetCode problems is less a badge and more a habit: most of what I build
          starts as a hard, narrow problem before it becomes a product.
        </p>
      </div>
    </div>
  );
}
