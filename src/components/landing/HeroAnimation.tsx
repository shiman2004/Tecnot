import React, { useState, useEffect } from 'react';
import { Mic, FileText, Sparkles, CheckCircle2, Zap } from 'lucide-react';
import './HeroAnimation.css';

export default function HeroAnimation() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-animation">
      
      {/* Step 0: Problem - MINIMALIST PREMIUM */}
      <div className={`anim-step ${step === 0 ? 'active' : ''}`}>
        <div className="problem-view">
          <div className="minimal-docs">
            <div className="doc-mini doc-1">
              <div className="doc-bar"></div>
              <div className="doc-bar"></div>
              <div className="doc-bar short"></div>
            </div>
            <div className="doc-mini doc-2">
              <div className="doc-bar"></div>
              <div className="doc-bar"></div>
              <div className="doc-bar short"></div>
            </div>
            <div className="doc-mini doc-3">
              <div className="doc-bar"></div>
              <div className="doc-bar"></div>
              <div className="doc-bar short"></div>
            </div>
          </div>

          <div className="problem-points">
            <div className="point-item">
              <div className="point-dot red"></div>
              <span>15 min per note</span>
            </div>
            <div className="point-item">
              <div className="point-dot red"></div>
              <span>Manual typing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Step 1: Voice - FLAT HEADER */}
      <div className={`anim-step ${step === 1 ? 'active' : ''}`}>
        <div className="voice-view">
          <div className="patient-flat">
            <div className="avatar-flat">MF</div>
            <div className="patient-flat-text">
              <div className="name-flat">Malik Fernando</div>
              <div className="meta-flat">Recording...</div>
            </div>
          </div>

          <div className="mic-container">
            <div className="mic-ripple"></div>
            <div className="mic-ripple"></div>
            <div className="mic-ripple"></div>
            <div className="mic-center">
              <Mic size={24} strokeWidth={2.5} />
            </div>
          </div>

          <div className="timer-big">02:34</div>

          <div className="wave-bars">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="bar" style={{ '--i': i } as React.CSSProperties} />
            ))}
          </div>
        </div>
      </div>

      {/* Step 2: AI */}
      <div className={`anim-step ${step === 2 ? 'active' : ''}`}>
        <div className="ai-view">
          <div className="ai-orb">
            <Sparkles size={32} />
          </div>
          <div className="ai-text">AI Processing...</div>
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>
      </div>

      {/* Step 3: SOAP - ICON-BASED */}
      <div className={`anim-step ${step === 3 ? 'active' : ''}`}>
        <div className="soap-view">
          <div className="soap-mini-card">
            <div className="soap-mini-header">
              <FileText size={16} />
              <span>SOAP Note</span>
              <div className="time-tag">
                <Zap size={10} />
                28s
              </div>
            </div>

            {[
              { l: 'S', c: '#3B82F6' },
              { l: 'O', c: '#8B5CF6' },
              { l: 'A', c: '#EC4899' },
              { l: 'P', c: '#10B981' },
            ].map((s, i) => (
              <div key={s.l} className="soap-mini-line" style={{ '--i': i } as React.CSSProperties}>
                <div className="letter-box" style={{ background: s.c }}>{s.l}</div>
                <div className="line-fill"></div>
                <CheckCircle2 size={14} />
              </div>
            ))}
          </div>

          <div className="success-points">
            <div className="point-item success">
              <div className="point-icon">
                <Zap size={14} />
              </div>
              <span>90% Faster</span>
            </div>
            <div className="point-item success">
              <div className="point-icon">
                <CheckCircle2 size={14} />
              </div>
              <span>98% Accurate</span>
            </div>
          </div>
        </div>
      </div>

      {/* PREMIUM Progress */}
      

    </div>
  );
}