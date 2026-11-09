import { createFileRoute } from '@tanstack/react-router'

import { pageMetadata } from '@/data/resume'
import { HomeHero } from '@/components/home-hero'
import { HomeHighlights } from '@/components/home-highlights'

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
    <>
      <HomeHero />
      <HomeHighlights />
    </>
  )
}
