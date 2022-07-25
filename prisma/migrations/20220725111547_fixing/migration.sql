/*
  Warnings:

  - You are about to drop the column `sellerId` on the `Product` table. All the data in the column will be lost.
  - The `ingredients` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[companyId]` on the table `Category` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_sellerId_fkey";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "companyId" INTEGER;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "sellerId",
DROP COLUMN "ingredients",
ADD COLUMN     "ingredients" TEXT[];

-- CreateIndex
CREATE UNIQUE INDEX "Category_companyId_key" ON "Category"("companyId");

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;
