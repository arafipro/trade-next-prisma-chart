-- CreateTable
CREATE TABLE "Stock" (
    "code" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "stockname" TEXT NOT NULL,
    "market" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Trade" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "price" INTEGER NOT NULL,
    "shares" REAL NOT NULL,
    "stockCode" INTEGER NOT NULL,
    CONSTRAINT "Trade_stockCode_fkey" FOREIGN KEY ("stockCode") REFERENCES "Stock" ("code") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Stock_stockname_key" ON "Stock"("stockname");

-- CreateIndex
CREATE UNIQUE INDEX "Stock_market_key" ON "Stock"("market");
