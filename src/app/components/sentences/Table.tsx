import React from "react";
import JobsData from "../words/JobsData";
import EyeIcon from "../words/EyeIcon";
import DeleteIcon from "../words/DeleteIcon";

const data = JobsData;

function Table({ data: [] }) {
  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-700">
        <thead className="text-gray-700 bg-gray-50">
          <tr>
            <th className="py-3 px-2 font-medium">Job Title</th>
            <th className="py-3 px-3 font-medium">Location</th>
            <th className="py-3 px-6 font-medium">Job Type</th>
            <th className="py-3 px-0 font-medium">Avg. Match Score</th>
            <th className="py-3 px-2 font-medium">Date</th>
            <th className="py-3 font-medium"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((job, index) => (
            <tr key={index} className="bg-white border-b">
              <td className="flex flex-col py-4 px-2 font-medium">
                {job.title}
                <span className="text-xs text-gray-500 font-normal w-24">
                  {job.level}
                </span>
              </td>
              <td className="py-4 px-3 text-gray-500">{job.location}</td>
              <td className="py-4 px-6 text-blue-500">
                <span className=" bg-blue-50 p-1 px-2 rounded-2xl text-xs">
                  {job.type}
                </span>
              </td>
              <td className="py-4 px-0 pl-12">{job.matchScore}%</td>
              <td className="py-4 px-2 text-gray-500">{job.date}</td>
              <td className="flex gap-16 py-4 justify-center text-xs">
                <a
                  href="#"
                  className="font-medium text-blue-600 flex items-center gap-1 hover:underline"
                >
                  View <EyeIcon />
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 flex items-center gap-1 hover:underline"
                >
                  Delete <DeleteIcon />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
