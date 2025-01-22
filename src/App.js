import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar.jsx';
import Greeting from './Components/Greeting.jsx';
import ClientInfo from './Components/ClientInfo.jsx';
import CampaignStatus from './Components/Campaing.jsx';
import DashboardButtons from './Components/Dashboard.jsx';
import Charts from './Charts.jsx';

function App() {
  return (
    <Router>
      <div className="bg-gray-50">
        <Header />
        <div className="flex">
          <Sidebar />
          <div className="w-full">
            <Greeting />
            <ClientInfo />
            <CampaignStatus />
            <DashboardButtons />

            {/* Routing logic */}
            <Routes>
              <Route path="/" element={<Charts />} /> {/* Display Charts for '/' */}
              <Route path="/dashboard" element={<div />} /> {/* Blank screen for '/dashboard' */}
              <Route path="*" element={<Navigate to="/" />} /> {/* Redirect any unknown routes to '/' */}
            </Routes>
          </div>
        </div>
        <div className="fixed left-4 bottom-5 w-[100px]">
          <img src={require("./Assets/bot.png")} alt="Bot" />
        </div>
      </div>
    </Router>
  );
}

export default App;
