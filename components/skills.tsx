import {
  Cloud,
  Code2,
  Database,
  Monitor,
  Server,
  type LucideIcon,
} from "lucide-react";
import { skillGroups, type SkillIcon } from "@/data/skills";
import { Section } from "@/components/section";

const iconMap: Record<SkillIcon, LucideIcon> = {
  languages: Code2,
  backend: Server,
  frontend: Monitor,
  data: Database,
  cloud: Cloud,
};

export function Skills() {
  return (
    <Section
      id="skills"
      memo="Memo Nº 04 · Skills"
      title="Tools I reach for"
      lede="Technologies I’ve worked with in production systems and personal projects, grouped by where they fit."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = iconMap[group.icon];
          return (
            <li
              key={group.id}
              className="rounded-md border border-line bg-card p-5 shadow-card"
            >
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-navy" aria-hidden="true" />
                <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60">
                  {group.label}
                </h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-sm border border-line bg-paper px-2 py-1 text-xs text-ink/80"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
