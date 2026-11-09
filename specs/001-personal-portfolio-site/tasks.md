---
description: "Implementation task list for Roberto Asino Personal Portfolio Website"
---

# Tasks: Roberto Asino Personal Portfolio Website

**Input**: Design documents from `/specs/001-personal-portfolio-site/`

**Prerequisites**: [plan.md](plan.md), [spec.md](spec.md), [research.md](research.md), [data-model.md](data-model.md), [contracts/site-ui.md](contracts/site-ui.md), [quickstart.md](quickstart.md)

**Tests**: The specification defines independent acceptance tests for each user story, so story-level Playwright tests are included before implementation. Do not add test-first tasks beyond those listed.

**Organization**: Tasks are grouped by user story so each route or publishing increment can be implemented and validated independently after the shared foundation.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel with other marked tasks because the files differ and prerequisites are complete.
- **[Story]**: User story label matching `spec.md` (US1–US5).
- Every task description names the file path(s) to change.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize the single static web application and its toolchain.

- [ ] T001 Initialize the React 19 TypeScript TanStack Start project from the current compatible starter using Bun; add the application dependencies including `@lovable.dev/vite-tanstack-config` `^2.20.0` and commit the resolved versions in `package.json` and `bun.lock`.
- [ ] T002 Configure static-only rendering (`nitro: false`, `autoSubfolderIndex: true`, `crawlLinks: false`, `failOnError: true`) and the five app-relative `pages` (`/`, `/experience`, `/skills`, `/agentic`, `/contact`) with `autoStaticPathsDiscovery: false`. Normalize `PAGES_BASE_PATH` consistently for Vite `base`, the TanStack Start plugin's `router.basepath`, and the router instance's `basepath` in `vite.config.ts` and `src/router.tsx`; create minimal route stubs in `src/routes/__root.tsx`, `src/routes/index.tsx`, `src/routes/experience.tsx`, `src/routes/skills.tsx`, `src/routes/agentic.tsx`, and `src/routes/contact.tsx` so every configured path exists. Verify that every route prerenders and that the static output contains no required server runtime.
- [ ] T003 Configure strict TypeScript, Tailwind CSS v4 (including its Vite plugin), shadcn/ui, Vitest/React Testing Library, and Playwright with the required development/check/test/build/preview scripts in `tsconfig.json`, `vite.config.ts`, `components.json`, `vitest.config.ts`, `playwright.config.ts`, and `package.json`.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish verified shared content, design tokens, and the common shell used by every story.

**⚠️ CRITICAL**: Complete this phase before implementing any user story.

- [ ] T004 Define and populate the Profile record in `src/data/resume.ts` using `docs/personal-website-roberto-jacinto-asino-2026-11-09.md` and `docs/RJA_Resume_20261013.pdf`; preserve these validations verbatim: name “Required; use the owner's approved spelling”; title “Required before publication; do not infer an unverified title”; summary “Required; consistent with verified experience”; location “Required by the home page; do not add personal details beyond the approved value”; highlights “Match the supplied values: 16+, 4, 60 per term, and ASD.”
- [ ] T005 Add all verified Experience Role records from `docs/RJA_Resume_20261013.pdf` in `src/data/resume.ts`; preserve “Unique within the role collection”; “Verified source only” for title and company; month/year source precision; “Verified technologies; no duplicate tags within a role”; “Use sourced facts; do not invent metrics”; the supplied résumé order for concurrent Present roles; newest-first ordering for completed roles; and the initially collapsed 2010–2012 group.
- [ ] T006 Add Skill Category and Skill records sourced from `docs/RJA_Resume_20261013.pdf` in `src/data/resume.ts`; use the seven required categories (Languages, Backend, Front-End, Databases, Cloud & DevOps, Testing, Practices), require a non-empty skill name, preserve source duration labels, and leave duration absent when the résumé does not verify one; include verified AI & Agentic Engineering tools, methods, and model strategy. Do not infer skill durations.
- [ ] T007 Add the source-verified ASD Framework fields and Teaching and Learning Items from the supplied brief and `docs/RJA_Resume_20261013.pdf` in `src/data/resume.ts`; preserve the owner-approved name, four pillar names, source-provided descriptions, supported item kinds, titles, organizations, and URLs. The supplied materials explain only pillars 1 and 2; leave descriptions 3 and 4 absent (not placeholder text), record the owner-approval dependency, and do not infer copy. This missing copy gates the AI & Teaching story and production release, but does not block implementation of unrelated stories.
- [ ] T008 Add Contact Method and Page Metadata records in `src/data/resume.ts` using verified values from `docs/RJA_Resume_20261013.pdf`, the supplied brief, and the screenshot references. Include four copyable contact/social records: email, LinkedIn, GitHub, and YouTube (display/copy `@AgenticDeveloperPH2`, link to its verified HTTPS URL); retain verified hrefs, accessible labels, and no placeholder values. Add five unique page metadata records with distinct titles, relevant descriptions, and available verified social-preview information.
- [ ] T009 [P] Define the requested graphite/off-white/amber palette as OKLCH tokens, Space Grotesk/Inter Tight/JetBrains Mono font families with fallbacks, responsive grid details, and reduced-motion rules in `src/styles.css`; keep the amber signal color anchored to `#F5A524` and verify text contrast in both themes.
- [ ] T010 Compose the shared document shell, font links, site header/footer, five-route navigation, social links, dark-default theme control, and pre-hydration theme initialization in `src/routes/__root.tsx`, `src/components/site-header.tsx`, `src/components/site-footer.tsx`, and `src/components/theme-toggle.tsx`; ensure the selected theme remains consistent during route navigation and controls are keyboard accessible.

