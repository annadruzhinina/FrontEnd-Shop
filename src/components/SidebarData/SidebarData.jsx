// Import React
import React from "react";
// Import Icons
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

// Define Sidebar Menu
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Categories",
    path: "/categories",
    icon: <IoIcons.IoIosKeypad />,
    cName: "nav-text",
  },
  {
    title: "Orders",
    path: "/order",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Cart",
    path: "/checkout",
    icon: <IoIcons.IoMdCart />,
    cName: "nav-text",
  },
];
