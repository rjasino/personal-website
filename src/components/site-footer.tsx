import { contactMethods } from '@/data/resume'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>© Roberto Jacinto Asino</span>
      <nav aria-label="Social links" className="footer-links">
        {contactMethods.map((method) => (
          <a
            href={method.href}
            key={method.kind}
            rel={method.kind === 'email' ? undefined : 'noreferrer'}
            target={method.kind === 'email' ? undefined : '_blank'}
          >
            {method.label}
          </a>
        ))}
      </nav>
    </footer>
  )
}
