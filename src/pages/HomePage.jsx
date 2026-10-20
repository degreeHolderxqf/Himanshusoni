import { useState } from 'react';
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
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  Clock, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import Ticker from '../components/Ticker';
import CoverflowSlider from '../components/CoverflowSlider';
import ProjectModal from '../components/ProjectModal';
import { 
  personalInfo, 
  verifiedMetrics, 
  servicesData, 
  projectsData, 
  approachStages, 
  tickerItems,
  workExperience 
} from '../data/portfolioData';

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="homepage-wrapper">
      {/* ============================================================== */}
      {/* HERO SECTION                                                  */}
      {/* ============================================================== */}
      <section className="hero-section" style={{
        position: 'relative',
        padding: '5rem 1.5rem 4rem',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(186, 154, 253, 0.18) 0%, rgba(25, 12, 57, 0) 70%), var(--color-bg)',
        overflow: 'hidden'
      }}>
        {/* Decorative background glows */}
        <div style={{
          position: 'absolute',
          top: '-150px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(186,154,253,0.15) 0%, rgba(78,24,112,0) 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}>
            {/* Left Content Column */}
            <div>
              {/* Availability Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 1rem',
                borderRadius: '999px',
                background: 'rgba(186, 154, 253, 0.1)',
                border: '1px solid rgba(186, 154, 253, 0.3)',
                color: 'var(--color-primary-lilac)',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                marginBottom: '1.5rem'
              }}>
                <span style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 10px #10b981'
                }} />
                Available for Shopify & Plus Projects
              </div>

              {/* Main Headline */}
              <h1 style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                color: 'var(--color-white)',
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em'
              }}>
                Engineering <span className="gradient-text">High-Converting</span> Shopify Storefronts & Apps
              </h1>

              {/* Supporting Subtitle */}
              <p style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                lineHeight: 1.6,
                color: 'var(--color-text-muted)',
                marginBottom: '2rem',
                maxWidth: '560px'
              }}>
                Hi, I'm <strong style={{ color: 'var(--color-white)' }}>Himanshu Soni</strong>. A dedicated Shopify Developer with 3+ years of experience building custom Remix apps, Shopify Plus checkout extensions, and ultra-fast Liquid storefronts that boost conversions.
              </p>

              {/* CTAs */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2.5rem'
              }}>
                <Link to="/contactus" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  Let's Discuss Your Project <ArrowRight size={18} />
                </Link>
                <Link to="/website-portfolio" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  Explore My Work
                </Link>
                <Link to="/planner" className="btn btn-secondary" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  borderColor: 'rgba(186, 154, 253, 0.4)'
                }}>
                  <Sparkles size={16} color="var(--color-primary-lilac)" />
                  Project Planner
                </Link>
              </div>

              {/* Verified Metrics Counter Row */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '1rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--color-border)'
              }}>
                {verifiedMetrics.map((m, idx) => (
                  <div key={idx} style={{ textAlign: 'left' }}>
                    <div style={{
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      color: 'var(--color-primary-lilac)',
                      lineHeight: 1
                    }}>
                      {m.value}
                    </div>
                    <div style={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: 'var(--color-white)',
                      marginTop: '0.3rem'
                    }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Hero Visual Banner */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                background: 'linear-gradient(145deg, rgba(78, 24, 112, 0.4) 0%, rgba(25, 12, 57, 0.8) 100%)',
                border: '1px solid rgba(186, 154, 253, 0.3)',
                boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 40px rgba(186, 154, 253, 0.15)',
                padding: '0.75rem'
              }}>
                <img 
                  src="/assets/hero-shopify.jpg" 
                  alt="Shopify Development by Himanshu Soni"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '18px',
                    display: 'block',
                    objectFit: 'cover'
                  }}
                />

                {/* Floating Metric Pill 1 */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  background: 'rgba(25, 12, 57, 0.85)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(186, 154, 253, 0.4)',
                  borderRadius: '12px',
                  padding: '0.6rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.4)'
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(16, 185, 129, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#10b981'
                  }}>
                    <Gauge size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>Performance Overhaul</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>40 → 85+ Lighthouse</div>
                  </div>
                </div>

                {/* Floating Metric Pill 2 */}
                <div style={{
                  position: 'absolute',
                  bottom: '25px',
                  right: '25px',
                  background: 'rgba(25, 12, 57, 0.85)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(186, 154, 253, 0.4)',
                  borderRadius: '12px',
                  padding: '0.6rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.4)'
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(186, 154, 253, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary-lilac)'
                  }}>
                    <Clock size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>Warehouse Automation</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>-60% Order Prep Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* DARK MARQUEE TICKER                                           */}
      {/* ============================================================== */}
      <Ticker items={tickerItems} variant="dark" />

      {/* ============================================================== */}
      {/* MULTI-SKILLED SHOPIFY SPECIALIST (SERVICES)                   */}
      {/* ============================================================== */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
            <span style={{
              fontSize: '0.82rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--color-primary-lilac)',
              display: 'inline-block',
              marginBottom: '0.75rem'
            }}>
              Multi-Skilled Shopify Specialist
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              fontWeight: 800,
              color: 'var(--color-white)',
              lineHeight: 1.2,
              marginBottom: '1rem'
            }}>
              End-to-End Shopify Engineering That Drives Measurable Revenue
            </h2>
            <p style={{
              fontSize: '1.05rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.6
            }}>
              From bespoke Shopify 2.0 themes to complex Remix apps and custom checkout functions, here is how I help merchants solve intricate technical challenges.
            </p>
          </div>

          {/* 6 Services Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '1.75rem'
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
                  {/* Card Header Icon & Tagline */}
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

                  {/* Title */}
                  <h3 style={{
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: 'var(--color-white)',
                    marginBottom: '0.85rem',
                    lineHeight: 1.3
                  }}>
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.92rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem'
                  }}>
                    {svc.description}
                  </p>

                  {/* Capability Checklist */}
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

                <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <Link 
                    to="/planner"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--color-primary-lilac)',
                      textDecoration: 'none'
                    }}
                  >
                    Plan this service <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* FEATURED CASE STUDIES SLIDER (PRIYA COVERFLOW INSPIRATION)     */}
      {/* ============================================================== */}
      <CoverflowSlider 
        projects={projectsData} 
        onSelectProject={(proj) => setSelectedProject(proj)} 
      />

      {/* ============================================================== */}
      {/* HOW I HELP MERCHANTS WIN (TECHNICAL STRENGTHS)                */}
      {/* ============================================================== */}
      <section className="section" style={{
        background: 'linear-gradient(180deg, var(--color-bg) 0%, rgba(78, 24, 112, 0.15) 50%, var(--color-bg) 100%)',
        position: 'relative'
      }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}>
            {/* Left Narrative */}
            <div>
              <span style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-primary-lilac)',
                display: 'inline-block',
                marginBottom: '0.75rem'
              }}>
                Engineering Discipline
              </span>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.2vw, 2.7rem)',
                fontWeight: 800,
                color: 'var(--color-white)',
                lineHeight: 1.25,
                marginBottom: '1.25rem'
              }}>
                Bridging Business Outcomes With Rock-Solid Shopify Code
              </h2>
              <p style={{
                fontSize: '1.02rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.7,
                marginBottom: '1.5rem'
              }}>
                Most store issues originate from bloated themes, misconfigured app scripts, or poorly structured checkout rules. I approach every store as a software system: minimizing third-party script reliance, using native Shopify 2.0 primitives, and writing edge-evaluated Shopify Functions that never slow down customers.
              </p>

              {/* 3 Pillars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#10b981',
                    flexShrink: 0
                  }}>
                    <Zap size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-white)', marginBottom: '0.25rem' }}>
                      Core Web Vitals & Real-World Speed
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                      Boosting Lighthouse mobile scores from 40 to 85+ by deferring analytics, optimizing asset loading, and replacing bulky apps with native Liquid sections.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(186, 154, 253, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary-lilac)',
                    flexShrink: 0
                  }}>
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-white)', marginBottom: '0.25rem' }}>
                      Shopify Functions Without Checkout Lag
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                      Building delivery customizations and discount logic with server-side WebAssembly execution on Shopify’s global edge network.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(234, 179, 8, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#eab308',
                    flexShrink: 0
                  }}>
                    <TrendingUp size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-white)', marginBottom: '0.25rem' }}>
                      Full Operational Automation (Remix & Webhooks)
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                      Custom Admin UI extensions that cut warehouse order processing time by 60% and real-time webhook sync preventing stock overselling.
                    </p>
                  </div>
                </div>
              </div>

              <Link to="/approach" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Explore My 6-Phase Approach <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right Comparison / Bento Card */}
            <div>
              <div style={{
                background: 'rgba(25, 12, 57, 0.7)',
                backdropFilter: 'blur(16px)',
                borderRadius: '20px',
                border: '1px solid rgba(186, 154, 253, 0.3)',
                padding: '2rem',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--color-white)',
                  marginBottom: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <Sparkles size={18} color="var(--color-primary-lilac)" />
                  How I Work vs Conventional Theme Modders
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{
                    padding: '1.25rem',
                    borderRadius: '12px',
                    background: 'rgba(239, 68, 68, 0.08)',
                    border: '1px solid rgba(239, 68, 68, 0.25)'
                  }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f87171', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                      Conventional Approach
                    </div>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.86rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                      <li>Installs 15+ heavy third-party apps for minor styling</li>
                      <li>Client-side JS hacks that crash under high checkout traffic</li>
                      <li>Cluttered Liquid templates with zero modular documentation</li>
                      <li>Mobile performance ignored until ad bounce rates spike</li>
                    </ul>
                  </div>

                  <div style={{
                    padding: '1.25rem',
                    borderRadius: '12px',
                    background: 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid rgba(16, 185, 129, 0.35)'
                  }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#34d399', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                      Himanshu's Engineering Standard
                    </div>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.86rem', color: '#fff', lineHeight: 1.6 }}>
                      <li>Native Shopify 2.0 schema sections customizable by merchants</li>
                      <li>Server-side Shopify Functions with 0ms client latency</li>
                      <li>Real-time event webhooks & embedded Remix applications</li>
                      <li>Guaranteed 85+ Lighthouse score and Core Web Vitals compliance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* WORKFLOW PREVIEW (6-PHASE APPROACH TEASER)                     */}
      {/* ============================================================== */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
            <span style={{
              fontSize: '0.82rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--color-primary-lilac)',
              display: 'inline-block',
              marginBottom: '0.75rem'
            }}>
              Structured Methodology
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.2vw, 2.7rem)',
              fontWeight: 800,
              color: 'var(--color-white)',
              lineHeight: 1.25,
              marginBottom: '1rem'
            }}>
              A Battle-Tested 6-Phase Development Workflow
            </h2>
            <p style={{
              fontSize: '1rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.6
            }}>
              Clear milestones, constant communication, and verified deliverables from discovery through post-launch handover.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: '1rem'
          }}>
            {approachStages.map((st) => (
              <div 
                key={st.step}
                style={{
                  background: 'rgba(25, 12, 57, 0.6)',
                  borderRadius: '16px',
                  border: '1px solid rgba(186, 154, 253, 0.2)',
                  padding: '1.5rem 1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: st.color,
                  lineHeight: 1,
                  marginBottom: '0.75rem'
                }}>
                  {st.step}
                </div>
                <h4 style={{
                  fontSize: '0.98rem',
                  fontWeight: 700,
                  color: 'var(--color-white)',
                  marginBottom: '0.4rem',
                  lineHeight: 1.3
                }}>
                  {st.name}
                </h4>
                <p style={{
                  fontSize: '0.8rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.4,
                  marginTop: 'auto'
                }}>
                  {st.subtitle}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/approach" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              View Detailed Development Methodology <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* VERIFIED PROFESSIONAL EXPERIENCE PREVIEW                       */}
      {/* ============================================================== */}
      <section className="section" style={{
        background: 'rgba(78, 24, 112, 0.1)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)'
      }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>
            <div>
              <span style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-primary-lilac)',
                display: 'inline-block',
                marginBottom: '0.75rem'
              }}>
                Verified Track Record
              </span>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.2vw, 2.7rem)',
                fontWeight: 800,
                color: 'var(--color-white)',
                lineHeight: 1.25,
                marginBottom: '1rem'
              }}>
                Hands-On Experience With Industry Leaders
              </h2>
              <p style={{
                fontSize: '1rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.6,
                marginBottom: '1.75rem'
              }}>
                My engineering experience spans agency environments, high-growth direct-to-consumer Shopify Plus stores, and custom full-stack web applications.
              </p>

              <Link to="/aboutus" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Full Resume & Professional History <ArrowRight size={16} />
              </Link>
            </div>

            {/* Experience Mini-List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {workExperience.map((exp, idx) => (
                <div 
                  key={idx}
                  style={{
                    background: 'rgba(25, 12, 57, 0.7)',
                    borderRadius: '16px',
                    border: '1px solid rgba(186, 154, 253, 0.25)',
                    padding: '1.25rem 1.5rem',
                    transition: 'border-color 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-white)', margin: 0 }}>
                      {exp.role} <span style={{ color: 'var(--color-primary-lilac)', fontWeight: 500 }}>@ {exp.company}</span>
                    </h4>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: exp.current ? '#10b981' : 'var(--color-text-muted)',
                      background: exp.current ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '999px',
                      border: exp.current ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                      {exp.period}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>
                    {exp.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* LILAC TICKER BAND                                              */}
      {/* ============================================================== */}
      <Ticker items={tickerItems} variant="lilac" />

      {/* ============================================================== */}
      {/* FINAL CALL TO ACTION (PRIYA-STYLE BIG CTA BANNER)              */}
      {/* ============================================================== */}
      <section className="section" style={{
        background: 'radial-gradient(ellipse at 50% 50%, rgba(186, 154, 253, 0.25) 0%, rgba(25, 12, 57, 0.95) 75%)',
        textAlign: 'center',
        padding: '6rem 1.5rem'
      }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span style={{
            fontSize: '0.82rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--color-primary-lilac)',
            display: 'inline-block',
            marginBottom: '1rem'
          }}>
            Ready to Build Something Exceptional?
          </span>
          <h2 style={{
            fontSize: 'clamp(2.4rem, 4.5vw, 3.5rem)',
            fontWeight: 800,
            color: 'var(--color-white)',
            lineHeight: 1.15,
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em'
          }}>
            Let’s Engineer Your Next High-Performance Shopify Store
          </h2>
          <p style={{
            fontSize: '1.15rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.6,
            marginBottom: '2.5rem'
          }}>
            Whether you need a bespoke Shopify Plus checkout customization, a custom Remix application, or an audit to boost your store speed to 85+, let’s start a conversation.
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem'
          }}>
            <Link to="/contactus" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', padding: '1rem 2rem' }}>
              Let's Discuss Your Project <ArrowRight size={20} />
            </Link>
            <Link to="/planner" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', padding: '1rem 2rem' }}>
              <Sparkles size={18} color="var(--color-primary-lilac)" />
              Use Interactive Project Planner
            </Link>
          </div>
        </div>
      </section>

      {/* Modal for viewing project details */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
