import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code2, 
  Terminal, 
  Cpu, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  Phone, 
  Clock,
  Layers,
  Zap,
  ShieldCheck
} from 'lucide-react';
import Ticker from '../components/Ticker';
import { 
  personalInfo, 
  workExperience, 
  educationData, 
  certificationsData, 
  verifiedMetrics, 
  tickerItems 
} from '../data/portfolioData';

export default function AboutPage() {
  const technicalSkills = [
    { category: "Shopify Ecosystem", skills: ["Shopify Plus", "Remix Apps", "Shopify Functions API", "Admin UI Extensions", "Liquid", "Shopify Webhooks", "Checkout Extensibility"] },
    { category: "Frontend Engineering", skills: ["JavaScript (ES6+)", "React.js", "Next.js", "Polaris UI", "HTML5 & Vanilla CSS", "Tailwind CSS", "Redux"] },
    { category: "Backend & APIs", skills: ["Node.js", "Express.js", "GraphQL Admin API", "RESTful APIs", "SQL", "Webhooks Processing"] },
    { category: "Tools & DevOps", skills: ["Shopify CLI", "Git & GitHub", "Postman", "Lighthouse", "Render", "Vercel"] }
  ];

  return (
    <div className="about-page-wrapper">
      {/* ============================================================== */}
      {/* ABOUT HERO BANNER                                             */}
      {/* ============================================================== */}
      <section style={{
        padding: '5rem 1.5rem 3.5rem',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(186, 154, 253, 0.2) 0%, rgba(25, 12, 57, 0) 70%), var(--color-bg)',
        borderBottom: '1px solid var(--color-border)',
        position: 'relative'
      }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}>
            {/* Left Bio Column */}
            <div>
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
                About Himanshu Soni
              </span>

              <h1 style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
                fontWeight: 800,
                color: 'var(--color-white)',
                lineHeight: 1.15,
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em'
              }}>
                Shopify Developer & <span className="gradient-text">Plus Architect</span>
              </h1>

              <p style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                color: 'var(--color-text-muted)',
                lineHeight: 1.7,
                marginBottom: '1.5rem'
              }}>
                With 3+ years of professional development experience, I specialize in architecting custom Shopify applications, Shopify Plus checkout extensions, and high-performance storefronts. Skilled in Shopify APIs, Remix, Liquid, and the modern MERN stack.
              </p>

              <p style={{
                fontSize: '0.98rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.7,
                marginBottom: '2rem'
              }}>
                My background combines a Bachelor of Computer Application degree with real-world enterprise implementations: from cutting order processing time by 60% for high-volume merchants to shipping 60+ custom storefronts and boosting Lighthouse mobile scores to 85+.
              </p>

              {/* Direct Info Chips */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2.5rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.88rem',
                  color: 'var(--color-text)',
                  background: 'rgba(25, 12, 57, 0.6)',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(186, 154, 253, 0.2)'
                }}>
                  <MapPin size={16} color="var(--color-primary-lilac)" />
                  Indore / Dewas, MP, India
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.88rem',
                  color: 'var(--color-text)',
                  background: 'rgba(25, 12, 57, 0.6)',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(186, 154, 253, 0.2)'
                }}>
                  <Briefcase size={16} color="var(--color-primary-lilac)" />
                  Parkhya Solutions (Current)
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.88rem',
                  color: 'var(--color-text)',
                  background: 'rgba(25, 12, 57, 0.6)',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(186, 154, 253, 0.2)'
                }}>
                  <Mail size={16} color="var(--color-primary-lilac)" />
                  himanshusoni7899@gmail.com
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/contactus" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  Contact Me <ArrowRight size={16} />
                </Link>
                <Link to="/planner" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Sparkles size={16} color="var(--color-primary-lilac)" /> Project Planner
                </Link>
              </div>
            </div>

            {/* Right Side Stats & Profile Overview Box */}
            <div>
              <div style={{
                background: 'rgba(25, 12, 57, 0.8)',
                backdropFilter: 'blur(16px)',
                borderRadius: '24px',
                border: '1px solid rgba(186, 154, 253, 0.3)',
                padding: '2.5rem',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--color-white)',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem'
                }}>
                  <Sparkles size={18} color="var(--color-primary-lilac)" />
                  Verified Career Highlights
                </h3>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1.25rem',
                  marginBottom: '2rem'
                }}>
                  {verifiedMetrics.map((m, idx) => (
                    <div 
                      key={idx}
                      style={{
                        padding: '1.25rem',
                        borderRadius: '16px',
                        background: 'rgba(78, 24, 112, 0.2)',
                        border: '1px solid rgba(186, 154, 253, 0.2)'
                      }}
                    >
                      <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-primary-lilac)', lineHeight: 1 }}>
                        {m.value}
                      </div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#fff', marginTop: '0.35rem' }}>
                        {m.label}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
                        {m.detail}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Collaboration Philosophy */}
                <div style={{
                  padding: '1.25rem',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-primary-lilac)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    My Working Philosophy
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>
                    "Code should empower merchants, not restrict them. I focus on creating modular Shopify architectures where clients have full theme customizer control, fast checkout flows, and zero fragile hack-arounds."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Ticker */}
      <Ticker items={tickerItems} variant="dark" />

      {/* ============================================================== */}
      {/* WORK EXPERIENCE TIMELINE                                      */}
      {/* ============================================================== */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem' }}>
            <span style={{
              fontSize: '0.82rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--color-primary-lilac)',
              display: 'inline-block',
              marginBottom: '0.75rem'
            }}>
              Employment History
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.2vw, 2.7rem)',
              fontWeight: 800,
              color: 'var(--color-white)',
              lineHeight: 1.2
            }}>
              Professional Experience
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {workExperience.map((exp, idx) => (
              <div 
                key={idx}
                style={{
                  background: 'rgba(25, 12, 57, 0.7)',
                  borderRadius: '20px',
                  border: '1px solid rgba(186, 154, 253, 0.25)',
                  padding: '2rem 2.25rem',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  position: 'relative'
                }}
              >
                {/* Header row */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '1rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingBottom: '1rem'
                }}>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-white)', margin: 0 }}>
                      {exp.role}
                    </h3>
                    <div style={{ fontSize: '1.05rem', color: 'var(--color-primary-lilac)', fontWeight: 600, marginTop: '0.2rem' }}>
                      {exp.company} — <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', fontWeight: 400 }}>{exp.location}</span>
                    </div>
                  </div>

                  <span style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: exp.current ? '#10b981' : 'var(--color-text-muted)',
                    background: exp.current ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '999px',
                    border: exp.current ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    {exp.period}
                  </span>
                </div>

                {/* Summary */}
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {exp.summary}
                </p>

                {/* Verified Responsibilities */}
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem'
                }}>
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.65rem',
                      fontSize: '0.9rem',
                      color: 'var(--color-text)',
                      lineHeight: 1.5
                    }}>
                      <CheckCircle2 size={16} color="var(--color-primary-lilac)" style={{ flexShrink: 0, marginTop: '3px' }} />
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
      {/* TECHNICAL SKILLS MATRIX                                       */}
      {/* ============================================================== */}
      <section className="section" style={{
        background: 'linear-gradient(180deg, var(--color-bg) 0%, rgba(78, 24, 112, 0.15) 100%)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)'
      }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem' }}>
            <span style={{
              fontSize: '0.82rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--color-primary-lilac)',
              display: 'inline-block',
              marginBottom: '0.75rem'
            }}>
              Core Proficiencies
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.2vw, 2.7rem)',
              fontWeight: 800,
              color: 'var(--color-white)',
              lineHeight: 1.2
            }}>
              Technical Tooling & Stack
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem'
          }}>
            {technicalSkills.map((cat, idx) => (
              <div 
                key={idx}
                style={{
                  background: 'rgba(25, 12, 57, 0.7)',
                  borderRadius: '16px',
                  border: '1px solid rgba(186, 154, 253, 0.25)',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--color-white)',
                  marginBottom: '1rem',
                  borderBottom: '1px solid rgba(186, 154, 253, 0.2)',
                  paddingBottom: '0.5rem'
                }}>
                  {cat.category}
                </h4>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {cat.skills.map((s, sIdx) => (
                    <span 
                      key={sIdx}
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: 'var(--color-primary-lilac)',
                        background: 'rgba(186, 154, 253, 0.1)',
                        padding: '0.3rem 0.65rem',
                        borderRadius: '6px',
                        border: '1px solid rgba(186, 154, 253, 0.2)'
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
      {/* EDUCATION & CERTIFICATIONS                                    */}
      {/* ============================================================== */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem'
          }}>
            {/* Education Column */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <GraduationCap size={24} color="var(--color-primary-lilac)" />
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-white)', margin: 0 }}>
                  Education
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {educationData.map((edu, idx) => (
                  <div 
                    key={idx}
                    style={{
                      background: 'rgba(25, 12, 57, 0.6)',
                      borderRadius: '16px',
                      border: '1px solid rgba(186, 154, 253, 0.2)',
                      padding: '1.5rem'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.35rem' }}>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', margin: 0 }}>
                        {edu.degree}
                      </h4>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        {edu.period}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--color-primary-lilac)', fontWeight: 500 }}>
                      {edu.institution}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
                      {edu.location}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Column */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <Award size={24} color="var(--color-primary-lilac)" />
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-white)', margin: 0 }}>
                  Certifications
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {certificationsData.map((cert, idx) => (
                  <div 
                    key={idx}
                    style={{
                      background: 'rgba(25, 12, 57, 0.6)',
                      borderRadius: '16px',
                      border: '1px solid rgba(186, 154, 253, 0.2)',
                      padding: '1.5rem'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.35rem' }}>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', margin: 0 }}>
                        {cert.title}
                      </h4>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        {cert.date}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--color-primary-lilac)', fontWeight: 500 }}>
                      {cert.issuer}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.2rem', fontFamily: 'monospace' }}>
                      ID: {cert.credentialId}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lilac Ticker */}
      <Ticker items={tickerItems} variant="lilac" />

      {/* Bottom CTA */}
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
            Interested in Collaborating?
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.6,
            marginBottom: '2rem'
          }}>
            I am available for Shopify Plus migrations, custom Remix app development, and bespoke storefront engineering. Let's discuss how I can support your business goals.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Link to="/contactus" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Let's Discuss Your Project <ArrowRight size={18} />
            </Link>
            <Link to="/website-portfolio" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Explore Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
