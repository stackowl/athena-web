'use client'

import { useState } from 'react'

interface LedgerEntry {
  id: string
  timestamp: string
  agent: string
  model: string
  session: string
  action: string
  reviewer: string
  status: 'approved' | 'pending' | 'flagged'
  complianceTag: string
}

const SAMPLE_ENTRIES: LedgerEntry[] = [
  {
    id: 'tx_8f92a10c',
    timestamp: '14:22:08',
    agent: 'Claude Code',
    model: 'claude-3-7-sonnet',
    session: 'feat/auth-pkce',
    action: 'Modified auth/oauth.ts (+42, -8)',
    reviewer: 's@athena (Human)',
    status: 'approved',
    complianceTag: 'EU AI Act Art. 50',
  },
  {
    id: 'tx_7b41e98f',
    timestamp: '14:20:45',
    agent: 'Codex CLI',
    model: 'gpt-4o-mini',
    session: 'fix/type-error',
    action: 'Refactored lib/config.ts (+14, -14)',
    reviewer: 's@athena (Human)',
    status: 'approved',
    complianceTag: 'EU AI Act Art. 26',
  },
  {
    id: 'tx_5c12d44e',
    timestamp: '14:18:12',
    agent: 'OpenCode',
    model: 'deepseek-r1',
    session: 'perf/query-opt',
    action: 'Optimized db/indexer.rs (+89, -31)',
    reviewer: 'Pending Review',
    status: 'pending',
    complianceTag: 'EU AI Act Art. 26',
  },
  {
    id: 'tx_3a90b112',
    timestamp: '14:12:30',
    agent: 'Pi Agent',
    model: 'claude-3-5-haiku',
    session: 'docs/api-specs',
    action: 'Updated OpenAPI schemas (+120, -5)',
    reviewer: 's@athena (Human)',
    status: 'approved',
    complianceTag: 'EU AI Act Art. 4',
  },
]

export default function LedgerMock() {
  const [filter, setFilter] = useState<'all' | 'approved' | 'pending'>('all')

  const filteredEntries = SAMPLE_ENTRIES.filter((entry) => {
    if (filter === 'approved') return entry.status === 'approved'
    if (filter === 'pending') return entry.status === 'pending'
    return true
  })

  return (
    <div className="mx-auto w-full max-w-4xl border border-hairline bg-surface-1 font-mono text-xs text-ink shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-hairline bg-canvas px-4 py-3">
        <div className="flex items-center gap-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
          <span className="font-semibold tracking-tight text-ink">
            Athena Ledger Stream <span className="text-ink-muted">· Local Audit Log</span>
          </span>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-1.5 font-sans">
          <button
            onClick={() => setFilter('all')}
            className={`px-2.5 py-1 text-xs transition-colors border ${
              filter === 'all'
                ? 'border-hairline bg-surface-2 text-ink font-medium'
                : 'border-transparent text-ink-muted hover:text-ink'
            }`}
          >
            Alles ({SAMPLE_ENTRIES.length})
          </button>
          <button
            onClick={() => setFilter('approved')}
            className={`px-2.5 py-1 text-xs transition-colors border ${
              filter === 'approved'
                ? 'border-hairline bg-surface-2 text-primary font-medium'
                : 'border-transparent text-ink-muted hover:text-ink'
            }`}
          >
            Approved (3)
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-2.5 py-1 text-xs transition-colors border ${
              filter === 'pending'
                ? 'border-hairline bg-surface-2 text-amber-400 font-medium'
                : 'border-transparent text-ink-muted hover:text-ink'
            }`}
          >
            In Review (1)
          </button>
        </div>
      </div>

      {/* Log Feed */}
      <div className="divide-y divide-hairline-soft overflow-x-auto">
        {filteredEntries.map((entry) => (
          <div
            key={entry.id}
            className="flex flex-col justify-between gap-2 p-3 sm:flex-row sm:items-center hover:bg-surface-2/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-ink-muted/70">{entry.timestamp}</span>
              <span className="font-semibold text-primary">{entry.id}</span>
              <span className="border border-hairline bg-surface-2 px-1.5 py-0.5 text-[11px] text-ink-muted">
                {entry.agent}
              </span>
              <span className="text-ink-muted hidden md:inline">{entry.model}</span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-ink/90 font-sans text-xs">{entry.action}</span>
              <span className="border border-hairline bg-canvas px-2 py-0.5 text-[10px] text-accent/90">
                {entry.complianceTag}
              </span>
              {entry.status === 'approved' ? (
                <span className="inline-flex items-center gap-1 text-[11px] text-primary">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {entry.reviewer}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-[11px] text-amber-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-ping" />
                  {entry.reviewer}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Bar */}
      <div className="flex items-center justify-between border-t border-hairline bg-canvas px-4 py-2 text-[11px] text-ink-muted">
        <span className="flex items-center gap-1.5">
          <span className="text-primary font-bold">✓</span> Local Storage: ~/.athena/ledger.db
        </span>
        <span className="hidden sm:inline">Append-only · SHA-256 Checksum Verified</span>
      </div>
    </div>
  )
}
