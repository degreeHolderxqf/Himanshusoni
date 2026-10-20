import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  Sparkles,
  Layers,
  Code2,
  Gauge,
  Cpu,
  Link2,
  Zap,
  ShieldCheck,
  Clock,
  TrendingUp,
  CheckCircle2,
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
  tickerItems
} from '../data/portfolioData';

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Tech partner logos for marquee
  const techPartners = [
    "Shopify Plus",
    "Shopify Functions",
    "Remix Full-Stack",
    "Liquid Architecture",
    "GraphQL Admin API",
    "Polaris UI",
    "Stripe Payments",
    "Klaviyo Retention",
    "Google Lighthouse",
    "Webhooks Pipeline"
  ];

  return (
    <div className="homepage-wrapper">
      {/* ============================================================== */}
      {/* SECTION 1: HERO SECTION matching priyasinghi.com               */}
      {/* ============================================================== */}
      <section
        className="home-hero-section"
        style={{
          backgroundColor: 'var(--color-hero-bg)',
          padding: '5rem 1.5rem 5rem',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}>
            {/* Left Column: Heading, Subhead, Pill Buttons */}
            <div>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 4.8vw, 4.2rem)',
                fontWeight: 800,
                color: 'var(--color-deep-purple)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: '1.5rem'
              }}>
                Your Shopify <strong style={{ color: 'var(--color-plum)' }}>Superpower</strong> to Spark Growth
              </h1>

              <p style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                lineHeight: 1.75,
                color: 'var(--color-text-body)',
                marginBottom: '2.5rem',
                maxWidth: '560px'
              }}>
                I'm <strong style={{ color: 'var(--color-deep-purple)' }}>Himanshu</strong> — an independent <strong>Freelance Shopify Expert</strong> with <strong>8+ years of experience</strong> blending Liquid architecture, custom apps &amp; speed optimization to <strong>supercharge</strong> e-commerce brands. From chaos to clarity, I help you grow with purpose.
              </p>

              {/* Exact Pill Action Buttons */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link to="/website-portfolio" className="btn btn-dark">
                  Explore My Work <ArrowRight size={16} />
                </Link>

                <Link to="/contactus" className="btn btn-lilac">
                  Lets Talk <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Profile Image */}
            <div style={{ position: 'relative', textAlign: 'center' }}>
              <div style={{
                position: 'relative',
                display: 'inline-block',
                maxWidth: '460px',
                width: '100%'
              }}>
                {/* Hero Profile Graphic Container */}
                <div style={{
                  borderRadius: '28px',
                  overflow: 'hidden',
                  boxShadow: '0 25px 60px rgba(25, 12, 57, 0.12)',
                  border: '1px solid rgba(186, 154, 253, 0.3)',
                  background: '#ffffff',
                  padding: '0.85rem'
                }}>
                  <img
                    src="/assets/MY-Profile.jpeg"
                    alt="Himanshu Soni — Freelance Shopify Expert"
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '20px',
                      display: 'block',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 2: TECH PARTNERS / BRANDS MARQUEE                      */}
      {/* ============================================================== */}
      <section style={{
        background: '#ffffff',
        borderTop: '1px solid #eef0f3',
        borderBottom: '1px solid #eef0f3',
        padding: '1.5rem 0'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '0.75rem' }}>
          <span style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--color-text-muted)'
          }}>
            Technologies &amp; Integrations Trusted by Merchants
          </span>
        </div>
        <div className="ticker-band" style={{ background: 'transparent', color: 'var(--color-deep-purple)' }}>
          <div className="ticker-track" style={{ animationDuration: '28s' }}>
            {[0, 1, 2].map((loopIdx) => (
              <div key={loopIdx} style={{ display: 'inline-flex', alignItems: 'center' }}>
                {techPartners.map((item, idx) => (
                  <div key={idx} className="ticker-item" style={{ color: 'var(--color-deep-purple)', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--color-lilac)' }}>✦</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 3: WHAT IT'S LIKE TO WORK WITH ME (PRIYA MATCH)       */}
      {/* ============================================================== */}
      <section className="section section-light">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}>
            {/* Left Graphic */}
            <div>
              <div style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 45px rgba(25, 12, 57, 0.08)',
                border: '1px solid rgba(0, 0, 0, 0.06)'
              }}>
                <img
                  src="/assets/projects/admin-extension.jpg"
                  alt="Shopify Development by Himanshu Soni"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>

            {/* Right Checklist */}
            <div>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                color: 'var(--color-deep-purple)',
                lineHeight: 1.25,
                marginBottom: '1rem',
                fontWeight: 700
              }}>
                What It’s Like to Work With Me
              </h2>

              <p style={{
                fontSize: '1.05rem',
                color: 'var(--color-text-body)',
                lineHeight: 1.7,
                marginBottom: '2rem'
              }}>
                When we collaborate, you’re not just another project — I’m fully invested in bringing your store's vision to life.
              </p>

              {/* 7-Point Checklist matching priyasinghi.com */}
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 2.5rem 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                {[
                  "Direct communication with me — zero agency middlemen",
                  "8+ years of specialized Shopify Plus & custom e-commerce expertise",
                  "Full focus on every store architecture & conversion funnel",
                  "Transparent, flat-fee project pricing with clear milestones",
                  "Solutions tailored strictly to your commercial business goals",
                  "Timely delivery, zero launch delays, zero ghosting",
                  "Reliable, long-term technical partnership & post-launch support"
                ].map((point, pIdx) => (
                  <li key={pIdx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    fontSize: '0.98rem',
                    color: 'var(--color-deep-purple)',
                    fontWeight: 500
                  }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'rgba(16, 185, 129, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#10b981',
                      flexShrink: 0
                    }}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contactus" className="btn btn-dark">
                Book a call <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 4: CORE FREELANCE SPECIALIZATIONS                      */}
      {/* ============================================================== */}
      <section style={{
        background: '#f8f9fa',
        borderTop: '1px solid #eef0f3',
        borderBottom: '1px solid #eef0f3',
        padding: '3rem 1.5rem'
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h3 style={{
            fontSize: '1.05rem',
            color: 'var(--color-text-muted)',
            fontWeight: 700,
            marginBottom: '1.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.12em'
          }}>
            Key Freelance Specializations &amp; Capabilities
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            alignItems: 'center'
          }}>
            <div style={{
              background: '#ffffff',
              padding: '1.25rem',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
            }}>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-deep-purple)' }}>Bespoke Liquid Themes</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>Shopify 2.0 &amp; Figma Conversion</div>
            </div>

            <div style={{
              background: '#ffffff',
              padding: '1.25rem',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
            }}>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-deep-purple)' }}>Shopify Plus &amp; Functions</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>Checkout Rules &amp; Extensibility</div>
            </div>

            <div style={{
              background: '#ffffff',
              padding: '1.25rem',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
            }}>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-deep-purple)' }}>Inventory Sync &amp; Apps</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>Remix, Webhooks &amp; APIs</div>
            </div>

            <div style={{
              background: '#ffffff',
              padding: '1.25rem',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
            }}>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-deep-purple)' }}>Speed &amp; Conversion</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>85+ Mobile Lighthouse Tuning</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 5: MULTI-SKILLED. PURPOSE-DRIVEN (PRIYA MATCH)         */}
      {/* ============================================================== */}
      <section id="services" className="section section-light">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'end',
            marginBottom: '3.5rem'
          }}>
            <div>
              <h2 style={{
                fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
                color: 'var(--color-deep-purple)',
                fontWeight: 700,
                lineHeight: 1.2
              }}>
                Multi-Skilled. Purpose-Driven
              </h2>
            </div>
            <div>
              <p style={{
                color: 'var(--color-text-body)',
                fontSize: '1.05rem',
                lineHeight: 1.7,
                margin: 0
              }}>
                With 8+ years of experience as an independent Freelance Shopify Expert, I specialize in helping direct-to-consumer brands and agencies build high-converting storefronts, custom apps, and frictionless checkouts.
              </p>
            </div>
          </div>

          {/* 3 Large Service Boxes (.service-box) matching priyasinghi.com */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem'
          }}>
            {/* Box 1: Shopify Plus & Checkout */}
            <div className="service-box">
              <div>
                <div className="service-icon-wrap">
                  <Layers size={26} color="var(--color-deep-purple)" />
                </div>
                <h3>Shopify Plus &amp; Checkout</h3>
                <p>
                  Shopify Plus specialist crafting custom checkout functions, delivery rules, and payment customizations that lower freight costs and convert.
                </p>
              </div>
              <Link to="/services" className="explore-link">
                Explore My Expertise <ArrowRight size={16} />
              </Link>
            </div>

            {/* Box 2: Custom Themes & Liquid */}
            <div className="service-box">
              <div>
                <div className="service-icon-wrap">
                  <Code2 size={26} color="var(--color-deep-purple)" />
                </div>
                <h3>Custom Themes &amp; Liquid</h3>
                <p>
                  Bespoke Shopify 2.0 storefront developer building sales-focused Liquid themes from Figma with dynamic swatches, flyout cart &amp; smart UX.
                </p>
              </div>
              <Link to="/services" className="explore-link">
                Explore My Expertise <ArrowRight size={16} />
              </Link>
            </div>

            {/* Box 3: Remix Apps & Integrations */}
            <div className="service-box">
              <div>
                <div className="service-icon-wrap">
                  <Cpu size={26} color="var(--color-deep-purple)" />
                </div>
                <h3>Remix Apps &amp; Webhooks</h3>
                <p>
                  Full-stack Shopify app developer driving automation with embedded Admin UI, inventory sync webhooks, and third-party APIs.
                </p>
              </div>
              <Link to="/services" className="explore-link">
                Explore My Expertise <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 6: CASE STUDIES SLIDER (TANGO COVERFLOW MATCH)         */}
      {/* ============================================================== */}
      <CoverflowSlider
        projects={projectsData}
        onSelectProject={(proj) => setSelectedProject(proj)}
      />

      {/* ============================================================== */}
      {/* SECTION 7: DARK MARQUEE TICKER                                 */}
      {/* ============================================================== */}
      <Ticker items={tickerItems} variant="dark" speed="22s" />

      {/* ============================================================== */}
      {/* SECTION 8: FULL-WIDTH MASSIVE QUOTE BANNER (PRIYA MATCH)       */}
      {/* ============================================================== */}
      <section style={{
        background: '#ffffff',
        padding: '5rem 1.5rem',
        borderBottom: '1px solid #eef0f3'
      }}>
        <div className="container" style={{ maxWidth: '950px', textAlign: 'center' }}>
          <div style={{
            fontSize: 'clamp(1.6rem, 3.2vw, 2.5rem)',
            fontWeight: 600,
            lineHeight: 1.35,
            color: 'var(--color-deep-purple)',
            letterSpacing: '-0.02em',
            marginBottom: '2rem'
          }}>
            “Himanshu's expertise in Shopify Functions and custom themes cut our order processing time by 60% while boosting storefront mobile speed past 85.”
          </div>
          <div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-deep-purple)' }}>
              Verified E-Commerce Merchant Deployment
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
              High-Volume D2C Brand Implementation
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 9: WHY WORK WITH ME (6 FEATURE BOXES)                  */}
      {/* ============================================================== */}
      <section className="section" style={{ background: '#fafafa' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              color: 'var(--color-deep-purple)',
              fontWeight: 700,
              marginBottom: '0.75rem'
            }}>
              Why Work With Me
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)' }}>
              A Trusted Freelance Technical Partner Across Shopify Theme Design, Custom Apps &amp; Speed
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}>
            {[
              {
                title: "Strategic by Architecture",
                desc: "I don’t just modify themes — I understand your commerce goals. Every section, app webhook, or Shopify Function starts with strategy and ends with measurable impact."
              },
              {
                title: "8+ Years of Specialized Expertise",
                desc: "Focused specifically on freelance Shopify development, Shopify Plus, custom apps, and speed optimization. I understand merchant operations and customer purchase funnels."
              },
              {
                title: "One Developer, Full-Stack Capabilities",
                desc: "No back-and-forth between multiple contractors. Get Liquid themes, custom Remix apps, checkout extensibility, and speed tuning handled under one roof."
              },
              {
                title: "Reliable Timelines — Zero Ghosting",
                desc: "Merchants often worry freelancers disappear. I stick to agreed schedules, communicate proactively, and deliver consistent, tested code."
              },
              {
                title: "Custom-Built, Never Cookie-Cutter",
                desc: "I don’t sell bloated multi-purpose themes. Whether it’s your Shopify Plus checkout or bespoke product customizer, everything is tailored for your business."
              },
              {
                title: "Results That Speak",
                desc: "Cutting order preparation time by 60%, eliminating variant overselling, and elevating Lighthouse speed scores to 85+ on real mobile devices."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="service-box"
                style={{ padding: '2rem' }}
              >
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-deep-purple)' }}>
                    {item.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--color-text-body)' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 10: CONVERSION CTA BANNER (PRIYA MATCH)                */}
      {/* ============================================================== */}
      <section style={{
        background: '#ffffff',
        borderTop: '1px solid #eef0f3',
        padding: '5rem 1.5rem'
      }}>
        <div className="container" style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            color: 'var(--color-deep-purple)',
            lineHeight: 1.2,
            marginBottom: '1rem',
            fontWeight: 700
          }}>
            Need a reliable freelance Shopify expert<br />who gets it done right?
          </h2>

          <p style={{
            fontSize: '1.1rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
            maxWidth: '650px',
            margin: '0 auto 2.5rem'
          }}>
            Book a quick call — I’ll show you how we can make your storefront scale, on time and without surprises.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Link to="/website-portfolio" className="btn btn-dark">
              Explore My Work <ArrowRight size={16} />
            </Link>
            <Link to="/contactus" className="btn btn-lilac">
              Lets Talk <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 11: VERIFIED STATS COUNTERS (PRIYA MATCH)             */}
      {/* ============================================================== */}
      <section style={{
        background: 'var(--color-deep-purple)',
        color: '#ffffff',
        padding: '4rem 1.5rem'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2.5rem',
            textAlign: 'center'
          }}>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: '#ba9afd', lineHeight: 1 }}>
                8+
              </div>
              <div style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 600, marginTop: '0.5rem' }}>
                Years of Experience
              </div>
            </div>

            <div>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: '#ba9afd', lineHeight: 1 }}>
                60+
              </div>
              <div style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 600, marginTop: '0.5rem' }}>
                Custom Shopify Stores
              </div>
            </div>

            <div>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: '#ba9afd', lineHeight: 1 }}>
                60%
              </div>
              <div style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 600, marginTop: '0.5rem' }}>
                Order Processing Time Cut
              </div>
            </div>

            <div>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: '#ba9afd', lineHeight: 1 }}>
                85+
              </div>
              <div style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 600, marginTop: '0.5rem' }}>
                Lighthouse Speed Target
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
