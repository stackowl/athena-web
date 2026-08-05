/**
 * Route smoke test: builds are already validated by `next build`; this
 * serves the built site and asserts every route returns 200 and every
 * local asset reference (screens, agent icons, community images) resolves.
 *
 * Usage: node scripts/smoke-routes.mjs
 * Requires a production build (.next) — run `npm run build` first.
 */

import { spawn } from 'node:child_process'
import { existsSync } from 'node:fs'
import { join } from 'node:path'

const root = join(import.meta.dirname, '..')
const port = process.env.SMOKE_PORT ? Number(process.env.SMOKE_PORT) : 3499
const base = `http://127.0.0.1:${port}`

const ROUTES = [
  '/',
  '/download',
  '/docs',
  '/robots.txt',
  '/sitemap.xml'
]

const AGENT_ICON_RE = /\/agent-icons\/[^"')]+\.png/g
const ASSET_RE = /\/(?:screens|community|agent-icons)\/[^"')]+\.(?:jpg|gif|png|webp)/g
const SITEMAP_URL_RE = /<loc>([^<]+)<\/loc>/g

if (!existsSync(join(root, '.next'))) {
  console.error('✗ .next build not found — run `npm run build` first')
  process.exit(1)
}

const server = spawn(
  process.execPath,
  ['node_modules/next/dist/bin/next', 'start', '-p', String(port)],
  { cwd: root, stdio: 'ignore' }
)

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function waitUntilReady(timeoutMs = 60_000) {
  const deadline = Date.now() + timeoutMs
  while (Date.now() < deadline) {
    try {
      const res = await fetch(`${base}/robots.txt`)
      if (res.ok) {
        return
      }
    } catch {
      // not up yet
    }
    await sleep(500)
  }
  throw new Error('server did not become ready')
}

function localAssetUrls(html) {
  const urls = new Set()
  for (const m of html.matchAll(ASSET_RE)) {
    urls.add(m[0])
  }
  for (const m of html.matchAll(AGENT_ICON_RE)) {
    urls.add(m[0])
  }
  return [...urls]
}

let failures = 0

function fail(msg) {
  failures += 1
  console.error(`✗ ${msg}`)
}

try {
  await waitUntilReady()

  // Derive every docs route from the generated sitemap so new pages are
  // always covered without editing this script.
  const sitemapRes = await fetch(`${base}/sitemap.xml`)
  if (sitemapRes.status !== 200) {
    fail('/sitemap.xml -> HTTP ' + sitemapRes.status)
  } else {
    const sitemap = await sitemapRes.text()
    for (const m of sitemap.matchAll(SITEMAP_URL_RE)) {
      const url = new URL(m[1]).pathname
      if (!ROUTES.includes(url)) {
        ROUTES.push(url)
      }
    }
  }

  const checked = new Set()
  for (const route of ROUTES) {
    const res = await fetch(`${base}${route}`)
    if (res.status !== 200) {
      fail(`${route} -> HTTP ${res.status}`)
      continue
    }
    checked.add(route)
    const html = await res.text()

    for (const asset of localAssetUrls(html)) {
      if (checked.has(asset)) {
        continue
      }
      const assetRes = await fetch(`${base}${asset}`)
      if (assetRes.status !== 200) {
        fail(`${route}: asset ${asset} -> HTTP ${assetRes.status}`)
      }
    }
  }

  console.log(`✓ ${checked.size} routes returned 200; all local assets resolved`)
} catch (err) {
  fail(String(err?.message ?? err))
} finally {
  server.kill()
}

if (failures > 0) {
  console.error(`✗ smoke failed with ${failures} error(s)`)
  process.exit(1)
}
console.log('✓ smoke passed')
