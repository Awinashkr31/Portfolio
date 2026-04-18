import { useState } from 'react'
import { useFadeUp } from '../hooks/useFadeUp'

export default function Contact() {
  const { ref: headRef } = useFadeUp()
  const { ref: infoRef } = useFadeUp()
  const { ref: formRef } = useFadeUp()

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setForm({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <section>
      <div className="fade-up" ref={headRef}>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Have a project in mind or want to say hi? I'd love to hear from you.</p>
      </div>
      <div className="contact-container">
        <div className="contact-info fade-up" ref={infoRef}>
          {[
            { icon: 'lucide:phone', label: 'Phone', value: '+91 9534962190' },
            { icon: 'lucide:mail', label: 'Email', value: 'awinashkr31@gmail.com' },
            { icon: 'lucide:linkedin', label: 'LinkedIn', value: 'linkedin.com/in/awinash-kumar-886540242' },
          ].map(({ icon, label, value }) => (
            <div className="info-item" key={label}>
              <div className="info-icon">
                <iconify-icon icon={icon} style={{ fontSize: '22px', color: 'var(--primary)' }} />
              </div>
              <div className="info-content">
                <h4>{label}</h4>
                <p>{value}</p>
              </div>
            </div>
          ))}
        </div>

        <form className="contact-form fade-up" ref={formRef} onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="name">Name</label>
            <input
              type="text" id="name" name="name" className="form-input"
              placeholder="Your name" required value={form.name} onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input
              type="email" id="email" name="email" className="form-input"
              placeholder="Your email address" required value={form.email} onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="message">Message</label>
            <textarea
              id="message" name="message" className="form-textarea"
              placeholder="Tell me about your project..." required
              value={form.message} onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              width: '100%', height: '50px', fontSize: '15px',
              backgroundColor: sent ? '#10b981' : undefined,
            }}
          >
            {sent ? (
              <>
                <iconify-icon icon="lucide:check" style={{ fontSize: '16px' }} />
                Message Sent!
              </>
            ) : (
              <>
                Send Message
                <iconify-icon icon="lucide:send" style={{ fontSize: '16px' }} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}
