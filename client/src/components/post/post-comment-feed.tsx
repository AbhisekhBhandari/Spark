"use client";

import React from "react";
import PostComment from "./post-comment";
import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/utils/request";
import { GET_POST_COMMENTS } from "@/lib/query/query";
import { Comment } from "@/gql/graphql";

interface PostCommentFeedProps {
  postId: string;
}

function PostCommentFeed({ postId }: PostCommentFeedProps) {
  const { data, isPending } = useQuery({
    queryKey: ["comment", postId],
    queryFn: () => client.request(GET_POST_COMMENTS, { postId }),
    enabled: !!postId,
  });

  console.log("cumment", data, postId);
  if (isPending) return <p>Loading...</p>;
  return (
    <div className="w-full flex flex-col gap-1">
      {data.getComments.length > 0 ? (
        data?.getComments.map((comment: Comment) => (
          <PostComment commentData={comment} key={comment.postId} />
        ))
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
}

export default PostCommentFeed;
