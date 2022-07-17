import { gql } from "apollo-server";

const recipeType = gql`
  type Recipe {
    id: ID!
    name: String!
    source: String
    preperationTimeMin: Int
    preperationInstructions: String
    createdAt: Date!
    updatedAt: Date!
    deletedAt: Date

    Ingredients: [Ingredient]
  }

  extend type Query {
    recipeList: [Recipe]
  }

  extend type Mutation {
    createNewRecipe: Boolean
  }
`

export default recipeType