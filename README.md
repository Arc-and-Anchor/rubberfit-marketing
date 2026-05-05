# Rubberfit Marketing

Marketing site for **Rubberfit** — `rubberfit.app`. Manufacturing operations
platform for rubber-roll fabricators. Rust nesting engine, AI-augmented
planner, audit-ready cut layouts.

Built and maintained by **Arc & Anchor** (Las Vegas, NV).

## Stack

- Next.js 16 (App Router) + Turbopack
- Tailwind CSS v4 with `@theme` design tokens
- framer-motion for hero stagger and the live nesting demo
- next/font: Manrope (display) + Inter (body) + JetBrains Mono (specs)
- Deployed on Vercel

## Design language

Industrial spec-sheet — distinct from the cartographic Arc & Anchor site
and the wax-seal Sigilix site:

| Token | Hex | Role |
|---|---|---|
| Mill paper | `#f6f5f2` | Page canvas |
| Drafting board | `#eceae4` | Cards, panels |
| Graphite | `#14171b` | Ink, primary CTA fill |
| Signal Orange | `#ee5a24` | CTAs, highlights, live tag |
| Drafting Blue | `#2b66c2` | Reserved (charts, technical accents) |

Hero showpiece is an animated SVG nesting demo: parts pack into a sheet of
stock with mm/cm grid + dimension lines, then a dashed travel-path draws
between them. Cycles every 7.2s.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## Routes

- `/` — homepage with hero, spec-sheet stats, engine breakdown,
  receive→ship flow, "Meet the creators" → arcanchor.com/about-us, and the
  primary "Open the app" CTA → rubberfit.app/login.

## Sister sites

- [arc-and-anchor-website](https://github.com/Arc-and-Anchor/arc-and-anchor-website) — the firm
- [sigilix-marketing](https://github.com/Arc-and-Anchor/sigilix-marketing) — the AI code-review product
