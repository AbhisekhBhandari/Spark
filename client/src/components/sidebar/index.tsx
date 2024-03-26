import React from "react";
import Logo from "../logo";
import NavList from "./nav-list";
import NavProfile from "./nav-profile";

function Sidebar() {
  return (
    <div className=" w-1/5 h-screen border-r sticky  border-gray-200 flex flex-col justify-between  items-center py-5">
      <Logo />
      <NavList />
      <NavProfile />
    </div>
  );
}

export default Sidebar;
