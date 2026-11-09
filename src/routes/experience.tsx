import { createFileRoute } from '@tanstack/react-router'

import { pageMetadata } from '@/data/resume'

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
    <section className="route-stub" aria-labelledby="page-title">
      <p className="eyebrow">01 / EXPERIENCE</p>
      <h1 id="page-title">Sixteen years of shipping.</h1>
    </section>
  )
}
