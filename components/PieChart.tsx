// Chart.js
"use client";

import {
  ArcElement,
  Chart as ChartJS,
  ChartOptions,
  // グラフの凡例を表示
  Legend,
  // タイトルを表示
  Title,
  // グラフのツールチップを表示
  Tooltip,
} from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Legend, Title, Tooltip);

const options: ChartOptions<"pie"> = {
  plugins: {
    title: {
      display: true,
      text: "Test Pie Chart by Chart.js",
      font: {
				size: 32,
				family:"Noto Sans JP"
      },
    },
  },
};

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [600, 100, 300],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

export default function PieChart() {
  return (
    <div className="bg-white m-4 p-2 w-full">
      <Pie data={data} options={options} />
    </div>
  );
}
