import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

export default function CoverflowSlider({ projects, onSelectProject }) {
  // Use first 6 featured brand case studies if more are passed
  const displayProjects = projects && projects.length > 6 ? projects.slice(0, 6) : (projects || []);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(1200);

  // Measure container width for responsive calculations
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Autoplay with pause-on-hover
  useEffect(() => {
    if (isPaused || displayProjects.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayProjects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, displayProjects.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + displayProjects.length) % displayProjects.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % displayProjects.length);
  };

  // Keyboard controls
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'ArrowRight') handleNext();
  };

  // Touch / Swipe handling for mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 40;
    const isRightSwipe = distance < -40;
    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrev();
    setTouchStart(0);
    setTouchEnd(0);
  };

  if (displayProjects.length === 0) return null;

  // Responsive dimensions for 3D Coverflow cards
  const isMobile = containerWidth < 640;
  const isTablet = containerWidth >= 640 && containerWidth < 1024;
  const cardWidth = isMobile ? Math.min(containerWidth - 40, 340) : isTablet ? 460 : 540;
  const cardHeight = isMobile ? 380 : isTablet ? 420 : 470;

  return (
    <section 
      className="case-studies-section"
      style={{
        backgroundColor: 'var(--color-deep-purple)',
        color: '#ffffff',
        padding: '5.5rem 0 4.5rem',
        overflow: 'hidden',
        position: 'relative'
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Case Studies Carousel"
    >
      <div className="container" ref={containerRef}>
        {/* ============================================================== */}
        {/* TWO-COLUMN INTRODUCTION AREA                                   */}
        {/* Left-aligned heading & Right-side supporting description + CTA */}
        {/* ============================================================== */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'end',
          marginBottom: '3rem'
        }}>
          {/* Left Column: Heading */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--color-lilac)',
              fontSize: '0.85rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: '0.75rem'
            }}>
              <span>✦</span>
              <span>Proven Shopify Solutions</span>
            </div>

            <h2 style={{
              fontSize: 'clamp(2.4rem, 4.2vw, 3.5rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: 'var(--color-lilac)',
              margin: 0,
              letterSpacing: '-0.02em'
            }}>
              Explore My<br />
              <span style={{ color: '#ffffff', fontWeight: 800 }}>Case Studies</span>
            </h2>
          </div>

          {/* Right Column: Supporting Description & Rounded CTA Button */}
          <div>
            <p style={{
              color: '#d1c7e8',
              fontSize: '1.05rem',
              lineHeight: 1.75,
              marginBottom: '1.75rem',
              maxWidth: '560px'
            }}>
              Take a closer look at selected e-commerce projects — custom Shopify development, tailored functionality, and stores engineered around real merchant growth goals.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link 
                to="/website-portfolio" 
                className="btn btn-lilac"
                style={{
                  padding: '0.85rem 1.85rem',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  boxShadow: '0 8px 24px rgba(186, 154, 253, 0.25)'
                }}
              >
                Explore All Projects <ArrowRight size={16} />
              </Link>

              {/* Prev / Next controls in header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginLeft: 'auto' }}>
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous Slide"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'var(--color-lilac)',
                    border: 'none',
                    color: 'var(--color-deep-purple)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 14px rgba(186, 154, 253, 0.3)'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                >
                  <ArrowLeft size={18} />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next Slide"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'var(--color-lilac)',
                    border: 'none',
                    color: 'var(--color-deep-purple)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 14px rgba(186, 154, 253, 0.3)'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 3D COVERFLOW SLIDER STAGE                                      */}
        {/* Center active card flat, flanking cards angled in 3D           */}
        {/* ============================================================== */}
        <div 
          style={{ 
            position: 'relative', 
            width: '100%', 
            height: `${cardHeight}px`,
            perspective: '1200px',
            margin: '2rem 0 1rem',
            userSelect: 'none'
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {displayProjects.map((project, idx) => {
            const total = displayProjects.length;
            let diff = (idx - currentIndex + total) % total;
            if (diff > total / 2) diff -= total;

            const isActive = diff === 0;
            const isPrev = diff === -1;
            const isNext = diff === 1;

            let xOffset = 0;
            let rotateY = 0;
            let scale = 1;
            let opacity = 0;
            let zIndex = 1;
            let pointerEvents = 'none';

            if (isActive) {
              xOffset = 0;
              rotateY = 0;
              scale = 1;
              opacity = 1;
              zIndex = 10;
              pointerEvents = 'auto';
            } else if (isPrev) {
              xOffset = isMobile ? -cardWidth * 0.72 : -360;
              rotateY = 24; // positive Y angles right side forward, left side back
              scale = isMobile ? 0.84 : 0.87;
              opacity = 0.55;
              zIndex = 5;
              pointerEvents = 'auto';
            } else if (isNext) {
              xOffset = isMobile ? cardWidth * 0.72 : 360;
              rotateY = -24; // negative Y angles left side forward, right side back
              scale = isMobile ? 0.84 : 0.87;
              opacity = 0.55;
              zIndex = 5;
              pointerEvents = 'auto';
            } else if (diff < -1) {
              xOffset = isMobile ? -cardWidth * 1.3 : -720;
              rotateY = 32;
              scale = 0.7;
              opacity = 0;
              zIndex = 1;
              pointerEvents = 'none';
            } else if (diff > 1) {
              xOffset = isMobile ? cardWidth * 1.3 : 720;
              rotateY = -32;
              scale = 0.7;
              opacity = 0;
              zIndex = 1;
              pointerEvents = 'none';
            }

            return (
              <div
                key={project.id || idx}
                onClick={() => {
                  if (isActive) {
                    if (onSelectProject) onSelectProject(project);
                  } else if (isPrev) {
                    handlePrev();
                  } else if (isNext) {
                    handleNext();
                  } else {
                    setCurrentIndex(idx);
                  }
                }}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  transform: `translate(calc(-50% + ${xOffset}px), -50%) rotateY(${rotateY}deg) scale(${scale})`,
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.55s ease, filter 0.55s ease, box-shadow 0.55s ease',
                  opacity,
                  zIndex,
                  pointerEvents,
                  borderRadius: '22px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: isActive
                    ? '0 30px 70px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(186, 154, 253, 0.25)'
                    : '0 15px 35px rgba(0, 0, 0, 0.45)',
                  filter: isActive ? 'none' : 'brightness(0.85)',
                  background: '#120726'
                }}
              >
                {/* Background Storefront Mockup Image */}
                <img
                  src={project.thumbnail}
                  alt={project.brandName || project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.6s ease'
                  }}
                />

                {/* Bottom Overlay with Category Brand Name & Subtitle (active card only) */}
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: '52%',
                    background: 'linear-gradient(to top, rgba(14, 6, 30, 0.98) 0%, rgba(14, 6, 30, 0.75) 45%, rgba(14, 6, 30, 0.2) 75%, transparent 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    padding: isMobile ? '1.5rem 1rem' : '2.2rem 1.5rem 1.75rem',
                    textAlign: 'center',
                    opacity: isActive ? 1 : 0,
                    transition: 'opacity 0.4s ease',
                    pointerEvents: isActive ? 'auto' : 'none'
                  }}
                >
                  {/* Uppercase Subtitle: SHOPIFY DEVELOPMENT */}
                  <div
                    style={{
                      fontSize: isMobile ? '0.72rem' : '0.8rem',
                      fontWeight: 700,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: '#ba9afd',
                      marginBottom: '0.45rem',
                      textShadow: '0 2px 8px rgba(0,0,0,0.5)'
                    }}
                  >
                    {project.subtitle || 'Shopify Development'}
                  </div>

                  {/* Category Brand Name e.g. Fashion Brand, Luggage Brand, Electronics */}
                  <h3
                    style={{
                      fontSize: isMobile ? '1.5rem' : '2.1rem',
                      fontWeight: 800,
                      color: '#ffffff',
                      lineHeight: 1.2,
                      margin: '0 0 0.75rem 0',
                      letterSpacing: '-0.01em',
                      textShadow: '0 2px 12px rgba(0,0,0,0.7)'
                    }}
                  >
                    {project.brandName || project.category}
                  </h3>

                  {/* Project Linked Button */}
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onSelectProject) onSelectProject(project);
                      }}
                      className="btn btn-lilac"
                      style={{
                        padding: '0.45rem 1.25rem',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        borderRadius: '999px',
                        boxShadow: '0 4px 14px rgba(186, 154, 253, 0.35)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem'
                      }}
                    >
                      <span>View Case Study</span>
                      <ArrowRight size={14} />
                    </button>

                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Visit live website for ${project.brandName || project.title}`}
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.12)',
                          border: '1px solid rgba(255, 255, 255, 0.25)',
                          color: '#ffffff',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backdropFilter: 'blur(6px)',
                          transition: 'all 0.2s ease',
                          textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)'; }}
                      >
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ============================================================== */}
        {/* BOTTOM PAGINATION OF DOTS                                      */}
        {/* Pill-shaped dots matching the reference screenshot             */}
        {/* ============================================================== */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            marginTop: '2.5rem'
          }}
        >
          {displayProjects.map((proj, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={proj.id || idx}
                type="button"
                aria-label={`Go to slide ${idx + 1}: ${proj.brandName || proj.title}`}
                onClick={() => setCurrentIndex(idx)}
                style={{
                  width: '22px',
                  height: '6px',
                  borderRadius: '3px',
                  background: isActive ? 'var(--color-lilac)' : 'rgba(186, 154, 253, 0.22)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.3s ease',
                  boxShadow: isActive ? '0 0 12px rgba(186, 154, 253, 0.7)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.background = 'rgba(186, 154, 253, 0.55)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.background = 'rgba(186, 154, 253, 0.22)';
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
