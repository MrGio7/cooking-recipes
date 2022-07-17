/*
  Warnings:

  - You are about to drop the column `measure` on the `Ingredient` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Ingredient` table. All the data in the column will be lost.
  - You are about to drop the `_IngredientToRecipe` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Ingredient` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "_IngredientToRecipe" DROP CONSTRAINT "_IngredientToRecipe_A_fkey";

-- DropForeignKey
ALTER TABLE "_IngredientToRecipe" DROP CONSTRAINT "_IngredientToRecipe_B_fkey";

-- AlterTable
ALTER TABLE "Ingredient" DROP COLUMN "measure",
DROP COLUMN "quantity";

-- DropTable
DROP TABLE "_IngredientToRecipe";

-- CreateTable
CREATE TABLE "IngredientsForRecipe" (
    "recipeId" TEXT NOT NULL,
    "ingredientId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "measure" "CookingMeasures" NOT NULL,

    CONSTRAINT "IngredientsForRecipe_pkey" PRIMARY KEY ("recipeId","ingredientId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ingredient_name_key" ON "Ingredient"("name");

-- AddForeignKey
ALTER TABLE "IngredientsForRecipe" ADD CONSTRAINT "IngredientsForRecipe_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IngredientsForRecipe" ADD CONSTRAINT "IngredientsForRecipe_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
