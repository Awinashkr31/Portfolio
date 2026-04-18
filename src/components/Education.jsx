import { useFadeUp } from '../hooks/useFadeUp'

export default function Education() {
  const { ref: headRef } = useFadeUp()
  const { ref: timelineRef } = useFadeUp()

  return (
    <section>
      <div className="fade-up" ref={headRef}>
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">My academic background and certifications.</p>
      </div>
      <div className="timeline fade-up" ref={timelineRef}>
        <div className="timeline-item">
          <div className="exp-role">Master of Computer Applications (AIML)</div>
          <div className="exp-company">Chandigarh University, Gharuan (CGPA: 6.41)</div>
          <div className="exp-duration">
            <iconify-icon icon="lucide:calendar" style={{ fontSize: '14px' }} />
            2024 – Present
          </div>
        </div>
        <div className="timeline-item">
          <div className="exp-role">Bachelor of Computer Applications</div>
          <div className="exp-company">Tilka Manjhi Bhagalpur University (66.75%)</div>
          <div className="exp-duration">
            <iconify-icon icon="lucide:calendar" style={{ fontSize: '14px' }} />
            2020 – 2023
          </div>
        </div>
        <div className="timeline-item">
          <div className="exp-role">Intermediate (BSEB) (PCM)</div>
          <div className="exp-company">Bihar (46.8%)</div>
          <div className="exp-duration">
            <iconify-icon icon="lucide:calendar" style={{ fontSize: '14px' }} />
            2018 – 2020
          </div>
        </div>
        <div className="timeline-item">
          <div className="exp-role">Matriculation (BSEB)</div>
          <div className="exp-company">High School Mamalkha, Bhagalpur (64.8%)</div>
          <div className="exp-duration">
            <iconify-icon icon="lucide:calendar" style={{ fontSize: '14px' }} />
            2017 – 2018
          </div>
        </div>
      </div>
    </section>
  )
}
