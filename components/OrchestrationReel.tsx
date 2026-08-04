'use client'

import { AGENT_CLIS } from '@/lib/config'
import AgentCliIcon from './AgentCliIcon'

const N = AGENT_CLIS.length

/** Spiral "maze" field — a loose, wide spiral that fills the whole section. */
const POS = AGENT_CLIS.map((_, i) => {
  const a = i * 0.38 // ~2.4 windingen → bree uit elkaar
  const r = 24 + (i / (N - 1)) * 23 // 24 → 47, tot aan de randen
  return {
    x: +(50 + r * Math.cos(a)).toFixed(2),
    y: +(50 + r * Math.sin(a)).toFixed(2)
  }
})

/** Unique colour per agent — a full hue sweep around the wheel. */
function agentColor(i: number): string {
  return `hsl(${Math.round((i / N) * 360)} 58% 62%)`
}

/**
 * Maze-like trace from an agent back to the centre hub: an alternating,
 * angular staircase (manhattan routing) instead of a straight line.
 */
function mazePath(x: number, y: number, i: number): string {
  const cx = 50
  const cy = 50
  const dx = cx - x
  const dy = cy - y
  if (i % 2 === 0) {
    return `M ${x} ${y} L ${x} ${+(cy + dy * 0.5).toFixed(1)} L ${+(cx + dx * 0.45).toFixed(1)} ${+(
      cy + dy * 0.5
    ).toFixed(1)} L ${+(cx + dx * 0.45).toFixed(1)} ${+(cy - dy * 0.15).toFixed(1)} L ${cx} ${cy}`
  }
  return `M ${x} ${y} L ${+(cx + dx * 0.5).toFixed(1)} ${y} L ${+(cx + dx * 0.5).toFixed(
    1
  )} ${+(cy + dy * 0.45).toFixed(1)} L ${+(cx - dx * 0.15).toFixed(1)} ${+(
    cy + dy * 0.45
  ).toFixed(1)} L ${cx} ${cy}`
}

/** One agent's trace: its own-coloured line + a matching data dot travelling to centre. */
function MazeLink({ i, x, y, color }: { i: number; x: number; y: number; color: string }) {
  const dur = +(2.2 + (i % 5) * 0.4).toFixed(2)
  const begin = +(i % 7) * 0.45
  const path = mazePath(x, y, i)
  return (
    <g>
      <path d={path} fill="none" stroke={color} strokeWidth={i % 3 === 0 ? 0.15 : 0.11} strokeLinejoin="round" opacity={0.45} />
      <circle className="motion-reduce:hidden" r={0.26} fill={color} style={{ animation: `funnel-dot-pulse ${dur}s ease-in-out infinite` }}>
        <animateMotion dur={`${dur}s`} begin={`${begin}s`} repeatCount="indefinite" path={path} />
      </circle>
    </g>
  )
}

export default function OrchestrationReel() {
  return (
    <div className="mx-auto mt-12 w-full max-w-5xl">
      <div className="relative aspect-[16/11] w-full">
        {/* maze traces */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden
        >
          {POS.map((p, i) => (
            <MazeLink key={AGENT_CLIS[i].id} i={i} x={p.x} y={p.y} color={agentColor(i)} />
          ))}
        </svg>

        {/* bare brand marks along the maze arms */}
        {AGENT_CLIS.map((cli, i) => {
          const p = POS[i]
          return (
            <span
              key={cli.id}
              title={cli.label}
              aria-label={cli.label}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
            >
              <AgentCliIcon cli={cli} size={20} />
            </span>
          )
        })}

        {/* centre hub */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-[-18px] rounded-full bg-primary/10 blur-2xl" aria-hidden />
          {/* eslint-disable-next-line @next/next/no-img-element -- static-host portable */}
          <img src="/athena-icon-sm.png" alt="Athena" width={48} height={48} />
        </div>
      </div>
    </div>
  )
}
