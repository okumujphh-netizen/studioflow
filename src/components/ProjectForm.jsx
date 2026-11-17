
import { useState } from "react";
import { X, Plus } from "lucide-react";

function ProjectForm({ onAddProject, onClose }) {
  const [formData, setFormData] = useState({
    title: "",
    category: "Branding",
    description: "",
    image: "",
    year: "2026",
    client: "",
    technologies: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newProject = {
      ...formData,
      id: Date.now(),
      technologies: formData.technologies
        .split(",")
        .map((tech) => tech.trim())
        .filter(Boolean),
    };

    onAddProject(newProject);
    onClose();
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="form-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="form-header">
          <div>
            <span className="form-eyebrow">NEW CREATION</span>
            <h2>Add a project</h2>
            <p>Share your latest creative work with the world.</p>
          </div>

          <button
            className="modal-close"
            onClick={onClose}
            type="button"
            aria-label="Close form"
          >
            <X />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Project title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Modern Brand Identity"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="Branding">Branding</option>
                <option value="Web Design">Web Design</option>
                <option value="Photography">Photography</option>
              </select>
            </div>

            <div className="form-group">
              <label>Year</label>
              <input
                type="number"
                name="year"
                value={formData.year}
                onChange={handleChange}
                min="2000"
                max="2100"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Client name</label>
            <input
              type="text"
              name="client"
              value={formData.client}
              onChange={handleChange}
              placeholder="Client or company name"
              required
            />
          </div>

          <div className="form-group">
            <label>Project description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell us about this project..."
              rows="4"
              required
            />
          </div>

          <div className="form-group">
            <label>Project image URL</label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              required
            />
          </div>

          <div className="form-group">
            <label>Technologies</label>
            <input
              type="text"
              name="technologies"
              value={formData.technologies}
              onChange={handleChange}
              placeholder="React, Figma, Photoshop"
              required
            />
            <small>Separate technologies with commas.</small>
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="cancel-button"
              onClick={onClose}
            >
              Cancel
            </button>

            <button type="submit" className="submit-button">
              <Plus size={17} />
              Publish project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProjectForm;
