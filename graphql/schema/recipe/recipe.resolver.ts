import { Context } from "../../../server/context"
import { MutationCreateNewRecipeArgs } from "../types"
import { cutText } from "./recipe.service"

const recipeResolver = {
  Query: {
    recipeList: async (_parent: any, _args: any, context: Context) => {
      const recipeList = await context.prisma.recipe.findMany({ include: { Ingredients: { include: { Ingredient: true } }, _count: true } })

      const response = recipeList.map(recipe => {
        const { id, name, source, Ingredients, preperationInstructions, preperationTimeMin, _count } = recipe

        const listOfIngredientsArr = Ingredients.map(({ Ingredient }) => Ingredient.name)
        const listOfIngredientsStr = listOfIngredientsArr.slice(0, 2).join()
        const listOfIngredients = listOfIngredientsArr.length > 3 ? listOfIngredientsStr + "..." : listOfIngredientsStr

        return {
          id,
          name,
          source,
          numberOfIngredients: _count,
          listOfIngredients,
          preperationInstructions: cutText(preperationInstructions, 50),
          preperationTime: preperationTimeMin < 60 ? `${preperationTimeMin} minutes` : `${Math.floor(preperationTimeMin / 60)} hours ${preperationTimeMin % 60} minutes`
        }
      })


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