export const addCommentQuery = (
  commentId: string,
  postId: string,
  userId: string,
  comment: string,
  date: string
) =>
  `
WITH inserted_comment AS (
	INSERT INTO public."Comments"("commentId", "postId", "userId", "comment","createdAt") VALUES (
	'${commentId}', '${postId}', '${userId}', '${comment}', '${date}') 
	RETURNING "commentId", "postId", "comment", "userId", "createdAt"
)SELECT ic."commentId", ic."comment", ic."createdAt", ic."postId", ic."userId", c."username", c."profilePicture" FROM 
	inserted_comment ic
	LEFT JOIN
	public."User" c ON ic."userId" = c."userId"

    `;
// export const getCommentsQuery = (postId: string) => `
// SELECT co."commentId", co."userId", co."postId" ,us."username", us."profilePicture", co."comment", co."createdAt"  FROM public."Comments" co LEFT JOIN public."User" us on co."userId" = us."userId" WHERE co."postId" = '${postId}'
// ;
// `;

export const getCommentsQuery = (postId: string) => `
  SELECT co."commentId", co."userId", co."postId" ,us."username", us."profilePicture", co."comment", co."createdAt"
  FROM public."Comments" co
  LEFT JOIN public."User" us ON co."userId" = us."userId"
  WHERE co."postId" = '${postId}'
  ORDER BY co."createdAt"::timestamp DESC;
`;
