import { useFadeUp } from '../hooks/useFadeUp'

export default function About() {
  const { ref: headRef } = useFadeUp()
  const { ref: textRef } = useFadeUp()
  const { ref: highlightsRef } = useFadeUp()

  return (
    <section>
      <div className="fade-up" ref={headRef}>
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">A little bit about my journey and professional goals.</p>
      </div>
      <div className="about-grid">
        <div className="about-text fade-up" ref={textRef}>
          <p>I am a well-organized, creative, and goal-oriented graduate possessing excellent communication, problem-solving, and leadership skills.</p>
          <p>With a flair for exploring suitable avenues in Computer Science Engineering, my objective is to develop advanced projects with efficiency and quality.</p>
          <p>Currently based in Bhagalpur, Bihar, I enjoy exploring the intersection of design and engineering, turning creative ideas into functional, beautiful products.</p>
        </div>
        <div className="highlights fade-up" ref={highlightsRef}>
          <div className="highlights-title">Quick Facts</div>
          {[
            { icon: 'lucide:graduation-cap', label: 'MCA (AIML) Student' },
            { icon: 'lucide:code', label: 'Full Stack Developer' },
            { icon: 'lucide:brain-circuit', label: 'Data Science & AI' },
            { icon: 'lucide:map-pin', label: 'Bhagalpur, Bihar' },
          ].map(({ icon, label }) => (
            <div className="highlight-item" key={label}>
              <div className="highlight-icon">
                <iconify-icon icon={icon} style={{ fontSize: '18px', color: 'var(--primary)' }} />
              </div>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
