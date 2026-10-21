import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Ticker from '../components/Ticker';
import { approachStages, tickerItems } from '../data/portfolioData';

export default function ApproachPage() {
  return (
    <div className="approach-page-wrapper">
      {/* ============================================================== */}
      {/* SIGNATURE SUBPAGE DARK HERO BANNER (PRIYA MATCH)               */}
      {/* ============================================================== */}
      <section className="subpage-hero-banner">
        <div className="container">
          <span className="hero-category">APPROACH &amp; METHODOLOGY</span>
          <h1 className="hero-headline" style={{ marginBottom: '0.75rem' }}>
            My Shopify Development Process &amp; Engineering Workflow
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', color: '#e5e7eb', lineHeight: 1.6, maxWidth: '850px', margin: 0 }}>
            Architecture-driven engineering, forensic store audits, and zero-downtime execution. A clear 6-phase development workflow that protects live revenue and guarantees high-converting storefronts.
          </p>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6-PHASE METHODOLOGY STAGE CARDS ON LIGHT BACKGROUND            */}
      {/* ============================================================== */}
      <section className="section" style={{ background: '#fafafa' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              color: 'var(--color-deep-purple)',
              fontWeight: 700,
              marginBottom: '0.75rem'
            }}>
              My 6-Phase Development Workflow
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-body)' }}>
              From initial technical discovery to post-launch merchant handover, every milestone is structured, transparent, and tested.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {approachStages.map((phase) => (
              <div
                key={phase.step}
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                  padding: '2.5rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.2s ease, border-color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = phase.color;
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Big Step Number Watermark */}
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '15px',
                  fontSize: '6rem',
                  fontWeight: 900,
                  color: 'rgba(0, 0, 0, 0.03)',
                  lineHeight: 1,
                  userSelect: 'none',
                  pointerEvents: 'none'
                }}>
                  {phase.step}
                </div>

                {/* Header row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '16px',
                    background: `${phase.color}15`,
                    border: `1.5px solid ${phase.color}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: phase.color,
                    flexShrink: 0
                  }}>
                    {phase.step}
                  </div>

                  <div>
                    <span style={{
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: phase.color
                    }}>
                      {phase.subtitle}
                    </span>
                    <h3 style={{
                      fontSize: 'clamp(1.35rem, 2.2vw, 1.75rem)',
                      fontWeight: 800,
                      color: 'var(--color-deep-purple)',
                      margin: '0.2rem 0 0'
                    }}>
                      {phase.name}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p style={{
                  fontSize: '1rem',
                  color: 'var(--color-text-body)',
                  lineHeight: 1.7,
                  marginBottom: '1.75rem'
                }}>
                  {phase.description}
                </p>

                {/* Deliverables Checklist Box */}
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  border: '1px solid #eef0f3'
                }}>
                  <h4 style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-deep-purple)',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <CheckCircle2 size={16} color={phase.color} /> Key Deliverables &amp; Milestones
                  </h4>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '0.75rem'
                  }}>
                    {phase.deliverables.map((item, dIdx) => (
                      <div key={dIdx} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        fontSize: '0.88rem',
                        color: 'var(--color-text-body)'
                      }}>
                        <span style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: phase.color,
                          flexShrink: 0
                        }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Practical Callout */}
          <div style={{
            marginTop: '3.5rem',
            padding: '2.5rem',
            borderRadius: '24px',
            background: 'var(--color-deep-purple)',
            color: '#ffffff',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
                Practical &amp; Agile for Every Project
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#dddddd', lineHeight: 1.6, margin: 0 }}>
                Not every client requires all 6 stages. An urgent Shopify Functions delivery rule or emergency speed audit can move straight from Discovery &amp; Audit into rapid deployment within days.
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <Link to="/planner" className="btn btn-lilac">
                Configure Project Scope <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Ticker
      <Ticker items={tickerItems} variant="dark" /> */}
    </div>
  );
}
