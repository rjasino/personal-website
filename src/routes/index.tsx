import { createFileRoute } from '@tanstack/react-router'

import { pageMetadata } from '@/data/resume'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: pageMetadata.home.title },
      { name: 'description', content: pageMetadata.home.description },
      { property: 'og:title', content: pageMetadata.home.socialPreview.title },
      {
        property: 'og:description',
        content: pageMetadata.home.socialPreview.description,
      },
      { property: 'og:type', content: 'website' },
    ],
  }),
  component: HomePage,
})

function HomePage() {
  return (
    <section className="route-stub" aria-labelledby="page-title">
      <p className="eyebrow">00 / HOME</p>
      <h1 id="page-title">Roberto Jacinto Asino</h1>
    </section>
  )
}
