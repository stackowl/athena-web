import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="relative mx-auto flex max-w-3xl flex-col items-center overflow-hidden px-4 py-32 text-center sm:px-6">
      <p className="anim-hero caption text-ink-muted" style={{ animationDelay: '0ms' }}>
        404
      </p>
      <h1 className="anim-hero display-lg mt-4 text-ink" style={{ animationDelay: '90ms' }}>
        Deze pagina is de weg kwijt
      </h1>
      <p className="anim-hero body mt-4 text-ink-muted" style={{ animationDelay: '180ms' }}>
        De pagina die je zoekt bestaat niet - of het download-bestand is nog
        niet gepubliceerd.
      </p>
      <div className="anim-hero mt-8 flex gap-4" style={{ animationDelay: '270ms' }}>
        <Link href="/" className="btn btn-primary">
          Terug naar home
        </Link>
        <Link href="/download" className="btn btn-secondary">
          Download
        </Link>
      </div>
    </section>
  )
}
