"use client";
import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function NewPieChart() {
  return (
    <div className="pie-chart-container">
      <PieChart
        colors={["#FFCC00", "#FFD7004D", "#FFD7004D"]}
        series={[
          {
            data: [
              { id: 0, value: 201, label: "Wine" },
              { id: 1, value: 201, label: "Beer" },
              { id: 2, value: 201, label: "Others" },
            ],
          },
        ]}
        width={250}
        height={100}
      />
      <style jsx>{`
        .pie-chart-container .MuiPieChart-legendLabel {
          display: inline-block;
          background-color: #ffffff;
          color:white;
          border-radius: 50%;
          padding: 5px 10px;
          margin: 0 5px;
          font-size: 12px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
