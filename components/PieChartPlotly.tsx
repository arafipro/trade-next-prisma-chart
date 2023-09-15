// Plotly
"use client";

import dynamic from "next/dynamic";
import { Layout, PlotData } from "plotly.js";
// ビルド時のエラーを回避するために追加
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

const data: Partial<PlotData> = {
  values: [100, 300, 600],
  labels: ["Residential", "Non-Residential", "Utility"],
  type: "pie",
  textinfo: "label+percent",
};

const layout: Partial<Layout> = {
  height: 800,
  width: 800,
  title: {
    text: "Test Pie Chart by Plotly",
    font: { size: 30, family: "Noto Sans JP" },
  },
  font: { family: "Noto Sans JP" },
};

export default function PieChartPlotly() {
  return (
    <div>
      <Plot data={[data]} layout={layout} />
    </div>
  );
}
