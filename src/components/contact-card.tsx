import { Copy, Github, Linkedin, Mail, Youtube } from 'lucide-react'

import type { ContactMethod } from '@/data/resume'

const icons = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
  youtube: Youtube,
}

interface ContactCardProps {
  method: ContactMethod
}

export function ContactCard({ method }: ContactCardProps) {
  const Icon = icons[method.kind]

  return (
    <article
      aria-label={`${method.label} contact method`}
      className="contact-card"
      data-contact-kind={method.kind}
      data-contact-card=""
      role="article"
    >
      <Icon aria-hidden="true" className="contact-icon" />
      <div className="contact-card-content">
        <h2>{method.label}</h2>
        <a
          aria-label={method.accessibleLabel}
          className="contact-value-link"
          href={method.href}
          rel={method.kind === 'email' ? undefined : 'noreferrer'}
          target={method.kind === 'email' ? undefined : '_blank'}
        >
          <span className="contact-value">{method.value}</span>
        </a>
        <p
          aria-live="polite"
          className="copy-feedback"
          data-copy-status=""
          role="status"
          suppressHydrationWarning
        />
      </div>
      <button
        aria-label={`Copy ${method.label}`}
        className="copy-button"
        data-copy-value={method.value}
        type="button"
      >
        <Copy aria-hidden="true" />
      </button>
    </article>
  )
}
