import { Context } from "../../../server/context"

const recipeResolver = {
  Query: {
    recipeList: async (_parent: any, _args: any, context: Context) => {
      return context.prisma.recipe.findMany({ include: { Ingredients: true } })
    }
  }
}

export default recipeResolver