import React from "react";
import { NAV_DATA } from "./config-navigation";
import { Box } from "@mui/material";
import Link from "next/link";
function NavList() {
  return (
    <div className=" h-full w-11/12 py-10 flex flex-col  gap-5">
      {NAV_DATA.map((item, index) => (
        <Link href={item.path} className="w-full flex gap-3 rounded-md border  border-gray-200 px-2   py-3 text-xl items-center">
          <Box component="span" height={30} width={30}>
            {item.icons}
          </Box>
          {/* <Image src={HomeIcon} height={20} width={20} alt='home' className=' text-red-900 '/> */}

          <p className="hidden sm:flex">{item.title}</p>
        </Link>
      ))}
    </div>
  );
}

export default NavList;
