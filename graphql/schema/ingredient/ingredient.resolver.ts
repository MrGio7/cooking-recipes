import { Context } from "../../../server/context"

const ingredientResolver = {
  Query: {
    ingredientList: async (_parent: any, _args: any, context: Context) => {
      const ingredients = await context.prisma.ingredient.findMany({ include: { Recipes: true } })
      console.log(ingredients);
      console.log("hi");

      return []
    }
  }
}

export default ingredientResolver