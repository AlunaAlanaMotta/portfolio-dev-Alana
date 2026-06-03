import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a trajetória de Alana Motta — desenvolvedora front-end em transição de carreira, com foco em React, Next.js e TypeScript. História, valores e o que a move.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
