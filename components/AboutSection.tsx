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
        <p className="mt-1 text-xs text-[var(--color-faint)]">
          Sep 2023 – Present
        </p>
      </div>
      <div className="flex flex-col gap-4 text-[15px] leading-relaxed text-[var(--color-muted)]">
        <p>
          I build AI systems and intelligent applications across multimodal ML,
          Generative AI, cybersecurity, and full-stack engineering — turning
          complex problems into practical, deployable products.
        </p>
        <p>
          I&apos;m as comfortable in the model layer (GANs, transformers, ViT)
          as I am in the system around it — APIs, monitoring dashboards,
          database security, mobile clients. 330+ solved LeetCode problems is
          less a badge and more a habit: most of what I build starts as a hard,
          narrow problem before it becomes a product.
        </p>
      </div>
    </div>
  );
}
