import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink, ArrowUpRight, ShieldCheck } from 'lucide-react';
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
      <Ticker theme="lilac" customItems={footerTickerItems} speed="28s" />

      {/* Main Footer Content */}
      <div className="container" style={{ paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}
        >
          {/* Column 1: Direct Identity & Contact */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(186, 154, 253, 0.15)',
                  border: '1px solid #ba9afd',
                  color: '#ba9afd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.1rem'
                }}
              >
                HS
              </div>
              <div>
                <h3 style={{ color: '#ffffff', fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>
                  {personalInfo.name}
                </h3>
                <p style={{ color: '#ba9afd', fontSize: '0.85rem', fontWeight: 500, margin: 0 }}>
                  Shopify Developer &amp; Plus Specialist
                </p>
              </div>
            </div>

            <p style={{ color: '#c5b8df', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Specialized in high-conversion Shopify Plus storefronts, custom Remix apps, and edge checkout logic with 3+ years of verifiable results.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <a
                href={`mailto:${personalInfo.email}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#ffffff', fontSize: '0.92rem', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ba9afd'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}
              >
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ba9afd' }}>
                  <Mail size={16} />
                </div>
                {personalInfo.email}
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#ffffff', fontSize: '0.92rem', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ba9afd'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}
              >
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ba9afd' }}>
                  <Phone size={16} />
                </div>
                {personalInfo.phone}
              </a>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#c5b8df', fontSize: '0.92rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ba9afd' }}>
                  <MapPin size={16} />
                </div>
                {personalInfo.location}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '0.5px' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <Link to="/" style={{ color: '#c5b8df', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#ba9afd'} onMouseLeave={(e) => e.target.style.color = '#c5b8df'}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/website-portfolio" style={{ color: '#c5b8df', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#ba9afd'} onMouseLeave={(e) => e.target.style.color = '#c5b8df'}>
                  Website Portfolio
                </Link>
              </li>
              <li>
                <Link to="/services" style={{ color: '#c5b8df', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#ba9afd'} onMouseLeave={(e) => e.target.style.color = '#c5b8df'}>
                  Shopify Services
                </Link>
              </li>
              <li>
                <Link to="/approach" style={{ color: '#c5b8df', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#ba9afd'} onMouseLeave={(e) => e.target.style.color = '#c5b8df'}>
                  Development Approach
                </Link>
              </li>
              <li>
                <Link to="/aboutus" style={{ color: '#c5b8df', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#ba9afd'} onMouseLeave={(e) => e.target.style.color = '#c5b8df'}>
                  About Me &amp; Background
                </Link>
              </li>
              <li>
                <Link to="/planner" style={{ color: '#c5b8df', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#ba9afd'} onMouseLeave={(e) => e.target.style.color = '#c5b8df'}>
                  Project Planner
                </Link>
              </li>
              <li>
                <Link to="/contactus" style={{ color: '#c5b8df', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#ba9afd'} onMouseLeave={(e) => e.target.style.color = '#c5b8df'}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Specialized Capabilities */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '0.5px' }}>
              Specializations
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ color: '#c5b8df', fontSize: '0.92rem' }}>
                Shopify Plus Checkout Extensibility
              </li>
              <li style={{ color: '#c5b8df', fontSize: '0.92rem' }}>
                Shopify Functions (Delivery &amp; Payment)
              </li>
              <li style={{ color: '#c5b8df', fontSize: '0.92rem' }}>
                Remix &amp; GraphQL Custom Apps
              </li>
              <li style={{ color: '#c5b8df', fontSize: '0.92rem' }}>
                Admin UI Extensions (Polaris)
              </li>
              <li style={{ color: '#c5b8df', fontSize: '0.92rem' }}>
                Bespoke Shopify 2.0 Liquid Themes
              </li>
              <li style={{ color: '#c5b8df', fontSize: '0.92rem' }}>
                Core Web Vitals Speed (85+ Score)
              </li>
              <li style={{ color: '#c5b8df', fontSize: '0.92rem' }}>
                Real-Time Webhook Stock Sync
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Qualifications & Next Steps */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '0.5px' }}>
              Verified Credentials
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#c5b8df', fontSize: '0.88rem' }}>
                <ShieldCheck size={16} color="#ba9afd" />
                <span>Walmart Global Tech — SWE Certified</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#c5b8df', fontSize: '0.88rem' }}>
                <ShieldCheck size={16} color="#ba9afd" />
                <span>Scholarhat — Frontend Workshop</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#c5b8df', fontSize: '0.88rem' }}>
                <ShieldCheck size={16} color="#ba9afd" />
                <span>Scaler Academy — E-Commerce Platforms</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#c5b8df', fontSize: '0.88rem' }}>
                <ShieldCheck size={16} color="#ba9afd" />
                <span>BCA Graduate — Govt TRS College</span>
              </div>
            </div>

            <Link
              to="/planner"
              className="btn btn-lilac"
              style={{ width: '100%', fontSize: '0.9rem', padding: '0.75rem 1rem' }}
            >
              Start Project Planner
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Socials */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem'
          }}
        >
          <p style={{ color: '#9ca3af', fontSize: '0.88rem', margin: 0 }}>
            © {new Date().getFullYear()} Himanshu Soni. All rights reserved. Built with precision, performance &amp; clean code.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
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
                transition: 'background 0.2s, color 0.2s'
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
                transition: 'background 0.2s, color 0.2s'
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
