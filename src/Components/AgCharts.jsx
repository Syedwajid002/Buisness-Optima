import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { AgCharts } from "ag-charts-react"; // Correct import
import "ag-charts-enterprise";

export const ChartExample = () => {
  const [pipeline, setPipeline] = useState("Marketing Pipeline");
  const [timeRange, setTimeRange] = useState("Last 3 Months");
  function getData() {
    return [
      { group: "Inpipeline", value: 1454 },
      { group: "Follow Up", value: 1200 },
      { group: "Schedule Service", value: 900 },
      { group: "Conversation", value: 600 },
      { group: "Win", value: 300 },
      { group: "Lost", value: 200 },
    ];
  }

  const [options, setOptions] = useState({
    data: getData(),
    title: {
      text: "",
    },
    series: [
      {
        type: "funnel",
        stageKey: "group", // The key for the stage
        valueKey: "value", // The key for the value
        dropOff: {
          enabled: false,
        },
        barWidth: 120,
        spacing: 1,

        // Customizing the colors for each stage
        fills: [
          "#0066CC", // Inpipeline
          "#00CC66", // Follow Up
          "#FF9900", // Schedule Service
          "#FF6600", // Conversation
          "#CC3333", // Win
          "#990000", // Lost
        ],
        // Positioning labels inside the bars and centering them
        label: {
          enabled: true,
          position: "inside", // Place labels inside the bars
          align: "center", // Center the label horizontally
          fontSize: 10,
          fontWeight: "bold",
          fontFamily: "Arial",
          color: "#ffffff",
          // Set label color to white
        },
      },
    ],
  });

  return (
    <div className="bg-white shadow-md  border rounded-lg pl-6 pt-2 w-full mt-4 max-w-3xl mx-2 h-[500px] flex-col justify-center items-center">
      <div className="flex justify-between items-center">
        {/* Title */}
        <h2 className="text-lg font-semibold">Projects By Stage</h2>

        {/* Dropdowns */}
        <div className="flex space-x-4 mr-1">
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

      <div className="w-full h-full">
        <AgCharts options={options} />
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<ChartExample />);
