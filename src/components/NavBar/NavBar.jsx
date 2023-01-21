import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  return (
    <nav className="nav-container">
      <Link to="/" className="nav-link">
        <img src="./image/amazon.png" className="nav-logo" alt="" />
      </Link>
      <div className="search">
        <input type="text" className="nav-searchInput" />
        <SearchIcon className="nav-searchIcon" />
      </div>

      {/* 3 links */}
      {/* Baslet icon with number */}
    </nav>
  );
}

export default Navbar;
