// Import React
import React from "react";
// Import React Icons
import SearchIcon from "@mui/icons-material/Search";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
// Import React-Router-Dom
import { Link } from "react-router-dom";
// Import CSS
import "./navBar.css";
// Import Components
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu.jsx";
// Import Contexts
import { useStateValue } from "../StateProvider/StateProvider.js";
import { useAuthContext } from "../../Hooks/useLoginContext.js";

// Navbar Component
function Navbar({ search, handleSearch }) {
  // Set useState
  const [{ basket }, dispatch] = useStateValue();
  
  // Pulled in user hook for useAuthContext
  const { user } = useAuthContext();
  
  // Set Sign-in/Sign-out function
  function userSignInOut(user) {
    // Conditional for if user is logged in
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
  // Set total items variable
  const totalItems = basket?.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="nav-container">
      <HamburgerMenu />
      <Link to="/" className="nav-link">
        <img src="./image/logoNew.png" className="nav-logo" alt="" />
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
// Export Navbar
export default Navbar;
