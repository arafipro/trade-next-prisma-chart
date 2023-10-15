import PieChartPlotly from "@/components/PieChartPlotly";
import { getValues } from "@/lib/tradeArgument";

export default async function Page() {
  const res = await getValues();

  const codes = res.codes;
  const stocknames = res.stocknames;
  const tradePrices = res.tradePrices;
  return (
    <main className="flex items-center justify-center w-full">
      <PieChartPlotly values={tradePrices} labels={stocknames}></PieChartPlotly>
    </main>
  );
}
