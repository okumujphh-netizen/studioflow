
import { ArrowDownRight, Sparkles } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-label">
          <Sparkles size={15} />
          CREATIVE STUDIO & DIGITAL AGENCY
        </div>

        <h1>
          We make ideas
          <br />
          <span>look different.</span>
        </h1>

        <p>
          A collection of creative work, bold ideas and
          digital experiences. Explore the projects that
          define our creative journey.
        </p>

        <a href="#work" className="hero-button">
          Explore our work
          <ArrowDownRight size={19} />
        </a>
      </div>

      <div className="hero-visual">
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200"
          alt="Creative design studio workspace"
        />

        <div className="hero-floating-card">
          <span className="floating-number">06+</span>
          <span>Creative projects</span>
        </div>
      </div>

      <div className="hero-bottom">
        <span>INDEPENDENT THINKING. CREATIVE EXECUTION.</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  );
}

export default Hero;