**Checkpoint**: All route paths, source-verified shared data, theme, navigation, and document shell are available. Owner-approved ASD descriptions for pillars 3 and 4 remain a specific prerequisite for completing User Story 3 and enabling production deployment, not a blocker for unrelated stories.

---

## Phase 3: User Story 1 - Understand Roberto's work at a glance (Priority: P1) 🎯 MVP

**Goal**: Give a first-time visitor a clear introduction to Roberto, his focus, highlights, recent roles, and contact options.

**Independent Test**: Open `/` and verify the verified identity/title/summary/location and LinkedIn/GitHub/email actions, all four stated highlights, ASD preview, the two current roles in supplied résumé order, terminal line, page metadata, and links to all five routes.

### Tests for User Story 1

- [ ] T011 [US1] Add Playwright acceptance coverage in `tests/e2e/home.spec.ts` for the home identity and actions, four highlights, featured ASD and the two current roles in supplied résumé order, shared navigation/theme/footer, page metadata, terminal line, reduced-motion behavior, and excluded content; run it against the route stub and confirm the relevant assertions fail before the home implementation.

### Implementation for User Story 1

- [ ] T012 [P] [US1] Implement the home hero in `src/components/home-hero.tsx` with verified name, title, summary, location, LinkedIn/GitHub/email actions, and the exact opening line `> building agentic systems_`.
- [ ] T013 [P] [US1] Implement the home stats and featured content in `src/components/home-highlights.tsx`, showing 16+ years, 4 industries, 60 students per term, the ASD preview, and the two current roles in supplied résumé order from `src/data/resume.ts`.
- [ ] T014 [US1] Compose the home route from the hero and highlights in `src/routes/index.tsx` and provide its unique title, description, and social-sharing metadata through the route head.

**Checkpoint**: User Story 1 works independently from the home route and shared foundation; it is the first demonstrable MVP increment.

---

## Phase 4: User Story 4 - Copy a contact method (Priority: P1)

**Goal**: Let visitors find and copy Roberto's verified email, LinkedIn, or GitHub contact value.

**Independent Test**: Open `/contact`, copy each visible value, paste it to confirm correctness, verify success feedback, and confirm the value remains selectable when clipboard access is unavailable.

### Tests for User Story 4

- [ ] T015 [US4] Add Playwright acceptance coverage in `tests/e2e/contact.spec.ts` for the four labelled email, LinkedIn, GitHub, and YouTube cards; verify visible copied values, exact outbound destinations (including the YouTube channel URL), success feedback, and selectable fallback when clipboard access is denied; confirm the relevant assertions fail before implementation.

### Implementation for User Story 4

