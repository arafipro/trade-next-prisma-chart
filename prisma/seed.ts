import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const stockData: Prisma.StockCreateInput[] = [
  {
    code: 2802,
    stockname: "味の素",
    market: "プライム",
    trades: {
      create: [
        {
          price: 4894.0,
          shares: 3,
          tradingDate: "20230420",
        },
        {
          price: 5738.0,
          shares: 2,
          tradingDate: "20230607",
        },
        {
          price: 5688.0,
          shares: 2,
          tradingDate: "20230627",
        },
        {
          price: 5461.0,
          shares: 2,
          tradingDate: "20230711",
        },
        {
          price: 5344.0,
          shares: 2,
          tradingDate: "20230728",
        },
      ],
    },
  },
  {
    code: 3093,
    stockname: "トレジャー・ファクトリー",
    market: "プライム",
    trades: {
      create: [
        {
          price: 1460.0,
          shares: 7,
          tradingDate: "20230824",
        },
      ],
    },
  },
  {
    code: 4661,
    stockname: "オリエンタルランド",
    market: "プライム",
    trades: {
      create: [
        {
          price: 4825.0,
          shares: 3,
          tradingDate: "20230428",
        },
        {
          price: 5337.0,
          shares: 2,
          tradingDate: "20230616",
        },
        {
          price: 5398.0,
          shares: 2,
          tradingDate: "20230801",
        },
      ],
    },
  },
  {
    code: 5020,
    stockname: "ＥＮＥＯＳホールディングス",
    market: "プライム",
    trades: {
      create: [
        {
          price: 492.0,
          shares: 21,
          tradingDate: "20230512",
        },
      ],
    },
  },
  {
    code: 5101,
    stockname: "横浜ゴム",
    market: "プライム",
    trades: {
      create: [
        {
          price: 2972.0,
          shares: 4,
          tradingDate: "20230815",
        },
      ],
    },
  },
  {
    code: 5108,
    stockname: "ブリヂストン",
    market: "プライム",
    trades: {
      create: [
        {
          price: 6039.0,
          shares: 2,
          tradingDate: "20230615",
        },
      ],
    },
  },
  {
    code: 7276,
    stockname: "小糸製作所",
    market: "プライム",
    trades: {
      create: [
        {
          price: 2869.0,
          shares: 4,
          tradingDate: "20230615",
        },
      ],
    },
  },
  {
    code: 7550,
    stockname: "ゼンショーホールディングス",
    market: "プライム",
    trades: {
      create: [
        {
          price: 4330.0,
          shares: 3,
          tradingDate: "20230428",
        },
        {
          price: 5866.0,
          shares: 2,
          tradingDate: "20230607",
        },
        {
          price: 6172.0,
          shares: 2,
          tradingDate: "20230620",
        },
        {
          price: 6492.0,
          shares: 2,
          tradingDate: "20230705",
        },
        {
          price: 7337.0,
          shares: 2,
          tradingDate: "20230728",
        },
        {
          price: 7234.0,
          shares: 2,
          tradingDate: "20230802",
        },
        {
          price: 6897.0,
          shares: 2,
          tradingDate: "20230808",
        },
        {
          price: 7337.0,
          shares: 2,
          tradingDate: "20230815",
        },
        {
          price: 6774.0,
          shares: 2,
          tradingDate: "20230816",
        },
        {
          price: 6552.0,
          shares: 2,
          tradingDate: "20230818",
        },
        {
          price: 6940.0,
          shares: 2,
          tradingDate: "20230828",
        },
      ],
    },
  },
  {
    code: 8002,
    stockname: "丸紅",
    market: "プライム",
    trades: {
      create: [
        {
          price: 1900.0,
          shares: 6,
          tradingDate: "20230509",
        },
        {
          price: 2523.0,
          shares: 4,
          tradingDate: "20230623",
        },
      ],
    },
  },
  {
    code: 8136,
    stockname: "サンリオ",
    market: "プライム",
    trades: {
      create: [
        {
          price: 6107.0,
          shares: 2,
          tradingDate: "20230705",
        },
        {
          price: 6188.0,
          shares: 2,
          tradingDate: "20230728",
        },
        {
          price: 7779.0,
          shares: 2,
          tradingDate: "20230807",
        },
        {
          price: 7699.0,
          shares: 2,
          tradingDate: "20230821",
        },
      ],
    },
  },
  {
    code: 8267,
    stockname: "イオン",
    market: "プライム",
    trades: {
      create: [
        {
          price: 2681.0,
          shares: 4,
          tradingDate: "20230417",
        },
        {
          price: 2806.0,
          shares: 4,
          tradingDate: "20230607",
        },
        {
          price: 2995.0,
          shares: 4,
          tradingDate: "20230713",
        },
        {
          price: 3007.0,
          shares: 4,
          tradingDate: "20230728",
        },
        {
          price: 3007.0,
          shares: 4,
          tradingDate: "20230821",
        },
      ],
    },
  },
  {
    code: 9107,
    stockname: "川崎汽船",
    market: "プライム",
    trades: {
      create: [
        {
          price: 4780.0,
          shares: 3,
          tradingDate: "20230821",
        },
        {
          price: 4854.0,
          shares: 3,
          tradingDate: "20230808",
        },
        {
          price: 3569.0,
          shares: 3,
          tradingDate: "20230629",
        },
        {
          price: 3826.0,
          shares: 3,
          tradingDate: "20230710",
        },
        {
          price: 4575.0,
          shares: 3,
          tradingDate: "20230807",
        },
      ],
    },
  },
  {
    code: 9433,
    stockname: "ＫＤＤＩ",
    market: "プライム",
    trades: {
      create: [
        {
          price: 4112.0,
          shares: 3,
          tradingDate: "20230420",
        },
        {
          price: 4464.0,
          shares: 3,
          tradingDate: "20230703",
        },
      ],
    },
  },
  {
    code: 9468,
    stockname: "ＫＡＤＯＫＡＷＡ",
    market: "プライム",
    trades: {
      create: [
        {
          price: 2864.0,
          shares: 12,
          tradingDate: "20230502",
        },
        {
          price: 3451.0,
          shares: 3,
          tradingDate: "20230623",
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const s of stockData) {
    const stock = await prisma.stock.create({
      data: s,
    });
    console.log(`Created user with id: ${stock.code}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
