import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#" className="logo">
          TECNOT<span className="logo-dot">●</span>
        </a>

        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#team">Meet Our Team</a>
          <a href="#for-doctors">For Doctors</a>
        </div>

        <div className="nav-actions">
          <button className="btn-ghost">Login</button>
          <button className="btn-primary">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;