
import { Sparkles, Plus } from "lucide-react";

function Navbar({ onAddProject }) {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        <span className="logo-icon">
          <Sparkles size={20} />
        </span>
        studiofolio<span className="logo-dot">.</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#work">Our Work</a>
        <a href="#about">About</a>
      </div>

      <button
        className="nav-button"
        onClick={onAddProject}
      >
        <Plus size={17} />
        Add Project
      </button>
    </nav>
  );
}

export default Navbar;
