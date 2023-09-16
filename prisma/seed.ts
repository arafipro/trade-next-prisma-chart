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
          tradingDate: "2023-04-20T00:00:00.000Z",
        },
            {
              price: 5738.0,
              shares: 2,
              tradingDate: "2023-06-07T00:00:00.000Z",
            },
            {
              price: 5688.0,
              shares: 2,
              tradingDate: "2023-06-27T00:00:00.000Z",
            },
            {
              price: 5461.0,
              shares: 2,
              tradingDate: "2023-07-11T00:00:00.000Z",
            },
            {
              price: 5344.0,
              shares: 2,
              tradingDate: "2023-07-28T00:00:00.000Z",
            },
      ],
    },
  },
  // {
  //   code: 3093,
  //   stockname: "トレジャー・ファクトリー",
  //   market: "プライム",
  //   trades: {
  //     create: [
  //       {
  //         price: 1460.0,
  //         shares: 7,
  //         tradingDate: "2023-08-24T00:00:00.000Z",
  //       },
  //     ],
  //   },
  // },
  {
    code: 4661,
    stockname: "オリエンタルランド",
    market: "プライム",
    trades: {
      create: [
        {
          price: 4825.0,
          shares: 3,
          tradingDate: "2023-04-28T00:00:00.000Z",
        },
        {
          price: 5337.0,
          shares: 2,
          tradingDate: "2023-06-16T00:00:00.000Z",
        },
        {
          price: 5398.0,
          shares: 2,
          tradingDate: "2023-08-01T00:00:00.000Z",
        },
      ],
    },
  },
  // {
  //   code: 5020,
  //   stockname: "ＥＮＥＯＳホールディングス",
  //   market: "プライム",
  //   trades: {
  //     create: [
  //       {
  //         price: 492.0,
  //         shares: 21,
  //         tradingDate: "2023-05-12T00:00:00.000Z",
  //       },
  //     ],
  //   },
  // },
  // {
  //   code: 5101,
  //   stockname: "横浜ゴム",
  //   market: "プライム",
  //   trades: {
  //     create: [
  //       {
  //         price: 2972.0,
  //         shares: 4,
  //         tradingDate: "2023-08-15T00:00:00.000Z",
  //       },
  //     ],
  //   },
  // },
  // {
  //   code: 5108,
  //   stockname: "ブリヂストン",
  //   market: "プライム",
  //   trades: {
  //     create: [
  //       {
  //         price: 6039.0,
  //         shares: 2,
  //         tradingDate: "2023-06-15T00:00:00.000Z",
  //       },
  //     ],
  //   },
  // },
  // {
  //   code: 7276,
  //   stockname: "小糸製作所",
  //   market: "プライム",
  //   trades: {
  //     create: [
  //       {
  //         price: 2869.0,
  //         shares: 4,
  //         tradingDate: "2023-06-15T00:00:00.000Z",
  //       },
  //     ],
  //   },
  // },
  {
    code: 7550,
    stockname: "ゼンショーホールディングス",
    market: "プライム",
    trades: {
      create: [
        {
          price: 4330.0,
          shares: 3,
          tradingDate: "2023-04-28T00:00:00.000Z",
        },
        {
          price: 5866.0,
          shares: 2,
          tradingDate: "2023-06-07T00:00:00.000Z",
        },
        {
          price: 6172.0,
          shares: 2,
          tradingDate: "2023-06-20T00:00:00.000Z",
        },
        {
          price: 6492.0,
          shares: 2,
          tradingDate: "2023-07-05T00:00:00.000Z",
        },
        {
          price: 7337.0,
          shares: 2,
          tradingDate: "2023-07-28T00:00:00.000Z",
        },
        {
          price: 7234.0,
          shares: 2,
          tradingDate: "2023-08-02T00:00:00.000Z",
        },
        {
          price: 6897.0,
          shares: 2,
          tradingDate: "2023-08-08T00:00:00.000Z",
        },
        {
          price: 7337.0,
          shares: 2,
          tradingDate: "2023-08-15T00:00:00.000Z",
        },
        {
          price: 6774.0,
          shares: 2,
          tradingDate: "2023-08-16T00:00:00.000Z",
        },
        {
          price: 6552.0,
          shares: 2,
          tradingDate: "2023-08-18T00:00:00.000Z",
        },
        {
          price: 6940.0,
          shares: 2,
          tradingDate: "2023-08-28T00:00:00.000Z",
        },
      ],
    },
  },
  // {
  //   code: 8002,
  //   stockname: "丸紅",
  //   market: "プライム",
  //   trades: {
  //     create: [
  //       {
  //         price: 1900.0,
  //         shares: 6,
  //         tradingDate: "2023-05-09T00:00:00.000Z",
  //       },
  //       {
  //         price: 2523.0,
  //         shares: 4,
  //         tradingDate: "2023-06-23T00:00:00.000Z",
  //       },
  //     ],
  //   },
  // },
  {
    code: 8136,
    stockname: "サンリオ",
    market: "プライム",
    trades: {
      create: [
        {
          price: 6107.0,
          shares: 2,
          tradingDate: "2023-07-05T00:00:00.000Z",
        },
        {
          price: 6188.0,
          shares: 2,
          tradingDate: "2023-07-28T00:00:00.000Z",
        },
        {
          price: 7779.0,
          shares: 2,
          tradingDate: "2023-08-07T00:00:00.000Z",
        },
        {
          price: 7699.0,
          shares: 2,
          tradingDate: "2023-08-21T00:00:00.000Z",
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
          tradingDate: "2023-04-17T00:00:00.000Z",
        },
        {
          price: 2806.0,
          shares: 4,
          tradingDate: "2023-06-07T00:00:00.000Z",
        },
        {
          price: 2995.0,
          shares: 4,
          tradingDate: "2023-07-13T00:00:00.000Z",
        },
        {
          price: 3007.0,
          shares: 4,
          tradingDate: "2023-07-28T00:00:00.000Z",
        },
        {
          price: 3007.0,
          shares: 4,
          tradingDate: "2023-08-21T00:00:00.000Z",
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
          tradingDate: "2023-08-21T00:00:00.000Z",
        },
        {
          price: 4854.0,
          shares: 3,
          tradingDate: "2023-08-08T00:00:00.000Z",
        },
        {
          price: 3569.0,
          shares: 3,
          tradingDate: "2023-06-29T00:00:00.000Z",
        },
        {
          price: 3826.0,
          shares: 3,
          tradingDate: "2023-07-10T00:00:00.000Z",
        },
        {
          price: 4575.0,
          shares: 3,
          tradingDate: "2023-08-07T00:00:00.000Z",
        },
      ],
    },
  },
  // {
  //   code: 9433,
  //   stockname: "ＫＤＤＩ",
  //   market: "プライム",
  //   trades: {
  //     create: [
  //       {
  //         price: 4112.0,
  //         shares: 3,
  //         tradingDate: "2023-04-20T00:00:00.000Z",
  //       },
  //       {
  //         price: 4464.0,
  //         shares: 3,
  //         tradingDate: "2023-07-03T00:00:00.000Z",
  //       },
  //     ],
  //   },
  // },
  // {
  //   code: 9468,
  //   stockname: "ＫＡＤＯＫＡＷＡ",
  //   market: "プライム",
  //   trades: {
  //     create: [
  //       {
  //         price: 2864.0,
  //         shares: 12,
  //         tradingDate: "2023-05-02T00:00:00.000Z",
  //       },
  //       {
  //         price: 3451.0,
  //         shares: 3,
  //         tradingDate: "2023-06-23T00:00:00.000Z",
  //       },
  //     ],
  //   },
  // },
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
