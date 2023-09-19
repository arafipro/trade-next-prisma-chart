import PieChartPlotly from "@/components/PieChartPlotly";
import { getValues } from "@/lib/tradeArgument";

export default async function Page() {
  const res = await getValues();

  const codes = res[0];
  const stocknames = res[1];
  const tradePrices = res[2];
  return (
    <main className="flex items-center justify-center w-full ">
      <PieChartPlotly values={tradePrices} labels={stocknames}></PieChartPlotly>
    </main>
  );
}
