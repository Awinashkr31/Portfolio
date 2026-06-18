import { useEffect, useRef } from 'react'
import { useFadeUp } from '../hooks/useFadeUp'

const SKILLS = [
  {
    icon: 'lucide:layout-template',
    category: 'Frontend',
    badges: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Vite'],
  },
  {
    icon: 'lucide:server',
    category: 'Backend & Database',
    badges: ['Node.js', 'Python', 'SQL', 'MongoDB', 'REST APIs'],
  },
  {
    icon: 'lucide:brain',
    category: 'AI & Data Science',
    badges: ['Machine Learning', 'Data Analysis', 'NLP', 'OpenAI', 'LangChain', 'A/B Testing'],
  },
  {
    icon: 'lucide:wrench',
    category: 'Tools & Soft Skills',
    badges: ['Automation', 'Meta API', 'Git', 'Problem Solving', 'Team Player'],
  },
]

export default function Skills() {
  const { ref: headRef } = useFadeUp()
  const gridRef = useRef(null)

  useEffect(() => {
    if (!gridRef.current) return
    const cards = gridRef.current.querySelectorAll('.skill-card')
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
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">The tools and technologies I use to bring ideas to life.</p>
      </div>
      <div className="skills-grid" ref={gridRef}>
        {SKILLS.map(({ icon, category, badges }) => (
          <div className="skill-card fade-up" key={category}>
            <div className="skill-category">
              <iconify-icon icon={icon} style={{ fontSize: '20px', color: 'var(--primary)' }} />
              {category}
            </div>
            <div className="skill-list">
              {badges.map(b => <span className="skill-badge" key={b}>{b}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
