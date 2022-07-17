import { Context } from "../../../server/context"

const recipeResolver = {
  Query: {
    recipeList: async (_parent: any, _args: any, context: Context) => {
      return context.prisma.recipe.findMany({ include: { Ingredients: true } })
    }
  },

  Mutation: {
    createNewRecipe: async (_parent: any, _args: any, context: Context) => {
      return true
    }
  }
}

export default recipeResolver