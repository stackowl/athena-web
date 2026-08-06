/**
 * Download hero — title + the 3-box dock. Content sits on the shared
 * max-w-6xl column so it aligns with the TechnicalFrame gridlines like the
 * other pages.
 */
export default function DownloadHero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:pt-14 text-center sm:px-6">
      <h2 className="display-xl text-balance text-ink">Download Athena.</h2>
      <p className="mx-auto mt-4 max-w-xl text-balance text-lg text-ink-muted lg:text-xl">
        Beschikbaar voor Windows.
      </p>

      <div className="mt-14 flex items-center justify-center">
        <div
          className="relative isolate flex items-center justify-center rounded-[40px] border border-hairline bg-surface-2/85 p-5 backdrop-blur-lg"
          style={{
            boxShadow:
              '0px 3px 3px -1.5px rgba(0,0,0,0.5), 0px 1px 1px -0.5px rgba(0,0,0,0.5), 0px 0px 0px 4px rgba(164,173,186,0.06), 0px 0px 0px 1px rgba(0,0,0,0.4)'
          }}
        >
          {/* Windows — lege box */}
          <div
            className="mx-3 size-20 rounded-3xl bg-surface-2"
            style={{
              boxShadow:
                '0px 3px 3px -1.5px rgba(0,0,0,0.5), 0px 1px 1px -0.5px rgba(0,0,0,0.5), 0px 0px 0px 1px rgba(255,255,255,0.06), 0px 1px 0px 0px rgba(255,255,255,0.08) inset, 0px -1px 0px 0px rgba(0,0,0,0.5) inset'
            }}
          />
          {/* Athena — onze app-icon */}
          <div
            className="mx-3 flex size-20 items-center justify-center rounded-3xl bg-surface-2"
            style={{
              boxShadow:
                '0px 3px 3px -1.5px rgba(0,0,0,0.5), 0px 1px 1px -0.5px rgba(0,0,0,0.5), 0px 0px 0px 1px rgba(255,255,255,0.06), 0px 1px 0px 0px rgba(255,255,255,0.08) inset, 0px -1px 0px 0px rgba(0,0,0,0.5) inset'
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- static-host portable */}
            <img
              src="/athena-icon.png"
              alt="Athena"
              width={40}
              height={40}
              className="rounded-lg"
              style={{ imageRendering: 'auto' }}
            />
          </div>
          {/* macOS — lege box */}
          <div
            className="mx-3 size-20 rounded-3xl bg-surface-2"
            style={{
              boxShadow:
                '0px 3px 3px -1.5px rgba(0,0,0,0.5), 0px 1px 1px -0.5px rgba(0,0,0,0.5), 0px 0px 0px 1px rgba(255,255,255,0.06), 0px 1px 0px 0px rgba(255,255,255,0.08) inset, 0px -1px 0px 0px rgba(0,0,0,0.5) inset'
            }}
          />
        </div>
      </div>
    </section>
  )
}
