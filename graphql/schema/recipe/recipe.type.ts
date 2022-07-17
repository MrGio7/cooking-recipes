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

  type CustomRecipe {
    id: ID
    name: String
    source: String
    numberOfIngredients: Int
    listOfIngredients: String
    preperationInstructions: String
    preperationTime: String
  }

  input CreateNewRecipeInput {
    name: String!
    source: String
    ingredients: [CreateNewRecipeIngredientsInput!]!
    timeMin: Int!
    instructions: String!
  }

  input CreateNewRecipeIngredientsInput {
    name: String!
    quantity: Int!
    measure: CookingMeasures!
  }

  extend type Query {
    recipeList: [CustomRecipe]
  }

  extend type Mutation {
    createNewRecipe(input: CreateNewRecipeInput!):ID
  }
`

export default recipeType