# Public Site UI Contract

This contract describes the user-visible interface and static hosting behavior. The site exposes no application API and requires no backend.

## Routes

All five routes are public and must work when opened directly, refreshed, or reached from the shared navigation.

| Path | Page contract |
|---|---|
| `/` | Verified identity, professional title, summary, location, LinkedIn/GitHub/email actions, four stated highlights, ASD preview, and the two current roles in supplied résumé order |
| `/experience` | Current roles in supplied résumé order, followed by completed roles newest-first, with date range, company, technology tags, and achievements; 2010–2012 roles in one initially collapsed, expandable group |
| `/skills` | Seven required skill categories; verified durations have years indicators, undated skills remain text-only, plus a separate AI & Agentic Engineering panel |
| `/agentic` | Three on-page ASD layer explanations in AWD → SDD → APA order, Agentic Developer PH channel, CIIT instructor role, AFP training, and OpenAI Academy certificates |
| `/contact` | Four prominent, individually copyable cards: email, LinkedIn, GitHub, and the YouTube social card shown in the supplied reference |

Every route has page-specific browser title, description, and social-sharing metadata. Route metadata and page content must be present in the generated HTML for direct visits and sharing previews.

## Shared navigation and presentation

- Every page has a shared header linking to all five routes and exposing a clearly named light/dark control, plus a shared footer with social links.
- Dark appearance is the default. A visitor's selected appearance remains consistent while navigating routes.
- Follow `docs/1.PNG`–`docs/5.PNG` for the page compositions: a `~/rjasino` code-style brand; horizontal five-link navigation and icon theme control; dark graphite background, subtle grid, warm off-white type, amber `#F5A524` states, thin rules, numbered section labels, large left-aligned headings, and restrained bordered cards. Use Space Grotesk headings, Inter Tight body, and JetBrains Mono labels/dates/tags.
- Preserve the screenshot's content hierarchy: home hero and profile actions; vertical experience timeline; grouped skill cards with bars for verified durations and text-only undated skills; a three-layer ASD pipeline display; and two-column contact/social cards. On smaller screens, reflow the columns and navigation without horizontal page scrolling; screenshot dimensions are not a mobile-layout requirement.
- The résumé in `docs/RJA_Resume_20261013.pdf` is the factual source for profile and career content. Do not add unsupported headshots or biographical details. Display only verified skill durations; durationless skills remain textual until the owner confirms a value. Use `docs/ASD-Framework-Summary.docx.pdf` as the ASD source: show Agentic Workflow Design (AWD), Spec-Driven Development (SDD), and Agentic Process Automation (APA), in order, and do not present Harness Engineering or a fourth layer as part of ASD.
- The home opening includes the exact line `> building agentic systems_`. Scroll entrances are gentle and non-essential motion is suppressed when reduced motion is requested.
- Navigation, theme control, collapsed timeline group, and copy controls are keyboard operable and expose accessible names and focus states.

## Contact and outbound links

- Contact card copy controls copy the visible verified value and report success. If clipboard access is unavailable or denied, the value remains visible and selectable for manual copying. Keep the actual destination available as a normal link and use a separate, named copy button.
- Email uses `mailto:rjasino@live.com`; LinkedIn and GitHub use their verified profile destinations. The YouTube card displays/copies `@AgenticDeveloperPH2` and links to `https://www.youtube.com/@AgenticDeveloperPH2`.
- Do not publish placeholder or invented contact values. Obtain owner verification before publication if a value is missing.

## Static hosting contract

- The site can be built for a domain-root base (`/`) or project-site base (`/<repository>/`). The selected base applies to assets and internal links; application routes remain the five paths in the route table.
- The static artifact contains a prerendered HTML entry for every route and a root-level branded `404.html`. Unknown paths show a working, base-aware link to the home page without requiring server-side rewrites.
- A push to `main` runs build/test CI. The production deploy job is enabled only after content and release checks pass; it then publishes the verified static artifact through GitHub Actions. A public repository incurs no GitHub Pages hosting fee.

## Explicit omissions

No phone number, résumé download, education history, unrelated personal details, or character references appear on the site.