- [ ] T016 [US4] Implement the reusable copyable contact card in `src/components/contact-card.tsx` with a user-initiated copy action, accessible success feedback, verified destination link, and visible/selectable fallback text.
- [ ] T017 [US4] Implement `/contact` in `src/routes/contact.tsx` using the four verified Contact Method records and `src/components/contact-card.tsx`; the YouTube card displays/copies `@AgenticDeveloperPH2` and links to `https://www.youtube.com/@AgenticDeveloperPH2`. Add unique page title, description, and social-sharing metadata.

**Checkpoint**: User Story 4 can be demonstrated by itself after the shared foundation, without depending on the experience or AI pages.

---

## Phase 5: User Story 5 - Publish the portfolio (Priority: P1)

**Goal**: Establish repeatable static-output validation and build CI; production publishing is enabled only after the full portfolio passes content and release checks.

**Independent Test**: Build and serve the route stubs at both `/` and `/<repository>/`; confirm all five paths are emitted, assets and internal links use the configured base, and an unknown path receives the branded 404 page. These early checks MUST NOT publish route stubs to GitHub Pages.

### Tests for User Story 5

- [ ] T018 [US5] Add non-publishing static-output acceptance checks in `tests/e2e/static-publishing.spec.ts` for the five prerendered route entries, root and project base-aware asset/navigation URLs, and root-level `404.html`; confirm the checks fail before the static-output implementation and do not invoke a Pages deploy.

### Implementation for User Story 5

- [ ] T019 [P] [US5] Create a standalone branded, base-aware not-found document in `public/404.html` that links back to the home route without server-side scripts or rewrites.
- [ ] T020 [P] [US5] Create build-and-test CI in `.github/workflows/deploy.yml` for pushes to `main` using a supported Node LTS and pinned Bun; pass `actions/configure-pages` `base_path` as `PAGES_BASE_PATH`, run `bun ci`, `bun run check`, `bun run test`, and `bun run test:e2e`, build and upload the client artifact, and verify the output. Give this job only `contents: read` and the `pages: read` permission needed for `base_path`. This early workflow MUST NOT contain or invoke a production Pages deploy job; document the build-only stage in `specs/001-personal-portfolio-site/quickstart.md`.

**Checkpoint**: The static artifact and build CI can validate the five scaffolded routes independently. Production deployment remains disabled until content stories US1–US4, content review, usability review, and release checks are complete.

---

## Phase 6: User Story 2 - Review professional experience and skills (Priority: P2)

**Goal**: Let employers and collaborators inspect the complete career timeline and scannable skill categories.

**Independent Test**: Open `/experience` and `/skills` directly; verify newest-first roles, the initially collapsed expandable 2010–2012 group, all seven skill categories, years indicators, and the separate AI & Agentic Engineering panel.

### Tests for User Story 2

- [ ] T021 [P] [US2] Add timeline acceptance coverage in `tests/e2e/experience.spec.ts` for the supplied résumé order of concurrent Present roles, completed roles newest first, dates/company/technology/achievement content, and the initially collapsed then expandable 2010–2012 group; confirm the relevant assertions fail before implementation.
- [ ] T022 [P] [US2] Add skills acceptance coverage in `tests/e2e/skills.spec.ts` for all seven category labels, a visible years indicator for every skill with a verified duration, text-only treatment without inferred years for durationless skills, and the AI & Agentic Engineering panel; confirm the relevant assertions fail before implementation.

### Implementation for User Story 2

- [ ] T023 [P] [US2] Implement the timeline in `src/components/experience-timeline.tsx`, ordering concurrent Present roles by supplied résumé order and completed roles newest first, and initially collapsing the 2010–2012 group; use verified Experience Role records from `src/data/resume.ts`.
- [ ] T024 [P] [US2] Implement category headings, skill rows, and years-of-experience indicators only for source-verified durations in `src/components/skill-category.tsx`; render durationless skills as text-only, using the seven validated categories in `src/data/resume.ts`.
- [ ] T025 [P] [US2] Compose `/experience` in `src/routes/experience.tsx` with `src/components/experience-timeline.tsx` and its unique title, description, and social-sharing metadata.
- [ ] T026 [P] [US2] Compose `/skills` in `src/routes/skills.tsx` with `src/components/skill-category.tsx`, the separate AI & Agentic Engineering panel, and its unique title, description, and social-sharing metadata.

