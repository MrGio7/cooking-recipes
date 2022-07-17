import { gql } from "apollo-server";

const recipeType = gql`
  type Recipe {
    id: ID
    name: String
  }

  extend type Query {
    recipeList: [Recipe]
  }
`

export default recipeType