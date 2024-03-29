/*
  Warnings:

  - The primary key for the `Job` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `companyName` on the `Job` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Job" DROP CONSTRAINT "Job_pkey",
DROP COLUMN "companyName",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Job_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Job_id_seq";
