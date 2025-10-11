"use client";
import React, { useCallback } from "react";
import Card from "../components/ui/Card";
import JobFilter from "../components/ui/JobFilter";
import JobCardComponent from "../components/ui/JobCardComponent";
import JobSearchBar from "../components/buttons/jobSearchBar";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { mockJobs } from "../mocks/jobData";

interface JobFilters {
  datePosted?: string;
  jobType?: string[];
  industry?: string[];
  workLocation?: string[];
}

export default function JobFeed() {
  const router = useRouter();
  const [currentView, setCurrentView] = useState<"circle" | "external">(
    "circle"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [jobs, setJobs] = useState(mockJobs);
  const [filters, setFilters] = useState<JobFilters>({
    datePosted: "most_recent",
    jobType: [],
    industry: [],
    workLocation: [],
  });

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);
  const handleViewToggle = (view: "circle" | "external") => {
    setCurrentView(view);
  };

  const handleFilterChange = (newFilters: JobFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <Card />
      <div className="flex gap-8 w-full h-screen p-8 mt-12 overflow-y-auto">
        <div className="flex-1">
          {/* Job listings */}
          <div className="flex relative items-center justify-between gap-4">
            <div className="w-full">
              <div className="w-3/4 flex items-center gap-4 mb-4">
                <JobSearchBar onSearch={handleSearch} />
              </div>
              <div className="w-3/4 space-y-4">
                {jobs.map((job) => (
                  <JobCardComponent
                    key={job.id}
                    type={job.type as "circle" | "external"}
                    job={{
                      ...job,
                      contract: job.contract as
                        | "full-time"
                        | "part-time"
                        | "contract"
                        | undefined,
                      jobType: job.jobType as "remote" | "hybrid" | "on-site",
                      level: job.level as
                        | "entry"
                        | "mid-level"
                        | "senior-level",
                    }}
                    onEdit={() => console.log("Edit job:", job.id)}
                    onDelete={() => console.log("Delete job:", job.id)}
                    onReport={() => console.log("Report job:", job.id)}
                    onApply={() => console.log("Apply to job:", job.id)}
                  />
                ))}
              </div>
            </div>
            <div className="absolute top-0 md:-right-3 xl:right-0">
              <JobFilter onFilterChange={handleFilterChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
