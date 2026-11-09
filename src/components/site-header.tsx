import { Link } from '@tanstack/react-router'

import { ThemeToggle } from '@/components/theme-toggle'

const navigation = [
  { label: 'Home', to: '/' as const },
  { label: 'Experience', to: '/experience' as const },
  { label: 'Skills', to: '/skills' as const },
  { label: 'AI & Teaching', to: '/agentic' as const },
  { label: 'Contact', to: '/contact' as const },
]

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link aria-label="Roberto Asino home" className="site-brand" to="/">
          <span aria-hidden="true" className="brand-signal">
            ~
          </span>
          /rjasino
        </Link>
        <nav aria-label="Main navigation" className="site-navigation">
          {navigation.map(({ label, to }) => (
            <Link
              activeProps={{ className: 'is-active' }}
              className="nav-link"
              key={to}
              to={to}
            >
              {label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
