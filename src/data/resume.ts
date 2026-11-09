export interface Profile {
  name: string
  title: string
  summary: string
  location: string
  contactMethods: ContactKind[]
  highlights: {
    yearsExperience: string
    industries: string
    studentsPerTerm: string
    framework: string
  }
}

export interface ExperienceRole {
  id: string
  title: string
  company: string
  /** Month precision is YYYY-MM; year-only source dates remain YYYY. */
  startDate: string
  endDate?: string
  dateLabel: string
  technologies: string[]
  achievements: string[]
  current?: boolean
  group?: {
    id: string
    label: string
    initiallyCollapsed: boolean
    roles: Array<{
      id: string
      title: string
      company: string
      startDate: string
          endDate: string
          dateLabel: string
          technologies: string[]
          achievements: string[]
    }>
  }
}

export type SkillCategoryName =
  | 'Languages'
  | 'Backend'
  | 'Front-End'
  | 'Databases'
  | 'Cloud & DevOps'
  | 'Testing'
  | 'Practices'

export interface Skill {
  name: string
  experienceLabel?: string
  minimumYears?: number
}

export interface SkillCategory {
  name: SkillCategoryName
  skills: Skill[]
}

export interface PageMetadata {
  path: string
  title: string
  description: string
  socialPreview: {
    title: string
    description: string
    image?: string
  }
}

export const profile: Profile = {
  name: 'Roberto Jacinto Asino',
  title:
    'Senior Full-Stack Software Engineer | .NET • Azure • React | Agentic AI Developer',
  summary:
    'Senior full-stack engineer with 16+ years delivering enterprise systems across financial services, government, insurance, and education. Deep .NET/C# and Azure expertise with modern React and Angular experience; builds and teaches agentic software-delivery workflows and created the Agentic Systems Design (ASD) framework.',
  location: 'Quezon City, Philippines',
  contactMethods: ['email', 'linkedin', 'github', 'youtube'],
  highlights: {
    yearsExperience: '16+',
    industries: '4',
    studentsPerTerm: '60',
    framework: 'ASD',
  },
}

/** Required source-validation language retained verbatim from the task plan. */
export const profileValidation = {
  name: "Required; use the owner's approved spelling",
  title: 'Required before publication; do not infer an unverified title',
  summary: 'Required; consistent with verified experience',
  location:
    'Required by the home page; do not add personal details beyond the approved value',
  highlights:
    'Match the supplied values: 16+, 4, 60 per term, and ASD.',
} as const

export const experienceValidation = {
  id: 'Unique within the role collection',
  titleAndCompany: 'Verified source only',
  datePrecision: 'Preserve résumé month/year precision',
  technologies: 'Verified technologies; no duplicate tags within a role',
  achievements: 'Use sourced facts; do not invent metrics',
  currentRoles: 'Use the supplied résumé order for concurrent Present roles',
  completedRoles: 'Newest-first ordering for completed roles',
  earlierGroup: 'The 2010–2012 group is initially collapsed',
} as const

