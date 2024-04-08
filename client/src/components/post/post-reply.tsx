import { Avatar, TextareaAutosize } from "@mui/material";
import React, { useState } from "react";
import PostPanel from "./post-panel";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { client } from "@/lib/utils/request";
import { POST_COMMENT_QUERY } from "@/lib/query/query";
import { useSnackbar } from "@/contexts/Snackbar";

function PostReply({ postId }: { postId: string }) {
  const [comment, setComment] = useState<string>("");
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();
  const mutation = useMutation({
    mutationKey: ["commentReply"],
    mutationFn: () => client.request(POST_COMMENT_QUERY, { postId, comment }),
    onSuccess: (data) => {
      console.log('sucesss');
      
      setComment("");
      showSnackbar("Commented Successfully", "success");
    queryClient.invalidateQueries({queryKey:['comment', postId]})
    },
    onError:(err)=>console.log('err here ', err)
    
    
  });

  return (
    <div className="w-full flex border px-3 py-2 rounded-xl  gap-2">
      <Avatar sx={{ height: 45, width: 45 }} />
      {/* <textarea className="resize-none  rounded-xl w-full border  px-3 py-2 " placeholder="Post a reply..." cols={3}/> */}
      <div className="w-full">
        <TextareaAutosize
          className="resize-none  rounded-xl w-full border  px-3 py-2 "
          minRows={1}
          placeholder="Post a reply..."
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
        <PostPanel
          isReplyNull={comment === "" ? true : false}
          onSubmitComment={() => {
            mutation.mutate();
          }}
        />
      </div>
    </div>
  );
}

export default PostReply;
