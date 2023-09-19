import { prisma, prismaTrade } from "./prisma";

// 全取引を取得
export async function getAllTrades() {
  const trades = await prismaTrade.trade.findMany({
    orderBy: {
      tradingDate: "asc",
    },
    include: {
      stock: true,
    },
  });
  return trades;
}

// 保有株式の証券コードを取得
export async function getStockAllCodes() {
  const allCodes = await prisma.trade.groupBy({
    by: ["stockCode"],
    orderBy: {
      stockCode: "asc",
    },
  });
  return allCodes;
}

// 銘柄別の全所有株数を取得
export async function getStockAllShares() {
  const allShares = await prisma.trade.groupBy({
    by: ["stockCode"],
    _sum: {
      shares: true,
    },
    orderBy: {
      stockCode: "asc",
    },
  });
  return allShares;
}

// SELECT sum(shares * price) FROM trade WHERE stockCode = code
// 上記のSQLを実現するPrisma Schemaがない模様
// Prisma Schemaでshares * priceの計算まで実現
// shares * priceの合計をforEachで取得
export async function getTotalPriceByCode(code: number) {
  // 指定した証券コードのすべての取引価格を取得
  const trades = await prismaTrade.trade.findMany({
    select: {
      tradePrice: true,
    },
    where: {
      stockCode: code,
    },
  });

  // 取得した取引価格の合計を取得
  let totalPrice = 0;
  trades.forEach((trade) => {
    totalPrice += trade.tradePrice;
  });
  return totalPrice;
}
