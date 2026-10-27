import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-3 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="text-sm font-medium text-ink">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <p className="mt-1 font-mono text-[11px] leading-5 text-ink/60">
            From the desk of a backend engineer — powered by coffee and a
            “World’s Best Boss” mug.
          </p>
        </div>
        <p className="inline-flex items-center gap-2 self-start font-mono text-[11px] text-ink/60 sm:self-center">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-moss" />
          All systems operational
        </p>
      </div>
    </footer>
  );
}
