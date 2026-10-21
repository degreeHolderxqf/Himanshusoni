import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import Ticker from '../components/Ticker';
import { projectsData, tickerItems } from '../data/portfolioData';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { label: 'All Projects', value: 'All' },
    { label: 'Custom Themes & Liquid', value: 'themes' },
    { label: 'Shopify Apps & Sync', value: 'apps' },
    { label: 'Store Migrations', value: 'migration' }
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
      {/* SIGNATURE SUBPAGE DARK HERO BANNER (PRIYA MATCH)               */}
      {/* ============================================================== */}
      <section className="subpage-hero-banner">
        <div className="container">
          <span className="hero-category">WEBSITE PORTFOLIO</span>
          <h1 className="hero-headline" style={{ marginBottom: '0.75rem' }}>
            Shopify Development Portfolio &amp; Case Studies
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', color: '#e5e7eb', lineHeight: 1.6, maxWidth: '850px', margin: 0 }}>
            Custom Shopify 2.0 themes, Shopify Plus checkout functions, embedded Remix apps, multi-variant inventory synchronization, and sub-1.2s speed optimization shipped for scaling brands.
          </p>
        </div>
      </section>

      {/* ============================================================== */}
      {/* FILTER & SEARCH BAR ON CLEAN LIGHT BACKGROUND                  */}
      {/* ============================================================== */}
      <section style={{
        padding: '1.75rem 1.5rem',
        background: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
        position: 'sticky',
        top: '0px',
        zIndex: 20
      }}>
        <div className="container" style={{
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
                  type="button"
                  onClick={() => setActiveCategory(cat.value)}
                  style={{
                    padding: '0.5rem 1.15rem',
                    borderRadius: '999px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: active
                      ? '1px solid var(--color-deep-purple)'
                      : '1px solid #e2e8f0',
                    background: active
                      ? 'var(--color-lilac)'
                      : '#ffffff',
                    color: 'var(--color-deep-purple)',
                    boxShadow: active ? '0 4px 12px rgba(186, 154, 253, 0.35)' : 'none'
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
            minWidth: '240px',
            flex: '0 1 280px'
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
                background: '#f8f9fa',
                border: '1px solid #cbd5e1',
                color: 'var(--color-deep-purple)',
                fontSize: '0.88rem',
                outline: 'none'
              }}
            />
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* PROJECTS GRID                                                 */}
      {/* ============================================================== */}
      <section className="section" style={{ background: '#fafafa', minHeight: '55vh' }}>
        <div className="container">
          {filteredProjects.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '4rem 1rem',
              background: '#ffffff',
              borderRadius: '20px',
              border: '1px dashed #cbd5e1'
            }}>
              <p style={{ fontSize: '1.2rem', color: 'var(--color-deep-purple)', fontWeight: 700, marginBottom: '0.5rem' }}>
                No projects matched your criteria
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                Try selecting a different category or clearing your search query.
              </p>
              <button
                type="button"
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="btn btn-dark"
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

      {/* Dark Ticker */}
      <Ticker items={tickerItems} variant="dark" />

      {/* Conversion Banner */}
      <section className="section section-light" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            fontWeight: 700,
            color: 'var(--color-deep-purple)',
            marginBottom: '1rem'
          }}>
            Have a Specific Shopify Customization in Mind?
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: 'var(--color-text-body)',
            lineHeight: 1.6,
            marginBottom: '2rem'
          }}>
            I collaborate with direct-to-consumer brands and digital agencies on custom theme architecture, Shopify Functions, and Remix app backends. Let's discuss your technical roadmap.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Link to="/contactus" className="btn btn-dark">
              Lets Talk <ArrowRight size={16} />
            </Link>
            <Link to="/planner" className="btn btn-lilac">
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
