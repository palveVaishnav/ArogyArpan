/*
  Warnings:

  - Added the required column `amount` to the `Fundraiser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Fundraiser" ADD COLUMN     "amount" INTEGER NOT NULL;
