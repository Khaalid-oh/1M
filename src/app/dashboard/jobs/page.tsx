"use client";

import { useState, useCallback } from "react";
import Button from "../../components/buttons/button";
import JobToggleButton from "../../components/buttons/JobToggleButton";
import JobSearchBar from "../../components/buttons/jobSearchBar";
import JoblinkIcon from "../../components/icons/joblinkIcon";
import { Plus } from "lucide-react";
import JobCardComponent from "../../components/ui/JobCardComponent";
import { mockJobs } from "../../mocks/jobData";
import JobFilter from "../../components/ui/JobFilter";
import { useRouter } from "next/navigation";

interface Job {
  id: string;
  title: string;
  company: string;
  type: "circle" | "external";
  isFeatured: boolean;
  views: number;
  location: string;
  datePosted: string;
  details: string;
  salaryRange: {
    min: number;
    max: number;
  };
  contract?: "full-time" | "part-time" | "contract";
  jobType: "remote" | "hybrid" | "on-site";
  level: "entry" | "mid-level" | "senior-level";
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

interface JobFilters {
  datePosted?: string;
  jobType?: string[];
  industry?: string[];
  workLocation?: string[];
}

export default function JobsPage() {
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

  const handleViewToggle = (view: "circle" | "external") => {
    setCurrentView(view);
    // Fetch jobs based on view type
    fetchJobs(view, searchQuery);
  };

  const handleSearch = useCallback(
    (query: string) => {
      setSearchQuery(query);
      // Fetch jobs based on search query and current view
      fetchJobs(currentView, query);
    },
    [currentView]
  );

  const handleFilterChange = (newFilters: JobFilters) => {
    setFilters(newFilters);
    // Apply filters to jobs
    const filteredJobs = mockJobs.filter((job) => {
      // Date Posted filter
      if (newFilters.datePosted) {
        const jobDate = new Date(job.datePosted);
        const now = new Date();
        switch (newFilters.datePosted) {
          case "24h":
            if (now.getTime() - jobDate.getTime() > 24 * 60 * 60 * 1000)
              return false;
            break;
          case "1w":
            if (now.getTime() - jobDate.getTime() > 7 * 24 * 60 * 60 * 1000)
              return false;
            break;
          case "1m":
            if (now.getTime() - jobDate.getTime() > 30 * 24 * 60 * 60 * 1000)
              return false;
            break;
        }
      }

      // Job Type filter
      if (
        newFilters.jobType?.length &&
        !newFilters.jobType.includes(job.contract || "")
      ) {
        return false;
      }

      // Work Location filter
      if (
        newFilters.workLocation?.length &&
        !newFilters.workLocation.includes(job.jobType)
      ) {
        return false;
      }

      return true;
    });

    setJobs(filteredJobs);
  };

  const fetchJobs = async (view: "circle" | "external", query: string) => {
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Filter jobs based on view type and search query
      const filteredJobs = mockJobs.filter((job) => {
        const matchesType = job.type === view;
        const matchesQuery =
          query.toLowerCase() === "" ||
          job.title.toLowerCase().includes(query.toLowerCase()) ||
          job.company.toLowerCase().includes(query.toLowerCase());
        return matchesType && matchesQuery;
      });

      setJobs(filteredJobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const router = useRouter();

  return (
    <div className="flex gap-8 w-full h-screen p-8 overflow-y-auto">
      <div className="flex-1">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold mb-2">Job Board</h1>
            <p className="text-gray-600 font-light">
              Manage all job and job preferences
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="secondary"
              icon={JoblinkIcon}
              onClick={() => router.push("/job-feed")}
            >
              View My Job Feed
            </Button>
            <Button variant="primary" icon={Plus}>
              Post a Job
            </Button>
          </div>
        </div>

        <div className="mb-4">
          <JobToggleButton onToggle={handleViewToggle} />
        </div>

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
                    level: job.level as "entry" | "mid-level" | "senior-level",
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
  );
}
