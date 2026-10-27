"use client";

import { useEffect, useRef, useState } from "react";
import { FileDown, Menu, X } from "lucide-react";
import { navSections, siteConfig, type NavSection } from "@/data/site";
import { cx } from "@/lib/cx";

type SiteHeaderProps = {
  resumeAvailable: boolean;
  sections?: NavSection[];
};

export function SiteHeader({ resumeAvailable, sections = navSections }: SiteHeaderProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Scroll spy: highlight the nav link of the section crossing mid-viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );

    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    }
    return () => observer.disconnect();
  }, [sections]);

  // Close the mobile menu on Escape and restore focus to the toggle.
  useEffect(() => {
    if (!open) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const desktopLinkClasses = (active: boolean) =>
    cx(
      "rounded-md px-3 py-2 text-sm transition-colors hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy",
      active ? "font-medium text-navy" : "text-ink/70",
    );

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-4xl items-center justify-between px-5 sm:px-6">
        <a
          href="#top"
          aria-label="Back to top"
          className="group flex items-center gap-2.5 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-navy font-heading text-sm font-bold text-paper">
            {siteConfig.monogram}
          </span>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60 transition-colors group-hover:text-navy sm:inline">
            {siteConfig.name}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-0.5 md:flex">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={activeId === section.id ? "true" : undefined}
              className={desktopLinkClasses(activeId === section.id)}
            >
              {section.label}
            </a>
          ))}
          {resumeAvailable && (
            <a
              href="/resume.pdf"
              download
              className="ml-2 inline-flex items-center gap-1.5 rounded-md bg-navy px-3.5 py-2 text-sm font-medium text-paper transition-colors hover:bg-navy-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            >
              <FileDown className="h-4 w-4" aria-hidden="true" />
              Résumé
            </a>
          )}
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-ink transition-colors hover:bg-line/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy md:hidden"
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
          <span className="sr-only">{open ? "Close navigation" : "Open navigation"}</span>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-line bg-paper md:hidden"
        >
          <ul className="mx-auto w-full max-w-4xl space-y-1 px-5 py-4 sm:px-6">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={activeId === section.id ? "true" : undefined}
                  className={cx(
                    "block min-h-11 rounded-md px-3 py-2.5 text-base transition-colors hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy",
                    activeId === section.id ? "font-medium text-navy" : "text-ink/80",
                  )}
                >
                  {section.label}
                </a>
              </li>
            ))}
            {resumeAvailable && (
              <li>
                <a
                  href="/resume.pdf"
                  download
                  className="mt-2 flex min-h-11 items-center gap-2 rounded-md bg-navy px-3 py-2.5 text-base font-medium text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                >
                  <FileDown className="h-4 w-4" aria-hidden="true" />
                  Résumé (PDF)
                </a>
              </li>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
