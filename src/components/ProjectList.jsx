
import ProjectCard from "./ProjectCard";
import { FolderOpen } from "lucide-react";

function ProjectList({ projects, onDelete }) {
  if (projects.length === 0) {
    return (
      <div className="empty-state">
        <FolderOpen size={45} />
        <h3>No projects found</h3>
        <p>
          Try another search or category, or add a new project.
        </p>
      </div>
    );
  }

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ProjectList;
