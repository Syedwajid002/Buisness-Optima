import React from "react";

const Greeting = () => {
  return (
    <>
      <div className="w-full m-1 bg-red-900 h-40 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-semibold text-white px-12">
            Hello, Syed Wajid!
          </h2>
          <h4 className="text-lg text-white px-12 py-1">
            You have 5 active Companies
          </h4>
        </div>
        <div className="flex justify-between">
          <select
            name="Companies"
            id="Company"
            className="text-red-600 px-8 py-2 font-semibold rounded-md font-medium"
          >
            <option value="Companies">Companies</option>
          </select>
          <button className="bg-gray-100 bg-opacity-30 text-white font-medium px-8 py-2 rounded-lg shadow-lg mr-8 ml-2">
            All packages
          </button>
        </div>
      </div>
    </>
  );
};

export default Greeting;
