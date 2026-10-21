import { useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(25, 12, 57, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'fadeIn 0.25s ease'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          background: '#ffffff',
          borderRadius: '24px',
          maxWidth: '850px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
          border: '1px solid rgba(186, 154, 253, 0.3)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Case Study"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(25, 12, 57, 0.08)',
            border: 'none',
            color: 'var(--color-deep-purple)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-lilac)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(25, 12, 57, 0.08)'; }}
        >
          <X size={20} />
        </button>

        {/* Modal Banner Image */}
        <div style={{ height: '320px', position: 'relative', overflow: 'hidden', background: '#f3f4f6' }}>
          <img 
            src={project.thumbnail} 
            alt={`Shopify project preview: ${project.title}`}
            loading="lazy"
            decoding="async"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '24px',
            background: 'var(--color-deep-purple)',
            color: '#ffffff',
            borderRadius: '999px',
            padding: '0.4rem 1.1rem',
            fontSize: '0.82rem',
            fontWeight: 700,
            letterSpacing: '0.04em'
          }}>
            {project.category}
          </div>
        </div>

        {/* Modal Content Body */}
        <div style={{ padding: '2.5rem' }}>
          <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: 600, marginBottom: '0.35rem' }}>
            Client Engagement: {project.clientType}
          </div>

          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.3rem)',
            fontWeight: 800,
            color: 'var(--color-deep-purple)',
            lineHeight: 1.25,
            marginBottom: '1.25rem'
          }}>
            {project.title}
          </h2>

          <p style={{
            fontSize: '1.05rem',
            color: 'var(--color-text-body)',
            lineHeight: 1.7,
            marginBottom: '2rem'
          }}>
            {project.summary}
          </p>

          {/* Verified Metrics Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginBottom: '2.5rem'
          }}>
            {project.metrics.map((m, idx) => (
              <div 
                key={idx}
                style={{
                  padding: '1.25rem',
                  borderRadius: '16px',
                  background: 'rgba(186, 154, 253, 0.1)',
                  border: '1px solid rgba(186, 154, 253, 0.3)'
                }}
              >
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-deep-purple)', lineHeight: 1 }}>
                  {m.value}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-text-body)', fontWeight: 600, marginTop: '0.4rem' }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Challenge & Solution Breakdown */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            <div style={{
              background: '#fdf7f7',
              borderRadius: '16px',
              padding: '1.5rem',
              border: '1px solid rgba(239, 68, 68, 0.2)'
            }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#dc2626', marginBottom: '0.75rem' }}>
                The Challenge
              </h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-body)', lineHeight: 1.65, margin: 0 }}>
                {project.challenge}
              </p>
            </div>

            <div style={{
              background: '#f0fdf4',
              borderRadius: '16px',
              padding: '1.5rem',
              border: '1px solid rgba(16, 185, 129, 0.2)'
            }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#16a34a', marginBottom: '0.75rem' }}>
                The Solution & Architecture
              </h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-body)', lineHeight: 1.65, margin: 0 }}>
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Deliverables & Highlights */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-deep-purple)', marginBottom: '1rem' }}>
              Key Technical Deliverables
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {project.highlights.map((h, hIdx) => (
                <li key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.92rem', color: 'var(--color-text-body)', lineHeight: 1.5 }}>
                  <CheckCircle2 size={18} color="var(--color-plum)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Stack Tags */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', marginBottom: '0.75rem' }}>
              Technologies Deployed
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.technologies.map((t, idx) => (
                <span 
                  key={idx}
                  style={{
                    background: '#f3f4f6',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    padding: '0.35rem 0.85rem',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: 'var(--color-deep-purple)'
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
