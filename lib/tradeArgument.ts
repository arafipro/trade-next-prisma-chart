import { getStock } from "./stockApi";
import { getStockAllCodes, getTotalPriceByCode } from "./tradeApi";

export async function getValues() {
  const codes: number[] = [];
  const stocknames: string[] = [];
  const tradePrices: number[] = [];
  const res = await getStockAllCodes(); // 保有銘柄の証券コードを取得
  await Promise.all(
    res.map(async (item) => {
      const resPrice = await getTotalPriceByCode(item.stockCode);
      const res = await getStock(item.stockCode);
      // 配列の末尾に値を追加する
      codes.push(item.stockCode);
      stocknames.push(res[0].stockname);
      tradePrices.push(resPrice);
    })
  );
  return [codes, stocknames, tradePrices];
}
