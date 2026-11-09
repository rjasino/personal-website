import { expect, test } from '@playwright/test'

const requiredCategories = [
  'Languages',
  'Backend',
  'Front-End',
  'Databases',
  'Cloud & DevOps',
  'Testing',
  'Practices',
]

const verifiedDurations = [
  ['C#', '15 yrs'],
  ['JavaScript', '16 yrs'],
  ['HTML / CSS', '16 yrs'],
  ['TypeScript', '3 yrs'],
  ['Java', '3 yrs, 2020–2024'],
  ['ASP.NET MVC / Web API', '6 yrs'],
  ['Entity Framework', '5 yrs'],
  ['Node.js', '1+ yr'],
  ['Express', '1 yr'],
  ['Laravel', '1+ yr'],
  ['React', '3 yrs'],
  ['Angular', '3 yrs, 2020–2024'],
  ['Next.js', '1 yr'],
  ['Bootstrap', '5 yrs'],
  ['TailwindCSS', '1 yr'],
  ['SQL Server', '15 yrs'],
  ['SSRS', '3+ yrs'],
  ['Oracle', '3 yrs, 2020–2024'],
  ['SQLite', '5 yrs'],
  ['PostgreSQL', '2 yrs'],
  ['MongoDB', '1 yr'],
  ['Prisma', '2 yrs'],
  ['Microsoft Azure', '4 yrs'],
  ['Azure DevOps', '5 yrs'],
  ['Azure Pipelines', '2 yrs'],
  ['Azure Function Apps', '2 yrs'],
  ['Azure Logic Apps', '2 yrs'],
  ['Docker', '2 yrs'],
  ['Podman', '1 yr'],
  ['Postman', '10 yrs'],
  ['Git', '7 yrs'],
  ['SVN', '5 yrs'],
  ['NUnit', '2 yrs'],
  ['xUnit', '1 yr'],
  ['Selenium .NET', '1 yr'],
  ['Swagger', '1 yr'],
]

const durationlessSkills = [
  'ACID',
  'GitHub Actions',
  'SOLID',
  'OOP',
  'Agile / Scrum',
  'REST API Design',
  'GraphQL',
  'UML / System Modeling',
  'CI/CD',
  'Spec-Driven Development',
]

test('shows all skill categories, source-only duration indicators, and agentic engineering skills', async ({
  page,
}) => {
  await page.goto('/skills')
  const main = page.getByRole('main')

  await expect(main.getByRole('heading', { level: 1, name: 'The toolkit.' })).toBeVisible()
  for (const category of requiredCategories) {
    await expect(main.getByRole('heading', { level: 2, name: category })).toBeVisible()
  }

  for (const [name, duration] of verifiedDurations) {
    const row = main.locator(`[data-skill-name=${JSON.stringify(name)}]`)
    await expect(row, `${name} should be visible`).toBeVisible()
    await expect(row.getByTestId('skill-duration'), `${name} should show its source duration`).toHaveText(duration)
    await expect(row.locator('.skill-bar-fill'), `${name} should have a duration indicator`).toBeVisible()
  }

  for (const undated of durationlessSkills) {
    const row = main.locator(`[data-skill-name=${JSON.stringify(undated)}]`)
    await expect(row).toBeVisible()
    await expect(row.getByTestId('skill-duration')).toHaveCount(0)
    await expect(row.locator('.skill-bar-fill')).toHaveCount(0)
  }

  const agenticPanel = main.getByRole('region', { name: 'AI & Agentic Engineering' })
  await expect(agenticPanel).toBeVisible()
  for (const term of ['Claude Code', 'OpenCode', 'GitHub Copilot', 'ASD', 'GitHub Spec Kit', 'DeepSeek']) {
    await expect(agenticPanel.getByText(new RegExp(term, 'i'))).toBeVisible()
  }
})
