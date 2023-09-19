import { prisma } from "@/lib/prisma";

export async function getAllStocks() {
  const stocks = await prisma.stock.findMany();
  return stocks;
}

export async function getStock(code: number) {
  const stock = await prisma.stock.findMany({
    select: {
      stockname: true,
    },
    where: {
      code: code,
    },
  });
  return stock;
}
