
import './Hero.css';

const Hero = () => {
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
              <span>95% Accuracy</span>
            </div>
          </div>
        </div>

        <div className="hero-visual animate-fade-up animate-float" style={{ animationDelay: '0.2s' }}>
          <div className="app-mockup glass glow-border">
            <div className="mockup-header">
              <div className="mockup-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="mockup-title">SOAP Note Generation</span>
            </div>
            <div className="mockup-content">
              <div className="soap-preview">
                <div className="soap-section">
                  <span className="soap-label">S</span>
                  <span className="soap-text">Patient reports severe headache...</span>
                </div>
                <div className="soap-section">
                  <span className="soap-label">O</span>
                  <span className="soap-text">BP 140/90, HR 88, Temp 37.2°C...</span>
                </div>
                <div className="soap-section">
                  <span className="soap-label">A</span>
                  <span className="soap-text">Tension-type headache, r/o migraine...</span>
                </div>
                <div className="soap-section">
                  <span className="soap-label">P</span>
                  <span className="soap-text">Paracetamol 500mg PRN, rest...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;