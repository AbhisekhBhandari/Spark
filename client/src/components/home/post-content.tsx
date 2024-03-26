import React from "react";

interface PostContentWImageProps{
  caption?:string;
  postImage:string
}
interface PostContentWTextProps{
  text:string
}
interface PostContentProps{
  image?:string
}

function PostContent({image}:PostContentProps) {
  return (<>
    {!image ? (
      <div className="px-2 py-2">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt nemo
      pariatur sit eligendi repellendus nihil maxime laboriosam blanditiis
      ipsum. Expedita autem nesciunt aliquid dolore, debitis iure enim ullam
      laudantium ex. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Adipisci, ab nam! Facilis quam molestias placeat accusantium fugiat
      tempora odio quidem cum debitis cumque pariatur esse, repudiandae
      doloribus eaque repellat provident? Lore
    </div>
    ):(
      <PostContentWImage image={image}/>
      )}
      </>

  );
}

export default PostContent;

function PostContentWImage({image}:{image:string}){
  return(
    <div className="py-2">
      <div className="mb-3 text-sm border-b" >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, ab tenetur quis debitis provident cum at perferendis voluptatum! Sed quaerat quia corrupti blanditiis nostrum nulla dicta omnis reiciendis vitae excepturi.
      </div>
      <div className="h-[400px]">
        <img src={image} className=" w-full h-full object-contain"/>
      </div>
    </div>
  )
}