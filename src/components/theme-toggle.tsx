import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  return (
    <button
      aria-label="Toggle dark and light appearance"
      aria-pressed={false}
      className="theme-toggle"
      data-theme-toggle=""
      type="button"
    >
      <Sun aria-hidden="true" className="theme-icon-dark" />
      <Moon aria-hidden="true" className="theme-icon-light" />
    </button>
  )
}
