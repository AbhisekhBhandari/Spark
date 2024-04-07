export const onLikeQuery = (likeId: string, userId: string, postId: string) => `
    INSERT INTO public."Likes"("likeId", "postId", "userId") VALUES ('${likeId}', '${postId}', '${userId}')
`;
