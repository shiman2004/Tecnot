import { useState, useEffect } from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: 1,
      title: 'Select Patient',
      description: 'Search or add a patient. Demographics, allergies, and history load instantly.',
      visual: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="40" r="18" stroke="#4DB8A8" strokeWidth="3" fill="none" opacity="0.8"/>
          <path d="M35 90C35 90 35 70 60 70C85 70 85 90 85 90" stroke="#4DB8A8" strokeWidth="3" strokeLinecap="round" opacity="0.8"/>
          <circle cx="40" cy="40" r="3" fill="#6dd5c3">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="80" cy="40" r="3" fill="#6dd5c3">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.3s" repeatCount="indefinite"/>
          </circle>
        </svg>
      )
    },
    {
      number: 2,
      title: 'Record Consultation',
      description: 'Hit record. Have a natural conversation. TECNOT listens in Sinhala, Tamil, or English.',
      visual: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <rect x="52" y="30" width="16" height="28" rx="8" fill="#4DB8A8"/>
          <line x1="60" y1="58" x2="60" y2="75" stroke="#4DB8A8" strokeWidth="3" strokeLinecap="round"/>
          <line x1="50" y1="75" x2="70" y2="75" stroke="#4DB8A8" strokeWidth="3" strokeLinecap="round"/>
          <path d="M30 45C30 45 25 50 25 55C25 60 30 65 30 65" stroke="#6dd5c3" strokeWidth="2.5" strokeLinecap="round" opacity="0.5">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="1.5s" repeatCount="indefinite"/>
          </path>
          <path d="M90 45C90 45 95 50 95 55C95 60 90 65 90 65" stroke="#6dd5c3" strokeWidth="2.5" strokeLinecap="round" opacity="0.5">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="1.5s" begin="0.3s" repeatCount="indefinite"/>
          </path>
        </svg>
      )
    },
    {
      number: 3,
      title: 'AI Generates SOAP',
      description: 'In seconds, AI extracts chief complaint, HPI, and builds a complete SOAP note.',
      visual: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <rect x="30" y="25" width="60" height="70" rx="4" stroke="#4DB8A8" strokeWidth="3" fill="none"/>
          <line x1="40" y1="40" x2="80" y2="40" stroke="#6dd5c3" strokeWidth="3" strokeLinecap="round"/>
          <line x1="40" y1="52" x2="75" y2="52" stroke="#6dd5c3" strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
          <line x1="40" y1="64" x2="70" y2="64" stroke="#6dd5c3" strokeWidth="2.5" strokeLinecap="round" opacity="0.5"/>
          <circle cx="60" cy="60" r="25" stroke="#4DB8A8" strokeWidth="2" fill="none" opacity="0.3">
            <animate attributeName="r" values="20;30;20" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite"/>
          </circle>
        </svg>
      )
    },
    {
      number: 4,
      title: 'Review & Save',
      description: 'Edit any section, add orders, and save. The note lives in patient history forever.',
      visual: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="30" stroke="#4DB8A8" strokeWidth="3" fill="none"/>
          <path d="M45 60L55 70L75 50" stroke="#6dd5c3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="1.5s" repeatCount="indefinite"/>
          </path>
        </svg>
      )
    }
  ];

  // Auto-scroll on mobile
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="how-it-works-revolutionary" id="how-it-works">
      <div className="works-container">
        <div className="section-header">
          <div className="section-badge">
            <span className="pulse-dot"></span>
            <span>Simple Workflow</span>
          </div>
          <h2>
            How It <span className="text-gradient">Works</span>
          </h2>
          <p>Four steps from consultation to documentation. That's it.</p>
        </div>

        {/* Desktop: Horizontal Flow */}
        <div className="flow-container">
          <div className="flow-line">
            <div 
              className="flow-progress" 
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            ></div>
          </div>

          <div className="steps-flow">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flow-step ${activeStep === index ? 'active' : ''} ${activeStep > index ? 'completed' : ''}`}
                onClick={() => setActiveStep(index)}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className="step-visual">
                  {step.visual}
                </div>

                <div className={`step-number ${activeStep >= index ? 'active' : ''}`}>
                  {activeStep > index ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    step.number
                  )}
                </div>

                <div className="step-info">
                  <div className="step-label">STEP {step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Auto-Scrolling Slider */}
        <div className="mobile-slider">
          <div className="slider-track" style={{ transform: `translateX(-${activeStep * 100}%)` }}>
            {steps.map((step, index) => (
              <div key={index} className="mobile-step-card">
                <div className="card-visual">
                  {step.visual}
                </div>
                <div className="card-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>

          <div className="slider-dots">
            {steps.map((_, index) => (
              <button
                key={index}
                className={`dot ${activeStep === index ? 'active' : ''}`}
                onClick={() => setActiveStep(index)}
                aria-label={`Go to step ${index + 1}`}
              ></button>
            ))}
          </div>

          <div className="slider-arrows">
            <button 
              className="arrow prev" 
              onClick={() => setActiveStep((activeStep - 1 + steps.length) % steps.length)}
              aria-label="Previous step"
            >
              ←
            </button>
            <button 
              className="arrow next" 
              onClick={() => setActiveStep((activeStep + 1) % steps.length)}
              aria-label="Next step"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;