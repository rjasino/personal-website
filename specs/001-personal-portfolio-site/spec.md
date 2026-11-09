# Feature Specification: Roberto Asino Personal Portfolio Website

**Feature Branch**: `001-personal-portfolio-site` (working Git branch remains `main`)

**Created**: 2026-11-09

**Status**: Draft

**Input**: User description and references: `docs/personal-website-roberto-jacinto-asino-2026-11-09.md`, ASD framework reference `docs/ASD-Framework-Summary.docx.pdf`, factual résumé `docs/RJA_Resume_20261013.pdf`, and visual references `docs/1.PNG`–`docs/5.PNG`.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Understand Roberto's work at a glance (Priority: P1)

A prospective employer, collaborator, or student visits the home page to quickly understand Roberto's professional focus, experience, and how to reach him.

**Why this priority**: The home page is the primary introduction and should make the portfolio useful immediately, even before a visitor explores other pages.

**Independent Test**: Open the home page and verify that the profile summary, experience highlights, featured ASD preview, and contact links make sense without visiting another page.

**Acceptance Scenarios**:

1. **Given** a visitor opens the home page, **When** the page loads, **Then** it identifies Roberto, presents his verified title, summary, and location, and offers LinkedIn, GitHub, and email actions.
2. **Given** a visitor scans the home page, **When** they reach the highlights, **Then** they can see 16+ years of experience, 4 industries, 60 students per term, a featured ASD preview, and the two current roles in supplied résumé order.
3. **Given** a visitor wants more detail, **When** they use the shared navigation, **Then** they can reach each of the five portfolio pages.
4. **Given** a visitor opens any page, **When** they use its header or footer, **Then** the header provides the five page links and theme control, and the footer provides social links.
5. **Given** the site is showing its default dark appearance, **When** a visitor selects the light appearance and navigates to another page, **Then** the selected appearance remains consistent across pages.
6. **Given** a visitor views the opening section and scrolls, **When** the content appears, **Then** the specified technical labels, colors, typography, and terminal-style line are present with gentle entrance motion; when reduced motion is preferred, non-essential entrances are suppressed.
7. **Given** a visitor opens or shares any named page, **When** its browser or social preview information is shown, **Then** its title, description, and preview information describe that page.
8. **Given** a reviewer checks the site's included profile content, **When** they compare it with the stated exclusions, **Then** no phone number, résumé download, education history, other personal details, or character references are present.

---

### User Story 2 - Review professional experience and skills (Priority: P2)

A prospective employer or collaborator explores Roberto's career history and capabilities to assess his fit for an opportunity.

**Why this priority**: Detailed, scannable experience and skills support informed evaluation beyond the brief introduction on the home page.

**Independent Test**: Visit the experience and skills pages directly and verify the ordered timeline, grouped early roles, skill categories, verified-duration indicators (with no invented durations), and AI/agentic skills panel.

**Acceptance Scenarios**:

1. **Given** a visitor opens the experience page, **When** they review the timeline, **Then** concurrent roles marked Present appear in supplied résumé order, followed by completed roles newest first, with dates, company, technology tags, and key achievements.
2. **Given** a visitor reaches roles from 2010–2012, **When** they view the timeline, **Then** those roles appear together in a collapsed group that can be expanded.
3. **Given** a visitor opens the skills page, **When** they scan the categories, **Then** they can find Languages, Backend, Front-End, Databases, Cloud & DevOps, Testing, and Practices, with a years indicator for each skill whose duration is verified in the résumé, text-only labels for skills without a verified duration, and a separate AI & Agentic Engineering panel.

---

### User Story 3 - Learn about agentic work and teaching (Priority: P2)

A student, educator, or technology enthusiast learns about Roberto's ASD framework and teaching activities, then follows the channel or credential references for more information.

**Why this priority**: This page explains Roberto's newer agentic AI focus and connects it to his teaching and training work.

**Independent Test**: Open the AI & Teaching page and verify that all three ASD layers—AWD → SDD → APA—are explained in order on the page, the requested teaching and credential items are present, and the channel link opens the specified destination.

**Acceptance Scenarios**:

1. **Given** a visitor opens the AI & Teaching page, **When** they read the ASD section, **Then** they can understand Agentic Workflow Design (AWD), Spec-Driven Development (SDD), and Agentic Process Automation (APA) in that order from the page itself without needing an external framework link. The page MUST NOT add a fourth ASD layer or present Harness Engineering as part of ASD.
2. **Given** a visitor reviews the teaching and learning section, **When** they scan its content, **Then** they can find the Agentic Developer PH channel, CIIT instructor role, AFP training, and OpenAI Academy certificates.
3. **Given** a visitor selects the YouTube channel reference, **When** the link opens, **Then** it leads to `https://www.youtube.com/@AgenticDeveloperPH2`.

---

### User Story 4 - Copy a contact method (Priority: P1)

A visitor who wants to contact Roberto opens the contact page and copies the email address or social profile value they need.

**Why this priority**: A clear, reliable way to make contact is a primary outcome of a personal portfolio.

**Independent Test**: Visit the contact page, copy each displayed contact value, and verify that the copied value matches its visible label and destination.

**Acceptance Scenarios**:

1. **Given** a visitor opens the contact page, **When** the page loads, **Then** email, LinkedIn, and GitHub are presented as prominent, individually copyable cards, along with the fourth copyable YouTube card shown in the supplied visual reference.
2. **Given** a visitor copies a contact value, **When** the copy action completes, **Then** the value can be pasted correctly and the visitor receives confirmation; if copying is unavailable, the value remains selectable for manual copying.

---

### User Story 5 - Publish the portfolio (Priority: P1)

Roberto, as the site owner, publishes the portfolio publicly without a hosting fee and can make updates available without manually uploading site files.

**Why this priority**: The site only serves its purpose when visitors can access a current public version, and the brief requires free hosting with automated publishing.

**Independent Test**: Publish a site update from the primary branch and verify it is publicly available at a configured domain root or project subpath, with direct page access and a working not-found page.

**Acceptance Scenarios**:

1. **Given** the owner publishes an update from the primary branch, **When** the publication succeeds, **Then** the updated site is publicly available without a manual file-upload step or hosting fee for a public repository.
2. **Given** the site is configured for either a domain root or project subpath, **When** a visitor directly opens any named page, **Then** the page and its internal navigation links work at that address.
3. **Given** a visitor opens an address that does not match a named page, **When** the site responds, **Then** a branded not-found page appears with a working link to the home page, without requiring a dedicated application server.

### Edge Cases