export const experiences: ExperienceRole[] = [
  {
    id: 'full-scale-senior-full-stack-developer',
    title: 'Senior Full Stack Developer',
    company: 'Full Scale Teams PH',
    startDate: '2024-07',
    dateLabel: 'July 2024 – Present',
    current: true,
    technologies: [
      '.NET',
      'C#',
      'React',
      'MSSQL',
      'Azure Function Apps',
      'Azure Logic Apps',
      'Azure DevOps',
      'Azure Pipelines',
    ],
    achievements: [
      "Architected a financial integration API on Azure Function Apps and WebJobs, connecting the client's internal financial system to external third-party services.",
      'Built and continuously tuned Azure Logic Apps workflows automating business processes.',
      'Led full-stack development of a Treaty Management System using a .NET API and React SPA for real-time contract tracking.',
      'Reverse-engineered and modernized legacy systems into Azure-hosted, cloud-native architectures.',
      'Apply spec-driven, AI-assisted development with GitHub Copilot in day-to-day delivery.',
      'Collaborate in daily Agile stand-ups with cross-functional teams.',
    ],
  },
  {
    id: 'ciit-college-instructor',
    title: 'College Instructor (Part-Time)',
    company: 'CIIT College of Arts and Technology',
    startDate: '2025-05',
    dateLabel: 'May 2025 – Present',
    current: true,
    technologies: ['Laravel', 'MERN', 'MongoDB', 'Express', 'React', 'Node.js', 'Next.js'],
    achievements: [
      'Design and deliver full-stack web development modules and lesson plans covering requirements through deployment to 60 students per term.',
      'Introduced GitHub Copilot into the curriculum and developed teaching materials on agentic workflow design and spec-driven development.',
      'Advise capstone and thesis projects, including AI-driven systems, on software architecture, API design, and development practices.',
    ],
  },
  {
    id: 'pccw-solutions-developer',
    title: 'Solutions Developer',
    company: 'PCCW Solutions Inc. (Lenovo PCCW Solutions Inc.)',
    startDate: '2020-11',
    endDate: '2024-06',
    dateLabel: 'November 2020 – June 2024',
    technologies: ['.NET', 'C#', 'Java', 'Oracle', 'MSSQL', 'Angular', 'Azure DevOps', 'SSRS', '.NET Selenium'],
    achievements: [
      'Engineered core modules for the Securities and Futures Commission Information System for a Hong Kong statutory body.',
      'Developed the Urine Test Management Module and supporting documentation for the Hong Kong Correctional Services Department iCRMS.',
      'Built a Claim Information System for Cigna HK.',
      'Maintained and optimized SSRS processes behind daily SFC regulatory reports.',
      'Led QA test automation with .NET Selenium, building regression frameworks later used in other projects.',
    ],
  },
  {
    id: 'codebiz-dotnet-developer',
    title: '.NET Developer',
    company: 'Codebiz IT Solutions',
    startDate: '2020-02',
    endDate: '2020-10',
    dateLabel: 'February 2020 – October 2020',
    technologies: ['.NET', 'C#', 'JavaScript', 'jQuery', 'Bootstrap', 'SQL Server'],
    achievements: [
      'Developed Deduction and Adjustment modules with financial and audit reports for the Philippine National Police Pension Management System.',
      'Wrote a beneficiary-record migration script from the legacy system with zero data loss.',
    ],
  },
  {
    id: 'audition-magic-web-developer',
    title: 'Web Developer',
    company: 'Audition Magic',
    startDate: '2018-11',
    endDate: '2019-12',
    dateLabel: 'November 2018 – December 2019',
    technologies: ['React.js', 'Ruby on Rails', 'JavaScript', 'HTML / CSS', 'Linux'],
    achievements: [
      'Built an in-house web application from the ground up with a React.js front end and Ruby on Rails API, then maintained and extended it.',
    ],
  },
  {
    id: 'birches-group-business-application-developer',
    title: 'Business Application Developer',
    company: 'Birches Group LLC',
    startDate: '2017-02',
    endDate: '2018-12',
    dateLabel: 'February 2017 – December 2018',
    technologies: ['C#', '.NET Framework', 'ASP.NET MVC', 'Web API', 'Azure', 'WPF', 'jQuery', 'JavaScript', 'SQL Server'],
    achievements: [
      'Built Indigo, an in-house Survey Management System supporting global compensation surveys.',
      'Automated report generation and email distribution with SQL Server Jobs and DatabaseMail.',
      'Maintained client-access and subscription back-office tools and contributed to the public ASP.NET MVC website.',
    ],
  },
  {
    id: 'marine-benefits-dotnet-programmer',
    title: '.NET Programmer',
    company: 'Marine Benefits Assistance and Services Inc.',
    startDate: '2012-11',
    endDate: '2017-02',
    dateLabel: 'November 2012 – February 2017',
    technologies: ['C#', '.NET Framework', 'ASP.NET MVC', 'Web API', 'jQuery', 'JavaScript', 'SQL Server', 'RDLC Reports'],
    achievements: [
      'Developed and maintained Gjenesis, an Insurance Management System covering policy management, claims, and member benefits.',
      'Engineered Arbiter, a proprietary data access layer standardizing database interactions across the application suite.',
      'Automated reporting and email distribution with SQL Server Jobs and DatabaseMail; built the public website backend.',
    ],
  },
  {
    id: 'earlier-experience-2010-2012',
    title: 'Earlier Experience',
    company: 'Multiple organizations',
    startDate: '2010',
    endDate: '2012',
    dateLabel: '2010 – 2012',
    technologies: [],
    achievements: [],
    group: {
      id: 'roles-2010-2012',
      label: 'Earlier experience · 2010–2012',
      initiallyCollapsed: true,
      roles: [
        {
          id: 'primover-web-developer',
          title: 'Web Developer',
          company: 'Primover Consultancy Services (Kimberly-Clark Philippines)',
          startDate: '2012-04',
          endDate: '2012-10',
          dateLabel: 'April–October 2012',
          technologies: ['Umbraco'],
          achievements: [
            'Built Umbraco consumer sites for Poise Malaysia and Huggies India and maintained a procurement intranet.',
          ],
        },
        {
          id: 'systems-software-programmer',
          title: 'Programmer',
          company: 'Systems and Software Consulting Group Inc.',
          startDate: '2010-04',
          endDate: '2012-04',
          dateLabel: 'April 2010–April 2012',
          technologies: [],
          achievements: [
            'Contributed to HRIS deployments at TIP, Vallacar Transit Inc., and PNU; authored SRS documents with use-case, ER, and activity diagrams.',
          ],
        },
      ],
    },
  },
]

