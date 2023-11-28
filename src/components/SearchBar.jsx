import React, { useState } from "react";
import "./Searchbar.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Terrier, Kitty, etc.."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Enter City, State, or ZIP" />
      </div>
        <button>Search</button>
    </div>
  );
};

export default SearchBar;