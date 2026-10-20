import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Clock,
  Check,
  Copy,
  HelpCircle
} from 'lucide-react';
import Ticker from '../components/Ticker';
import { personalInfo, tickerItems } from '../data/portfolioData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    websiteUrl: '',
    projectType: 'Shopify Plus & Custom Checkout',
    budget: '$3,000 – $7,000 USD',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief description of your project';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const generateMailto = () => {
    const subject = encodeURIComponent(`Shopify Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`
Hi Himanshu,

I am reaching out regarding a Shopify development engagement:

• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone || 'N/A'}
• Store / Website URL: ${formData.websiteUrl || 'N/A'}
• Project Type: ${formData.projectType}
• Budget Range: ${formData.budget}

Project Details:
${formData.message}

Looking forward to hearing from you.
    `);
    return `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const copyInquiry = () => {
    const text = `
Shopify Inquiry for Himanshu Soni
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'N/A'}
Website: ${formData.websiteUrl || 'N/A'}
Project Type: ${formData.projectType}
Budget: ${formData.budget}
Message: ${formData.message}
    `.trim();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="contact-page-wrapper">
      {/* ============================================================== */}
      {/* CONTACT HERO BANNER                                           */}
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
            Get In Touch
          </span>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
            fontWeight: 800,
            color: 'var(--color-white)',
            lineHeight: 1.15,
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em'
          }}>
            Let's Discuss Your <span className="gradient-text">Shopify Project</span>
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
            color: 'var(--color-text-muted)',
            lineHeight: 1.6,
            maxWidth: '680px',
            margin: '0 auto'
          }}>
            Whether you are planning a high-converting store redesign, need custom checkout functions, or want to build an automated Remix app, let's talk.
          </p>
        </div>
      </section>

      {/* ============================================================== */}
      {/* CONTACT MAIN SECTION (GRID: INFO CARDS & FORM)                */}
      {/* ============================================================== */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'start'
          }}>
            {/* Left Contact Column */}
            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-white)', marginBottom: '1rem' }}>
                Direct Contact Channels
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
                I respond directly to technical inquiries from brand founders, e-commerce managers, and agency technical leads within 24 business hours.
              </p>

              {/* Verified Contact Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.25rem',
                    borderRadius: '16px',
                    background: 'rgba(25, 12, 57, 0.7)',
                    border: '1px solid rgba(186, 154, 253, 0.25)',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                >
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(186, 154, 253, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary-lilac)',
                    flexShrink: 0
                  }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                      Email Address
                    </div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-white)' }}>
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                <a 
                  href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.25rem',
                    borderRadius: '16px',
                    background: 'rgba(25, 12, 57, 0.7)',
                    border: '1px solid rgba(186, 154, 253, 0.25)',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                >
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#10b981',
                    flexShrink: 0
                  }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                      Direct Phone & WhatsApp
                    </div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-white)' }}>
                      {personalInfo.phone}
                    </div>
                  </div>
                </a>

                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.25rem',
                    borderRadius: '16px',
                    background: 'rgba(25, 12, 57, 0.7)',
                    border: '1px solid rgba(186, 154, 253, 0.25)'
                  }}
                >
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(186, 154, 253, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary-lilac)',
                    flexShrink: 0
                  }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                      Location & Timezone
                    </div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-white)' }}>
                      {personalInfo.location} (IST / UTC+5:30)
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability Notice */}
              <div style={{
                padding: '1.25rem',
                borderRadius: '16px',
                background: 'rgba(186, 154, 253, 0.08)',
                border: '1px solid rgba(186, 154, 253, 0.25)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.8rem'
              }}>
                <Clock size={20} color="var(--color-primary-lilac)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-white)', margin: '0 0 0.25rem' }}>
                    Current Availability Status
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>
                    Open to select Shopify Plus contracts, bespoke theme development sprints, and full-stack Remix app builds.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Contact Form Column */}
            <div>
              <div style={{
                background: 'rgba(25, 12, 57, 0.75)',
                backdropFilter: 'blur(16px)',
                borderRadius: '24px',
                border: '1px solid rgba(186, 154, 253, 0.3)',
                padding: '2.5rem',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)'
              }}>
                {!submitted ? (
                  <form onSubmit={handleSubmit}>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>
                      Send a Project Inquiry
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                      Fill in the details below. I’ll review your store requirements and respond promptly.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#fff', marginBottom: '0.4rem' }}>
                          Your Name *
                        </label>
                        <input 
                          type="text"
                          placeholder="e.g. Jordan Smith"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            borderRadius: '10px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: `1px solid ${errors.name ? '#f87171' : 'rgba(186, 154, 253, 0.25)'}`,
                            color: '#fff',
                            outline: 'none'
                          }}
                        />
                        {errors.name && <span style={{ color: '#f87171', fontSize: '0.75rem' }}>{errors.name}</span>}
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#fff', marginBottom: '0.4rem' }}>
                          Email Address *
                        </label>
                        <input 
                          type="email"
                          placeholder="jordan@brand.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            borderRadius: '10px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: `1px solid ${errors.email ? '#f87171' : 'rgba(186, 154, 253, 0.25)'}`,
                            color: '#fff',
                            outline: 'none'
                          }}
                        />
                        {errors.email && <span style={{ color: '#f87171', fontSize: '0.75rem' }}>{errors.email}</span>}
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#fff', marginBottom: '0.4rem' }}>
                          Phone / WhatsApp (Optional)
                        </label>
                        <input 
                          type="text"
                          placeholder="+1 555-0123"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            borderRadius: '10px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(186, 154, 253, 0.25)',
                            color: '#fff',
                            outline: 'none'
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#fff', marginBottom: '0.4rem' }}>
                          Store / Website URL
                        </label>
                        <input 
                          type="url"
                          placeholder="https://yourstore.com"
                          value={formData.websiteUrl}
                          onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            borderRadius: '10px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(186, 154, 253, 0.25)',
                            color: '#fff',
                            outline: 'none'
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#fff', marginBottom: '0.4rem' }}>
                          Project Category
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            borderRadius: '10px',
                            background: '#190c39',
                            border: '1px solid rgba(186, 154, 253, 0.25)',
                            color: '#fff',
                            outline: 'none'
                          }}
                        >
                          <option value="Shopify Plus & Custom Checkout">Shopify Plus & Custom Checkout</option>
                          <option value="Custom Theme (Shopify 2.0)">Custom Theme (Shopify 2.0)</option>
                          <option value="Custom Remix App & Webhooks">Custom Remix App & Webhooks</option>
                          <option value="Storefront Performance (40 to 85+)">Storefront Performance (40 to 85+)</option>
                          <option value="Payment & Marketing Integrations">Payment & Marketing Integrations</option>
                          <option value="Other Technical Inquiry">Other Technical Inquiry</option>
                        </select>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#fff', marginBottom: '0.4rem' }}>
                          Estimated Budget
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            borderRadius: '10px',
                            background: '#190c39',
                            border: '1px solid rgba(186, 154, 253, 0.25)',
                            color: '#fff',
                            outline: 'none'
                          }}
                        >
                          <option value="< $1,500 USD (Focused Sprint / Audit)">&lt; $1,500 USD (Focused Sprint / Audit)</option>
                          <option value="$1,500 – $3,500 USD">$1,500 – $3,500 USD</option>
                          <option value="$3,000 – $7,000 USD">$3,000 – $7,000 USD</option>
                          <option value="$7,000+ USD (Enterprise Architecture)">&gt; $7,000 USD (Enterprise Architecture)</option>
                        </select>
                      </div>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#fff', marginBottom: '0.4rem' }}>
                        Project Description & Scope *
                      </label>
                      <textarea 
                        rows={4}
                        placeholder="Tell me about your storefront goals, specific challenges, or technical requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '10px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: `1px solid ${errors.message ? '#f87171' : 'rgba(186, 154, 253, 0.25)'}`,
                          color: '#fff',
                          outline: 'none',
                          resize: 'vertical'
                        }}
                      />
                      {errors.message && <span style={{ color: '#f87171', fontSize: '0.75rem' }}>{errors.message}</span>}
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{
                        width: '100%',
                        padding: '0.9rem',
                        fontSize: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      <Send size={18} /> Submit Project Inquiry
                    </button>
                  </form>
                ) : (
                  /* SUBMISSION SUCCESS CONFIRMATION */
                  <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'rgba(16, 185, 129, 0.2)',
                      border: '1px solid #10b981',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.25rem',
                      color: '#10b981'
                    }}>
                      <CheckCircle2 size={32} />
                    </div>

                    <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>
                      Inquiry Compiled Successfully!
                    </h3>
                    <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
                      Thank you, <strong style={{ color: '#fff' }}>{formData.name}</strong>. Your project inquiry has been formatted. Click below to launch your email client or copy the formatted inquiry.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                      <a 
                        href={generateMailto()}
                        className="btn btn-primary"
                        style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.85rem' }}
                      >
                        <Send size={18} /> Send via Email to Himanshu
                      </a>
                      <button
                        type="button"
                        onClick={copyInquiry}
                        className="btn btn-secondary"
                        style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.85rem' }}
                      >
                        {copied ? <Check size={18} color="#10b981" /> : <Copy size={18} />}
                        {copied ? 'Copied to Clipboard!' : 'Copy Formatted Inquiry'}
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--color-text-muted)',
                        fontSize: '0.85rem',
                        textDecoration: 'underline',
                        cursor: 'pointer'
                      }}
                    >
                      Edit or send another message
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lilac Ticker */}
      <Ticker items={tickerItems} variant="lilac" />
    </div>
  );
}
