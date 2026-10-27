import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Principles } from "@/components/principles";
import { Involvement } from "@/components/involvement";
import { Contact } from "@/components/contact";
import { resumeAvailable } from "@/lib/resume";

export default function Home() {
  const hasResume = resumeAvailable();

  return (
    <>
      <SiteHeader resumeAvailable={hasResume} />
      <main id="main">
        <Hero resumeAvailable={hasResume} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Principles />
        <Involvement />
        <Contact resumeAvailable={hasResume} />
      </main>
      <SiteFooter />
    </>
  );
}
