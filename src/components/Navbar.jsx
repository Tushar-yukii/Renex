import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">home</Link>
      <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    </form>
      <Link to="/anime">Anime</Link>
      <Link to="/manga">manga</Link>
    </div>
  );
};

export default Navbar;
