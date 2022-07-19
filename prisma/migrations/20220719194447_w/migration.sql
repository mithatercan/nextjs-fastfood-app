/*
  Warnings:

  - You are about to drop the column `saucesId` on the `Menu` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Menu" DROP CONSTRAINT "Menu_saucesId_fkey";

-- AlterTable
ALTER TABLE "Ingredients" ADD COLUMN     "dessertsId" INTEGER;

-- AlterTable
ALTER TABLE "Menu" DROP COLUMN "saucesId";

-- AddForeignKey
ALTER TABLE "Ingredients" ADD CONSTRAINT "Ingredients_dessertsId_fkey" FOREIGN KEY ("dessertsId") REFERENCES "Desserts"("id") ON DELETE SET NULL ON UPDATE CASCADE;
