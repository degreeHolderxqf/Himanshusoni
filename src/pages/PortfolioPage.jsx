import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Search, 
  ArrowRight, 
  Layers, 
  Filter, 
  ExternalLink,
  CheckCircle2,
  TrendingUp,
  Cpu
} from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import Ticker from '../components/Ticker';
import { projectsData, tickerItems, verifiedMetrics } from '../data/portfolioData';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { label: 'All Projects', value: 'All' },
    { label: 'Shopify Apps & Remix', value: 'apps' },
    { label: 'Shopify Plus & Checkout', value: 'plus' },
    { label: 'Custom Themes & Liquid', value: 'themes' },
    { label: 'Storefront Performance', value: 'speed' }
  ];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((proj) => {
      const matchesCategory = 
        activeCategory === 'All' || 
        proj.categorySlug === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q || 
        proj.title.toLowerCase().includes(q) || 
        proj.summary.toLowerCase().includes(q) ||
        proj.category.toLowerCase().includes(q) ||
        proj.technologies.some(t => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="portfolio-page-wrapper">
      {/* ============================================================== */}
      {/* PORTFOLIO HERO BANNER                                         */}
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
            Verified Engineering Portfolio
          </span>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
            fontWeight: 800,
            color: 'var(--color-white)',
            lineHeight: 1.15,
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em'
          }}>
            Selected <span className="gradient-text">Shopify Projects</span> & Case Studies
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
            color: 'var(--color-text-muted)',
            lineHeight: 1.6,
            maxWidth: '680px',
            margin: '0 auto 2.5rem'
          }}>
            Explore real-world implementations across custom Remix apps, Shopify Plus checkout delivery functions, bespoke Shopify 2.0 themes, and Core Web Vitals speed optimization.
          </p>

          {/* Quick Metrics Strip */}
          <div style={{
            display: 'inline-flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.5rem',
            padding: '1rem 2rem',
            borderRadius: '16px',
            background: 'rgba(25, 12, 57, 0.7)',
            border: '1px solid rgba(186, 154, 253, 0.2)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
          }}>
            {verifiedMetrics.map((m, idx) => (
              <div key={idx} style={{ textAlign: 'center', padding: '0 0.75rem' }}>
                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-primary-lilac)', marginRight: '0.4rem' }}>
                  {m.value}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* FILTER & SEARCH BAR                                           */}
      {/* ============================================================== */}
      <section style={{
        padding: '2rem 1.5rem',
        background: 'rgba(25, 12, 57, 0.4)',
        borderBottom: '1px solid var(--color-border)',
        position: 'sticky',
        top: '80px',
        zIndex: 20,
        backdropFilter: 'blur(12px)'
      }}>
        <div className="container" style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.25rem',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Category Tabs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            alignItems: 'center'
          }}>
            {categories.map((cat) => {
              const active = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  style={{
                    padding: '0.5rem 1.1rem',
                    borderRadius: '999px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: active 
                      ? '1px solid var(--color-primary-lilac)' 
                      : '1px solid rgba(255, 255, 255, 0.1)',
                    background: active 
                      ? 'var(--color-primary-lilac)' 
                      : 'rgba(25, 12, 57, 0.6)',
                    color: active ? '#190c39' : 'var(--color-text-muted)',
                    boxShadow: active ? '0 4px 15px rgba(186, 154, 253, 0.4)' : 'none'
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div style={{
            position: 'relative',
            minWidth: '260px',
            flex: '0 1 300px'
          }}>
            <Search 
              size={18} 
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--color-text-muted)'
              }}
            />
            <input 
              type="text"
              placeholder="Search by tech or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.55rem 1rem 0.55rem 2.4rem',
                borderRadius: '999px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(186, 154, 253, 0.25)',
                color: 'var(--color-white)',
                fontSize: '0.88rem',
                outline: 'none',
                transition: 'border-color 0.2s ease'
              }}
            />
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* PROJECTS GRID                                                 */}
      {/* ============================================================== */}
      <section className="section" style={{ background: 'var(--color-bg)', minHeight: '50vh' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          {filteredProjects.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '4rem 1rem',
              background: 'rgba(25, 12, 57, 0.5)',
              borderRadius: '20px',
              border: '1px dashed rgba(186, 154, 253, 0.3)'
            }}>
              <p style={{ fontSize: '1.2rem', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                No projects matched your criteria
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                Try selecting a different category or clearing your search query.
              </p>
              <button 
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="btn btn-secondary"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
              gap: '2rem'
            }}>
              {filteredProjects.map((project) => (
                <ProjectCard 
                  key={project.id}
                  project={project}
                  onSelect={(p) => setSelectedProject(p)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lilac Ticker */}
      <Ticker items={tickerItems} variant="lilac" />

      {/* ============================================================== */}
      {/* BOTTOM INVITATION CTA                                         */}
      {/* ============================================================== */}
      <section className="section" style={{
        background: 'linear-gradient(180deg, var(--color-bg) 0%, rgba(78, 24, 112, 0.2) 100%)',
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
            Have a Specific Shopify Customization in Mind?
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.6,
            marginBottom: '2rem'
          }}>
            I collaborate with direct-to-consumer brands and digital agencies on custom theme architecture, Shopify Functions, and Remix app backends. Let's discuss your technical roadmap.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Link to="/contactus" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Let's Discuss Your Project <ArrowRight size={18} />
            </Link>
            <Link to="/planner" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={16} color="var(--color-primary-lilac)" />
              Use Project Planner
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
