import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

import { defineConfig } from '@lovable.dev/vite-tanstack-config'
import type { Plugin } from 'vite'

import { normalizePagesBasePath } from './src/lib/base-path.ts'

const pagesBasePath = normalizePagesBasePath(process.env.PAGES_BASE_PATH)

function baseAware404Plugin(homeUrl: string): Plugin {
  return {
    name: 'portfolio-base-aware-404',
    apply: 'build',
    async closeBundle() {
      const outputPath = resolve('dist/client/404.html')
      const html = await readFile(outputPath, 'utf8')
      if (!html.includes('__PAGES_BASE_PATH__')) return
      await writeFile(outputPath, html.replaceAll('__PAGES_BASE_PATH__', homeUrl))
    },
  }
}

export default defineConfig({
  plugins: [baseAware404Plugin(pagesBasePath.viteBase)],
  nitro: false,
  vite: {
    base: pagesBasePath.viteBase,
    define: {
      'import.meta.env.VITE_PAGES_BASE_PATH': JSON.stringify(
        pagesBasePath.routerBasePath,
      ),
    },
  },
  tanstackStart: {
    router: {
      basepath: pagesBasePath.routerBasePath,
    },
    prerender: {
      enabled: true,
      autoSubfolderIndex: true,
      autoStaticPathsDiscovery: false,
      crawlLinks: false,
      failOnError: true,
    },
    pages: [
      { path: '/' },
      { path: '/experience' },
      { path: '/skills' },
      { path: '/agentic' },
      { path: '/contact' },
    ],
  },
})
