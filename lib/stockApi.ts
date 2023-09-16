import prisma from "@/lib/prisma";

export async function getAllStocks() {
  const stocks = await prisma.stock.findMany();
  return stocks;
}
