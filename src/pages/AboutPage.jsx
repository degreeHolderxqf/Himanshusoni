import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  GraduationCap, 
  Award, 
  Code2, 
  MapPin, 
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  Layers,
  Cpu
} from 'lucide-react';
import Ticker from '../components/Ticker';
import { 
  personalInfo, 
  freelanceMilestones, 
  educationData, 
  verifiedMetrics, 
  tickerItems 
} from '../data/portfolioData';

export default function AboutPage() {
  const technicalSkills = [
    { 
      category: "Shopify Ecosystem", 
      skills: ["Shopify Plus", "Remix Apps", "Shopify Functions API", "Admin UI Extensions", "Liquid Architecture", "Shopify Webhooks", "Checkout Extensibility"] 
    },
    { 
      category: "Frontend Engineering", 
      skills: ["JavaScript (ES6+)", "React.js", "Polaris UI", "HTML5 & Modern CSS", "Tailwind CSS", "Next.js", "Redux"] 
    },
    { 
      category: "Backend & Integrations", 
      skills: ["Node.js", "GraphQL Admin API", "RESTful APIs", "Stripe API", "Klaviyo Webhooks", "Inventory Sync Pipelines"] 
    },
    { 
      category: "Speed & Performance", 
      skills: ["Lighthouse Optimization (85+)", "Core Web Vitals", "Asset Deferral", "Responsive Srcset", "Shopify CLI", "Git"] 
    }
  ];

  return (
    <div className="about-page-wrapper">
      {/* ============================================================== */}
      {/* SIGNATURE SUBPAGE ABOUT HERO BANNER (PRIYA MATCH)             */}
      {/* ============================================================== */}
      <section style={{
        backgroundColor: 'var(--color-deep-purple)',
        padding: '5.5rem 1.5rem 5rem',
        color: '#ffffff',
        position: 'relative'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>
            {/* Left Headline in Lilac */}
            <div>
              <div style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                fontWeight: 800,
                color: 'var(--color-lilac)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em'
              }}>
                It all started<br />
                <span style={{ color: '#ffffff' }}>with clean code...</span>
              </div>
            </div>

            {/* Right Intro Narrative and Buttons */}
            <div>
              <p style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
                color: '#e5e7eb',
                lineHeight: 1.75,
                marginBottom: '2rem'
              }}>
                I'm <strong style={{ color: '#ffffff' }}>Himanshu Soni</strong> — an independent Freelance Shopify Expert and Shopify Plus specialist helping high-growth brands build high-converting storefronts, custom apps, and frictionless checkouts.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <Link to="/contactus" className="btn btn-lilac">
                  Lets Talk <ArrowRight size={16} />
                </Link>
                <Link to="/website-portfolio" className="btn btn-outline-white">
                  Explore My Case Studies <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* FREELANCE BACKGROUND & HIGHLIGHTS                              */}
      {/* ============================================================== */}
      <section className="section section-light">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
            marginBottom: '4.5rem'
          }}>
            <div>
              <span style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-plum)',
                display: 'block',
                marginBottom: '0.5rem'
              }}>
                Independent Consultant
              </span>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
                color: 'var(--color-deep-purple)',
                fontWeight: 800,
                lineHeight: 1.25,
                marginBottom: '1.25rem'
              }}>
                Freelance Shopify Expert with 8+ Years of Specialized Experience
              </h2>
              <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: 'var(--color-text-body)', marginBottom: '1.25rem' }}>
                As an independent freelance specialist, I partner directly with founders, e-commerce directors, and digital agencies to deliver robust Shopify solutions without agency overhead or middle layers.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--color-text-body)', marginBottom: '2rem' }}>
                My engineering approach blends technical precision with commercial insight: cutting warehouse order processing time by 60%, deploying over 60+ bespoke stores, eliminating variant overselling via custom sync apps, and elevating mobile Lighthouse speeds to 85+.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.88rem',
                  color: 'var(--color-deep-purple)',
                  fontWeight: 600,
                  background: 'rgba(186, 154, 253, 0.15)',
                  padding: '0.5rem 1rem',
                  borderRadius: '999px'
                }}>
                  <MapPin size={16} color="var(--color-deep-purple)" />
                  Indore, India (Global Remote Availability)
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.88rem',
                  color: 'var(--color-deep-purple)',
                  fontWeight: 600,
                  background: 'rgba(186, 154, 253, 0.15)',
                  padding: '0.5rem 1rem',
                  borderRadius: '999px'
                }}>
                  <Zap size={16} color="var(--color-deep-purple)" />
                  8+ Years Experience
                </div>
              </div>
            </div>

            {/* Verified Highlights Card */}
            <div>
              <div style={{
                background: '#fafafa',
                borderRadius: '24px',
                border: '1px solid #e5e7eb',
                padding: '2.5rem',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)'
              }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-deep-purple)', fontWeight: 800, marginBottom: '1.5rem' }}>
                  Verified Track Record
                </h3>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1.25rem',
                  marginBottom: '1.75rem'
                }}>
                  {verifiedMetrics.map((m, idx) => (
                    <div 
                      key={idx}
                      style={{
                        padding: '1.25rem',
                        borderRadius: '16px',
                        background: '#ffffff',
                        border: '1px solid #e2e8f0'
                      }}
                    >
                      <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-deep-purple)', lineHeight: 1 }}>
                        {m.value}
                      </div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-deep-purple)', marginTop: '0.35rem' }}>
                        {m.label}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
                        {m.detail}
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{
                  padding: '1.25rem',
                  borderRadius: '16px',
                  background: 'rgba(186, 154, 253, 0.12)',
                  border: '1px solid rgba(186, 154, 253, 0.25)'
                }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-deep-purple)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    My Freelance Philosophy
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-body)', margin: 0, lineHeight: 1.5 }}>
                    "Code should empower merchants, not restrict them. I focus on creating modular Shopify architectures where clients have full theme customizer control, fast checkout flows, and zero fragile hack-arounds."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* FREELANCE EXPERIENCE & TECHNICAL MILESTONES (NO EMPLOYERS)     */}
      {/* ============================================================== */}
      <section className="section" style={{ background: '#fafafa', borderTop: '1px solid #eef0f3' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
              color: 'var(--color-deep-purple)',
              fontWeight: 800,
              marginBottom: '0.5rem'
            }}>
              Freelance Milestones &amp; Solutions Delivered
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)' }}>
              A proven history of solving complex e-commerce engineering challenges directly for merchants.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {freelanceMilestones.map((exp, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  padding: '2.25rem',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '1rem',
                  borderBottom: '1px solid #f1f5f9',
                  paddingBottom: '1rem'
                }}>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-deep-purple)', margin: 0 }}>
                      {exp.title}
                    </h3>
                    <div style={{ fontSize: '0.95rem', color: 'var(--color-plum)', fontWeight: 600, marginTop: '0.2rem' }}>
                      {exp.focus}
                    </div>
                  </div>

                  <span style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#10b981',
                    background: 'rgba(16, 185, 129, 0.12)',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '999px'
                  }}>
                    {exp.period}
                  </span>
                </div>

                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {exp.summary}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {exp.deliverables.map((b, bIdx) => (
                    <li key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--color-text-body)', lineHeight: 1.5 }}>
                      <CheckCircle2 size={16} color="var(--color-plum)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* TECHNICAL SKILLS MATRIX                                        */}
      {/* ============================================================== */}
      <section className="section section-light" style={{ borderTop: '1px solid #eef0f3' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
              color: 'var(--color-deep-purple)',
              fontWeight: 800,
              marginBottom: '0.5rem'
            }}>
              Technical Toolkit &amp; Core Stack
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)' }}>
              Deep specialization in the modern Shopify engineering and full-stack development ecosystem.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem'
          }}>
            {technicalSkills.map((cat, cIdx) => (
              <div 
                key={cIdx}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
                }}
              >
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-deep-purple)', marginBottom: '1rem' }}>
                  {cat.category}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {cat.skills.map((s, sIdx) => (
                    <span 
                      key={sIdx}
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        background: '#f3f4f6',
                        color: 'var(--color-deep-purple)',
                        padding: '0.35rem 0.65rem',
                        borderRadius: '6px'
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* EDUCATION                                                      */}
      {/* ============================================================== */}
      <section className="section" style={{ background: '#fafafa', borderTop: '1px solid #eef0f3' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <GraduationCap size={24} color="var(--color-deep-purple)" />
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-deep-purple)', margin: 0 }}>
              Academic Foundation
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {educationData.map((edu, idx) => (
              <div key={idx} style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid #e5e7eb', padding: '1.75rem', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.35rem' }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-deep-purple)', margin: 0 }}>
                    {edu.degree}
                  </h4>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{edu.period}</span>
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--color-plum)', fontWeight: 600 }}>{edu.institution}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>{edu.location}</div>
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
