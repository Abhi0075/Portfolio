export type PrincipleIcon =
  | "activity"
  | "contract"
  | "maintenance"
  | "data"
  | "observability"
  | "security";

export type Principle = {
  id: string;
  title: string;
  description: string;
  icon: PrincipleIcon;
};

export const principles: Principle[] = [
  {
    id: "reliability",
    title: "Reliability first",
    description:
      "Predictable behavior beats cleverness. Failure paths are handled deliberately, not discovered in production.",
    icon: "activity",
  },
  {
    id: "contracts",
    title: "Clear API contracts",
    description:
      "An API is a promise. Version it, document it, and keep it honest — breaking callers is a bug, not a refactor.",
    icon: "contract",
  },
  {
    id: "maintainability",
    title: "Maintainable code",
    description:
      "Code is read far more often than it is written. Optimize for the next reader, including future me.",
    icon: "maintenance",
  },
  {
    id: "data-design",
    title: "Thoughtful data design",
    description:
      "Schemas and search indices shape what a system can do. Getting them right early prevents painful rewrites later.",
    icon: "data",
  },
  {
    id: "observability",
    title: "Observability",
    description:
      "If you can’t see it, you can’t fix it. Instrument services before the incident, not during it.",
    icon: "observability",
  },
  {
    id: "security",
    title: "Security & least privilege",
    description:
      "Access control is a design input, not a patch. Grant the minimum access needed, and verify it with tests.",
    icon: "security",
  },
];
