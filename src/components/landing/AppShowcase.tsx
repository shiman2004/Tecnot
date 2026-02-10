import { useState } from 'react';
import './AppShowcase.css';

const AppShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'recording',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 3C8.34 3 7 4.34 7 6V10C7 11.66 8.34 13 10 13C11.66 13 13 11.66 13 10V6C13 4.34 11.66 3 10 3Z" fill="currentColor"/>
          <path d="M5 10C5 7.24 7.24 5 10 5C12.76 5 15 7.24 15 10V11H17V10C17 6.13 13.87 3 10 3C6.13 3 3 6.13 3 10V11H5V10Z" fill="currentColor"/>
        </svg>
      ),
      label: 'Voice Recording'
    },
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
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M24 6C20.68 6 18 8.68 18 12V24C18 27.32 20.68 30 24 30C27.32 30 30 27.32 30 24V12C30 8.68 27.32 6 24 6Z" fill="currentColor"/>
                    <path d="M12 24C12 17.37 17.37 12 24 12C30.63 12 36 17.37 36 24V27H42V24C42 14.06 33.94 6 24 6C14.06 6 6 14.06 6 24V27H12V24Z" fill="currentColor"/>
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