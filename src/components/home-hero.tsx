import { ArrowUpRight, Mail, MapPin } from 'lucide-react'

import { contactMethods, profile } from '@/data/resume'

const heroActions = contactMethods.filter((method) =>
  ['linkedin', 'github', 'email'].includes(method.kind),
)

export function HomeHero() {
  return (
    <section aria-labelledby="home-title" className="home-hero motion-enter">
      <p className="terminal-line">&gt; building agentic systems_</p>
      <h1 id="home-title">{profile.name}</h1>
      <p className="hero-title">{profile.title}</p>
      <p className="hero-summary">{profile.summary}</p>
      <p className="hero-location">
        <MapPin aria-hidden="true" />
        <span>{profile.location}</span>
      </p>
      <div aria-label="Contact and professional profiles" className="hero-actions">
        {heroActions.map((method) => {
          const Icon = method.kind === 'email' ? Mail : ArrowUpRight
          const external = method.kind !== 'email'

          return (
            <a
              className="action-link"
              href={method.href}
              key={method.kind}
              rel={external ? 'noreferrer' : undefined}
              target={external ? '_blank' : undefined}
            >
              <Icon aria-hidden="true" />
              <span>{method.label}</span>
            </a>
          )
        })}
      </div>
    </section>
  )
}
