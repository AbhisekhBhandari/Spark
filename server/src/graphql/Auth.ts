import {
  arg,
  extendType,
  nonNull,
  objectType,
  stringArg,
  unionType,
} from "nexus";
import bcrypt from "bcrypt";
import { execute, pool } from "../utils/poolDB";
import { v4 } from "uuid";
import { dataFill, findUserByEmail, signupQuery } from "../query/auth";
import { NexusGenFieldTypes } from "../../nexus-typegen";
import { createJWT } from "../utils/jwt";
import { GraphQLError } from "graphql";
import { getCurrentDateTime } from "../utils/date";

export const Auth = objectType({
  name: "AuthPayload",
  definition(t) {
    t.nonNull.string("token");
    t.nonNull.field("user", {
      type: "User",
    });
  },
});

export const AuthMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("signup", {
      type: "AuthPayload",
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      async resolve(parent, args, context) {
        try {
          const { email, password } = args;
          console.log("here", email, password);

          // check for existing email
          const emailCheck: NexusGenFieldTypes["User"][] = await execute(
            findUserByEmail(email)
          );
          if (emailCheck.length > 0) {
            throw new GraphQLError("Email in user", {
              extensions: {
                code: "DUPLICATE_EMAIL",
              },
            });
          }
          const hashedPassword = await bcrypt.hash(password, 10);
          const userId = v4();
          const currentDateTimeString = getCurrentDateTime();

          const query = signupQuery(
            userId,
            email,
            hashedPassword,
            currentDateTimeString
          );
          const createUser: NexusGenFieldTypes["User"][] = await execute(query);
          const token = createJWT(
            createUser[0].userId as string,
            createUser[0].email
          );

          const date = new Date();
          date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);
          context.res.cookie("token", token, {
            httpOnly: true,
            expires: date,
          });
          console.log("user", createUser, "t", token);

          return {
            token: token,
            user: {
              ...createUser[0],
            },
          };
        } catch (err) {
          throw err;
        }
      },
    });
    t.field("login", {
      type: "AuthPayload",
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      async resolve(parent, args, context) {
        try {
          const { email, password } = args;

          const user: NexusGenFieldTypes["User"][] = await execute(
            findUserByEmail(email)
          );
          if (!user || user.length === 0)
            throw new GraphQLError("Invalid Email", {
              extensions: {
                code: "INVALID_CREDENTIALS",
              },
            });

          const isPasswordValid = await bcrypt.compare(
            password,
            user[0].password as string
          );
          if (!isPasswordValid)
            throw new GraphQLError("Invalid Email", {
              extensions: {
                code: "INVALID_CREDENTIALS",
              },
            });
          const token = createJWT(user[0].userId as string, user[0].email);
          const date = new Date();
          date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);
          context.res.cookie("token", token, {
            httpOnly: true,
            expires: date,
          });
          return {
            token,
            user: user[0],
          };
        } catch (err) {
          console.log("err liogin", err);

          throw err;
        }
      },
    });
    t.field("dataFill", {
      type: "User",
      args: {
        username: nonNull(stringArg()),
        dateOfBirth: nonNull(stringArg()),
      },
      async resolve(parent, args, context) {
        try {
          const { username, dateOfBirth } = args;
          const { userId } = context.user;
          if (!userId) throw new Error("Unauthorized Access");
          console.log("context,", context.user, username, dateOfBirth);
          const query = dataFill(username, dateOfBirth, userId);
          const updateData = await execute(query);
          return updateData[0];
        } catch (error) {
          throw error;
        }
      },
    });
  },
});
