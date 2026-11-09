# Research: Roberto Asino Personal Portfolio Website

**Date**: 2026-11-09  
**Scope**: Resolve framework, static rendering, hosting, styling, and validation decisions for the five-route portfolio, and translate the supplied résumé/screenshots into content and presentation decisions.

## 1. Application framework and compatibility

**Decision**: Use TanStack Start on Vite with its integrated TanStack Router; do not add a separate Router application on top of Start. Use the current Start starter as the dependency baseline, retain React 19 and Tailwind CSS v4, and lock compatible package versions with Bun. Use `@lovable.dev/vite-tanstack-config` `^2.20.0` to honor the supplied project requirement; this is a project constraint rather than a proven technical minimum. Require Bun 1.4.4 or newer and Node 22.12 or newer, selecting a currently supported Node LTS for CI. At the research date Node 26 is Active LTS.

**Rationale**: Start provides file-based routes and build-time HTML rendering suited to search previews and direct route visits. The current official Start example combines React 19, Vite 8, and Tailwind v4. A fresh starter plus its lockfile is safer than selecting package versions independently because the example and package registry can be briefly out of sync. Node 22.12+ is the framework/tooling minimum; Bun manages dependencies and invokes package scripts while Node remains available for Node-based CLIs. Pin Bun in CI at or above 1.4.4, which includes the security fix identified during research.

The registry snapshot checked on 2026-11-09 reported React 19.3.1, TanStack Start 1.169.5, TanStack Router 1.170.46, Vite 8.3.6, the React Vite plugin 6.2.1, and Tailwind 4.3.5. These are research observations, not package pins; the generated starter and its lockfile are the implementation source of truth.

The stated `@lovable.dev/vite-tanstack-config >=2.20.0` floor is retained as a project constraint. Research confirmed that 2.20.0 forwards the required prerender options, but also observed the same option forwarding in 2.19.5; therefore 2.20.0 is not claimed to be the earliest technically compatible version. Use a v2-bounded range (`^2.20.0`) and let `bun.lock` fix the exact version. This repository currently has no package manifest or installed version to inspect.

**Alternatives considered**: TanStack Router without Start would reduce framework scope, but would require a separate static-rendering setup. An SPA-only build would depend on host fallback behavior and provide weaker direct-route guarantees. React Server Components are excluded because Start documentation still marks their support experimental.

