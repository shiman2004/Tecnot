import { useState, useEffect } from 'react';
import './Features.css';

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      id: '001',
      category: 'Clinical Documentation',
      title: 'Voice-to-Text Transcription',
      description: 'Medical-grade speech recognition in Sinhala, Tamil, and English. Automatically captures patient consultations with 98% clinical accuracy. HIPAA-compliant security standards.',
      metrics: [
        { label: 'Accuracy Rate', value: '98%' },
        { label: 'Languages', value: '3' },
        { label: 'Processing', value: 'Real-time' }
      ]
    },
    {
      id: '002',
      category: 'Clinical Intelligence',
      title: 'Automated SOAP Note Generation',
      description: 'AI-powered extraction of chief complaints, history of present illness, assessment, and treatment plans. Generates structured clinical notes in under 30 seconds.',
      metrics: [
        { label: 'Generation Time', value: '<30s' },
        { label: 'Structure', value: 'SOAP' },
        { label: 'Accuracy', value: '95%' }
      ]
    },
    {
      id: '003',
      category: 'Patient Management',
      title: 'Advanced Patient Search',
      description: 'Retrieve patient records by MRN, name, contact information, symptoms, or historical chief complaints. Sub-second search across entire patient database.',
      metrics: [
        { label: 'Search Speed', value: '0.3s' },
        { label: 'Search Fields', value: '15+' },
        { label: 'Records', value: 'Unlimited' }
      ]
    },
    {
      id: '004',
      category: 'Clinical Workflow',
      title: 'Customizable Documentation',
      description: 'Full editing capabilities for all clinical sections. Add diagnostic orders, prescriptions, procedures, and clinical notes. Maintains complete audit trail.',
      metrics: [
        { label: 'Editability', value: '100%' },
        { label: 'Audit Trail', value: 'Complete' },
        { label: 'Override', value: 'Allowed' }
      ]
    },
    {
      id: '005',
      category: 'Order Management',
      title: 'Structured Clinical Orders',
      description: 'Separate categorization for laboratory tests, radiology studies, medications, procedures, and nursing instructions. Automated order routing and tracking.',
      metrics: [
        { label: 'Categories', value: '5' },
        { label: 'Auto-Route', value: 'Yes' },
        { label: 'Integration', value: 'HL7' }
      ]
    },
    {
      id: '006',
      category: 'Medical Records',
      title: 'Comprehensive EHR Storage',
      description: 'Permanent storage of all clinical encounters, prescriptions, and diagnostic results. Full-text search across historical records. Complete medical timeline visualization.',
      metrics: [
        { label: 'Storage', value: 'Unlimited' },
        { label: 'Retention', value: 'Permanent' },
        { label: 'Compliance', value: 'Full' }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="features-medical" id="features">
      <div className="medical-container">
        {/* Header */}
        <div className="medical-header">
          <div className="header-meta">
            <span className="meta-line"></span>
            <span className="meta-text">Clinical Platform Capabilities</span>
          </div>
          <h2>Evidence-Based Features</h2>
          <p className="header-description">
            Comprehensive clinical tools designed for modern medical practice in Sri Lanka.
          </p>
        </div>

        {/* Features List */}
        <div className="features-list">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`feature-medical ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="feature-left">
                <div className="feature-id">{feature.id}</div>
                <div className="feature-category">{feature.category}</div>
              </div>

              <div className="feature-right">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>

                <div className="feature-metrics">
                  {feature.metrics.map((metric, idx) => (
                    <div key={idx} className="metric-item">
                      <div className="metric-value">{metric.value}</div>
                      <div className="metric-label">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="feature-indicator">
                <div className="indicator-line"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;