import { teachingAndLearningItems } from '@/data/resume'

const itemLabels = {
  instructor: 'Teaching role',
  training: 'Professional training',
  channel: 'Video channel',
  certificate: 'Certificate',
} as const

export function TeachingItems() {
  return (
    <section aria-labelledby="teaching-items-title" className="teaching-section">
      <p className="eyebrow">Teaching and learning</p>
      <h2 id="teaching-items-title">Teaching, training &amp; credentials.</h2>

      <div className="teaching-grid">
        {teachingAndLearningItems.map((item) => (
          <article className="teaching-item" data-teaching-kind={item.kind} key={item.title}>
            <p className="teaching-kind">{itemLabels[item.kind]}</p>
            <h3>
              {item.url ? (
                <a href={item.url} rel="noreferrer" target="_blank">
                  {item.title}
                </a>
              ) : (
                item.title
              )}
            </h3>
            {item.organization && (
              <p className="teaching-organization">{item.organization}</p>
            )}
            {item.dateLabel && <p className="role-date">{item.dateLabel}</p>}
            {item.description && <p className="teaching-description">{item.description}</p>}
          </article>
        ))}
      </div>
    </section>
  )
}
