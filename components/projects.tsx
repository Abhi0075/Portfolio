import { projects } from "@/data/projects";
import { Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";

export function Projects() {
  const published = projects.filter((project) => project.published);

  return (
    <Section
      id="projects"
      memo="Memo Nº 03 · Projects"
      title="Case files"
      lede="Selected work, documented the way I’d hand over a system — the problem, the contribution, and the decisions in between."
    >
      <div className="grid gap-10">
        {published.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
