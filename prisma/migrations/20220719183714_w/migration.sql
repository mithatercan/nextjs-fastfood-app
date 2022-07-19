-- CreateEnum
CREATE TYPE "Drinks" AS ENUM ('Coke', 'Pepsi', 'Lipton', 'Ayran', 'Water', 'Soda');

-- AlterTable
ALTER TABLE "Menu" ADD COLUMN     "drink" "Drinks" NOT NULL DEFAULT 'Coke';
