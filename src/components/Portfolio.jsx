
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import ProjectList from "./ProjectList";
import { ArrowUpRight } from "lucide-react";

function Portfolio({
  projects,
  search,
  setSearch,
  category,
  setCategory,
  onDelete,
}) {
  return (
    <section className="portfolio-section" id="work">
      <div className="section-heading">
        <div>
          <span className="section-label">OUR SELECTED WORK</span>
          <h2>
            Selected <span>projects.</span>
          </h2>
          <p>
            A closer look at ideas brought to life through
            creativity and collaboration.
          </p>
        </div>

        <a href="#about" className="text-link">
          More about us <ArrowUpRight size={17} />
        </a>
      </div>

      <div className="portfolio-controls">
        <CategoryFilter
          category={category}
          setCategory={setCategory}
        />

        <SearchBar
          search={search}
          setSearch={setSearch}
        />
      </div>

      <div className="results-count">
        Showing <strong>{projects.length}</strong> projects
      </div>

      <ProjectList
        projects={projects}
        onDelete={onDelete}
      />
    </section>
  );
}

export default Portfolio;
