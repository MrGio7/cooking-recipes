import { Context } from "../../../server/context"
import { MutationCreateNewRecipeArgs } from "../types"

const recipeResolver = {
  Query: {
    recipeList: async (_parent: any, _args: any, context: Context) => {
      return context.prisma.recipe.findMany({ include: { Ingredients: true } })
    }
  },

  Mutation: {
    createNewRecipe: async (_parent: any, args: MutationCreateNewRecipeArgs, context: Context) => {
      const { name, source, ingredients, instructions, timeMin } = args.input
      const recipe = await context.prisma.recipe.create({
        data: {
          name,
          preperationInstructions: instructions,
          source,
          preperationTimeMin: timeMin,
        },
        select: {
          id: true
        }
      })

      for await (const ingredient of ingredients) {
        await context.prisma.ingredientsForRecipe.create({
          data: {
            measure: ingredient.measure,
            quantity: ingredient.quantity,
            Ingredient: {
              connectOrCreate: {
                where: { name: ingredient.name },
                create: { name: ingredient.name }
              }
            },
            Recipe: { connect: { id: recipe.id } }
          }
        })
      }

      return recipe.id
    }
  }
}

export default recipeResolver