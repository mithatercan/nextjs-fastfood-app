/*
  Warnings:

  - You are about to drop the column `password` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `Company` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Company" DROP COLUMN "password",
DROP COLUMN "username",
ALTER COLUMN "region" DROP NOT NULL,
ALTER COLUMN "currency" DROP NOT NULL;
