import ShowMoreText from "@/theme/components/showMoreText/showMoreText";
import React from "react";

interface PostContentProps {
  caption?: string;
  photo?: string;
}

function PostContent({ caption = "", photo = "" }: PostContentProps) {
  return (
    <>
      {!photo ? (
        <div className="px-2 py-2">
          <ShowMoreText>{caption}</ShowMoreText>
        </div>
      ) : (
        <PostContentWImage image={photo} caption={caption} />
      )}
    </>
  );
}

export default PostContent;

function PostContentWImage({
  image,
  caption = "",
}: {
  image: string;
  caption?: string;
}) {
  console.log('caption', caption);
  
  return (
    <div className="py-2">
      <div className="mb-3 text-sm border-b">
        <ShowMoreText>{caption}</ShowMoreText>
      </div>
      <div className="h-[400px]">
        <img src={image} className=" w-full h-full object-contain" />
      </div>
    </div>
  );
}
