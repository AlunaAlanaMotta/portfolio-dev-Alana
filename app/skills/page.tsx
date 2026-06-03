import type { Metadata } from "next";
import Skills from "@/components/Skills/Skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Tecnologias e ferramentas de Alana Motta: React, Next.js, TypeScript, CSS Modules, Git e mais. Conheça o stack completo da desenvolvedora front-end.",
};

export default function SkillsPage() {
  return <Skills />;
}
