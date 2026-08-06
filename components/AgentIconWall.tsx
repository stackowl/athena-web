'use client'

import { AGENT_CLIS } from '@/lib/config'
import AgentCliIcon from './AgentCliIcon'

interface AgentIconWallProps {
  repeat?: number
  variant?: 'card' | 'background'
}

/** Wall of iOS-style app-icon tiles with grid background pattern — one per supported agent CLI. */
export default function AgentIconWall({ repeat = 1, variant = 'card' }: AgentIconWallProps) {
  // Repeat and mix CLIs to create a rich wall pattern if requested
  const items = Array.from({ length: repeat }).flatMap((_, repIdx) =>
    AGENT_CLIS.map((cli) => ({
      ...cli,
      uniqueKey: `${cli.id}-${repIdx}`,
    }))
  )

  if (variant === 'background') {
    return (
      <div className="relative w-full h-full min-h-full overflow-hidden">
        {/* Crisp Technical Grid Pattern */}
        <div 
          className="pointer-events-none absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:48px_48px]"
          aria-hidden
        />
        {/* Tiled Icon Matrix */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 p-4">
          {items.map((cli) => (
            <div
              key={cli.uniqueKey}
              title={cli.label}
              className="grid h-14 w-14 sm:h-16 sm:w-16 place-items-center rounded-2xl border border-white/15 bg-[#121316]/80 p-3 shadow-md backdrop-blur-sm"
            >
              <AgentCliIcon cli={cli} size={28} />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0a0b0d] p-6 sm:p-10">
      {/* Grid Pattern Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-radial from-transparent via-[#0a0b0d]/60 to-[#0a0b0d]" />

      {/* 35 Agent Icon Grid */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {items.map((cli) => (
          <div
            key={cli.uniqueKey}
            title={cli.label}
            className="group relative flex flex-col items-center justify-center"
          >
            <div className="grid h-14 w-14 sm:h-16 sm:w-16 place-items-center rounded-2xl border border-white/10 bg-[#121316]/90 p-3 shadow-lg backdrop-blur-md transition-all duration-200 hover:border-emerald-500/50 hover:bg-[#161a1d] hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <AgentCliIcon cli={cli} size={28} />
            </div>
            <span className="mt-1.5 font-mono text-[10px] text-white/50 group-hover:text-emerald-400 transition-colors line-clamp-1 max-w-[64px] text-center">
              {cli.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
