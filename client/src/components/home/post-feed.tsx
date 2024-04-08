"use client";
import React, { useState } from "react";
import Post from "./post";
import { POST_MOCK } from "@/_mock/post";
import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import { client } from "@/lib/utils/request";
import { Post as PostType } from "@/gql/graphql";

const GET_POSTS_QUERY = gql`
  query Query {
    getPosts {
      postId
      postImage
      postCaption
      createdAt
      user {
        userId
        username
        profilePicture
      }
      isLiked
      likeCount
    }
  }
`;

function PostFeed() {
  const { data, error, isPending } = useQuery({
    queryKey: ["posts"],
    queryFn: () => client.request(GET_POSTS_QUERY),
  });

  if (isPending) return <div>Loadingg...</div>;
  return (
    <div className="flex flex-col w-full  items-center gap-2">
      {data.getPosts.map((post: PostType, index) => (
        <Post data={post} />
      ))}

    </div>
  );
}

export default PostFeed;
