-- AlterTable
ALTER TABLE "Fundraiser" ADD COLUMN     "raised" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "verified" SET DEFAULT false,
ALTER COLUMN "doctorName" DROP NOT NULL;