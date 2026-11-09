# Validation Status

**Status:** Automated validation is passing for the implemented stories, but the portfolio is **not release-ready**. The owner has confirmed that ASD has exactly three layers—AWD → SDD → APA—and that Harness Engineering is not an ASD layer. The planning artifacts now reflect that source. The application data and `/agentic` route still require implementation updates before the content review can pass. No public deployment has been attempted.

## Automated checks

| Check | Result | Notes |
|---|---|---|
| `bun run check` | PASS | Strict TypeScript check completed without errors. |
| `bun run test` | PASS (no unit tests discovered) | The current acceptance coverage is in Playwright. |
| `bun run test:e2e` | PASS | 9 tests passed for home, experience, skills, contact, static output, and saved-theme hydration. |
| Root static build (`PAGES_BASE_PATH=/`) | PASS | Five route entries and base-aware `404.html` verified under `dist/client/`. |
| Project static build (`PAGES_BASE_PATH=/agentic-developer-ph-web`) | PASS | Five route entries, prefixed asset URLs, and base-aware 404 home link verified. |
| Workflow review | PASS | Build-only workflow; pinned action SHAs; `contents: read` and `pages: read`; no deploy job. |

The automated checks do not constitute content approval, a live Pages deployment, or the required usability study.

## ASD scope update

- The owner confirmed on 2026-11-09 that the supported ASD reference defines exactly three layers: **Agentic Workflow Design (AWD)**, **Spec-Driven Development (SDD)**, and **Agentic Process Automation (APA)**.
- Harness Engineering is excluded from ASD; no fourth layer should be displayed or tested.
- T007 was reopened to update the canonical application data. T027–T030 remain incomplete pending implementation and acceptance coverage for the three-layer model.

## Usability success criteria

The required first-time-reviewer study has **not been conducted**. No reviewer results are claimed or inferred.

- SC-002 target: at least 9 of 10 first-time reviewers identify Roberto's focus and reach a relevant detail page within 30 seconds.
- SC-003 target: at least 9 of 10 reviewers copy and paste the correct contact value within 30 seconds.
- T032 remains incomplete until the owner arranges the 10-person review, results are recorded, and any missed targets are addressed.

## Release gate

T031–T033 are not marked complete. The content review and usability study are outstanding, and the AI & Teaching page is intentionally still a route stub. The build-only CI workflow must remain non-publishing until those gates pass.
