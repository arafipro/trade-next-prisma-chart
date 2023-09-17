import { prismaTrade } from "./prisma";

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
