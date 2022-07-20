/*
  Warnings:

  - You are about to drop the column `menuId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `Desserts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Drinks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ingredients` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Menu` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sauces` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Side_Dish` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[sellerId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `categoryId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ingredients` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sellerId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Desserts" DROP CONSTRAINT "Desserts_sellerId_fkey";

-- DropForeignKey
ALTER TABLE "Drinks" DROP CONSTRAINT "Drinks_sellerId_fkey";

-- DropForeignKey
ALTER TABLE "Ingredients" DROP CONSTRAINT "Ingredients_dessertsId_fkey";

-- DropForeignKey
ALTER TABLE "Ingredients" DROP CONSTRAINT "Ingredients_productId_fkey";

-- DropForeignKey
ALTER TABLE "Ingredients" DROP CONSTRAINT "Ingredients_side_DishId_fkey";

-- DropForeignKey
ALTER TABLE "Menu" DROP CONSTRAINT "Menu_sellerId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_menuId_fkey";

-- DropForeignKey
ALTER TABLE "Sauces" DROP CONSTRAINT "Sauces_sellerId_fkey";

-- DropForeignKey
ALTER TABLE "Side_Dish" DROP CONSTRAINT "Side_Dish_sellerId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "menuId",
ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "ingredients" TEXT NOT NULL,
ADD COLUMN     "sellerId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Desserts";

-- DropTable
DROP TABLE "Drinks";

-- DropTable
DROP TABLE "Ingredients";

-- DropTable
DROP TABLE "Menu";

-- DropTable
DROP TABLE "Sauces";

-- DropTable
DROP TABLE "Side_Dish";

-- DropEnum
DROP TYPE "Size";

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProductsOfMenu" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductsOfMenu_AB_unique" ON "_ProductsOfMenu"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductsOfMenu_B_index" ON "_ProductsOfMenu"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Product_sellerId_key" ON "Product"("sellerId");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductsOfMenu" ADD CONSTRAINT "_ProductsOfMenu_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductsOfMenu" ADD CONSTRAINT "_ProductsOfMenu_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
