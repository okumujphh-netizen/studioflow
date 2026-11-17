
import { ArrowUpRight, Trash2 } from "lucide-react";
import { useState } from "react";

function ProjectCard({ project, onDelete }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <article className="project-card">
        <div className="project-image">
          <img src={project.image} alt={project.title} />

          <span className="project-category">
            {project.category}
          </span>

          <button
            className="project-view"
            onClick={() => setShowDetails(true)}
            aria-label={`View ${project.title}`}
          >
            <ArrowUpRight size={21} />
          </button>
        </div>

        <div className="project-info">
          <div>
            <h3>{project.title}</h3>
            <p>{project.client}</p>
          </div>

          <div className="project-actions">
            <span>{project.year}</span>

            {onDelete && (
              <button
                className="delete-button"
                onClick={() => onDelete(project.id)}
                title="Delete project"
                aria-label={`Delete ${project.title}`}
              >
                <Trash2 size={17} />
              </button>
            )}
          </div>
        </div>
      </article>

      {showDetails && (
        <div
          className="modal-overlay"
          onClick={() => setShowDetails(false)}
        >
          <div
            className="details-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setShowDetails(false)}
            >
              ×
            </button>

            <img src={project.image} alt={project.title} />

            <div className="details-content">
              <span className="details-category">
                {project.category}
              </span>

              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <h4>Client: {project.client}</h4>
              <h4>Year: {project.year}</h4>

              <div className="technology-list">
                {project.technologies?.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;
