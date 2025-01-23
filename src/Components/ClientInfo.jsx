import React from "react";
import { Download, ChevronDown } from "lucide-react";

const ClientInfo = () => {
  const details = {
    name: "Syed Wajid Pasha",
    Department: "Development",
  };
  return (
    <div className="m-4">
      {/* Responsive container for client info */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        {/* Client Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 rounded-md lg:grid-cols-3 gap-4 border p-4 rounded bg-white w-full lg:w-auto">
          <div title={details.name}>
            <div className="text-[13px] font-normal text-gray-900 truncate">
              Client Name:{" "}
              <span className="text-gray-600 font-normal ">{details.name}</span>
            </div>
          </div>
          <div title={details.Department}>
            <div className="text-[13px] text-gray-900 truncate">
              Client Department:{" "}
              <span className="text-gray-600 font-normal">
                {details.Department}
              </span>
            </div>
          </div>
          <div className="text-center lg:text-center">
            <div className="text-[13px] text-gray-900">
              Client ID:{" "}
              <span className="text-gray-600 font-normal">CLNT_001</span>
            </div>
          </div>
        </div>

        {/* Filters and Actions */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto">
          {/* Date Filter */}
          <div className="flex items-center space-x-2 text-[13px] border rounded-lg px-2 py-2 bg-white font-normal w-full sm:w-auto">
            <input
              type="date"
              defaultValue="2025-02-08"
              className="w-full sm:w-auto"
            />
            <span>-</span>
            <input
              type="date"
              className="w-full sm:w-auto"
              defaultValue="2025-02-10"
            />
          </div>

          {/* Dropdowns */}
          <select className="text-[13px] bg-white text-gray-600 border rounded-lg px-4 py-2 w-full sm:w-auto">
            <option value="">Type</option>
            <option value="">Type 1</option>
          </select>
          <select className="text-[13px] bg-white text-gray-600 border rounded-lg px-4 py-2 w-full sm:w-auto">
            <option value="">Data Scope</option>
            <option value="scope 1">Scope 1</option>
          </select>

          {/* Export Button */}
          <button className="flex items-center justify-center text-[13px] bg-white space-x-2 text-gray-600 border font-semibold rounded-lg px-4 py-2 w-full sm:w-auto">
            <Download className="w-3 h-3" />
            <span>Export</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientInfo;
