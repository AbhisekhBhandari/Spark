"use client";
import React, {
  DragEventHandler,
  useEffect,
  useRef,
  useState,
  RefObject,
} from "react";
import ImportIcon from "@/assets/Post/Export.svg";
import Image from "next/image";
import CrossIcon from "@/assets/Cross.svg";
import { Button } from "@/components/ui/Button/Button";
import { Avatar } from "@mui/material";

// graphql
import { useMutation, useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";

import { useRouter } from "next/navigation";
import { useEdgeStore } from "@/lib/utils/edgestore";
import { useSnackbar } from "@/contexts/Snackbar";
import { client } from "@/lib/utils/request";

export const createPostQuery = gql`
  mutation CreatePost($caption: String, $postImage: String) {
    createPost(caption: $caption, postImage: $postImage) {
      postCaption
      postId
      postImage
      userId
      user {
        username
      }
    }
  }
`;

const CreatePost = () => {
  const [file, setFile] = useState<File | undefined>();
  const [tempUrl, setTempUrl] = useState<string | null>(null);
  const [caption, setCaption] = useState<string | null>(null);

  const navigate = useRouter();

  const [isPosting, setIsPosting] = useState<boolean>(false);

  const { showSnackbar } = useSnackbar();
  const { edgestore } = useEdgeStore();

  const user = JSON.parse(localStorage.getItem("user") as string);

  // image handling
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver: DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
  };
  const handleDrop: DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    setFile(event.dataTransfer?.files[0]);
  };
  const cancelImage = () => {
    setFile(undefined);
    setTempUrl(null);
  };

  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  useEffect(() => {
    if (!file) return;
    const url = URL.createObjectURL(file);

    setTempUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);
  // -------------------------------------------------------------------------

  async function edgeImageUpload(imageFile: File) {
    try {
      if (!imageFile) throw new Error("no image file");
      const { url } = await edgestore.publicFiles.upload({
        file: imageFile,
      });
      return url;
    } catch (error) {
      throw error;
    }
  }

  const mutation = useMutation({
    mutationKey: ["createPost"],
    mutationFn: async () => {
      let postImage = null;
      if (!file && !caption)
        throw new Error("Either the image or caption should be provided");
      if (file) postImage = await edgeImageUpload(file);

      return client.request(createPostQuery, { caption, postImage });
    },
    onSuccess: (data) => {
      console.log("data of post ", data);
      showSnackbar("Post Created", "success");
      navigate.push("/");
    },
    onError: (error) => {
      console.log("error of post ", error);
      showSnackbar("Creating Post Failed", "error"); 
    },
  });

  return (
    <div className=" ">
      <div className="border-b-2 py-4 ">Create post</div>

      <div className=" flex flex-col lg:flex-row my-2 lg:mx-10 mx-auto   mt-4 gap-5 ">
        <div
          className={` mx-auto w-[350px] h-[400px] shrink-0  bg-gray-100 rounded-2xl overflow-clip relative ${
            !tempUrl && "border-black  border-2 border-dashed"
          }  `}
        >
          {!tempUrl ? (
            <div
              className=" w-full h-full  flex flex-col cursor-pointer items-center px-7 text-center justify-center   "
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                type="file"
                accept="image/"
                className="hidden"
                onChange={handleFileChange}
                ref={fileInputRef}
              />
              <Image src={ImportIcon} alt="importIcon" height={40} />
              Choose a file or Drag and Drop here.
            </div>
          ) : (
            <div className="h-full w-full border">
              <img
                src={tempUrl}
                alt="dummyImg"
                className="object-cover w-full h-full"
              />
              <Image
                src={CrossIcon}
                alt="cross"
                height={25}
                onClick={cancelImage}
                className=" absolute top-1 right-1  bg-white bg-opacity-50 cursor-pointer rounded-full"
              />
            </div>
          )}
        </div>
        <div className="flex flex-col md:flex-1 mx-4  md:h-[400px]  gap-4  ">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Avatar src={user.profilePicture} sx={{ height: 20, width: 20 }} />
            <p>{user.name}</p>
          </div>
          <div className="flex flex-col ">
            <label className="">Write a caption:</label>
            <textarea
              cols={5}
              className="resize-none h-32 border border-gray-300 rounded-lg px-2 py-1  outline-none text-sm"
              placeholder="Add a caption...."
              onChange={(e) => setCaption(e.target.value)}
            ></textarea>
          </div>
          <Button
            className="  bg-fuchsia-900 hover:bg-fuchsia-800 text-white"
            disabled={mutation.isPending}
            onClick={() => mutation.mutate()}
          >
            {isPosting ? "Posting" : "Post"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
