# Quickstart and Validation Guide

This guide validates the existing static portfolio implementation. The repository includes a package manifest, Bun lockfile, Vite configuration, application source, and the scripts below.

## Prerequisites

- Bun 1.4.4 or newer, with the selected version pinned in CI and recorded with the lockfile.
- A currently supported Node LTS on `PATH` (Node 22.12+ is the minimum for the current TanStack/Vite toolchain). Bun manages installation and scripts; Node-based CLIs still use Node unless deliberately configured otherwise.
- A public GitHub repository with Pages configured to use **GitHub Actions** as the publishing source.
- For local project-path checks, the repository name whose subpath is to be tested.

## Install, run, and check

From the repository root:

```sh
bun ci
bun run dev
```

The implementation should provide these validation scripts:

```sh
bun run check
bun run test
bun run test:e2e
bun run build
```

Before E2E validation on a clean runner, install the Playwright Chromium browser (and required OS dependencies in Linux CI), for example `bunx playwright install --with-deps chromium`.

Expected results:

- `check` completes type checking without errors.
- `test` passes the focused unit/component tests, including theme, collapsed timeline, and contact-copy behavior.
- `test:e2e` visits all five routes directly and through navigation, verifies page headings and metadata, checks the theme and contact controls, and confirms the not-found experience.
- `build` emits all five prerendered pages and the standalone `404.html` into the configured client output directory.

## Validate both hosting bases

The build reads `PAGES_BASE_PATH`. Empty or `/` selects a domain-root deployment; `/<repository>` selects a project-page deployment. Normalize the value so Vite asset URLs use a trailing slash and TanStack Router uses its correct mount path.

In PowerShell, build once for each configuration:

```powershell
$env:PAGES_BASE_PATH = "/"
bun run build
# Inspect/preview the root build, then build for a project site:
$env:PAGES_BASE_PATH = "/<repository>"
bun run build
Remove-Item Env:PAGES_BASE_PATH -ErrorAction SilentlyContinue
```

For each build, verify the output contains `index.html`, `404.html`, and route entries for `experience`, `skills`, `agentic`, and `contact`. Serve the build with the project's preview script and confirm that direct route entry, refresh, internal navigation, and asset loading all use the selected base. Confirm an unknown URL displays the not-found page and its home link stays within the selected base.

Also verify the supplied visual references at desktop scale, then inspect narrow-screen reflow at 320 CSS pixels; keyboard navigation and visible focus; theme consistency and hydration in both appearances; reduced-motion behavior; contrast; timeline disclosure; copy success/failure feedback; and manual-selection fallback when clipboard access is unavailable.

## Validate résumé-derived content

Review `src/data/resume.ts` against `docs/RJA_Resume_20261013.pdf`, the ASD reference `docs/ASD-Framework-Summary.docx.pdf`, and the presentation-only references in `docs/1.PNG`–`docs/5.PNG`. Confirm all eight career entries are present, the 2010–2012 roles are grouped and initially collapsed, the 16+ years / 4 industries / 60 students highlights are correct, and listed skill durations retain their source precision. Do not add bars for skills with no duration in the résumé. Verify email, LinkedIn, GitHub, and the additional YouTube card/channel destination. Confirm the phone number, résumé download, education, and unrelated personal details remain absent. Verify ASD is presented as exactly three ordered layers—AWD → SDD → APA—and that Harness Engineering is not shown as an ASD layer or fourth stage.

## GitHub Pages deployment validation

The `.github/workflows/deploy.yml` workflow installs dependencies from the committed Bun lockfile, installs Playwright Chromium, runs type checks and tests, builds using the `base_path` supplied by `actions/configure-pages`, verifies the five route entries and root `404.html`, and uploads only `dist/client`. Its deploy job depends on the successful build, runs only for `main`, and publishes that artifact to the protected `github-pages` environment. The build job has `contents: read` and `pages: read`; only the deploy job receives `pages: write` and `id-token: write`. All actions are pinned to verified full SHAs, and Pages deployments use a non-canceling `pages` concurrency group.

In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. Under **Environments → github-pages**, restrict deployment branches to `main` (and configure any desired reviewer approval rule).

After pushing the workflow to `main`, verify all five public URLs at the configured root or project subpath, social preview metadata, the root-level 404 response, and that a later push to `main` publishes without a manual upload. Do not deploy pull-request builds or non-main branches.
