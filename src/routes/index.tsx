import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const subject = `New enquiry from ${name || 'the website'}`
    const body = `${message}\n\n— ${name}\n${email}`
    window.location.href = `mailto:hello@grassrootsgm.org?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`

    setSent(true)
  }

  return (
    <main className="site-shell">
      <div className="grain" aria-hidden="true" />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <MapPin size={15} strokeWidth={1.8} aria-hidden="true" />
            Rooted in Greater Manchester
          </p>
          <h1>
            Website <em>coming soon.</em>
          </h1>
          <p className="intro">
            We bring people, ideas, and local action together to help Greater
            Manchester&apos;s communities flourish from the ground up.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#contact">
              Let&apos;s talk
              <ArrowDown size={19} strokeWidth={1.8} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="logo-stage" aria-label="Grass Roots Greater Manchester">
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <figure className="logo-card">
            <span className="logo-label">Est. in the community</span>
            <img
              src="/assets/grass-roots-greater-manchester-logo.jpg"
              alt="Grass Roots Greater Manchester logo"
            />
          </figure>
          <div className="location-note" aria-hidden="true">
            <span>53.4808° N</span>
            <span>2.2426° W</span>
          </div>
        </div>
      </section>

      <section className="about-strip" id="contact">
        <p className="section-number">01 — Get in touch</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>

          <button type="submit" className="primary-button form-submit">
            Send message
            <ArrowUpRight size={19} strokeWidth={1.8} aria-hidden="true" />
          </button>

          {sent && (
            <p className="form-note" role="status">
              Thanks — your email app should now be open to send your message.
            </p>
          )}
        </form>
      </section>

      <footer>
        <span>Grass Roots Greater Manchester</span>
       
      </footer>
    </main>
  )
}
