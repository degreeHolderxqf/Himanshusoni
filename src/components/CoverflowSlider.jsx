import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function CoverflowSlider({ onSelectProject }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden', padding: '1rem 0 3rem' }}>
      {/* Slider Viewport */}
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          position: 'relative',
          minHeight: '440px'
        }}
      >
        {projectsData.map((project, index) => {
          const isActive = index === currentIndex;
          const isPrev = index === (currentIndex === 0 ? projectsData.length - 1 : currentIndex - 1);
          const isNext = index === (currentIndex === projectsData.length - 1 ? 0 : currentIndex + 1);

          let transform = 'scale(0.8) translateX(120%)';
          let opacity = 0;
          let zIndex = 1;
          let pointerEvents = 'none';

          if (isActive) {
            transform = 'scale(1) translateX(0)';
            opacity = 1;
            zIndex = 10;
            pointerEvents = 'auto';
          } else if (isPrev) {
            transform = 'scale(0.88) translateX(-50%)';
            opacity = 0.45;
            zIndex = 5;
            pointerEvents = 'auto';
          } else if (isNext) {
            transform = 'scale(0.88) translateX(50%)';
            opacity = 0.45;
            zIndex = 5;
            pointerEvents = 'auto';
          }

          return (
            <div
              key={project.id}
              onClick={() => {
                if (isActive) onSelectProject(project);
                else setCurrentIndex(index);
              }}
              style={{
                position: 'absolute',
                top: 0,
                left: '10%',
                right: '10%',
                height: '420px',
                borderRadius: '24px',
                overflow: 'hidden',
                background: '#190c39',
                boxShadow: isActive ? '0 20px 50px rgba(25, 12, 57, 0.28)' : '0 8px 20px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                transform,
                opacity,
                zIndex,
                pointerEvents,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end'
              }}
            >
              {/* Background Mockup Image */}
              <img
                src={project.thumbnail}
                alt={project.title}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.88
                }}
              />

              {/* Gradient Dark Overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(180deg, rgba(25, 12, 57, 0.1) 20%, rgba(25, 12, 57, 0.95) 90%)'
                }}
              />

              {/* Overlay Content */}
              <div style={{ position: 'relative', zIndex: 2, padding: '2.5rem' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ba9afd', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>
                  {project.category}
                </div>
                <h3 style={{ fontSize: '1.85rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                  {project.title}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                  <p style={{ color: '#e2e8f0', fontSize: '0.95rem', maxWidth: '650px', margin: 0, lineHeight: 1.5 }}>
                    {project.summary}
                  </p>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      background: '#ba9afd',
                      color: '#190c39',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      padding: '0.5rem 1.1rem',
                      borderRadius: '9999px',
                      boxShadow: '0 4px 12px rgba(186, 154, 253, 0.4)'
                    }}
                  >
                    View Case Study
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls: Arrows and Dots */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginTop: '1.5rem' }}>
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: '#ba9afd',
            border: 'none',
            color: '#190c39',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s, background 0.2s',
            boxShadow: '0 4px 14px rgba(186, 154, 253, 0.4)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <ChevronLeft size={22} />
        </button>

        <div style={{ display: 'flex', gap: '8px' }}>
          {projectsData.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              style={{
                width: dotIdx === currentIndex ? '28px' : '9px',
                height: '9px',
                borderRadius: '9999px',
                background: dotIdx === currentIndex ? '#ba9afd' : '#cbd5e1',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: '#ba9afd',
            border: 'none',
            color: '#190c39',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s, background 0.2s',
            boxShadow: '0 4px 14px rgba(186, 154, 253, 0.4)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  );
}
