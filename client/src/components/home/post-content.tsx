import ShowMoreText from "@/theme/components/showMoreText/showMoreText";
import React from "react";

interface PostContentProps {
  caption?: string;
  photo?: string;
}

function PostContentWImage({
  image,
  caption = "",
}: {
  image: string | undefined | null;
  caption: string | undefined | null;
}) {
  return (
    <div className="py-2">
      {caption && (
        <div className="mb-3 text-sm">
          <ShowMoreText>{caption}</ShowMoreText>
        </div>
      )}
      {image && (
        <div className={`h-[400px] ${image !== null ? "flex" : "hidden"}`}>
          <img src={image} className="w-full h-full object-contain" />
        </div>
      )}
    </div>
  );
}

export default PostContentWImage;
