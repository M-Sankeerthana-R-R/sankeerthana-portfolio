import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectGrid() {
  const showcase = projects.filter((p) => !p.isExperience);
  const tier1 = showcase.filter((p) => p.tier === 1);
  const tier2 = showcase.filter((p) => p.tier === 2);
  const tier3 = showcase.filter((p) => p.tier === 3);

  return (
    <div className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        {tier1.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {tier2.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {tier3.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
