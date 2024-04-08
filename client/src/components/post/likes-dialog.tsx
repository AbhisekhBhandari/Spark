import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import { Avatar } from "@mui/material";
import StarIcon from "../home/Icons/Star";
import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/utils/request";
import { GET_POST_LIKES_QUERY } from "@/lib/query/query";

interface LikesDialogProps {
  handleClose: () => void;
  open: boolean;
  postId: string;
}

export default function LikesDialog({
  open,
  handleClose,
  postId,
}: LikesDialogProps) {
  const { data, isPending } = useQuery({
    queryKey: ["likes"],
    queryFn: () => client.request(GET_POST_LIKES_QUERY, { postId }),
    enabled:open
  });
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="w-[500px] h-[400px] p-3 flex flex-col items-center gap-4">
          <p className="text-lg font-semibold">Likes</p>
          {isPending ? (
            <p>Loading...</p>
          ) : (
            <div className="w-full">
              {data?.getPostLikes.length > 0 ? (
                data?.getPostLikes.map((likes) => <LikeComponent likeData={likes} />)
              ) : (
                <p>No likes yet.</p>
              )}
            </div>
          )}
        </div>
      </Dialog>
    </React.Fragment>
  );
}

const LikeComponent = ({ likeData }: { likeData: Like }) => {
  return (
    <div className="flex border  px-5 py-1 justify-between w-full rounded-full">
      <div className="flex items-center gap-3">
        <Avatar
          sx={{ height: 35, width: 35 }}
          src={likeData.profilePicture ? likeData.profilePicture : null}
        />
        <p>{likeData.username}</p>
      </div>

      <StarIcon liked={true} />
    </div>
  );
};
