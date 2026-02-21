-- CreateTable
CREATE TABLE "Lead" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "treatment" TEXT,
    "procedure" TEXT,
    "message" TEXT,
    "city" TEXT,
    "age" TEXT,
    "pincode" TEXT,
    "consent" BOOLEAN NOT NULL DEFAULT false,
    "source" TEXT,
    "formName" TEXT,
    "status" TEXT NOT NULL DEFAULT 'new',
    "telecrmSynced" BOOLEAN NOT NULL DEFAULT false,
    "telecrmId" TEXT,
    "whatsappNumber" TEXT,
    "womansAgeBracket" TEXT,
    "tryingDuration" TEXT,
    "isWhatsapp" TEXT,
    "preferredDate" TEXT,
    "preferredTime" TEXT,
    "bookingStatus" TEXT DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Lead_phone_idx" ON "Lead"("phone");

-- CreateIndex
CREATE INDEX "Lead_status_idx" ON "Lead"("status");

-- CreateIndex
CREATE INDEX "Lead_formName_idx" ON "Lead"("formName");

-- CreateIndex
CREATE INDEX "Lead_createdAt_idx" ON "Lead"("createdAt");
