'use client'
import Image from "next/image";
import React, { useState } from "react";
// import StarIcon from "@/assets/icons/post/Star.svg";
import CommentIcon from "@/assets/icons/post-control/Comment.svg";
import ShareIcon from "@/assets/icons/post-control/Share1.svg";
import StarIcon from "./Icons/Star";
import Save from "./Icons/Save";
import { useRouter } from "next/navigation";


function PostActivity(
  {liked, postId}:{liked:boolean, postId:string}
  ) {
    const [likedState, setLiked] = useState<boolean>(liked)
    const navigate = useRouter()
    const likeHandler = ()=>{
      setLiked((prev)=>!prev)
    }
    const onCommentHandler = ()=>{
      navigate.push(`/post/${postId}`)
    }

  return (
    <div className="border-gray-200 flex justify-between py-3 px-2 border-t">
      <div className="flex gap-6 "> 
      <StarIcon className=" h-8 hover:scale-110 cursor-pointer transition-all duration-75  ease-in-out" liked={likedState} onClick={likeHandler}/>
        {/* <Image src={StarIcon} style={{fill:'red'}} alt="star" height={28} className=" hover:scale-110 cursor-pointer transition-all duration-75  ease-in-out text-red-300" /> */}
        <Image src={CommentIcon} alt="star" height={28} className=" hover:scale-110 cursor-pointer transition-all duration-75  ease-in-out"
        onClick={onCommentHandler}
        />
        <Image src={ShareIcon} alt="star" height={28} className=" hover:scale-110 cursor-pointer transition-all duration-75  ease-in-out" />
      </div>
      <Save className=" h-8 hover:scale-110 cursor-pointer transition-all duration-75  ease-in-out"  />

    </div>
  );
}

export default PostActivity;
