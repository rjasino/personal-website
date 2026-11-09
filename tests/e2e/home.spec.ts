import { expect, test } from '@playwright/test'

test.describe('home page', () => {
  test('shows verified profile, highlights, featured work, and page metadata', async ({
    page,
  }) => {
    await page.goto('/')

    const main = page.getByRole('main')
    await expect(main.getByRole('heading', { level: 1, name: 'Roberto Jacinto Asino' })).toBeVisible()
    await expect(main.getByText('Senior Full-Stack Software Engineer', { exact: false })).toBeVisible()
    await expect(main.getByText('Quezon City, Philippines')).toBeVisible()
    await expect(main.getByText('> building agentic systems_', { exact: true })).toBeVisible()

    for (const [value, label] of [
      ['16+', 'Years of experience'],
      ['4', 'Industries'],
      ['60', 'Students per term'],
      ['ASD', 'Framework'],
    ]) {
      const stat = main.getByRole('group', { name: label })
      await expect(stat).toContainText(value)
    }

    await expect(main.getByRole('heading', { name: 'Agentic Systems Design (ASD)' })).toBeVisible()
    const currentRoles = main.getByTestId('current-role')
    await expect(currentRoles).toHaveCount(2)
    await expect(currentRoles.nth(0)).toContainText('Senior Full Stack Developer')
    await expect(currentRoles.nth(1)).toContainText('College Instructor (Part-Time)')

    for (const [label, href] of [
      ['LinkedIn', 'https://www.linkedin.com/in/rjasino/'],
      ['GitHub', 'https://github.com/rjasino'],
      ['Email', 'mailto:rjasino@live.com'],
    ]) {
      await expect(main.getByRole('link', { name: new RegExp(label, 'i') })).toHaveAttribute('href', href)
    }

    await expect(page).toHaveTitle(/Roberto Asino — Senior Full-Stack Engineer/)
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      'content',
      /Meet Roberto Jacinto Asino/,
    )
  })

  test('provides the shared navigation, theme control, footer, and persists the selected theme', async ({
    page,
  }) => {
    await page.goto('/')

    const navigation = page.getByRole('navigation', { name: 'Main navigation' })
    await expect(navigation.getByRole('link')).toHaveCount(5)
    await expect(navigation.getByRole('link', { name: 'AI & Teaching' })).toHaveAttribute('href', '/agentic')
    await expect(page.getByRole('navigation', { name: 'Social links' }).getByRole('link')).toHaveCount(4)

    await page.getByRole('button', { name: 'Toggle dark and light appearance' }).click()
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
    await navigation.getByRole('link', { name: 'Experience' }).click()
    await expect(page).toHaveURL(/\/experience$/)
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
  })

  test('respects reduced motion and excludes private or unsupported profile content', async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await page.goto('/')

    await expect(page.locator('.motion-enter').first()).toHaveCSS('animation-duration', '1e-05s')
    await expect(page.getByText('+63 916-237-0611')).toHaveCount(0)
    await expect(page.getByRole('link', { name: /resume|curriculum vitae/i })).toHaveCount(0)
    await expect(page.getByRole('heading', { name: 'Education' })).toHaveCount(0)
    await expect(page.getByText(/character references/i)).toHaveCount(0)

    await page.setViewportSize({ width: 320, height: 780 })
    await expect
      .poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth))
      .toBe(true)
  })
})
