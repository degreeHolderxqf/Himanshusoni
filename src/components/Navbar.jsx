import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ShoppingBag } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('none');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let lastScroll = window.pageYOffset;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 10) {
        setIsScrolled(false);
        setScrollDirection('none');
      } else {
        setIsScrolled(true);
        if (currentScroll > lastScroll && currentScroll > 80) {
          // Scrolling down
          setScrollDirection('down');
        } else if (currentScroll < lastScroll) {
          // Scrolling up
          setScrollDirection('up');
        }
      }
      lastScroll = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route transition
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/website-portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Approach', path: '/approach' },
    { name: 'About Me', path: '/aboutus' },
    { name: 'Planner', path: '/planner' },
    { name: 'Contact', path: '/contactus' }
  ];

  const headerClass = `scroll-header ${isScrolled ? 'stuck' : ''} ${
    scrollDirection === 'down' ? 'scroll-head-down' : ''
  } ${scrollDirection === 'up' ? 'scroll-head-up' : ''}`;

  return (
    <header className={headerClass}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 2rem' }}>
        {/* Brand Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #190c39 0%, #4e1870 100%)',
              color: '#ba9afd',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(25, 12, 57, 0.25)',
              fontWeight: 800,
              fontSize: '1.1rem',
              letterSpacing: '-0.5px'
            }}
          >
            HS
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-headings)', fontWeight: 700, fontSize: '1.2rem', color: '#190c39', letterSpacing: '-0.3px', lineHeight: 1.1 }}>
              {personalInfo.name}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.74rem', color: '#6b7280', fontWeight: 600, letterSpacing: '0.3px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
              Shopify &amp; Remix Developer
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Header CTA Button */}
        <div style={{ display: 'none', alignItems: 'center', gap: '1rem' }} className="desktop-cta">
          <Link to="/planner" className="btn btn-secondary" style={{ padding: '0.65rem 1.25rem', fontSize: '0.88rem' }}>
            <ShoppingBag size={16} />
            Planner
          </Link>
          <Link to="/contactus" className="btn btn-primary" style={{ padding: '0.65rem 1.35rem', fontSize: '0.88rem' }}>
            Let's Talk
            <ArrowUpRight size={16} className="btn-icon" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'none',
            border: 'none',
            color: '#190c39',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '73px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(25, 12, 57, 0.98)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            flexDirection: 'column',
            padding: '2.5rem 2rem',
            zIndex: 9999,
            overflowY: 'auto',
            animation: 'fadeIn 0.25s ease'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  style={{
                    fontFamily: 'var(--font-headings)',
                    fontSize: '1.35rem',
                    fontWeight: 600,
                    color: isActive ? '#ba9afd' : '#ffffff',
                    paddingBottom: '0.5rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  {link.name}
                  {isActive && <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ba9afd' }}></span>}
                </Link>
              );
            })}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: 'auto' }}>
            <Link to="/planner" className="btn btn-lilac" style={{ width: '100%', justifyContent: 'center' }}>
              Shopify Project Planner
            </Link>
            <Link to="/contactus" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', border: '1px solid #ba9afd' }}>
              Let's Discuss Your Project
            </Link>
          </div>
        </div>
      )}

      {/* Inline styles for responsive layout switching */}
      <style>{`
        @media (min-width: 960px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}
