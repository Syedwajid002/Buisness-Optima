import React, { useState } from "react";
import Greeting from "../Components/Greeting";
import ClientInfo from "../Components/ClientInfo";
import CampaignStatus from "../Components/Campaing";
import DashboardButtons from "../Components/Dashboard";
import robo from "../Assets/bot.png";
const Dashboard = () => {
  const [activeDashboard, setActiveDashboard] = useState(5);

  const changeDashboard = (dashboardId) => {
    if (dashboardId !== activeDashboard) {
      setActiveDashboard(dashboardId);
    }
  };
  return (
    <div className="relative">
      <div className="flex flex-col">
        <Greeting />
        <ClientInfo />
        <CampaignStatus />
        <DashboardButtons
          activeDashboard={activeDashboard}
          changeDashboard={changeDashboard}
        />
      </div>
      <div className="fixed left-4 bottom-5  w-[100px]">
        <img src={robo} />
      </div>
    </div>
  );
};

export default Dashboard;
