-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateTable
CREATE TABLE "patient" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(45) NOT NULL,
    "age" INTEGER NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "gener" "Gender" NOT NULL,

    CONSTRAINT "patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notes" (
    "idnotes" TEXT NOT NULL,
    "name" VARCHAR(45) NOT NULL,
    "dosage" INTEGER NOT NULL,
    "frequency" INTEGER NOT NULL,
    "duration" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,

    CONSTRAINT "notes_pkey" PRIMARY KEY ("idnotes")
);

-- CreateIndex
CREATE INDEX "fk_notes_patient_idx" ON "notes"("patientId");

-- AddForeignKey
ALTER TABLE "notes" ADD CONSTRAINT "notes_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;
