/*
  Warnings:

  - A unique constraint covering the columns `[sellerId]` on the table `Menu` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Menu_sellerId_key" ON "Menu"("sellerId");
