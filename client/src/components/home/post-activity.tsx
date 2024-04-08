"use client";
import Image from "next/image";
import React, { useState } from "react";
// import StarIcon from "@/assets/icons/post/Star.svg";
import CommentIcon from "@/assets/icons/post-control/Comment.svg";
import ShareIcon from "@/assets/icons/post-control/Share1.svg";
import StarIcon from "./Icons/Star";
import Save from "./Icons/Save";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { client } from "@/lib/utils/request";
import { POST_DISLIKE_QUERY, POST_LIKE_QUERY } from "@/lib/query/query";
import LikesDialog from "../post/likes-dialog";

function PostActivity({
  liked,
  postId,
  likeCount,
}: {
  liked: boolean;
  postId: string;
  likeCount: number;
}) {
  const [openLikesDialog, setOpenLikesDialog] = useState(false);

  
  const navigate = useRouter();
  const queryClient = useQueryClient();

  const likeMutation = useMutation({
    mutationKey: ["like"],
    mutationFn: (postId: string) => {
      if (!liked) {
        console.log("like");
        return client.request(POST_LIKE_QUERY, { postId });
      } else {
        return client.request(POST_DISLIKE_QUERY, { postId });
      }
    },
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });

  const onCommentHandler = () => {
    navigate.push(`/post/${postId}`);
  };

  const handleClickOpen = () => {
    setOpenLikesDialog(true);
  };

  const handleClose = () => {
    setOpenLikesDialog(false);
  };
  return (
    <div className="border-gray-200 flex justify-between py-3 px-2 border-t">
      <div className="flex gap-6 ">
        <div className="flex items-center gap-1">
          <StarIcon
            className=" h-8 hover:scale-110 cursor-pointer transition-all duration-75  ease-in-out"
            liked={liked}
            onClick={() => likeMutation.mutate(postId)}
          />
          <p onClick={handleClickOpen}>{likeCount}</p>
        </div>

        {/* <Image src={StarIcon} style={{fill:'red'}} alt="star" height={28} className=" hover:scale-110 cursor-pointer transition-all duration-75  ease-in-out text-red-300" /> */}
        <Image
          src={CommentIcon}
          alt="star"
          height={28}
          className=" hover:scale-110 cursor-pointer transition-all duration-75  ease-in-out"
          onClick={onCommentHandler}
        />
        <Image
          src={ShareIcon}
          alt="star"
          height={28}
          className=" hover:scale-110 cursor-pointer transition-all duration-75  ease-in-out"
        />
      </div>
      <Save className=" h-8 hover:scale-110 cursor-pointer transition-all duration-75  ease-in-out" />
      <LikesDialog  open={openLikesDialog} handleClose={handleClose} postId={postId}/>

    </div>
  );
}

export default PostActivity;
