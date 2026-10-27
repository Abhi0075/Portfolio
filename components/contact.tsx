import {
  FileDown,
  Github,
  Linkedin,
  Mail,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { Section } from "@/components/section";
import { StickerMichael } from "@/components/sticker-michael";

type Channel = {
  href: string;
  label: string;
  description: string;
  Icon: LucideIcon;
  external: boolean;
  download?: boolean;
};

export function Contact({ resumeAvailable }: { resumeAvailable: boolean }) {
  const channels: Channel[] = [];
  if (siteConfig.email) {
    channels.push({
      href: `mailto:${siteConfig.email}`,
      label: `Email — ${siteConfig.email}`,
      description: "The fastest way to reach me.",
      Icon: Mail,
      external: false,
    });
  }
  if (siteConfig.phone.href) {
    channels.push({
      href: `tel:${siteConfig.phone.href}`,
      label: `Phone — ${siteConfig.phone.display}`,
      description: "Best for quick conversations.",
      Icon: Phone,
      external: false,
    });
  }
  if (siteConfig.socials.github) {
    channels.push({
      href: siteConfig.socials.github,
      label: "GitHub",
      description: "Code, experiments, and open-source work.",
      Icon: Github,
      external: true,
    });
  }
  if (siteConfig.socials.linkedin) {
    channels.push({
      href: siteConfig.socials.linkedin,
      label: "LinkedIn",
      description: "Professional profile and career history.",
      Icon: Linkedin,
      external: true,
    });
  }
  if (resumeAvailable) {
    channels.push({
      href: "/resume.pdf",
      label: "Résumé (PDF)",
      description: "One page, standard format.",
      Icon: FileDown,
      external: false,
      download: true,
    });
  }

  return (
    <Section
      id="contact"
      memo="Memo Nº 07 · Contact"
      title="Get in touch"
      lede="Whether it’s a role, a project, or an engineering question — this memo reaches me."
    >
      <div className="relative rounded-md border border-line bg-card p-6 shadow-card sm:p-8">
        <StickerMichael className="absolute -right-3 -top-12 hidden md:block" />
        <div className="space-y-2 font-mono text-xs text-ink/80 sm:text-sm">
          <p>
            <span className="font-bold text-navy">TO:</span> You
          </p>
          <p>
            <span className="font-bold text-navy">FROM:</span> {siteConfig.name} —{" "}
            {siteConfig.employer}
          </p>
          <p>
            <span className="font-bold text-navy">RE:</span> A conversation about
            engineering
          </p>
        </div>

        <div className="mt-6 border-t border-dashed border-line pt-6">
          {channels.length > 0 ? (
            <ul className="grid gap-3 sm:grid-cols-2">
              {channels.map(({ href, label, description, Icon, external, download }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    {...(download ? { download: true } : {})}
                    className="flex min-h-11 items-center gap-3 rounded-md border border-line bg-paper px-4 py-3 transition-colors hover:border-navy/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-navy" aria-hidden="true" />
                    <span>
                      <span className="block text-sm font-medium text-ink">{label}</span>
                      <span className="block text-xs text-ink/60">{description}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm leading-relaxed text-ink/70">
              Direct contact details are being finalized — email and professional
              profiles will be listed here once they’re live.
            </p>
          )}
        </div>
      </div>
    </Section>
  );
}
