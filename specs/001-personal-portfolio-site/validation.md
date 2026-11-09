# Validation Status

**Status:** The portfolio passes automated validation and the owner reports that at least 9 of 10 first-time reviewers met each SC-002 and SC-003 criterion. The production GitHub Pages workflow builds and tests before deploying `dist/client` from `main`. Deployment run #3 succeeded, and all five public routes plus the branded 404 were verified. A subsequent `main` update is being used to verify automatic redeployment. The owner confirmed that ASD has exactly three layers—AWD → SDD → APA—and the canonical data and `/agentic` page reflect that source.

## Automated checks

| Check | Result | Notes |
|---|---|---|
| `bun run check` | PASS | Strict TypeScript check completed without errors. |
| `bun run test` | PASS (no unit tests discovered) | The current acceptance coverage is in Playwright. |
| `bun run test:e2e` | PASS | 10 tests passed for ASD/teaching, home, experience, skills, contact, static output, and saved-theme hydration. |
| Text contrast calculations | PASS | Dark foreground/muted/accent: 16.60:1 / 7.98:1 / 9.70:1; light: 14.87:1 / 6.17:1 / 8.92:1; amber button text: 9.22:1. All meet the FR-005 normal-text threshold of 4.5:1. |
| Root static build (`PAGES_BASE_PATH=/`) | PASS | Five route entries and base-aware `404.html` verified under `dist/client/`. |
| Project static build (`PAGES_BASE_PATH=/agentic-developer-ph-web`) | PASS | Five route entries, three-layer ASD prerender content, prefixed asset URLs, and base-aware 404 home link verified. |
| Workflow review | PASS | Build-and-deploy workflow; build job has `contents: read` and `pages: read`; deploy job alone has `pages: write` and `id-token: write`; actions are pinned to full SHAs; deployments are serialized. |

The usability result is owner-reported; no individual participant data is recorded here. The live Pages deployment was verified at `https://rjasino.github.io/personal-website/` and its `/experience/`, `/skills/`, `/agentic/`, and `/contact/` routes. An unknown route returned the branded 404 page.

## ASD scope update

- The owner confirmed on 2026-11-09 that the supported ASD reference defines exactly three layers: **Agentic Workflow Design (AWD)**, **Spec-Driven Development (SDD)**, and **Agentic Process Automation (APA)**.
- Harness Engineering is excluded from ASD; no fourth layer should be displayed or tested.
- T007 and T027–T031 are complete: the source data, page, acceptance coverage, and content review use exactly the three source-defined ASD layers. Harness Engineering is not included as an ASD layer.

## Usability success criteria

The owner reports that the first-time-reviewer study was conducted and both targets were met. The exact counts were not provided; the reported result is at least 9 of 10 for each criterion.

- SC-002 target: at least 9 of 10 first-time reviewers identify Roberto's focus and reach a relevant detail page within 30 seconds.
- SC-003 target: at least 9 of 10 reviewers copy and paste the correct contact value within 30 seconds.
- T032 is complete based on the owner's report that at least 9 of 10 reviewers met each criterion. No target misses were reported.

## Release gate

T031–T034 are complete. The first production deployment succeeded; the task-status update is the subsequent `main` push used to verify that later updates also deploy automatically.
