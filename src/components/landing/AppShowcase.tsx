import React, { useState, useEffect } from 'react';
import { Search, Mic, Brain, FileText, Edit } from 'lucide-react';
import './AppShowcase.css';

export default function AppShowcase() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 4000); // Change step every 4 seconds

    return () => clearInterval(timer);
  }, []);

  const steps = [
    {
      id: 0,
      title: 'Select Patient',
      action: 'Dr. searches for patient',
      icon: Search,
    },
    {
      id: 1,
      title: 'Start Recording',
      action: 'Dr. begins consultation',
      icon: Mic,
    },
    {
      id: 2,
      title: 'AI Generates SOAP',
      action: 'Processing consultation',
      icon: Brain,
    },
    {
      id: 3,
      title: 'Review & Edit',
      action: 'Dr. reviews and customizes',
      icon: Edit,
    },
  ];

  return (
    <section className="app-showcase-workflow" id="how-it-works">
      <div className="workflow-container">
        <div className="workflow-header">
          <h2>
            See <span className="text-gradient">TECNOT</span> in Action
          </h2>
          <p>From patient search to saved note — the complete clinical workflow.</p>
        </div>

        <div className="workflow-display">
          {/* Steps Sidebar */}
          <div className="steps-sidebar">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`step-item ${activeStep === step.id ? 'active' : ''} ${
                  activeStep > step.id ? 'completed' : ''
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                <div className="step-icon">
                  <step.icon size={20} />
                </div>
                <div className="step-content">
                  <div className="step-title">{step.title}</div>
                  <div className="step-action">{step.action}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Screen */}
          <div className="visual-screen">
            <div className="workflow-screen">
              {/* Step 0: Patient Search */}
              {activeStep === 0 && (
                <div className="screen-content search-screen">
                  <div className="search-input-display">
                    <Search size={20} />
                    <span className="typing-text">Malik Ferna</span>
                    <span className="cursor-blink"></span>
                  </div>

                  <div className="result-item active">
                    <div className="result-avatar">MF</div>
                    <div className="result-info">
                      <div className="result-name">Malik Fernando</div>
                      <div className="result-meta">MRN: 1020536 • Age 42 • Male</div>
                    </div>
                    <div className="result-badge">Select</div>
                  </div>

                  <div className="result-item">
                    <div className="result-avatar">MR</div>
                    <div className="result-info">
                      <div className="result-name">Malik Rashid</div>
                      <div className="result-meta">MRN: 1020789 • Age 38 • Male</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 1: Recording */}
              {activeStep === 1 && (
                <div className="screen-content recording-screen">
                  <div className="patient-header">
                    <div className="patient-avatar-small">MF</div>
                    <div className="patient-details">
                      <div className="patient-name-small">Malik Fernando</div>
                      <div className="patient-status">MRN: 1020536 • Recording</div>
                    </div>
                  </div>

                  <div className="pulse-circle">
                    <Mic size={32} />
                  </div>

                  <div className="recording-timer">02:34</div>

                  <div className="live-waveform">
                    {[...Array(30)].map((_, i) => (
                      <div
                        key={i}
                        className="waveform-bar"
                        style={{ '--i': i } as React.CSSProperties}
                      />
                    ))}
                  </div>

                  <div className="recording-lang">Listening in <strong>Sinhala</strong></div>
                </div>
              )}

              {/* Step 2: AI Processing */}
              {activeStep === 2 && (
                <div className="screen-content processing-screen">
                  <div className="ai-brain">
                    <Brain size={48} className="brain-icon" />
                    <div className="processing-rings">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="processing-ring" />
                      ))}
                    </div>
                  </div>

                  <div className="processing-text">
                    <div className="process-title">Generating SOAP Note</div>
                    <div className="process-steps">
                      <div className="process-step">✓ Transcribed consultation</div>
                      <div className="process-step active">→ Analyzing medical content</div>
                      <div className="process-step">○ Structuring SOAP format</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Review & Edit */}
              {activeStep === 3 && (
                <div className="screen-content editor-screen">
                  <div className="soap-building">
                    {[
                      { letter: 'S', title: 'Subjective', color: '#3B82F6' },
                      { letter: 'O', title: 'Objective', color: '#8B5CF6' },
                      { letter: 'A', title: 'Assessment', color: '#EC4899' },
                      { letter: 'P', title: 'Plan', color: '#10B981' },
                    ].map((section, i) => (
                      <div key={section.letter} className="soap-section-build">
                        <div className="section-header-build">
                          <div
                            className="section-badge-hero"
                            style={{ background: section.color }}
                          >
                            {section.letter}
                          </div>
                          <span className="section-title-hero">{section.title}</span>
                        </div>
                        <div className="section-preview">
                          {i === 0 && 'Patient reports persistent headache for 3 days...'}
                          {i === 1 && 'BP: 120/80, Temp: 37.2°C, Alert and oriented...'}
                          {i === 2 && 'Tension headache, likely stress-related...'}
                          {i === 3 && 'Prescribe ibuprofen 400mg, follow up in 1 week...'}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="editor-actions">
                    <div className="editor-textarea">
                      <Edit size={16} />
                      <span>Click any section to edit...</span>
                    </div>
                    <button className="btn-save">
                      <FileText size={18} />
                      Save Note
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}