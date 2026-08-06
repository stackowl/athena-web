import type { Metadata } from 'next'
import TechnicalFrame from '@/components/TechnicalFrame'
import { LineHDashed } from '@/components/Gridline'
import DownloadHero from './hero'
import DownloadSections, { LINKS, type QrImages } from './sections'

export const metadata: Metadata = {
  title: { absolute: 'Downloads | Athena' },
  description: 'Athena is available for Windows.',
}

async function qrDataUrl(text: string): Promise<string> {
  const { default: QRCode } = await import('qrcode')
  return QRCode.toDataURL(text, {
    margin: 1,
    width: 168,
    color: { dark: '#1c1d1f', light: '#ffffff' }
  })
}

export default async function DownloadPage() {
  const [windows, macArm, macIntel, linuxAppImage, ios, android] = await Promise.all([
    qrDataUrl(LINKS.windows),
    qrDataUrl(LINKS.macArm),
    qrDataUrl(LINKS.macIntel),
    qrDataUrl(LINKS.linuxAppImage),
    qrDataUrl(LINKS.mobile),
    qrDataUrl(LINKS.mobile)
  ])

  const qrs: QrImages = { windows, macArm, macIntel, linuxAppImage, ios, android }

  return (
    <TechnicalFrame>
      <div>
        <DownloadHero />
        <DownloadSections qrs={qrs} />
      </div>
    </TechnicalFrame>
  )
}
