# Data Model: Roberto Asino Personal Portfolio Website

The portfolio is static. These entities describe the typed content held in the single canonical `src/data/resume.ts` module; they do not imply a database or remote API.

## Entities

### Profile

Represents the portfolio owner and the content used for the home page and shared social links.

| Field | Meaning | Validation |
|---|---|---|
| `name` | Verified public name | Required; use `Roberto Jacinto Asino` |
| `title` | Professional title line | Preserve the résumé header sequence and separators: Senior Full-Stack Software Engineer, .NET • Azure • React, Agentic AI Developer |
| `summary` | Short professional introduction | Use a concise, accurate version of the résumé summary: 16+ years; enterprise systems across financial services, government, insurance, and education; .NET/C#, Azure, React/Angular; agentic workflows and ASD |
| `location` | Approved location display | Use `Quezon City, Philippines`; do not add personal details beyond the approved value |
| `highlights` | Years of experience, industries, students per term, and ASD reference | Match the supplied values: 16+ years, 4 industries, 60 students per term, and Agentic Systems Design (ASD) |
| `contactMethods` | References to the email, LinkedIn, GitHub, and YouTube contact records | All four are required by the supplied content and screenshot; verify destinations and use `mailto:` for email and HTTPS for profiles |

### Experience Role

Represents one verified role or engagement in the experience timeline and optional home-page preview.

| Field | Meaning | Validation |
|---|---|---|
| `id` | Stable content identity | Unique within the role collection |
| `title` | Role title | Verified source only |
| `company` | Organization or client label | Verified source only |
| `startDate`, `endDate` | Role date range | Preserve résumé month/year precision; end is not earlier than start; present roles may have no end date. Do not fabricate exact days |
| `technologies` | Display tags for the role | Verified technologies; no duplicate tags within a role |
| `achievements` | Key outcomes or responsibilities | Use sourced facts; do not invent metrics |
| `group` | Optional timeline grouping | Roles dated 2010–2012 are grouped and initially collapsed |

Display concurrent current roles in résumé order (Full Scale role first, CIIT part-time instructor role second), followed by the remaining roles newest-to-oldest: PCCW Solutions (November 2020–June 2024), Codebiz IT Solutions (February–October 2020), Audition Magic (November 2018–December 2019), Birches Group (February 2017–December 2018), and Marine Benefits Assistance and Services (November 2012–February 2017). Group Primover Consultancy Services and Systems and Software Consulting Group roles (2010–2012) together in the initially collapsed earlier-experience entry. Do not use fabricated day-level dates. The home page previews the two current engagements.

### Skill Category and Skill

Organizes capabilities and the experience indicator shown on the Skills page.

| Field | Meaning | Validation |
|---|---|---|
| `category` | One of Languages, Backend, Front-End, Databases, Cloud & DevOps, Testing, or Practices | Must match one of the seven required categories; screenshot headings may expand Backend to `Backend & Frameworks` and Testing to `Testing & Tools` |
| `name` | Skill label | Required and non-empty |
| `experienceLabel` | Résumé's display value (for example, `16 yrs`, `1+ yr`, or `3+ yrs`) | Preserve the source wording and precision |
| `minimumYears` | Numeric lower bound used only to size the visual bar | Optional; set only when a numeric duration is explicitly stated. A `+` duration represents its stated lower bound. Never infer a value |

The separate AI & Agentic Engineering panel is a category/panel in the same content source and contains verified tools, methods, and model strategy. A skill with no résumé duration remains text-only until the owner verifies a duration. Bars use the same 16-year scale and represent documented years/lower bounds, not proficiency.

### ASD Framework

Represents the framework preview and its full explanation on the AI & Teaching page.

| Field | Meaning | Validation |
|---|---|---|
| `name` | Framework name | Use the owner-approved name and expansion, if any |
| `pillars` | Pillar labels and explanations | Exactly four. The screenshots provide the first two names and explanations; the résumé supplies the names of all four. The owner must approve explanations for pillars 3 and 4 before publication; do not infer framework claims |

The framework is explained on-site; no external ASD explanation link is included.

### Teaching and Learning Item

Represents a teaching role, training activity, channel, or certificate.

| Field | Meaning | Validation |
|---|---|---|
| `kind` | Instructor role, training, channel, or certificate | Must be a supported display category |
| `title` | Public-facing item name | Required and verified |
| `organization` | Associated institution or publisher | Verified where applicable |
| `description` | Short context for the item | Avoid claims not supported by source material |
| `url` | Optional public destination | Verified HTTPS URL; YouTube channel must be `https://www.youtube.com/@AgenticDeveloperPH2` |

Required items include the CIIT instructor role, AFP Finance Team Training, the OpenAI Academy certification line exactly as printed (`AI Foundation • Applied AI Foundation • Agent and Workflow • Path Completion 2026`), and Agentic Developer PH channel. Preserve résumé wording; do not infer separate certificate dates or levels.

### Contact Method

Represents a copyable public contact card.

| Field | Meaning | Validation |
|---|---|---|
| `kind` | Email, LinkedIn, GitHub, or YouTube | Exactly one of the four required contact-card kinds |
| `label` | Human-readable card label | Required and accessible |
| `value` | Text to display and copy | Verified; never a placeholder or invented value |
| `href` | Destination for opening the contact method | Valid `mailto:` for email or verified HTTPS URL for a profile |

Copy success is UI feedback, not persisted model state. Displayed text remains selectable when clipboard access is unavailable.

### Page Metadata

Represents page-specific browser and social-preview content.

