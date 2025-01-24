import React from "react";
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <aside className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-6">
      <div className="flex flex-col space-y-8">
        <img
          src={require("../Assets/SideBar/hamburger menu.png")}
          className="w-6 h-6"
          alt=""
        />
        <Home className="w-6 h-6 text-red-600" />
        <button
          onClick={() =>
            (window.location.href =
              "https://businessoptima.app.n8n.cloud/webhook/bc6900c1-2e49-47fc-bc84-d5699bc11e60/chat")
          }
        >
          <img
            src={require("../Assets/SideBar/profile@2x.png")}
            className="w-6 h-6"
            alt=""
          />
        </button>
        <img
          src={require("../Assets/SideBar/Frame.png")}
          className="w-6 h-6"
          alt=""
        />
        <img
          src={require("../Assets/SideBar/Frame (1).png")}
          className="w-6 h-6"
          alt=""
        />
        <img
          src={require("../Assets/SideBar/health.png")}
          className="w-6 h-6"
          alt=""
        />
        <img
          src={require("../Assets/SideBar/pamp.png")}
          className="w-6 h-6"
          alt=""
        />
        <img
          src={require("../Assets/SideBar/hamburger menu.png")}
          className="w-6 h-6"
          alt=""
        />
        <img
          src={require("../Assets/SideBar/clipboard-tick@2x.png")}
          className="w-6 h-6"
          alt=""
        />
        <img
          src={require("../Assets/SideBar/flowchart.png")}
          className="w-6 h-6"
          alt=""
        />
        <img
          src={require("../Assets/SideBar/Project@2x.png")}
          className="w-6 h-6"
          alt=""
        />{" "}
        <img
          src={require("../Assets/SideBar/calendar.png")}
          className="w-6 h-6"
          alt=""
        />{" "}
        <img
          src={require("../Assets/SideBar/Tasks@2x.png")}
          className="w-6 h-6"
          alt=""
        />{" "}
        <img
          src={require("../Assets/SideBar/Growht@2x.png")}
          className="w-6 h-6"
          alt=""
        />{" "}
        <img
          src={require("../Assets/SideBar/book.png")}
          className="w-6 h-6"
          alt=""
        />{" "}
        <img
          src={require("../Assets/SideBar/Contract@2x.png")}
          className="w-6 h-6"
          alt=""
        />{" "}
        <img
          src={require("../Assets/SideBar/Prediction@2x.png")}
          className="w-6 h-6"
          alt=""
        />{" "}
        <img
          src={require("../Assets/SideBar/Invoice Receipt@2x.png")}
          className="w-6 h-6"
          alt=""
        />{" "}
        <img
          src={require("../Assets/SideBar/Payment@2x.png")}
          className="w-6 h-6"
          alt=""
        />{" "}
        <img
          src={require("../Assets/SideBar/grow.png")}
          className="w-6 h-6"
          alt=""
        />{" "}
        <img
          src={require("../Assets/SideBar/Vector@2x.png")}
          className="w-6 h-6"
          alt=""
        />
        <img
          src={require("../Assets/SideBar/setting-2@2x.png")}
          className="w-6 h-6"
          alt=""
        />{" "}
        <img
          src={require("../Assets/SideBar/message-question@2x.png")}
          className="w-6 h-6"
          alt=""
        />
      </div>
    </aside>
  );
};

export default Sidebar;
