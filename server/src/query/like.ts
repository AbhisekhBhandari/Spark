export const onLikeQuery = (likeId: string, userId: string, postId: string) => `
    INSERT INTO public."Likes"("likeId", "postId", "userId") VALUES ('${likeId}', '${postId}', '${userId}')
`;
export const onDislikeQuery = (postId: string, userId: string) => `
    DELETE FROM public."Likes" WHERE "postId" = '${postId}' AND "userId" = '${userId}'
`;

export const getPostLikesQuery = (postId: string) => `
SELECT "likeId", "username", US."userId", "profilePicture" FROM public."Likes" PL  
LEFT JOIN public."User" US
ON PL."userId" = US."userId"
WHERE "postId" = '${postId}'
;
`;