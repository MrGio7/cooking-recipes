import { gql } from "apollo-server";

const ingredientType = gql`
  type Ingredient {
    id: ID!
    name: String!
    quantity: Int
    measure: CookingMeasures
    createdAt: Date!
    updatedAt: Date!
    deletedAt: Date
    Recipes: [Recipe]
  }
  

  extend type Query {
    ingredientList: [Ingredient]
  }
`

export default ingredientType