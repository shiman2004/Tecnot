
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 8C12.68 8 10 10.68 10 14C10 17.32 12.68 20 16 20C19.32 20 22 17.32 22 14C22 10.68 19.32 8 16 8Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M6 28C6 23.58 11.16 20 16 20C20.84 20 26 23.58 26 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Select Patient',
      description: 'Search or add a patient. Their demographics, allergies, and history load instantly.'
    },
    {
      number: 2,
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 6C12.68 6 10 8.68 10 12V16C10 19.32 12.68 22 16 22C19.32 22 22 19.32 22 16V12C22 8.68 19.32 6 16 6Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M6 16C6 11.58 9.58 8 14 8M26 16C26 11.58 22.42 8 18 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Record Consultation',
      description: 'Hit record and have a natural conversation. TECNOT listens in Sinhala, Tamil, or English.'
    },
    {
      number: 3,
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 4L19.09 11.26L28 12.27L22 18.14L23.18 27.02L16 23.77L8.82 27.02L10 18.14L4 12.27L12.91 11.26L16 4Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'AI Generates SOAP',
      description: 'In seconds, the AI extracts the chief complaint, HPI, and builds a complete SOAP note.'
    },
    {
      number: 4,
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M8 16L14 22L24 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Review & Save',
      description: 'Edit any section, add orders, and save. The note is stored in the patient\'s history forever.'
    }
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="works-container">
        <div className="section-header">
          <h2>
            How It <span className="text-gradient">Works</span>
          </h2>
          <p>Four simple steps from consultation to documentation.</p>
        </div>

        <div className="timeline">
          <svg className="timeline-line" viewBox="0 0 4 600" preserveAspectRatio="none">
            <line x1="2" y1="0" x2="2" y2="600" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="1000" strokeDashoffset="1000">
              <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="2s" begin="0s" fill="freeze" />
            </line>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(170, 40%, 51%)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(170, 40%, 51%)" stopOpacity="1" />
              </linearGradient>
            </defs>
          </svg>

          <div className="steps">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="step"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-icon glass">
                  {step.icon}
                </div>
                <div className="step-content">
                  <div className="step-label">STEP {step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;