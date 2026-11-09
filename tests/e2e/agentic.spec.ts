import { expect, test } from '@playwright/test'

const layers = [
  {
    id: 'awd',
    name: 'Agentic Workflow Design',
    abbreviation: 'AWD',
    requiredTerms: ['trigger', 'branch', 'handoff', 'terminal state'],
  },
  {
    id: 'sdd',
    name: 'Spec-Driven Development',
    abbreviation: 'SDD',
    requiredTerms: [
      'input',
      'output',
      'constraint',
      'acceptance criteria',
      'rejection conditions',
    ],
  },
  {
    id: 'apa',
    name: 'Agentic Process Automation',
    abbreviation: 'APA',
    requiredTerms: ['end-to-end', 'specification', 'self-correct', 'human'],
  },
]

test('explains the three ASD layers in order and presents verified teaching items', async ({
  page,
}) => {
  await page.goto('/agentic')
  const main = page.getByRole('main')

  await expect(main.getByRole('heading', { level: 1, name: /Agentic Systems Design/i })).toBeVisible()
  await expect(main.getByText('AWD → SDD → APA', { exact: true })).toBeVisible()

  const layerCards = main.locator('[data-asd-layer]')
  await expect(layerCards).toHaveCount(3)

  for (const [index, layer] of layers.entries()) {
    const card = layerCards.nth(index)
    await expect(card).toHaveAttribute('data-asd-layer', layer.id)
    await expect(card.getByRole('heading', { name: layer.name })).toBeVisible()
    await expect(card.locator('.asd-layer-label')).toContainText(layer.abbreviation)

    const description = (await card.innerText()).toLowerCase()
    for (const term of layer.requiredTerms) {
      expect(description, `${layer.abbreviation} description should mention ${term}`).toContain(term)
    }
  }

  await expect(main.getByText(/Harness Engineering/i)).toHaveCount(0)
  await expect(main.getByRole('heading', { name: /College Instructor/ })).toBeVisible()
  await expect(main.getByText('AFP Finance Team Training')).toBeVisible()
  await expect(
    main.getByText(
      'AI Foundation • Applied AI Foundation • Agent and Workflow • Path Completion 2026',
    ),
  ).toBeVisible()

  await expect(
    main.getByRole('link', { name: /Agentic Developer PH/i }),
  ).toHaveAttribute('href', 'https://www.youtube.com/@AgenticDeveloperPH2')
  await expect(page).toHaveTitle(/AI & Teaching — Roberto Asino/)

  await page.setViewportSize({ width: 320, height: 780 })
  await expect
    .poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth))
    .toBe(true)
})
