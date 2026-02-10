
import './TrustSection.css';

const TrustSection = () => {
  return (
    <section className="trust-section" id="for-doctors">
      <div className="trust-container">
        <div className="section-header">
          <h2>
            Built for <span className="text-gradient">Sri Lankan Doctors</span>
          </h2>
          <p>Designed from the ground up for the way you practice medicine.</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card glass">
            <div className="stat-value">40%</div>
            <div className="stat-label">Time Saved on Documentation</div>
          </div>
          <div className="stat-card glass">
            <div className="stat-value">&lt;30s</div>
            <div className="stat-label">Per SOAP Note Generation</div>
          </div>
          <div className="stat-card glass">
            <div className="stat-value">3</div>
            <div className="stat-label">Languages Supported</div>
          </div>
        </div>

        <div className="trust-badges">
          <div className="badge-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>Data Privacy First</span>
          </div>
          <div className="badge-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 12L10.5 14.5L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Sinhala · Tamil · English</span>
          </div>
          <div className="badge-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Real-Time Processing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;