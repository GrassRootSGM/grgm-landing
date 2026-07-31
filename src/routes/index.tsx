import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main className="site-shell">
      <div className="grain" aria-hidden="true" />

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Grass Roots home">
          <span className="wordmark-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>Grass Roots</span>
        </a>

        <a className="header-contact" href="mailto:hello@grassrootsgm.org">
          Contact us
          <ArrowUpRight size={17} strokeWidth={1.8} aria-hidden="true" />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <MapPin size={15} strokeWidth={1.8} aria-hidden="true" />
            Rooted in Greater Manchester
          </p>
          <h1>
            Good things grow from <em>strong roots.</em>
          </h1>
          <p className="intro">
            We bring people, ideas, and local action together to help Greater
            Manchester&apos;s communities flourish from the ground up.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="mailto:hello@grassrootsgm.org">
              Let&apos;s talk
              <ArrowUpRight size={19} strokeWidth={1.8} aria-hidden="true" />
            </a>
            <a className="text-link" href="#about">
              Our approach
              <ArrowDown size={17} strokeWidth={1.8} aria-hidden="true" />
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

      <section className="about-strip" id="about">
        <p className="section-number">01 — Our roots</p>
        <p className="about-statement">
          Local knowledge leads the way. We listen closely, connect generously,
          and make room for practical ideas to take hold.
        </p>
        <a
          className="round-link"
          href="mailto:hello@grassrootsgm.org"
          aria-label="Contact Grass Roots"
        >
          <ArrowUpRight size={25} strokeWidth={1.5} aria-hidden="true" />
        </a>
      </section>

      <footer>
        <span>Grass Roots Greater Manchester</span>
        <a href="mailto:hello@grassrootsgm.org">hello@grassrootsgm.org</a>
      </footer>
    </main>
  )
}
