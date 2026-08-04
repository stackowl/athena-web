import type { Metadata } from 'next'
import DocsArticle from '@/components/docs/DocsArticle'
import Callout from '@/components/docs/Callout'

export const metadata: Metadata = {
  title: 'Viewers (Mermaid, PDF, images)',
  description: 'Preview Mermaid diagrams, PDFs and images in the workspace without bouncing between apps.'
}

export default function ViewersPage() {
  return (
    <DocsArticle
      title="Viewers (Mermaid, PDF, images)"
      lede="Preview Mermaid diagrams, PDFs and images in the workspace without bouncing between apps."
    >
      <p>
        Files of various formats render directly in Athena. Diagrams render crisply, PDF pages
        load on-demand, and images support pan/zoom. No need to exit the app to verify content.
      </p>

      <h2 id="mermaid">1. Mermaid diagrams</h2>
      <p>
        Insert code blocks marked \code ```mermaid ``` to render diagrams in the markdown preview.
        The viewer updates in real-time as you edit, enabling rapid iteration on flowcharts, Gantt
        charts, and sequence diagrams.
      </p>

      <h2 id="pdf">2. PDF viewer</h2>
      <p>
        Open any \*.pdf file in a worktree to spawn the PDF viewer. Navigate with arrow keys
        or the scroll wheel. The viewer supports search, page navigation, and zoom controls.
      </p>

      <h2 id="images">3. Image viewer</h2>
      <p>
        Any image file (\*.png, \*.jpg, \*.svg) opens in an embedded viewer that allows you to
        pan, zoom, and examine details without leaving Athena. This is useful for reviewing
        design assets or debugging UI bugs.
      </p>

      <Callout type="info" title="Workspace integration">
        <p>
          All viewers stay within the worktree context. You can annotate an image or comment on
          a PDF page directly through the integrated comment system.
        </p>
      </Callout>
    </DocsArticle>
  )
}