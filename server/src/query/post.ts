export const createPostQuery = (
  postId: string,
  userId: string,
  postImage: string | null,
  postCaption: string | null
) =>
  `INSERT INTO public."Post"("postId", "postImage", "postCaption", "userId") VALUES ('${postId}', '${postImage}', '${postCaption}', '${userId}') RETURNING *;`;

export const getAllPostsQuery = () => `SELECT * FROM public."Post"`;

export const isLikedQuery = (userId: string, postId: string) => `
SELECT 
  CASE  
    WHEN EXISTS (
      SELECT 1 FROM public."Likes" WHERE
      "postId" = '${postId}' 
      AND
      "userId" = '${userId}'
    ) THEN TRUE ELSE FALSE
    END AS "isLiked"
`;
export const deletePostQuery = (userId: string, postId: string) => `
DO $$
BEGIN 
	IF EXISTS(
		SELECT 1 FROM public."Post" WHERE
		"postId" = '${postId}' AND "userId" = '${userId}'
	)THEN
	  DELETE FROM public."Likes"
        WHERE "postId" = '${postId}';
		
		DELETE FROM public."Post"
		WHERE "postId" = '${postId}' AND "userId" = '${userId}';
		RAISE NOTICE 'Post deleted Successfully';
	ELSE
		RAISE EXCEPTION 'Not authorized to delete the post';
	END IF;
END;
$$
`;

export const likeCountQuery = (postId: string) => `

SELECT COUNT("likeId") FROM  public."Likes" where "postId" = '${postId}';`;

//   `
//   SELECT UP."postId", UP."postImage", UP."postCaption", UP."userId", COUNT(PL."likeId"),
//   CASE
//     WHEN EXISTS (SELECT 1 FROM public."")

//   FROM public."Post" UP
//   INNER JOIN public."Likes" PL
//   ON UP."postId" = PL."postId"
//   GROUP BY UP."postId"
// `