export const skillsValidation = {
  categories:
    'Use the seven required categories (Languages, Backend, Front-End, Databases, Cloud & DevOps, Testing, Practices)',
  skillName: 'Require a non-empty skill name',
  durations: 'Preserve source duration labels; do not infer skill durations',
} as const

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: [
      { name: 'C#', experienceLabel: '15 yrs', minimumYears: 15 },
      { name: 'JavaScript', experienceLabel: '16 yrs', minimumYears: 16 },
      { name: 'HTML / CSS', experienceLabel: '16 yrs', minimumYears: 16 },
      { name: 'TypeScript', experienceLabel: '3 yrs', minimumYears: 3 },
      { name: 'Java', experienceLabel: '3 yrs, 2020–2024', minimumYears: 3 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'ASP.NET MVC / Web API', experienceLabel: '6 yrs', minimumYears: 6 },
      { name: 'Entity Framework', experienceLabel: '5 yrs', minimumYears: 5 },
      { name: 'Node.js', experienceLabel: '1+ yr', minimumYears: 1 },
      { name: 'Express', experienceLabel: '1 yr', minimumYears: 1 },
      { name: 'Laravel', experienceLabel: '1+ yr', minimumYears: 1 },
    ],
  },
  {
    name: 'Front-End',
    skills: [
      { name: 'React', experienceLabel: '3 yrs', minimumYears: 3 },
      { name: 'Angular', experienceLabel: '3 yrs, 2020–2024', minimumYears: 3 },
      { name: 'Next.js', experienceLabel: '1 yr', minimumYears: 1 },
      { name: 'Bootstrap', experienceLabel: '5 yrs', minimumYears: 5 },
      { name: 'TailwindCSS', experienceLabel: '1 yr', minimumYears: 1 },
    ],
  },
  {
    name: 'Databases',
    skills: [
      { name: 'SQL Server', experienceLabel: '15 yrs', minimumYears: 15 },
      { name: 'SSRS', experienceLabel: '3+ yrs', minimumYears: 3 },
      { name: 'Oracle', experienceLabel: '3 yrs, 2020–2024', minimumYears: 3 },
      { name: 'SQLite', experienceLabel: '5 yrs', minimumYears: 5 },
      { name: 'PostgreSQL', experienceLabel: '2 yrs', minimumYears: 2 },
      { name: 'MongoDB', experienceLabel: '1 yr', minimumYears: 1 },
      { name: 'Prisma', experienceLabel: '2 yrs', minimumYears: 2 },
      { name: 'ACID' },
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      { name: 'Microsoft Azure', experienceLabel: '4 yrs', minimumYears: 4 },
      { name: 'Azure DevOps', experienceLabel: '5 yrs', minimumYears: 5 },
      { name: 'Azure Pipelines', experienceLabel: '2 yrs', minimumYears: 2 },
      { name: 'Azure Function Apps', experienceLabel: '2 yrs', minimumYears: 2 },
      { name: 'Azure Logic Apps', experienceLabel: '2 yrs', minimumYears: 2 },
      { name: 'Docker', experienceLabel: '2 yrs', minimumYears: 2 },
      { name: 'Podman', experienceLabel: '1 yr', minimumYears: 1 },
      { name: 'GitHub Actions' },
    ],
  },
  {
    name: 'Testing',
    skills: [
      { name: 'Postman', experienceLabel: '10 yrs', minimumYears: 10 },
      { name: 'Git', experienceLabel: '7 yrs', minimumYears: 7 },
      { name: 'SVN', experienceLabel: '5 yrs', minimumYears: 5 },
      { name: 'NUnit', experienceLabel: '2 yrs', minimumYears: 2 },
      { name: 'xUnit', experienceLabel: '1 yr', minimumYears: 1 },
      { name: 'Selenium .NET', experienceLabel: '1 yr', minimumYears: 1 },
      { name: 'Swagger', experienceLabel: '1 yr', minimumYears: 1 },
    ],
  },
  {
    name: 'Practices',
    skills: [
      { name: 'SOLID' },
      { name: 'OOP' },
      { name: 'Agile / Scrum' },
      { name: 'REST API Design' },
      { name: 'GraphQL' },
      { name: 'UML / System Modeling' },
      { name: 'CI/CD' },
      { name: 'Spec-Driven Development' },
    ],
  },
]

