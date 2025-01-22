import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { AgCharts } from "ag-charts-react"; // Correct import
import "ag-charts-enterprise";

export const ChartExample = () => {
  function getData() {
    return [
      { group: "Inpipeline", value: 1454 },
      { group: "Follow Up", value: 1200 },
      { group: "Schedule Service", value: 900 },
      { group: "Conversation", value: 600 },
      { group: "Win", value: 300 },
      { group: "Lost", value: 100 },
    ];
  }

  const [options, setOptions] = useState({
    data: getData(),
    title: {
      text: "Revenue Open by Sales Stage",
    },
    series: [
      {
        type: "funnel",
        stageKey: "group", // The key for the stage
        valueKey: "value", // The key for the value
        dropOff: {
          enabled: false,
        },
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
    <div className="w-1/2">
      <AgCharts options={options} />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<ChartExample />);
