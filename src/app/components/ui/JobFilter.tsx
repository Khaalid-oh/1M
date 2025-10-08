import { useState } from "react";

interface JobFilterProps {
  onFilterChange: (filters: JobFilters) => void;
}

interface JobFilters {
  datePosted?: string;
  jobType?: string[];
  industry?: string[];
  workLocation?: string[];
}

const JobFilter = ({ onFilterChange }: JobFilterProps) => {
  const [filters, setFilters] = useState<JobFilters>({
    datePosted: "most_recent",
    jobType: [],
    industry: [],
    workLocation: [],
  });

  const dateOptions = [
    { label: "Most Recent", value: "most_recent" },
    { label: "Past 24 hours", value: "24h" },
    { label: "Past week", value: "1w" },
    { label: "Past month", value: "1m" },
  ];

  const jobTypes = [
    { label: "Full-time", value: "full-time" },
    { label: "Part-time", value: "part-time" },
    { label: "Contract", value: "contract" },
    { label: "Intership", value: "internship" },
  ];

  const industries = [
    { label: "Aviation", value: "aviation" },
    { label: "Education", value: "education" },
    { label: "Ecommerce", value: "ecommerce" },
    { label: "Technology", value: "technology" },
  ];

  const workLocations = [
    { label: "Onsite", value: "on-site" },
    { label: "Hybrid", value: "hybrid" },
    { label: "Remote", value: "remote" },
  ];

  const handleFilterChange = (
    type: keyof JobFilters,
    value: string | string[]
  ) => {
    const newFilters = { ...filters, [type]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleCheckboxChange = (type: keyof JobFilters, value: string) => {
    const currentValues = (filters[type] as string[]) || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];

    handleFilterChange(type, newValues);
  };

  const clearAllFilters = () => {
    const clearedFilters = {
      datePosted: "most_recent",
      jobType: [],
      industry: [],
      workLocation: [],
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  return (
    <div className="w-[300px] max-w-xs text-sm bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Filter</h2>
        <button
          onClick={clearAllFilters}
          className="text-blue-600 text-sm hover:text-blue-700"
        >
          Clear all
        </button>
      </div>

      {/* Date Posted */}
      <div className="mb-6 border-b border-gray-300 pb-6">
        <h3 className="text-sm font-medium mb-2">Date Posted</h3>
        <select
          title="Date Posted"
          value={filters.datePosted}
          onChange={(e) => handleFilterChange("datePosted", e.target.value)}
          className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          {dateOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Job Type */}
      <div className="mb-6 border-b border-gray-300 pb-6">
        <h3 className="text-sm font-medium mb-2">Job Type</h3>
        <div className="space-y-2">
          {jobTypes.map((type) => (
            <label key={type.value} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.jobType?.includes(type.value)}
                onChange={() => handleCheckboxChange("jobType", type.value)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">{type.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Industry */}
      <div className="mb-6 border-b border-gray-300 pb-6">
        <h3 className="text-sm font-medium mb-2">Industry</h3>
        <div className="space-y-2">
          {industries.map((industry) => (
            <label key={industry.value} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.industry?.includes(industry.value)}
                onChange={() =>
                  handleCheckboxChange("industry", industry.value)
                }
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">
                {industry.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Work Location */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Onsite/Remote</h3>
        <div className="space-y-2">
          {workLocations.map((location) => (
            <label key={location.value} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.workLocation?.includes(location.value)}
                onChange={() =>
                  handleCheckboxChange("workLocation", location.value)
                }
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">
                {location.label}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobFilter;
