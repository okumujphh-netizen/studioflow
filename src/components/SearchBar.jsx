
import { Search, X } from "lucide-react";

function SearchBar({ search, setSearch }) {
  return (
    <div className="search-container">
      <Search size={19} className="search-icon" />

      <input
        type="text"
        placeholder="Search projects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search && (
        <button
          className="clear-search"
          onClick={() => setSearch("")}
          aria-label="Clear search"
        >
          <X size={17} />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
