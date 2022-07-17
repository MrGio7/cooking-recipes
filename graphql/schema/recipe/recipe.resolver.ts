
const recipeResolver = {
  Query: {
    recipeList: async (_parent: any, _args: any, _context: any) => {
      return []
    }
  }
}

export default recipeResolver