import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { cx } from "@/lib/cx";

/**
 * Contact icon row (email, phone, GitHub, LinkedIn). Sources come from
 * data/site.ts; empty values are filtered out, so nothing renders until a
 * real address / URL is configured.
 */
export function SocialLinks({ className }: { className?: string }) {
  const socials = [
    {
      href: siteConfig.email ? `mailto:${siteConfig.email}` : "",
      label: "Email",
      Icon: Mail,
      external: false,
    },
    {
      href: siteConfig.phone.href ? `tel:${siteConfig.phone.href}` : "",
      label: "Call",
      Icon: Phone,
      external: false,
    },
    {
      href: siteConfig.socials.github,
      label: "GitHub",
      Icon: Github,
      external: true,
    },
    {
      href: siteConfig.socials.linkedin,
      label: "LinkedIn",
      Icon: Linkedin,
      external: true,
    },
  ].filter((social) => social.href !== "");

  if (socials.length === 0) {
    return null;
  }

  return (
    <ul className={cx("flex items-center gap-2", className)}>
      {socials.map(({ href, label, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            aria-label={external ? `${label} profile (opens in a new tab)` : label}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-card text-ink/70 transition-colors hover:border-navy/40 hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
