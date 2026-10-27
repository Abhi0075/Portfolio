import { Award } from "lucide-react";
import { involvement, award } from "@/data/involvement";
import { Section } from "@/components/section";

export function Involvement() {
  return (
    <Section
      id="involvement"
      memo="Memo Nº 06 · Involvement"
      title="Beyond the desk"
      lede="Campus leadership and recognition — the people side of engineering."
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {involvement.map((item) => (
          <li
            key={item.id}
            className="rounded-md border border-line bg-card p-5 shadow-card"
          >
            <h3 className="font-heading font-bold text-ink">{item.role}</h3>
            <p className="mt-0.5 text-sm text-navy">{item.org}</p>
            <p className="mt-1 font-mono text-[11px] text-ink/60">{item.period}</p>
            <ul className="mt-3 space-y-1.5">
              {item.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-2 text-sm leading-relaxed text-ink/70"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-navy/50"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-start gap-3 rounded-md border border-line bg-mustard-soft p-5">
        <Award className="mt-0.5 h-5 w-5 shrink-0 text-navy" aria-hidden="true" />
        <div>
          <h3 className="font-heading font-bold text-ink">{award.title}</h3>
          <p className="mt-0.5 text-sm leading-relaxed text-ink/70">{award.detail}</p>
        </div>
      </div>
    </Section>
  );
}
