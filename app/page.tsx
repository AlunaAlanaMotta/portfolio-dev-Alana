import type { Metadata } from "next";
import Hero from "@/components/Hero/Hero";

export const metadata: Metadata = {
  title: "Alana Motta | Desenvolvedora Front-End",
  description:
    "Portfólio de Alana Motta — desenvolvedora front-end especializada em React, Next.js e TypeScript. Veja projetos reais, skills e trajetória profissional.",
};
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
