'use client'

import { useState } from 'react'
import { APP } from '@/lib/config'

/**
 * Announcement bar - sits above the topbar on every route.
 * Dismissed for the session via local state.
 */
export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true)

  if (!visible) {
    return null
  }

  return (
    <div className="relative flex h-10 items-center justify-center bg-black px-12">
      <a
        href={APP.releasesUrl}
        target="_blank"
        rel="noreferrer"
        className="group flex h-full items-center justify-center gap-1.5"
      >
        <span className="truncate text-[13px]/5 text-ink-muted transition-colors duration-150 group-hover:text-ink">
          Athena {APP.version} is live for Windows - grab the installer
        </span>
        <svg
          viewBox="0 0 14 14"
          width="14"
          height="14"
          fill="none"
          className="shrink-0 text-ink-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-ink"
          aria-hidden
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.1"
            d="M2.25 7h9.5m0 0L8.357 3.5M11.75 7l-3.393 3.5"
          />
        </svg>
      </a>
      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label="Dismiss announcement"
        className="absolute right-0 top-1/2 inline-flex size-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-[10px] text-ink-muted transition-colors hover:bg-surface-1 hover:text-ink"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 18"
          width="18"
          height="18"
          fill="none"
          aria-hidden
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.1"
            d="m12.5 5.5-7 7m7 0-7-7"
          />
        </svg>
      </button>
    </div>
  )
}
