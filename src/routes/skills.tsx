import { createFileRoute } from '@tanstack/react-router'

import { pageMetadata } from '@/data/resume'

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
    <section className="route-stub" aria-labelledby="page-title">
      <p className="eyebrow">02 / SKILLS</p>
      <h1 id="page-title">The toolkit.</h1>
    </section>
  )
}
