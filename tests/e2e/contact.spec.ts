import { expect, test } from '@playwright/test'

const contactCards = [
  {
    label: 'Email',
    value: 'rjasino@live.com',
    href: 'mailto:rjasino@live.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/rjasino',
    href: 'https://www.linkedin.com/in/rjasino/',
  },
  {
    label: 'GitHub',
    value: 'github.com/rjasino',
    href: 'https://github.com/rjasino',
  },
  {
    label: 'YouTube',
    value: '@AgenticDeveloperPH2',
    href: 'https://www.youtube.com/@AgenticDeveloperPH2',
  },
]

test.describe('contact page', () => {
  test('shows four verified, copyable contact cards with their real destinations', async ({
    page,
    context,
  }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write'])
    await page.goto('/contact')

    for (const { label, value, href } of contactCards) {
      const card = page.getByRole('article', { name: `${label} contact method` })
      await expect(card).toBeVisible()
      const link = card.getByRole('link')
      await expect(link).toHaveAttribute('href', href)
      await expect(link).toHaveAccessibleName(/.+/)
      await expect(card.getByText(value, { exact: true })).toBeVisible()
      await card.getByRole('button', { name: `Copy ${label}` }).click()
      await expect(card.getByRole('status')).toHaveText(`Copied ${value} to clipboard.`)
      await expect
        .poll(() => page.evaluate(() => navigator.clipboard.readText()))
        .toBe(value)
    }

    await expect(page).toHaveTitle(/Contact — Roberto Asino/)
  })

  test('keeps copy text selectable and gives a manual fallback when clipboard is denied', async ({
    page,
  }) => {
    await page.addInitScript(() => {
      Object.defineProperty(navigator, 'clipboard', {
        configurable: true,
        value: {
          writeText: () => Promise.reject(new DOMException('Clipboard denied', 'NotAllowedError')),
        },
      })
    })
    await page.goto('/contact')

    const card = page.getByRole('article', { name: 'Email contact method' })
    const value = card.getByText('rjasino@live.com', { exact: true })
    await card.getByRole('button', { name: 'Copy Email' }).click()
    await expect(card.getByRole('status')).toContainText('Select and copy the value manually')
    await expect(value).toBeVisible()
    await expect(value).toHaveCSS('user-select', 'text')
  })
})
