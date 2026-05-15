import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import type { Project } from '../../data/site';

interface Props {
  projects: Project[];
}

interface RowProps {
  project: Project;
  isOpen: boolean;
  onToggle: () => void;
}

function ProjectLogo({ project }: { project: Project }) {
  const [errored, setErrored] = useState(false);

  if (!project.logoUrl || errored) {
    return (
      <span style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--color-ink-3)' }}>
        {project.company}
      </span>
    );
  }

  return (
    <img
      src={project.logoUrl}
      alt={project.logoAlt ?? project.company}
      onError={() => setErrored(true)}
      style={{ height: 28, maxWidth: 120, objectFit: 'contain' }}
      className="project-logo"
    />
  );
}

function ProjectRow({ project, isOpen, onToggle }: RowProps) {
  const { detail } = project;

  return (
    <div className={`project-row${isOpen ? ' project-row--open' : ''}`}>
      <button
        className="project-summary"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`detail-${project.id}`}
      >
        <div className="project-company">
          <ProjectLogo project={project} />
          <span className="project-industry">{project.industry}</span>
        </div>
        <div className="project-info">
          <h3 className="project-title">{project.title}</h3>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-chip">{tag}</span>
            ))}
          </div>
        </div>
        <div className={`expand-icon${isOpen ? ' expand-icon--open' : ''}`} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="14" height="14">
            <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`detail-${project.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="project-detail">
              <div className="detail-left">
                <p className="detail-overview">{detail.overview}</p>

                <div className="detail-block">
                  <h4 className="detail-subhead">{detail.contributionsHeading}</h4>
                  <ul className="contributions-list">
                    {detail.contributions.map((item, i) => (
                      <li key={i} className="contribution-item">
                        <span className="contribution-arrow" aria-hidden="true">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {detail.keyDecisions && (
                  <div className="detail-block">
                    <h4 className="detail-subhead">{detail.keyDecisionsHeading}</h4>
                    <p className="detail-text">{detail.keyDecisions}</p>
                  </div>
                )}
              </div>

              <div className="detail-right">
                {detail.constraints && detail.constraints.length > 0 && (
                  <div className="detail-block">
                    <h4 className="detail-subhead">{detail.constraintsHeading}</h4>
                    <div className="constraints-list">
                      {detail.constraints.map((c, i) => (
                        <span key={i} className="constraint-badge">{c}</span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="detail-block">
                  <h4 className="detail-subhead">{detail.impactHeading}</h4>
                  <div className="impact-grid">
                    {detail.impactMetrics.map((metric, i) => (
                      <div key={i} className="impact-cell">
                        <span className="impact-num">{metric.num}</span>
                        <span className="impact-label">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                  {detail.impactSummary && (
                    <p className="impact-summary">{detail.impactSummary}</p>
                  )}
                </div>

                {detail.testimonials && detail.testimonials.length > 0 && (
                  <div className="detail-block">
                    {detail.testimonials.map((t, i) => (
                      <figure key={i} className="inline-testimonial">
                        <blockquote className="inline-quote">{t.quote}</blockquote>
                        <figcaption className="inline-attr">
                          <span className="inline-name">{t.name}</span>
                          <span className="inline-role">{t.role}</span>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function WorkAccordion({ projects }: Props) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div>
      {projects.map((project) => (
        <ProjectRow
          key={project.id}
          project={project}
          isOpen={openId === project.id}
          onToggle={() => setOpenId(openId === project.id ? null : project.id)}
        />
      ))}

      <style>{`
        .project-row {
          border-top: 1px solid var(--color-border);
        }
        .project-row:last-child {
          border-bottom: 1px solid var(--color-border);
        }
        .project-summary {
          display: grid;
          grid-template-columns: 280px 1fr 36px;
          gap: 3rem;
          align-items: center;
          padding: 1.75rem 0;
          width: 100%;
          text-align: left;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: background 0.2s var(--ease), padding-left 0.2s var(--ease),
                      margin-left 0.2s var(--ease);
        }
        .project-summary:hover {
          background: var(--color-sand);
          padding-left: 1rem;
          margin-left: -1rem;
          margin-right: -1rem;
          padding-right: 1rem;
        }
        .project-company {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .project-logo {
          filter: grayscale(30%);
          transition: filter 0.2s;
        }
        .project-summary:hover .project-logo {
          filter: grayscale(0%);
        }
        .project-industry {
          font-size: 0.72rem;
          letter-spacing: 0.06em;
          color: var(--color-ink-3);
          text-transform: uppercase;
        }
        .project-info {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .project-title {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 400;
          letter-spacing: -0.01em;
          color: var(--color-ink);
          margin: 0;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .expand-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--color-ink);
          transition: background 0.3s, color 0.3s, transform 0.3s var(--ease);
          justify-self: end;
        }
        .expand-icon--open {
          background: var(--color-ink);
          color: var(--color-white);
          transform: rotate(45deg);
        }
        .project-detail {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 5rem;
          padding: 3.5rem 0;
        }
        .detail-block {
          margin-bottom: 2.5rem;
        }
        .detail-subhead {
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-amber);
          margin: 0 0 1.5rem;
        }
        .detail-overview {
          font-size: 0.9rem;
          font-weight: 300;
          line-height: 1.85;
          color: var(--color-ink-2);
          margin-bottom: 2.5rem;
        }
        .detail-text {
          font-size: 0.87rem;
          font-weight: 300;
          line-height: 1.8;
          color: var(--color-ink-2);
        }
        .contributions-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .contribution-item {
          position: relative;
          padding: 0.75rem 0 0.75rem 1.5rem;
          font-size: 0.87rem;
          font-weight: 300;
          line-height: 1.7;
          color: var(--color-ink-2);
          border-bottom: 1px solid var(--color-border-2);
          display: flex;
          gap: 0;
        }
        .contribution-arrow {
          position: absolute;
          left: 0;
          top: 0.75rem;
          color: var(--color-amber);
          font-size: 0.75rem;
          line-height: 1.7;
        }
        .constraints-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .constraint-badge {
          padding: 0.3rem 0.75rem;
          border: 1px solid var(--color-border);
          font-size: 0.7rem;
          letter-spacing: 0.04em;
          color: var(--color-ink-3);
        }
        .impact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: var(--color-border);
          border: 1px solid var(--color-border);
          margin-bottom: 1.5rem;
        }
        .impact-cell {
          background: var(--color-bg);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .impact-num {
          font-family: var(--font-display);
          font-size: 2.2rem;
          font-weight: 400;
          color: var(--color-ink);
          line-height: 1;
        }
        .impact-label {
          font-size: 0.68rem;
          font-weight: 400;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-amber);
        }
        .impact-summary {
          font-size: 0.85rem;
          font-weight: 300;
          line-height: 1.8;
          color: var(--color-ink-3);
        }
        .inline-testimonial {
          margin: 0 0 1.5rem;
        }
        .inline-quote {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-style: italic;
          color: var(--color-ink-2);
          border-left: 2px solid var(--color-amber);
          padding-left: 1.25rem;
          margin: 0 0 0.75rem;
          line-height: 1.6;
        }
        .inline-attr {
          padding-left: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }
        .inline-name {
          font-size: 0.78rem;
          font-weight: 500;
          color: var(--color-ink-3);
          letter-spacing: 0.04em;
          display: block;
        }
        .inline-role {
          font-size: 0.72rem;
          font-weight: 300;
          color: var(--color-ink-3);
          display: block;
        }
        @media (max-width: 900px) {
          .project-summary {
            grid-template-columns: 1fr 36px;
          }
          .project-company {
            display: none;
          }
          .project-detail {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
