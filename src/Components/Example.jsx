import React, { useState } from "react";
import { FunnelChart } from "react-funnel-pipeline";
import "react-funnel-pipeline/dist/index.css";

const Example = () => {
  const [pipeline, setPipeline] = useState("Pipeline 1");
  const [timeframe, setTimeframe] = useState("Last 3 Months");

  const data = [
    { name: "Inpipeline", value: 1454, color: "#7D3C98" }, // Purple
    { name: "Follow Up", value: 1200, color: "#17A2B8" }, // Blue
    { name: "Schedule Service", value: 900, color: "#F39C12" }, // Orange
    { name: "Conversation", value: 600, color: "#28B463" }, // Green
    { name: "Win", value: 300, color: "#82E0AA" }, // Light Green
    { name: "Lost", value: 100, color: "#E74C3C" }, // Red
  ];

  const pipelines = ["Sales Pipeline", "Marketing Pipeline", "Pipeline 3"];
  const timeframes = ["Last 3 Months", "Last 6 Months", "Last Year"];

  return (
    <div className="w-full flex flex-col items-center mt-4 border-2">
      <h3 className="text-lg font-bold mb-4">Projects By Stage</h3>

      {/* Dropdowns */}
      <div className="flex mb-4 space-x-4">
        {/* Sales Pipeline Dropdown */}
        <div>
          <select
            className="border border-gray-300 rounded p-2"
            value={pipeline}
            onChange={(e) => setPipeline(e.target.value)}
          >
            {pipelines.map((p, index) => (
              <option key={index} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        {/* Timeframe Dropdown */}
        <div>
          <select
            className="border border-gray-300 rounded p-2"
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
          >
            {timeframes.map((t, index) => (
              <option key={index} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Funnel Chart */}
      <div className="w-1/2 mt-2">
        <FunnelChart
          data={data}
          labelKey="name"
          valueKey="value"
          colorKey="color"
        />
      </div>
    </div>
  );
};

export default Example;
