import React from "react";
import Payout from "../words/PayoutData";

const data2 = Payout;

function Earnings({ data2: [] }) {
  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-700">
        <thead className="text-gray-700 bg-gray-50">
          <tr>
            <th className="py-3 px-2 font-medium">Date Resquested</th>
            <th className="py-3 px-3 font-medium">Payout Method</th>
            <th className="py-3 px-6 font-medium">Status</th>
            <th className="py-3 px-0 font-medium">Withdrawn</th>
            <th className="py-3 font-medium"></th>
          </tr>
        </thead>
        <tbody>
          {data2.map((payout, index) => (
            <tr key={index} className="bg-white border-b">
              <td className="flex flex-col py-6 px-2">
                {payout.dateRequested}
              </td>
              <td className="py-4 px-3 text-gray-500">{payout.payoutMethod}</td>
              <td className="py-4 px-6 text-blue-500">
                <span className=" bg-blue-50 p-1 px-2 rounded-2xl text-xs">
                  {payout.status}
                </span>
              </td>
              <td className="py-4 px-3 text-gray-500">{payout.withdrawn}</td>
              <td className="flex gap-16 py-4 justify-center text-xs">
                <a
                  href="#"
                  className="font-medium text-blue-600 flex items-center gap-1 hover:underline"
                >
                  Details
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
