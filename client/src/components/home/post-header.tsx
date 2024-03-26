import { Avatar, Box, Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import OptionIcon from "@/assets/icons/post/Option.svg";
import { POST_ICONS } from "./post-icons";

function PostHeader() {
  return (
    <div className="flex  justify-between px-1 py-2 items-center border-b border-gray-200">
      <div className="flex items-center gap-2">
        <Avatar sx={{ height: 35, width: 35 }} />
        <div>
          <p>Username</p>
        </div>
        <Button sx={{ fontSize: 13 }}>Follow</Button>
      </div>
      <Image src={OptionIcon} height={30} width={30} alt="option" />
    </div>
  );
}

export default PostHeader;
