import { Avatar, Box, Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import OptionIcon from "@/assets/icons/post-control/Option.svg";
import { POST_ICONS } from "./post-icons";
import PostMenu from "../postMenu/post-menu";
// userId={data.userId} username={data.username} email={data.email} followed={data.followed}
interface PostHeaderProps {
  userId: string;
  username: string;
  postId: string;
}

function PostHeader({ userId, username, postId }: PostHeaderProps) {
  return (
    <div className="flex  justify-between px-1 py-2 items-center border-b border-gray-200">
      <div className="flex items-center gap-2">
        <Avatar sx={{ height: 35, width: 35 }} />
        <div>
          <p>{username}</p>
        </div>
      </div>
      <PostMenu postId={postId} />
      {/* <Image src={OptionIcon} height={30} width={30} alt="option" /> */}
    </div>
  );
}

export default PostHeader;
