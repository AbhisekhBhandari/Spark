import Image from "next/image";
import React from "react";
import StarIcon from "@/assets/icons/post/Star.svg";
import CommentIcon from "@/assets/icons/post/Comment.svg";
import ShareIcon from "@/assets/icons/post/Share1.svg";
import SaveIcon from "@/assets/icons/post/Save.svg";


function PostActivity() {
  return (
    <div className="border-gray-200 flex justify-between py-3 px-2 border-t">
      <div className="flex gap-6"> 
        <Image src={StarIcon} alt="star" height={28} />
        <Image src={CommentIcon} alt="star" height={28} />
        <Image src={ShareIcon} alt="star" height={28} />
      </div>
      <Image src={SaveIcon} alt="star" height={28} />

    </div>
  );
}

export default PostActivity;
