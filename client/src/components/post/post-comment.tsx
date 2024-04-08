import { Avatar } from "@mui/material";
import React from "react";
import StarIcon from "../home/Icons/Star";
import OptionIcon from "@/assets/icons/post-control/Option.svg";
import Image from "next/image";
import { Comment } from "@/gql/graphql";

interface PostCommentProps {
  commentData: Comment;
}

function PostComment({ commentData }: PostCommentProps) {
  console.log('commentda', commentData);
  
  return (
    <div className="w-full flex gap-2 border px-2 py-3 rounded-xl items-center justify-between">
      <div className="flex gap-2">
        <Avatar
          sx={{ height: 42, width: 42 }}
          src={commentData?.profilePicture ?? undefined}
        />
        <div>
          <p>{commentData?.username}</p>
          <p className="text-sm">{commentData?.comment}</p>
        </div>
      </div>
      <StarIcon liked={true} />
    </div>
  );
}

export default PostComment;