- A visitor opens any of the five pages directly, including when the site address includes a project subpath; the requested page still loads and its navigation links remain correct.
- A visitor opens an unknown address; they see a branded not-found page with a clear route back to the home page.
- A visitor has enabled reduced motion in their device preferences; scrolling does not trigger non-essential animated entrances.
- A contact value is unavailable or not verified during content preparation; it must be verified with the owner before publication rather than replaced with a placeholder or invented value.
- A visitor uses a browser that cannot perform one-click copying; contact values remain visible and selectable.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The site MUST provide five distinct pages: Home (`/`), Experience (`/experience`), Skills (`/skills`), AI & Teaching (`/agentic`), and Contact (`/contact`).
- **FR-002**: Every page MUST include shared navigation to all five pages, a light/dark theme control, and a footer with social links.
- **FR-003**: The home page MUST present Roberto's verified name, professional title, short summary, location, and actions for LinkedIn, GitHub, and email.
- **FR-004**: The home page MUST display the stated highlights of 16+ years, 4 industries, 60 students per term, and the ASD framework, plus a featured ASD preview and the two current roles in supplied résumé order.
- **FR-005**: The visual presentation MUST use a dark graphite base, warm off-white text, amber `#F5A524` highlights, fine grid details, and compact technical labels. Typography MUST use Space Grotesk for headings, Inter Tight for body text, and JetBrains Mono for labels, dates, and technology tags. The palette and font families MUST be defined in shared design tokens/styles. Normal text MUST meet 4.5:1 contrast and large text MUST meet 3:1 in both themes; the grid MUST remain decorative and MUST NOT reduce text legibility.
- **FR-006**: The opening section MUST include the terminal-style line `> building agentic systems_`. Scroll entrances MUST be gentle and MUST respect reduced-motion preferences.
- **FR-007**: The default appearance MUST be dark. Visitors MUST be able to switch between light and dark appearances, and the selected appearance MUST remain consistent while navigating the site.
- **FR-008**: The experience page MUST show all verified roles with dates, company, technology tags, and key achievements. Concurrent roles marked Present MUST retain the supplied résumé display order; completed roles MUST appear newest first. Roles from 2010–2012 MUST be grouped together and initially collapsed, with a way to expand them.
- **FR-009**: The skills page MUST group skills under Languages, Backend, Front-End, Databases, Cloud & DevOps, Testing, and Practices. Each skill with a résumé-verified duration MUST show a visual indicator and the source duration; skills without a verified duration MUST remain text-only unless the owner supplies one. Durations MUST NOT be inferred. The page MUST include a separate AI & Agentic Engineering panel for tools, methods, and model strategy.
- **FR-010**: The AI & Teaching page MUST explain the three ASD layers—Agentic Workflow Design (AWD), Spec-Driven Development (SDD), and Agentic Process Automation (APA)—in pipeline order, using the supported framework reference, without linking to an external ASD explanation. It MUST NOT present Harness Engineering as an ASD layer or add a fourth layer. The page MUST also include the Agentic Developer PH channel, CIIT instructor role, AFP training, and OpenAI Academy certificates.
- **FR-011**: The Contact page MUST show prominent, individually copyable email, LinkedIn, and GitHub cards, plus a copyable YouTube social card displaying `@AgenticDeveloperPH2` and linking to `https://www.youtube.com/@AgenticDeveloperPH2`. Successful copying MUST be confirmed; if one-click copying is unavailable, displayed values MUST remain selectable.
- **FR-012**: Each page MUST have its own page-appropriate browser title, description, and social-sharing preview information.
- **FR-013**: Each named page MUST load when opened directly at the site address, whether hosted at a domain root or under a project subpath. Internal links MUST resolve correctly in either configuration.
- **FR-014**: An unknown address MUST show a branded not-found page with a working link to the home page, including when served without a dedicated application server.
- **FR-015**: The site MUST be publishable publicly without a hosting fee for a public repository. Publishing an update from the primary branch MUST NOT require manually uploading the site files.
- **FR-016**: The site MUST omit a phone number, résumé download, education history, other personal details, and character references.

### Key Entities *(include if feature involves data)*

- **Profile**: Roberto's verified name, professional title, summary, location, career highlights, and public profile links.
- **Role**: A position or engagement with dates, organization, technology tags, and achievements; roles include a special grouping for 2010–2012.
- **Skill**: A capability, its category, and an optional résumé-verified duration; durationless skills are not assigned inferred years.
- **ASD framework**: Agentic Systems Design and its three ordered layers (AWD → SDD → APA), with source-grounded explanations for each layer.
- **Teaching and learning item**: A teaching role, training activity, channel, or certificate to be presented on the AI & Teaching page.
- **Contact method**: A verified email or social profile value with a visitor-facing label and copy action; the four cards are email, LinkedIn, GitHub, and YouTube.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: All five named pages load when opened directly, and all internal navigation links reach the correct page at both a domain root and a project subpath.
- **SC-002**: At least 9 out of 10 first-time reviewers can identify Roberto's professional focus and find a link to a relevant detailed page within 30 seconds of opening the home page.
- **SC-003**: At least 9 out of 10 reviewers can copy a selected contact method and paste the correct value within 30 seconds.
- **SC-004**: Every required page section and stated career highlight is present in a content review, and none of the explicitly excluded personal details appears.
- **SC-005**: A successful publication from the primary branch makes the updated site publicly available without a manual file-upload step and without a hosting fee for a public repository.

## Assumptions

- The intended audience includes prospective employers, collaborators, students, and people interested in agentic AI.
- The résumé is authoritative for factual profile content, the screenshots are visual guidance, and `docs/ASD-Framework-Summary.docx.pdf` is authoritative for ASD. ASD has three ordered layers: AWD → SDD → APA. Do not include Harness Engineering as an ASD layer or invent a fourth layer.
- The three ASD layers are explained on the site; no external ASD framework destination is required.
- Public hosting is expected to use GitHub Pages for a public repository, as specified in the brief. The website has no feature that requires server-side processing.
- The site must support both a domain-root address and a project-subpath address, with the deployment owner selecting the appropriate address.
- The light/dark choice is expected to persist during navigation within a visit; long-term preference persistence is not required by this specification.
- The home page defaults to dark appearance, and reduced-motion device preferences disable non-essential entrance motion.
