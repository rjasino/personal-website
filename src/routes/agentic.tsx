import { createFileRoute } from '@tanstack/react-router'

import { pageMetadata } from '@/data/resume'

export const Route = createFileRoute('/agentic')({
  head: () => ({
    meta: [
      { title: pageMetadata.agentic.title },
      { name: 'description', content: pageMetadata.agentic.description },
      { property: 'og:title', content: pageMetadata.agentic.socialPreview.title },
      {
        property: 'og:description',
        content: pageMetadata.agentic.socialPreview.description,
      },
      { property: 'og:type', content: 'website' },
    ],
  }),
  component: AgenticPage,
})

function AgenticPage() {
  return (
    <section className="route-stub" aria-labelledby="page-title">
      <p className="eyebrow">03 / AI &amp; TEACHING</p>
      <h1 id="page-title">Agentic Systems Design.</h1>
    </section>
  )
}
