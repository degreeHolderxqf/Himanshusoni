import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Layers, 
  GitBranch, 
  Terminal, 
  Cpu, 
  Smartphone,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import Ticker from '../components/Ticker';
import { approachStages, tickerItems } from '../data/portfolioData';

export default function ApproachPage() {
  const [activeStep, setActiveStep] = useState(null);

  const toggleStep = (step) => {
    setActiveStep(activeStep === step ? null : step);
  };

  return (
    <div className="approach-page-wrapper">
      {/* ============================================================== */}
      {/* APPROACH HERO BANNER                                          */}
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
            Structured Shopify Engineering
          </span>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
            fontWeight: 800,
            color: 'var(--color-white)',
            lineHeight: 1.15,
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em'
          }}>
            My <span className="gradient-text">6-Phase Approach</span> to Shopify Development
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
            color: 'var(--color-text-muted)',
            lineHeight: 1.6,
            maxWidth: '720px',
            margin: '0 auto 2.5rem'
          }}>
            E-commerce storefronts require more than surface styling. I follow a methodical, transparent engineering workflow that eliminates surprises, protects live revenue, and guarantees high-performance outcomes.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/planner" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={16} /> Plan Your Shopify Build
            </Link>
            <Link to="/contactus" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Schedule Technical Call <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6-PHASE TIMELINE SECTION                                       */}
      {/* ============================================================== */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {approachStages.map((phase, idx) => {
              const isExpanded = activeStep === phase.step || activeStep === null; // default expanded or interactive

              return (
                <div 
                  key={phase.step}
                  style={{
                    background: 'rgba(25, 12, 57, 0.7)',
                    borderRadius: '24px',
                    border: `1px solid ${isExpanded ? 'rgba(186, 154, 253, 0.4)' : 'rgba(186, 154, 253, 0.2)'}`,
                    padding: '2.5rem',
                    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Phase Number Glow Accent */}
                  <div style={{
                    position: 'absolute',
                    top: '-30px',
                    right: '-20px',
                    fontSize: '8rem',
                    fontWeight: 900,
                    color: 'rgba(255, 255, 255, 0.02)',
                    lineHeight: 1,
                    userSelect: 'none',
                    pointerEvents: 'none'
                  }}>
                    {phase.step}
                  </div>

                  {/* Header Row */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '1.5rem',
                    flexWrap: 'wrap',
                    marginBottom: '1.25rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                      {/* Step Badge */}
                      <div style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '16px',
                        background: `rgba(${parseInt(phase.color.slice(1,3), 16)}, ${parseInt(phase.color.slice(3,5), 16)}, ${parseInt(phase.color.slice(5,7), 16)}, 0.15)`,
                        border: `1px solid ${phase.color}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
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
                        <h2 style={{
                          fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)',
                          fontWeight: 800,
                          color: 'var(--color-white)',
                          margin: '0.2rem 0 0',
                          lineHeight: 1.2
                        }}>
                          {phase.name}
                        </h2>
                      </div>
                    </div>
                  </div>

                  {/* Body Narrative */}
                  <p style={{
                    fontSize: '1.02rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.7,
                    marginBottom: '1.75rem',
                    maxWidth: '850px'
                  }}>
                    {phase.description}
                  </p>

                  {/* Deliverables Box */}
                  <div style={{
                    background: 'rgba(15, 6, 32, 0.6)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    padding: '1.5rem'
                  }}>
                    <h4 style={{
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--color-primary-lilac)',
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <CheckCircle2 size={16} /> Key Verified Deliverables
                    </h4>

                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                      gap: '0.85rem'
                    }}>
                      {phase.deliverables.map((item, dIdx) => (
                        <div key={dIdx} style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.6rem',
                          fontSize: '0.9rem',
                          color: 'var(--color-text)',
                          lineHeight: 1.4
                        }}>
                          <span style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: phase.color,
                            marginTop: '6px',
                            flexShrink: 0
                          }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Workflow Philosophy Callout */}
          <div style={{
            marginTop: '3.5rem',
            padding: '2rem 2.5rem',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(78, 24, 112, 0.3) 0%, rgba(25, 12, 57, 0.8) 100%)',
            border: '1px solid rgba(186, 154, 253, 0.3)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                Practical & Flexible For Every Project
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
                Not every client requires all 6 stages. An urgent Shopify Functions delivery rule or emergency speed audit can move straight from Discovery & Audit into rapid deployment within days.
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <Link to="/planner" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Configure Project Scope <ArrowRight size={18} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Lilac Ticker */}
      <Ticker items={tickerItems} variant="lilac" />

      {/* ============================================================== */}
      {/* FINAL INVITATION CTA                                          */}
      {/* ============================================================== */}
      <section className="section" style={{
        background: 'radial-gradient(ellipse at 50% 50%, rgba(186, 154, 253, 0.2) 0%, rgba(25, 12, 57, 0.95) 75%)',
        textAlign: 'center',
        padding: '5rem 1.5rem'
      }}>
        <div className="container" style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            fontWeight: 800,
            color: 'var(--color-white)',
            marginBottom: '1rem'
          }}>
            Ready to Begin Phase 01?
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.6,
            marginBottom: '2rem'
          }}>
            Share your storefront link and goals. We'll start with a complimentary 30-minute technical review of your store architecture and performance bottlenecks.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Link to="/contactus" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Book Technical Review <ArrowRight size={18} />
            </Link>
            <Link to="/website-portfolio" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Review Past Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
