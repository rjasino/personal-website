import type { SkillCategory as SkillCategoryRecord } from '@/data/resume'

interface SkillCategoryProps {
  category: SkillCategoryRecord
}

function SkillRow({ name, experienceLabel, minimumYears }: SkillCategoryRecord['skills'][number]) {
  const barWidth = minimumYears === undefined ? undefined : `${Math.min((minimumYears / 16) * 100, 100)}%`

  return (
    <div className="skill-row" data-skill-name={name} data-testid="skill-row">
      <div className="skill-row-heading">
        <span className="skill-name">{name}</span>
        {experienceLabel && (
          <span className="skill-duration" data-testid="skill-duration">
            {experienceLabel}
          </span>
        )}
      </div>
      {barWidth && (
        <span aria-hidden="true" className="skill-bar-track">
          <span className="skill-bar-fill" style={{ width: barWidth }} />
        </span>
      )}
    </div>
  )
}

export function SkillCategory({ category }: SkillCategoryProps) {
  const headingId = `skill-category-${category.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')}`

  return (
    <section aria-labelledby={headingId} className="skill-category">
      <h2 id={headingId}>{category.name}</h2>
      <div className="skill-list">
        {category.skills.map((skill) => (
          <SkillRow key={skill.name} {...skill} />
        ))}
      </div>
    </section>
  )
}
