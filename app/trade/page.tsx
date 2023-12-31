import { getAllTrades } from "@/lib/tradeQuery";
import { Stock, Trade } from "@prisma/client";

type TradeInStock = Trade & {
  tradePrice: number;
  stock: Stock;
};

export default async function Page() {
  const trades: TradeInStock[] = await getAllTrades();
  return (
    <main className="p-0.5">
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-gray-500">
          <thead className="bg-gray-50 text-sm">
            <tr>
              <th scope="col" className="pl-6 py-4 font-medium text-gray-900">
                取引日時
              </th>
              <th scope="col" className="pl-6 py-4 font-medium text-gray-900">
                証券コード
              </th>
              <th scope="col" className="pl-6 py-4 font-medium text-gray-900">
                銘柄名
              </th>
              <th scope="col" className="pl-6 py-4 font-medium text-gray-900">
                市場
              </th>
              <th scope="col" className="pl-6 py-4 font-medium text-gray-900">
                株数
              </th>
              <th scope="col" className="pl-6 py-4 font-medium text-gray-900">
                株価
              </th>
              <th scope="col" className="pl-6 py-4 font-medium text-gray-900">
                売買額
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100 text-sm">
            {trades.map((trade) => (
              <tr key={trade.id} className="hover:bg-gray-50">
                <td className="pl-6 py-4">
                  {/* DATE型から書式変更 */}
                  {trade.tradingDate.toLocaleDateString("ja-JP", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </td>
                <td className="pl-6 py-4">{trade.stockCode}</td>
                <td className="pl-6 py-4">{trade.stock.stockname}</td>
                <td className="pl-6 py-4">{trade.stock.market}</td>
                <td className="pl-6 py-4">{trade.shares}株</td>
                <td className="pl-6 py-4">{trade.price}円</td>
                <td className="pl-6 py-4">
                  {trade.tradePrice /* = trade.shares * trade.price */}円
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
