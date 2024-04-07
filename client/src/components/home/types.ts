import { string } from "zod";

export interface Like  {
    username: string,
    userId:string,
    profilePicture:string | null
}

export interface PostDataType {
    isLiked: boolean;
    likeCount: number;
    postCaption: string;
    postId: string;
    postImage: string;
    user: {
        profilePicture: string | null;
        userId: string;
        username: string;
    };
    likes: Like[]
  }