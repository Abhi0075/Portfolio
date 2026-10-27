import { siteConfig } from "@/data/site";
import { profile } from "@/data/profile";
import { Section } from "@/components/section";

export function About() {
  return (
    <Section
      id="about"
      memo="Memo Nº 01 · About"
      title="A backend engineer’s short memo"
    >
      <div className="grid gap-10 md:grid-cols-[7fr_5fr]">
        <div className="space-y-5 text-base leading-relaxed text-ink/80">
          {profile.aboutParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <div className="flex flex-wrap gap-2 pt-2">
            {profile.focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-line bg-card px-3 py-1 text-xs font-medium text-ink/70"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Desk name plate (decorative) */}
        <aside aria-hidden="true" className="md:pt-2">
          <div className="rotate-[-1deg] rounded-md bg-navy px-6 py-5 shadow-note">
            <p className="font-heading text-xl font-bold tracking-wide text-paper">
              {siteConfig.name.toUpperCase()}
            </p>
            <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-mustard">
              {siteConfig.role} · Backend
            </p>
          </div>
          <p className="mt-4 font-mono text-[11px] leading-5 text-ink/50">
            Name plate, as issued on day one. The title has since been updated;
            the plate still works.
          </p>
        </aside>
      </div>
    </Section>
  );
}
