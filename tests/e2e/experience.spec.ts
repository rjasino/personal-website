import { expect, test } from '@playwright/test'

test('shows résumé-ordered current engagements, newest-first completed roles, and collapsed earlier experience', async ({
  page,
}) => {
  await page.goto('/experience')
  const main = page.getByRole('main')

  await expect(main.getByRole('heading', { level: 1, name: 'Sixteen years of shipping.' })).toBeVisible()
  const entries = main.getByTestId('experience-entry')
  await expect(entries).toHaveCount(8)
  await expect(entries.nth(0)).toContainText('Senior Full Stack Developer')
  await expect(entries.nth(1)).toContainText('College Instructor (Part-Time)')
  await expect(entries.nth(2)).toContainText('Solutions Developer')
  await expect(entries.nth(3)).toContainText('.NET Developer')
  await expect(entries.nth(4)).toContainText('Web Developer')
  await expect(entries.nth(5)).toContainText('Business Application Developer')
  await expect(entries.nth(6)).toContainText('.NET Programmer')
  await expect(entries.nth(7)).toContainText('Earlier Experience')

  await expect(entries.nth(0)).toContainText('July 2024 – Present')
  await expect(entries.nth(0)).toContainText('Full Scale Teams PH')
  await expect(entries.nth(0)).toContainText('Azure Function Apps')
  await expect(entries.nth(0)).toContainText('financial integration API')
  await expect(entries.nth(2)).toContainText('November 2020 – June 2024')
  await expect(entries.nth(2)).toContainText('PCCW Solutions Inc.')
  await expect(entries.nth(2)).toContainText('.NET Selenium')
  await expect(entries.nth(2)).toContainText('Securities and Futures Commission')

  const earlier = main.locator('details[data-testid="earlier-experience"]')
  await expect(earlier).toBeVisible()
  await expect(earlier).not.toHaveAttribute('open', '')
  await expect(earlier.getByText('Web Developer', { exact: true })).not.toBeVisible()
  await earlier.locator('summary').click()
  await expect(earlier.getByText('Web Developer', { exact: true })).toBeVisible()
  await expect(earlier.getByText('Programmer', { exact: true })).toBeVisible()
  await expect(earlier.getByText('Umbraco', { exact: true })).toBeVisible()
  await expect(earlier).toHaveAttribute('open', '')
})
