import { Avatar } from "@mui/material";
import React from "react";
import PostHeader from "./post-header";
import PostContent from "./post-content";
import PostActivity from "./post-activity";
// userId: string;
// username: string;
// email: string;
// followed: boolean;
// caption?: string;
// photo?:string;
// postId:string;
function Post({ data }: {data:PostType}) {
  return (
    <div className="border max-w-[750px]  px-3  border-gray-200 w-full  rounded-lg overflow-clip">
      <PostHeader userId={data.userId} username={data.username} email={data.email} followed={data.followed} />
      <PostContent caption={data.caption} photo={data.photo} />
      <PostActivity liked={data.liked} postId={data.postId} />
    </div>
  );
}

export default Post;
