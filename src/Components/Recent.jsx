import React from "react";

const Recent = () => {
  return (
    <>
      <div className="border  w-3/5 p-2 rounded-lg ml-2 bg-white">
        <div className="flex w-full justify-between items-center mb-4">
          <h2 className="font-bold m-6 text-2xl">Recent Projects</h2>
          <div className="flex justify-center items-center gap-2">
            <select name="" id="" className="w-32 border p-1 rounded">
              <option value="7">Last 7 days</option>
              <option value="7">Last month</option>
              <option value="7">Last 3 months</option>
              <option value="7">Last year</option>
            </select>
            <button className="p-1 px-4 bg-red-700 rounded-md w-max text-white">
              Add Project
            </button>
          </div>
        </div>
        <div>
          <table className="border border-gray-200 rounded w-full text-left">
            <tr className="bg-gray-100 font-md text-sm text-black border border-gray p-2">
              <td className="text-lg">Priority</td>
              <td className="text-lg">Name</td>
              <td className="text-lg">Client</td>
              <td className="text-lg">Due Date</td>
            </tr>
            <tr className="border-b-2">
              <td className="p-4">
                <div className="bg-pink-200 flex items-center justify-center rounded-lg">
                  <img
                    src={require("../Assets/red.png")}
                    alt=""
                    className="w-5 h-5"
                  />
                  <p>High</p>
                </div>
              </td>
              <td>
                <div className="flex items-center space-x-2">
                  <img
                    src={require("../Assets/Icons/weather.png")}
                    alt=""
                    className="h-5 w-5"
                  />
                  <span>Weather</span>
                </div>
              </td>
              <td>
                <div className="flex items-center space-x-2">
                  <img
                    src={require("../Assets/Icons/facebook.png")}
                    alt=""
                    className="h-5 w-5"
                  />
                  <span>Facebook</span>
                </div>
              </td>
              <td>1 Dec 2025</td>
            </tr>
            <tr className="border-b-2">
              <td className="p-4">
                <div className="bg-yellow-200 flex items-center justify-center rounded-lg">
                  <img
                    src={require("../Assets/yellow.png")}
                    alt=""
                    className="w-5 h-5"
                  />
                  <p>Medium</p>
                </div>
              </td>
              <td>
                <div className="flex items-center space-x-2">
                  <img
                    src={require("../Assets/Icons/find-my.png")}
                    alt=""
                    className="h-5 w-5"
                  />
                  <span>Find My Phone</span>
                </div>
              </td>
              <td>
                <div className="flex items-center space-x-2">
                  <img
                    src={require("../Assets/Icons/google.png")}
                    alt=""
                    className="h-5 w-5"
                  />
                  <span>Google</span>
                </div>
              </td>
              <td>5 Feb 2025</td>
            </tr>
            <tr className="border-b-2">
              <td className="p-4">
                <div className="bg-pink-200 flex items-center justify-center rounded-lg">
                  <img
                    src={require("../Assets/red.png")}
                    alt=""
                    className="w-5 h-5"
                  />
                  <p>High</p>
                </div>
              </td>
              <td>
                <div className="flex items-center space-x-2">
                  <img
                    src={require("../Assets/Icons/clips.png")}
                    alt=""
                    className="h-5 w-5"
                  />
                  <span>Clips</span>
                </div>
              </td>
              <td>
                <div className="flex items-center space-x-2">
                  <img
                    src={require("../Assets/Icons/sbi.png")}
                    alt=""
                    className="h-5 w-5"
                  />
                  <span>SBI</span>
                </div>
              </td>
              <td>19 May 2025</td>
            </tr>
            <tr className="border-b-2">
              <td className="p-4">
                <div className="bg-green-200 flex items-center justify-center rounded-lg">
                  <img
                    src={require("../Assets/green.png")}
                    alt=""
                    className="w-5 h-5"
                  />
                  <p>Low</p>
                </div>
              </td>
              <td>
                <div className="flex items-center space-x-2">
                  <img
                    src={require("../Assets/Icons/app-store.png")}
                    alt=""
                    className="h-5 w-5"
                  />
                  <span>App-Store</span>
                </div>
              </td>
              <td>
                <div className="flex items-center space-x-2">
                  <img
                    src={require("../Assets/Icons/weather.png")}
                    alt=""
                    className="h-5 w-5"
                  />
                  <span>Weather</span>
                </div>
              </td>
              <td>1 Jan 2026</td>
            </tr>
            <tr className="border-b-2">
              <td className="p-4">
                <div className="bg-pink-200 flex items-center justify-center rounded-lg">
                  <img
                    src={require("../Assets/red.png")}
                    alt=""
                    className="w-5 h-5"
                  />
                  <p>High</p>
                </div>
              </td>
              <td>
                <div className="flex items-center space-x-2">
                  <img
                    src={require("../Assets/Icons/voice-memos.png")}
                    alt=""
                    className="h-5 w-5"
                  />
                  <span>Sosic</span>
                </div>
              </td>
              <td>
                <div className="flex items-center space-x-2">
                  <img
                    src={require("../Assets/Icons/photos.png")}
                    alt=""
                    className="h-5 w-5"
                  />
                  <span>Universal Devs</span>
                </div>
              </td>
              <td>10 Dec 2025</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Recent;
