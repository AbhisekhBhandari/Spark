import React from "react";
import GalleryIcon from "@/assets/icons/post-panel/Gallery.svg";
import EmojiIcon from "@/assets/icons/post-panel/Emoji.svg";
import LocationIcon from "@/assets/icons/post-panel/Location.svg";
import ReplyIcon from "@/assets/icons/post-panel/Relpy.svg";

import Image from "next/image";
import { Button } from "../ui/Button/Button";

function PostPanel() {
  return (
    <div className="w-full px-2 flex justify-between ">
      <div className="flex gap-5 cursor-pointer">
        <Image src={GalleryIcon} alt="gallery" />
        <Image src={EmojiIcon} alt="emoji" />
        <Image src={LocationIcon} alt="location" />
      </div>

      <Button
        rounded={"full"}
        icon={<Image src={ReplyIcon} alt="location"  className="" />}
      >
        Reply
      </Button>
    </div>
  );
}

export default PostPanel;
