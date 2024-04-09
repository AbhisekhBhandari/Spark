"use client";
import React from "react";
import Post from "./post";
import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/utils/request";
import { Post as PostType } from "@/gql/graphql";
import { GET_POSTS_QUERY } from "@/lib/query/query";

function PostFeed() {
  const { data, error, isPending } = useQuery({
    queryKey: ["posts"],
    queryFn: (): Promise<{ getPosts: PostType[] }> =>
      client.request(GET_POSTS_QUERY),
  });
  console.log("data in pist", data);

  if (isPending) return <div>Loadingg...</div>;
  return (
    <div className="flex flex-col w-full  items-center gap-2">
      {data?.getPosts?.map((post, index) => (
        <Post data={post} />
      ))}
    </div>
  );
}

export default PostFeed;
