import { createFileRoute } from '@tanstack/react-router'

import { pageMetadata } from '@/data/resume'
import { contactMethods } from '@/data/resume'
import { ContactCard } from '@/components/contact-card'

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
    <section aria-labelledby="page-title" className="contact-page">
      <div className="page-intro">
        <p className="eyebrow">05 / CONTACT</p>
        <h1 id="page-title">Let’s build something.</h1>
        <p>Reach me through any of these verified public contact and social links.</p>
      </div>
      <div aria-label="Contact methods" className="contact-grid">
        {contactMethods.map((method) => (
          <ContactCard key={method.kind} method={method} />
        ))}
      </div>
    </section>
  )
}
