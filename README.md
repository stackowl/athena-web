# athena/web

Landing page and download site for **Athena ADE** — the agentic development
environment for parallel builders.

Built with Next.js (App Router), React 19 and Tailwind CSS v4. Dark-only
theme, no auth, no database — a static marketing site.

## Pages

| Route          | Purpose                                              |
| -------------- | ---------------------------------------------------- |
| `/`            | Landing page: hero, features, how-it-works, CTA      |
| `/download`    | Download page: platform cards, install notes, checksums |

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
```

## Configuring download artifacts

All site constants (version, GitHub links, artifact filenames) live in
[`lib/config.ts`](lib/config.ts). When the first release is cut:

1. Update `APP.version` and `APP.releasesUrl`.
2. Point the platform `file` fields at the real artifact names.
3. Serve the binaries at `APP.downloadsBase` (default `/downloads/`), or
   change `downloadsBase` to the real CDN/release URL.

## Design

Follows [`DESIGN.md`](DESIGN.md) — a Framer-derived dark-canvas system adapted
for Athena with a site-wide sharp-corner override:

- Near-black canvas `#090909` with charcoal surfaces (`#141414` / `#1c1c1c`)
- Binary ink hierarchy: pure white ink / `#999999` muted
- Single signal accent `#0099ff` — hyperlinks, focus, selection only
- Display type in Inter 600 with aggressive negative tracking (-0.05em)
- Gradient spotlight cards (violet / magenta / orange / coral) as signature tiles
- `border-radius: 0` everywhere — see the `rounded:` tokens in `DESIGN.md`

Tokens and component classes live in `app/globals.css` (Tailwind v4 `@theme`).
