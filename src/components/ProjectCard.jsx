import { ArrowRight, ArrowUpRight, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getCaseStudyById, getCaseStudyPath } from '../data/caseStudiesData';
import './ProjectPresentation.css';

export default function ProjectCard({ project, onSelect }) {
  const caseStudy = getCaseStudyById(project.id);
  if (!caseStudy) return null;

  return (
    <article className="project-card">
      <div className="project-card-media">
        <img
          src={caseStudy.heroImage}
          alt={caseStudy.heroAlt}
          loading="lazy"
          decoding="async"
          width="720"
          height="540"
        />
        <span className="project-card-category">{caseStudy.category}</span>
      </div>

      <div className="project-card-content">
        <span className="project-card-kicker">{caseStudy.services[0]}</span>
        <h3>{caseStudy.name}</h3>
        <p>{caseStudy.summary}</p>
        <div className="project-card-tags" aria-label="Project technologies">
          {caseStudy.technologies.slice(0, 3).map((technology) => <span key={technology}>{technology}</span>)}
        </div>
      </div>

      <div className="project-card-actions">
        <button type="button" className="project-preview-link" onClick={() => onSelect?.(project)}>
          <Eye size={16} aria-hidden="true" /> Quick preview
        </button>
        <div className="project-card-primary-actions">
          {caseStudy.liveUrlVerified && caseStudy.liveUrl && (
            <a href={caseStudy.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}>
              Live site <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          )}
          <Link to={getCaseStudyPath(caseStudy)} aria-label={`Read the ${caseStudy.name} case study`}>
            Read case study <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
