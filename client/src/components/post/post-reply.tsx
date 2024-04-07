import { Avatar, TextareaAutosize } from "@mui/material";
import React from "react";
import PostPanel from "./post-panel";

function PostReply() {
  return (
    <div className="w-full flex border px-3 py-2 rounded-xl  gap-2">
      <Avatar sx={{ height: 45, width: 45 }} />
      {/* <textarea className="resize-none  rounded-xl w-full border  px-3 py-2 " placeholder="Post a reply..." cols={3}/> */}
      <div className="w-full">
        <TextareaAutosize
          className="resize-none  rounded-xl w-full border  px-3 py-2 "
          minRows={1}
          placeholder="Post a reply..."
        />
        <PostPanel />
      </div>
    </div>
  );
}

export default PostReply;
