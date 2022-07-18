import { Context } from "../../../server/context"
import { Ingredient } from "../types"
import { convertIngredientName } from "./ingredient.service"

const ingredientResolver = {
  Query: {
    ingredientList: async (_parent: any, _args: any, context: Context) => {
      return context.prisma.ingredient.findMany()
    }
  },

  Ingredient: {
    name: async (parent: Ingredient) => {
      return convertIngredientName(parent.name)
    }
  }
}

export default ingredientResolver