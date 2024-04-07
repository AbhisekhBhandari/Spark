import { Avatar } from "@mui/material";
import React from "react";
import PostHeader from "./post-header";
import PostContent from "./post-content";
import PostActivity from "./post-activity";
import { PostDataType } from "./types";
// userId: string;
// username: string;
// email: string;
// followed: boolean;
// caption?: string;
// photo?:string;
// postId:string;
function Post({ data }: { data: PostDataType }) {

  return (
    <div className="border  px-3  border-gray-200 w-full  rounded-lg overflow-clip">
      <PostHeader
        userId={data.user.userId}
        username={data.user.username}
        postId={data.postId}
      />
      <PostContent caption={data.postCaption} image={data.postImage} />
      <PostActivity liked={data.isLiked} postId={data.postId} likeCount= {data.likeCount}  likesList={data.likes}/>
    </div>
  );
}

export default Post;
