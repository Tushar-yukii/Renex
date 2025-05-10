import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <form className="d-flex" role="search">
        <input
          className="search"
          type="search"
          placeholder="Search Anime..."
          aria-label="Search"
        />
      </form>

      <Link to="/anime">Anime</Link>
      <Link to="/manga">Manga</Link>
    </div>
  );
};

export default Navbar;
