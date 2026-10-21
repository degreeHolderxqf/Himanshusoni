import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import Ticker from './Ticker';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const footerTickerItems = [
    "Shopify Plus Engineering",
    "Remix Full-Stack Apps",
    "Shopify Functions API",
    "Checkout Customization",
    "60+ Stores Shipped",
    "60% Order Processing Time Cut",
    "85+ Lighthouse Performance",
    "Webhook Architecture",
    "Liquid Theme Development",
    "Transparent Collaboration"
  ];

  return (
    <footer style={{ background: '#190c39', color: '#ffffff', position: 'relative' }}>
      {/* Top Lilac Marquee Ticker */}
      <Ticker variant="lilac" items={footerTickerItems} speed="24s" />

      {/* Main Footer Content */}
      <div className="container" style={{ paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3rem',
          marginBottom: '3.5rem'
        }}>
          {/* Column 1: Identity & Bio */}
          <div>
            <div className="brand-text-logo" style={{ color: '#ffffff', marginBottom: '1.25rem' }}>
              <span>HIMANSHU</span>
              <span style={{ color: '#ba9afd' }}>SONI</span>
            </div>
            <p style={{ color: '#b3b3b3', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Independent Freelance Shopify Developer with 8+ years of professional experience building high-converting Shopify Plus storefronts, custom Remix applications, and Core Web Vitals speed optimization.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <a
                href={`mailto:${personalInfo.email}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  color: '#ffffff',
                  fontSize: '0.88rem',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#ba9afd'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#ffffff'; }}
              >
                <Mail size={16} color="#ba9afd" />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  color: '#ffffff',
                  fontSize: '0.88rem',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#ba9afd'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#ffffff'; }}
              >
                <Phone size={16} color="#10b981" />
                <span>{personalInfo.phone}</span>
              </a>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                color: '#b3b3b3',
                fontSize: '0.88rem'
              }}>
                <MapPin size={16} color="#ba9afd" />
                <span>Indore / Dewas, MP, India</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 style={{
              color: '#ffffff',
              fontSize: '1.1rem',
              fontWeight: 700,
              marginBottom: '1.5rem',
              borderBottom: '2px solid #ba9afd',
              paddingBottom: '0.5rem',
              display: 'inline-block'
            }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <Link to="/" style={{ color: '#dddddd', fontSize: '0.92rem' }} onMouseEnter={(e) => { e.currentTarget.style.color = '#ba9afd'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#dddddd'; }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/website-portfolio" style={{ color: '#dddddd', fontSize: '0.92rem' }} onMouseEnter={(e) => { e.currentTarget.style.color = '#ba9afd'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#dddddd'; }}>
                  Website Portfolio
                </Link>
              </li>
              <li>
                <Link to="/services" style={{ color: '#dddddd', fontSize: '0.92rem' }} onMouseEnter={(e) => { e.currentTarget.style.color = '#ba9afd'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#dddddd'; }}>
                  Shopify Services
                </Link>
              </li>
              <li>
                <Link to="/approach" style={{ color: '#dddddd', fontSize: '0.92rem' }} onMouseEnter={(e) => { e.currentTarget.style.color = '#ba9afd'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#dddddd'; }}>
                  Approach
                </Link>
              </li>
              <li>
                <Link to="/aboutus" style={{ color: '#dddddd', fontSize: '0.92rem' }} onMouseEnter={(e) => { e.currentTarget.style.color = '#ba9afd'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#dddddd'; }}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/planner" style={{ color: '#dddddd', fontSize: '0.92rem' }} onMouseEnter={(e) => { e.currentTarget.style.color = '#ba9afd'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#dddddd'; }}>
                  Project Planner
                </Link>
              </li>
              <li>
                <Link to="/contactus" style={{ color: '#dddddd', fontSize: '0.92rem' }} onMouseEnter={(e) => { e.currentTarget.style.color = '#ba9afd'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#dddddd'; }}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Shopify Specializations */}
          <div>
            <h4 style={{
              color: '#ffffff',
              fontSize: '1.1rem',
              fontWeight: 700,
              marginBottom: '1.5rem',
              borderBottom: '2px solid #ba9afd',
              paddingBottom: '0.5rem',
              display: 'inline-block'
            }}>
              Capabilities
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ color: '#dddddd', fontSize: '0.92rem' }}>Shopify Plus &amp; Functions API</li>
              <li style={{ color: '#dddddd', fontSize: '0.92rem' }}>Custom Checkout Extensibility</li>
              <li style={{ color: '#dddddd', fontSize: '0.92rem' }}>Remix Full-Stack Apps</li>
              <li style={{ color: '#dddddd', fontSize: '0.92rem' }}>Custom Liquid 2.0 Themes</li>
              <li style={{ color: '#dddddd', fontSize: '0.92rem' }}>Core Web Vitals (40 to 85+)</li>
              <li style={{ color: '#dddddd', fontSize: '0.92rem' }}>Warehouse Print Automation</li>
              <li style={{ color: '#dddddd', fontSize: '0.92rem' }}>Real-Time Inventory Webhooks</li>
            </ul>
          </div>

          {/* Column 4: Start a Project Box */}
          <div>
            <h4 style={{
              color: '#ffffff',
              fontSize: '1.1rem',
              fontWeight: 700,
              marginBottom: '1.5rem',
              borderBottom: '2px solid #ba9afd',
              paddingBottom: '0.5rem',
              display: 'inline-block'
            }}>
              Start a Project
            </h4>
            <p style={{ color: '#b3b3b3', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Planning a new Shopify build or need an expert audit for an existing store? Complete the 5-step project planner.
            </p>
            <Link
              to="/planner"
              className="btn btn-lilac"
              style={{ width: '100%', padding: '0.75rem 1rem', fontSize: '0.9rem' }}
            >
              Start Project Planner <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem'
        }}>
          <p style={{ color: '#9ca3af', fontSize: '0.88rem', margin: 0 }}>
            © {new Date().getFullYear()} Himanshu Soni. All rights reserved. Built with precision, performance &amp; clean code.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#ba9afd'; e.currentTarget.style.color = '#190c39'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; e.currentTarget.style.color = '#ffffff'; }}
            >
              <GithubIcon size={18} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#ba9afd'; e.currentTarget.style.color = '#190c39'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; e.currentTarget.style.color = '#ffffff'; }}
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