| Field | Meaning | Validation |
|---|---|---|
| `path` | One of the five public route paths | Unique and explicitly listed in prerender configuration |
| `title` | Browser title | Required and distinct per page |
| `description` | Search/share description | Required and relevant to that page |
| `socialPreview` | Page-specific social metadata | Required; verified public image may be included when available |

## Relationships and derived views

- One **Profile** owns many **Experience Roles**, **Skill Categories**, **Teaching and Learning Items**, and **Contact Methods**.
- The **ASD Framework** is referenced by the Profile's highlights and has exactly four **Pillars**.
- Each **Experience Role** belongs to the timeline; the home page previews the two current roles in résumé order, and the timeline groups 2010–2012 roles.
- **Skills** are grouped by their required category; indicators use only explicitly sourced experience labels and do not alter source values.
- Each of the five routes has one **Page Metadata** record.

## Excluded data

The model intentionally has no phone number, résumé-download asset, education history, character references, or unrelated personal details. No runtime user data, authentication, or persistence is required.

## Supplied résumé content inventory

- **Languages**: C# (15 yrs), JavaScript (16 yrs), HTML/CSS (16 yrs), TypeScript (3 yrs), Java (3 yrs, 2020–2024).
- **Backend & frameworks**: ASP.NET MVC/Web API (6 yrs), Entity Framework (5 yrs), Node.js (1+ yr), Express (1 yr), Laravel (1+ yr).
- **Front-end**: Bootstrap (5 yrs), React (3 yrs), Angular (3 yrs, 2020–2024), Next.js (1 yr), TailwindCSS (1 yr).
- **Databases**: SQL Server (15 yrs), SSRS (3+ yrs), Oracle (3 yrs, 2020–2024), SQLite (5 yrs), PostgreSQL (2 yrs), MongoDB (1 yr), Prisma (2 yrs), ACID (no duration provided).
- **Cloud & DevOps**: Microsoft Azure (4 yrs), Azure DevOps (5 yrs), Azure Pipelines (2 yrs), Azure Function Apps (2 yrs), Azure Logic Apps (2 yrs), Docker (2 yrs), Podman (1 yr), GitHub Actions (no duration provided).
- **Testing & tools**: Postman (10 yrs), Git (7 yrs), SVN (5 yrs), NUnit (2 yrs), xUnit (1 yr), Selenium .NET (1 yr), Swagger (1 yr).
- **Practices**: SOLID, OOP, Agile/Scrum, REST API Design, GraphQL, UML/System Modeling, CI/CD, Spec-Driven Development (durations not provided).
- **AI & Agentic Engineering**: Claude Code with custom commands/rules/MCP; OpenCode; GitHub Copilot; ChatGPT; Gemini; NotebookLM; ASD; repository-as-memory; GitHub Spec Kit; OpenSpec; BMad; multi-provider Claude/Gemini/DeepSeek routing; context-window management; AI-assisted GitHub Actions/Docker CI/CD.
- **Public contact display/copy values**: `rjasino@live.com`; `linkedin.com/in/rjasino`; `github.com/rjasino`; `@AgenticDeveloperPH2`. Link to `mailto:rjasino@live.com`, `https://www.linkedin.com/in/rjasino/`, `https://github.com/rjasino`, and `https://www.youtube.com/@AgenticDeveloperPH2` respectively.

Preserve the source's plus signs and year ranges. The résumé explicitly omits numeric durations for ACID, GitHub Actions, and the Practices entries; render those without a years bar unless the owner supplies verified values. The first two ASD descriptions visible in `docs/4.PNG` are: **Agentic Workflow Design**—structuring how humans and AI agents split, sequence, and review work across a delivery pipeline; **Spec-Driven Development**—specs as the source of truth, with agents implementing written requirements rather than ad hoc prompts. Pillars 3 and 4 currently have verified names only.

### Career achievement source notes

Use only these résumé-supported examples when selecting concise timeline bullets:

- **Full Scale Teams PH**: financial integration API on Azure Function Apps/WebJobs; Azure Logic Apps automation; Treaty Management System using .NET API and React SPA; legacy modernization; spec-driven GitHub Copilot delivery.
- **CIIT College of Arts and Technology**: full-stack modules for 60 students per term; Copilot and agentic/spec-driven teaching materials; capstone/thesis advising.
- **PCCW Solutions**: Hong Kong SFC Information System; iCRMS Urine Test Management Module; Cigna HK Claim Information System; SFC SSRS reporting; .NET Selenium regression automation.
- **Codebiz IT Solutions**: PNP Pension Management System deduction/adjustment modules and reports; beneficiary migration with zero data loss.
- **Audition Magic**: in-house React front end with Ruby on Rails API, built and extended.
- **Birches Group**: Indigo Survey Management System; automated reporting/email distribution; back-office access/subscription tools; ASP.NET MVC public-site contributions.
- **Marine Benefits Assistance and Services**: Gjenesis Insurance Management System; Arbiter data-access layer; automated reporting/email; ASP.NET MVC website backend.
- **Earlier experience**: Web Developer, Primover Consultancy Services (Kimberly-Clark Philippines), April–October 2012—Umbraco sites for Poise Malaysia and Huggies India plus a procurement intranet. Programmer, Systems and Software Consulting Group Inc., April 2010–April 2012—HRIS work for TIP, Vallacar Transit, and PNU; authored SRS documents with use-case, ER, and activity diagrams.
- **Teaching and learning**: Part-time CIIT instructor (May 2025–Present) covering Laravel, MERN, and Next.js; AFP specialist web development training with a formal student assessment report; OpenAI Academy certification line as printed above; Agentic Developer PH YouTube channel.

