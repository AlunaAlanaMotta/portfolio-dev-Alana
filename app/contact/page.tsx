import type { Metadata } from "next";
import Contact from "@/components/Contact/Contact";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com Alana Motta — desenvolvedora front-end disponível para oportunidades, freelas e projetos. Respondo pelo LinkedIn ou e-mail.",
};

export default function ContactPage() {
  return <Contact />;
}