**Checkpoint**: The experience and skills routes are independently usable and can be developed in parallel after their shared content model is complete.

---

## Phase 7: User Story 3 - Learn about agentic work and teaching (Priority: P2)

**Goal**: Explain the ASD framework and present Roberto's teaching, training, channel, and certificate information.

**Independent Test**: Open `/agentic`; understand all four pillars from the page itself, find CIIT/AFP/OpenAI Academy items, and follow the Agentic Developer PH link to the specified YouTube URL.

### Tests for User Story 3

- [ ] T027 [US3] Obtain and record owner-approved descriptions for ASD pillars 3 and 4 before completing the four-pillar acceptance coverage in `tests/e2e/agentic.spec.ts`; test all four on-page explanations, CIIT instructor role, AFP training, OpenAI Academy certificates, and the exact YouTube channel URL, and confirm relevant assertions fail before implementation. If the owner copy is unavailable, hold User Story 3 and production deployment without inventing or displaying placeholder text.

### Implementation for User Story 3

- [ ] T028 [P] [US3] Implement the four-pillar explanation in `src/components/asd-pillars.tsx` using only the four verified ASD entries from `src/data/resume.ts`, with no external ASD explanation link.
- [ ] T029 [P] [US3] Implement the channel, teaching, training, and certificate presentation in `src/components/teaching-items.tsx`, preserving the exact verified Agentic Developer PH URL from `src/data/resume.ts`.
- [ ] T030 [US3] Compose `/agentic` in `src/routes/agentic.tsx` from the ASD and teaching components and add its unique title, description, and social-sharing metadata.

**Checkpoint**: User Story 3 delivers the complete AI & Teaching page independently of the experience and skills pages.

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Verify the complete portfolio against scope, accessibility, base-path, and deployment requirements.

- [ ] T031 Review `src/data/resume.ts` and all five page route files in `src/routes/` against `specs/001-personal-portfolio-site/spec.md`; confirm every required item is present, every fact and all four ASD pillar descriptions are owner-approved, all five metadata entries are page-specific, and phone/resume-download/education/other personal details/character references are absent.
- [ ] T032 Conduct the success-criteria usability review and record results in `specs/001-personal-portfolio-site/validation.md`: at least 9 of 10 first-time reviewers identify Roberto's focus and reach a detail page within 30 seconds, and at least 9 of 10 copy and paste the correct contact value within 30 seconds; if either target is missed, improve `src/components/home-hero.tsx`, `src/components/home-highlights.tsx`, or `src/components/contact-card.tsx` and repeat.
- [ ] T033 Run the runnable checks and both base-path builds in `specs/001-personal-portfolio-site/quickstart.md`; verify `dist/client/` contains all five route entries and `404.html`, check direct routes/navigation/theme/reduced motion/contact fallback and the complete approved content, and confirm the artifact is release-ready. This is a pre-deployment gate; do not publish from this task.
- [ ] T034 Enable the protected production deploy job in `.github/workflows/deploy.yml` only after T031–T033 pass; deploy only from `main` in the `github-pages` environment, grant `pages: write` and `id-token: write` only to the deploy job, pin actions to verified full SHAs, and serialize Pages deployments with `cancel-in-progress: false`. Update `specs/001-personal-portfolio-site/quickstart.md` and verify all five live routes, the not-found page, and a subsequent main-branch update.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No feature dependencies; initialize the app and static route skeletons first.
- **Foundational (Phase 2)**: Depends on Setup and blocks all story implementation. `T004`–`T008` update the same canonical data module and therefore run in order; `T009` can run alongside those data tasks after Setup; `T010` completes the shell after the data and design tokens exist.
- **User Stories (Phases 3–7)**: Depend on the shared foundation. User Stories 1, 2, and 4 are independently testable after foundation; User Story 3 can proceed once owner-approved copy for all four ASD pillars is available. User Story 5's static-output checks, build-only CI, and 404 can be prepared from route skeletons; its production deploy job is deferred until Phase 8 release checks pass.
- **Polish and release (Phase 8)**: Depends on content stories US1–US4 and the build-only static checks from US5. Complete T031–T033 before enabling production deployment and completing US5 in T034.

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Foundation; no dependency on other stories.
- **User Story 4 (P1)**: Starts after Foundation; uses the already-complete Contact Method records and does not depend on the home route.
- **User Story 5 (P1)**: Static-output checks and build-only CI start after Foundation. Production deployment waits for US1–US4 and successful completion of T031–T033.
- **User Story 2 (P2)**: Starts after Foundation; independent of US1, US3, and US4.
- **User Story 3 (P2)**: Starts after Foundation and owner approval of missing ASD pillar descriptions in T027; otherwise it remains blocked independently of US1, US2, and US4.

