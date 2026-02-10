
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import AppShowcase from '../components/landing/AppShowcase';
import Features from '../components/landing/Features';
import HowItWorks from '../components/landing/HowItWorks';
import Team from '../components/landing/Team';
import TrustSection from '../components/landing/TrustSection';
import CTAFooter from '../components/landing/CTAFooter';

const Index = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <AppShowcase />
      <Features />
      <HowItWorks />
      <Team />
      <TrustSection />
      <CTAFooter />
    </div>
  );
};

export default Index;