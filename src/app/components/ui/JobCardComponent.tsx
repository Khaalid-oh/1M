import { useState } from "react";
import {
  Star,
  MapPin,
  Clock,
  Eye,
  Share2,
  Edit,
  Trash2,
  Flag,
  ExternalLink,
  Building2,
  Users,
  Pin,
} from "lucide-react";
import Button from "../../components/buttons/button";
import Image from "next/image";

interface JobCardProps {
  type: "circle" | "external";
  job: {
    id: string;
    title: string;
    company: string;
    companyLogo?: string;
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
  };
  onEdit?: () => void;
  onDelete?: () => void;
  onReport?: () => void;
  onApply?: () => void;
}

const JobCardComponent = ({
  type,
  job,
  onEdit,
  onDelete,
  onReport,
  onApply,
}: JobCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatSalary = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div
      className={`bg-white text-sm rounded-lg border border-gray-200 shadow-sm p-6 transition-all duration-200 ${
        isExpanded ? "cursor-default" : "cursor-pointer hover:shadow-md"
      }`}
      onClick={() => !isExpanded && setIsExpanded(true)}
    >
      <div className="flex justify-between items-start">
        <div className=" w-full flex gap-4">
          <div className="w-12 h-12 rounded-lg border border-gray-200 bg-gray-50 flex items-center justify-center overflow-hidden flex-shrink-0">
            {job.companyLogo ? (
              <Image
                src={job.companyLogo}
                alt={`${job.company} logo`}
                width={48}
                height={48}
                className="object-contain"
              />
            ) : (
              <Building2 className="w-6 h-6 text-gray-400" />
            )}
          </div>
          <div className="w-full flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-normal">{job.title}</h3>
              {/* {job.isFeatured && (
                <span className="flex items-center justify-center bg-green-50 text-green-600 text-xs px-2 py-1 rounded-sm">
                  Featured
                  <Star className="w-3 h-3 ml-1" />
                </span>
              )} */}
            </div>
            <p className="text-gray-600 mb-4">{job.company}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* <div className="flex items-center text-gray-500 text-sm">
            <Eye className="w-4 h-4 mr-1" />
            {job.views} views
          </div> */}
          {/* {type === "external" && (
            <div className="flex gap-2">
              <button
                title="Edit Job"
                onClick={onEdit}
                className="text-gray-500 hover:text-gray-700"
              >
                <Edit className="w-4 h-4" />
              </button>
              <button
                title="Delete Job"
                onClick={onDelete}
                className="text-gray-500 hover:text-red-600"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          )} */}
        </div>
      </div>

      <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
        <div className="flex items-center pr-2 border-r">
          <Users className="w-[14px] h-[14px] mr-1" />
          {job.views} views
        </div>
        <div className="flex items-center pr-2 border-r">
          <MapPin className="w-[14px] h-[14px] mr-1" />
          {job.location}
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <Clock className="w-[14px] h-[14px] mr-1" />
          {job.datePosted}
        </div>
      </div>

      {isExpanded && (
        <div className="">
          <p className="text-gray-500 mb-4">{job.details}</p>

          <div className="w-full items-center justify-between flex flex-wrap gap-2 mb-4 text-sm">
            <span className="text-gray-500 py-1 rounded-full ">
              Salary Range: {formatSalary(job.salaryRange.min)} -{" "}
              {formatSalary(job.salaryRange.max)}
            </span>
            <div className="flex gap-2">
              {job.contract && (
                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-md text-sm">
                  {job.contract}
                </span>
              )}
              <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-md text-sm">
                {job.jobType}
              </span>
              <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-md text-sm">
                {job.level}
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <div className="flex gap-2">
              <Button
                className="bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-700"
                variant="primary"
                onClick={onApply}
              >
                Block Job
              </Button>
              <Button
                className="border-0 text-gray-600 hover:bg-white hover:text-gray-700"
                variant="secondary"
                icon={Share2}
              >
                Share
              </Button>
            </div>
            <button
              className="text-gray-500 text-xs hover:text-gray-700"
              onClick={() => setIsExpanded(false)}
            >
              Show Less
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobCardComponent;
