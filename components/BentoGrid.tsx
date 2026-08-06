'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'

/* --- Vector Icons --- */
function FolderIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function BotIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4M8 16h.01M16 16h.01" />
    </svg>
  )
}

function UserCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <polyline points="17 11 19 13 23 9" />
    </svg>
  )
}

function KeyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round">
      <path d="M21 2l-2 2m-3 1l-4 4m2 2l-2 2M3 21l6.5-6.5a5 5 0 1 0-7-7L3 21z" />
    </svg>
  )
}

function DatabaseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  )
}

/* --- Card 1: Append-Only Audit Pipeline --- */
function LedgerPipelineCard() {
  return (
    <div className="group relative flex flex-col justify-between h-full min-h-[390px] rounded-3xl border border-white/10 bg-[#08090a] p-8 overflow-hidden transition-colors hover:border-white/20">
      {/* Top Visual Diagram */}
      <div className="relative my-auto flex items-center justify-center gap-3 sm:gap-4 py-6">
        {/* Left Folder Node */}
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative z-10 grid h-14 w-14 sm:h-16 sm:w-16 place-items-center rounded-2xl border border-emerald-500/50 bg-[#101713] text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.2)]"
        >
          <FolderIcon />
        </motion.div>

        {/* Animated Connecting Line 1 */}
        <div className="relative flex-1 max-w-[50px] h-0.5 bg-white/10 overflow-hidden">
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
            className="h-full w-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_10px_#34d399]"
          />
        </div>

        {/* Center Processing Box */}
        <div className="relative z-10 w-48 sm:w-52 rounded-2xl border border-white/15 bg-[#121315]/95 p-3.5 shadow-2xl backdrop-blur-md">
          <div className="flex items-center gap-2 border-b border-white/10 pb-2 text-xs font-medium text-white/70">
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="w-3.5 h-3.5 text-emerald-400 fill-none stroke-current stroke-2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="9" strokeDasharray="14 6" />
            </motion.svg>
            <span>Ledger Verification</span>
          </div>
          <div className="mt-2.5 space-y-2 text-xs font-mono">
            <div className="flex items-center justify-between text-white/90">
              <span className="text-[11px] text-white/70">Model Attributed</span>
              <span className="text-emerald-400 font-bold">✓</span>
            </div>
            <div className="flex items-center justify-between text-white/90">
              <span className="text-[11px] text-white/70">SHA-256 Hashed</span>
              <span className="text-emerald-400 font-bold">✓</span>
            </div>
            <div className="flex items-center justify-between text-white/90">
              <span className="text-[11px] text-white/70">Append-Only Log</span>
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-emerald-400 font-bold text-xs"
              >
                ↻
              </motion.span>
            </div>
          </div>
        </div>

        {/* Animated Connecting Line 2 */}
        <div className="relative flex-1 max-w-[50px] h-0.5 bg-white/10 overflow-hidden">
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'linear', delay: 0.5 }}
            className="h-full w-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_10px_#34d399]"
          />
        </div>

        {/* Right SHA-256 Vault Node */}
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="relative z-10 grid h-14 w-14 sm:h-16 sm:w-16 place-items-center rounded-2xl border border-white/15 bg-[#141518] text-emerald-400 shadow-lg"
        >
          <LockIcon />
        </motion.div>
      </div>

      {/* Copy */}
      <div>
        <span className="font-mono text-[10px] font-medium tracking-wider text-emerald-400 uppercase">
          [ AUTOMATED VERIFICATION ]
        </span>
        <h3 className="text-xl font-bold text-white mt-1">Append-Only Audit Pipeline</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/60">
          Automatically attributes every agent code edit, model prompt, and diff into a local, tamper-proof SQLite ledger before PR merge.
        </p>
      </div>
    </div>
  )
}

/* --- Card 2: Immutable Event Ledger Stream --- */
const INITIAL_LEDGER_EVENTS = [
  { id: 1, title: 'Claude Code modified auth.rs', desc: 'SHA-256: e3b0c442... · Local SQLite', time: '2s ago', icon: <BotIcon /> },
  { id: 2, title: 'EU AI Act Art. 50 Label Attached', desc: 'Attribution metadata verified', time: '6s ago', icon: <ShieldIcon /> },
  { id: 3, title: 'Human Approval Logged', desc: 'PR approved by dev@team', time: '12s ago', icon: <UserCheckIcon /> },
]

