import { existsSync } from "fs";
import path from "path";
import { siteConfig } from "@/data/site";

/**
 * Whether public/<resume.fileName> exists. Called from Server Components,
 * so under static rendering this is evaluated at build time. Drop the PDF
 * into public/ with the configured file name and redeploy to reveal the
 * résumé buttons across the site.
 */
export function resumeAvailable(): boolean {
  return existsSync(
    path.join(process.cwd(), "public", siteConfig.resume.fileName),
  );
}