**References**:
- [TanStack Start overview](https://tanstack.com/start/latest/docs/framework/react/overview)
- [TanStack Start quick start](https://tanstack.com/start/latest/docs/framework/react/quick-start)
- [TanStack file-based routing](https://tanstack.com/start/latest/docs/framework/react/guide/routing)
- [Official Start example config](https://raw.githubusercontent.com/TanStack/router/main/examples/react/start-basic/vite.config.ts)
- [Official Start example package manifest](https://raw.githubusercontent.com/TanStack/router/main/examples/react/start-basic/package.json)
- [TanStack Start package metadata](https://www.npmjs.com/package/@tanstack/react-start)
- [TanStack Router package metadata](https://www.npmjs.com/package/@tanstack/react-router)
- [Vite package metadata](https://www.npmjs.com/package/vite)
- [Tailwind CSS package metadata](https://www.npmjs.com/package/tailwindcss)
- [Lovable Vite config 2.20.0 artifact](https://cdn.jsdelivr.net/npm/@lovable.dev/vite-tanstack-config@2.20.0/dist/index.js)
- [Lovable Vite config 2.19.5 artifact](https://cdn.jsdelivr.net/npm/@lovable.dev/vite-tanstack-config@2.19.5/dist/index.js)
- [Lovable Vite config package README](https://www.npmjs.com/package/@lovable.dev/vite-tanstack-config)
- [Vite requirements](https://vite.dev/guide/)
- [Bun security advisory GHSA-663w-cv8g-jj2p](https://github.com/oven-sh/bun/security/advisories/GHSA-663w-cv8g-jj2p)
- [Node.js release schedule](https://nodejs.org/en/about/previous-releases)

## 2. Static prerendering and route output

**Decision**: Enable static prerendering, disable automatic path discovery, disable Nitro/server output, and explicitly register `/`, `/experience`, `/skills`, `/agentic`, and `/contact` in `pages`. Use app-relative paths in that list. Produce index-file route output and deploy the client artifact (expected at `dist/client` for this setup). Configure Vite's asset `base`, the Start plugin's `router.basepath`, and the router instance's `basepath` consistently for the selected Pages base path. Provide a standalone root-level `404.html` rather than relying on a client-side rewrite.

**Rationale**: GitHub Pages serves files and does not provide server-side route rewrites. Concrete prerendered route files support direct entry and refresh; a standalone `404.html` covers unknown paths while retaining the host's 404 response. Vite's base controls generated asset URLs, while Router's base path controls application navigation. Both must be configured for project sites. The repository path must not be prefixed to the entries in `pages`.

For the wrapper configuration, the researched static-only shape also sets `autoSubfolderIndex: true`, `crawlLinks: false`, and `failOnError: true`. Normalize GitHub's `base_path` output (`""` for a root site or `/<repository>` for a project site) to Vite's expected root/trailing-slash form, and use the matching path for Router. Remember that Vite's base does not rewrite arbitrary JSX links or files copied from `public/`; explicitly make the 404 home link and any public metadata/manifest URLs base-aware. A root-built artifact is not automatically reusable under a repository subpath. Build-time route generation should fail rather than silently omit a required page. Verify the artifact directory and each generated route against the actual lockfile and build output when the app is scaffolded.

**Alternatives considered**: Automatic route discovery is convenient but unnecessary for this fixed route set and can omit routes without suitable components. A single SPA shell or the `spa-github-pages` redirect workaround does not provide the same clean static-page behavior and still starts unknown routes with an HTTP 404. Hash routing changes the requested URL shape.

**References**:
- [TanStack static prerendering](https://tanstack.com/start/latest/docs/framework/react/guide/static-prerendering)
- [TanStack hosting](https://tanstack.com/start/latest/docs/framework/react/guide/hosting)
- [Vite public base path](https://vite.dev/guide/build#public-base-path)
- [TanStack Router basepath](https://tanstack.com/router/latest/docs/framework/react/api/router/RouterOptionsType)
- [GitHub Pages custom 404](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site)
- [TanStack SPA mode](https://tanstack.com/start/latest/docs/framework/react/guide/spa-mode)

## 3. GitHub Pages publishing

**Decision**: Use a GitHub Actions build/test job on pushes to `main`, with a separate least-privilege `actions/deploy-pages` job enabled only after all page content and release checks pass. Before that gate, CI may build and upload artifacts but must not publish route stubs or incomplete content. Use the Pages `base_path` output during the build; normalize it to `/` for a root site or `/<repository>/` for a project site. Set GitHub Pages' source to GitHub Actions in repository settings. Use a supported Node LTS and pinned Bun in CI, install Playwright Chromium before E2E tests, restrict the deployment environment to `main`, and configure Pages concurrency without cancelling an active deployment.

**Rationale**: Artifact-based deployment avoids maintaining a generated-files branch. Separating build and deploy keeps Pages write and OIDC permissions out of the build job. Give the build job `contents: read` and only the `pages: read` permission needed for `base_path`; give the deploy job only `pages: write` and `id-token: write`. Do not activate the deploy job until content review, usability checks, and static-output validation pass, so the early route-stub build cannot become public. Make a currently supported Node LTS available for the Start/Vite toolchain while using Bun to install dependencies and run checks/build. Use a committed Bun lockfile and a frozen install (`bun ci` or the equivalent frozen `bun install`) for reproducible CI. The uploaded artifact should contain `index.html`, the five prerendered routes, assets, and root-level `404.html`, not an extra enclosing repository directory.

At the research date, the current action majors were `oven-sh/setup-bun@v2`, `actions/configure-pages@v6`, `actions/upload-pages-artifact@v5`, and `actions/deploy-pages@v5`. Pin actions to verified full commit SHAs (with version comments and Dependabot updates) for immutable references. Keep the build job read-only apart from the Pages read permission needed to obtain `base_path`; grant `pages: write` and `id-token: write` only to the deploy job, scoped to the `github-pages` environment. Do not deploy pull-request builds; optional manual dispatch should still be guarded to deploy only from `main`. Use a `pages` concurrency group with `cancel-in-progress: false` to avoid cancelling an in-flight deployment.

**Alternatives considered**: Branch-based publishing skips the required Bun build. A single build-and-deploy job is simpler but gives the build job deployment credentials. Committing build output to a `gh-pages` branch adds generated files and write permissions without helping this static site.

**References**:
- [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [GitHub Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [GitHub Pages site types](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)
- [configure-pages outputs](https://github.com/actions/configure-pages/blob/main/action.yml)
- [upload-pages-artifact](https://github.com/actions/upload-pages-artifact)
- [deploy-pages permissions](https://github.com/actions/deploy-pages#security-considerations)
- [Bun in GitHub Actions](https://bun.com/guides/runtime/cicd)
- [Bun CI installs](https://bun.com/docs/pm/cli/install#ci)

## 4. Styling, themes, accessibility, and tests

**Decision**: Use Tailwind v4 and shadcn/ui semantic CSS-variable tokens; define graphite/off-white/amber roles as OKLCH tokens in `src/styles.css`. Load Space Grotesk, Inter Tight, and JetBrains Mono through document-head links in `__root.tsx`, as specified by the brief, and retain local fallback stacks. Follow the screenshot hierarchy with a code-style `~/rjasino` brand, horizontal shared nav, numbered section rules, a subtle grid, large headings, bordered panels, and amber interaction accents. Default to dark appearance; use a hydration-safe theme bootstrap and keep the visitor's choice consistent while navigating. Respect reduced-motion preferences and test visible focus, keyboard interactions, semantic landmarks, reflow, and text contrast in both themes.

**Rationale**: Semantic theme tokens let shared components work in both appearances. The Start/shadcn guidance uses an early theme script to avoid hydration mismatch or a first-paint flash. Tailwind v4 targets current browsers (Chrome 111+, Safari 16.4+, Firefox 128+); this is the assumed baseline because older-browser support was not requested. The requested remote font links are retained even though self-hosted WOFF2 fonts would remove a third-party network dependency; fallback fonts keep text readable if the external font request fails. Use semantic foreground/background tokens and verify contrast (WCAG AA: 4.5:1 for normal text and 3:1 for large text); do not assume every amber-on-graphite combination passes. Keep mobile-first layouts, stack desktop grids at narrow widths, and check 320 CSS-pixel reflow. Skill bars display explicit years as text and provide a secondary visual scale (not proficiency); omit invented durations and a progressbar ARIA role. Use native `<details>/<summary>` for the collapsed earlier-career group, keeping role/date context visible. Give contact cards real destinations plus separate copy buttons, announce success only after clipboard resolution, and keep values manually selectable on failure.

Use Vitest and React Testing Library for focused interaction tests, and Playwright for end-to-end smoke tests of all direct routes, navigation, metadata, theme/hydration, contact copying and failure, the unknown route, reduced motion, responsive reflow, and both base-path configurations. Install Chromium on clean CI runners before E2E tests. Testing Library React 16.1+ supports React 19; add its `@testing-library/dom` peer explicitly. Prefer a few meaningful behavioral checks over extensive snapshots. Add automated accessibility scanning only as a supplementary check; it does not replace keyboard and assistive-technology review.

**Alternatives considered**: OS-only theming would not provide the requested explicit toggle. Self-hosted fonts improve privacy and resilience but do not follow the brief's requested document-head font links. Large component-test and visual-snapshot suites are disproportionate for a mostly static, content-driven site.

**References**:
- [shadcn/ui theming](https://ui.shadcn.com/docs/theming)
- [shadcn/ui dark mode for TanStack Start](https://ui.shadcn.com/docs/dark-mode/tanstack-start)
- [Tailwind dark mode](https://tailwindcss.com/docs/dark-mode)
- [Tailwind browser compatibility](https://tailwindcss.com/docs/compatibility)
- [MDN reduced motion](https://developer.mozilla.org/en-US/docs/Web/CSS/%40media/prefers-reduced-motion)
- [WCAG contrast minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [Vitest guide](https://vitest.dev/guide/)
- [Testing Library query priority](https://testing-library.com/docs/queries/about/)
- [Playwright accessibility testing](https://playwright.dev/docs/accessibility-testing)
- [Tailwind responsive design](https://tailwindcss.com/docs/responsive-design)
- [WCAG reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)
- [MDN `<details>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
- [MDN Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText)
- [MDN progressbar role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)

## Content dependency

The résumé supplies the verified identity, summary, location, career history, skill categories and many durations, AI/agentic tools and methods, teaching, certificates, email, and LinkedIn/GitHub destinations. The screenshots add visual guidance and show a fourth YouTube contact card; include the verified channel `https://www.youtube.com/@AgenticDeveloperPH2` as an additional card while retaining email, LinkedIn, and GitHub as the required core contacts. Use résumé-provided durations only; some items (including ACID, GitHub Actions, and Practices) have no numeric duration and must not receive invented bars. Screenshot 4 gives text for ASD pillars 1 and 2 and only labels for pillars 3 and 4; the missing two explanations need owner-approved copy before publication. These are narrow content-validation checks, not architecture unknowns.

**Source material**: `docs/RJA_Resume_20261013.pdf` is authoritative for factual profile content; `docs/1.PNG`–`docs/5.PNG` are authoritative only for the requested visual treatment and visible page composition. Keep the deliberately omitted phone number, résumé download, education, and unrelated personal details out of the portfolio.
