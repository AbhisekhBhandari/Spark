import { extendType, nonNull, objectType, stringArg } from "nexus";
import { v4 } from "uuid";
import { onDislikeQuery, onLikeQuery } from "../query/like";
import { execute } from "../utils/poolDB";

export const Like = objectType({
  name: "Like",
  definition(t) {
    t.nonNull.string("likeId"),
    t.nonNull.string("username"),
    t.nonNull.string("userId"),
    t.string("profilePicture")
  },
});

export const LikeMutations = extendType({
  type: "Mutation",
  definition(t) {
    t.field("onDislike", {
      type: "String",
      args: {
        postId: nonNull(stringArg()),
      },
      async resolve(parent, args, context) {
        try {
          const { postId } = args;
          const { userId } = context.user;
          //   generate a like id

          const disLikeQuery = onDislikeQuery(postId,userId)
          const res = await execute(disLikeQuery);
          console.log("onDislike", res);
          return "disliked";
        } catch (error) {
          throw error;
        }
      },
    });
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
          console.log('likiee');
          

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

// export const LikeQueries = extendType({
//   type:'Query',
//   definition(t) {
//       t.list.field('getLikes',{
//         type:'Like',
//         args:{
//           postId:nonNull(stringArg())
//         },
//         resolve(parent, args, context){
//           const {postId} = arg
//         }

//       })
//   },
// })