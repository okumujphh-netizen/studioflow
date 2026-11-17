
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import ProjectForm from "./components/ProjectForm";
import Footer from "./components/Footer";

import initialProjects from "./data/projects";

import "./styles/App.css";

function App() {
  // Load saved projects or use initial sample projects
  const [projects, setProjects] = useState(() => {
    try {
      const savedProjects = localStorage.getItem("studiofolio-projects");

      return savedProjects
        ? JSON.parse(savedProjects)
        : initialProjects;
    } catch {
      return initialProjects;
    }
  });

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [showForm, setShowForm] = useState(false);

  // Save projects whenever the projects state changes
  useEffect(() => {
    localStorage.setItem(
      "studiofolio-projects",
      JSON.stringify(projects)
    );
  }, [projects]);

  // Add a new project
  function handleAddProject(newProject) {
    setProjects((previousProjects) => [
      newProject,
      ...previousProjects,
    ]);

    setCategory("All");
    setSearch("");
  }

  // Delete a project
  function handleDeleteProject(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmed) return;

    setProjects((previousProjects) =>
      previousProjects.filter((project) => project.id !== id)
    );
  }

  // Search and category filtering
  const filteredProjects = projects.filter((project) => {
    const searchMatch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase()) ||
      project.client.toLowerCase().includes(search.toLowerCase());

    const categoryMatch =
      category === "All" || project.category === category;

    return searchMatch && categoryMatch;
  });

  return (
    <>
      <Navbar onAddProject={() => setShowForm(true)} />

      <main>
        <Hero />

        <Portfolio
          projects={filteredProjects}
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          onDelete={handleDeleteProject}
        />
      </main>

      <Footer />

      {showForm && (
        <ProjectForm
          onAddProject={handleAddProject}
          onClose={() => setShowForm(false)}
        />
      )}
    </>
  );
}

export default App;
