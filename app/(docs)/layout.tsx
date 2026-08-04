import type { ReactNode } from 'react'
import DocsShell from '@/components/docs/DocsShell'

/** Dedicated Fumadocs-style shell for every /docs page. */
export default function DocsLayout({ children }: { children: ReactNode }) {
  return <DocsShell>{children}</DocsShell>
}
