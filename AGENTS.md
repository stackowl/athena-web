# athena/web

Landing page and download site for **Athena ADE** — Next.js App Router +
React 19 + Tailwind v4. Dark-only theme, no auth, no database.

## Structure

- `app/page.tsx` — landing page (hero, features, how-it-works, CTA)
- `app/download/page.tsx` — download page (platform cards, install notes)
- `components/` — `Navbar`, `Footer` (brand + shared layout)
- `lib/config.ts` — **single source of truth** for version, GitHub links,
  download base path and per-platform artifact metadata
- `app/globals.css` — Tailwind v4 theme tokens (ink palette, accent)

## Conventions

- Server components only — no client-side state on this site yet.
- Metadata is set in `app/layout.tsx` (template) and per-page.
- When adding copy, keep the tone short and concrete; avoid hype.
- To add a page: create `app/<route>/page.tsx` and a link in `Navbar`.

## Commands

```bash
npm run dev    # dev server
npm run build  # production build (validates types)
npm run lint   # eslint
```
