import React from "react";
import EarningsData from "../words/EarningsData";
import EyeIcon from "../words/EyeIcon";

const data = EarningsData;

function Earnings({ data: [] }) {
  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-700">
        <thead className="text-gray-700 bg-gray-50">
          <tr>
            <th className="py-3 px-2 font-medium">Candidates</th>
            <th className="py-3 px-3 font-medium">Company</th>
            <th className="py-3 px-6 font-medium">Job Type</th>
            <th className="py-3 px-0 font-medium pl-4">Date Hired</th>
            <th className="py-3 px-2 font-medium">Earnings</th>
            <th className="py-3 font-medium"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((earnings, index) => (
            <tr key={index} className="bg-white border-b">
              <td className="flex flex-col py-4 px-2 font-medium">
                {earnings.candidate}
                <span className="text-xs text-gray-500 font-normal w-24">
                  {earnings.level}
                </span>
              </td>
              <td className="py-4 px-3 text-gray-500">{earnings.company}</td>
              <td className="py-4 px-6 text-blue-500">
                <span className=" bg-blue-50 p-1 px-2 rounded-2xl text-xs">
                  {earnings.type}
                </span>
              </td>
              <td className="py-4 px-0 pl-4">{earnings.dateHired}</td>
              <td className="py-4 px-2 text-gray-500">{earnings.earnings}</td>
              <td className="flexpy-4 justify-center text-xs">
                <a
                  href="#"
                  className="font-medium text-blue-600 flex items-center gap-1 hover:underline"
                >
                  View <EyeIcon />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Earnings;
