import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const prismaTrade = new PrismaClient().$extends({
  result: {
    trade: {
      tradePrice: {
        needs: { shares: true, price: true },
        compute(_trade) {
          return _trade.shares * _trade.price;
        },
      },
    },
  },
});
