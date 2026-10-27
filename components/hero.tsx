import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/data/site";
import { MemoLabel } from "@/components/memo-label";
import { ResumeButton } from "@/components/resume-button";
import { SocialLinks } from "@/components/social-links";
import { StickerDwight } from "@/components/sticker-dwight";

export function Hero({ resumeAvailable }: { resumeAvailable: boolean }) {
  return (
    <section id="top" className="dot-grid relative overflow-hidden">
      <div className="mx-auto grid w-full max-w-4xl gap-12 px-5 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-20 md:grid-cols-[7fr_5fr] md:items-center">
        <div className="animate-fade-up">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-2 w-2 rotate-45 bg-mustard" />
            <MemoLabel>Internal memo · Nº 000 · Re: hello</MemoLabel>
          </div>
          <h1 className="mt-4 font-heading text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            Building reliable software, one system at a time.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
            I’m {siteConfig.shortName} — a backend-focused software engineer at{" "}
            {siteConfig.employer}. I build APIs, data systems, and cloud services
            that behave predictably in production.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-navy px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-navy-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            >
              Explore my work
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            {resumeAvailable && <ResumeButton />}
          </div>
          <SocialLinks className="mt-6" />
        </div>

        {/* Interoffice memo sheet + sticky note (decorative) */}
        <div
          aria-hidden="true"
          className="relative mx-auto mb-8 w-full max-w-xs animate-fade-in md:mb-10 md:max-w-sm"
        >
          <StickerDwight className="absolute -left-12 -top-8 hidden lg:block" />
          <div className="rotate-[1.5deg] rounded-sm border border-line bg-card p-6 shadow-note">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60">
              Interoffice memo
            </p>
            <div className="mt-4 space-y-2.5 font-mono text-[11px] leading-6 text-ink/80 sm:text-xs">
              <p className="border-b border-dashed border-line pb-2">
                <span className="font-bold text-navy">TO:</span> Engineers &amp; recruiters
              </p>
              <p className="border-b border-dashed border-line pb-2">
                <span className="font-bold text-navy">FROM:</span> The desk of {siteConfig.name}
              </p>
              <p className="border-b border-dashed border-line pb-2">
                <span className="font-bold text-navy">RE:</span> Systems that stay up
              </p>
              <p>
                <span className="font-bold text-navy">CC:</span> Coffee
              </p>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-2 w-44 rotate-[-3deg] rounded-sm bg-mustard p-4 shadow-note">
            <p className="font-mono text-[11px] leading-5 text-navy">
              FYI: bears, beets, reliable APIs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
