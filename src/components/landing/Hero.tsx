import { Zap, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroAnimation from './HeroAnimation';
import Counter from './Counter';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      {/* Premium Background */}
      <div className="hero-bg">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="hero-container">
        {/* Left: Content */}
        <div className="hero-content">
          <div className="badge">
            <span className="badge-dot"></span>
            <span>AI-Powered Clinical Scribe</span>
          </div>

          <h1>
            Stop Writing.<br />
            <span className="text-gradient">Start Healing.</span>
          </h1>

          <p className="hero-subtitle">
            TECNOT listens to your consultations in Sinhala, Tamil, or English and 
            generates structured SOAP notes in seconds — so you can focus on 
            what matters most.
          </p>

          <div className="hero-actions">
            <button className="btn-cta">
              <Zap size={20} />
              Start Free Trial
            </button>
            <button className="btn-secondary">
              <Play size={18} />
              Watch Demo
            </button>
          </div>

          <motion.div 
            className="stats-bar"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="stat-animated">
              <div className="stat-number-wrapper">
                <Counter
                  value={30}
                  places={[10, 1]}
                  fontSize={40}
                  padding={0}
                  gap={2}
                  horizontalPadding={0}
                  textColor="#0D9488"
                  fontWeight={900}
                  gradientFrom="transparent"
                  gradientTo="transparent"
                  gradientHeight={0}
                />
                <span style={{ 
                  fontSize: '40px', 
                  fontWeight: 900, 
                  color: '#0D9488' 
                }}>s</span>
              </div>
              <span className="stat-text">SOAP Notes</span>
            </div>
            
            <div className="stat-divider"></div>
            
            <div className="stat-animated">
              <Counter
                value={3}
                places={[1]}
                fontSize={40}
                padding={0}
                gap={2}
                horizontalPadding={0}
                textColor="#0D9488"
                fontWeight={900}
                gradientFrom="transparent"
                gradientTo="transparent"
                gradientHeight={0}
              />
              <span className="stat-text">Languages</span>
            </div>
            
            <div className="stat-divider"></div>
            
            <div className="stat-animated">
              <div className="stat-number-wrapper">
                <Counter
                  value={98}
                  places={[10, 1]}
                  fontSize={40}
                  padding={0}
                  gap={2}
                  horizontalPadding={0}
                  textColor="#0D9488"
                  fontWeight={900}
                  gradientFrom="transparent"
                  gradientTo="transparent"
                  gradientHeight={0}
                />
                <span style={{ 
                  fontSize: '40px', 
                  fontWeight: 900, 
                  color: '#0D9488' 
                }}>%</span>
              </div>
              <span className="stat-text">Accuracy</span>
            </div>
          </motion.div>
        </div>

        {/* Right: Animation */}
        <div className="hero-visual">
          <HeroAnimation />
        </div>
      </div>
    </section>
  );
}