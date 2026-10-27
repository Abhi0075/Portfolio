import { GraduationCap } from "lucide-react";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { Section } from "@/components/section";

export function Experience() {
  return (
    <Section
      id="experience"
      memo="Memo Nº 02 · Experience"
      title="Where I’ve been building"
      lede="Production backend work, summarized without the confidential bits."
    >
      <ol className="space-y-10">
        {experience.map((entry) => (
          <li key={entry.id} className="grid gap-2 md:grid-cols-[140px_1fr] md:gap-8">
            <p className="pt-1 font-mono text-xs leading-6 text-ink/60 md:text-right">
              {entry.period}
            </p>
            <div className="relative border-l-2 border-line pl-6 md:pl-8">
              <span
                aria-hidden="true"
                className="absolute -left-[7px] top-2 h-3 w-3 rounded-full border-2 border-navy bg-paper"
              />
              <h3 className="font-heading text-lg font-bold text-ink">
                {entry.role}
                <span aria-hidden="true" className="mx-2 text-ink/40">
                  ·
                </span>
                <span className="text-navy">{entry.company}</span>
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/70">
                {entry.summary}
              </p>
              <ul className="mt-4 space-y-2">
                {entry.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-2.5 text-sm leading-relaxed text-ink/80"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[9px] h-1.5 w-1.5 shrink-0 rotate-45 bg-mustard"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {entry.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-sm border border-line bg-paper px-2 py-0.5 font-mono text-[11px] text-ink/60"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-12 space-y-3">
        {profile.education.map((ed) => (
          <div
            key={ed.degree}
            className="flex flex-col gap-3 rounded-md border border-line bg-card p-5 shadow-card sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-start gap-3">
              <GraduationCap
                className="mt-0.5 h-5 w-5 shrink-0 text-navy"
                aria-hidden="true"
              />
              <div>
                <h3 className="font-heading font-bold text-ink">{ed.degree}</h3>
                <p className="mt-0.5 text-sm text-ink/70">
                  {ed.school}, {ed.location}
                  <span aria-hidden="true" className="mx-2 text-ink/40">·</span>
                  <span className="font-mono text-xs">{ed.period}</span>
                </p>
              </div>
            </div>
            <p className="shrink-0 font-mono text-xs text-moss">{ed.score}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
