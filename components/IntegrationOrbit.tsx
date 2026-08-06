'use client'

import { motion } from 'framer-motion'
import { AGENT_CLIS } from '@/lib/config'
import AgentCliIcon from './AgentCliIcon'

function OwlLogoIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M12 3.6 L6.4 1.2 Q4.4 3.4 3.4 6.8 Q2.4 10.2 2.4 14.5 L2.4 20.4 Q2.4 21.6 3.6 21.6 L20.4 21.6 Q21.6 21.6 21.6 20.4 L21.6 14.5 Q19.6 3.4 17.6 1.2 Z M8.7 10.75 a2.05 2.05 0 1 0 0 4.1 a2.05 2.05 0 1 0 0 -4.1 Z M15.3 10.75 a2.05 2.05 0 1 0 0 4.1 a2.05 2.05 0 1 0 0 -4.1 Z M11.15 15.3 L12.85 15.3 L12 18.6 Z"
        transform="translate(0 0.6)"
      />
    </svg>
  )
}

interface IntegrationOrbitProps {
  cardTitle?: string
  cardDescription?: string
}

export default function IntegrationOrbit({
  cardTitle = 'Multi-Agent Integration Orbit',
  cardDescription = 'Athena coordinates Claude Code, Codex, OpenCode, Pi, and all 35 CLI agents seamlessly around a single local orchestration core.',
}: IntegrationOrbitProps) {
  // Select 6 primary CLI agents for inner orbit ring
  const innerAgents = AGENT_CLIS.slice(0, 6)
  // Select 6 secondary CLI agents for outer orbit ring
  const outerAgents = AGENT_CLIS.slice(6, 12)

  return (
    <div className="group relative flex flex-col justify-between h-full min-h-[420px] rounded-3xl border border-white/10 bg-[#08090a] p-8 overflow-hidden transition-colors hover:border-white/20">
      {/* Central Orbit Canvas */}
      <div className="relative my-auto flex items-center justify-center py-6 min-h-[260px] w-full max-w-md mx-auto">
        {/* Ambient Radar Glow */}
        <div 
          className="pointer-events-none absolute h-52 w-52 rounded-full bg-emerald-500/10 blur-2xl"
          aria-hidden
        />

        {/* Concentric Orbit Ring 1 (Inner - 160px diameter) */}
        <div className="absolute h-40 w-40 rounded-full border border-white/10 bg-transparent" />

        {/* Inner Orbit Rotating Layer */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute h-40 w-40 rounded-full"
        >
          {innerAgents.map((agent, index) => {
            const angle = (index / innerAgents.length) * 360
            const radius = 80 // half of 160px
            const x = Math.cos((angle * Math.PI) / 180) * radius
            const y = Math.sin((angle * Math.PI) / 180) * radius

            return (
              <div
                key={agent.id}
                className="absolute left-1/2 top-1/2 -ml-5 -mt-5"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                {/* Counter-rotate to keep icon upright */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-[#121316]/95 p-2 shadow-lg backdrop-blur-md transition-transform hover:scale-110 hover:border-emerald-400"
                  title={agent.label}
                >
                  <AgentCliIcon cli={agent} size={20} />
                </motion.div>
              </div>
            )
          })}
        </motion.div>

        {/* Concentric Orbit Ring 2 (Outer - 240px diameter) */}
        <div className="absolute h-60 w-60 rounded-full border border-white/10 bg-transparent" />

        {/* Outer Orbit Rotating Layer (Counter-rotating direction) */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          className="absolute h-60 w-60 rounded-full"
        >
          {outerAgents.map((agent, index) => {
            const angle = (index / outerAgents.length) * 360
            const radius = 120 // half of 240px
            const x = Math.cos((angle * Math.PI) / 180) * radius
            const y = Math.sin((angle * Math.PI) / 180) * radius

            return (
              <div
                key={agent.id}
                className="absolute left-1/2 top-1/2 -ml-5 -mt-5"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                {/* Counter-rotate to keep icon upright */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-[#121316]/95 p-2 shadow-lg backdrop-blur-md transition-transform hover:scale-110 hover:border-emerald-400"
                  title={agent.label}
                >
                  <AgentCliIcon cli={agent} size={20} />
                </motion.div>
              </div>
            )
          })}
        </motion.div>

        {/* Center Athena Logo Node */}
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="relative z-20 grid h-16 w-16 place-items-center rounded-2xl border-2 border-emerald-400 bg-[#0d1511] text-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.4)]"
          title="Athena Core"
        >
          <OwlLogoIcon size={32} />
        </motion.div>
      </div>

      {/* Copy */}
      <div>
        <span className="font-mono text-[10px] font-medium tracking-wider text-emerald-400 uppercase">
          [ NATIVE ORCHESTRATION HUB ]
        </span>
        <h3 className="text-xl font-bold text-white mt-1">{cardTitle}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/60">
          {cardDescription}
        </p>
      </div>
    </div>
  )
}
