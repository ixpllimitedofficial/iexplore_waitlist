'use client'

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Divider from "@/components/UI/Divider";

ChartJS.register(ArcElement, Tooltip, Legend);

const DrinksChart = () => {
  // Data for the Pie Chart
  const chartData = {
    datasets: [
      {
        data: [201, 201, 201], // Values for Wine, Beer, Others
        backgroundColor: ["#FFD700", "#C4C400", "#5C5C00"], // Custom colors
        hoverBackgroundColor: ["#FFC300", "#BFBF00", "#4C4C00"],
      },
    ],
  };

  return (

    <div>
      <div className="flex items-center justify-between">
        {/* Pie Chart  24 24*/}
        <div className="w-20 h-20">
          <Doughnut
            data={chartData}
            options={{
              plugins: {
                legend: { display: false },
              },
              cutout: "40%",
            }}
          />
        </div>

        {/* Legend */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 inline-block rounded-full"
              style={{ backgroundColor: "#FFD700" }}
            ></span>
            Wine - 201
          </div>
          <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 inline-block rounded-full"
              style={{ backgroundColor: "#C4C400" }}
            ></span>
            Beer - 201
          </div>
          <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 inline-block rounded-full"
              style={{ backgroundColor: "#5C5C00" }}
            ></span>
            Others - 201
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinksChart;
