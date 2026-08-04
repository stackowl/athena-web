# Docs Authoring Guide (Athena ADE)

You are writing the **Athena ADE** documentation site, which recreates the structure/look of
`https://www.onorca.dev/docs` but documents **Athena** (the stackowl/athena open-source agent
development environment). English content only.

## Context: what Athena is

Athena is a desktop IDE that runs multiple AI coding agent CLIs side by side — Claude Code, Codex,
OpenCode, Pi, and 35+ more. Every agent gets its own **isolated git worktree**, its own terminal,
and its own place on a **board** (branches, commits, PRs). Core loop: **spawn → track → merge**.
Local-first, no account, no telemetry, MIT open source. Feature areas (already documented elsewhere
in this repo, reuse their facts):
- Worktrees (isolated checkouts, gedeelde history, clean main).
- Agents & sessions (a session = workspace + agents; mix providers in one session; no lock-in).
- Diff viewer + annotate (review AI diffs in isolation, inline comments).
- Attribution / "Athena Ledger" (every change attributed to agent+model+session; EU AI Act Art
  50/26/4; 6-month retention; opt-in).
- GitHub + Linear integration (PRs/issues in one timeline; `athena linear ...` CLI).
- Skills & plugins (markdown skills, release automation, security review).
- Remote: local, WSL, SSH hosts, browser pairing; code stays on the host you choose.
- CLI (`athena`): sessions, worktrees, terminals, orchestration, linear, all with `--json`.
- Orchestration: task DAGs, decision gates, `worker_done/escalation/question` checks.
- Mobile companion (early access, iOS/Android).

**Honesty rule:** if a page mirrors an Orca feature that Athena does not ship yet, write clear,
accurate copy about the closest Athena capability and mark it "Roadmap" / "coming soon". Do NOT
fabricate features. Keep pages short and concrete — matching the Orca docs tone (lead with the
behavior, then a how-to, then a callout).

## Component API — USE THESE EXACTLY (do not invent new components)

Every page must import and wrap content with these. Copy the import block from the exemplar below.

- `DocsArticle` from `@/components/docs/DocsArticle` — the shared page shell. Props:
  `title: string`, `lede: ReactNode` (a one-line subtitle; can contain JSX), `children`.
- `Callout` from `@/components/docs/Callout` — a highlighted box. Props: `title?`, `type?`
  (`'info' | 'success' | 'warn' | 'default'`), `children`.
- `Link` from `next/link` for internal `/docs/...` links.
- `APP` from `@/lib/config` for external links (`APP.githubUrl`, `APP.releasesUrl`,
  `APP.downloadsBase`, `APP.siteUrl`).

Inside `children` use **semantic HTML** — it is styled by the global `.docs-content` class:
`<h2 id="...">` (gives an id so it appears in the on-page TOC), `<h3>`, `<p>`, `<strong>`, `<code>`,
`<pre>` (a `<code>` block needs to be inside `<pre>`), `<ul>/<li>`, `<ol>`, `<table>/<thead>/<tbody>/<tr>/<th>/<td>`, `<a href>` (external) or `<Link href>`, `<hr>`, `<blockquote>`, `<img src>`.
Use `<ol className="docs-steps">` + `<li>` for numbered step flows (renders numbered circles).

Screenshot assets available under `/screens/`: `hero.jpg`, `parallel-worktrees.jpg` (+`.gif`),
`design-mode.jpg`, `terminal-splits.jpg`, `annotate-diff.jpg`, `github-linear.jpg`, `file-drag.jpg`,
`ssh-worktrees.jpg`. Use them where relevant inside a rounded bordered figure:
```tsx
<figure className="my-6">
  <div className="overflow-hidden rounded-lg border border-white/10">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/screens/parallel-worktrees.jpg" alt="..." loading="lazy" decoding="async" />
  </div>
  <figcaption className="mt-2 text-sm text-white/45">caption</figcaption>
</figure>
```

## EXEMPLAR PAGE — copy this shape exactly (this is `/docs/first-session`)

```tsx
import type { Metadata } from 'next'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Your first 3-agent session',
  description: 'From a fresh install to three agents racing on the same bug — in about five minutes.'
}

export default function FirstSessionPage() {
  return (
    <DocsArticle
      title="Your first 3-agent session"
      lede="From a fresh install to three agents racing on the same bug — in about five minutes."
    >
      <p>Lead paragraph.</p>

      <h2 id="prerequisites">Prerequisites</h2>
      <ul>
        <li>Point one: <a href="/docs/install">Install</a>.</li>
        <li>Point two.</li>
      </ul>

      <h2 id="something">1. Do the thing</h2>
      <pre>{`athena session create --name x --path ./proj`}</pre>

      <Callout type="success" title="Done">
        <p>Closing note with a <Link href="/docs/...">cross-link</Link>.</p>
      </Callout>
    </DocsArticle>
  )
}
```

## File rules

- Create ONLY the `page.tsx` files assigned to you under `app/(docs)/docs/...` (create directories
  as needed). Do NOT edit the layout, the shell, `lib/docs.ts`, or any other file.
- Each file exports a default component (name = `XxxPage`) and `export const metadata`.
- Use single quotes, 2-space indent, hanging JSX like the exemplar.
- Escape apostrophes in JSX text as `&apos;` (ESLint `react/no-unescaped-entities` will fail
  otherwise). In plain string data you can use a normal apostrophe.
- No unused imports.
- The nav sidebar is generated from `lib/docs.ts` — you do not need to add links; just create the
  page files at the exact paths given.

When done, report the list of files you created (relative paths) and a 1-line summary each.
