import { APP } from '@/lib/config'
import { Arrow14 } from './icons'
import { QrPopover } from './qr'

export const LINKS = {
  windows: `${APP.downloadsBase}/athena-windows-setup.exe`,
  macArm: `${APP.downloadsBase}/athena-macos-arm64.dmg`,
  macIntel: `${APP.downloadsBase}/athena-macos-x64.dmg`,
  linuxAppImage: `${APP.downloadsBase}/athena-linux.AppImage`,
  releases: APP.releasesUrl,
  mobile: APP.releasesUrl
}

export type QrImages = {
  windows: string
  macArm: string
  macIntel: string
  linuxAppImage: string
  ios: string
  android: string
}

const BUTTON_BASE =
  'relative inline-flex cursor-pointer items-center justify-center text-nowrap border border-hairline bg-surface-1 text-ink transition-colors duration-300 ease-in-out hover:bg-surface-2 hover:duration-50 active:duration-50 disabled:pointer-events-none disabled:cursor-default h-9 gap-x-1.5 rounded-[10px] px-3 text-sm max-lg:h-11.5 max-lg:gap-x-2 max-lg:rounded-xl max-lg:px-3.5 max-lg:text-base'

function Row({
  label,
  arch,
  qr,
  href,
  cta,
  external,
  download,
  qrId
}: {
  label: string
  arch?: string
  qr?: string
  href: string
  cta: string
  external?: boolean
  download?: boolean
  qrId?: string
}) {
  return (
    <div className="flex items-center justify-between gap-5">
      <p className="overflow-hidden overflow-ellipsis whitespace-nowrap text-ink">
        {label}
        {arch && <span className="text-accent"> {arch}</span>}
      </p>
      <div className="flex items-center gap-2">
        <div className="contents max-md:hidden">
          {qr &&
            (qrId ? (
              <QrPopover qrDataUrl={qr} label={label} ariaId={qrId} />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={qr}
                alt={`${label} QR-code`}
                width={36}
                height={36}
                className="size-9 rounded-md"
              />
            ))}
        </div>
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          download={download}
          className={BUTTON_BASE}
        >
          <span>{cta}</span>
          {external && <Arrow14 className="-rotate-45" />}
        </a>
      </div>
    </div>
  )
}

function Section({
  title,
  subtitle,
  isLast,
  children
}: {
  title: string
  subtitle: string
  isLast?: boolean
  children: React.ReactNode
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-24 sm:px-8">
      <h3 className="text-2xl font-semibold text-ink">{title}</h3>
      <div
        className={`flex flex-wrap items-baseline justify-between gap-8 pb-24 ${
          isLast ? 'pb-28' : ''
        }`}
      >
        <p className="text-xl font-medium text-ink-muted">{subtitle}</p>
        <div className="flex flex-col gap-3 self-baseline">{children}</div>
      </div>
    </section>
  )
}

export default function DownloadSections({ qrs }: { qrs: QrImages }) {
  return (
    <main className="relative w-full">
      <Section title="Athena voor Windows." subtitle="De Windows-app.">
        <Row
          label="Windows"
          arch="[x64 · 571 MB]"
          qr={qrs.windows}
          href={LINKS.windows}
          cta="Download"
          download
        />
      </Section>
    </main>
  )
}
