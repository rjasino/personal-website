# Personal Website — Roberto Jacinto Asino

## Design direction: "Engineering Spec Sheet"

Your resume shows two sides: 16+ years of serious enterprise work (.NET, Azure, government and finance clients) and a newer focus on agentic AI, where you created the ASD framework and teach it. The design should feel precise and technical, but still warm and human.

- **Look:** Dark graphite background with warm off-white text and one bright signal color (amber, #F5A524) for links and highlights. Thin grid lines and small monospace labels like `01 / EXPERIENCE`, as in a technical spec document.
- **Type:** Space Grotesk for headings, Inter Tight for body text, JetBrains Mono for labels, dates and tech tags.
- **Motion:** Gentle fade-in as you scroll, and a terminal-style typing line in the opening section (`> building agentic systems_`).
- **Light/dark toggle** in the header.

## Pages

1. **Home (/)**: name, title line, short summary, location, and buttons for LinkedIn, GitHub and Email. A stat strip shows 16+ years, 4 industries, 60 students per term and the ASD framework. Below that are a featured preview of the ASD framework and the two most recent roles.
2. **Experience (/experience)**: vertical timeline of all roles, newest first. Each role shows its dates, company, tech stack as chips and key achievements. Roles from 2010–2012 are grouped together and collapsed.
3. **Skills (/skills)**: skills grouped by category (Languages, Backend, Front-End, Databases, Cloud & DevOps, Testing, Practices). Each skill has a small bar showing years of experience. A separate "AI & Agentic Engineering" panel covers tools, methods and model strategy.
4. **AI & Teaching (/agentic)**: Agentic Systems Design explained as the three-layer AWD → SDD → APA pipeline, using the supported framework reference (`docs/ASD-Framework-Summary.docx.pdf`) and no external ASD explanation link; the Agentic Developer PH YouTube channel (https://www.youtube.com/@AgenticDeveloperPH2), the CIIT instructor role, the AFP training and the OpenAI Academy certificates. Do not present Harness Engineering as an ASD layer.
5. **Contact (/contact)**: email, LinkedIn and GitHub as large copyable cards.

Every page has a shared header (links to all pages, theme toggle) and a footer (social links).

## Left out on purpose

- Phone number
- Résumé download
- Education
- Other personal details and character references

## Technical details

- Resume content lives in one typed data file (`src/data/resume.ts`). Every page reads from it.
- Each page is its own route file with a unique head() for title, description and og tags.
- Colors and fonts are defined as oklch tokens in `src/styles.css`. Fonts load through `<link>` in `__root.tsx`.
- No backend is needed; the site is fully static.
- **Stack:** React 19, TanStack Start/Router, Vite, Tailwind CSS v4 and shadcn/ui.
- **GitHub Pages hosting:** turn on static prerendering in `vite.config.ts` so every route is written out as an HTML file. Add a 404 page that works without a server. Make the base path configurable, since a project page lives under `/<repo>/` and a user page at `username.github.io` lives at `/`.
- Add `.github/workflows/deploy.yml` to build with bun on every push to main and publish the output with `actions/deploy-pages`.
- Prerendering needs `@lovable.dev/vite-tanstack-config` 2.20.0 or newer, so check the installed version. Set `autoStaticPathsDiscovery: false` and list all five routes in `pages`.
- **Free hosting:** GitHub Pages is free for public repositories.
