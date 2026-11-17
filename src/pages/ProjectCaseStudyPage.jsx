import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronRight, ExternalLink } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import {
  caseStudiesData,
  getCaseStudyBySlug,
  getCaseStudyPath
} from '../data/caseStudiesData';
import './ProjectCaseStudyPage.css';

function FeatureVisual({ kind }) {
  if (kind === 'comparison' || kind === 'specs' || kind === 'filters') {
    return (
      <div className="feature-visual feature-visual-table" aria-hidden="true">
        <div className="visual-table-head"><span>Option</span><span>Details</span><span>Fit</span></div>
        {['Core', 'Plus', 'Pro'].map((item, index) => (
          <div className="visual-table-row" key={item}>
            <span><i className={`visual-dot visual-dot-${index}`} />{item}</span>
            <span>{index === 0 ? 'Compact' : index === 1 ? 'Balanced' : 'Extended'}</span>
            <Check size={14} />
          </div>
        ))}
      </div>
    );
  }

  if (kind === 'calculator' || kind === 'sizing' || kind === 'personalize') {
    return (
      <div className="feature-visual feature-visual-calculator" aria-hidden="true">
        <div className="visual-input"><span>{kind === 'sizing' ? 'Your measurements' : kind === 'personalize' ? 'Personal detail' : 'Project size'}</span><b>{kind === 'sizing' ? 'Made to measure' : kind === 'personalize' ? 'Add engraving' : '42.0 m²'}</b></div>
        <div className="visual-calc-line"><span /><span /><span /></div>
        <div className="visual-result"><span>{kind === 'personalize' ? 'Preview' : 'Recommended'}</span><strong>{kind === 'sizing' ? 'Fit profile' : kind === 'personalize' ? 'Bottle detail' : '12 packs'}</strong><ArrowRight size={15} /></div>
      </div>
    );
  }

  if (kind === 'preview') {
    return (
      <div className="feature-visual feature-visual-preview" aria-hidden="true">
        <div className="visual-case-shape"><span /><i /><b /></div>
        <div className="visual-dimension-list"><span>Cabin size <b>55 cm</b></span><span>Check-in <b>72 cm</b></span><span>Capacity <b>Compare</b></span></div>
      </div>
    );
  }

  if (kind === 'samples') {
    return (
      <div className="feature-visual feature-visual-samples" aria-hidden="true">
        {['Discovery', 'Warm', 'Fresh'].map((label, index) => (
          <div className="visual-sample" key={label}><i className={`sample-bottle bottle-${index}`} /><span>{label}</span></div>
        ))}
      </div>
    );
  }

  if (kind === 'booking') {
    return (
      <div className="feature-visual feature-visual-booking" aria-hidden="true">
        <div className="visual-calendar"><strong>Choose a date</strong><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span className="selected">14</span><span>15</span><span>16</span><span>17</span></div>
        <div className="visual-booking-note"><span>Retreat inquiry</span><b>Tell us what you’re looking for</b></div>
      </div>
    );
  }

  if (kind === 'materials') {
    return (
      <div className="feature-visual feature-visual-materials" aria-hidden="true">
        <div className="visual-material-swatch"><i /><span>Natural linen</span></div>
        <div className="visual-material-swatch"><i /><span>Botanical print</span></div>
        <div className="visual-material-swatch"><i /><span>Made with care</span></div>
      </div>
    );
  }

  if (kind === 'navigation') {
    return (
      <div className="feature-visual feature-visual-navigation" aria-hidden="true">
        <div className="visual-nav-list"><b>Equipment</b><span>Pumps <i /></span><span>Filters <i /></span><span>Heating <i /></span><span>Automation <i /></span></div>
        <div className="visual-nav-content"><i /><b>Find the right fit</b><span>Review key details</span></div>
      </div>
    );
  }

  if (kind === 'subscription') {
    return (
      <div className="feature-visual feature-visual-subscription" aria-hidden="true">
        <div><span>Repeat order</span><b>Every 30 days</b></div>
        <div className="visual-cycle"><span>01</span><i /><span>02</span><i /><span>03</span></div>
        <small>Adjust or pause your plan</small>
      </div>
    );
  }

  if (kind === 'migration') {
    return (
      <div className="feature-visual feature-visual-migration" aria-hidden="true">
        <div className="visual-platform"><b>Store</b><span>Catalog</span><span>Navigation</span><span>Orders</span></div>
        <ArrowRight size={20} />
        <div className="visual-platform destination"><b>Shopify</b><span>Products</span><span>Collections</span><span>Storefront</span></div>
      </div>
    );
  }

  if (kind === 'sync' || kind === 'variants' || kind === 'inventory' || kind === 'integration') {
    return (
      <div className="feature-visual feature-visual-sync" aria-hidden="true">
        <div className="visual-stock-card"><span>Variant A</span><strong>Shared stock</strong><b>18</b></div>
        <div className="visual-sync-link"><span /><ArrowRight size={16} /><span /></div>
        <div className="visual-stock-card"><span>Variant B</span><strong>Updated</strong><b>18</b></div>
      </div>
    );
  }

  if (kind === 'search' || kind === 'discovery' || kind === 'sorting') {
    return (
      <div className="feature-visual feature-visual-search" aria-hidden="true">
        <div className="visual-search-field"><span /><span>Find a product</span><b>⌕</b></div>
        <div className="visual-search-result"><i /><span><b>Matching product</b><small>Relevant details and options</small></span><ArrowUpRight size={14} /></div>
        <div className="visual-search-result muted"><i /><span><b>Related option</b><small>More to explore</small></span><ChevronRight size={14} /></div>
      </div>
    );
  }

  if (kind === 'cart' || kind === 'progress' || kind === 'checkout' || kind === 'ordering') {
    return (
      <div className="feature-visual feature-visual-cart" aria-hidden="true">
        <div className="visual-cart-top"><span>Order summary</span><b>02 items</b></div>
        <div className="visual-cart-item"><i /><span /><span /></div>
        <div className="visual-progress-copy"><span>Progress</span><b>Almost there</b></div>
        <div className="visual-progress-track"><span /></div>
      </div>
    );
  }

  if (kind === 'quiz' || kind === 'booking' || kind === 'migration' || kind === 'sequence') {
    return (
      <div className="feature-visual feature-visual-steps" aria-hidden="true">
        <div className="visual-steps-label"><span>01 — Explore</span><b>Step 1 of 3</b></div>
        <div className="visual-step-track"><span /><span /><span /></div>
        <div className="visual-choice-grid"><span>Option A</span><span>Option B</span><span>Option C</span></div>
        <div className="visual-step-cta">Continue <ArrowRight size={13} /></div>
      </div>
    );
  }

  if (kind === 'mobile' || kind === 'preview' || kind === 'samples' || kind === 'lookbook' || kind === 'editorial') {
    return (
      <div className={`feature-visual feature-visual-cards visual-${kind}`} aria-hidden="true">
        <div className="visual-product-card wide"><div /><span /><b /></div>
        <div className="visual-product-card"><div /><span /><b /></div>
        <div className="visual-product-card"><div /><span /><b /></div>
      </div>
    );
  }

  return (
    <div className="feature-visual feature-visual-cards" aria-hidden="true">
      <div className="visual-product-card wide"><div /><span /><b /></div>
      <div className="visual-product-card"><div /><span /><b /></div>
      <div className="visual-product-card"><div /><span /><b /></div>
    </div>
  );
}

