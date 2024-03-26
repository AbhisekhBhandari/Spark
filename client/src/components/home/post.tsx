import { Avatar } from "@mui/material";
import React from "react";
import PostHeader from "./post-header";
import PostContent from "./post-content";
import PostActivity from "./post-activity";

interface PostProps {
  image?: string;
  caption?: string;
}

function Post({ image, caption }: PostProps) {
  return (
    <div className="border max-w-[750px]  px-3  border-gray-200 w-full min-h-[200px] rounded-lg overflow-clip">
      <PostHeader />
      <PostContent image={image} />
      <PostActivity />
    </div>
  );
}

export default Post;
