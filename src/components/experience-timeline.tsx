import type { ExperienceRole } from '@/data/resume'
import { experiences } from '@/data/resume'

const currentRoles = experiences.filter((role) => role.current)
const completedRoles = experiences.filter((role) => !role.current && !role.group)
const earlierExperience = experiences.find((role) => role.group)
const orderedRoles = [...currentRoles, ...completedRoles]

function RoleDetails({ role }: { role: ExperienceRole }) {
  return (
    <article className="timeline-role">
      <p className="role-date">{role.dateLabel}</p>
      <h2>{role.title}</h2>
      <p className="role-company">{role.company}</p>
      {role.achievements.length > 0 && (
        <ul className="achievement-list">
          {role.achievements.map((achievement) => (
            <li key={achievement}>{achievement}</li>
          ))}
        </ul>
      )}
      {role.technologies.length > 0 && (
        <ul aria-label={`${role.title} technologies`} className="technology-list">
          {role.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      )}
    </article>
  )
}

export function ExperienceTimeline() {
  return (
    <ol aria-label="Professional experience" className="experience-timeline">
      {orderedRoles.map((role) => (
        <li className="timeline-entry" data-testid="experience-entry" key={role.id}>
          <RoleDetails role={role} />
        </li>
      ))}
      {earlierExperience?.group && (
        <li
          className="timeline-entry"
          data-testid="experience-entry"
          key={earlierExperience.id}
        >
          <article className="timeline-role">
            <p className="role-date">{earlierExperience.dateLabel}</p>
            <h2>{earlierExperience.title}</h2>
            <details
              className="earlier-experience"
              data-testid="earlier-experience"
              {...(!earlierExperience.group.initiallyCollapsed ? { open: true } : {})}
            >
              <summary>{earlierExperience.group.label}</summary>
              <div className="earlier-role-list">
                {earlierExperience.group.roles.map((role) => (
                  <article className="earlier-role" key={role.id}>
                    <p className="role-date">{role.dateLabel}</p>
                    <h3>{role.title}</h3>
                    <p className="role-company">{role.company}</p>
                    <ul className="achievement-list">
                      {role.achievements.map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                    {role.technologies.length > 0 && (
                      <ul aria-label={`${role.title} technologies`} className="technology-list">
                        {role.technologies.map((technology) => (
                          <li key={technology}>{technology}</li>
                        ))}
                      </ul>
                    )}
                  </article>
                ))}
              </div>
            </details>
          </article>
        </li>
      )}
    </ol>
  )
}
