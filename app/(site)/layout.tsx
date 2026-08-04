import type { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

/** Dark marketing shell for all (site) pages. */
export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-canvas">
      {/* Topbar-laag — gecentraliseerd in de shell, niet sticky */}
      <div className="relative z-50">
        <Navbar />
      </div>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
