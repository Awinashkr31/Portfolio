import { useEffect, useRef, useState } from 'react'
import { useFadeUp } from '../hooks/useFadeUp'

const PROJECTS = [
  {
    img: '/embroidery_ecommerce.png',
    title: 'Embroidery Ecommerce',
    desc: 'Online marketplace for handmade embroidery products. Features premium e-commerce design, Mehndi Booking, and Custom Design pages.',
    stack: ['JavaScript', 'React', 'Node.js', 'Vite'],
    liveLink: 'https://www.embroiderybysana.live/',
    githubLink: 'https://github.com/Awinashkr31/embroidery-ecommerce',
    category: 'Web Dev',
  },
  {
    img: '/meta_automation.png',
    title: 'Meta DM Automation',
    desc: 'Multi-tenant Instagram automation platform with DM workflows, comment triggers, CRM, analytics, and AI-powered conversation flows using the Meta API.',
    stack: ['JavaScript', 'Node.js', 'Meta API', 'Automation'],
    liveLink: '#',
    githubLink: 'https://github.com/Awinashkr31/meta-dm-automation',
    category: 'Automation',
  },
  {
    img: '/diamond_prediction.png',
    title: 'Customer Segmentation Model',
    desc: 'Built a customer segmentation model using RFM analysis and K-Means clustering on 1M+ retail transactions in SQL and Python, identifying high-value customer segments representing 65% of revenue.',
    stack: ['Python', 'SQL', 'K-Means', 'Data Analysis'],
    liveLink: '#',
    githubLink: 'https://github.com/Awinashkr31/Retail-Sales-Customer-Segmentation-Analysis-RFM-Model-',
    category: 'AI & Data',
  },
  {
    img: '/ai_lead_gen.png',
    title: 'AI Lead Generation',
    desc: 'Automated lead discovery and outreach system for digital agencies using AI agents and intelligent targeting.',
    stack: ['TypeScript', 'OpenAI', 'Automation', 'LangChain'],
    liveLink: '#',
    githubLink: 'https://github.com/Awinashkr31/AI-Powered-Lead-Generation-for-Digital-Agencies',
    category: 'Automation',
  },
  {
    img: '/causal_inference.png',
    title: 'CausalLens',
    desc: 'A robust causal inference pipeline and backend service designed for analyzing complex data relationships and generating insights.',
    stack: ['JavaScript', 'Data Science', 'Machine Learning'],
    liveLink: '#',
    githubLink: 'https://github.com/Awinashkr31/CausalLens',
    category: 'AI & Data',
  },
  {
    img: '/portfolio_website.png',
    title: 'Marketing A/B Test Analysis',
    desc: 'Comprehensive analysis of marketing campaign performance and A/B testing results to optimize conversion rates.',
    stack: ['Python', 'A/B Testing', 'Data Analysis'],
    liveLink: '#',
    githubLink: 'https://github.com/Awinashkr31/Marketing-Campaign-Performance-AB-Test-Analysis',
    category: 'AI & Data',
  },
  {
    img: '/diamond_prediction.png',
    title: 'HR Analytics Dashboard',
    desc: 'Employee Attrition Prediction and HR Dashboard for comprehensive workforce analytics and retention strategies.',
    stack: ['Python', 'Data Analytics', 'Dashboard'],
    liveLink: '#',
    githubLink: 'https://github.com/Awinashkr31/Employee-Attrition-Prediction-HR-Dashboard',
    category: 'AI & Data',
  },
  {
    img: '/embroidery_ecommerce.png',
    title: 'Embroidery ML API',
    desc: 'Machine Learning API backend for the embroidery marketplace to power smart features and personalized recommendations.',
    stack: ['Python', 'Machine Learning', 'API'],
    liveLink: '#',
    githubLink: 'https://github.com/Awinashkr31/embroidery-ml-api',
    category: 'AI & Data',
  },
  {
    img: '/ai_lead_gen.png',
    title: 'AI Chatbot',
    desc: 'Intelligent conversational agent and chatbot implementation capable of handling complex user inquiries.',
    stack: ['Python', 'NLP', 'Chatbot'],
    liveLink: '#',
    githubLink: 'https://github.com/Awinashkr31/Chat_bot',
    category: 'AI & Data',
  },
]

export default function Projects() {
  const { ref: headRef } = useFadeUp()
  const gridRef = useRef(null)
  const [activeFilter, setActiveFilter] = useState('All')

  const FILTERS = ['All', 'Web Dev', 'AI & Data', 'Automation']
  const filteredProjects = activeFilter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === activeFilter)

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
        
        <div className="project-filters">
          {FILTERS.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      <div className="projects-grid" ref={gridRef}>
        {filteredProjects.map(({ img, title, desc, stack, liveLink, githubLink }) => (
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
