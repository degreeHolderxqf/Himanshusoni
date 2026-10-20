import React from 'react';
import { ArrowUpRight, Zap } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  return (
    <div
      onClick={() => onSelect(project)}
      style={{
        background: '#ffffff',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1px solid rgba(186, 154, 253, 0.25)',
        cursor: 'pointer',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 18px rgba(0, 0, 0, 0.04)',
        position: 'relative'
      }}
      className="portfolio-card"
    >
      {/* Thumbnail */}
      <div style={{ position: 'relative', overflow: 'hidden', height: '240px', background: '#190c39' }}>
        <img
          src={project.thumbnail}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          className="portfolio-card-img"
        />
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            background: 'rgba(25, 12, 57, 0.85)',
            backdropFilter: 'blur(8px)',
            color: '#ba9afd',
            fontSize: '0.78rem',
            fontWeight: 700,
            padding: '0.35rem 0.85rem',
            borderRadius: '9999px',
            border: '1px solid rgba(186, 154, 253, 0.3)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}
        >
          {project.category}
        </div>

        {/* Hover Arrow Badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: '#ba9afd',
            color: '#190c39',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            transform: 'scale(0.85)',
            transition: 'transform 0.3s ease, background 0.3s ease'
          }}
          className="portfolio-card-arrow"
        >
          <ArrowUpRight size={20} />
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ fontSize: '0.85rem', color: '#6b7280', fontWeight: 600, marginBottom: '0.5rem' }}>
          {project.clientType}
        </div>

        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#190c39', marginBottom: '0.75rem', lineHeight: 1.35 }}>
          {project.title}
        </h3>

        <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: 1.6, marginBottom: '1.25rem', flexGrow: 1 }}>
          {project.summary}
        </p>

        {/* Highlight pill */}
        {project.metrics && project.metrics[0] && (
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 0.8rem',
              background: '#f4efff',
              borderRadius: '8px',
              fontSize: '0.84rem',
              fontWeight: 700,
              color: '#4e1870',
              marginBottom: '1rem',
              width: 'fit-content'
            }}
          >
            <Zap size={14} color="#ba9afd" />
            <span>{project.metrics[0].label}: {project.metrics[0].value}</span>
          </div>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', borderTop: '1px solid #f1f5f9', paddingTop: '1rem' }}>
          {project.technologies.slice(0, 3).map((t, i) => (
            <span key={i} style={{ fontSize: '0.75rem', color: '#6b7280', background: '#f8fafc', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 500 }}>
              {t}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span style={{ fontSize: '0.75rem', color: '#9ca3af', padding: '0.2rem 0.4rem' }}>
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
      </div>

      <style>{`
        .portfolio-card:hover {
          transform: translateY(-6px);
          border-color: #ba9afd;
          box-shadow: 0 16px 36px rgba(186, 154, 253, 0.22);
        }
        .portfolio-card:hover .portfolio-card-img {
          transform: scale(1.05);
        }
        .portfolio-card:hover .portfolio-card-arrow {
          transform: scale(1);
          background: #190c39;
          color: #ba9afd;
        }
      `}</style>
    </div>
  );
}
