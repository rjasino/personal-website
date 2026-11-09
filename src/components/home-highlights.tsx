import { ArrowUpRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'

import {
  asdFramework,
  experiences,
  profile,
} from '@/data/resume'

const statistics = [
  { label: 'Years of experience', value: profile.highlights.yearsExperience },
  { label: 'Industries', value: profile.highlights.industries },
  { label: 'Students per term', value: profile.highlights.studentsPerTerm },
  { label: 'Framework', value: profile.highlights.framework },
]

const currentRoles = experiences.filter((role) => role.current)

export function HomeHighlights() {
  return (
    <div className="home-highlights motion-enter">
      <section aria-label="Profile highlights" className="stat-grid">
        {statistics.map(({ label, value }) => (
          <div aria-label={label} className="stat-card" key={label} role="group">
            <span className="stat-value">{value}</span>
            <span className="stat-label">{label}</span>
          </div>
        ))}
      </section>

      <div className="home-feature-grid">
        <section aria-labelledby="asd-preview-title" className="feature-panel">
          <p className="eyebrow">Framework preview</p>
          <h2 id="asd-preview-title">{asdFramework.name}</h2>
          <p>
            A framework created to formalize how software gets delivered with AI
            agents, applied to engineering work and teaching.
          </p>
            <ul className="asd-layer-preview-list">
              {asdFramework.layers.map((layer) => (
                <li key={layer.id}>
                  <span className="asd-layer-number">{layer.abbreviation}</span>
                  <span>{layer.name}</span>
                </li>
              ))}
          </ul>
          <Link className="text-link" to="/agentic">
            Explore the framework <ArrowUpRight aria-hidden="true" />
          </Link>
        </section>

        <section aria-labelledby="current-work-title" className="feature-panel">
          <div className="section-title-row">
            <div>
              <p className="eyebrow">Current work</p>
              <h2 id="current-work-title">Where I contribute now.</h2>
            </div>
            <Link aria-label="View all experience" className="icon-link" to="/experience">
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <div className="current-role-list">
            {currentRoles.map((role) => (
              <article className="current-role" data-testid="current-role" key={role.id}>
                <p className="role-date">{role.dateLabel}</p>
                <h3>{role.title}</h3>
                <p>{role.company}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
