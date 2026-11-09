# Implementation Plan: Roberto Asino Personal Portfolio Website

**Branch**: `001-personal-portfolio-site` (setup identifier; working Git branch remains `main`) | **Date**: 2026-11-09 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/001-personal-portfolio-site/spec.md`, the résumé in `docs/RJA_Resume_20261013.pdf`, and visual references `docs/1.PNG`–`docs/5.PNG`.

## Summary

Build a five-page static portfolio whose content is sourced from Roberto's supplied résumé and whose desktop visual direction follows the five screenshots: a graphite grid, warm off-white typography, amber accents, compact technical labels, large editorial headings, bordered cards, and a code-style `~/rjasino` header. Include the résumé's verified career timeline, skills and durations, agentic engineering work, teaching, and public links; keep content in one typed source file and retain the stated privacy exclusions. Add the shared theme control and responsive versions of the screenshot layouts. Use React 19 with TanStack Start (integrated TanStack Router), Vite, Tailwind CSS v4, and shadcn/ui. Prerender the five explicit routes and publish the static output to GitHub Pages from `main` through GitHub Actions only after all page content and release checks pass. Configure the asset, Start-plugin, and router-instance base paths consistently for domain-root and repository-subpath hosting.

## Technical Context

**Language/Version**: TypeScript (strict checking); React 19. Select mutually compatible current stable releases from the generated starter and lock them with Bun. Node 22.12+ is the framework/tooling floor; use a currently supported Node LTS in CI (Node 26 at the research date).

**Primary Dependencies**: TanStack Start with its integrated TanStack Router; Vite; `@lovable.dev/vite-tanstack-config` `^2.20.0` (project-brief floor); Tailwind CSS v4; shadcn/ui; Vitest, React Testing Library, and Playwright. Use Bun `>=1.4.4` for dependency management and scripts; retain Node on `PATH` for Node-based framework/test CLIs. Lock exact resolutions in `bun.lock`.

**Storage**: No backend, database, or runtime content store. Profile and resume content is static and owned by `src/data/resume.ts`. Theme selection is a client-side presentation preference.

**Testing**: TypeScript check and production build; Vitest with React Testing Library for focused interaction behavior; Playwright Chromium smoke tests for routes, metadata, theme, copy, base paths, not-found, responsive reflow, and reduced motion. Install Playwright browser binaries in CI. No test tooling is installed yet.

**Target Platform**: Static files hosted by GitHub Pages, at either a domain root or `/<repository>/`. Modern browsers supported by Tailwind CSS v4 (Chrome 111+, Safari 16.4+, Firefox 128+).

**Project Type**: Single frontend web application; no server-side runtime is required after build.

**Performance Goals**: Prerender all five public pages so direct entry and social previews do not depend on content API calls. No numeric latency or traffic SLA is specified; keep fonts and motion lightweight, verify all content is readable without animation, and test responsive reflow at 320 CSS pixels.

**Constraints**: Explicitly enumerate the five prerender paths and set `autoStaticPathsDiscovery: false`; set static-only output (`nitro: false`, `autoSubfolderIndex: true`, `crawlLinks: false`, `failOnError: true`); emit a standalone, base-aware `404.html`; keep Vite `base`, the Start plugin `router.basepath`, and the router instance `basepath` aligned; build static artifacts early if useful but do not enable production deployment until all five routes pass content and release checks. Preserve Space Grotesk, Inter Tight, JetBrains Mono, OKLCH semantic color tokens, the dark default/light toggle, and typed résumé content. Use source-verified dates, achievements, links, and skill durations only; show undated skills without invented numeric indicators and do not infer missing ASD pillar copy. Match the screenshots at desktop scale while adapting the layout for narrow screens. Meet keyboard, focus, contrast, touch-target, and reduced-motion expectations.

**Scale/Scope**: Five routes, one profile/content source, a shared site shell, résumé data for eight career entries (including the grouped 2010–2012 roles), seven skill groups plus an AI & Agentic Engineering panel, and one public Pages deployment. No user accounts, dynamic records, backend, or contact form.

### Reference-driven content and presentation

- Treat `docs/RJA_Resume_20261013.pdf` as the authority for identity, summary, experience, skills, AI/agentic methods, teaching, credentials, and contact facts. Preserve the concurrent Full Scale and part-time CIIT roles and keep the résumé's verified ordering for the two current engagements.
- Treat `docs/1.PNG`–`docs/5.PNG` as visual guidance, not additional biographical evidence. The screenshots establish a left-aligned hero, `~/rjasino` brand, horizontal five-link navigation with an icon theme control, thin grid, large headings, amber active states, skill-year bars, two-column ASD tiles, and two-column contact cards. Match the visible section labels `01 / EXPERIENCE`, `02 / SKILLS`, `03 / AI & TEACHING`, and `05 / CONTACT` where used.
- The Contact reference includes a YouTube card in addition to the three required email/LinkedIn/GitHub cards. Include it as a fourth copyable public-social card, using the verified Agentic Developer PH channel destination. Keep YouTube linked in the footer as well.
- Use a responsive reflow rather than copying desktop dimensions literally: stack card grids and preserve readable text/no horizontal page scrolling on narrow screens. No portrait, phone number, résumé download, education, or other unsupported profile details are implied by the references.
- Render skill bars only for durations explicitly stated in the résumé; show durationless skills as text/tags until the owner verifies a numeric duration. Bar length represents the documented years on a common scale, not proficiency.
- The reference visibly gives explanations for ASD pillars 1 and 2; the résumé names all four pillars but does not explain pillars 3 and 4. Do not invent those descriptions; require owner-approved copy before publication.

## Constitution Check

**Pre-research gate: PASS.** `.specify/memory/constitution.md` contains template placeholders rather than ratified principles or project constraints. There are no active constitutional gates to violate. The proposed feature is a single static site with no backend.

**Post-design gate: PASS.** The design keeps one application and one static content source, has no database or service layer, and adds only the test and publishing workflow needed for the stated routes and hosting behavior. Responsive layouts and accessible controls are implemented in the same app; no active governance constraint conflicts with the design. Content validation remains a publication check for the two ASD descriptions not supplied in the source material, not an unresolved architecture choice.

## Project Structure

### Documentation (this feature)

```text
specs/001-personal-portfolio-site/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── site-ui.md
├── tasks.md                 # Created by /speckit.tasks, not by this plan
└── validation.md            # Usability and release validation results
```

### Source Code (repository root)

```text
src/
├── routes/
│   ├── __root.tsx
│   ├── index.tsx
│   ├── experience.tsx
│   ├── skills.tsx
│   ├── agentic.tsx
│   └── contact.tsx
├── components/
│   ├── site-header.tsx
│   ├── site-footer.tsx
│   ├── theme-toggle.tsx
│   ├── contact-card.tsx
│   ├── experience-timeline.tsx
│   ├── skill-group.tsx
│   ├── section-heading.tsx
│   └── ui/                  # shadcn/ui components used by the site
├── data/
│   └── resume.ts             # Single typed source for profile and resume content
├── router.tsx
└── styles.css                # OKLCH design tokens and global styles

public/
└── 404.html                  # Standalone GitHub Pages not-found document

tests/
├── unit/
└── e2e/

.github/workflows/deploy.yml
vite.config.ts
package.json
bun.lock
```

The TanStack route tree is generated by the routing plugin and must not be hand-maintained. Keep the static `404.html` at the artifact root; it must use the configured base path when linking home and must not depend on a server-side rewrite. Keep all resume facts and external destinations in `src/data/resume.ts`; components should present this source data rather than duplicating literals. The home page is the opening composition in reference 1; references 2–5 guide Experience, Skills, AI & Teaching, and Contact respectively.

**Structure Decision**: One frontend application in the existing `src/` and `tests/` directories, which are currently empty. Use TanStack Start file-based routes, shared components, and one typed résumé data module. Run build/test CI early if needed, but enable the two-job GitHub Pages deployment only after the final content and release gate; keep deploy permissions least-privileged. No backend project is warranted.

## Complexity Tracking

No constitution violations or unjustified architecture complexity were identified.
