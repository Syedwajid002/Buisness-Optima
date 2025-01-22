import React from "react";

import { ChartExample } from "./Components/AgCharts.jsx";
import Recent from "./Components/Recent.jsx";
import { Pie } from "./Components/Pie.jsx";
import HorizontalBarChart from "./Components/LeadByStage.jsx";
import WonDeals from "./Components/WonDeals.jsx";
const Charts = () => {
  return (
    <div>
      <div className="flex">
        <Recent />
        <Pie />
      </div>
      <div className="flex w-full">
        <div className="w-1/2 flex-col">
          <div className="flex justify-center align-middle w-full space-x-2">
            {/* <RangeBarChart/> */}
            <ChartExample />
          </div>
        </div>
        <div className="w-1/2 h-full">
          <HorizontalBarChart />
          <WonDeals />
        </div>
      </div>
    </div>
  );
};

export default Charts;
