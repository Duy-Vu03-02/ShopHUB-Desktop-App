import express from "express";
import { ApolloServer } from "apollo-server-express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import { config } from "dotenv";
import { connectDB } from "./config/db";
import { typeDefs } from "./schema/typeDefs";

const startApollo = async () => {
  const app = express();
  config();
  connectDB();

  app.use(cookieParser());
  app.use(
    cors({
      origin: "*",
      credentials: true,
    })
  );
  app.use(helmet());

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  server.applyMiddleware({ app });

  app.listen(8080, () => {
    console.log("Server path: http://localhost:8080", server.graphqlPath);
  });
};

startApollo().catch((err) => {
  console.error(err);
});
