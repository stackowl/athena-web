'use client'

import { useState } from 'react'

type Entry = {
  id: string
  file: string
  lines: string
  agent: string
  model: string
  worktree: string
  timestamp: string
  reviewState: 'reviewed' | 'unreviewed'
  reviewedBy?: string
  diffPreview: {
    added: string[]
    removed: string[]
  }
}

const SAMPLE_ENTRIES: Entry[] = [
  {
    id: 'prov_8f92a10',
    file: 'src/main/provenance/provenance-cipher.ts',
    lines: '+35 -0',
    agent: 'Claude Code',
    model: 'claude-3-7-sonnet',
    worktree: 'wt/ledger-encryption',
    timestamp: '2026-08-04 09:40:56 UTC',
    reviewState: 'reviewed',
    reviewedBy: 'yassine@athena',
    diffPreview: {
      added: [
        'export function createSafeStorageCipher(safeStorage: SafeStorage): ProvenanceCipher {',
        '  return {',
        '    encrypt: (buf) => safeStorage.isEncryptionAvailable() ? safeStorage.encryptString(buf.toString()) : buf,',
        '    decrypt: (buf) => safeStorage.isEncryptionAvailable() ? Buffer.from(safeStorage.decryptString(buf)) : buf',
        '  }',
        '}'
      ],
      removed: []
    }
  },
  {
    id: 'prov_7c41b89',
    file: 'src/main/compliance/compliance-pack.ts',
    lines: '+179 -12',
    agent: 'Codex',
    model: 'gpt-5o-code',
    worktree: 'wt/eu-compliance',
    timestamp: '2026-08-04 09:03:08 UTC',
    reviewState: 'reviewed',
    reviewedBy: 'yassine@athena',
    diffPreview: {
      added: [
        'export function buildArt26Export(records: ProvenanceRecord[]): Art26Export {',
        '  return {',
        '    schemaVersion: "1.0",',
        '    generatedAt: new Date().toISOString(),',
        '    articles: ["Art 50 (Transparency)", "Art 26 (Audit Log)", "Art 4 (AI Literacy)"],',
        '    totalChanges: records.length,',
        '    humanReviewCoverage: calculateReviewRatio(records)',
        '  }',
        '}'
      ],
      removed: ['// TODO: implement raw JSON exporter without compliance fields']
    }
  },
  {
    id: 'prov_3a10e52',
    file: 'src/main/provenance/ledger-service.ts',
    lines: '+41 -3',
    agent: 'OpenCode',
    model: 'qwen-2.5-coder-32b',
    worktree: 'wt/ledger-retention',
    timestamp: '2026-08-04 09:35:06 UTC',
    reviewState: 'unreviewed',
    diffPreview: {
      added: [
        'export class LedgerService {',
        '  // Automatically prunes logs older than 183 days (Art 26 6-month retention)',
        '  async pruneRetention(retentionDays = 183): Promise<number> {',
        '    const cutoff = Date.now() - retentionDays * 86400 * 1000;',
        '    return this.ledger.pruneOlderThan(cutoff);',
        '  }',
        '}'
      ],
      removed: ['async pruneRetention(): Promise<void> {}']
    }
  }
]

