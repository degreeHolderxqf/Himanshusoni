import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Layers, 
  Code2, 
  Gauge, 
  Cpu, 
  Link2, 
  Zap, 
  CheckCircle2,
  Search,
  Calculator
} from 'lucide-react';
import Ticker from '../components/Ticker';
import { servicesData, tickerItems } from '../data/portfolioData';

export default function ServicesPage() {
  return (
    <div className="services-page-wrapper">
      {/* ============================================================== */}
      {/* SIGNATURE SUBPAGE DARK HERO BANNER (PRIYA MATCH)               */}
      {/* ============================================================== */}
      <section className="subpage-hero-banner">
        <div className="container">
          <span className="hero-category">SERVICES</span>
          <span className="hero-tagline">Shopify Development &amp; Technical Capabilities</span>
          <h1 className="hero-headline">
            From bespoke Shopify 2.0 themes to complex Remix apps and custom checkout functions, here is how I help merchants solve intricate technical challenges.
          </h1>
        </div>
      </section>

      {/* ============================================================== */}
      {/* DETAILED SERVICES GRID ON LIGHT BACKGROUND                     */}
      {/* ============================================================== */}
      <section className="section" style={{ background: '#fafafa' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '2rem'
          }}>
            {servicesData.map((svc) => (
              <div 
                key={svc.id}
                className="service-box"
              >
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem'
                  }}>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--color-plum)',
                      background: 'rgba(186, 154, 253, 0.15)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '999px'
                    }}>
                      {svc.tagline}
                    </span>

                    <div className="service-icon-wrap" style={{ margin: 0, width: '42px', height: '42px' }}>
                      {svc.icon === 'layers' && <Layers size={20} />}
                      {svc.icon === 'app' && <Cpu size={20} />}
                      {svc.icon === 'code' && <Code2 size={20} />}
                      {svc.icon === 'gauge' && <Gauge size={20} />}
                      {svc.icon === 'link' && <Link2 size={20} />}
                      {svc.icon === 'refresh' && <Zap size={20} />}
                      {svc.icon === 'search' && <Search size={20} />}
                      {svc.icon === 'calculator' && <Calculator size={20} />}
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', color: 'var(--color-deep-purple)', marginBottom: '0.85rem' }}>
                    {svc.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: 'var(--color-text-body)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                    {svc.description}
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {svc.capabilities.map((cap, cIdx) => (
                      <li key={cIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--color-text-body)', lineHeight: 1.4 }}>
                        <CheckCircle2 size={16} color="var(--color-plum)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid #f1f5f9' }}>
                  <Link 
                    to="/planner"
                    className="btn btn-dark"
                    style={{ width: '100%', padding: '0.7rem', fontSize: '0.88rem' }}
                  >
                    Configure in Planner <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Ticker */}
      <Ticker items={tickerItems} variant="dark" />
    </div>
  );
}
