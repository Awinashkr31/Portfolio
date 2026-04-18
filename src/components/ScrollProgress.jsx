import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const barRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0
      if (barRef.current) barRef.current.style.width = progress + '%'
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return <div className="scroll-progress" ref={barRef} />
}
