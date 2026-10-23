import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [portfolioDropdown, setPortfolioDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [scrollState, setScrollState] = useState({ stuck: false, scrollDown: false });
  const location = useLocation();

  // Scroll direction detection matching Priya's .scroll-header behavior
  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      if (currentScrollY <= 20) {
        setScrollState({ stuck: false, scrollDown: false });
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setScrollState({ stuck: true, scrollDown: true });
      } else {
        // Scrolling up
        setScrollState({ stuck: true, scrollDown: false });
      }

      lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setPortfolioDropdown(false);
    setServicesDropdown(false);
  }, [location.pathname]);

  const headerClass = `scroll-header ${scrollState.stuck ? 'stuck' : ''} ${
    scrollState.scrollDown ? 'scroll-head-down' : scrollState.stuck ? 'scroll-head-up' : ''
  }`;

  return (
    <header 
      className={headerClass} 
      style={{
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        background: '#ffffff',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
        zIndex: 1000
      }}
    >
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
      }}>
        {/* Brand Text Logo - Exact 2-Line Bold Uppercase matching priyasinghi.com */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="brand-text-logo">
            <span>HIMANSHU</span>
            <span>SONI</span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav 
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '2.25rem'
          }}
          className="desktop-nav-menu"
        >
          {/* Portfolio with dropdown */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setPortfolioDropdown(true)}
            onMouseLeave={() => setPortfolioDropdown(false)}
          >
            <Link 
              to="/website-portfolio" 
              className={`nav-link ${location.pathname.startsWith('/website-portfolio') ? 'active' : ''}`}
            >
              PORTFOLIO <ChevronDown size={14} />
            </Link>

            {portfolioDropdown && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: '0',
                background: '#ffffff',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                borderRadius: '12px',
                padding: '0.75rem 0',
                minWidth: '220px',
                border: '1px solid rgba(0,0,0,0.06)',
                zIndex: 100
              }}>
                <Link 
                  to="/website-portfolio"
                  style={{
                    display: 'block',
                    padding: '0.6rem 1.25rem',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: 'var(--color-deep-purple)'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(186,154,253,0.12)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                >
                  Website Portfolio
                </Link>
                <Link 
                  to="/website-portfolio"
                  style={{
                    display: 'block',
                    padding: '0.6rem 1.25rem',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: 'var(--color-deep-purple)'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(186,154,253,0.12)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                >
                  Shopify Plus Case Studies
                </Link>
              </div>
            )}
          </div>

          {/* Services with dropdown */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <Link 
              to="/services" 
              className={`nav-link ${location.pathname.startsWith('/services') ? 'active' : ''}`}
            >
              SERVICES <ChevronDown size={14} />
            </Link>

            {servicesDropdown && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: '0',
                background: '#ffffff',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                borderRadius: '12px',
                padding: '0.75rem 0',
                minWidth: '240px',
                border: '1px solid rgba(0,0,0,0.06)',
                zIndex: 100
              }}>
                <Link 
                  to="/services"
                  style={{
                    display: 'block',
                    padding: '0.6rem 1.25rem',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: 'var(--color-deep-purple)'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(186,154,253,0.12)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                >
                  Shopify Plus & Checkout
                </Link>
                <Link 
                  to="/services"
                  style={{
                    display: 'block',
                    padding: '0.6rem 1.25rem',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: 'var(--color-deep-purple)'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(186,154,253,0.12)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                >
                  Custom Liquid Themes
                </Link>
                <Link 
                  to="/services"
                  style={{
                    display: 'block',
                    padding: '0.6rem 1.25rem',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: 'var(--color-deep-purple)'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(186,154,253,0.12)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                >
                  Custom Remix Apps
                </Link>
                <Link 
                  to="/services"
                  style={{
                    display: 'block',
                    padding: '0.6rem 1.25rem',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: 'var(--color-deep-purple)'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(186,154,253,0.12)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                >
                  Speed & Core Web Vitals
                </Link>
              </div>
            )}
          </div>
 

          <Link 
            to="/aboutus" 
            className={`nav-link ${location.pathname.startsWith('/aboutus') ? 'active' : ''}`}
          >
            ABOUT
          </Link>

          <Link 
            to="/planner" 
            className={`nav-link ${location.pathname.startsWith('/planner') ? 'active' : ''}`}
          >
            PLANNER
          </Link>

          <Link 
            to="/contactus" 
            className={`nav-link ${location.pathname.startsWith('/contactus') ? 'active' : ''}`}
          >
            CONTACT
          </Link>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          aria-label="Toggle Navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'none',
            border: 'none',
            color: 'var(--color-deep-purple)',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
          className="mobile-nav-toggle"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '80px',
          left: 0,
          right: 0,
          bottom: 0,
          background: '#ffffff',
          zIndex: 999,
          padding: '2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          overflowY: 'auto'
        }}>
          <Link 
            to="/" 
            style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-deep-purple)' }}
          >
            HOME
          </Link>
          <Link 
            to="/website-portfolio" 
            style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-deep-purple)' }}
          >
            PORTFOLIO
          </Link>
          <Link 
            to="/services" 
            style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-deep-purple)' }}
          >
            SERVICES
          </Link>
          <Link 
            to="/approach" 
            style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-deep-purple)' }}
          >
            APPROACH
          </Link>
          <Link 
            to="/aboutus" 
            style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-deep-purple)' }}
          >
            ABOUT
          </Link>
          <Link 
            to="/planner" 
            style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-deep-purple)' }}
          >
            PROJECT PLANNER
          </Link>
          <Link 
            to="/contactus" 
            style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-deep-purple)' }}
          >
            CONTACT
          </Link>

          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Link to="/contactus" className="btn btn-dark" style={{ width: '100%' }}>
              Lets Talk <ArrowRight size={16} />
            </Link>
            <Link to="/planner" className="btn btn-lilac" style={{ width: '100%' }}>
              Start Project Planner
            </Link>
          </div>
        </div>
      )}

      {/* Media query styling for desktop vs mobile toggle */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav-menu {
            display: flex !important;
          }
          .mobile-nav-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}