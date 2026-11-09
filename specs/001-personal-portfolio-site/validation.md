# Validation Status

**Status:** The portfolio's implemented routes and static outputs pass automated validation. It is **not release-ready** because the required 10-person usability review has not been conducted. The owner confirmed that ASD has exactly three layers—AWD → SDD → APA—and the canonical data and `/agentic` page now reflect that source. No public deployment has been attempted.

## Automated checks

| Check | Result | Notes |
|---|---|---|
| `bun run check` | PASS | Strict TypeScript check completed without errors. |
| `bun run test` | PASS (no unit tests discovered) | The current acceptance coverage is in Playwright. |
| `bun run test:e2e` | PASS | 10 tests passed for ASD/teaching, home, experience, skills, contact, static output, and saved-theme hydration. |
| Text contrast calculations | PASS | Dark foreground/muted/accent: 16.60:1 / 7.98:1 / 9.70:1; light: 14.87:1 / 6.17:1 / 8.92:1; amber button text: 9.22:1. All meet the FR-005 normal-text threshold of 4.5:1. |
| Root static build (`PAGES_BASE_PATH=/`) | PASS | Five route entries and base-aware `404.html` verified under `dist/client/`. |
| Project static build (`PAGES_BASE_PATH=/agentic-developer-ph-web`) | PASS | Five route entries, three-layer ASD prerender content, prefixed asset URLs, and base-aware 404 home link verified. |
| Workflow review | PASS | Build-only workflow; pinned action SHAs; `contents: read` and `pages: read`; no deploy job. |

The automated checks do not constitute content approval, a live Pages deployment, or the required usability study.

## ASD scope update

- The owner confirmed on 2026-11-09 that the supported ASD reference defines exactly three layers: **Agentic Workflow Design (AWD)**, **Spec-Driven Development (SDD)**, and **Agentic Process Automation (APA)**.
- Harness Engineering is excluded from ASD; no fourth layer should be displayed or tested.
- T007 and T027–T031 are complete: the source data, page, acceptance coverage, and content review use exactly the three source-defined ASD layers. Harness Engineering is not included as an ASD layer.

## Usability success criteria

The required first-time-reviewer study has **not been conducted**. No reviewer results are claimed or inferred.

- SC-002 target: at least 9 of 10 first-time reviewers identify Roberto's focus and reach a relevant detail page within 30 seconds.
- SC-003 target: at least 9 of 10 reviewers copy and paste the correct contact value within 30 seconds.
- T032 remains incomplete until the owner arranges the 10-person review, results are recorded, and any missed targets are addressed.

## Release gate

T031 and T033 are complete. T032 remains incomplete until the owner conducts the 10-person usability review and records its results. The AI & Teaching page is implemented, but the build-only CI workflow must remain non-publishing and T034 must remain disabled until T032 and all other release approvals pass.
