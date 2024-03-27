import React from "react";
import Logo from "../logo";
import NavList from "./nav-list";
import NavProfile from "./nav-profile";

function Sidebar() {
  return (
    // <div className=" w-1/5 h-screen border-r sticky  border-gray-200 flex flex-col justify-between  items-center py-5">
    <div
      className=" z-50 bg-white flex flex-col  items-center  border 
    1050:sticky 1050:h-screen 1050:w-1/5 1050:pt-7 1050:pb-10 1050:top-0
    fixed h-20  bottom-0 w-full left-0 right-0

    "
    >
      <Logo />
      <NavList />

      <NavProfile />
    </div>
  );
}

export default Sidebar;
