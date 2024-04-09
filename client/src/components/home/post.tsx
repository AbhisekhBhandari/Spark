import { Avatar } from "@mui/material";
import React from "react";
import PostHeader from "./post-header";
import PostContent from "./post-content";
import PostActivity from "./post-activity";
import { Post as PostType } from "@/gql/graphql";

function Post({ data }: { data: PostType }) {
  
  return (
    <div className="border  px-3  border-gray-200 w-full  rounded-lg overflow-clip">
      <PostHeader
        userId={data.user.userId as string}
        username={data.user.username}
        postId={data.postId}
        createdAt = {data.createdAt}
      />
      <PostContent caption={data?.postCaption} image={data.postImage} />
      <PostActivity liked={data.isLiked} postId={data.postId} likeCount= {data.likeCount}  />
    </div>
  );
}

export default Post;
