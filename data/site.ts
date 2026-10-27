export const siteConfig = {
  name: "Abhishek A.",
  shortName: "Abhishek",
  monogram: "AA",
  role: "Software Engineer",
  focusLabel: "Backend-focused software engineer",
  employer: "Deloitte India",
  // Production URL on Vercel. Used for canonical URLs, sitemap.xml,
  // robots.txt and Open Graph metadata. Update if a custom domain is added.
  url: "https://portfolio-abhisheka.vercel.app",
  title: "Abhishek A. — Software Engineer",
  description:
    "Backend-focused software engineer at Deloitte India building reliable APIs, data systems, and cloud services with TypeScript, Node.js, and AWS.",
  // Contact channels pulled from the résumé / user-provided. GitHub URL is
  // still pending — leave it as an empty string (the UI hides it) until
  // provided.
  email: "abhisheka0075@gmail.com",
  phone: {
    display: "+91 95389 00774",
    href: "+919538900774",
  },
  socials: {
    github: "",
    linkedin: "https://www.linkedin.com/in/abhishek-a-97a527223/",
  },
  resume: {
    // Drop your PDF into public/ with this exact file name and redeploy.
    // The résumé buttons appear automatically once the file exists
    // (checked at build time — see lib/resume.ts).
    fileName: "resume.pdf",
  },
} as const;

export type NavSection = { id: string; label: string };

export const navSections: NavSection[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
