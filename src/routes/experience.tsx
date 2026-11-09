import { createFileRoute } from '@tanstack/react-router'

import { pageMetadata } from '@/data/resume'
import { ExperienceTimeline } from '@/components/experience-timeline'

export const Route = createFileRoute('/experience')({
  head: () => ({
    meta: [
      { title: pageMetadata.experience.title },
      { name: 'description', content: pageMetadata.experience.description },
      { property: 'og:title', content: pageMetadata.experience.socialPreview.title },
      {
        property: 'og:description',
        content: pageMetadata.experience.socialPreview.description,
      },
      { property: 'og:type', content: 'website' },
    ],
  }),
  component: ExperiencePage,
})

function ExperiencePage() {
  return (
    <section aria-labelledby="page-title" className="experience-page">
      <div className="page-intro">
        <p className="eyebrow">01 / EXPERIENCE</p>
        <h1 id="page-title">Sixteen years of shipping.</h1>
        <p>Enterprise systems for regulators, governments, insurers, and multinational teams.</p>
      </div>
      <ExperienceTimeline />
    </section>
  )
}
