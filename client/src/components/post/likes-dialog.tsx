import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import { Avatar } from "@mui/material";
import StarIcon from "../home/Icons/Star";
import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/utils/request";
import { Like } from "../home/types";

interface LikesDialogProps {
  handleClose: () => void;
  open: boolean;
  likesList: Like[];
}

export default function LikesDialog({
  open,
  handleClose,
  likesList,
}: LikesDialogProps) {

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
          <div className="w-full">
            {likesList?.length > 0 ? (
              likesList?.map((likes) => <LikeComponent likeData={likes} />)
            ) : (
              <p>No likes yet.</p>
            )}
          </div>
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
