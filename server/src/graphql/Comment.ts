import { arg, extendType, nonNull, objectType, stringArg } from "nexus";
import { v4 } from "uuid";
import { execute } from "../utils/poolDB";
import { addCommentQuery, getCommentsQuery } from "../query/comment";
import { getCurrentDateTime } from "../utils/date";

export const Comment = objectType({
  name: "Comment",
  definition(t) {
    t.id("commentId"), t.nonNull.string("postId"), t.nonNull.string("userId");
    t.nonNull.string("comment");
    t.nonNull.string("username"), t.string("profilePicture");
    t.nonNull.string("createdAt");
  },
});

export const CommentMutations = extendType({
  type: "Mutation",
  definition(t) {
    t.field("addComment", {
      type: Comment,
      args: {
        postId: nonNull(stringArg()),
        comment: nonNull(stringArg()),
      },
      async resolve(parent, args, context) {
        try {
          const { postId, comment } = args;
          const { userId } = context.user;
          if (!userId) throw new Error("Unauthenticated");
          // generate commentId
          const commentId = v4();
          const currentDate = getCurrentDateTime();
          const query = addCommentQuery(
            commentId,
            postId,
            userId,
            comment,
            currentDate
          );
          const addedComment = await execute(query);
          console.log("addedComment ", addedComment);

          return addedComment[0];
        } catch (error) {
          throw error;
        }
      },
    });
  },
});

export const CommentQueries = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("getComments", {
      type: "Comment",
      args: {
        postId: nonNull(stringArg()),
      },
      async resolve(parent, args, context) {
        try {
          const { postId } = args;
          const query = getCommentsQuery(postId);
          const comments = await execute(query);

          return comments;
        } catch (error) {
          throw error;
        }
      },
    });
  },
});
