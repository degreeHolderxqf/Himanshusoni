import React, { useEffect } from 'react';
import { X, CheckCircle, ArrowRight, ExternalLink, Zap, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(25, 12, 57, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 99999,
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
          maxWidth: '920px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)',
          position: 'relative',
          animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'rgba(25, 12, 57, 0.08)',
            border: 'none',
            color: '#190c39',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            transition: 'background 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(25, 12, 57, 0.16)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(25, 12, 57, 0.08)'}
          aria-label="Close modal"
        >
          <X size={22} />
        </button>

        {/* Hero Image Container */}
        <div style={{ width: '100%', maxHeight: '380px', overflow: 'hidden', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', background: '#190c39' }}>
          <img
            src={project.thumbnail}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Modal Body */}
        <div style={{ padding: '2.5rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span className="badge badge-purple" style={{ fontSize: '0.82rem', padding: '0.4rem 1rem' }}>
              {project.category}
            </span>
            <span style={{ fontSize: '0.9rem', color: '#6b7280', fontWeight: 500 }}>
              • {project.clientType}
            </span>
          </div>

          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#190c39', marginBottom: '1.25rem', lineHeight: 1.25 }}>
            {project.title}
          </h2>

          <p style={{ fontSize: '1.1rem', color: '#374151', marginBottom: '2rem', lineHeight: 1.7 }}>
            {project.summary}
          </p>

          {/* Metrics Grid */}
          {project.metrics && project.metrics.length > 0 && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1rem',
                background: '#f8f6fc',
                borderRadius: '16px',
                padding: '1.5rem',
                marginBottom: '2rem',
                border: '1px solid rgba(186, 154, 253, 0.3)'
              }}
            >
              {project.metrics.map((metric, i) => (
                <div key={i}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#4e1870', lineHeight: 1.2 }}>
                    {metric.value}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#6b7280', fontWeight: 600, marginTop: '0.2rem' }}>
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Problem & Solution Breakdown */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#190c39', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Zap size={18} color="#ba9afd" />
                The Challenge
              </h4>
              <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: 1.65 }}>
                {project.challenge}
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#190c39', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Layers size={18} color="#ba9afd" />
                Technical Solution
              </h4>
              <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: 1.65 }}>
                {project.solution}
              </p>
            </div>
          </div>

          {/* Implementation Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#190c39', marginBottom: '1rem' }}>
                Key Technical Highlights
              </h4>
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                {project.highlights.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle size={18} color="#ba9afd" style={{ minWidth: '18px', marginTop: '3px' }} />
                    <span style={{ fontSize: '0.95rem', color: '#374151', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.75rem' }}>
              Technologies Used
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.technologies.map((tech, i) => (
                <span key={i} className="badge badge-dark" style={{ fontSize: '0.85rem', padding: '0.4rem 0.9rem' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', borderTop: '1px solid #f1f5f9', paddingTop: '1.5rem' }}>
            <Link
              to="/planner"
              onClick={onClose}
              className="btn btn-primary"
              style={{ padding: '0.8rem 1.6rem' }}
            >
              Discuss a Similar Project
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/contactus"
              onClick={onClose}
              className="btn btn-secondary"
              style={{ padding: '0.8rem 1.6rem' }}
            >
              Contact Himanshu
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
