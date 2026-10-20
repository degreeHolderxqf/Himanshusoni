import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Code2, 
  Gauge, 
  Cpu, 
  Link2, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  ChevronRight 
} from 'lucide-react';
import Ticker from '../components/Ticker';
import { servicesData, tickerItems, verifiedMetrics } from '../data/portfolioData';

export default function ServicesPage() {
  return (
    <div className="services-page-wrapper">
      {/* ============================================================== */}
      {/* SERVICES HERO BANNER                                          */}
      {/* ============================================================== */}
      <section style={{
        padding: '5rem 1.5rem 3.5rem',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(186, 154, 253, 0.2) 0%, rgba(25, 12, 57, 0) 70%), var(--color-bg)',
        borderBottom: '1px solid var(--color-border)',
        position: 'relative'
      }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{
            fontSize: '0.82rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--color-primary-lilac)',
            display: 'inline-block',
            marginBottom: '0.75rem',
            background: 'rgba(186, 154, 253, 0.1)',
            padding: '0.35rem 1rem',
            borderRadius: '999px',
            border: '1px solid rgba(186, 154, 253, 0.25)'
          }}>
            Shopify Development Capabilities
          </span>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
            fontWeight: 800,
            color: 'var(--color-white)',
            lineHeight: 1.15,
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em'
          }}>
            Specialized <span className="gradient-text">Shopify Services</span>
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
            color: 'var(--color-text-muted)',
            lineHeight: 1.6,
            maxWidth: '680px',
            margin: '0 auto 2rem'
          }}>
            From bespoke Shopify 2.0 themes to complex Remix apps and custom checkout functions, here is how I help merchants solve intricate technical challenges.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/planner" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={16} /> Plan a Service
            </Link>
            <Link to="/contactus" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Request Custom Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* DETAILED SERVICES CARDS                                       */}
      {/* ============================================================== */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '2rem'
          }}>
            {servicesData.map((svc) => (
              <div 
                key={svc.id}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%'
                }}
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
                      color: 'var(--color-primary-lilac)',
                      background: 'rgba(186, 154, 253, 0.1)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '999px',
                      border: '1px solid rgba(186, 154, 253, 0.2)'
                    }}>
                      {svc.tagline}
                    </span>

                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(186, 154, 253, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-primary-lilac)'
                    }}>
                      {svc.icon === 'layers' && <Layers size={20} />}
                      {svc.icon === 'app' && <Cpu size={20} />}
                      {svc.icon === 'code' && <Code2 size={20} />}
                      {svc.icon === 'gauge' && <Gauge size={20} />}
                      {svc.icon === 'link' && <Link2 size={20} />}
                      {svc.icon === 'refresh' && <Zap size={20} />}
                    </div>
                  </div>

                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: 'var(--color-white)',
                    marginBottom: '0.85rem',
                    lineHeight: 1.3
                  }}>
                    {svc.title}
                  </h3>

                  <p style={{
                    fontSize: '0.92rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem'
                  }}>
                    {svc.description}
                  </p>

                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.6rem'
                  }}>
                    {svc.capabilities.map((cap, cIdx) => (
                      <li key={cIdx} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.6rem',
                        fontSize: '0.85rem',
                        color: 'var(--color-text)',
                        lineHeight: 1.4
                      }}>
                        <CheckCircle2 size={16} color="var(--color-primary-lilac)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <Link 
                    to="/planner"
                    className="btn btn-secondary"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      width: '100%',
                      padding: '0.75rem',
                      fontSize: '0.9rem'
                    }}
                  >
                    Configure in Planner <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lilac Ticker */}
      <Ticker items={tickerItems} variant="lilac" />
    </div>
  );
}
