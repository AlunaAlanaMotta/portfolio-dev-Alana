import type { ReactNode } from "react";
import styles from "./Projects.module.css";

export type Project = {
  title: string;
  shortTitle: string;
  category: string;
  url: string;
  description: string;
  details: ReactNode;
  video: string;
  tech: string[];
  demo: string;
  code: string;
};

export const projects: Project[] = [
  {
    title: "Vitz Monitoramento",
    shortTitle: "Vitz Monitoramento",
    category: "Profissional",
    url: "vitzmonitoramento.vercel.app",
    description:
      "Projeto desenvolvido como minha primeira experiência profissional na área, com foco em criação de um site institucional moderno, performático e orientado à conversão de clientes.",
    details: (
      <div className={styles.detailsContent}>
        <p className={styles.intro}>
          Este projeto marcou minha primeira experiência profissional como
          desenvolvedora front-end, com foco em entregar uma solução real e
          eficiente.
        </p>
        <div className={styles.highlights}>
          <span>
            <i className="fas fa-search"></i> SEO otimizado
          </span>
          <span>
            <i className="fas fa-bolt"></i> Alta performance
          </span>
          <span>
            <i className="fas fa-rocket"></i> Deploy em produção
          </span>
        </div>
        <h4>
          <i className="fas fa-code"></i> Tecnologias
        </h4>
        <div className={styles.techList}>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>React Hooks</span>
          <span>CSS Modules</span>
        </div>
        <h4>
          <i className="fas fa-check-circle"></i> Entregas
        </h4>
        <ul>
          <li>Refatoração completa do projeto</li>
          <li>Melhoria de SEO e semântica</li>
          <li>Deploy com domínio personalizado</li>
          <li>Layout responsivo</li>
        </ul>
        <p className={styles.result}>
          Esse projeto consolidou minha transição para a área de tecnologia.
        </p>
      </div>
    ),
    video: "/videos/video-site-vitz.mp4",
    tech: ["SEO", "Next.js", "TypeScript", "UX/UI"],
    demo: "https://vitzmonitoramento.vercel.app/",
    code: "https://github.com/AlunaAlanaMotta/vitzmonitoramento",
  },

  {
    title: "Site Institucional para Advogado",
    shortTitle: "Site para Advogado",
    category: "Full-stack",
    url: "advogado-inky-three.vercel.app",
    description:
      "Site institucional completo com formulário de captação de clientes integrado a banco de dados e envio automático de e-mail, desenvolvido com stack moderna.",
    details: (
      <div className={styles.detailsContent}>
        <p className={styles.intro}>
          Projeto autoral desenvolvido do zero, unindo design institucional
          profissional com funcionalidades reais de back-end para captação de
          clientes.
        </p>
        <div className={styles.highlights}>
          <span>
            <i className="fas fa-envelope"></i> Envio de e-mail automático
          </span>
          <span>
            <i className="fas fa-database"></i> Banco de dados integrado
          </span>
          <span>
            <i className="fas fa-rocket"></i> Deploy em produção
          </span>
        </div>
        <h4>
          <i className="fas fa-code"></i> Tecnologias
        </h4>
        <div className={styles.techList}>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>Tailwind CSS</span>
          <span>Supabase</span>
          <span>Resend</span>
        </div>
        <h4>
          <i className="fas fa-check-circle"></i> Funcionalidades
        </h4>
        <ul>
          <li>Formulário de atendimento jurídico (legal intake)</li>
          <li>Armazenamento dos dados no Supabase</li>
          <li>Envio automático de e-mail via Resend</li>
          <li>Layout responsivo e semântico</li>
        </ul>
        <p className={styles.result}>
          Projeto que une front-end moderno com integrações reais de back-end,
          entregando valor imediato ao cliente final.
        </p>
      </div>
    ),
    video: "/videos/advogado.mp4",
    tech: ["Supabase", "Resend", "Next.js", "TypeScript"],
    demo: "https://advogado-inky-three.vercel.app/",
    code: "https://github.com/AlunaAlanaMotta/advogado",
  },

  {
    title: "Site Institucional para Clínica Odontológica",
    shortTitle: "Clínica Odontológica",
    category: "Institucional",
    url: "odontologia-delta.vercel.app",
    description:
      "Site institucional moderno para consultório odontológico com agendamento direto pelo WhatsApp, unindo apresentação profissional dos serviços e conversão de pacientes.",
    details: (
      <div className={styles.detailsContent}>
        <p className={styles.intro}>
          Projeto autoral desenvolvido para um consultório odontológico, unindo
          identidade visual profissional com funcionalidades que facilitam o
          contato e a conversão de novos pacientes.
        </p>
        <div className={styles.highlights}>
          <span>
            <i className="fab fa-whatsapp"></i> Agendamento via WhatsApp
          </span>
          <span>
            <i className="fas fa-mobile-alt"></i> Layout responsivo
          </span>
          <span>
            <i className="fas fa-rocket"></i> Deploy em produção
          </span>
        </div>
        <h4>
          <i className="fas fa-code"></i> Tecnologias
        </h4>
        <div className={styles.techList}>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>CSS Modules</span>
        </div>
        <h4>
          <i className="fas fa-check-circle"></i> Entregas
        </h4>
        <ul>
          <li>Apresentação de serviços e especialidades</li>
          <li>Botão de agendamento com redirecionamento direto ao WhatsApp</li>
          <li>Design focado em transmitir confiança e profissionalismo</li>
          <li>Layout semântico e acessível</li>
          <li>Deploy em produção com domínio personalizado</li>
        </ul>
        <p className={styles.result}>
          Projeto que demonstra minha capacidade de entregar soluções práticas e
          orientadas à conversão, adaptadas às necessidades reais de cada
          negócio.
        </p>
      </div>
    ),
    video: "/videos/odontologia.mp4",
    tech: ["WhatsApp", "Next.js", "TypeScript", "CSS Modules"],
    demo: "https://odontologia-delta.vercel.app/",
    code: "https://github.com/AlunaAlanaMotta/odontologia",
  },

  {
    title: "Landing Page para Personal Trainer",
    shortTitle: "Personal Trainer",
    category: "Landing Page",
    url: "personal-trainer-blush-zeta.vercel.app",
    description:
      "Landing page completa para personal trainer com apresentação de planos, depoimentos, estudos de caso e agendamento direto pelo WhatsApp.",
    details: (
      <div className={styles.detailsContent}>
        <p className={styles.intro}>
          Projeto autoral desenvolvido para um profissional de educação física,
          com foco em conversão de clientes e apresentação clara dos serviços
          oferecidos.
        </p>
        <div className={styles.highlights}>
          <span>
            <i className="fab fa-whatsapp"></i> Agendamento via WhatsApp
          </span>
          <span>
            <i className="fas fa-layer-group"></i> Múltiplas seções
          </span>
          <span>
            <i className="fas fa-rocket"></i> Deploy em produção
          </span>
        </div>
        <h4>
          <i className="fas fa-code"></i> Tecnologias
        </h4>
        <div className={styles.techList}>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>CSS Modules</span>
        </div>
        <h4>
          <i className="fas fa-check-circle"></i> Funcionalidades
        </h4>
        <ul>
          <li>Apresentação de planos: presencial, online e híbrido</li>
          <li>Seção de depoimentos e transformações reais (antes/depois)</li>
          <li>FAQ com perguntas frequentes</li>
          <li>Método de treino em 4 etapas</li>
          <li>Múltiplos botões de agendamento direto pelo WhatsApp</li>
        </ul>
        <p className={styles.result}>
          Projeto orientado à conversão, mostrando como estruturar uma landing
          page completa que guia o visitante até o contato com o profissional.
        </p>
      </div>
    ),
    video: "/videos/personal.mp4",
    tech: ["WhatsApp", "Next.js", "TypeScript", "CSS Modules"],
    demo: "https://personal-trainer-blush-zeta.vercel.app/",
    code: "https://github.com/AlunaAlanaMotta/personal-trainer",
  },

  {
    title: "Maison Noir — Estúdio de Beleza",
    shortTitle: "Maison Noir",
    category: "Landing Page",
    url: "salao-maison-noir.vercel.app",
    description:
      "Landing page sofisticada para estúdio de beleza com galeria de transformações, tabela de serviços e agendamento direto pelo WhatsApp.",
    details: (
      <div className={styles.detailsContent}>
        <p className={styles.intro}>
          Projeto autoral com identidade visual forte e elegante, desenvolvido
          para um estúdio de beleza exclusivo por agendamento.
        </p>
        <div className={styles.highlights}>
          <span>
            <i className="fab fa-whatsapp"></i> Agendamento via WhatsApp
          </span>
          <span>
            <i className="fas fa-images"></i> Galeria de transformações
          </span>
          <span>
            <i className="fas fa-rocket"></i> Deploy em produção
          </span>
        </div>
        <h4>
          <i className="fas fa-code"></i> Tecnologias
        </h4>
        <div className={styles.techList}>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>CSS</span>
        </div>
        <h4>
          <i className="fas fa-check-circle"></i> Funcionalidades
        </h4>
        <ul>
          <li>
            Apresentação de serviços com preços (corte, coloração, tratamento,
            progressiva)
          </li>
          <li>Galeria de transformações antes/depois</li>
          <li>Depoimentos de clientes</li>
          <li>Informações de localização e horários</li>
          <li>Agendamento direto pelo WhatsApp</li>
        </ul>
        <p className={styles.result}>
          Projeto que une design sofisticado com estrutura orientada à
          conversão, refletindo a identidade premium do estúdio.
        </p>
      </div>
    ),
    video: "/videos/salaoCabelo.mp4",
    tech: ["Galeria", "Next.js", "TypeScript", "CSS"],
    demo: "https://salao-maison-noir.vercel.app/",
    code: "https://github.com/AlunaAlanaMotta/salao-maisonNoir",
  },

  {
    title: "Belle Âme — Clínica de Estética",
    shortTitle: "Belle Âme",
    category: "Institucional",
    url: "salao-estetica-belle-ame.vercel.app",
    description:
      "Site institucional para clínica de estética com apresentação de tratamentos, diferenciais, depoimentos e agendamento direto pelo WhatsApp.",
    details: (
      <div className={styles.detailsContent}>
        <p className={styles.intro}>
          Projeto autoral desenvolvido para uma clínica de estética, com design
          sofisticado e estrutura orientada à conversão de novos clientes.
        </p>
        <div className={styles.highlights}>
          <span>
            <i className="fab fa-whatsapp"></i> Agendamento via WhatsApp
          </span>
          <span>
            <i className="fas fa-spa"></i> Segmento estética
          </span>
          <span>
            <i className="fas fa-rocket"></i> Deploy em produção
          </span>
        </div>
        <h4>
          <i className="fas fa-code"></i> Tecnologias
        </h4>
        <div className={styles.techList}>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>CSS</span>
        </div>
        <h4>
          <i className="fas fa-check-circle"></i> Funcionalidades
        </h4>
        <ul>
          <li>
            Apresentação de tratamentos: facial, corporal, rejuvenescimento e
            avançado
          </li>
          <li>Seção de diferenciais e proposta de valor</li>
          <li>Depoimentos de clientes com avaliações</li>
          <li>Estatísticas de credibilidade (8+ anos, 3k atendimentos)</li>
          <li>Agendamento direto pelo WhatsApp</li>
        </ul>
        <p className={styles.result}>
          Projeto que demonstra domínio em criar experiências visuais premium
          alinhadas à identidade e ao público de cada marca.
        </p>
      </div>
    ),
    video: "/videos/estetica.mp4",
    tech: ["Depoimentos", "Next.js", "TypeScript", "CSS"],
    demo: "https://salao-estetica-belle-ame.vercel.app/",
    code: "https://github.com/AlunaAlanaMotta/salao-estetica-Belle-Ame",
  },
];
