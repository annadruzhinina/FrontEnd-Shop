// Import React
import React from "react";
import { useState } from "react";
// Import React Router Dom
import { Link } from "react-router-dom";
// Import React Icons
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
// Import Component
import { SidebarData } from "../SidebarData/SidebarData.jsx";
// Import CSS
import "./hamburgerMenu.css";

// Hamburger Menu Component
function HamburgerMenu() {
  // Set useState
  const [sidebar, setSidebar] = useState(false);
  // Sidebar Function
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/* Icon provider - color white */}
      <IconContext.Provider value={{ color: "#fff" }}>
        {/* Create Hamburger Menu Link */}
        <div className="hamburger">
          <Link to="#" className="hamburger-menu">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="hamburger-toggle">
              <Link to="#" className="hamburger-menu">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

// Export Hamburger Menu Component
export default HamburgerMenu;
