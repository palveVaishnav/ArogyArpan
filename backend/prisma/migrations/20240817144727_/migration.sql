/*
  Warnings:

  - A unique constraint covering the columns `[regno]` on the table `Doctor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `StateCouncil` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `regDate` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `regno` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Doctor" ADD COLUMN     "StateCouncil" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "qualifications" TEXT[],
ADD COLUMN     "regDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "regno" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Doctor_regno_key" ON "Doctor"("regno");
