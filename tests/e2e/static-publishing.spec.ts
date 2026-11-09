import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

import { expect, test } from '@playwright/test'

const clientOutput = join(process.cwd(), 'dist', 'client')
const routeEntries = [
  'index.html',
  'experience/index.html',
  'skills/index.html',
  'agentic/index.html',
  'contact/index.html',
]

function buildWithBase(basePath: string) {
  const bunExecutable =
    process.platform === 'win32'
      ? join(process.env.APPDATA ?? '', 'npm', 'node_modules', 'bun', 'bin', 'bun.exe')
      : 'bun'
  execFileSync(bunExecutable, ['run', 'build'], {
    cwd: process.cwd(),
    env: { ...process.env, PAGES_BASE_PATH: basePath },
    stdio: 'pipe',
    timeout: 180_000,
  })
}

test('prerenders every route and keeps asset, navigation, and 404 links base-aware', async () => {
  for (const basePath of ['/', '/portfolio']) {
    buildWithBase(basePath)
    const publicBase = basePath === '/' ? '/' : `${basePath}/`

    for (const routeEntry of routeEntries) {
      expect(existsSync(join(clientOutput, routeEntry)), `${routeEntry} should be emitted`).toBe(true)
    }

    const homeHtml = readFileSync(join(clientOutput, 'index.html'), 'utf8')
    expect(homeHtml).toContain(`href="${publicBase}assets/`)
    expect(homeHtml).toContain(`href="${basePath === '/' ? '' : basePath}/experience"`)

    const notFoundPath = join(clientOutput, '404.html')
    expect(existsSync(notFoundPath), 'a branded root-level 404.html should be emitted').toBe(true)
    const notFoundHtml = readFileSync(notFoundPath, 'utf8')
    expect(notFoundHtml).toContain(`href="${publicBase}"`)
    expect(notFoundHtml).toContain('Page not found')
  }
})
