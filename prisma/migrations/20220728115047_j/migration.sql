/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Company` table. All the data in the column will be lost.
  - Added the required column `companyId` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_categoryId_fkey";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "companyId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "categoryId";

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
