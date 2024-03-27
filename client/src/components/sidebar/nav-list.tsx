'use client'

import React from "react";
import { NAV_DATA } from "./config-navigation";
import { Box, Tooltip } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Option from "@/assets/icons/post/Option.svg";
import { LightTooltip } from "@/theme/components/styled/tooltip";
import { useResponsive } from "@/hooks/useResponsive";

function NavList() {

  return (
    <div
      className="
    w-full h-full flex justify-around items-center px-4 gap-2
    1050:flex-col 1050:w-11/12 1050:items-start 1050:mx-4 1050:justify-start
   1050:h-full 1050:py-8    1050:gap-5 1050:px-0
   "
    >
      {NAV_DATA.map((item, index) => (
        <LightTooltip title={item.title} arrow placement={useResponsive(1050) ? 'right' :'top' } key={item.title}>
          <Link
            href={item.path}
            className="flex items-center gap-3 justify-center
          h-full px-5 w-full
          hover:bg-gray-100
          
          1050:px-5 1050:py-3 1050:w-full 1050:rounded-xl 1050:border 1050:justify-normal  1050:h-fit
          
          "
          >
            {item.icons}

            {/* <Image src={HomeIcon} height={20} width={20} alt='home' className=' text-red-900 '/> */}
            <p className=" hidden 1050:flex text-xl">{item.title}</p>
          </Link>
        </LightTooltip>
      ))}
      {/* <Image src={Option} alt="demo" height={230} width={30}/> */}
    </div>
  );
}

export default NavList;
