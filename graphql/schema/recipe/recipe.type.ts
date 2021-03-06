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

    ingredients: [RecipeIngredient]
  }

  type RecipeIngredient {
    name: String
    quantity: String
    measure: CookingMeasures
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
    time: CreateNewRecipeTimeInput!
    instructions: String!
  }

  input CreateNewRecipeIngredientsInput {
    name: String!
    quantity: Int!
    measure: CookingMeasures!
  }

  input CreateNewRecipeTimeInput {
    hours: Int
    minutes: Int!
  }

  input RecipeListFilterInput {
    ingredient: String
    name: String
    maxTimeMin: Int
  }

  extend type Query {
    recipeList(filter: RecipeListFilterInput): [CustomRecipe]
    recipeById(recipeId: ID!): Recipe
  }

  extend type Mutation {
    createNewRecipe(input: CreateNewRecipeInput!):ID
  }
`

export default recipeType