import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const contentRef = useRef(null)
  const imageRef = useRef(null)

  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  
  const roles = ["Full Stack Developer", "AI Engineer", "Data Scientist"]

  useEffect(() => {
    let timeout;
    const currentRole = roles[roleIndex]
    const typeSpeed = isDeleting ? 50 : 100
    
    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    } else {
      timeout = setTimeout(() => {
        setText(currentRole.substring(0, text.length + (isDeleting ? -1 : 1)))
      }, typeSpeed)
    }
    
    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

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
          I build digital<br />experiences as a<br />
          <span className="typewriter-text">{text}</span><span className="cursor">&nbsp;</span>
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
          <a href="/resume.pdf" download className="btn btn-outline">
            Download Resume
            <iconify-icon icon="lucide:download" style={{ fontSize: '18px' }} />
          </a>
        </div>
      </div>

      <div className="hero-image-container fade-up" ref={imageRef}>
        <div className="hero-image-wrapper">
          <img
            src="/img.jpg"
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
