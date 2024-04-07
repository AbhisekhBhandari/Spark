import { extendType, nonNull, objectType, stringArg } from "nexus";
import { v4 } from "uuid";
import { onLikeQuery } from "../query/like";
import { execute } from "../utils/poolDB";

export const Like = objectType({
  name: "Like",
  definition(t) {
    t.nonNull.string("likeId"),
      t.nonNull.string("postId"),
      t.nonNull.string("userId");
  },
});

export const Mutations = extendType({
  type: "Mutation",
  definition(t) {
    t.field("onLike", {
      type: "String",
      args: {
        postId: nonNull(stringArg()),
      },
      async resolve(parent, args, context) {
        try {
          const { postId } = args;
          const { userId } = context.user;
          //   generate a like id
          const likeId = v4();

          const likeQuery = onLikeQuery(likeId, userId, postId);
          const res = await execute(likeQuery);
          console.log("onLike", res);
          return "liked";
        } catch (error) {
          throw error;
        }
      },
    });
  },
});