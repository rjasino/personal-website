export interface PagesBasePath {
  /** Vite asset base always has a trailing slash. */
  viteBase: string
  /** TanStack Router mount path has no trailing slash except at the root. */
  routerBasePath: string
}

export function normalizePagesBasePath(value: string | undefined): PagesBasePath {
  const input = value?.trim() ?? ''

  if (input === '' || input === '/') {
    return { viteBase: '/', routerBasePath: '/' }
  }

  if (/[\\?#]/.test(input) || input.includes('//')) {
    throw new Error(`Invalid PAGES_BASE_PATH: ${JSON.stringify(value)}`)
  }

  const segments = input.split('/').filter(Boolean)
  if (segments.length === 0 || segments.some((segment) => segment === '.' || segment === '..')) {
    throw new Error(`Invalid PAGES_BASE_PATH: ${JSON.stringify(value)}`)
  }

  const routerBasePath = `/${segments.join('/')}`
  return {
    viteBase: `${routerBasePath}/`,
    routerBasePath,
  }
}
