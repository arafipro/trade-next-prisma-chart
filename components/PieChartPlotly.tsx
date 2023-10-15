// Plotly
"use client";

import dynamic from "next/dynamic";
import { Layout } from "plotly.js";
// ビルド時のエラーを回避するために追加
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

// const data: Partial<PlotData> = {
//   values: [100, 300, 600],
//   labels: ["Residential", "Non-Residential", "Utility"],
//   type: "pie",
//   textinfo: "label+percent",
// };

const layout: Partial<Layout> = {
  height: 800,
  width: 800,
  title: {
    text: "銘柄別投資額割合 Plotly",
    font: {
      size: 30,
      family: "Noto Sans JP",
    },
  },
  font: {
    size: 14,
    family: "Noto Sans JP",
  },
};

export default function PieChartPlotly({
  values,
  labels,
}: {
  values: number[];
  labels: string[];
}) {
  return (
    <div>
      <Plot
        data={[
          {
            values: values,
            labels: labels,
            type: "pie",
            textinfo: "label+percent",
            textposition: "outside",
          },
        ]}
        layout={layout}
      />
    </div>
  );
}
