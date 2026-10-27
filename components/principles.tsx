import {
  Activity,
  Database,
  FileText,
  Lock,
  NotebookPen,
  ScanSearch,
  type LucideIcon,
} from "lucide-react";
import { principles, type PrincipleIcon } from "@/data/principles";
import { Section } from "@/components/section";

const iconMap: Record<PrincipleIcon, LucideIcon> = {
  activity: Activity,
  contract: FileText,
  maintenance: NotebookPen,
  data: Database,
  observability: ScanSearch,
  security: Lock,
};

export function Principles() {
  return (
    <Section
      id="principles"
      memo="Memo Nº 05 · Principles"
      title="How I like to build"
      lede="Working principles I try to hold every system to."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {principles.map((principle) => {
          const Icon = iconMap[principle.icon];
          return (
            <li
              key={principle.id}
              className="rounded-md border border-line bg-card p-5 shadow-card"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-sm bg-mustard-soft text-navy">
                <Icon className="h-4.5 w-4.5" aria-hidden="true" />
              </span>
              <h3 className="mt-3.5 font-heading font-bold text-ink">
                {principle.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/70">
                {principle.description}
              </p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
