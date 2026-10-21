import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check
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
      {/* SIGNATURE SUBPAGE DARK HERO BANNER (PRIYA MATCH)               */}
      {/* ============================================================== */}
      <section className="subpage-hero-banner">
        <div className="container">
          <span className="hero-category">CONTACT &amp; INQUIRIES</span>
          <h1 className="hero-headline" style={{ marginBottom: '0.75rem' }}>
            Hire a Freelance Shopify Developer | Contact Himanshu Soni
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', color: '#e5e7eb', lineHeight: 1.6, maxWidth: '850px', margin: 0 }}>
            Ready to discuss your Shopify Plus build, custom theme, Remix app, or speed optimization? Reach out directly below to review scope, timelines, and deliverables.
          </p>
        </div>
      </section>

      {/* ============================================================== */}
      {/* MAIN CONTACT CONTENT ON CLEAN LIGHT BACKGROUND                 */}
      {/* ============================================================== */}
      <section className="section" style={{ background: '#fafafa' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'start'
          }}>
            {/* Left Column: Direct Inquiries */}
            <div>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--color-deep-purple)', marginBottom: '1rem' }}>
                General inquiries
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-body)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                I respond directly to technical inquiries from brand founders, e-commerce managers, and agency technical leads within 24 business hours.
              </p>

              {/* Direct Info Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                <a
                  href={`mailto:${personalInfo.email}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.25rem 1.5rem',
                    borderRadius: '16px',
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-lilac)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(186, 154, 253, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-deep-purple)',
                    flexShrink: 0
                  }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                      Email Address
                    </div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-deep-purple)' }}>
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
                    padding: '1.25rem 1.5rem',
                    borderRadius: '16px',
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-lilac)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#10b981',
                    flexShrink: 0
                  }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                      Direct Phone &amp; WhatsApp
                    </div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-deep-purple)' }}>
                      {personalInfo.phone}
                    </div>
                  </div>
                </a>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.25rem 1.5rem',
                  borderRadius: '16px',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)'
                }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(186, 154, 253, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-deep-purple)',
                    flexShrink: 0
                  }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                      Location &amp; Timezone
                    </div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-deep-purple)' }}>
                      {personalInfo.location} (IST / UTC+5:30)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Clean White Form Card */}
            <div>
              <div style={{
                background: '#ffffff',
                borderRadius: '24px',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                padding: '2.5rem',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)'
              }}>
                {!submitted ? (
                  <form onSubmit={handleSubmit}>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-deep-purple)', marginBottom: '0.5rem' }}>
                      Send a Message
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                      Fill in your project details. I’ll review your requirements and respond promptly.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-deep-purple)', marginBottom: '0.4rem' }}>
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
                            background: '#f8f9fa',
                            border: `1px solid ${errors.name ? '#dc2626' : '#cbd5e1'}`,
                            color: 'var(--color-deep-purple)',
                            outline: 'none'
                          }}
                        />
                        {errors.name && <span style={{ color: '#dc2626', fontSize: '0.75rem' }}>{errors.name}</span>}
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-deep-purple)', marginBottom: '0.4rem' }}>
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
                            background: '#f8f9fa',
                            border: `1px solid ${errors.email ? '#dc2626' : '#cbd5e1'}`,
                            color: 'var(--color-deep-purple)',
                            outline: 'none'
                          }}
                        />
                        {errors.email && <span style={{ color: '#dc2626', fontSize: '0.75rem' }}>{errors.email}</span>}
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-deep-purple)', marginBottom: '0.4rem' }}>
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
                            background: '#f8f9fa',
                            border: '1px solid #cbd5e1',
                            color: 'var(--color-deep-purple)',
                            outline: 'none'
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-deep-purple)', marginBottom: '0.4rem' }}>
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
                            background: '#f8f9fa',
                            border: '1px solid #cbd5e1',
                            color: 'var(--color-deep-purple)',
                            outline: 'none'
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-deep-purple)', marginBottom: '0.4rem' }}>
                          Project Category
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            borderRadius: '10px',
                            background: '#f8f9fa',
                            border: '1px solid #cbd5e1',
                            color: 'var(--color-deep-purple)',
                            outline: 'none'
                          }}
                        >
                          <option value="Shopify Plus & Custom Checkout">Shopify Plus &amp; Custom Checkout</option>
                          <option value="Custom Theme (Shopify 2.0)">Custom Theme (Shopify 2.0)</option>
                          <option value="Custom Remix App & Webhooks">Custom Remix App &amp; Webhooks</option>
                          <option value="Storefront Performance (40 to 85+)">Storefront Performance (40 to 85+)</option>
                          <option value="Payment & Marketing Integrations">Payment &amp; Marketing Integrations</option>
                        </select>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-deep-purple)', marginBottom: '0.4rem' }}>
                          Estimated Budget
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            borderRadius: '10px',
                            background: '#f8f9fa',
                            border: '1px solid #cbd5e1',
                            color: 'var(--color-deep-purple)',
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
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-deep-purple)', marginBottom: '0.4rem' }}>
                        Project Scope &amp; Goals *
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
                          background: '#f8f9fa',
                          border: `1px solid ${errors.message ? '#dc2626' : '#cbd5e1'}`,
                          color: 'var(--color-deep-purple)',
                          outline: 'none',
                          resize: 'vertical'
                        }}
                      />
                      {errors.message && <span style={{ color: '#dc2626', fontSize: '0.75rem' }}>{errors.message}</span>}
                    </div>

                    <button
                      type="submit"
                      className="btn btn-dark"
                      style={{
                        width: '100%',
                        padding: '0.9rem',
                        fontSize: '1rem'
                      }}
                    >
                      <Send size={18} /> Submit Project Inquiry
                    </button>
                  </form>
                ) : (
                  /* Confirmation State */
                  <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'rgba(16, 185, 129, 0.15)',
                      border: '1.5px solid #10b981',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.25rem',
                      color: '#10b981'
                    }}>
                      <CheckCircle2 size={32} />
                    </div>

                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-deep-purple)', marginBottom: '0.5rem' }}>
                      Inquiry Compiled Successfully!
                    </h3>
                    <p style={{ fontSize: '0.92rem', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: '2rem' }}>
                      Thank you, <strong style={{ color: 'var(--color-deep-purple)' }}>{formData.name}</strong>. Your project inquiry has been formatted. Click below to launch your email client or copy the formatted message.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                      <a
                        href={generateMailto()}
                        className="btn btn-dark"
                        style={{ width: '100%', padding: '0.85rem' }}
                      >
                        <Send size={18} /> Send via Email to Himanshu
                      </a>
                      <button
                        type="button"
                        onClick={copyInquiry}
                        className="btn btn-lilac"
                        style={{ width: '100%', padding: '0.85rem' }}
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

      {/* Dark Ticker
      <Ticker items={tickerItems} variant="dark" /> */}
    </div>
  );
}
