/*
  Warnings:

  - You are about to drop the `_DoctorToFundraiser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_DoctorToFundraiser" DROP CONSTRAINT "_DoctorToFundraiser_A_fkey";

-- DropForeignKey
ALTER TABLE "_DoctorToFundraiser" DROP CONSTRAINT "_DoctorToFundraiser_B_fkey";

-- AlterTable
ALTER TABLE "Fundraiser" ADD COLUMN     "doctorId" INTEGER,
ADD COLUMN     "doctorName" TEXT;

-- DropTable
DROP TABLE "_DoctorToFundraiser";

-- AddForeignKey
ALTER TABLE "Fundraiser" ADD CONSTRAINT "Fundraiser_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
