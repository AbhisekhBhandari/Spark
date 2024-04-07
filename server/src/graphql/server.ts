import { ApolloServer } from "@apollo/server";
import { schema } from "../utils/schema";
import express from "express";
import { error } from "console";
import { GraphQLFormattedError } from "graphql";
import { GraphQLErrorOptions } from "graphql";
import { formatGraphQLError } from "../error";

interface ContextProps {
  res: express.Response<any, Record<string, any>>;
}

export async function createGraphqlServer() {
  const server = new ApolloServer<ContextProps>({
    schema,
    formatError:formatGraphQLError
   
  });
  await server.start();
  return server;
}
