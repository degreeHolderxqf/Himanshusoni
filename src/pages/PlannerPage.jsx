import { useState } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Send,
  Copy,
  Check
} from 'lucide-react';
import Ticker from '../components/Ticker';
import { personalInfo, tickerItems } from '../data/portfolioData';

export default function PlannerPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    projectType: 'Shopify Plus & Checkout',
    currentUrl: '',
    storeAge: 'Established Brand (> 1 Year)',
    primaryGoals: ['Increase Conversion Rate', 'Faster Storefront Speed (85+ Target)'],
    requiredFeatures: ['Custom Liquid Sections & Blocks', 'Shopify Functions (Server-Side Rules)'],
    budgetRange: '₹25,000 – ₹60,000 Rs (~ $300 – $750 USD)',
    timeline: 'Within 2–4 Weeks',
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    companyName: '',
    notes: ''
  });

  const projectTypes = [
    { title: 'Shopify Plus & Checkout', desc: 'Shopify Functions, checkout delivery rules, payment customization' },
    { title: 'Custom Theme Development', desc: 'Shopify 2.0 bespoke themes from Figma or scratch' },
    { title: 'Custom Remix App', desc: 'Embedded Admin UI extensions, real-time webhooks, sync pipelines' },
    { title: 'Storefront Speed & Core Web Vitals', desc: 'Speed tuning from 40 to 85+, tag cleanup, asset optimization' },
    { title: 'Integrations & Migration', desc: 'Stripe, PayPal, Klaviyo, or migration from WooCommerce/Magento' },
    { title: 'Full Store Re-architecture', desc: 'Complete teardown and high-converting reconstruction' }
  ];

  const goalOptions = [
    'Increase Conversion Rate',
    'Faster Storefront Speed (85+ Target)',
    'Automate Warehouse / Order Processing',
    'Custom Checkout Delivery Options',
    'Custom Product Bundles / Swatches',
    'Internationalization / Multi-Currency',
    'Reduce Reliance on Third-Party Apps'
  ];

  const featureOptions = [
    'Custom Liquid Sections & Blocks',
    'Shopify Functions (Server-Side Rules)',
    'Checkout UI Extension',
    'Embedded Admin UI Extension (Polaris)',
    'Real-Time Webhook Inventory Sync',
    'Klaviyo & Retention Event Tracking',
    'Payment Gateway Integration (Stripe/PayPal)',
    'Ajax Flyout Cart & Slide Drawer'
  ];

  const budgetRanges = [
    {
      label: '₹10,000 – ₹25,000 Rs (~ < $300 USD)',
      inr: '₹10,000 – ₹25,000 Rs',
      usd: '< $300 USD',
      scope: 'Focused Sprint / Audit'
    },
    {
      label: '₹25,000 – ₹60,000 Rs (~ $300 – $750 USD)',
      inr: '₹25,000 – ₹60,000 Rs',
      usd: '$300 – $750 USD',
      scope: 'Theme / App Component'
    },
    {
      label: '₹60,000 – ₹1,50,000 Rs (~ $750 – $1,800 USD)',
      inr: '₹60,000 – ₹1,50,000 Rs',
      usd: '$750 – $1,800 USD',
      scope: 'Full Custom Store / Plus Build'
    },
    {
      label: '₹1,50,000+ Rs (~ $1,800+ USD)',
      inr: '₹1,50,000+ Rs',
      usd: '$1,800+ USD',
      scope: 'Enterprise Architecture'
    }
  ];

  const timelineOptions = [
    'Immediately (Urgent)',
    'Within 2–4 Weeks',
    '1–2 Months',
    'Planning Ahead / Flexible'
  ];

  const handleGoalToggle = (goal) => {
    setFormData((prev) => ({
      ...prev,
      primaryGoals: prev.primaryGoals.includes(goal)
        ? prev.primaryGoals.filter((g) => g !== goal)
        : [...prev.primaryGoals, goal]
    }));
  };

  const handleFeatureToggle = (feat) => {
    setFormData((prev) => ({
      ...prev,
      requiredFeatures: prev.requiredFeatures.includes(feat)
        ? prev.requiredFeatures.filter((f) => f !== feat)
        : [...prev.requiredFeatures, feat]
    }));
  };

  const validateStep = (step) => {
    const errs = {};
    if (step === 1 && !formData.projectType) {
      errs.projectType = 'Please select a project type';
    }
    if (step === 2 && formData.primaryGoals.length === 0) {
      errs.primaryGoals = 'Please choose at least one primary goal';
    }
    if (step === 5) {
      if (!formData.clientName.trim()) errs.clientName = 'Your name is required';
      if (!formData.clientEmail.trim()) {
        errs.clientEmail = 'Your email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.clientEmail)) {
        errs.clientEmail = 'Please provide a valid email address';
      }
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 5));
      window.scrollTo({ top: 350, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(5)) {
      setSubmitted(true);
    }
  };

  const generateMailto = () => {
    const subject = encodeURIComponent(`Shopify Project Inquiry: ${formData.projectType} — ${formData.clientName}`);
    const body = encodeURIComponent(`
Hi Himanshu,

I completed your Shopify Project Planner with the following details:

--- PROJECT SUMMARY ---
• Project Type: ${formData.projectType}
• Current Website: ${formData.currentUrl || 'N/A'}
• Store Age: ${formData.storeAge}
• Primary Goals: ${formData.primaryGoals.join(', ')}
• Required Features: ${formData.requiredFeatures.join(', ')}
• Budget Range: ${formData.budgetRange}
• Expected Timeline: ${formData.timeline}

--- CONTACT DETAILS ---
• Name: ${formData.clientName}
• Email: ${formData.clientEmail}
• Phone: ${formData.clientPhone || 'N/A'}
• Company: ${formData.companyName || 'N/A'}

--- ADDITIONAL NOTES ---
${formData.notes || 'None'}
    `);
    return `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const copySummary = () => {
    const summaryText = `
Shopify Project Inquiry for Himanshu Soni
Type: ${formData.projectType}
Website: ${formData.currentUrl || 'N/A'}
Goals: ${formData.primaryGoals.join(', ')}
Features: ${formData.requiredFeatures.join(', ')}
Budget: ${formData.budgetRange}
Timeline: ${formData.timeline}
Client: ${formData.clientName} (${formData.clientEmail}, ${formData.clientPhone || 'N/A'})
Company: ${formData.companyName || 'N/A'}
Notes: ${formData.notes || 'N/A'}
    `.trim();

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="planner-page-wrapper">
      {/* ============================================================== */}
      {/* SIGNATURE SUBPAGE DARK HERO BANNER (PRIYA MATCH)               */}
      {/* ============================================================== */}
      <section className="subpage-hero-banner">
        <div className="container">
          <span className="hero-category">PROJECT PLANNER</span>
          <h1 className="hero-headline" style={{ marginBottom: '0.75rem' }}>
            Plan Your Shopify Development Project &amp; Estimate Scope
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', color: '#e5e7eb', lineHeight: 1.6, maxWidth: '850px', margin: 0 }}>
            Configure your technical requirements, goals, features, and timeline in this 4-step wizard. I'll review your scope and provide actionable recommendations within one business day.
          </p>
        </div>
      </section>

      {/* ============================================================== */}
      {/* WIZARD CONTAINER ON CLEAN LIGHT BACKGROUND                     */}
      {/* ============================================================== */}
      <section className="section" style={{ background: '#fafafa', minHeight: '60vh' }}>
        <div className="container" style={{ maxWidth: '880px' }}>

          {!submitted ? (
            <div style={{
              background: '#ffffff',
              borderRadius: '24px',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              padding: '2.5rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)'
            }}>
              {/* Stepper Progress Bar */}
              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.85rem'
                }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-deep-purple)', textTransform: 'uppercase' }}>
                    Step 0{currentStep} of 05
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                    {currentStep === 1 && 'Project Type'}
                    {currentStep === 2 && 'Goals & Store Context'}
                    {currentStep === 3 && 'Required Features & Scope'}
                    {currentStep === 4 && 'Budget & Timeline'}
                    {currentStep === 5 && 'Contact & Review'}
                  </span>
                </div>

                <div style={{
                  height: '6px',
                  background: '#e2e8f0',
                  borderRadius: '999px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    height: '100%',
                    width: `${(currentStep / 5) * 100}%`,
                    background: 'var(--color-deep-purple)',
                    transition: 'width 0.3s ease'
                  }} />
                </div>
              </div>

              {/* Step 1: Project Type */}
              {currentStep === 1 && (
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-deep-purple)', marginBottom: '0.5rem' }}>
                    What kind of Shopify project are you planning?
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', marginBottom: '1.75rem' }}>
                    Select the primary engineering category that best describes your store requirements.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                    {projectTypes.map((pt, idx) => {
                      const isSelected = formData.projectType === pt.title;
                      return (
                        <div
                          key={idx}
                          onClick={() => setFormData({ ...formData, projectType: pt.title })}
                          style={{
                            padding: '1.25rem',
                            borderRadius: '16px',
                            background: isSelected ? 'rgba(186, 154, 253, 0.12)' : '#ffffff',
                            border: `1.5px solid ${isSelected ? 'var(--color-deep-purple)' : '#e2e8f0'}`,
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.4rem'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-deep-purple)', margin: 0 }}>
                              {pt.title}
                            </h4>
                            {isSelected && <CheckCircle2 size={18} color="var(--color-deep-purple)" />}
                          </div>
                          <p style={{ fontSize: '0.82rem', color: 'var(--color-text-body)', margin: 0, lineHeight: 1.45 }}>
                            {pt.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 2: Goals & Store Context */}
              {currentStep === 2 && (
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-deep-purple)', marginBottom: '0.5rem' }}>
                    Store Context &amp; Business Objectives
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', marginBottom: '1.75rem' }}>
                    Tell me about your existing store and what metrics you aim to move.
                  </p>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-deep-purple)', marginBottom: '0.5rem' }}>
                      Current Website URL (Optional if starting new)
                    </label>
                    <input
                      type="url"
                      placeholder="https://yourstore.com"
                      value={formData.currentUrl}
                      onChange={(e) => setFormData({ ...formData, currentUrl: e.target.value })}
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

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-deep-purple)', marginBottom: '0.5rem' }}>
                      Store Maturity
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                      {['New Store Concept', 'Launched < 1 Year', 'Established Brand (> 1 Year)', 'High-Volume Enterprise'].map((age) => (
                        <button
                          key={age}
                          type="button"
                          onClick={() => setFormData({ ...formData, storeAge: age })}
                          style={{
                            padding: '0.5rem 1rem',
                            borderRadius: '999px',
                            background: formData.storeAge === age ? 'var(--color-lilac)' : '#ffffff',
                            color: 'var(--color-deep-purple)',
                            border: `1px solid ${formData.storeAge === age ? 'var(--color-deep-purple)' : '#e2e8f0'}`,
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            cursor: 'pointer'
                          }}
                        >
                          {age}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-deep-purple)', marginBottom: '0.5rem' }}>
                      Main Business Goals (Select all that apply)
                    </label>
                    {errors.primaryGoals && <span style={{ color: '#dc2626', fontSize: '0.8rem', display: 'block', marginBottom: '0.5rem' }}>{errors.primaryGoals}</span>}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.75rem' }}>
                      {goalOptions.map((goal) => {
                        const active = formData.primaryGoals.includes(goal);
                        return (
                          <div
                            key={goal}
                            onClick={() => handleGoalToggle(goal)}
                            style={{
                              padding: '0.85rem 1rem',
                              borderRadius: '10px',
                              background: active ? 'rgba(186, 154, 253, 0.12)' : '#ffffff',
                              border: `1.5px solid ${active ? 'var(--color-deep-purple)' : '#e2e8f0'}`,
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              fontSize: '0.88rem',
                              color: 'var(--color-deep-purple)'
                            }}
                          >
                            <span>{goal}</span>
                            {active && <CheckCircle2 size={16} color="var(--color-deep-purple)" />}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Required Features */}
              {currentStep === 3 && (
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-deep-purple)', marginBottom: '0.5rem' }}>
                    Required Technical Capabilities
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', marginBottom: '1.75rem' }}>
                    Choose the specific Shopify technologies and custom modules your project will require.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.75rem', marginBottom: '2rem' }}>
                    {featureOptions.map((feat) => {
                      const active = formData.requiredFeatures.includes(feat);
                      return (
                        <div
                          key={feat}
                          onClick={() => handleFeatureToggle(feat)}
                          style={{
                            padding: '0.85rem 1rem',
                            borderRadius: '10px',
                            background: active ? 'rgba(186, 154, 253, 0.12)' : '#ffffff',
                            border: `1.5px solid ${active ? 'var(--color-deep-purple)' : '#e2e8f0'}`,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            fontSize: '0.88rem',
                            color: 'var(--color-deep-purple)'
                          }}
                        >
                          <span>{feat}</span>
                          {active && <CheckCircle2 size={16} color="var(--color-deep-purple)" />}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 4: Budget & Timeline */}
              {currentStep === 4 && (
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-deep-purple)', marginBottom: '0.5rem' }}>
                    Budget &amp; Expected Timeline
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', marginBottom: '1.75rem' }}>
                    Help me understand your investment allocation and launch urgency to tailor the architecture.
                  </p>

                  <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-deep-purple)', marginBottom: '0.75rem' }}>
                      Estimated Budget Range
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.85rem' }}>
                      {budgetRanges.map((b) => {
                        const active = formData.budgetRange === b.label;
                        return (
                          <div
                            key={b.label}
                            onClick={() => setFormData({ ...formData, budgetRange: b.label })}
                            style={{
                              padding: '1rem 1.15rem',
                              borderRadius: '12px',
                              background: active ? 'rgba(186, 154, 253, 0.12)' : '#ffffff',
                              border: `1.5px solid ${active ? 'var(--color-deep-purple)' : '#e2e8f0'}`,
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'flex-start',
                              justifyContent: 'space-between',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            <div>
                              <div style={{
                                fontSize: '1rem',
                                fontWeight: 700,
                                color: 'var(--color-deep-purple)',
                                marginBottom: '0.35rem'
                              }}>
                                {b.inr}
                              </div>
                              <div style={{
                                fontSize: '0.78rem',
                                color: 'var(--color-text-muted)',
                                fontWeight: 500,
                                lineHeight: 1.4
                              }}>
                                {b.usd} <span style={{ color: 'var(--color-plum)', fontWeight: 700 }}>•</span> {b.scope}
                              </div>
                            </div>
                            {active && (
                              <CheckCircle2
                                size={18}
                                color="var(--color-deep-purple)"
                                style={{ flexShrink: 0, marginTop: '2px', marginLeft: '0.5rem' }}
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-deep-purple)', marginBottom: '0.75rem' }}>
                      Target Delivery Schedule
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                      {timelineOptions.map((t) => {
                        const active = formData.timeline === t;
                        return (
                          <div
                            key={t}
                            onClick={() => setFormData({ ...formData, timeline: t })}
                            style={{
                              padding: '0.85rem',
                              borderRadius: '10px',
                              background: active ? 'rgba(186, 154, 253, 0.12)' : '#ffffff',
                              border: `1.5px solid ${active ? 'var(--color-deep-purple)' : '#e2e8f0'}`,
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              fontSize: '0.88rem',
                              color: 'var(--color-deep-purple)'
                            }}
                          >
                            <span>{t}</span>
                            {active && <CheckCircle2 size={16} color="var(--color-deep-purple)" />}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Contact & Review */}
              {currentStep === 5 && (
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-deep-purple)', marginBottom: '0.5rem' }}>
                    Contact Details &amp; Inquiry Review
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', marginBottom: '1.75rem' }}>
                    Where should I send the technical breakdown and proposal?
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-deep-purple)', marginBottom: '0.4rem' }}>
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Alex Morgan"
                        value={formData.clientName}
                        onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '10px',
                          background: '#f8f9fa',
                          border: `1px solid ${errors.clientName ? '#dc2626' : '#cbd5e1'}`,
                          color: 'var(--color-deep-purple)',
                          outline: 'none'
                        }}
                      />
                      {errors.clientName && <span style={{ color: '#dc2626', fontSize: '0.78rem' }}>{errors.clientName}</span>}
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-deep-purple)', marginBottom: '0.4rem' }}>
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="alex@brand.com"
                        value={formData.clientEmail}
                        onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '10px',
                          background: '#f8f9fa',
                          border: `1px solid ${errors.clientEmail ? '#dc2626' : '#cbd5e1'}`,
                          color: 'var(--color-deep-purple)',
                          outline: 'none'
                        }}
                      />
                      {errors.clientEmail && <span style={{ color: '#dc2626', fontSize: '0.78rem' }}>{errors.clientEmail}</span>}
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-deep-purple)', marginBottom: '0.4rem' }}>
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="+1 555-0192"
                        value={formData.clientPhone}
                        onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
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
                      <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-deep-purple)', marginBottom: '0.4rem' }}>
                        Company / Store Name
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Apparel"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
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

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-deep-purple)', marginBottom: '0.4rem' }}>
                      Additional Scope Notes or Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share details on existing apps, ERP integrations, or deadlines..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '10px',
                        background: '#f8f9fa',
                        border: '1px solid #cbd5e1',
                        color: 'var(--color-deep-purple)',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  {/* Summary Box */}
                  <div style={{
                    padding: '1.25rem',
                    borderRadius: '14px',
                    background: '#f8f9fa',
                    border: '1px solid #e2e8f0',
                    marginBottom: '1.5rem'
                  }}>
                    <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-deep-purple)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                      Summary of Your Plan
                    </h4>
                    <div style={{ fontSize: '0.88rem', color: 'var(--color-text-body)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
                      <div><strong>Type:</strong> {formData.projectType}</div>
                      <div><strong>Budget:</strong> {formData.budgetRange}</div>
                      <div><strong>Timeline:</strong> {formData.timeline}</div>
                      <div><strong>Store URL:</strong> {formData.currentUrl || 'N/A'}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Controls */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid #eef0f3'
              }}>
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn btn-outline"
                    style={{ padding: '0.65rem 1.25rem' }}
                  >
                    <ArrowLeft size={16} /> Back
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 5 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn btn-dark"
                    style={{ padding: '0.65rem 1.6rem' }}
                  >
                    Continue <ArrowRight size={16} />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="btn btn-dark"
                    style={{ padding: '0.75rem 1.85rem', fontSize: '1rem' }}
                  >
                    Complete <CheckCircle2 size={18} />
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Submission Confirmation Screen */
            <div style={{
              background: '#ffffff',
              borderRadius: '24px',
              border: '1.5px solid #10b981',
              padding: '3.5rem 2.5rem',
              textAlign: 'center',
              boxShadow: '0 15px 40px rgba(0,0,0,0.05)'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid #10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                color: '#10b981'
              }}>
                <CheckCircle2 size={36} />
              </div>

              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-deep-purple)', marginBottom: '0.75rem' }}>
                Your Project Plan is Ready!
              </h2>

              <p style={{ fontSize: '1rem', color: 'var(--color-text-body)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 2rem' }}>
                Thank you, <strong style={{ color: 'var(--color-deep-purple)' }}>{formData.clientName}</strong>. Your project specifications for <strong style={{ color: 'var(--color-plum)' }}>{formData.projectType}</strong> have been formatted.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                <a
                  href={generateMailto()}
                  className="btn btn-dark"
                  style={{ padding: '0.85rem 1.85rem' }}
                >
                  <Send size={18} /> Send to Himanshu Soni
                </a>

                <button
                  type="button"
                  onClick={copySummary}
                  className="btn btn-lilac"
                  style={{ padding: '0.85rem 1.5rem' }}
                >
                  {copied ? <Check size={18} color="#10b981" /> : <Copy size={18} />}
                  {copied ? 'Summary Copied!' : 'Copy Plan to Clipboard'}
                </button>
              </div>

              <div style={{
                display: 'inline-flex',
                flexDirection: 'column',
                gap: '0.5rem',
                padding: '1.25rem 2rem',
                background: '#fafafa',
                borderRadius: '16px',
                border: '1px solid #e5e7eb',
                textAlign: 'left'
              }}>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                  Direct Contact Information:
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--color-deep-purple)', fontWeight: 600 }}>
                  Email: <span>{personalInfo.email}</span>
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--color-deep-purple)', fontWeight: 600 }}>
                  Phone / WhatsApp: <span>{personalInfo.phone}</span>
                </div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <button
                  type="button"
                  onClick={() => { setSubmitted(false); setCurrentStep(1); }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--color-text-muted)',
                    fontSize: '0.85rem',
                    textDecoration: 'underline',
                    cursor: 'pointer'
                  }}
                >
                  Start a new project plan
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Dark Ticker
      <Ticker items={tickerItems} variant="dark" /> */}
    </div>
  );
}
