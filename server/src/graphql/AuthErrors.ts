import { objectType, unionType } from "nexus";

export const NotUniqueEmailError = objectType({
    name: "NotUniqueEmailError",
    definition(t) {
      t.nonNull.field("error", {
        type: "String",
        resolve: () => {
          return "Email is already used.";
        },
      });
    },
  });
  
  export const InvalidCredentials = objectType({
    name: "InvalidCredentials",
    definition(t) {
      t.nonNull.field("error", {
        type: "String",
        resolve: () => {
          return "Invalid email/password.";
        },
      });
    },
  });


  export const LoginResponse = unionType({
    name: "LoginResponse",
    description: "auth details or errors",
    definition(t) {
      t.members("AuthPayload", "InvalidCredentials");
    },
    resolveType: (obj) => {
      console.log("obj", obj);
      // @ts-ignore
      return obj.__typename;
    },
  });
  export const SignupResponse = unionType({
    name: "SignupResponse",
    description: "auth details or errors",
    definition(t) {
      t.members("AuthPayload", "NotUniqueEmailError");
    },
    resolveType: (obj) => {
      console.log("obj", obj);
      // @ts-ignore
      return obj.__typename;
    },
  });
  
  