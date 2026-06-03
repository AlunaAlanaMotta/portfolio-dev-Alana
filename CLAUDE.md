# CLAUDE.md — Portfólio Alana Motta

Contexto permanente para Claude Code. Leia inteiro antes de qualquer tarefa.

---

## ⚠️ Next.js — Versão com Breaking Changes

<!-- BEGIN:nextjs-agent-rules -->

Esta versão pode ter breaking changes — APIs, convenções e estrutura de arquivos podem diferir do seu treinamento. Leia o guia relevante em `node_modules/next/dist/docs/` antes de escrever qualquer código. Respeite os avisos de deprecação.

<!-- END:nextjs-agent-rules -->

---

## Quem é Alana

Desenvolvedora front-end focada em UX/UI premium. Projetos com identidade visual cinematográfica, dark theme, elementos 3D e impacto visual máximo. GitHub: `AlunaAlanaMotta`.

---

## Stack Obrigatória

```
Next.js 14+    App Router — Server Components por padrão
TypeScript     strict mode — zero any — interfaces tipadas
CSS Modules    zero Tailwind — zero styled-components — zero inline styles
Framer Motion  animações de UI — sempre em Client Components
Three.js       cenas 3D — import dinâmico no useEffect (sem SSR)
next/image     todas as imagens — sempre com sizes definido
next/font      fontes Google — nunca CDN externo
```

---

## Identidade Visual

### Paleta — CSS Variables (globals.css)

```css
--primary: #00c896;
--primary-dim: rgba(0, 200, 150, 0.15);
--primary-glow: rgba(0, 200, 150, 0.4);
--primary-border: rgba(0, 200, 150, 0.25);
--dark: #060d18;
--dark-2: #0a1628;
--dark-3: #0f1e35;
--text: #e8f0fe;
--text-muted: rgba(232, 240, 254, 0.5);
--border: rgba(0, 200, 150, 0.15);
```

### Tipografia — Obrigatória

- **Títulos / Display:** `Syne` (800, 700) via `next/font/google`
- **Corpo / UI / Labels:** `Space Mono` (400, 700) via `next/font/google`
- **Nunca usar:** Inter, Roboto, Arial, system-ui como fonte principal

```css
h1 {
  font-family: var(--font-syne);
  font-size: clamp(42px, 6vw, 80px);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1;
}
h2 {
  font-family: var(--font-syne);
  font-size: clamp(28px, 4vw, 56px);
  font-weight: 800;
}
p {
  font-family: var(--font-mono);
  font-size: 13px;
  line-height: 1.8;
  color: var(--text-muted);
}
```

---

## Estrutura de Pastas

```
app/
├── layout.tsx            ← metadata global, fontes, providers
├── page.tsx              ← Server Component
├── globals.css           ← reset, tokens, utilitários
├── sitemap.ts            ← geração automática
├── robots.ts
├── opengraph-image.tsx   ← og:image via next/og
└── (routes)/about|projects|skills|contact|academicJourney

components/
├── ui/          ← Button/ CornerFrame/ Badge/ — cada um com CSS Module próprio
├── sections/    ← Hero/ Projects/ About/ Skills/ Contact/
├── three/       ← cenas Three.js — sempre "use client"
└── layout/      ← Navbar/ Footer/

hooks/           ← useNavbarScroll useMenu useScrollReveal useScrollVisibility
lib/             ← data/ utils/ constants/
types/           ← index.ts com interfaces globais
public/
├── images/
├── videos/
└── models/      ← .glb .gltf para Three.js
```

---

## Regras de Componente

### Server Component (padrão — sem diretiva)

```tsx
import styles from "./Component.module.css";

interface ComponentProps {
  title: string;
  children?: React.ReactNode;
}

export function Component({ title, children }: ComponentProps) {
  return <section className={styles.root}>{children}</section>;
}
```

### Client Component (somente com justificativa)

```tsx
"use client";
// Válido apenas para: useState/useEffect/useRef, eventos complexos,
// Three.js/canvas, Framer Motion, IntersectionObserver, window/document
```

### CSS Module — estrutura padrão

```css
.root {
  /* mobile-first */
}
@media (min-width: 768px) {
  .root {
    /* tablet  */
  }
}
@media (min-width: 1280px) {
  .root {
    /* desktop */
  }
}
```

---

## TypeScript — Nível Sênior

```tsx
// ❌ NUNCA
const fn = (e: any) => {};
type Props = { [key: string]: any };

// ✅ SEMPRE
const fn = (e: React.MouseEvent<HTMLButtonElement>) => {};
interface Props {
  variant: "primary" | "secondary";
  children: React.ReactNode;
}
async function getData<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json() as Promise<T>;
}
```

---

## SEO — Obrigatório em Toda Página

```tsx
// app/layout.tsx — base
export const metadata: Metadata = {
  metadataBase: new URL("https://portolio-dev-alana.vercel.app"),
  title: {
    default: "Alana Motta | Desenvolvedora Front-End",
    template: "%s | Alana Motta",
  },
  description:
    "Desenvolvedora front-end especializada em React, Next.js e TypeScript.",
  openGraph: { type: "website", locale: "pt_BR", siteName: "Alana Motta" },
  twitter: { card: "summary_large_image" },
};

// app/about/page.tsx — por rota
export const metadata: Metadata = {
  title: "Sobre", // renderiza "Sobre | Alana Motta"
  description:
    "Conheça a trajetória de Alana Motta, desenvolvedora front-end...",
  alternates: { canonical: "https://portolio-dev-alana.vercel.app/about" },
};
```

