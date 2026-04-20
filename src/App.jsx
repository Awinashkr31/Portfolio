import { useState, useEffect } from 'react'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const toggleTheme = () => setDarkMode(prev => !prev)

  return (
    <>
      <ScrollProgress />
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <div className="container" id="home">
        <Hero />
      </div>
      <div className="container" id="about">
        <About />
      </div>
      <div className="skills-section" id="skills">
        <div className="container">
          <Skills />
        </div>
      </div>
      <div className="container" id="projects">
        <Projects />
      </div>

      <div className="container" id="education">
        <Education />
      </div>
      <div className="contact-section" id="contact">
        <div className="container">
          <Contact />
        </div>
      </div>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App
