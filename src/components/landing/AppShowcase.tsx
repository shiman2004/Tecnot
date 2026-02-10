import { useState } from 'react';
import './AppShowcase.css';

const AppShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
  {
    id: 'recording',
    icon: (
      <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
        {/* Microphone capsule */}
        <rect 
          x="20" 
          y="8" 
          width="8" 
          height="14" 
          rx="4" 
          fill="currentColor"
        />
        
        {/* Vertical line */}
        <line 
          x1="24" 
          y1="22" 
          x2="24" 
          y2="32" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"
          opacity="0.7"
        />
        
        {/* Base line */}
        <line 
          x1="19" 
          y1="32" 
          x2="29" 
          y2="32" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"
          opacity="0.7"
        />
        
        {/* Left wave */}
        <path 
          d="M12 18C12 18 10 20 10 22C10 24 12 26 12 26" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"
          opacity="0.5"
        />
        
        {/* Right wave */}
        <path 
          d="M36 18C36 18 38 20 38 22C38 24 36 26 36 26" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    ),
    label: 'Voice Recording'
  },
  // ... rest of tabs
    {
      id: 'soap',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M4 4H16V6H4V4ZM4 8H16V10H4V8ZM4 12H12V14H4V12Z" fill="currentColor"/>
        </svg>
      ),
      label: 'SOAP Generation'
    },
    {
      id: 'dashboard',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M12 6C12 7.1 11.1 8 10 8C8.9 8 8 7.1 8 6C8 4.9 8.9 4 10 4C11.1 4 12 4.9 12 6ZM4 18C4 15.79 7.58 14 10 14C12.42 14 16 15.79 16 18H4Z" fill="currentColor"/>
        </svg>
      ),
      label: 'Patient Dashboard'
    }
  ];

  return (
    <section className="app-showcase" id="app-showcase">
      <div className="showcase-container">
        <div className="section-header">
          <h2>
            See <span className="text-gradient">TECNOT</span> in Action
          </h2>
          <p>From recording to SOAP note — experience the complete workflow.</p>
        </div>

        <div className="tabs-wrapper">
          <div className="tabs">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                className={`tab ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="tab-content glass glow-border">
            {activeTab === 0 && (
              <div className="content-panel recording">
<div className="mic-circle animate-pulse">
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Microphone capsule */}
    <rect 
      x="20" 
      y="8" 
      width="8" 
      height="14" 
      rx="4" 
      fill="#4DB8A8"
    />
    
    {/* Vertical line */}
    <line 
      x1="24" 
      y1="22" 
      x2="24" 
      y2="32" 
      stroke="#4DB8A8" 
      strokeWidth="2" 
      strokeLinecap="round"
      opacity="0.7"
    />
    
    {/* Base line */}
    <line 
      x1="19" 
      y1="32" 
      x2="29" 
      y2="32" 
      stroke="#4DB8A8" 
      strokeWidth="2" 
      strokeLinecap="round"
      opacity="0.7"
    />
    
    {/* Left wave */}
    <path 
      d="M12 18C12 18 10 20 10 22C10 24 12 26 12 26" 
      stroke="#4DB8A8" 
      strokeWidth="2" 
      strokeLinecap="round"
      opacity="0.4"
    >
      <animate 
        attributeName="opacity" 
        values="0.2;0.6;0.2" 
        dur="2s" 
        repeatCount="indefinite"
      />
    </path>
    
    {/* Right wave */}
    <path 
      d="M36 18C36 18 38 20 38 22C38 24 36 26 36 26" 
      stroke="#4DB8A8" 
      strokeWidth="2" 
      strokeLinecap="round"
      opacity="0.4"
    >
      <animate 
        attributeName="opacity" 
        values="0.2;0.6;0.2" 
        dur="2s" 
        begin="0.3s"
        repeatCount="indefinite"
      />
    </path>
    
    {/* Outer left wave */}
    <path 
      d="M8 16C8 16 6 19 6 22C6 25 8 28 8 28" 
      stroke="#4DB8A8" 
      strokeWidth="1.5" 
      strokeLinecap="round"
      opacity="0.25"
    >
      <animate 
        attributeName="opacity" 
        values="0.1;0.4;0.1" 
        dur="2s" 
        begin="0.15s"
        repeatCount="indefinite"
      />
    </path>
    
    {/* Outer right wave */}
    <path 
      d="M40 16C40 16 42 19 42 22C42 25 40 28 40 28" 
      stroke="#4DB8A8" 
      strokeWidth="1.5" 
      strokeLinecap="round"
      opacity="0.25"
    >
      <animate 
        attributeName="opacity" 
        values="0.1;0.4;0.1" 
        dur="2s" 
        begin="0.45s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
</div>
                <div className="timer">00:04:32</div>
                <div className="waveform">
                  {[...Array(40)].map((_, i) => (
                    <span key={i} style={{ animationDelay: `${i * 0.05}s` }}></span>
                  ))}
                </div>
                <div className="status">Listening in <span className="highlight">Sinhala</span>...</div>
              </div>
            )}

            {activeTab === 1 && (
              <div className="content-panel soap">
                <div className="soap-section-item">
                  <div className="section-label">CHIEF COMPLAINT</div>
                  <p>Severe headache for 3 days, right-sided, throbbing</p>
                </div>
                <div className="soap-section-item">
                  <div className="section-label">SUBJECTIVE</div>
                  <p>Patient reports worsening headache over 3 days. Pain is throbbing, right-sided, rated 7/10. Associated with nausea...</p>
                </div>
                <div className="soap-section-item">
                  <div className="section-label">ASSESSMENT</div>
                  <p>Tension-type headache, rule out migraine</p>
                </div>
                <div className="soap-section-item">
                  <div className="section-label">PLAN</div>
                  <p>1. Paracetamol 500mg PRN 2. Rest and hydration 3. Follow-up in 1 week</p>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="content-panel dashboard">
                <div className="search-bar">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M9 2C5.13 2 2 5.13 2 9C2 12.87 5.13 16 9 16C10.57 16 12.03 15.43 13.19 14.47L17.71 19L19 17.71L14.47 13.19C15.43 12.03 16 10.57 16 9C16 5.13 12.87 2 9 2Z" fill="currentColor"/>
                  </svg>
                  <input type="text" placeholder="Search patients by name, MRN, complaint..." />
                </div>
                <div className="patient-list">
                  <div className="patient-card">
                    <div className="patient-info">
                      <h4>Malik Fernando</h4>
                      <span className="mrn">MRN: 1020536 · Severe headache</span>
                    </div>
                    <span className="date">03 Feb 2026</span>
                  </div>
                  <div className="patient-card">
                    <div className="patient-info">
                      <h4>Ayesha Perera</h4>
                      <span className="mrn">MRN: 1020537 · Chest pain</span>
                    </div>
                    <span className="date">02 Feb 2026</span>
                  </div>
                  <div className="patient-card">
                    <div className="patient-info">
                      <h4>Ruwan Silva</h4>
                      <span className="mrn">MRN: 1020538 · Fever and cough</span>
                    </div>
                    <span className="date">01 Feb 2026</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;