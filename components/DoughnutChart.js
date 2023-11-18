"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { ArcElement, CategoryScale, Chart, LineElement, LinearScale, PointElement, Tooltip } from 'chart.js';

// Register only the components you are using
Chart.register(
  ArcElement,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip
);

const DoughnutChart = () => {
  const data = {
    labels: ["Acquisition", "Retention", "Purchase"],
    datasets: [
      {
        data: [200, 150, 50],
        backgroundColor: ["#5570F1", "#FFCC91", "#97A5EB"],
        hoverBackgroundColor: ["#5570F1", "#FFCC91", "#97A5EB"],
      },
    ],
  };

  return (
    <div className="w-full md:w-3/4 sm:w-1/2 md:w-1/3 mx-auto sm:w-full">
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;
