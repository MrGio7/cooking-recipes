import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const ingredients = ["Flour", "Milk", "Oil", "Salt", "Sugar", "Eggs", "Tomatoes", "Peppers", "Cheese", "Potatoes", "Meat"]

async function main() {
  await prisma.ingredient.createMany({
    data: ingredients.map((ingredient) => ({ name: ingredient.toLowerCase() })),
    skipDuplicates: true
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })