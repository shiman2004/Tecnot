import { useState } from 'react';
import './CTAFooter.css';

const CTAFooter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <>
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2>
              Ready to transform <br />
              <span className="text-gradient">your practice?</span>
            </h2>
            <p>Join the future of clinical documentation. Start documenting smarter today.</p>
            
            <form className="cta-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-submit">
                Get Early Access
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              TECNOT<span className="logo-dot">●</span>
            </a>
            <p>AI-powered clinical documentation<br />for Sri Lankan healthcare.</p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Explore</h4>
              <a href="#features">Features</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#for-doctors">For Doctors</a>
            </div>

            <div className="link-group">
              <h4>Legal</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">HIPAA Compliance</a>
            </div>

            <div className="link-group">
              <h4>Connect</h4>
              <a href="#">LinkedIn</a>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-container">
            <p>&copy; 2026 TECNOT. IIT SDGP Team 49.</p>
            <p className="location">Colombo, Sri Lanka</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CTAFooter;