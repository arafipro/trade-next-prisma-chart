-- CreateTable
CREATE TABLE "Stock" (
    "code" INTEGER NOT NULL,
    "stockname" TEXT NOT NULL,
    "market" TEXT NOT NULL,

    CONSTRAINT "Stock_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "Trade" (
    "id" SERIAL NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "shares" INTEGER NOT NULL,
    "tradingDate" DATE NOT NULL,
    "stockCode" INTEGER NOT NULL,

    CONSTRAINT "Trade_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Stock_stockname_key" ON "Stock"("stockname");

-- AddForeignKey
ALTER TABLE "Trade" ADD CONSTRAINT "Trade_stockCode_fkey" FOREIGN KEY ("stockCode") REFERENCES "Stock"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
