import { useEffect } from 'react';
import { ArrowUpRight, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getCaseStudyById, getCaseStudyPath } from '../data/caseStudiesData';
import './ProjectPresentation.css';

export default function ProjectModal({ project, onClose }) {
  const caseStudy = project ? getCaseStudyById(project.id) : null;

  useEffect(() => {
    if (!project) return undefined;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [project, onClose]);

  if (!project || !caseStudy) return null;

  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <section
        className="project-modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="project-modal-close" onClick={onClose} aria-label="Close project preview">
          <X size={20} />
        </button>
        <div className="project-modal-image">
          <img src={caseStudy.heroImage} alt={caseStudy.heroAlt} />
          <span>{caseStudy.category}</span>
        </div>
        <div className="project-modal-content">
          <p className="project-modal-kicker">Project preview · {caseStudy.services[0]}</p>
          <h2 id="project-modal-title">{caseStudy.title}</h2>
          <p className="project-modal-summary">{caseStudy.summary}</p>

          <div className="project-modal-story">
            <div>
              <h3>Project focus</h3>
              <p>{caseStudy.challenge}</p>
            </div>
            <div>
              <h3>Approach</h3>
              <p>{caseStudy.strategy}</p>
            </div>
          </div>

          <div className="project-modal-feature-list">
            <h3>Selected features</h3>
            {caseStudy.features.slice(0, 3).map((feature) => (
              <div key={feature.title}><Check size={16} aria-hidden="true" /><span>{feature.title}</span></div>
            ))}
          </div>

          <div className="project-modal-tech-list" aria-label="Technologies">
            {caseStudy.technologies.map((technology) => <span key={technology}>{technology}</span>)}
          </div>

          <div className="project-modal-actions">
            <Link className="btn btn-dark" to={getCaseStudyPath(caseStudy)} onClick={onClose}>
              Read full case study <ArrowUpRight size={16} />
            </Link>
            {caseStudy.liveUrlVerified && caseStudy.liveUrl && (
              <a className="project-modal-live" href={caseStudy.liveUrl} target="_blank" rel="noopener noreferrer">
                Visit live website <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
