import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-container">
      <Link to="/" className="nav-link">
        <img src="./image/amazon.png" className="nav-logo" alt="" />
      </Link>

      {/* Search box */}
      {/* 3 links */}
      {/* Baslet icon with number */}
    </nav>
  );
}

export default Navbar;
