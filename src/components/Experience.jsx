import { useFadeUp } from '../hooks/useFadeUp'

export default function Experience() {
  const { ref: headRef } = useFadeUp()
  const { ref: timelineRef } = useFadeUp()

  return (
    <section>
      <div className="fade-up" ref={headRef}>
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">My professional certifications and courses.</p>
      </div>
      <div className="timeline fade-up" ref={timelineRef}>
        <div className="timeline-item">
          <div className="exp-role">Data Science Masters</div>
          <div className="exp-company">Physics Wallha</div>
        </div>
        <div className="timeline-item">
          <div className="exp-role">C#</div>
          <div className="exp-company">Infosys Springboard</div>
        </div>
        <div className="timeline-item">
          <div className="exp-role">React Js</div>
          <div className="exp-company">Infosys Springboard</div>
        </div>
        <div className="timeline-item">
          <div className="exp-role">AI for Decision Maker</div>
          <div className="exp-company">Coursera</div>
        </div>
      </div>
    </section>
  )
}
