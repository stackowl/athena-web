import type { ReactNode } from 'react'

/**
 * Every docs page shares this exact article shell: an <h1> + subtitle
 * header, then the Fumadocs content typography wrapper. Using the same
 * component on every page guarantees a consistent look across all of /docs.
 */
export default function DocsArticle({
  title,
  lede,
  children
}: {
  title: string
  lede: ReactNode
  children: ReactNode
}) {
  return (
    <article>
      <header className="mb-8">
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h1>
        <p className="max-w-2xl text-lg leading-relaxed text-white/55">{lede}</p>
      </header>
      <div className="docs-content">{children}</div>
    </article>
  )
}