function CaseStudyBreadcrumbs({ project }) {
  return (
    <nav className="case-breadcrumbs" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      <ChevronRight size={14} aria-hidden="true" />
      <Link to="/website-portfolio">Portfolio</Link>
      <ChevronRight size={14} aria-hidden="true" />
      <span aria-current="page">{project.name}</span>
    </nav>
  );
}

function ProjectNavigation({ previous, next }) {
  return (
    <section className="case-project-navigation" aria-label="Explore other projects">
      {previous ? (
        <Link className="case-nav-card previous" to={getCaseStudyPath(previous)}>
          <span><ArrowLeft size={15} /> Previous project</span>
          <strong>{previous.name}</strong>
        </Link>
      ) : <span className="case-nav-spacer" />}
      <Link className="case-nav-all" to="/website-portfolio">All projects <ArrowUpRight size={16} /></Link>
      {next ? (
        <Link className="case-nav-card next" to={getCaseStudyPath(next)}>
          <span>Next project <ArrowRight size={15} /></span>
          <strong>{next.name}</strong>
        </Link>
      ) : <span className="case-nav-spacer" />}
    </section>
  );
}

export default function ProjectCaseStudyPage() {
  const { slug } = useParams();
  const project = getCaseStudyBySlug(slug);

  if (!project) return <Navigate to="/website-portfolio" replace />;

  const index = caseStudiesData.findIndex((item) => item.slug === project.slug);
  const previous = caseStudiesData[index - 1] || null;
  const next = caseStudiesData[index + 1] || null;
  const showLiveLink = project.liveUrlVerified && Boolean(project.liveUrl);
  const supportingImages = project.gallery.filter((image) => image.src !== project.heroImage);

  return (
    <article className={`case-study-page theme-${project.visualTheme}`}>
      <div className="container">
        <CaseStudyBreadcrumbs project={project} />

        <header className="case-study-hero">
          <div className="case-hero-copy">
            <p className="case-eyebrow"><span /> {project.category}</p>
            <h1>{project.title}</h1>
            <p className="case-hero-summary">{project.summary}</p>
            <div className="case-hero-services" aria-label="Project services">
              {project.services.map((service) => <span key={service}>{service}</span>)}
            </div>
            {showLiveLink && (
              <a className="case-live-button" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Visit Live Website <ExternalLink size={16} aria-hidden="true" />
              </a>
            )}
          </div>

          <div className="case-hero-art">
            <div className="case-image-frame">
              <img src={project.heroImage} alt={project.heroAlt} width="1600" height="1000" fetchPriority="high" />
              <span className="case-image-caption">Project visual</span>
            </div>
            <div className="case-image-index"><span>SELECTED WORK</span><b>{String(index + 1).padStart(2, '0')} / {String(caseStudiesData.length).padStart(2, '0')}</b></div>
          </div>
        </header>

        <div className="case-facts" aria-label="Project details">
          <div><span>Project</span><strong>{project.name}</strong></div>
          <div><span>Category</span><strong>{project.category}</strong></div>
          <div><span>Services</span><strong>{project.services.join(' · ')}</strong></div>
          <div><span>Technology</span><strong>{project.technologies.slice(0, 3).join(' · ')}</strong></div>
        </div>

        <section className="case-overview case-section" aria-labelledby="case-overview-title">
          <div className="case-section-label"><span>01</span><span>Project overview</span></div>
          <div className="case-overview-grid">
            <h2 id="case-overview-title">A considered experience for {project.name}.</h2>
            <div>
              <p>{project.overview}</p>
              <div className="case-audience"><span>Audience</span><strong>{project.audience}</strong></div>
            </div>
          </div>
        </section>

        <section className="case-context-grid case-section" aria-label="Project challenge and approach">
          <div className="case-context-card case-challenge">
            <div className="case-section-label"><span>02</span><span>The challenge</span></div>
            <h2>Make the important decision feel clear.</h2>
            <p>{project.challenge}</p>
          </div>
          <div className="case-context-card case-strategy">
            <div className="case-section-label"><span>03</span><span>Strategy &amp; approach</span></div>
            <h2>Design the path around the customer’s next step.</h2>
            <p>{project.strategy}</p>
            <div className="case-strategy-tags">
              {project.services.slice(0, 3).map((service, serviceIndex) => (
                <span key={service}><i>0{serviceIndex + 1}</i>{service}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="case-features case-section" aria-labelledby="case-features-title">
          <div className="case-section-heading">
            <div className="case-section-label"><span>04</span><span>Selected solutions</span></div>
            <div>
              <h2 id="case-features-title">Details that shape the experience.</h2>
              <p>Project-specific features connect the brief to the way customers browse, compare, and buy.</p>
            </div>
          </div>
          <div className="case-feature-grid">
            {project.features.map((feature, featureIndex) => (
              <article className="case-feature-card" key={feature.title}>
                <div className="case-feature-topline"><span>0{featureIndex + 1}</span><ArrowUpRight size={17} aria-hidden="true" /></div>
                <div className="case-feature-visual-wrap">
                  <FeatureVisual kind={feature.visualKind} />
                  <span>Concept visualization</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="case-feature-benefit"><span>Customer benefit</span><strong>{feature.benefit}</strong></div>
              </article>
            ))}
          </div>
        </section>

        {supportingImages.length > 0 && (
          <section className="case-gallery case-section" aria-label="Additional project visuals">
            <div className="case-section-label"><span>VISUALS</span><span>Supporting project views</span></div>
            <div className="case-gallery-grid">
              {supportingImages.map((image) => (
                <figure className="case-gallery-card" key={image.src}>
                  <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
                  <figcaption>{image.alt}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <section className="case-technical case-section" aria-labelledby="case-technical-title">
          <div className="case-section-label"><span>05</span><span>Technical implementation</span></div>
          <div className="case-technical-grid">
            <div>
              <h2 id="case-technical-title">Built on a focused Shopify stack.</h2>
              <p>{project.technicalSummary}</p>
            </div>
            <div className="case-tech-list" aria-label="Technologies used">
              {project.technologies.map((technology, techIndex) => (
                <div className="case-tech-item" key={technology}>
                  <span>0{techIndex + 1}</span><strong>{technology}</strong><Check size={16} aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="case-outcome case-section" aria-labelledby="case-outcome-title">
          <div className="case-outcome-mark" aria-hidden="true">“</div>
          <div className="case-section-label"><span>06</span><span>Project outcome</span></div>
          <h2 id="case-outcome-title">The result is a more connected path from discovery to purchase.</h2>
          <p>{project.outcome}</p>
        </section>

        {showLiveLink && (
          <section className="case-cta" aria-label="Visit the live project website">
            <div><span>Explore the live storefront</span><h2>See {project.name} in the wild.</h2></div>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Visit Live Website <ArrowUpRight size={17} /></a>
          </section>
        )}

        <ProjectNavigation previous={previous} next={next} />
      </div>
    </article>
  );
}
