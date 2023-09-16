import prisma from "@/lib/prisma";

export async function getAllTrades() {
  const trades = await prisma.trade.findMany({
    orderBy: {
      tradingDate: "asc",
    },
    include: {
      stock: true,
    },
  });
  return trades;
}
