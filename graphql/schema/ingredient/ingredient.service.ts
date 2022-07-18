// Converts the first letter of each word to uppercase.
export const convertIngredientName = (ingredient: string) => {
  return ingredient.toLowerCase().replace(/\b(\w)/g, (s: string) => s.toUpperCase())
}