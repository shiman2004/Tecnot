import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [activeMockup, setActiveMockup] = useState(0);

  const mockups = [
    {
      title: 'Voice Recording',
      component: (
        <div className="mockup-card glass">
          <div className="mockup-header">
            <div className="mockup-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <span className="mockup-title">Voice Recording</span>
          </div>
          <div className="mockup-body">
            <div className="recording-view">
              <div className="mic-circle-hero">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect x="20" y="8" width="8" height="14" rx="4" fill="#4DB8A8"/>
                  <line x1="24" y1="22" x2="24" y2="32" stroke="#4DB8A8" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="19" y1="32" x2="29" y2="32" stroke="#4DB8A8" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="recording-time">00:04:32</div>
              <div className="waveform-hero">
                {[...Array(20)].map((_, i) => (
                  <span key={i} className="wave-line" style={{ animationDelay: `${i * 0.1}s` }}></span>
                ))}
              </div>
              <div className="recording-status">Listening in <span className="status-highlight">Sinhala</span>...</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'SOAP Generation',
      component: (
        <div className="mockup-card glass">
          <div className="mockup-header">
            <div className="mockup-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <span className="mockup-title">SOAP Note Generation</span>
          </div>
          <div className="mockup-body">
            <div className="soap-view">
              <div className="soap-row">
                <div className="soap-badge-hero">S</div>
                <div className="soap-content">Patient reports severe headache...</div>
              </div>
              <div className="soap-row">
                <div className="soap-badge-hero">O</div>
                <div className="soap-content">BP 140/90, HR 88, Temp 37.2°C...</div>
              </div>
              <div className="soap-row">
                <div className="soap-badge-hero">A</div>
                <div className="soap-content">Tension-type headache, r/o migraine...</div>
              </div>
              <div className="soap-row">
                <div className="soap-badge-hero">P</div>
                <div className="soap-content">Paracetamol 500mg PRN, rest...</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Patient Dashboard',
      component: (
        <div className="mockup-card glass">
          <div className="mockup-header">
            <div className="mockup-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <span className="mockup-title">Patient Dashboard</span>
          </div>
          <div className="mockup-body">
            <div className="dashboard-view">
              <div className="search-input">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2"/>
                  <path d="M14 14L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>Search patients...</span>
              </div>
              <div className="patients-grid">
                <div className="patient-row">
                  <div className="patient-initial">MF</div>
                  <div className="patient-details">
                    <div className="patient-name">Malik Fernando</div>
                    <div className="patient-meta">MRN: 1020536</div>
                  </div>
                </div>
                <div className="patient-row">
                  <div className="patient-initial">AP</div>
                  <div className="patient-details">
                    <div className="patient-name">Ayesha Perera</div>
                    <div className="patient-meta">MRN: 1020537</div>
                  </div>
                </div>
                <div className="patient-row">
                  <div className="patient-initial">RS</div>
                  <div className="patient-details">
                    <div className="patient-name">Ruwan Silva</div>
                    <div className="patient-meta">MRN: 1020538</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  // Auto-rotate every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMockup((prev) => (prev + 1) % mockups.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [mockups.length]);

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="badge animate-fade-up">
            <span className="badge-dot"></span>
            AI-Powered Clinical Scribe
          </div>

          <h1 className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Stop Writing.<br />
            <span className="text-gradient">Start Healing.</span>
          </h1>

          <p className="hero-subtitle animate-fade-up" style={{ animationDelay: '0.2s' }}>
            TECNOT listens to your consultations in Sinhala, Tamil, or English 
            and generates structured SOAP notes in seconds — so you can focus 
            on what matters most.
          </p>

          <div className="hero-actions animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <button className="btn-cta">
              Start Free Trial
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn-secondary">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M6.5 5.5L13.5 10L6.5 14.5V5.5Z" fill="currentColor"/>
              </svg>
              Watch Demo
            </button>
          </div>

          <div className="stats-bar animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="stat">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>30s SOAP Notes</span>
            </div>
            <div className="stat">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
              <span>3 Languages</span>
            </div>
            <div className="stat">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>98% Accuracy</span>
            </div>
          </div>
        </div>

        {/* Auto-Rotating Mockups */}
        <div className="hero-visual animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="mockup-carousel">
            {mockups.map((mockup, index) => (
              <div
                key={index}
                className={`mockup-item ${activeMockup === index ? 'active' : ''}`}
              >
                {mockup.component}
              </div>
            ))}
          </div>

          <p className="carousel-caption">
            {mockups[activeMockup].title}
          </p>

          {/* Dots Indicator */}
          <div className="carousel-dots">
            {mockups.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${activeMockup === index ? 'active' : ''}`}
                onClick={() => setActiveMockup(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;