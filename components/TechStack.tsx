import { skillGroups, problemSolving } from "@/data/skills";

export default function TechStack() {
  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-accent-bright)] mb-3">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-xs px-2.5 py-1 rounded border border-[var(--color-border)] text-[var(--color-muted)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 pt-8 border-t border-[var(--color-border)]">
        <h3 className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-accent-bright)] mb-3">
          Problem Solving
        </h3>
        <p className="text-[15px] text-[var(--color-muted)]">{problemSolving.leetcode}</p>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {problemSolving.areas.map((item) => (
            <li
              key={item}
              className="text-xs px-2.5 py-1 rounded border border-[var(--color-border)] text-[var(--color-faint)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
