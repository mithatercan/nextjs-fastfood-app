/*
  Warnings:

  - You are about to drop the `Extra` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Menu" ALTER COLUMN "size" SET DEFAULT 'Medium';

-- DropTable
DROP TABLE "Extra";
