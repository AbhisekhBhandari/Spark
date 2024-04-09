import { extendType, nonNull, objectType, stringArg } from "nexus";
import { getUserByIdQuery } from "../query/user";
import { execute } from "../utils/poolDB";

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
export const UserQuery  = extendType({
  type:'Query',
  definition(t) {
      t.field("getUserById",{
        type: User,
        args:{
          userId: nonNull(stringArg())
        },
        async resolve(parent, args, context){
          const {userId} = args;
          const query = getUserByIdQuery(userId);
          const user = await execute(query);
          console.log('userById', user);
          return user[0];
        }
      })
  },
})