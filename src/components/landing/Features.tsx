import { useState, useEffect } from 'react';
import './Features.css';

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const features = [
    {
      emoji: '🎙️',
      title: 'Voice-First',
      subtitle: 'Documentation',
      tagline: 'SPEAK. WE WRITE.',
      impact: 'Capture consultations in Sinhala, Tamil, or English.',
      detail: 'Medical-grade AI transcription while you focus on healing.',
      metric: '98%',
      metricLabel: 'Accuracy',
      color: '#4DB8A8',
      accentColor: '#6dd5c3'
    },
    {
      emoji: '🧠',
      title: 'AI Clinical',
      subtitle: 'Intelligence',
      tagline: 'THINK. WE STRUCTURE.',
      impact: 'Extract complaints and generate complete SOAP notes.',
      detail: 'No templates. No clicking. Just intelligence.',
      metric: '<30s',
      metricLabel: 'Per Note',
      color: '#6dd5c3',
      accentColor: '#4DB8A8'
    },
    {
      emoji: '🔍',
      title: 'Smart Patient',
      subtitle: 'Discovery',
      tagline: 'SEARCH. INSTANTLY FIND.',
      impact: 'Find anyone by name, MRN, symptoms, or history.',
      detail: 'Your entire practice, instantly searchable.',
      metric: '0.3s',
      metricLabel: 'Search',
      color: '#4DB8A8',
      accentColor: '#6dd5c3'
    },
    {
      emoji: '✍️',
      title: 'Full Clinical',
      subtitle: 'Control',
      tagline: 'REVIEW. REFINE. SAVE.',
      impact: 'Edit every SOAP section with complete freedom.',
      detail: 'Your clinical judgment, enhanced by AI.',
      metric: '100%',
      metricLabel: 'Editable',
      color: '#6dd5c3',
      accentColor: '#4DB8A8'
    },
    {
      emoji: '💊',
      title: 'Structured',
      subtitle: 'Order System',
      tagline: 'PRESCRIBE. ORGANIZED.',
      impact: 'Labs, radiology, meds, procedures—all separated.',
      detail: 'Clinical clarity, automated.',
      metric: '5',
      metricLabel: 'Order Types',
      color: '#4DB8A8',
      accentColor: '#6dd5c3'
    },
    {
      emoji: '📊',
      title: 'Complete Patient',
      subtitle: 'Timeline',
      tagline: 'HISTORY. ACCESSIBLE.',
      impact: 'Every consultation, every note, instantly retrievable.',
      detail: 'Chronics, allergies, medications—all there.',
      metric: '∞',
      metricLabel: 'Records',
      color: '#6dd5c3',
      accentColor: '#4DB8A8'
    }
  ];

  const changeFeature = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeFeature((activeIndex + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, features.length]);

  const current = features[activeIndex];

  return (
    <section className="features-google" id="features">
      <div className="features-wrapper">
        {/* Ambient Background */}
        <div 
          className="ambient-glow"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${current.color}20 0%, transparent 70%)`
          }}
        />

        {/* Header */}
        <div className="google-header">
          <div className="badge-pill">
            <span className="pulse-indicator" />
            Built for Clinicians
          </div>
          <h2 className="google-title">
            Everything You Need,<br />
            <span style={{ color: current.color }}>Nothing You Don't</span>
          </h2>
        </div>

        {/* Main Stage */}
        <div className="feature-stage">
          {/* Left: Visual */}
          <div className={`stage-visual ${isTransitioning ? 'transitioning' : ''}`}>
            <div 
              className="mega-emoji-container"
              style={{
                boxShadow: `0 0 100px ${current.color}40, 0 30px 60px rgba(0,0,0,0.4)`
              }}
            >
              <div 
                className="emoji-glow"
                style={{ background: `radial-gradient(circle, ${current.color}30, transparent 70%)` }}
              />
              <span className="mega-emoji">{current.emoji}</span>
            </div>

            <div className="floating-particles">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="particle"
                  style={{
                    background: current.accentColor,
                    animationDelay: `${i * 0.3}s`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div className={`stage-content ${isTransitioning ? 'transitioning' : ''}`}>
            <div className="content-tagline" style={{ color: current.color }}>
              {current.tagline}
            </div>

            <h3 className="content-title">
              {current.title}<br />
              <span style={{ color: current.accentColor }}>{current.subtitle}</span>
            </h3>

            <p className="content-impact">{current.impact}</p>
            <p className="content-detail">{current.detail}</p>

            <div 
              className="metric-showcase"
              style={{ 
                borderColor: current.color,
                background: `linear-gradient(135deg, ${current.color}10, transparent)`
              }}
            >
              <div className="metric-value" style={{ color: current.color }}>
                {current.metric}
              </div>
              <div className="metric-label">{current.metricLabel}</div>
              <div 
                className="metric-accent"
                style={{ background: current.color }}
              />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="google-nav">
          <div className="nav-track">
            {features.map((feature, index) => (
              <button
                key={index}
                className={`nav-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => changeFeature(index)}
              >
                <span className="nav-emoji">{feature.emoji}</span>
                <span className="nav-label">{feature.title}</span>
                {activeIndex === index && (
                  <div 
                    className="active-indicator"
                    style={{ background: current.color }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;