/* Inverted.js */
import React, { useState, useEffect } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Inverted = () => {
  const [options, setOptions] = useState({
    animationEnabled: true,
    title: {
      text: "",
    },
    subtitles: [
      {
        text: "",
      },
    ],
    axisY: {
      gridThickness: 0, // Remove grid lines
      lineThickness: 0, // Remove the Y-axis line
      tickThickness: 0, // Remove tick marks
      labelFormatter: () => "", // Remove axis labels
    },
    axisX: {
      gridThickness: 0, // Remove grid lines
      lineThickness: 0, // Remove the X-axis line
      tickThickness: 0, // Remove tick marks
      labelFormatter: () => "", // Remove axis labels
    },
    data: [
      {
        type: "rangeBar",
        indexLabel: "{label}", // Display labels inside the bars
        indexLabelPlacement: "inside", // Position labels inside the bars
        indexLabelAlign: "center", // Center the labels inside the bars
        indexLabelFontColor: "white", // Set label text color to white
        indexLabelFontSize: 14, // Adjust label font size
        yValueFormatString: "", // Remove amounts from formatting
        toolTipContent: "", // Disable tooltips
        dataPoints: [
          { label: "Lost:400", y: [2200, 2600] },
          { label: "Win:650", y: [2050, 2700] },
          { label: "Conversation:1000", y: [1900, 2900] },
          { label: "Schedule Service:2250", y: [1800, 3050] },
          { label: "Follow Up:1600", y: [1650, 3250] },
          { label: "Inpipeline:1800", y: [1550, 3350] },
        ],
      },
    ],
  });

  useEffect(() => {
    // Example: Update options if state needs to be dynamically changed
    setOptions((prevOptions) => ({
      ...prevOptions,
      // Modify options if needed based on state changes
    }));
  }, []); // Add dependencies if options are dynamically updated

  return (
    <div className="w-1/2">
      <CanvasJSChart options={options} />
    </div>
  );
};

export default Inverted;
