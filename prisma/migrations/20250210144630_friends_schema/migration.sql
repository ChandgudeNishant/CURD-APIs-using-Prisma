/*
  Warnings:

  - You are about to drop the column `name` on the `Friends` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[lastName]` on the table `Friends` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `firstName` to the `Friends` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Friends` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Friends` DROP COLUMN `name`,
    ADD COLUMN `firstName` VARCHAR(191) NOT NULL,
    ADD COLUMN `lastName` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Friends_lastName_key` ON `Friends`(`lastName`);
