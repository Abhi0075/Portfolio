import {
  ExternalLink,
  FileText,
  Github,
  Info,
  type LucideIcon,
} from "lucide-react";
import type { Project } from "@/data/projects";
import { MemoLabel } from "@/components/memo-label";

type LinkItem = {
  href: string;
  label: string;
  Icon: LucideIcon;
};

export function ProjectCard({ project }: { project: Project }) {
  const linkItems = (
    [
      { href: project.links.github, label: "Source on GitHub", Icon: Github },
      { href: project.links.demo, label: "Live demo", Icon: ExternalLink },
      { href: project.links.writeup, label: "Technical write-up", Icon: FileText },
    ] satisfies Array<{ href?: string; label: string; Icon: LucideIcon }>
  ).filter((item): item is LinkItem => Boolean(item.href));

  return (
    <article className="relative">
      <span className="absolute -top-3.5 left-6 z-10 inline-flex items-center rounded-t-md bg-navy px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper">
        Case file Nº {project.fileNumber}
      </span>
      <div className="rounded-md rounded-tl-none border border-line bg-card p-6 shadow-card sm:p-8">
        <h3 className="font-heading text-xl font-bold text-ink">{project.title}</h3>
        <p className="mt-1 text-sm font-medium text-navy">{project.tagline}</p>

        <div className="mt-6 space-y-5 text-sm leading-relaxed text-ink/80">
          <div>
            <MemoLabel className="text-ink/50">Problem</MemoLabel>
            <p className="mt-1.5">{project.problem}</p>
          </div>
          <div>
            <MemoLabel className="text-ink/50">My contribution</MemoLabel>
            <p className="mt-1.5">{project.contribution}</p>
          </div>
          {project.notes.length > 0 && (
            <div>
              <MemoLabel className="text-ink/50">Engineering notes</MemoLabel>
              <ul className="mt-1.5 space-y-1.5">
                {project.notes.map((note) => (
                  <li key={note} className="flex gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-navy/50"
                    />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {project.tech.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="rounded-sm border border-line bg-paper px-2 py-0.5 font-mono text-[11px] text-ink/60"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}

        {project.disclaimer && (
          <p className="mt-5 flex items-start gap-2 rounded-sm bg-mustard-soft px-3 py-2 text-xs leading-relaxed text-ink/80">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-navy" aria-hidden="true" />
            {project.disclaimer}
          </p>
        )}

        {linkItems.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
            {linkItems.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium text-navy underline-offset-4 transition-colors hover:bg-navy/5 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
