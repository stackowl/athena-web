# Athena Ledger & EU AI Act Readiness Page - Implementation Plan

## Objective
Build a dedicated product showcase page at `/ledger` (with navigation links in `Navbar` and `Footer`) that highlights **Athena Ledger** and its **EU AI Act Compliance Pack** (Articles 50, 26, and 4 readiness).

---

## 1. Context & Architecture (Derived from `C:\Users\pc\Desktop\athena`)
Athena Ledger is an append-only, local-first, dev-only code provenance ledger and audit engine shipped with Athena ADE:
- **Attribution Engine (S1/S1x)**: Captures git changes, correlates timestamps/mtimes with agent sessions (Claude Code, Codex, OpenCode, Pi, Cursor, Gemini, Aider, and 35+ supported CLIs) and git worktrees.
- **Opt-in & Lifecycle (S2)**: Opt-in (`settings.ledger.enabled`), idempotent start/stop lifecycle.
- **Human-in-the-Loop Review State (S3 & Recital 134)**: Tracks explicit review states (`mark-reviewed`), distinguishing human review vs raw AI generation.
- **Encryption at Rest (S4)**: Encrypted via OS Keychain (`safeStorage`) with fallback to durable atomic JSON writes (`fsync` + rename).
- **Automated Retention & Pruning (S5)**: Configurable retention period (default `retentionDays: 183` >= 6 months to satisfy Art 26 audit log obligations), serialized async write chain.
- **Audit-Ready Reports & Literacy (S6 & S7)**: Automated export generator (`buildArt26Export`), Settings UI, and i18n support.

---

## 2. EU AI Act Compliance Mapping
- **Article 50 — Transparency & Watermarking**: Distinguishes agent-generated diffs from human edits with per-change provenance tags (Agent + Model + Session ID).
- **Article 26 — Audit Trail & Log Retention**: Maintains unalterable 6-month+ audit-ready logs encrypted at rest. Offers one-click export for compliance officers and legal counsel.
- **Article 4 — AI Literacy**: Team-wide visibility into AI tool distribution, model reliance, and code review coverage across repositories.

---

## 3. Page Structure (`/app/(site)/ledger/page.tsx`)
The `/ledger` page will follow Athena's high-contrast, premium dark design system (`TechnicalFrame`, `Reveal`, `BentoGrid` styling, glassmorphism, accent glows):

### Page Sections:
1. **Hero Section**:
   - Headline: *"Audit-Ready Code Attribution for the EU AI Act."*
   - Subhead: *"Every agent, model, commit, and review log encrypted locally at rest. Compliance without friction."*
   - Badges: `v1.6.0 Live`, `Art 50 Transparency`, `Art 26 Audit Log`, `Art 4 Literacy`.
   - CTAs: Download Athena ADE & View Compliance Docs.

2. **Interactive Provenance & Audit Log Visualizer (Client Component)**:
   - Interactive UI mock illustrating an Athena Ledger record:
     - Real-time file diff toggle (Human vs Claude vs Codex vs OpenCode).
     - Encryption badge (`safeStorage` encrypted state).
     - Article 50 badge tags (e.g., `model: claude-3-7-sonnet`, `worktree: feature/ledger-s7`, `reviewedBy: @alex`).
     - JSON / PDF Compliance Export Preview toggle (`buildArt26Export` output preview).

3. **Core Architecture Bento Grid (4 Columns)**:
   - **Local-First Keychain Encryption**: `safeStorage` OS keychain integration; code & metadata stay strictly local.
   - **Worktree & Session Attribution**: 35+ supported CLIs attributed to specific git worktrees.
   - **6-Month Automated Retention**: S5 scheduler with retention window matching EU regulatory standards.
   - **Human-in-the-Loop Verification**: Recital 134 compliance with explicit `mark-reviewed` tracking.

4. **EU AI Act Regulation Deep-Dive**:
   - **Article 50**: Labeling & Transparency requirements.
   - **Article 26**: Record-keeping obligations for deployers of high-risk / general-purpose AI models.
   - **Article 4**: AI Literacy metrics showing model breakdown & review ratio.

5. **Technical Spec & CLI Operations**:
   - Terminal mock showcasing `athena ledger query`, `athena ledger export --eu-act`, and `athena settings`.

6. **Callout & Legal Disclaimer**:
   - Non-custodial, local-first guarantee.
   - Disclaimer: *"Athena Ledger provides empirical evidence logs; consult legal counsel for formal compliance filings."*

---

## 4. Files to Create & Update
1. **`lib/site.ts`**: Add `Ledger` to `PRIMARY_NAV` and `FOOTER_COLUMNS`.
2. **`components/LedgerDemo.tsx`**: Interactive audit log component (Client Component) for model attribution, diff inspection, and report export simulation.
3. **`app/(site)/ledger/page.tsx`**: Main landing page with full SEO metadata, structured sections, and responsive layout.
4. **`app/(site)/ledger/metadata.ts`** or embedded `export const metadata`.

---

## 5. Verification Plan
- Run `npm run build` to verify Next.js route compilation and TypeScript safety.
- Run `npm run lint` to enforce ESLint standards.
- Verify visual aesthetics and interactive elements.
