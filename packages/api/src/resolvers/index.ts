import { Config } from "apollo-server-core";
import { Mutations } from "./mutations";
import { Querys } from "./querys";

export const resolvers: Config["resolvers"] = {
  Query: Querys,
  Mutation: Mutations,
};
