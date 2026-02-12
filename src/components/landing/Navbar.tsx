import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          TECNOT<span className="logo-dot"></span>
        </a>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#team">Meet Our Team</a>
          <a href="#doctors">For Doctors</a>
        </div>

        <div className="nav-actions">
          <a href="#login" className="nav-login">Login</a>
          <button className="nav-cta">Get Started</button>
        </div>

        <button 
          className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-links">
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
          <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)}>How It Works</a>
          <a href="#team" onClick={() => setIsMobileMenuOpen(false)}>Meet Our Team</a>
          <a href="#doctors" onClick={() => setIsMobileMenuOpen(false)}>For Doctors</a>
        </div>
        <div className="mobile-actions">
          <a href="#login" className="nav-login">Login</a>
          <button className="nav-cta">Get Started</button>
        </div>
      </div>
    </nav>
  );
}