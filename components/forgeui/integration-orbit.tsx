'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface IntegrationOrbitProps {
  centerIcon?: React.ComponentType<{ className?: string }>
  firstIcon?: React.ComponentType<{ className?: string }>
  secondIcon?: React.ComponentType<{ className?: string }>
  thirdIcon?: React.ComponentType<{ className?: string }>
  fourthIcon?: React.ComponentType<{ className?: string }>
  fifthIcon?: React.ComponentType<{ className?: string }>
  sixthIcon?: React.ComponentType<{ className?: string }>
  cardTitle?: string
  cardDescription?: string
  className?: string
}

export default function IntegrationOrbit({
  centerIcon: CenterIcon,
  firstIcon: FirstIcon,
  secondIcon: SecondIcon,
  thirdIcon: ThirdIcon,
  fourthIcon: FourthIcon,
  fifthIcon: FifthIcon,
  sixthIcon: SixthIcon,
  cardTitle = 'Multi-Agent Integration Orbit',
  cardDescription = 'Athena coordinates Claude Code, Codex, OpenCode, Pi, and all 35 CLI agents seamlessly around a single local orchestration core.',
  className,
}: IntegrationOrbitProps) {
  const outerIcons = [FirstIcon, SecondIcon, ThirdIcon, FourthIcon, FifthIcon, SixthIcon].filter(Boolean)

  return (
    <div
      className={cn(
        'group relative flex flex-col justify-between h-full min-h-[420px] rounded-3xl border border-white/10 bg-[#08090a] p-8 overflow-hidden transition-colors hover:border-white/20',
        className
      )}
    >
      {/* Central Orbit Canvas */}
      <div className="relative my-auto flex items-center justify-center py-6 min-h-[260px] w-full max-w-md mx-auto">
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute h-52 w-52 rounded-full bg-emerald-500/10 blur-3xl" aria-hidden />

        {/* Outer Orbit Cirlce Line */}
        <div className="absolute h-52 w-52 rounded-full border border-white/10" />

        {/* Orbit Rotating Container */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute h-52 w-52 rounded-full"
        >
          {outerIcons.map((Icon, idx) => {
            if (!Icon) return null
            const angle = (idx / outerIcons.length) * 360
            const radius = 104 // half of 208px
            const x = Math.cos((angle * Math.PI) / 180) * radius
            const y = Math.sin((angle * Math.PI) / 180) * radius

            return (
              <div
                key={idx}
                className="absolute left-1/2 top-1/2 -ml-5 -mt-5"
                style={{ transform: `translate(${x}px, ${y}px)` }}
              >
                {/* Counter-rotation to keep icons upright */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-[#121316]/95 p-2 shadow-lg backdrop-blur-md transition-transform hover:scale-110 hover:border-emerald-400"
                >
                  <Icon className="h-5 w-5 text-white/90" />
                </motion.div>
              </div>
            )
          })}
        </motion.div>

        {/* Center Logo Node */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="relative z-20 grid h-16 w-16 place-items-center rounded-2xl border-2 border-emerald-400 bg-[#0d1511] text-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.4)]"
        >
          {CenterIcon ? <CenterIcon className="h-8 w-8 text-emerald-400 fill-current" /> : null}
        </motion.div>
      </div>

      {/* Copy */}
      <div>
        <span className="font-mono text-[10px] font-medium tracking-wider text-emerald-400 uppercase">
          [ NATIVE ORCHESTRATION HUB ]
        </span>
        <h3 className="text-xl font-bold text-white mt-1">{cardTitle}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/60">{cardDescription}</p>
      </div>
    </div>
  )
}
