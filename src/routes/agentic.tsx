import { createFileRoute } from '@tanstack/react-router'

import { AsdLayers } from '@/components/asd-layers'
import { TeachingItems } from '@/components/teaching-items'
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
    <div className="agentic-page motion-enter">
      <header className="page-intro">
        <p className="eyebrow">03 / AI &amp; TEACHING</p>
        <h1 id="page-title">Agentic Systems Design.</h1>
        <p>
          ASD moves work from a human-executed map to a specified contract, then
          to an agent-executed process: AWD → SDD → APA.
        </p>
      </header>
      <AsdLayers />
      <TeachingItems />
    </div>
  )
}
