import { objectType } from "nexus";

export const Comment = objectType({
    name:"Comment",
    definition(t) {
        t.id("commentId"),
        t.nonNull.string("postId"),
        t.nonNull.string("userId")
        t.nonNull.string("comment")
    },
})