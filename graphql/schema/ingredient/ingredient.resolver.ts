import { Context } from "../../../server/context"

const ingredientResolver = {
  Query: {
    ingredientList: async (_parent: any, _args: any, context: Context) => {
      return context.prisma.ingredient.findMany({ include: { Recipes: true } })
    }
  }
}

export default ingredientResolver