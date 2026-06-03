# Portfólio — Alana Motta

Portfólio pessoal desenvolvido do zero com Next.js 16, TypeScript e CSS Modules. Apresenta projetos autorais, stack técnica, trajetória acadêmica e canais de contato.

**[→ Ver online](https://portfolio-dev-alana.vercel.app)**

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 16 (App Router) |
| Linguagem | TypeScript 5 |
| Estilo | CSS Modules + Tailwind CSS 4 |
| UI / Ícones | React Icons 5, Lucide React |
| 3D | Three.js + React Three Fiber + Drei |
| Fontes | Space Grotesk + Geist (next/font) |
| Deploy | Vercel |

---

## Páginas

| Rota | Descrição |
|---|---|
| `/` | Hero, vitrine de projetos |
| `/about` | Trajetória pessoal e interesses |
| `/skills` | Stack técnica com painel interativo |
| `/academicJourney` | Formação e cursos |
| `/contact` | Formulário e redes sociais |

---

## Rodando localmente

```bash
# instalar dependências
npm install

# iniciar servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

```bash
# build de produção
npm run build

# iniciar em modo produção
npm start

# lint
npm run lint
```

---

## Estrutura

```
app/                  # rotas (App Router)
  about/
  academicJourney/
  contact/
  skills/
  opengraph-image.tsx # og:image gerado via next/og
  sitemap.ts
  robots.ts
components/           # componentes por feature
  Hero/
  Projects/
  Skills/
  Footer/
  Navbar/
  ...
public/
  images/
  videos/             # demos dos projetos
```

---

## Projetos em destaque

- **Vitz Monitoramento** — site institucional em produção (Next.js, TypeScript, SEO)
- **Site para Advogado** — formulário jurídico com Supabase + Resend
- **Clínica Odontológica** — agendamento via WhatsApp
- **Personal Trainer** — landing page com planos e depoimentos
- **Maison Noir** — estúdio de beleza com galeria de transformações
- **Belle Âme** — clínica de estética com foco em conversão

---

## Contato

- LinkedIn: [alana-motta-da-cruz-dev](https://www.linkedin.com/in/alana-motta-da-cruz-dev/)
- GitHub: [AlunaAlanaMotta](https://github.com/AlunaAlanaMotta)
- Email: mottaalana0@gmail.com
