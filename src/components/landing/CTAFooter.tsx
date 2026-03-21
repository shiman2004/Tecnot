import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import './CTAFooter.css';

export default function CTAFooter() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    clinicName: '',
    clinicAddress: '',
  });

  const handleNext = () => {
    if (step === 1 && formData.email) {
      setStep(2);
    } else if (step === 2 && formData.clinicName) {
      setStep(3);
    } else if (step === 3 && formData.clinicAddress) {
      // Submit form
      console.log('Form submitted:', formData);
      setStep(4); // Success state
    }
  };

  return (
    <>
      <section className="cta-section">
        {/* Animated Background */}
        <div className="cta-bg-animation">
          <div className="floating-orb orb-1"></div>
          <div className="floating-orb orb-2"></div>
          <div className="floating-orb orb-3"></div>
          <div className="grid-overlay"></div>
          <div className="particles-container">
            {Array.from({ length: 20 }).map((_, i) => (
              <div 
                key={i} 
                className="particle"
                style={{
                  '--x': `${Math.random() * 100}%`,
                  '--y': `${Math.random() * 100}%`,
                  '--duration': `${15 + Math.random() * 10}s`,
                  '--delay': `${Math.random() * 5}s`,
                } as React.CSSProperties}
              />
            ))}
          </div>
        </div>

        <div className="cta-container">
          {step < 4 ? (
            <>
              <div className="cta-content">
                <h2>
                  Ready to transform
                  <br />
                  <span className="text-gradient">your practice?</span>
                </h2>
                <p>
                  Join the future of clinical documentation. Start documenting smarter today.
                </p>
              </div>

              <div className="multi-step-form">
                <div className="form-progress">
                  {[1, 2, 3].map(s => (
                    <div 
                      key={s} 
                      className={`progress-dot ${step >= s ? 'active' : ''} ${step > s ? 'completed' : ''}`}
                    >
                      {step > s ? <CheckCircle size={14} /> : s}
                    </div>
                  ))}
                </div>

                <div className="form-steps">
                  {/* Step 1: Email */}
                  <div className={`form-step ${step === 1 ? 'active' : step > 1 ? 'completed' : ''}`}>
                    <label>Your Email Address</label>
                    <input
                      type="email"
                      placeholder="doctor@hospital.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onKeyPress={(e) => e.key === 'Enter' && handleNext()}
                    />
                  </div>

                  {/* Step 2: Clinic Name */}
                  {step >= 2 && (
                    <div className={`form-step ${step === 2 ? 'active' : step > 2 ? 'completed' : ''}`}>
                      <label>Clinic Name</label>
                      <input
                        type="text"
                        placeholder="City Medical Center"
                        value={formData.clinicName}
                        onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                        onKeyPress={(e) => e.key === 'Enter' && handleNext()}
                        autoFocus
                      />
                    </div>
                  )}

                  {/* Step 3: Clinic Address */}
                  {step >= 3 && (
                    <div className={`form-step ${step === 3 ? 'active' : ''}`}>
                      <label>Clinic Address</label>
                      <input
                        type="text"
                        placeholder="123 Main Street, Colombo"
                        value={formData.clinicAddress}
                        onChange={(e) => setFormData({ ...formData, clinicAddress: e.target.value })}
                        onKeyPress={(e) => e.key === 'Enter' && handleNext()}
                        autoFocus
                      />
                    </div>
                  )}
                </div>

                <button className="cta-next-btn" onClick={handleNext}>
                  {step === 3 ? (
                    <>
                      <span>Get Early Access</span>
                      <Sparkles size={20} />
                    </>
                  ) : (
                    <>
                      <span>Continue</span>
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>
              </div>
            </>
          ) : (
            <div className="success-state">
              <div className="success-icon">
                <CheckCircle size={64} />
              </div>
              <h2>Welcome to TECNOT! 🎉</h2>
              <p>We'll be in touch shortly to get you started.</p>
            </div>
          )}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <a href="/" className="footer-logo">TECNOT</a>
            <p>AI-powered clinical documentation for modern healthcare.</p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#pricing">Pricing</a>
            </div>

            <div className="link-group">
              <h4>Company</h4>
              <a href="#team">Meet Our Team</a>
              <a href="#doctors">For Doctors</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="link-group">
              <h4>Legal</h4>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#hipaa">HIPAA Compliance</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-container">
            <p>&copy; 2026 TECNOT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}