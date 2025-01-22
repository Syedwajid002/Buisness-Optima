import React, { useState } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Title,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Title);

const HorizontalBarChartWithFilters = () => {
  const [pipeline, setPipeline] = useState("Marketing Pipeline");
  const [timeRange, setTimeRange] = useState("Last 3 Months");

  const data = {
    labels: ["Conversation", "Follow Up", "Inpipeline"],
    datasets: [
      {
        label: "Leads By Stage",
        data: [500, 450, 200],
        backgroundColor: "red",
        barThickness: 15,
        borderRadius: 2,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
    },
    layout: {
      padding: {
        top: 20,
        bottom: 20,
        left: 10,
        right: 10,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "gray",
          font: {
            size: 10,
          },
        },
        grid: {
          color: "rgba(0,0,0,0.1)", // Light grid lines
        },
      },
      y: {
        ticks: {
          color: "black",
          font: {
            size: 10,
          },
        },
        grid: {
          display: false, // No horizontal grid lines
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-lg pl-6 pt-2 w-full max-w-3xl mx-auto max-h-1/2 mb-4 h-[250px] mt-1">
      <div className="flex justify-between items-center">
        {/* Title */}
        <h2 className="text-lg font-semibold">Leads By Stage</h2>

        {/* Dropdowns */}
        <div className="flex space-x-4">
          <select
            value={pipeline}
            onChange={(e) => setPipeline(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option>Marketing Pipeline</option>
            <option>Sales Pipeline</option>
            <option>Support Pipeline</option>
          </select>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option>Last 3 Months</option>
            <option>Last 6 Months</option>
            <option>Last Year</option>
          </select>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="h-56  ">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default HorizontalBarChartWithFilters;
