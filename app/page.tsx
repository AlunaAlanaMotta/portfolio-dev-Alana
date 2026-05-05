import Hero from "@/components/Hero/Hero";
import ProjectsPortal from "@/components/ProjectsPortal/ProjectsPortal";
import ScrollReveal from "@/components/ScrollReveal";
import Projects from "../components/Projects/Projects";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <main>
        <Hero />
        <ProjectsPortal />
        <Projects />
      </main>
    </>
  );
}
