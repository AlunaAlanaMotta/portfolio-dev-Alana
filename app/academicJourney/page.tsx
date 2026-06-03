import type { Metadata } from "next";
import AcademicJourney from "@/components/AcademicJourney/AcademicJourney";

export const metadata: Metadata = {
  title: "Trajetória Acadêmica",
  description:
    "Formação e cursos de Alana Motta: Engenharia Front-End pela EBAC, cursos na Alura e mais. Acompanhe a jornada de aprendizado da desenvolvedora.",
};

export default function AcademicJourneyPage() {
  return <AcademicJourney />;
}
