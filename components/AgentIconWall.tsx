'use client'

import { AGENT_CLIS } from '@/lib/config'
import AgentCliIcon from './AgentCliIcon'

/** Wall of iOS-style app-icon tiles — one per supported agent CLI. */
export default function AgentIconWall() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-2 sm:gap-2.5">
      {AGENT_CLIS.map((cli) => (
        <span
          key={cli.id}
          title={cli.label}
          aria-label={cli.label}
          className="grid h-12 w-12 place-items-center rounded-[22%] border border-hairline bg-surface-2 text-ink transition-transform duration-200 hover:scale-105 sm:h-[52px] sm:w-[52px]"
        >
          <AgentCliIcon cli={cli} size={28} />
        </span>
      ))}
    </div>
  )
}