### Within Each User Story

- Write the listed acceptance tests first and confirm their target assertions fail before implementing that story.
- Build page components before composing their route; page head metadata is owned by its route file.
- Do not change the shared data module from story UI tasks; its complete verified content is established in Foundation.
- Run the story's independent test criteria at its checkpoint.

### Parallel Opportunities

- `T009` can run in parallel with `T004`–`T008` after Setup because it changes `src/styles.css` rather than `src/data/resume.ts`.
- After Foundation, User Stories 1, 2, 4, and the non-publishing portion of 5 can run in parallel; User Story 3 can be assigned once T027's owner-copy prerequisite is met. Production deployment remains gated by T031–T033.
- Within US1: `T012` and `T013` are parallel; `T014` follows both.
- Within US2: `T021` and `T022` can be authored in parallel; after they fail, `T023`/`T024` and then `T025`/`T026` can be implemented in parallel by route.
- Within US3: `T028` and `T029` are parallel; `T030` follows both.
- Within US4 there is no safe intra-story parallelism: the contact route consumes the copy-card component.
- Within US5, `T019` and build-only CI `T020` can be developed in parallel after the failing artifact check. Production deployment `T034` is not parallelizable with route-story work and must wait for T031–T033.

---

## Parallel Examples

### User Story 1

```text
After T011 fails, implement T012 in src/components/home-hero.tsx and T013 in src/components/home-highlights.tsx in parallel.
Then complete T014 in src/routes/index.tsx.
```

### User Story 4

```text
Complete T015 first, then T016 in src/components/contact-card.tsx, followed by T017 in src/routes/contact.tsx.
While US4 runs, another contributor can take US1, US2, US3, or US5 because the shared content module is complete.
```

### User Story 5

```text
Complete T018 against the route skeletons, then develop public/404.html (T019) and build-only CI in .github/workflows/deploy.yml (T020) in parallel. Do not add the deploy job until T031–T033 pass; enable and validate it in T034.
```

### User Story 2

```text
Author T021 and T022 in parallel. After both targeted checks fail, implement the experience and skills components/routes in parallel pairs: T023 -> T025 and T024 -> T026.
```

### User Story 3

```text
Complete T027 first. Then implement src/components/asd-pillars.tsx (T028) and src/components/teaching-items.tsx (T029) in parallel; compose src/routes/agentic.tsx in T030.
```

---

## Implementation Strategy

### MVP First (User Story 1)

1. Complete Setup and the shared Foundation.
2. Complete User Story 1 and run its independent home-page acceptance checks.
3. Stop for a demonstrable home-page MVP before adding the remaining route content.

### Incremental Delivery

1. Add User Story 4 to make all contact methods copyable.
2. Add User Story 5's non-publishing static-output checks and build-only CI; do not publish route stubs.
3. Complete User Stories 2 and 3; validate the complete content and all route outputs before enabling the production deploy job.
4. Finish the quickstart and release checks in Phase 8, then enable and verify publishing from `main`.

### Parallel Team Strategy

After Foundation, contributors can implement US1, US2, US3, US4, and US5 independently. Within US2 and US3, the subcomponents use separate files and can be developed in parallel. Keep the tests first within each story and reserve the final end-to-end deployment check for the integrated site.

## Notes

- Every implementation task uses the required `- [ ] T### [P?] [US#?] ... path` format; setup, foundation, and polish tasks omit story labels.
- The task list includes acceptance tests because the feature specification provides an independent test for every user story; no unrelated test suites are added.
- The exact ASD pillar details and owner-specific contact/profile facts must come from verified source material. Do not invent values if a source does not provide them.
- [P] indicates separate files and complete prerequisites; tasks touching `src/data/resume.ts` are intentionally sequential.
