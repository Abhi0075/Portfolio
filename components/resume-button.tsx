import { FileDown } from "lucide-react";
import { cx } from "@/lib/cx";

type ResumeButtonProps = {
  size?: "sm" | "md";
  className?: string;
};

/**
 * Shared résumé CTA. Render it only when `resumeAvailable()` is true —
 * callers gate on the build-time fs check in lib/resume.ts.
 */
export function ResumeButton({ size = "md", className }: ResumeButtonProps) {
  return (
    <a
      href="/resume.pdf"
      download
      className={cx(
        "inline-flex items-center gap-2 rounded-md border border-navy/30 font-medium text-navy transition-colors hover:border-navy hover:bg-navy/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy",
        size === "sm" ? "px-3 py-1.5 text-sm" : "px-5 py-2.5 text-sm sm:text-base",
        className,
      )}
    >
      <FileDown className="h-4 w-4" aria-hidden="true" />
      Résumé
    </a>
  );
}
