import { useState, useEffect } from 'react';
import './AppShowcase.css';

const AppShowcase = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const steps = [
    {
      step: 1,
      title: 'Select Patient',
      action: 'Dr. searches for patient',
      description: 'Search by name, MRN, or mobile number. Patient history loads instantly.',
      visual: (
        <div className="workflow-screen">
          <div className="screen-header">
            <div className="search-bar-large">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2"/>
                <path d="M14 14L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="typing-text">Malik Ferna</span>
              <span className="cursor-blink">|</span>
            </div>
            <div className="search-results">
              <div className="result-item highlighted">
                <div className="result-avatar">MF</div>
                <div className="result-info">
                  <div className="result-name">Malik Fernando</div>
                  <div className="result-details">MRN: 1020536 • Age 42 • Male</div>
                </div>
                <div className="result-badge">Select</div>
              </div>
              <div className="result-item">
                <div className="result-avatar">MR</div>
                <div className="result-info">
                  <div className="result-name">Malik Rashid</div>
                  <div className="result-details">MRN: 1020789 • Age 38 • Male</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      step: 2,
      title: 'Start Recording',
      action: 'Dr. begins consultation',
      description: 'One tap to start. AI listens in Sinhala, Tamil, or English.',
      visual: (
        <div className="workflow-screen">
          <div className="recording-interface">
            <div className="patient-banner">
              <div className="banner-avatar">MF</div>
              <div className="banner-info">
                <div className="banner-name">Malik Fernando</div>
                <div className="banner-meta">MRN: 1020536 • Recording</div>
              </div>
            </div>
            <div className="recording-central">
              <div className="pulse-circle">
                <div className="pulse-ring"></div>
                <div className="pulse-ring delay-1"></div>
                <div className="pulse-ring delay-2"></div>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect x="20" y="8" width="8" height="14" rx="4" fill="#4DB8A8"/>
                  <line x1="24" y1="22" x2="24" y2="32" stroke="#4DB8A8" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="19" y1="32" x2="29" y2="32" stroke="#4DB8A8" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="recording-timer">02:34</div>
              <div className="live-waveform">
                {[...Array(30)].map((_, i) => (
                  <div key={i} className="wave-bar-live" style={{ animationDelay: `${i * 0.05}s` }}></div>
                ))}
              </div>
              <div className="recording-language">Listening in Sinhala</div>
            </div>
          </div>
        </div>
      )
    },
    {
      step: 3,
      title: 'AI Generates SOAP',
      action: 'Processing consultation',
      description: 'AI extracts key information and structures clinical note automatically.',
      visual: (
        <div className="workflow-screen">
          <div className="generation-interface">
            <div className="generation-header">
              <div className="gen-icon spinning">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2V6M12 18V22M6 12H2M22 12H18M19.07 4.93L16.24 7.76M7.76 16.24L4.93 19.07M19.07 19.07L16.24 16.24M7.76 7.76L4.93 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span>Generating SOAP Note...</span>
            </div>
            <div className="soap-building">
              <div className="soap-section-build complete">
                <div className="section-icon">✓</div>
                <div className="section-content">
                  <div className="section-title">Subjective</div>
                  <div className="section-preview">Patient reports severe headache for 3 days...</div>
                </div>
              </div>
              <div className="soap-section-build complete">
                <div className="section-icon">✓</div>
                <div className="section-content">
                  <div className="section-title">Objective</div>
                  <div className="section-preview">BP 140/90, HR 88, Temp 37.2°C...</div>
                </div>
              </div>
              <div className="soap-section-build building">
                <div className="section-icon loading">
                  <div className="loading-spinner"></div>
                </div>
                <div className="section-content">
                  <div className="section-title">Assessment</div>
                  <div className="section-preview typing">Tension-type headache</div>
                </div>
              </div>
              <div className="soap-section-build">
                <div className="section-icon">○</div>
                <div className="section-content">
                  <div className="section-title">Plan</div>
                  <div className="section-preview empty"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      step: 4,
      title: 'Review & Edit',
      action: 'Dr. reviews and customizes',
      description: 'Edit any section. Add orders, prescriptions, and clinical notes.',
      visual: (
        <div className="workflow-screen">
          <div className="review-interface">
            <div className="note-editor">
              <div className="editor-section">
                <div className="editor-label">ASSESSMENT</div>
                <div className="editor-field">
                  <textarea className="editor-textarea" defaultValue="Tension-type headache, rule out migraine" />
                  <div className="edit-indicator">Editing...</div>
                </div>
              </div>
              <div className="editor-section">
                <div className="editor-label">PLAN</div>
                <div className="editor-field">
                  <div className="plan-item">
                    <span className="plan-number">1.</span>
                    <span>Paracetamol 500mg PRN</span>
                  </div>
                  <div className="plan-item">
                    <span className="plan-number">2.</span>
                    <span>Rest and hydration</span>
                  </div>
                  <div className="plan-item">
                    <span className="plan-number">3.</span>
                    <span>Follow-up in 1 week</span>
                  </div>
                  <button className="add-order-btn">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Add Order
                  </button>
                </div>
              </div>
            </div>
            <div className="action-buttons">
              <button className="btn-save">Save Note</button>
            </div>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  return (
    <section className="app-showcase-workflow" id="app-showcase">
      <div className="workflow-container">
        <div className="workflow-header">
          <h2>See <span className="text-gradient">TECNOT</span> in Action</h2>
          <p>From patient search to saved note — the complete clinical workflow.</p>
        </div>

        <div className="workflow-display">
          <div className="steps-sidebar">
            {steps.map((step, index) => (
              <button
                key={index}
                className={`step-item ${currentStep === index ? 'active' : ''} ${currentStep > index ? 'completed' : ''}`}
                onClick={() => {
                  setCurrentStep(index);
                  setIsPlaying(false);
                }}
              >
                <div className="step-content">
                  <div className="step-title">{step.title}</div>
                  <div className="step-action">{step.action}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="visual-display">
            <div className="visual-screen">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`visual-item ${currentStep === index ? 'active' : ''}`}
                >
                  {step.visual}
                </div>
              ))}
            </div>
            <div className="visual-description">
              <p>{steps[currentStep].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;