export const onLikeQuery = (likeId: string, userId: string, postId: string) => `
DO $$
BEGIN 

	IF EXISTS(SELECT 1 FROM public."Likes" WHERE "userId" = '${userId}' AND "postId" = '${postId}') THEN
		DELETE FROM public."Likes" WHERE "userId" = '${userId}' AND "postId" = '${postId}';
	ELSE
		INSERT INTO public."Likes"("likeId", "userId", "postId") VALUES ('${likeId}', '${userId}' ,'${postId}');
	END IF;
END $$;
`;

// INSERT INTO public."Likes"("likeId", "postId", "userId") VALUES ('${likeId}', '${postId}', '${userId}')


export const getPostLikesQuery = (postId: string) => `
SELECT "likeId", "username", US."userId", "profilePicture" FROM public."Likes" PL  
LEFT JOIN public."User" US
ON PL."userId" = US."userId"
WHERE "postId" = '${postId}'
;
`;
