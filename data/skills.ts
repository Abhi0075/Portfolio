export type SkillIcon =
  | "languages"
  | "backend"
  | "frontend"
  | "data"
  | "cloud";

export type SkillGroup = {
  id: string;
  label: string;
  icon: SkillIcon;
  skills: string[];
};

// Mirrors the skills section of the résumé.
export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    icon: "languages",
    skills: ["Python", "C++", "TypeScript", "JavaScript"],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "backend",
    skills: ["Node.js", "Express.js", "TypeORM", "REST APIs"],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: "frontend",
    skills: ["React.js"],
  },
  {
    id: "data",
    label: "Databases & Search",
    icon: "data",
    skills: ["MySQL", "PostgreSQL", "Redis", "OpenSearch"],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    icon: "cloud",
    skills: ["AWS", "Docker", "Azure DevOps"],
  },
];
