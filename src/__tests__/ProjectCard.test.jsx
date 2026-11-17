
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ProjectCard from "../components/ProjectCard";

const mockProject = {
  id: 1,
  title: "Studiofolio Website",
  category: "Web Development",
  client: "Personal Project",
  description: "A portfolio website built with React.",
  image: "https://placehold.co/600x400",
  technologies: ["React", "CSS"],
};

describe("ProjectCard", () => {
  it("renders the project title", () => {
    render(
      <ProjectCard
        project={mockProject}
        onDelete={vi.fn()}
      />
    );

    expect(
      screen.getByText("Studiofolio Website")
    ).toBeInTheDocument();
  });

  it("opens project details when the view button is clicked", () => {
    render(
      <ProjectCard
        project={mockProject}
        onDelete={vi.fn()}
      />
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "View Studiofolio Website",
      })
    );

    expect(
      screen.getByText("A portfolio website built with React.")
    ).toBeInTheDocument();
  });
});