**Checklist SEO por página:**

- `title` único (não genérico)
- `description` 120–160 chars com palavras-chave
- `og:image` via `opengraph-image.tsx`
- `alternates.canonical` definido
- `h1` único por página
- `alt` em todas as imagens
- Rota no `sitemap.ts`

---

## Elementos 3D — Padrões

### Three.js — import sempre dinâmico

```tsx
'use client'
useEffect(() => {
  import('three').then(({ Scene, PerspectiveCamera, WebGLRenderer, ... }) => {
    // setup, animate, cleanup
    return () => { geometry.dispose(); material.dispose(); renderer.dispose() }
  })
}, [])
```

### CSS 3D — tilt no hover

```tsx
const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
  const x = ((e.clientX - left) / width - 0.5) * 16;
  const y = ((e.clientY - top) / height - 0.5) * -16;
  e.currentTarget.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) scale(1.02)`;
};
```

### Imagens 3D — float + reflexo

```css
.mockup {
  animation: float 5s ease-in-out infinite;
  filter: drop-shadow(0 40px 60px rgba(0, 200, 150, 0.2));
}
.mockup img {
  transform: perspective(1000px) rotateY(-8deg) rotateX(4deg);
}
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}
```

---

## Responsividade — Breakpoints

```css
/* Mobile-first — sem media query = mobile */
/* Tablet  */
@media (min-width: 768px) {
}
/* Desktop */
@media (min-width: 1024px) {
}
/* Wide    */
@media (min-width: 1280px) {
}
```

**Tipografia responsiva — sempre clamp:**

```css
h1 {
  font-size: clamp(36px, 6vw, 80px);
}
h2 {
  font-size: clamp(28px, 4vw, 56px);
}
p {
  font-size: clamp(14px, 1.2vw, 16px);
}
```

**Checklist — validar em 3 tamanhos antes de entregar:**

- `375px` — 1 coluna, sem overflow horizontal, textos ≥14px, touch targets ≥44px
- `768px` — 2 colunas onde faz sentido, padding aumentado
- `1280px` — layout assimétrico de projetos, container max 1200px

---

## Efeitos Visuais — Biblioteca

```css
/* Dot pulsante */
@keyframes pulse {
  0%,
  100% {
    box-shadow: 0 0 0 0 var(--primary-glow);
  }
  50% {
    box-shadow: 0 0 0 6px transparent;
  }
}

/* Scan line em card destaque */
.featured::after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--primary), transparent);
  animation: scan 3s linear infinite;
  opacity: 0.3;
}
@keyframes scan {
  0% {
    top: 0;
  }
  100% {
    top: 100%;
  }
}

/* Reveal de texto (clip-path) */
.accent {
  color: transparent;
  -webkit-text-stroke: 1px var(--primary);
  position: relative;
}
.accent::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  top: 0;
  color: var(--primary);
  clip-path: inset(0 100% 0 0);
  animation: revealText 1.2s 0.5s cubic-bezier(0.77, 0, 0.18, 1) forwards;
}
@keyframes revealText {
  to {
    clip-path: inset(0 0% 0 0);
  }
}

/* Glassmorphism */
.glass {
  background: rgba(10, 22, 40, 0.7);
  backdrop-filter: blur(16px);
  border: 1px solid var(--border);
}

/* Float */
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
```

---

## Hooks em Uso

```
useNavbarScroll(threshold?)   → boolean — scroll > threshold
useMenu()                     → { isOpen, open, close, toggle }
useScrollReveal(threshold?)   → ref — adiciona classe 'visible' ao entrar na viewport
useScrollVisibility(thresh?)  → [ref, boolean]
```

---

## Problemas Recorrentes — Soluções Diretas

| Problema               | Solução                                                        |
| ---------------------- | -------------------------------------------------------------- |
| Hydration mismatch     | `useState(0)` + `useEffect(() => setVal(window.x), [])`        |
| Three.js SSR crash     | `import('three')` dentro de `useEffect`                        |
| Overflow horizontal    | `body { overflow-x: hidden }` + `section { overflow: hidden }` |
| `next/image` sem sizes | Sempre `sizes="(max-width: 768px) 100vw, 50vw"`                |
| Lucide bundle grande   | `import { Icon } from 'lucide-react'` — nunca `import *`       |
| Turbopack lento        | Desabilitar no `next.config.ts` se necessário                  |

---

## Checklist de Entrega

Antes de qualquer commit, validar:

- [ ] Server Component por padrão — `"use client"` tem justificativa?
- [ ] CSS Module próprio por componente?
- [ ] Zero `any` no TypeScript?
- [ ] Imports com `@/` (path alias)?
- [ ] Pelo menos 1 efeito visual ou elemento 3D?
- [ ] Animação de entrada (Framer Motion ou CSS)?
- [ ] `metadata` com `title` único e `description`?
- [ ] `og:image` configurada?
- [ ] Testado em 375px, 768px, 1280px?
- [ ] Sem overflow horizontal?