export const aiAgenticEngineering = {
  tools: [
    'Claude Code (custom slash commands, CLAUDE.md / rules architecture, and MCP integration)',
    'OpenCode',
    'GitHub Copilot',
    'ChatGPT',
    'Gemini',
    'NotebookLM',
  ],
  methods: [
    'Agentic Systems Design (ASD)',
    'Repository-as-memory (AGENTS.md, ADRs, session logs)',
    'GitHub Spec Kit',
    'OpenSpec',
    'BMad',
  ],
  modelStrategy: [
    'Multi-provider model routing (Claude, Gemini, DeepSeek) for cost optimization',
    'Context-window management',
    'GitHub Actions / Docker CI/CD for AI-assisted projects',
  ],
}

export interface AsdPillar {
  name: string
  description?: string
  requiresOwnerApproval?: boolean
}

export const asdFramework = {
  name: 'Agentic Systems Design (ASD)',
  pillars: [
    {
      name: 'Agentic Workflow Design',
      description:
        'Structuring how humans and AI agents split, sequence, and review work across a delivery pipeline.',
    },
    {
      name: 'Spec-Driven Development',
      description:
        'Specs as the source of truth: agents implement against written requirements, not ad hoc prompts.',
    },
    {
      name: 'Agentic Process Automation',
      requiresOwnerApproval: true,
    },
    {
      name: 'Harness Engineering',
      requiresOwnerApproval: true,
    },
  ] satisfies AsdPillar[],
  approvalDependency:
    'Owner-approved descriptions for pillars 3 and 4 are required before completing the AI & Teaching story or production release.',
}

export type TeachingItemKind = 'instructor' | 'training' | 'channel' | 'certificate'

export interface TeachingItem {
  kind: TeachingItemKind
  title: string
  organization?: string
  description?: string
  dateLabel?: string
  url?: string
}

