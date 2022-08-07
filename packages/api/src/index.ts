import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
  gql,
  Config,
} from "apollo-server-core";
import express from "express";
import http from "http";
import { readFileSync } from "fs";
import { resolve } from "path";
import { resolvers } from "./resolvers";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

async function startApolloServer(resolvers: Config["resolvers"]) {
  await mongoose.connect(process.env.MONGODB_URL, {
    authSource: "admin",
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASSWORD,
  });

  const schemaFile = readFileSync(
    resolve(__dirname, "../schema.graphql"),
    "utf8"
  );

  const typeDefs = gql(schemaFile.toString());

  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });
  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(resolvers).catch(console.error);
