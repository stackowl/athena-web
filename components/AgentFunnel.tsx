import AgentCliIcon from './AgentCliIcon'
import { AGENT_CLIS } from '@/lib/config'

/* eslint-disable @next/next/no-img-element -- static-host portable (png glyphs) */

/**
 * "One platform to orchestrate them all" funnel — nodge.nl convergence pattern.
 * Every agent-CLI chip has its own line converging into the Athena app icon.
 *
 * Desktop (lg+): fixed-width chip rows + an absolutely positioned SVG whose
 * viewBox maps 1:1 to the 684px layout, so each line starts exactly at its
 * chip's bottom-centre and ends behind the app-icon tile.
 * Mobile (<lg): chips wrap; a single centre stem replaces the line bundle.
 */

const ROWS: string[][] = [
  ['claude', 'codex', 'opencode', 'pi', 'cursor', 'copilot'],
  ['gemini', 'cline', 'aider', 'kilo', 'droid'],
  ['goose', 'grok', 'devin', 'trae']
]

/** Per-index rotation (deg) for the organic "tangle" feel — always subtle */
const ROTATIONS = [0, -2, 1.5, -1, 2, -2.5, 1, 0.5, -1.5, 2.5, -1, 0, -2, 1, 2, -1]

/** Rows with a stable global rotation index — precomputed once, no render-time mutation */
const CHIP_ROWS = (() => {
  let i = 0
  return ROWS.map((row) => row.map((id) => ({ id, rot: ROTATIONS[i++ % ROTATIONS.length] })))
})()

/* ── Per-chip line geometry (viewBox 0 0 732 180, 1:1 with the layout) ──
   Chip boxes are w-[112px] h-9 (36px), rows gap-y-3 (12px):
   row bottoms sit at y = 36 / 84 / 132; all lines converge at (366, 178),
   which hides behind the app-icon tile (tile top = 132 + mt-12). */
const ROW_ANCHORS: { x: number; y: number }[][] = [
  [56, 180, 304, 428, 552, 676].map((x) => ({ x, y: 36 })),
  [118, 242, 366, 490, 614].map((x) => ({ x, y: 84 })),
  [180, 304, 428, 552].map((x) => ({ x, y: 132 }))
]

const LINE_END = { x: 366, y: 178 }

function linePath(a: { x: number; y: number }, i: number): string {
  const endX = LINE_END.x + ((i % 3) - 1) * 2
  const endY = LINE_END.y + (i % 5) * 2 - 4
  const dx = endX - a.x
  return `M ${a.x} ${a.y} C ${a.x} ${a.y + 40}, ${endX - dx * 0.45} ${endY - 16}, ${endX} ${endY}`
}

const LINES = ROW_ANCHORS.flatMap((row, ri) =>
  row.map((anchor, i) => ({ d: linePath(anchor, ri * 8 + i), key: `${ri}-${i}` }))
)

function cliById(id: string) {
  return AGENT_CLIS.find((c) => c.id === id)
}

function AthenaTile() {
  return (
    <div className="flex justify-center">
      <div className="relative">
        <div className="absolute -inset-10 rounded-full bg-primary/10 blur-3xl" aria-hidden />
        <img src="/athena-icon-sm.png" alt="Athena" width={56} height={56} className="relative" />
      </div>
    </div>
  )
}

function Chip({ id, rot }: { id: string; rot: number }) {
  const cli = cliById(id)
  if (!cli) {
    return null
  }
  return (
    <span
      style={{ transform: `rotate(${rot}deg)` }}
      className="flex h-9 w-[112px] items-center justify-center gap-1.5 border border-hairline bg-surface-1 font-mono text-[11px] text-ink-muted"
    >
      <AgentCliIcon cli={cli} size={14} />
      <span className="overflow-hidden text-ellipsis whitespace-nowrap">{cli.label}</span>
    </span>
  )
}

export default function AgentFunnel() {
  const allChips = CHIP_ROWS.flat()
  return (
    <div className="mx-auto mt-12 max-w-3xl">
      {/* Desktop — full funnel with per-chip lines */}
      <div className="relative hidden max-w-[732px] lg:block">
        <svg
          viewBox="0 0 732 180"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-x-0 top-0 h-[180px] w-full"
          aria-hidden
          focusable="false"
        >
          <defs>
            <linearGradient id="funnel-converge" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#26272a" />
              <stop offset="0.7" stopColor="#32f08c" stopOpacity="0.5" />
              <stop offset="1" stopColor="#32f08c" />
            </linearGradient>
          </defs>
          {LINES.map((l) => (
            <path
              key={l.key}
              d={l.d}
              fill="none"
              stroke="url(#funnel-converge)"
              strokeWidth="1.25"
              opacity="0.6"
            />
          ))}
        </svg>

        {/* Chip cloud — rows must stay fixed-width so the line anchors hold */}
        <div className="relative flex flex-col items-center gap-y-3">
          {CHIP_ROWS.map((row, ri) => (
            <div key={ri} className="flex justify-center gap-x-3">
              {row.map(({ id, rot }) => (
                <Chip key={id} id={id} rot={rot} />
              ))}
            </div>
          ))}
        </div>

        <div className="relative z-10 mt-12">
          <AthenaTile />
        </div>
      </div>

      {/* Mobile — wrapped chips + centre stem */}
      <div className="lg:hidden">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {allChips.map(({ id }) => (
            <Chip key={id} id={id} rot={0} />
          ))}
        </div>
        <div
          className="mx-auto my-6 h-14 w-px bg-gradient-to-b from-hairline to-primary/60"
          aria-hidden
        />
        <AthenaTile />
      </div>
    </div>
  )
}
