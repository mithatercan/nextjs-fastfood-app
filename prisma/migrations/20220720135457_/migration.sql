/*
  Warnings:

  - You are about to drop the `_ProductsOfMenu` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `productId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ProductsOfMenu" DROP CONSTRAINT "_ProductsOfMenu_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductsOfMenu" DROP CONSTRAINT "_ProductsOfMenu_B_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "productId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_ProductsOfMenu";

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
