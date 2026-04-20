import { useState, useEffect } from 'react'

const NAV_ITEMS = ['home', 'about', 'skills', 'projects', 'certifications', 'education', 'contact']

export default function Navbar({ darkMode, toggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      let current = ''
      NAV_ITEMS.forEach(id => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 100) current = id
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobile = () => setMobileOpen(false)
  const icon = darkMode ? 'lucide:sun' : 'lucide:moon'

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <div className="logo">
          <iconify-icon icon="lucide:code-2" style={{ fontSize: '22px', color: 'var(--primary)' }} />
          <span> Awinash </span>
        </div>

        <div className="nav-links">
          {NAV_ITEMS.map(id => (
            <a
              key={id}
              className={`nav-link${activeSection === id ? ' active' : ''}`}
              href={`#${id}`}
              data-section={id}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
            <iconify-icon icon={icon} style={{ fontSize: '18px' }} />
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {isMobile && (
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
              <iconify-icon icon={icon} style={{ fontSize: '18px' }} />
            </button>
          )}
          <div
            className="hamburger"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Open menu"
          >
            <span style={{ transform: mobileOpen ? 'rotate(45deg) translate(5px,5px)' : '' }} />
            <span style={{ opacity: mobileOpen ? 0 : 1 }} />
            <span style={{ transform: mobileOpen ? 'rotate(-45deg) translate(5px,-5px)' : '' }} />
          </div>
        </div>
      </div>

      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        {NAV_ITEMS.map(id => (
          <a key={id} className="nav-link" href={`#${id}`} onClick={closeMobile}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  )
}
