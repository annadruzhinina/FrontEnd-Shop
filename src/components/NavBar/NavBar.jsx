// Imports
import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu.jsx";
import { useStateValue } from "../StateProvider/StateProvider.js";
import { useAuthContext } from "../../Hooks/useLoginContext.js";

function Navbar() {
  const [{ basket }, dispatch] = useStateValue();
  const { user } = useAuthContext()
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
            <span className="link-option-one">{user ? `Hello, ${user}` : "Login"}</span>
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
            <span className="link-option-two cart-count">{basket.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
//Export Navbar
export default Navbar;
