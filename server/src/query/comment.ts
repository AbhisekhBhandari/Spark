export const addCommentQuery = (
  commentId: string,
  postId: string,
  userId: string,
  comment: string
) =>
  `
WITH inserted_comment AS (
	INSERT INTO public."Comments"("commentId", "postId", "userId", "comment") VALUES (
	'${commentId}', '${postId}', '${userId}', '${comment}') 
	RETURNING "commentId", "postId", "comment", "userId"
)SELECT ic."commentId", ic."comment" ,ic."postId", ic."userId", c."username", c."profilePicture" FROM 
	inserted_comment ic
	LEFT JOIN
	public."User" c ON ic."userId" = c."userId"

    `;
export const getCommentsQuery = (postId: string) => `
SELECT co."commentId", co."userId", co."postId" ,us."username", us."profilePicture", co."comment"  FROM public."Comments" co LEFT JOIN public."User" us on co."userId" = us."userId" WHERE co."postId" = '${postId}'
 ;
`;
