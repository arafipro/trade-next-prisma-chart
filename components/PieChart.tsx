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
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: "銘柄別投資額割合 Chart.js",
      font: {
        size: 32,
        family: "Noto Sans JP",
      },
    },
  },
};

// const data = {
//   labels: ["Red", "Blue", "Yellow"],
//   datasets: [
//     {
//       label: "My First Dataset",
//       data: [600, 100, 300],
//       backgroundColor: [
//         "rgb(255, 99, 132)",
//         "rgb(54, 162, 235)",
//         "rgb(255, 205, 86)",
//       ],
//       hoverOffset: 4,
//     },
//   ],
// };

export default function PieChart({
  values,
  labels,
}: {
  values: number[];
  labels: string[];
}) {
  return (
    <div className="bg-white m-4 p-2 w-full">
      <Pie
        data={{
          labels: labels,
          datasets: [
            {
              label: "My First Dataset",
              data: values,
              backgroundColor: [
                "rgb(255,210,179)",
                "rgb(255,157,131)",
                "rgb(255,106, 85)",
                "rgb(215, 53, 43)",
                "rgb(158,  0,  1)",
                "rgb(104,  0,  0)",
                "rgb( 68,  0,  0)",
                "rgb(199,120, 17)",
                "rgb(255,167, 70)",
                "rgb(255,217,118)",
                "rgb(255,255,167)",
                "rgb(  0, 27, 92)",
                "rgb(  0, 64,138)",
                "rgb( 16,106,187)",
                "rgb( 91,151,238)",
                "rgb(146,199,255)",
                "rgb(200,250,255)",
              ],
              hoverOffset: 4,
            },
          ],
        }}
        options={options}
        width={800}
        height={800}
      />
    </div>
  );
}
