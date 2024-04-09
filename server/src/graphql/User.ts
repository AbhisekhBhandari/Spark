import { objectType } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.id("userId");
    t.nonNull.string("username");
    t.nonNull.string("email");
    t.string("profilePicture");
    t.nonNull.string("password");
    t.nonNull.boolean('isDataFilled');
    t.nonNull.string('dateOfBirth'),
    t.nonNull.string('createdAt')
  },
});
