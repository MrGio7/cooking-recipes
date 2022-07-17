import { merge } from "lodash"
import { gql } from "apollo-server";
import recipeType from "./recipe/recipe.type";
import recipeResolver from "./recipe/recipe.resolver";

const root = gql`
  type Query {
    root: String
  }
  type Mutation {
    root: String
  }
`

const typeDefs = [root, recipeType]
const resolvers = merge(recipeResolver)

export { typeDefs, resolvers }