import type { Metadata } from 'next'
import { APP } from '@/lib/config'
import TechnicalFrame from '@/components/TechnicalFrame'
import Reveal from '@/components/Reveal'
import LedgerDemo from '@/components/LedgerDemo'

export const metadata: Metadata = {
  title: 'Athena Ledger & EU AI Act Readiness — Local-First Code Provenance & Audit Trail',
  description:
    'Athena Ledger records which AI agent, model, and human reviewed every change in your codebase. Built for EU AI Act Articles 50, 26, and 4 compliance with OS keychain encryption and 6-month retention.'
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M2 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

export default function LedgerPage() {
  return (
    <TechnicalFrame>
      {/* -- Header / Hero -- */}
      <section className="relative overflow-hidden text-center">
        <div className="relative z-10 mx-auto max-w-5xl px-6 pb-16 pt-16 sm:px-10 sm:pt-24">
          <Reveal>
            <div className="inline-flex items-center gap-2 border border-hairline bg-surface-1 px-3.5 py-1.5 text-xs font-mono text-ink-muted">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>EU AI Act Compliance Engine</span>
              <span className="text-ink-muted/40">|</span>
              <span className="text-accent">Opt-in & Local-First</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="display-xl mx-auto mt-6 max-w-4xl text-ink">
              Athena Ledger
              <span className="block text-ink-muted">Code-Attributie & EU AI Act Readiness</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="body-lg mx-auto mt-6 max-w-2xl text-ink-muted">
              Weet exact welke agent, welk model en welk sessievenster elke regel code heeft gegenereerd.
              Encrypted op jouw OS-keychain met automatische 6-maands retentie voor zorgeloze EU-compliance.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="/download" className="btn btn-primary group">
                Download Athena v{APP.version}
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowIcon />
                </span>
              </a>
              <a href="/docs/review/attribution" className="btn btn-secondary">
                Lees de Ledger Documentatie
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -- Live Inspector Visualizer Section -- */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <div className="mb-8 text-center">
              <h2 className="headline text-ink uppercase tracking-wider font-mono text-xs text-accent">
                Interactive Compliance Demonstrator
              </h2>
              <p className="display-md mt-2 text-ink">
                Inspecteer de Athena Ledger audit trail in actie
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <LedgerDemo />
          </Reveal>
        </div>
      </section>

      {/* -- EU AI Act Articles Breakdown -- */}
      <section className="py-20 bg-surface-1/30 border-y border-hairline">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="display-lg text-ink">
                Klaar voor de wetgeving van morgen
                <span className="block text-ink-muted">- zonder extra administratie</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Reveal delay={90}>
              <div className="card h-full border border-hairline-soft p-6 bg-surface-1">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center bg-surface-2 text-emerald-400">
                    <EyeIcon />
                  </span>
                  <span className="font-mono text-xs text-accent font-semibold">Artikel 50</span>
                </div>
                <h3 className="headline mt-4 text-ink">Transparantie & Watermarking</h3>
                <p className="body-sm mt-2 text-ink-muted">
                  Eis van de EU AI Act om AI-gegenereerde output te kunnen identificeren. Athena Ledger stempelt elke commit en diff met het exacte CLI agent-type en AI-model.
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="card h-full border border-hairline-soft p-6 bg-surface-1">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center bg-surface-2 text-emerald-400">
                    <ShieldIcon />
                  </span>
                  <span className="font-mono text-xs text-accent font-semibold">Artikel 26</span>
                </div>
                <h3 className="headline mt-4 text-ink">Audit Log & Bewaarplicht</h3>
                <p className="body-sm mt-2 text-ink-muted">
                  Verplichte logging van AI-systeemgebruik gedurende minimaal 6 maanden. Athena Ledger hanteert een automatische 183-dagen retentie met onveranderbare append-only records.
                </p>
              </div>
            </Reveal>

            <Reveal delay={270}>
              <div className="card h-full border border-hairline-soft p-6 bg-surface-1">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center bg-surface-2 text-emerald-400">
                    <ClockIcon />
                  </span>
                  <span className="font-mono text-xs text-accent font-semibold">Artikel 4</span>
                </div>
                <h3 className="headline mt-4 text-ink">AI Literacy & Human Oversight</h3>
                <p className="body-sm mt-2 text-ink-muted">
                  Aantonen dat menselijke ontwikkelaars AI-output begrijpen en reviewen (Recital 134). Athena legt expliciet vast wie een diff heeft goedgekeurd via <code>mark-reviewed</code>.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -- Deep Pillars / Architecture Features -- */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="display-lg text-ink">
                Veiligheid en Privacy als Fundament
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Reveal delay={100}>
              <div className="border border-hairline-soft bg-surface-1 p-6 flex items-start gap-4">
                <div className="p-3 bg-surface-2 text-accent">
                  <LockIcon />
                </div>
                <div>
                  <h3 className="headline text-ink">Encryption at Rest (safeStorage)</h3>
                  <p className="body-sm mt-2 text-ink-muted">
                    Athena Ledger gebruikt de native OS Keychain (Windows DPAPI, macOS Keychain, Linux Secret Service) om ledgerbestanden op schijf te versleutelen. Broncode en modelgebruik blijven nooit onbeveiligd op schijf achter.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="border border-hairline-soft bg-surface-1 p-6 flex items-start gap-4">
                <div className="p-3 bg-surface-2 text-accent">
                  <ShieldIcon />
                </div>
                <div>
                  <h3 className="headline text-ink">Worktree & Session Attributie</h3>
                  <p className="body-sm mt-2 text-ink-muted">
                    Ondersteunt 35+ agent CLI&apos;s (Claude Code, Codex, OpenCode, Pi, Cursor, Gemini, Aider). Wijzigingen worden via git name-status en file mtime gecorreleerd aan de juiste agent worktree.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -- CLI Integration Showcase -- */}
      <section className="py-16 bg-surface-2/40 border-t border-hairline">
        <div className="mx-auto max-w-4xl px-6 sm:px-10">
          <Reveal>
            <div className="text-center mb-8">
              <h2 className="display-md text-ink">Direct op te vragen via de Athena CLI</h2>
              <p className="body mt-2 text-ink-muted">Exporteer rapporten voor je legal team of compliance audit met één commando.</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="border border-hairline bg-black/90 p-4 font-mono text-xs text-ink leading-relaxed overflow-x-auto shadow-2xl">
              <div className="text-ink-muted mb-2"># Genereer een EU AI Act Art 26 audit rapport</div>
              <div className="text-accent">$ athena ledger export --eu-act --format json --output audit-2026.json</div>
              <div className="text-emerald-400 mt-2">✓ Encrypted ledger unlocked via OS safeStorage</div>
              <div className="text-emerald-400">✓ Export generated: 412 entries provenanced across 5 worktrees</div>
              <div className="text-emerald-400">✓ Compliance readiness score: 98.4% (Art 50 & Art 26 verified)</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -- Legal / Compliance Disclaimer -- */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-10">
          <div className="border border-amber-500/20 bg-amber-500/5 p-4 text-xs text-amber-300/80 leading-relaxed">
            <strong>Juridische mededeling:</strong> Athena Ledger verzamelt en versleutelt feitelijke auditgegevens over AI-code-attributie. Hoe je deze data inzet voor je formele naleving van de EU AI Act is afhankelijk van je specifieke bedrijfssituatie. Raadpleeg je compliance- en juridisch adviseur.
          </div>
        </div>
      </section>
    </TechnicalFrame>
  )
}