export default function LedgerDemo() {
  const [activeId, setActiveId] = useState<string>(SAMPLE_ENTRIES[0].id)
  const [viewMode, setViewMode] = useState<'provenance' | 'art26-json'>('provenance')
  const [filterAgent, setFilterAgent] = useState<string>('all')

  const activeEntry = SAMPLE_ENTRIES.find((e) => e.id === activeId) || SAMPLE_ENTRIES[0]

  const filteredEntries = SAMPLE_ENTRIES.filter((e) =>
    filterAgent === 'all' ? true : e.agent.toLowerCase().includes(filterAgent.toLowerCase())
  )

  return (
    <div className="border border-hairline-soft bg-surface-1 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
      {/* Visualizer Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-hairline bg-surface-2/60 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="flex h-3 w-3 items-center-center">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          </span>
          <span className="font-mono text-xs font-semibold tracking-wider text-ink uppercase">
            Athena Ledger Inspector
          </span>
          <span className="border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-400">
            safeStorage Keychain Encrypted
          </span>
        </div>

        <div className="mt-2 flex items-center gap-2 sm:mt-0">
          <button
            onClick={() => setViewMode('provenance')}
            className={`px-3 py-1 font-mono text-xs transition-colors ${
              viewMode === 'provenance'
                ? 'bg-primary text-black font-semibold'
                : 'bg-surface-1 text-ink-muted hover:text-ink'
            }`}
          >
            Audit Record
          </button>
          <button
            onClick={() => setViewMode('art26-json')}
            className={`px-3 py-1 font-mono text-xs transition-colors ${
              viewMode === 'art26-json'
                ? 'bg-primary text-black font-semibold'
                : 'bg-surface-1 text-ink-muted hover:text-ink'
            }`}
          >
            Art 26 Export JSON
          </button>
        </div>
      </div>

      {viewMode === 'provenance' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-hairline">
          {/* Left panel: Entry List */}
          <div className="lg:col-span-5 p-4 space-y-3 bg-surface-1/50">
            <div className="flex items-center justify-between pb-2 border-b border-hairline-soft">
              <span className="text-xs text-ink-muted font-mono">Provenanced Changes ({filteredEntries.length})</span>
              <select
                value={filterAgent}
                onChange={(e) => setFilterAgent(e.target.value)}
                className="bg-canvas border border-hairline px-2 py-1 font-mono text-xs text-ink focus:outline-none"
              >
                <option value="all">All Agents</option>
                <option value="claude">Claude Code</option>
                <option value="codex">Codex</option>
                <option value="opencode">OpenCode</option>
              </select>
            </div>

            <div className="space-y-2">
              {filteredEntries.map((entry) => {
                const isSelected = entry.id === activeEntry.id
                return (
                  <button
                    key={entry.id}
                    onClick={() => setActiveId(entry.id)}
                    className={`w-full text-left p-3 border transition-all ${
                      isSelected
                        ? 'border-primary/60 bg-surface-2 shadow-sm'
                        : 'border-hairline-soft bg-canvas/40 hover:border-hairline hover:bg-surface-2/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-accent">{entry.id}</span>
                      <span className="font-mono text-[11px] text-emerald-400">{entry.lines}</span>
                    </div>
                    <p className="mt-1 font-mono text-xs text-ink truncate">{entry.file}</p>
                    <div className="mt-2.5 flex items-center justify-between text-[11px] text-ink-muted">
                      <span className="inline-flex items-center gap-1.5 font-medium text-ink">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {entry.agent} ({entry.model})
                      </span>
                      <span
                        className={`px-1.5 py-0.2 border text-[10px] ${
                          entry.reviewState === 'reviewed'
                            ? 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10'
                            : 'border-amber-500/40 text-amber-400 bg-amber-500/10'
                        }`}
                      >
                        {entry.reviewState === 'reviewed' ? 'Reviewed (Recital 134)' : 'Unreviewed'}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right panel: Active Record Inspector */}
          <div className="lg:col-span-7 p-5 space-y-4 bg-canvas/60">
            {/* Record Header */}
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="border border-hairline bg-surface-2 px-2 py-0.5 font-mono text-xs text-accent">
                  {activeEntry.id}
                </span>
                <span className="border border-hairline bg-surface-2 px-2 py-0.5 font-mono text-xs text-ink-muted">
                  Worktree: {activeEntry.worktree}
                </span>
                <span className="text-xs text-ink-muted ml-auto font-mono">{activeEntry.timestamp}</span>
              </div>
              <h4 className="mt-3 font-mono text-sm font-semibold text-ink">{activeEntry.file}</h4>
            </div>

            {/* Compliance Badge Matrix */}
            <div className="grid grid-cols-3 gap-2 border-y border-hairline py-3">
              <div className="bg-surface-1 p-2 border border-hairline-soft">
                <span className="block text-[10px] text-ink-muted uppercase font-mono">Art 50 Transparency</span>
                <span className="mt-0.5 block text-xs font-semibold text-primary">{activeEntry.agent}</span>
              </div>
              <div className="bg-surface-1 p-2 border border-hairline-soft">
                <span className="block text-[10px] text-ink-muted uppercase font-mono">Model Identifier</span>
                <span className="mt-0.5 block text-xs font-semibold text-ink">{activeEntry.model}</span>
              </div>
              <div className="bg-surface-1 p-2 border border-hairline-soft">
                <span className="block text-[10px] text-ink-muted uppercase font-mono">Human Review</span>
                <span className="mt-0.5 block text-xs font-semibold text-emerald-400">
                  {activeEntry.reviewedBy || 'Pending Review'}
                </span>
              </div>
            </div>

            {/* Diff Viewer Mock */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs text-ink-muted font-mono">Attributed Diff Snapshot</span>
                <span className="text-[11px] text-ink-muted font-mono">{activeEntry.lines}</span>
              </div>
              <div className="overflow-x-auto border border-hairline bg-black/80 p-3 font-mono text-xs leading-relaxed">
                {activeEntry.diffPreview.removed.map((line, idx) => (
                  <div key={`rem-${idx}`} className="text-red-400 bg-red-950/30 px-1 -mx-1">
                    - {line}
                  </div>
                ))}
                {activeEntry.diffPreview.added.map((line, idx) => (
                  <div key={`add-${idx}`} className="text-emerald-400 bg-emerald-950/30 px-1 -mx-1">
                    + {line}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 text-[11px] text-ink-muted">
              <span>Retention policy: 183 days (Art 26 compliance)</span>
              <span className="text-accent hover:underline cursor-pointer">Verify Cryptographic Hash &rarr;</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-5 bg-black/90 font-mono text-xs text-emerald-400 overflow-x-auto leading-relaxed">
          <pre>{JSON.stringify(
            {
              $schema: 'https://athena.dev/schemas/eu-ai-act-art26.json',
              generatedAt: '2026-08-06T01:00:00.000Z',
              organization: 'Athena Local Developer Environment',
              retentionPolicy: {
                standard: 'EU AI Act Article 26',
                retentionDays: 183,
                encryptionAtRest: 'safeStorage (OS Keychain AES-256)'
              },
              articlesCovered: [
                'Article 50 (Transparency & Attribution)',
                'Article 26 (Audit Trail & Log Preservation)',
                'Article 4 (AI Literacy & Team Metrics)'
              ],
              summary: {
                totalAttributedChanges: 412,
                humanReviewedChanges: 398,
                reviewRatio: '96.6%',
                topAgent: 'Claude Code (claude-3-7-sonnet)',
                worktreeIsolation: '100%'
              },
              auditRecords: SAMPLE_ENTRIES
            },
            null,
            2
          )}</pre>
        </div>
      )}
    </div>
  )
}
