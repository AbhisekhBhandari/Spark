import { string } from "zod";


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
  }