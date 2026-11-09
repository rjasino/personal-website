import { createFileRoute } from '@tanstack/react-router'

import { pageMetadata } from '@/data/resume'
import { AiAgenticPanel } from '@/components/ai-agentic-panel'
import { SkillCategory } from '@/components/skill-category'
import { skillCategories } from '@/data/resume'

export const Route = createFileRoute('/skills')({
  head: () => ({
    meta: [
      { title: pageMetadata.skills.title },
      { name: 'description', content: pageMetadata.skills.description },
      { property: 'og:title', content: pageMetadata.skills.socialPreview.title },
      {
        property: 'og:description',
        content: pageMetadata.skills.socialPreview.description,
      },
      { property: 'og:type', content: 'website' },
    ],
  }),
  component: SkillsPage,
})

function SkillsPage() {
  return (
    <section aria-labelledby="page-title" className="skills-page motion-enter">
      <div className="page-intro">
        <p className="eyebrow">02 / SKILLS</p>
        <h1 id="page-title">The toolkit.</h1>
        <p>Bars show documented years of experience; unverified durations stay text-only.</p>
      </div>
      <div aria-label="Skill categories" className="skill-category-grid">
        {skillCategories.map((category) => (
          <SkillCategory category={category} key={category.name} />
        ))}
      </div>
      <AiAgenticPanel />
    </section>
  )
}
