/*
  Warnings:

  - You are about to drop the column `drink` on the `Menu` table. All the data in the column will be lost.
  - You are about to drop the `Ingredient` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Ingredient" DROP CONSTRAINT "Ingredient_productId_fkey";

-- AlterTable
ALTER TABLE "Menu" DROP COLUMN "drink",
ADD COLUMN     "saucesId" INTEGER;

-- DropTable
DROP TABLE "Ingredient";

-- DropEnum
DROP TYPE "Drinks";

-- CreateTable
CREATE TABLE "Sauces" (
    "id" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "sellerId" INTEGER,

    CONSTRAINT "Sauces_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Desserts" (
    "id" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "sellerId" INTEGER,

    CONSTRAINT "Desserts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Drinks" (
    "id" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "sellerId" INTEGER,

    CONSTRAINT "Drinks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Side_Dish" (
    "id" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "sellerId" INTEGER NOT NULL,

    CONSTRAINT "Side_Dish_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingredients" (
    "id" SERIAL NOT NULL,
    "price" INTEGER,
    "name" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    "side_DishId" INTEGER,

    CONSTRAINT "Ingredients_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Menu" ADD CONSTRAINT "Menu_saucesId_fkey" FOREIGN KEY ("saucesId") REFERENCES "Sauces"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sauces" ADD CONSTRAINT "Sauces_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Desserts" ADD CONSTRAINT "Desserts_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Drinks" ADD CONSTRAINT "Drinks_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Side_Dish" ADD CONSTRAINT "Side_Dish_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingredients" ADD CONSTRAINT "Ingredients_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingredients" ADD CONSTRAINT "Ingredients_side_DishId_fkey" FOREIGN KEY ("side_DishId") REFERENCES "Side_Dish"("id") ON DELETE SET NULL ON UPDATE CASCADE;
