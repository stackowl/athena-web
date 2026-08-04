'use client'

import { useState } from 'react'
import { QRCodeIcon } from './icons'

/**
 * QR trigger from the mobile section - mirrors the live page's
 * Radix dialog: a square outline button that opens a centered
 * dialog showing the store QR code.
 */
export function QrPopover({
  qrDataUrl,
  label,
  ariaId
}: {
  qrDataUrl: string
  label: string
  ariaId: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={ariaId}
        className="relative inline-flex cursor-pointer items-center justify-center text-nowrap border border-hairline bg-surface-1 text-ink transition-colors duration-300 ease-in-out hover:bg-surface-2 hover:duration-50 active:duration-50 disabled:pointer-events-none disabled:cursor-default size-9 rounded-[10px] max-lg:size-12 max-lg:rounded-xl"
      >
        <QRCodeIcon />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6"
          role="dialog"
          aria-modal="true"
          id={ariaId}
          onClick={() => setOpen(false)}
        >
          <div
            className="flex flex-col items-center gap-4 rounded-2xl bg-canvas p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-base font-semibold text-ink">{label}</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={qrDataUrl}
              alt={`${label} QR-code`}
              width={168}
              height={168}
              className="size-42 rounded-md"
            />
            <p className="text-sm text-ink-muted">Scan met je telefoon om te installeren</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex h-9 cursor-pointer items-center justify-center rounded-[10px] border border-hairline bg-surface-1 text-ink transition-colors hover:bg-surface-2 px-4 text-sm"
            >
              Sluiten
            </button>
          </div>
        </div>
      )}
    </>
  )
}
