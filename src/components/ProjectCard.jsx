import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  return (
    <div 
      className="project-card"
      style={{
        background: '#ffffff',
        borderRadius: '20px',
        border: '1px solid rgba(0, 0, 0, 0.08)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer'
      }}
      onClick={() => onSelect && onSelect(project)}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--color-lilac)';
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 15px 35px rgba(186, 154, 253, 0.18)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.08)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)';
      }}
    >
      <div>
        {/* Project Thumbnail Image */}
        <div style={{ position: 'relative', overflow: 'hidden', height: '230px', background: '#f3f4f6' }}>
          <img 
            src={project.thumbnail} 
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 0.5s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
          />

          {/* Category Pill Tag */}
          <div style={{
            position: 'absolute',
            top: '14px',
            left: '14px',
            background: 'rgba(25, 12, 57, 0.85)',
            color: 'var(--color-lilac)',
            backdropFilter: 'blur(8px)',
            borderRadius: '999px',
            padding: '0.35rem 0.85rem',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.04em'
          }}>
            {project.category}
          </div>
        </div>

        {/* Card Body */}
        <div style={{ padding: '1.75rem' }}>
          <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', fontWeight: 600, marginBottom: '0.4rem' }}>
            {project.clientType}
          </div>

          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            color: 'var(--color-deep-purple)',
            lineHeight: 1.35,
            marginBottom: '0.75rem'
          }}>
            {project.title}
          </h3>

          <p style={{
            fontSize: '0.9rem',
            color: 'var(--color-text-body)',
            lineHeight: 1.6,
            marginBottom: '1.25rem'
          }}>
            {project.summary}
          </p>

          {/* Key Metrics Chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
            {project.metrics.map((m, idx) => (
              <span 
                key={idx}
                style={{
                  background: 'rgba(186, 154, 253, 0.1)',
                  border: '1px solid rgba(186, 154, 253, 0.25)',
                  borderRadius: '6px',
                  padding: '0.25rem 0.6rem',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--color-deep-purple)'
                }}
              >
                <strong>{m.value}</strong> {m.label}
              </span>
            ))}
          </div>

          {/* Tech tags preview */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {project.technologies.slice(0, 3).map((tech, tIdx) => (
              <span 
                key={tIdx}
                style={{
                  fontSize: '0.72rem',
                  color: 'var(--color-text-muted)',
                  background: '#f3f4f6',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '4px'
                }}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', padding: '0.2rem 0.3rem' }}>
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Link */}
      <div style={{
        padding: '1rem 1.75rem',
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#fafafa'
      }}>
        <span style={{
          fontSize: '0.85rem',
          fontWeight: 700,
          color: 'var(--color-deep-purple)'
        }}>
          View Case Study
        </span>
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: 'var(--color-lilac)',
          color: 'var(--color-deep-purple)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.2s ease'
        }}>
          <ArrowUpRight size={16} />
        </div>
      </div>
    </div>
  );
}
