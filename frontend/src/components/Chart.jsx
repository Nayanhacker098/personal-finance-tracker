import React from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useGlobalContext } from "../utils/context";

const ChartDiv = () => {
  const { totalIncome, totalExpense } = useGlobalContext();
  Chart.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        labels: ["Income", "Expense"],
        data: [totalIncome, totalExpense],
        backgroundColor: ["rgb(54, 162, 235)", "rgb(255, 99, 132)"],
        borderColor: ["rgb(54, 162, 235)", "rgb(255, 99, 132)"],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div className="col-1 p-4 flex items-center justify-center w-full h-[350px]">
      <Doughnut data={data} />
    </div>
  );
};

export default ChartDiv;
