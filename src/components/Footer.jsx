export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div className="logo" style={{ marginBottom: '8px' }}>
              <iconify-icon icon="lucide:code-2" style={{ fontSize: '22px', color: 'var(--primary)' }} />
              <span> Awinash </span>
              <p className="footer-tagline"></p>
            </div>
          </div>
          <div className="social-links">
            <a href="https://github.com/Awinashkr31" className="social-btn" aria-label="GitHub">
              <iconify-icon icon="lucide:github" style={{ fontSize: '18px' }} />
            </a>
            <a href="https://www.linkedin.com/in/awinash-kumar-cu/" className="social-btn" aria-label="LinkedIn">
              <iconify-icon icon="lucide:linkedin" style={{ fontSize: '18px' }} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2024 Awinash Kumar. All rights reserved.</span>
          <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Back to Top
            <iconify-icon icon="lucide:arrow-up" style={{ fontSize: '16px' }} />
          </button>
        </div>
      </div>
    </footer>
  )
}
