import { achievements } from "@/data/achievements";

export default function AchievementList() {
  return (
    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
      {achievements.map((a) => (
        <li key={a.title} className="border-l-2 border-[var(--color-accent)] pl-4">
          <p className="font-medium text-[var(--color-ink)]">{a.title}</p>
          <p className="mt-1 text-sm text-[var(--color-muted)] leading-relaxed">{a.detail}</p>
          {a.period && (
            <p className="mt-1.5 font-[family-name:var(--font-mono)] text-[11px] text-[var(--color-faint)]">
              {a.period}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
