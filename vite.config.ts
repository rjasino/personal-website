import { defineConfig } from '@lovable.dev/vite-tanstack-config'

import { normalizePagesBasePath } from './src/lib/base-path.ts'

const pagesBasePath = normalizePagesBasePath(process.env.PAGES_BASE_PATH)

export default defineConfig({
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
