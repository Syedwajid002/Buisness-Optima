import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import data from "../data.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";
export const Pie = () => {
  return (
    <>
      <div className="w-2/5 border p-6 ml-1">
        <Doughnut
          data={{
            labels: data.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: data.map((data) => data.value),
                backgroundColor: ["red", "blue", "rgb(255,162,1)", "skyblue"],
                borderColor: ["red", "blue", "rgb(255,162,1)", "skyblue"],
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                display: true, // Ensure the legend is displayed
                position: "right", // Position the legend on the right
                labels: {
                  usePointStyle: true,
                  padding: 30, // Optional: Show points instead of rectangles
                  font: {
                    size: 12, // Optional: Customize font size
                  },
                },
              },
              title: {
                text: "Project By Stage",
                display: true,
              },
              layout: {
                padding: {
                  right: 50, // Add padding to the right for space between chart and legend
                },
              },
            },
            cutout: "70%",
          }}
        />
      </div>
    </>
  );
};
