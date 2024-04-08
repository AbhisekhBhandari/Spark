"use client";
import React, { useEffect, useState } from "react";
import Post from "@/components/home/post";
import { POST_MOCK } from "@/_mock/post";
import { useSearchParams } from "next/navigation";
import PostReply from "@/components/post/post-reply";
import PostPanel from "@/components/post/post-panel";
import PostComment from "@/components/post/post-comment";
import PostCommentFeed from "@/components/post/post-comment-feed";
import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/utils/request";
import { GET_POST_QUERY } from "@/lib/query/query";

function PostS({ params }: { params: { id: string } }) {
  const { id } = params;
  const { data } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => {
      return client.request(GET_POST_QUERY, { postId: id });
    },
    enabled: !!id,
  });

  if (!data) return <div>Loading</div>;
  return (
    <div className=" my-3 1050:mx-10  flex flex-col items-center gap-2">
      <Post data={data.getSinglePost} />
      <PostReply />
      <PostCommentFeed postId={id} />
    </div>
  );
}

export default PostS;
