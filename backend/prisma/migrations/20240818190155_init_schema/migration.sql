/*
  Warnings:

  - You are about to drop the column `doctorId` on the `Fundraiser` table. All the data in the column will be lost.
  - You are about to drop the column `doctorName` on the `Fundraiser` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Fundraiser" DROP CONSTRAINT "Fundraiser_doctorId_fkey";

-- AlterTable
ALTER TABLE "Fundraiser" DROP COLUMN "doctorId",
DROP COLUMN "doctorName";

-- CreateTable
CREATE TABLE "_DoctorToFundraiser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DoctorToFundraiser_AB_unique" ON "_DoctorToFundraiser"("A", "B");

-- CreateIndex
CREATE INDEX "_DoctorToFundraiser_B_index" ON "_DoctorToFundraiser"("B");

-- AddForeignKey
ALTER TABLE "_DoctorToFundraiser" ADD CONSTRAINT "_DoctorToFundraiser_A_fkey" FOREIGN KEY ("A") REFERENCES "Doctor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DoctorToFundraiser" ADD CONSTRAINT "_DoctorToFundraiser_B_fkey" FOREIGN KEY ("B") REFERENCES "Fundraiser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
