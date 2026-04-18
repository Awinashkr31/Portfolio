import { useEffect, useRef } from 'react'

export default function Hero() {
  const contentRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    if (contentRef.current) observer.observe(contentRef.current)
    if (imageRef.current) observer.observe(imageRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="hero-section">
      <div className="hero-content fade-up" ref={contentRef}>
        <div className="hero-badge">
          <span>👋</span> Hello, I'm Awinash Kumar
        </div>
        <h1 className="hero-title">
          Building digital<br />experiences with<br />code &amp; AI.
        </h1>
        <p className="hero-tagline">
          Passionate Full Stack Developer &amp; AI enthusiast creating robust web applications
          and intelligent solutions. Let's build something amazing together.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View Projects
            <iconify-icon icon="lucide:arrow-right" style={{ fontSize: '18px' }} />
          </a>
          <a href="#" className="btn btn-outline">
            Download CV
            <iconify-icon icon="lucide:download" style={{ fontSize: '18px' }} />
          </a>
        </div>
      </div>

      <div className="hero-image-container fade-up" ref={imageRef}>
        <div className="hero-image-wrapper">
          <img
            src="https://storage.googleapis.com/banani-avatars/avatar%2Fmale%2F25-35%2FSouth%20Asian%2F3"
            alt="Awinash Kumar - Full Stack Developer"
            className="hero-image"
          />
          <div className="hero-stat-badge badge-1">
            <iconify-icon icon="lucide:code-2" style={{ fontSize: '20px', color: 'var(--primary)' }} />
            <div>
              <div className="stat-num">2+</div>
              <div className="stat-label">Years Coding</div>
            </div>
          </div>
          <div className="hero-stat-badge badge-2">
            <iconify-icon icon="lucide:layers" style={{ fontSize: '20px', color: '#10b981' }} />
            <div>
              <div className="stat-num">10+</div>
              <div className="stat-label">Projects Done</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