export const teachingAndLearningItems: TeachingItem[] = [
  {
    kind: 'instructor',
    title: 'College Instructor (Part-Time)',
    organization: 'CIIT College of Arts and Technology',
    description:
      'Teaches full-stack web development modules covering Laravel, MERN, and Next.js; advises capstone and thesis projects.',
    dateLabel: 'May 2025 – Present',
  },
  {
    kind: 'training',
    title: 'AFP Finance Team Training',
    description:
      'Delivered specialist web development training and produced a formal student assessment report.',
  },
  {
    kind: 'certificate',
    title: 'AI Foundation • Applied AI Foundation • Agent and Workflow • Path Completion 2026',
    organization: 'OpenAI Academy',
  },
  {
    kind: 'channel',
    title: 'Agentic Developer PH',
    organization: 'YouTube',
    description: 'Teaches agentic workflow practices to Filipino developers.',
    url: 'https://www.youtube.com/@AgenticDeveloperPH2',
  },
]

export type ContactKind = 'email' | 'linkedin' | 'github' | 'youtube'

export interface ContactMethod {
  kind: ContactKind
  label: string
  value: string
  href: string
  accessibleLabel: string
}

export const contactMethods: ContactMethod[] = [
  {
    kind: 'email',
    label: 'Email',
    value: 'rjasino@live.com',
    href: 'mailto:rjasino@live.com',
    accessibleLabel: 'Email Roberto at rjasino@live.com',
  },
  {
    kind: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/rjasino',
    href: 'https://www.linkedin.com/in/rjasino/',
    accessibleLabel: 'Visit Roberto’s LinkedIn profile',
  },
  {
    kind: 'github',
    label: 'GitHub',
    value: 'github.com/rjasino',
    href: 'https://github.com/rjasino',
    accessibleLabel: 'Visit Roberto’s GitHub profile',
  },
  {
    kind: 'youtube',
    label: 'YouTube',
    value: '@AgenticDeveloperPH2',
    href: 'https://www.youtube.com/@AgenticDeveloperPH2',
    accessibleLabel: 'Visit the Agentic Developer PH YouTube channel',
  },
]

export const pageMetadata = {
  home: {
    path: '/',
    title: 'Roberto Asino — Senior Full-Stack Engineer & Agentic AI Developer',
    description:
      'Meet Roberto Jacinto Asino: a senior full-stack software engineer building enterprise systems and agentic software-delivery workflows.',
    socialPreview: {
      title: 'Roberto Asino — Full-Stack Engineer & Agentic AI Developer',
      description:
        '16+ years in enterprise software, Azure, .NET, modern front ends, and agentic systems design.',
    },
  },
  experience: {
    path: '/experience',
    title: 'Experience — Roberto Asino',
    description:
      'Explore Roberto Asino’s verified software engineering and teaching experience, from current roles back to 2010.',
    socialPreview: {
      title: 'Experience — Roberto Asino',
      description:
        'A source-verified career timeline spanning enterprise software, cloud modernization, and teaching.',
    },
  },
  skills: {
    path: '/skills',
    title: 'Skills — Roberto Asino',
    description:
      'Browse Roberto Asino’s verified languages, backend, front-end, database, cloud, testing, and practice skills.',
    socialPreview: {
      title: 'Skills — Roberto Asino',
      description:
        'Documented experience across .NET, Azure, React, databases, testing, and agentic engineering.',
    },
  },
  agentic: {
    path: '/agentic',
    title: 'AI & Teaching — Roberto Asino',
    description:
      'Learn about Roberto Asino’s Agentic Systems Design framework, teaching, training, and AI learning.',
    socialPreview: {
      title: 'AI & Teaching — Roberto Asino',
      description:
        'Agentic Systems Design, software-delivery workflows, teaching, and professional learning.',
    },
  },
  contact: {
    path: '/contact',
    title: 'Contact — Roberto Asino',
    description:
      'Contact Roberto Asino by email, LinkedIn, GitHub, or the Agentic Developer PH YouTube channel.',
    socialPreview: {
      title: 'Contact — Roberto Asino',
      description:
        'Verified public email and profile links for professional contact and collaboration.',
    },
  },
} satisfies Record<string, PageMetadata>

export const pageMetadataRecords = Object.values(pageMetadata)
