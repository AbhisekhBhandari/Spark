import express from "express";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";
import { createGraphqlServer } from "./graphql/server";
import cookieParser from "cookie-parser";
import { verifyJWT } from "./utils/jwt";

require("dotenv").config();

async function init() {
  const app = express();

  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
  app.use(express.json());
  app.use(cookieParser());

  app.use(
    "/graphql",
    expressMiddleware(await createGraphqlServer(), {
      context: async ({ req, res }) => {
        
        const jwtPayload = await verifyJWT(req.cookies.token);
        return { res:res,  user:jwtPayload };
      },
    })
  );

  app.listen(4000, () => {
    console.log("listening");
  });
}
init();
