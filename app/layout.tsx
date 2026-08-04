import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { APP } from '@/lib/config'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  title: {
    default: `${APP.product} - ${APP.tagline}`,
    template: `%s - ${APP.product}`
  },
  description: APP.description,
  metadataBase: new URL('https://athena.dev'),
  openGraph: {
    title: `${APP.product} - ${APP.tagline}`,
    description: APP.description,
    type: 'website',
    siteName: APP.product,
    url: 'https://athena.dev'
  },
  twitter: {
    card: 'summary_large_image',
    title: `${APP.product} - ${APP.tagline}`,
    description: APP.description
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
