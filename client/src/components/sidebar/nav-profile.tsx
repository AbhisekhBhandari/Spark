import { Avatar } from "@mui/material";
import Link from "next/link";
import React from "react";

function NavProfile() {
  return (
    <Link href={"/create-post"} className=" hidden 
    w-11/12 rounded-full border-2 border-gray-300 1050:flex gap-2  justify-center py-2 text-xl items-center">
      {/* <Avatar sx={{height:34, width:34}}/> */}
      <p>Post</p> 
    </Link>
  );
}

export default NavProfile;
