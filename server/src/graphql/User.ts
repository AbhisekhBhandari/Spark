import { objectType } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.id("userId");
    t.string("username");
    t.nonNull.string("email");
    t.string("profilePicture");
    t.string("password");
    t.nonNull.boolean('isDataFilled');
    t.string('dateOfBirth')
  },
});
