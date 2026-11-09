import { createFileRoute } from '@tanstack/react-router'

import { pageMetadata } from '@/data/resume'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: pageMetadata.contact.title },
      { name: 'description', content: pageMetadata.contact.description },
      { property: 'og:title', content: pageMetadata.contact.socialPreview.title },
      {
        property: 'og:description',
        content: pageMetadata.contact.socialPreview.description,
      },
      { property: 'og:type', content: 'website' },
    ],
  }),
  component: ContactPage,
})

function ContactPage() {
  return (
    <section className="route-stub" aria-labelledby="page-title">
      <p className="eyebrow">05 / CONTACT</p>
      <h1 id="page-title">Let’s build something.</h1>
    </section>
  )
}