function LedgerEventStreamCard() {
  const [events, setEvents] = useState(INITIAL_LEDGER_EVENTS)

  const handleClear = () => {
    if (events.length > 0) {
      setEvents([])
    } else {
      setEvents(INITIAL_LEDGER_EVENTS)
    }
  }

  return (
    <div className="group relative flex flex-col justify-between h-full min-h-[390px] rounded-3xl border border-white/10 bg-[#08090a] p-8 overflow-hidden transition-colors hover:border-white/20">
      {/* Event Stream Canvas */}
      <div className="relative my-auto w-full max-w-md mx-auto py-4">
        <div className="min-h-[150px] flex flex-col justify-end space-y-3">
          <AnimatePresence>
            {events.map((evt) => (
              <motion.div
                key={evt.id}
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#121315]/95 px-4 py-3 shadow-xl backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {evt.icon}
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-white">{evt.title}</p>
                    <p className="text-[11px] text-white/50 font-mono">{evt.desc}</p>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-white/40">{evt.time}</span>
              </motion.div>
            ))}
          </AnimatePresence>

          {events.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-8 text-center text-xs text-white/40 italic font-mono"
            >
              Stream cleared. Click &apos;Simulate audit log&apos; to view entries.
            </motion.div>
          )}
        </div>

        {/* Bottom Interactive Bar */}
        <div className="mt-5 flex items-center justify-between rounded-xl border border-white/10 bg-[#0f1012] px-4 py-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/70 font-mono">{events.length} active audit logs</span>
          </div>
          <button
            onClick={handleClear}
            className="rounded-lg bg-white/10 hover:bg-white/20 px-3 py-1 text-white/90 font-medium transition-colors cursor-pointer"
          >
            {events.length > 0 ? 'Clear stream' : 'Simulate audit log'}
          </button>
        </div>
      </div>

      {/* Copy */}
      <div>
        <span className="font-mono text-[10px] font-medium tracking-wider text-emerald-400 uppercase">
          [ REAL-TIME AUDIT LOG ]
        </span>
        <h3 className="text-xl font-bold text-white mt-1">Immutable Audit Stream</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/60">
          Real-time, unalterable log entries recording model executions, file modifications, and human sign-offs.
        </p>
      </div>
    </div>
  )
}

/* --- Card 3: Cryptographic Attribution Tree --- */
function LedgerStructuredOutputCard() {
  return (
    <div className="group relative flex flex-col justify-between h-full min-h-[390px] rounded-3xl border border-white/10 bg-[#08090a] p-8 overflow-hidden transition-colors hover:border-white/20">
      {/* Top Visual Diagram */}
      <div className="relative my-auto flex flex-col items-center py-4">
        {/* Top Badge */}
        <div className="rounded-xl border border-white/15 bg-[#121417] px-4 py-2 text-xs font-semibold text-white/90 shadow-xl backdrop-blur-md flex items-center gap-2 font-mono">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>SHA-256 Merkle Ledger Tree</span>
        </div>

        {/* Connected SVG Tree Lines */}
        <div className="relative w-full max-w-sm h-16 my-1">
          <svg className="w-full h-full" viewBox="0 0 320 60" fill="none">
            {/* Main Trunk */}
            <line x1="160" y1="0" x2="160" y2="20" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
            {/* Horizontal Crossbar */}
            <line x1="32" y1="20" x2="288" y2="20" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
            {/* 5 Vertical Spoke Lines matching exactly 5 block nodes */}
            <line x1="32" y1="20" x2="32" y2="60" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
            <line x1="96" y1="20" x2="96" y2="60" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
            <line x1="160" y1="20" x2="160" y2="60" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
            <line x1="224" y1="20" x2="224" y2="60" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
            <line x1="288" y1="20" x2="288" y2="60" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          </svg>

          {/* Animated Laser Beams traversing down trunk */}
          <motion.div
            animate={{ y: [0, 50], opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-3 bg-emerald-400 shadow-[0_0_8px_#34d399] rounded-full"
          />
        </div>

        {/* 5 Cryptographic Audit Block Nodes */}
        <div className="flex items-center justify-between w-full max-w-sm px-1">
          {[1041, 1042, 1043, 1044, 1045].map((blockNum) => (
            <motion.div
              key={blockNum}
              whileHover={{ scale: 1.1, y: -2 }}
              className="flex flex-col items-center justify-between w-13 h-16 rounded-xl border border-white/10 bg-[#121315] p-2 shadow-md"
            >
              <div className="w-full space-y-1 text-center">
                <span className="font-mono text-[9px] text-white/50 block font-semibold">#{blockNum}</span>
                <div className="h-1 w-full bg-emerald-500/40 rounded" />
              </div>
              <span className="font-mono text-[8px] text-emerald-400 font-bold uppercase tracking-wider">SHA</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Copy */}
      <div>
        <span className="font-mono text-[10px] font-medium tracking-wider text-emerald-400 uppercase">
          [ IMMUTABLE PROOF ]
        </span>
        <h3 className="text-xl font-bold text-white mt-1">Cryptographic Attribution Tree</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/60">
          Every session commit is cryptographically linked into a Merkle tree, establishing historical proof for audits.
        </p>
      </div>
    </div>
  )
}

import IntegrationOrbit from '@/components/forgeui/integration-orbit'

function OwlCenterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M12 3.6 L6.4 1.2 Q4.4 3.4 3.4 6.8 Q2.4 10.2 2.4 14.5 L2.4 20.4 Q2.4 21.6 3.6 21.6 L20.4 21.6 Q21.6 21.6 21.6 20.4 L21.6 14.5 Q19.6 3.4 17.6 1.2 Z M8.7 10.75 a2.05 2.05 0 1 0 0 4.1 a2.05 2.05 0 1 0 0 -4.1 Z M15.3 10.75 a2.05 2.05 0 1 0 0 4.1 a2.05 2.05 0 1 0 0 -4.1 Z M11.15 15.3 L12.85 15.3 L12 18.6 Z"
        transform="translate(0 0.6)"
      />
    </svg>
  )
}

function OpenAIIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0813 4.779-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4952 4.4953zM3.6053 18.2323a4.4707 4.4707 0 0 1-.5355-3.0137l.142.0859 4.7838 2.7582a.771.771 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0807.0807 0 0 1-.0332.0619l-4.8316 2.7869a4.504 4.504 0 0 1-6.1489-1.6431zM2.4358 9.3871a4.4611 4.4611 0 0 1 2.3456-2.0001v5.6732a.7948.7948 0 0 0 .3927.6813l5.8333 3.3685-2.02 1.1686a.071.071 0 0 1-.0665 0l-4.8316-2.7869a4.504 4.504 0 0 1-1.6535-6.1046zm16.597 3.8558l-5.838-3.3685 2.0198-1.1686a.071.071 0 0 1 .0665 0l4.8317 2.7869a4.5088 4.5088 0 0 1-.676 8.1042v-5.678a.79.79 0 0 0-.404-.676zm1.3643-3.6653l-.1419-.0859-4.779-2.7582a.771.771 0 0 0-.7806 0l-5.8428 3.3685v-2.3324a.0807.0807 0 0 1 .0332-.0619l4.8316-2.7869a4.504 4.504 0 0 1 6.6845 4.6568zM8.3065 12.863l-2.02-1.1638a.0807.0807 0 0 1-.038-.0523v-5.5826a4.504 4.504 0 0 1 7.3716-3.4544l-.1419.0813-4.779 2.7582a.7948.7948 0 0 0-.3927.6813v6.7323z" />
    </svg>
  )
}

function CloudflareIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.924 10.742c-.272-2.17-2.138-3.842-4.394-3.842-1.892 0-3.518 1.173-4.184 2.836a3.896 3.896 0 0 0-3.176 3.82c0 2.152 1.748 3.9 3.9 3.9h11.1c1.767 0 3.2-1.433 3.2-3.2 0-1.688-1.309-3.072-2.978-3.194a4.42 4.42 0 0 0-3.468-.32z" />
    </svg>
  )
}

function DockerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.186v1.887c0 .102.083.185.185.185zm-3.054 0h2.12a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.12a.185.185 0 0 0-.185.186v1.887c0 .102.083.185.185.185zm-3.054 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H7.875a.185.185 0 0 0-.185.186v1.887c0 .102.083.185.185.185zm9.162-3.054h2.119a.186.186 0 0 0 .186-.186V5.952a.186.186 0 0 0-.186-.185h-2.119a.185.185 0 0 0-.185.185v1.886c0 .103.083.186.185.186zm-3.054 0h2.12a.186.186 0 0 0 .186-.186V5.952a.186.186 0 0 0-.186-.185h-2.12a.185.185 0 0 0-.185.185v1.886c0 .103.083.186.185.186zm-3.054 0h2.119a.186.186 0 0 0 .186-.186V5.952a.186.186 0 0 0-.186-.185H7.875a.185.185 0 0 0-.185.185v1.886c0 .103.083.186.185.186zm6.108-3.054h2.119a.186.186 0 0 0 .186-.186V2.898a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.186v1.886c0 .103.083.186.185.186zm-3.054 0h2.12a.186.186 0 0 0 .186-.186V2.898a.186.186 0 0 0-.186-.186h-2.12a.185.185 0 0 0-.185.186v1.886c0 .103.083.186.185.186zM23.769 11.96c-.394-.282-1.393-.385-2.222-.246-.145-.718-.544-1.353-1.127-1.802l-.37-.282-.288.361c-.57.712-.87 1.62-.87 2.569 0 .237.02.477.06.715h-17.6a.604.604 0 0 0-.6.604c0 1.954.673 3.86 1.897 5.367 1.34 1.651 3.23 2.766 5.32 3.14 1.13.202 2.29.202 3.42 0 3.26-.583 6.07-2.673 7.64-5.694.75-1.442 1.15-3.047 1.15-4.672 0-.362-.02-.724-.07-1.087z" />
    </svg>
  )
}

function AwsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.983 15.688c-2.316.59-4.834.78-7.148.067-.534-.165-1.17-.432-1.572-.818-.2-.19-.244-.44-.066-.67.177-.23.473-.306.758-.236 2.012.493 4.195.666 6.24.237 1.09-.228 2.148-.606 3.13-1.132.32-.172.684-.047.887.242.203.288.132.665-.229.859-1.02.548-2.128.94-3.002 1.451zm4.72-2.167c-.208-.283-.07-.67.244-.82 2.062-.99 3.528-2.73 3.528-4.84 0-3.02-2.834-5.467-6.33-5.467-3.496 0-6.33 2.447-6.33 5.467 0 1.66 1.22 3.12 3.12 4.14.3.16.42.53.26.83-.16.3-.53.42-.83.26C8.83 11.77 7.33 10.02 7.33 8.06c0-4.13 3.88-7.467 8.33-7.467 4.45 0 8.33 3.337 8.33 7.467 0 2.7-1.74 5.08-4.28 6.27-.3.14-.68.01-.88-.28z" />
    </svg>
  )
}

function SlackIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165c0-1.393 1.13-2.522 2.522-2.522h2.52v2.522zM6.313 15.165c0-1.393 1.13-2.522 2.522-2.522s2.522 1.129 2.522 2.522v6.313A2.528 2.528 0 0 1 8.835 24a2.528 2.528 0 0 1-2.522-2.522v-6.313zM8.835 5.042a2.528 2.528 0 0 1-2.522-2.52A2.528 2.528 0 0 1 8.835 0c1.393 0 2.522 1.13 2.522 2.522v2.52H8.835zM8.835 6.313c1.393 0 2.522 1.13 2.522 2.522s-1.129 2.522-2.522 2.522H2.522A2.528 2.528 0 0 1 0 8.835a2.528 2.528 0 0 1 2.522-2.522h6.313zM18.956 8.835a2.528 2.528 0 0 1 2.522-2.522A2.528 2.528 0 0 1 24 8.835c0 1.393-1.13 2.522-2.522 2.522h-2.522V8.835zM17.687 8.835c0 1.393-1.13 2.522-2.522 2.522s-2.522-1.129-2.522-2.522V2.522A2.528 2.528 0 0 1 15.165 0a2.528 2.528 0 0 1 2.522 2.522v6.313zM15.165 18.956a2.528 2.528 0 0 1 2.522 2.52A2.528 2.528 0 0 1 15.165 24c-1.393 0-2.522-1.13-2.522-2.522v-2.522h2.522zM15.165 17.687c-1.393 0-2.522-1.13-2.522-2.522s1.129-2.522 2.522-2.522h6.313A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.522h-6.313z" />
    </svg>
  )
}

function DigitalOceanIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.004 0C5.372 0 0 5.372 0 12.004c0 3.316 1.344 6.316 3.516 8.488l2.977-2.977c-1.402-1.402-2.268-3.336-2.268-5.511 0-4.3 3.488-7.788 7.788-7.788 4.3 0 7.788 3.488 7.788 7.788 0 2.175-.866 4.109-2.268 5.511l2.977 2.977A11.96 11.96 0 0 0 24 12.004C24 5.372 18.636 0 12.004 0zm-5.06 14.945h3.093v3.093H6.944v-3.093zm-3.093 3.093h3.093v3.093H3.851v-3.093z" />
    </svg>
  )
}

/* --- Main Bento Grid Container --- */
export default function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
      <Reveal delay={0}>
        <LedgerPipelineCard />
      </Reveal>
      <Reveal delay={80}>
        <LedgerEventStreamCard />
      </Reveal>
      <Reveal delay={160}>
        <LedgerStructuredOutputCard />
      </Reveal>
      <Reveal delay={240}>
        <IntegrationOrbit
          centerIcon={OwlCenterIcon}
          firstIcon={OpenAIIcon}
          secondIcon={CloudflareIcon}
          thirdIcon={DockerIcon}
          fourthIcon={AwsIcon}
          fifthIcon={SlackIcon}
          sixthIcon={DigitalOceanIcon}
          cardTitle="Orchestration Orbit"
          cardDescription="Athena coördineert Claude Code, Codex, OpenCode, Pi en alle 35 ondersteunde CLI-agents en cloud-modellen vloeiend rondom één centrale lokale uil-kern."
        />
      </Reveal>
    </div>
  )
}



