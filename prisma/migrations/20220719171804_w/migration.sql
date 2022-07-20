/*
  Warnings:

  - You are about to drop the column `menuId` on the `Extra` table. All the data in the column will be lost.
  - You are about to drop the column `menuId` on the `Product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Extra" DROP CONSTRAINT "Extra_menuId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_menuId_fkey";

-- AlterTable
ALTER TABLE "Extra" DROP COLUMN "menuId";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "menuId";
