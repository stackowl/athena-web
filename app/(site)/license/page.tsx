import type { Metadata } from 'next'
import Link from 'next/link'
import { APP } from '@/lib/config'
import Reveal from '@/components/Reveal'
import TechnicalFrame from '@/components/TechnicalFrame'

export const metadata: Metadata = {
  title: 'License',
  description: `${APP.product} is open source onder de MIT-licentie.`
}

const LICENSE_TEXT = `MIT License

Copyright (c) 2026 Lovecast Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`

export default function LicensePage() {
  return (
    <TechnicalFrame>
      <section className="relative mx-auto max-w-6xl overflow-hidden px-6 pb-16 pt-20 sm:px-10">
        <p className="anim-hero caption text-ink-muted" style={{ animationDelay: '0ms' }}>
          License
        </p>
        <h1 className="anim-hero display-lg mt-6 text-ink" style={{ animationDelay: '90ms' }}>
          Open source, MIT
        </h1>
        <p
          className="anim-hero body-lg mt-4 max-w-2xl text-ink-muted"
          style={{ animationDelay: '180ms' }}
        >
          Athena is gratis te gebruiken, aan te passen en te verspreiden - voor persoonlijke
          projecten, teams en commerciële producten. De volledige licentietekst staat hieronder.
        </p>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-6 sm:px-10">
          <Reveal>
            <div className="flex flex-wrap gap-3">
              <Link href={APP.githubUrl} className="btn btn-primary">
                Bekijk de source op GitHub
              </Link>
              <Link href={APP.releasesUrl} className="btn btn-secondary">
                Releases
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card mt-10 border border-hairline-soft p-6">
              <pre className="codeblock whitespace-pre-wrap">{LICENSE_TEXT}</pre>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-10">
              <h2 className="headline text-ink">Wat dit voor jou betekent</h2>
              <p className="body mt-3 text-ink-muted">
                Gebruik het op je werk, fork het, breng het uit, geef er les mee. Naamsvermelding
                is prettig, maar niet verplicht. Er is geen garantie - bouw er op eigen risico op
                voort, net als bij elk ander MIT-project.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </TechnicalFrame>
  )
}
