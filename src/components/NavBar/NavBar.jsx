// Imports
import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu.jsx";
import { useStateValue } from "../StateProvider/StateProvider.js";
import { useAuthContext } from "../../Hooks/useLoginContext.js";

function Navbar({ search, handleSearch }) {
  const [{ basket }, dispatch] = useStateValue();
  //Pulled in user hook for useAuthContext
  const { user } = useAuthContext();

  function userSignInOut(user) {
    if (user) {
      return (
        <Link to="/sign-out" className="right-link">
          <div className="link-option">
            <span className="link-option-one">
              {user ? `Hello, ${user}` : "Login"}
            </span>
            <span className="link-option-two">Account & Lists</span>
          </div>
        </Link>
      );
    } else {
      return (
        <Link to="/sign-in" className="right-link">
          <div className="link-option">
            <span className="link-option-one">
              {user ? `Hello, ${user}` : "Login"}
            </span>
            <span className="link-option-two">Account & Lists</span>
          </div>
        </Link>
      );
    }
  }

  const totalItems = basket?.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="nav-container">
      <HamburgerMenu />
      <Link to="/" className="nav-link">
        <img src="./image/FrontEnd-Logo.jpg" className="nav-logo" alt="" />
      </Link>

      <div className="search">
        <input
          type="text"
          className="nav-searchInput"
          onChange={handleSearch}
        />
        <SearchIcon className="nav-searchIcon" />
      </div>
      <div className="nav-links">
        {/* <Link to="/sign-in" className="right-link">
          <div className="link-option">
            <span className="link-option-one">{user ? `Hello, ${user}` : "Login"}</span>
            <span className="link-option-two">Account&Lists</span>
          </div>
        </Link> */}
        {userSignInOut(user)}
        <Link to="/order" className="right-link">
          <div className="link-option">
            <span className="link-option-one">Returns</span>
            <span className="link-option-two">&Orders</span>
          </div>
        </Link>

        <Link to="/checkout" className="right-link">
          <div className="link-option-cart">
            <LocalGroceryStoreIcon />
            <span className="link-option-two cart-count">{totalItems}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
//Export Navbar
export default Navbar;
