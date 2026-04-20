import { useState } from 'react'
import { useFadeUp } from '../hooks/useFadeUp'

export default function Contact() {
  const { ref: headRef } = useFadeUp()
  const { ref: infoRef } = useFadeUp()
  const { ref: formRef } = useFadeUp()

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await fetch("https://formsubmit.co/ajax/awinashkr31@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: "New contact from your Portfolio!"
        })
      });

      setSent(true)
      setTimeout(() => {
        setSent(false)
        setForm({ name: '', email: '', message: '' })
      }, 3000)
    } catch (error) {
      console.error("Failed to send email:", error)
      alert("Something went wrong! Please email me directly.")
    }
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
            { icon: 'lucide:phone', label: 'Phone', value: '+91 9534962190', href: 'tel:+919534962190' },
            { icon: 'lucide:linkedin', label: 'LinkedIn', value: 'linkedin.com/in/awinash-kumar-cu/', href: 'https://www.linkedin.com/in/awinash-kumar-cu/' },
            { icon: 'lucide:github', label: 'GitHub', value: 'github.com/Awinashkr31', href: 'https://github.com/Awinashkr31' },
          ].map(({ icon, label, value, href }) => (
            <div className="info-item" key={label}>
              <div className="info-icon">
                <iconify-icon icon={icon} style={{ fontSize: '22px', color: 'var(--primary)' }} />
              </div>
              <div className="info-content">
                <h4>{label}</h4>
                <p>
                  <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    {value}
                  </a>
                </p>
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
