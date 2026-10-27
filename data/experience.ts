export type ExperienceEntry = {
  id: string;
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
  tech: string[];
};

// All entries sourced from the résumé (titles and dates as stated there).
// Bullets are deliberately trimmed for the web — the résumé carries the full
// detail. Company shown as "Deloitte India" (display name for Deloitte Touche
// Tohmatsu India LLP).
export const experience: ExperienceEntry[] = [
  {
    id: "deloitte-senior-developer",
    role: "Senior Developer",
    company: "Deloitte India",
    period: "Jun 2026 — Present",
    summary:
      "Backend lead on URL management and data-intensive reporting systems.",
    highlights: [
      "Graph-based URL management — shortening plus GenAI-powered categorization, removing manual interpretation of URLs entirely.",
      "Graph-based data modeling for a financial reporting project, restructuring how reporting data is captured and processed.",
      "License management system on Redis and Keygen, treating AWS accounts as the authenticated users for license validation.",
    ],
    tech: ["Node.js", "Redis", "Keygen", "Graph data modeling", "GenAI", "AWS"],
  },
  {
    id: "deloitte-developer",
    role: "Developer",
    company: "Deloitte India",
    period: "Jul 2024 — Jun 2026",
    summary:
      "Shipped GenAI-assisted workflows, containerized services, and cloud deployments.",
    highlights: [
      "GenAI-based project with Azure DevOps for CI/CD and workflow automation.",
      "Containerized applications with Docker; deployed and managed resources on AWS (ElastiCache, Lambda, ECS).",
      "Designed and implemented batch jobs in Python for automation and data processing.",
    ],
    tech: ["Python", "Docker", "AWS Lambda", "Amazon ECS", "ElastiCache", "Azure DevOps"],
  },
  {
    id: "deloitte-intern",
    role: "Product Engineering Intern",
    company: "Deloitte India",
    period: "Jan 2024 — Jul 2024",
    summary:
      "First full cycle at Deloitte — authorization, testing, and search infrastructure.",
    highlights: [
      "Proof of Concept for an authorization module modeled on AWS IAM rules — role-based access control entirely through custom middleware.",
      "Jest unit tests for backend services, improving reliability and maintainability.",
      "OpenSearch reindex operations for large-scale data migration; fixed UI bugs and built new screens.",
    ],
    tech: ["Node.js", "Jest", "OpenSearch", "RBAC", "React"],
  },
];
