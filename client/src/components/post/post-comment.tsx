import { Avatar } from "@mui/material";
import React from "react";
import StarIcon from "../home/Icons/Star";
import OptionIcon from '@/assets/icons/post-control/Option.svg'
import Image from "next/image";

function PostComment() {
  return (
    <div className="w-full flex gap-2 border px-2 py-3 rounded-xl items-center">
      <div className="flex gap-2">
        <Avatar sx={{ height: 42, width: 42 }} />
        <div>
            <p>Username</p>
          <p className="text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            deleniti illum ducimus fuga voluptatibus magni repellat alias
            blanditiis, omnis facilis minus temporibus sunt laborum enim ratione
            doloremque nisi nam. At.
          </p>
        </div>
      </div>
      <StarIcon liked={true} />
    </div>
  );
}

export default PostComment;
