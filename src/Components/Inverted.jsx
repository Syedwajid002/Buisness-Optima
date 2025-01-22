import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const FunnelBarGraph = () => {
  const data = [
    { name: "Inpipeline", value: 1454 },
    { name: "Follow Up", value: 1200 },
    { name: "Schedule Service", value: 900 },
    { name: "Conversation", value: 600 },
    { name: "Win", value: 300 },
    { name: "Lost", value: 100 },
  ];

  const colors = [
    "#7D3C98",
    "#17A2B8",
    "#F39C12",
    "#28B463",
    "#82E0AA",
    "#E74C3C",
  ];

  return (
    <div style={{ width: "100%", height: "500px", textAlign: "center" }}>
      <h3>Projects By Stage</h3>
      <ResponsiveContainer width="50%" height="100%">
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" tick={{ fontSize: 12 }} />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fontSize: 14 }}
            tickLine={false}
          />
          <Tooltip />
          <Bar dataKey="value" barSize={40}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FunnelBarGraph;
