import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu.jsx";

function Navbar() {
  return (
    <nav className="nav-container">
      <HamburgerMenu />

      <Link to="/" className="nav-link">
        <img src="./image/amazon.png" className="nav-logo" alt="" />
      </Link>
      <div className="search">
        <input type="text" className="nav-searchInput" />
        <SearchIcon className="nav-searchIcon" />
      </div>
      <div className="nav-links">
        <Link to="/sign-in" className="right-link">
          <div className="link-option">
            <span className="link-option-one">Hello, sign in</span>
            <span className="link-option-two">Account&Lists</span>
          </div>
        </Link>

        <Link to="/order" className="right-link">
          <div className="link-option">
            <span className="link-option-one">Returns</span>
            <span className="link-option-two">&Orders</span>
          </div>
        </Link>

        <Link to="/checkout" className="right-link">
          <div className="link-option-cart">
            <LocalGroceryStoreIcon />
            <span className="link-option-two cart-count">0</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
