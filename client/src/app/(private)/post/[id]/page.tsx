"use client";
import React, { useEffect, useState } from "react";
import Post from "@/components/home/post";
import { POST_MOCK } from "@/_mock/post";
import { useSearchParams } from "next/navigation";
import PostReply from "@/components/post/post-reply";
import PostPanel from "@/components/post/post-panel";
import PostComment from "@/components/post/post-comment";
import PostCommentFeed from "@/components/post/post-comment-feed";

function PostS({ params }: { params: { id: string } }) {
  const [data, setData] = useState<undefined | any>();

  const { id } = params;

  useEffect(() => {
    const data = POST_MOCK.find((item) => item.postId == id);
    console.log(data);
    setData(data);
  }, []);
  if (!data) return <div>Loading</div>;
  return (
    <div className=" my-3 1050:mx-10  flex flex-col items-center gap-2">
      <Post data={data}/>
      <PostReply/>
      <PostCommentFeed/>
    </div>
  );
}

export default PostS;
