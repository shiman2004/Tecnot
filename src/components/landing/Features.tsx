import { useState } from 'react';
import './Features.css';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: '🎙️',
      title: 'Voice-First Documentation',
      subtitle: 'Speak. We Write.',
      description: 'Capture consultations in Sinhala, Tamil, or English. Our AI transcribes with medical-grade accuracy while you focus on your patient.',
      stats: { value: '98%', label: 'Accuracy' },
      color: '#4DB8A8'
    },
    {
      icon: '🧠',
      title: 'AI Clinical Intelligence',
      subtitle: 'Think. We Structure.',
      description: 'Advanced AI extracts chief complaints, HPI, and generates complete SOAP notes in under 30 seconds. No templates. No clicking.',
      stats: { value: '<30s', label: 'Per Note' },
      color: '#6dd5c3'
    },
    {
      icon: '🔍',
      title: 'Smart Patient Discovery',
      subtitle: 'Search. Instantly Find.',
      description: 'Find patients by name, MRN, symptoms, or past complaints. Voice search included. Your entire practice, searchable.',
      stats: { value: '0.3s', label: 'Search Time' },
      color: '#4DB8A8'
    },
    {
      icon: '✍️',
      title: 'Full Clinical Control',
      subtitle: 'Review. Refine. Save.',
      description: 'Every SOAP section is editable. Add orders, medications, procedures. Your clinical judgment, enhanced by AI.',
      stats: { value: '100%', label: 'Customizable' },
      color: '#6dd5c3'
    },
    {
      icon: '💊',
      title: 'Structured Order System',
      subtitle: 'Prescribe. Organized.',
      description: 'Separate sections for labs, radiology, medications, procedures, and nursing instructions. Clinical clarity, automated.',
      stats: { value: '5', label: 'Order Types' },
      color: '#4DB8A8'
    },
    {
      icon: '📊',
      title: 'Complete Patient Timeline',
      subtitle: 'History. Accessible.',
      description: 'Every consultation, every SOAP note, instantly retrievable. Chronics, allergies, medications—all at your fingertips.',
      stats: { value: '∞', label: 'Records' },
      color: '#6dd5c3'
    }
  ];

  return (
    <section className="features-reimagined" id="features">
      <div className="features-container">
        {/* Header */}
        <div className="features-header">
          <div className="header-content">
            <div className="section-badge">
              <span className="pulse-dot"></span>
              <span>Built for Clinicians</span>
            </div>
            <h2>
              Everything You Need,{' '}
              <span className="text-gradient">Nothing You Don't</span>
            </h2>
            <p className="header-subtitle">
              Designed from the ground up for the way Sri Lankan doctors practice medicine.
              No bloat. No complexity. Just pure clinical efficiency.
            </p>
          </div>
        </div>

        {/* Interactive Feature Cards */}
        <div className="features-showcase">
          <div className="features-nav">
            {features.map((feature, index) => (
              <button
                key={index}
                className={`feature-nav-item ${activeFeature === index ? 'active' : ''}`}
                onClick={() => setActiveFeature(index)}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <span className="nav-icon">{feature.icon}</span>
                <span className="nav-title">{feature.title}</span>
              </button>
            ))}
          </div>

          <div className="feature-display">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-card-large ${activeFeature === index ? 'active' : ''}`}
              >
                <div className="card-background">
                  <div className="animated-gradient" style={{ '--feature-color': feature.color } as any}></div>
                </div>

                <div className="card-content">
                  <div className="feature-icon-large">{feature.icon}</div>
                  
                  <div className="feature-text">
                    <div className="feature-subtitle">{feature.subtitle}</div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>

                  <div className="feature-stat">
                    <div className="stat-value">{feature.stats.value}</div>
                    <div className="stat-label">{feature.stats.label}</div>
                  </div>
                </div>

                <div className="card-decoration">
                  <div className="deco-line"></div>
                  <div className="deco-circle"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="feature-progress">
            {features.map((_, index) => (
              <div
                key={index}
                className={`progress-dot ${activeFeature === index ? 'active' : ''}`}
                onClick={() => setActiveFeature(index)}
              ></div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="features-cta">
          <div className="cta-card">
            <div className="cta-content">
              <h3>Ready to reclaim your time?</h3>
              <p>Join the doctors who've cut documentation time by 40%.</p>
            </div>
            <button className="cta-button">
              Start Free Trial
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;