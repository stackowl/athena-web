import type { Metadata } from 'next'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Rich markdown editor',
  description: 'Edit and preview markdown (docs, READMEs) with rendering inline.'
}

export default function MarkdownPage() {
  return (
    <DocsArticle
      title="Rich markdown editor"
      lede="Edit and preview markdown (docs, READMEs) with rendering inline."
    >
      <p>
        The markdown editor enables real-time collaboration on documentation. As you type, see live
        rendering of your content while maintaining standard markdown syntax.
      </p>

      <h2 id="editing-features">1. Live collaboration</h2>
      <p>
        Multiple users can edit simultaneously with syntax highlighting, Git integration, and code
        completion. Changes are instantly reflected across the board.
      </p>

      <h2 id="snippet-generation">2. Snippet auto-completion</h2>
      <p>
        Enter code blocks or image commands using the editor&apos;s snippet shortcuts. This
        accelerates documentation writing inside a worktree.
      </p>

      <h2 id="preview-panels">3. Preview panels</h2>
      <p>
        Enter preview mode to see the rendered markdown alongside the source. This helps verify
        formatting across platforms before committing.
      </p>

      <Callout type="success" title="Documentation at scale">
        <p>
          The markdown editor is optimized for maintaining live documentation with Athena&apos;s AI
          agents. AI reviews can analyze markdown structure directly in-browser without leaving the
          worktree.
        </p>
      </Callout>
    </DocsArticle>
  )
}