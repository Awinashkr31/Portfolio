import { useEffect, useRef } from 'react'
import { useFadeUp } from '../hooks/useFadeUp'

const PROJECTS = [
  {
    img: '/flipkart_scraper.png',
    title: 'Flipkart Review Scraper',
    desc: 'Developed a Flask-based web application that allows users to search for products and scrape customer reviews directly from Flipkart.',
    stack: ['Flask', 'Python', 'Web Scraping', 'MongoDB'],
    liveLink: '#',
    githubLink: 'https://github.com/Awinashkr31/flipkart-review-scraper',
  },
  {
    img: '/diamond_prediction.png',
    title: 'Diamond Price Prediction',
    desc: 'Machine learning web application to predict diamond prices based on features like carat, cut, color, and clarity. Deployed on Render.',
    stack: ['Machine Learning', 'Flask', 'Scikit-learn', 'Render'],
    liveLink: 'https://diamond-price-prediction2.onrender.com/',
    githubLink: 'https://github.com/Awinashkr31/diamond-price-prediction',
  },
  {
    img: '/embroidery_ecommerce.png',
    title: 'Embroidery Ecommerce',
    desc: 'Premium, editorial-grade e-commerce platform for an embroidery shop with Mehndi Booking, Custom Design pages and high-end UI patterns.',
    stack: ['React', 'Node.js', 'Vite', 'CSS'],
    liveLink: 'https://www.embroiderybysana.live/',
    githubLink: 'https://github.com/Awinashkr31/embroidery-ecommerce',
  },
  {
    img: '/causal_inference.png',
    title: 'Causal Inference Project',
    desc: 'A robust causal inference pipeline and backend service designed for analyzing complex data relationships and generating insights.',
    stack: ['Python', 'Data Science', 'Machine Learning'],
    liveLink: '#',
    githubLink: 'https://github.com/Awinashkr31/causal-inference',
  },
]

export default function Projects() {
  const { ref: headRef } = useFadeUp()
  const gridRef = useRef(null)

  useEffect(() => {
    if (!gridRef.current) return
    const cards = gridRef.current.querySelectorAll('.project-card')
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    cards.forEach(card => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section>
      <div className="fade-up" ref={headRef}>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">A selection of projects I've worked on recently.</p>
      </div>
      <div className="projects-grid" ref={gridRef}>
        {PROJECTS.map(({ img, title, desc, stack, liveLink, githubLink }) => (
          <div className="project-card fade-up" key={title}>
            <div className="project-image-wrap">
              <img src={img} alt={title} className="project-image" />
            </div>
            <div className="project-content">
              <div className="project-title">{title}</div>
              <div className="project-desc">{desc}</div>
              <div className="project-stack">
                {stack.map(s => <span className="stack-tag" key={s}>{s}</span>)}
              </div>
              <div className="project-links">
                <a href={liveLink} target="_blank" rel="noopener noreferrer" className="link-btn">
                  <iconify-icon icon="lucide:external-link" style={{ fontSize: '14px' }} />
                  Live Demo
                </a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="link-btn">
                  <iconify-icon icon="lucide:github" style={{ fontSize: '14px' }} />
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
