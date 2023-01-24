import React from "react";
import * as FaThList from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

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
];
