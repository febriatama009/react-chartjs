import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const PieChart = () => {
  const state = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
      "Anjayday",
    ],
    datasets: [
      {
        label: "Class Strength",
        backgroundColor: [
          "Black",
          "Purple",
          "Yellow",
          "Teal",
          "Red",
          "Navy",
          "Brown",
          "Pink",
        ],
        data: [10, 14, 17, 16, 19, 16, 14, 3],
      },
    ],
  };
  return (
    <>
      <div className="card">
        <Pie
          data={state}
          options={{
            title: {
              display: true,
              text: "Class Strength",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
    </>
  );
};

export default PieChart;
