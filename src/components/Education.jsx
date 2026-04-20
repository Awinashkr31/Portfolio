import { useFadeUp } from '../hooks/useFadeUp'

export default function Education() {
  const { ref: headRef } = useFadeUp()
  const { ref: eduRef } = useFadeUp()
  const { ref: certRef } = useFadeUp()

  return (
    <section id="education">
      <div className="fade-up" ref={headRef}>
        <h2 className="section-title">Education & Certifications</h2>
        <p className="section-subtitle">My academic background and professional qualifications.</p>
      </div>

      <div className="edu-cert-grid">
        <div className="edu-column fade-up" ref={eduRef}>
          <h3 className="column-title">
            <iconify-icon icon="lucide:graduation-cap" style={{ fontSize: '24px', color: 'var(--primary)' }} />
            Education
          </h3>
          <div className="timeline">
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
              <div className="exp-company">B.N. College Bhagalpur</div>
              <div className="exp-duration">
                <iconify-icon icon="lucide:calendar" style={{ fontSize: '14px' }} />
                2018 – 2020
              </div>
            </div>
            <div className="timeline-item">
              <div className="exp-role">Matriculation (BSEB)</div>
              <div className="exp-company">High School Mamalkha, Bhagalpur</div>
              <div className="exp-duration">
                <iconify-icon icon="lucide:calendar" style={{ fontSize: '14px' }} />
                2017 – 2018
              </div>
            </div>
          </div>
        </div>

        <div className="cert-column fade-up" ref={certRef}>
          <h3 className="column-title">
            <iconify-icon icon="lucide:award" style={{ fontSize: '24px', color: 'var(--primary)' }} />
            Certifications
          </h3>
          <div className="cert-grid">
            <div className="cert-card">
              <div className="cert-icon">
                <iconify-icon icon="lucide:badge-check" style={{ fontSize: '28px' }} />
              </div>
              <div className="cert-content">
                <h4>Data Science Masters</h4>
                <p>Physics Wallha</p>
                <a href="#" className="cert-link">View Credential</a>
              </div>
            </div>
            <div className="cert-card">
              <div className="cert-icon">
                <iconify-icon icon="lucide:badge-check" style={{ fontSize: '28px' }} />
              </div>
              <div className="cert-content">
                <h4>C#</h4>
                <p>Infosys Springboard</p>
                <a href="#" className="cert-link">View Credential</a>
              </div>
            </div>
            <div className="cert-card">
              <div className="cert-icon">
                <iconify-icon icon="lucide:badge-check" style={{ fontSize: '28px' }} />
              </div>
              <div className="cert-content">
                <h4>React Js</h4>
                <p>Infosys Springboard</p>
                <a href="#" className="cert-link">View Credential</a>
              </div>
            </div>
            <div className="cert-card">
              <div className="cert-icon">
                <iconify-icon icon="lucide:badge-check" style={{ fontSize: '28px' }} />
              </div>
              <div className="cert-content">
                <h4>AI for Decision Maker</h4>
                <p>Coursera</p>
                <a href="#" className="cert-link">View Credential</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
