import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar.jsx';
import Greeting from './Components/Greeting.jsx';
import ClientInfo from './Components/ClientInfo.jsx';
import Recent from './Components/Recent.jsx';
import { Pie } from './Components/Pie.jsx';
import HorizontalBarChart from './Components/LeadByStage.jsx';
import CampaignStatus from './Components/Campaing.jsx';
import WonDeals from './Components/WonDeals.jsx';
import DashboardButtons from './Components/Dashboard.jsx';
import FunnelChart from './Components/Inverted.jsx';
import InvertedChart from './Components/NewInverted.jsx';
import FunnelBarGraph from './Components/Inverted.jsx';
import Example from './Components/Example.jsx';


function App() {
  return (
    <>
    <Header/>
    <div className='flex'>
    <Sidebar/>
    <div className='w-full'>
    <Greeting/>
    <ClientInfo/>
    <CampaignStatus/>
    <DashboardButtons/>
    <div className='flex'>
    <Recent/>
    <Pie/>
    </div>
    <div className='flex w-full'>
      <div className='w-1/2 flex-col'>
    <FunnelBarGraph/>
    <div className="flex justify-center align-middle w-full">
    <InvertedChart/>
    </div>
    <Example/>
    </div>
      <div className='w-1/2'>
    <HorizontalBarChart/>
    <WonDeals/>
    </div>
    </div>
    </div>
    </div>
    <div className="fixed left-4 bottom-5  w-[100px]">
        <img src={require("./Assets/bot.png")} />
      </div>
    </>
  );
}

export default App;
