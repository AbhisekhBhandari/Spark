import {
  arg,
  extendType,
  idArg,
  intArg,
  nonNull,
  objectType,
  stringArg,
} from "nexus";
import { execute } from "../utils/poolDB";
import { v4 } from "uuid";
import {
  createPostQuery,
  deletePostQuery,
  getAllPostsQuery,
  getPostByIdQuery,
  isLikedQuery,
  likeCountQuery,
} from "../query/post";
import { findUserById } from "../query/auth";
import { error, log } from "console";
import { getCurrentDateTime } from "../utils/date";

export const Post = objectType({
  name: "Post",
  definition(t) {
    t.nonNull.id("postId"),
      t.string("postImage"),
      t.string("postCaption"),
      t.nonNull.string("userId"),
      t.nonNull.string("createdAt"),
      t.field("isLiked", {
        type: "Boolean",
        async resolve(parent, args, context) {
          try {
            const { postId } = parent;
            const { userId } = context.user;
            console.log("context", context.user);

            const query = isLikedQuery(userId, postId);
            const isLiked = await execute(query);
            return isLiked[0].isLiked;
          } catch (error) {
            throw error;
          }
        },
      });
    t.field("likeCount", {
      type: "Int",
      async resolve(parent, args, context) {
        const { postId } = parent;
        const query = likeCountQuery(postId);
        const res = await execute(query);
        console.log("count ", res);

        return res[0].count;
      },
    });

    // t.field("likes", {
    // })
    t.field("user", {
      type: "User",
      async resolve(parent, args, context) {
        try {
          const { userId } = parent;
          const query = findUserById(userId);
          const user = await execute(query);
          return user[0];
        } catch (error) {
          throw error;
        }
      },
    });
  },
});

export const PostMutations = extendType({
  type: "Mutation",
  definition(t) {
    t.field("createPost", {
      type: "Post",
      args: {
        postImage: stringArg(),
        caption: stringArg(),
      },
      async resolve(parent, args, context) {
        try {
          const { postImage = null, caption = null } = args;
          const { userId } = context.user;
          if (!context.user) throw new Error("Unauthenticated");
          // generate postId
          const postId = v4();
          const currentDateTime = getCurrentDateTime();
          // create post
          const postQuery = createPostQuery(postId, userId, postImage, caption, currentDateTime);
          const res = await execute(postQuery);
          return res[0];
        } catch (err) {
          throw err;
        }
      },
    });
    t.field("deletePost", {
      type: "String",
      args: {
        postId: nonNull(stringArg()),
      },
      async resolve(parent, args, context) {
        try {
          const { postId } = args;
          const { userId } = context.user;
          if (!userId) throw new Error("Not authenticated");
          const query = deletePostQuery(userId, postId);
          const deletePost = await execute(query);
          return deletePost[0];
        } catch (error) {
          console.log("sere", error);

          throw error;
        }
      },
    });
  },
});

export const PostQueries = extendType({
  type: "Query",
  definition(t) {
    t.list.field("getPosts", {
      type: "Post",
      async resolve(parent, args, context) {
        try {
          const { userId } = context.user;
          if (!userId) throw new Error("Unauthenticated");
          const query = getAllPostsQuery();
          const allPosts = await execute(query);
          return allPosts;
        } catch (error) {
          throw error;
        }
      },
    });
    t.field("getSinglePost", {
      type: "Post",
      args: {
        postId: nonNull(stringArg()),
      },
      async resolve(parent, args, context) {
        try {
          const { postId } = args;
          const { userId } = context.user;
          console.log("postId", postId);

          if (!userId) throw new Error("Unauthenticated");
          const query = getPostByIdQuery(postId);
          const post = await execute(query);
          console.log("got post ", post);
          return post[0];
        } catch (error) {
          throw error;
        }
      },
    });
  },
});
