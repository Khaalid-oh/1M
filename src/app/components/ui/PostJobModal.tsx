"use client";

import React, { useState } from "react";
import { X, Link, MapPin, Globe, Upload } from "lucide-react";

interface PostJobModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (jobData: JobFormData) => void;
}

interface JobFormData {
  companyName: string;
  jobTitle: string;
  jobLocation: string;
  website: string;
  jobType: string;
  contract: string;
  salaryMin: string;
  salaryMax: string;
  salaryFrequency: string;
  link: string;
  jobDescription: string;
  jobImage: File | null;
}

const PostJobModal: React.FC<PostJobModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<JobFormData>({
    companyName: "",
    jobTitle: "",
    jobLocation: "",
    website: "",
    jobType: "",
    contract: "",
    salaryMin: "",
    salaryMax: "",
    salaryFrequency: "",
    link: "",
    jobDescription: "",
    jobImage: null,
  });

  const [dragOver, setDragOver] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, jobImage: file }));
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, jobImage: file }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500">post+job</span>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-gray-900">
                Post a New Job
              </h2>
              <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-xs">✨</span>
              </div>
            </div>
          </div>
          <button
            title="Close"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <p className="text-gray-600 mb-6">
            Create a compelling job posting to attract top talent to your
            organization.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form Fields - Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    title="Company Name"
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Type
                  </label>
                  <select
                    title="Job Type"
                    name="jobType"
                    value={formData.jobType}
                    onChange={handleSelectChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="On-site">On-site</option>
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contract
                  </label>
                  <select
                    title="Contract"
                    name="contract"
                    value={formData.contract}
                    onChange={handleSelectChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Freelance">Freelance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Salary (Min)
                  </label>
                  <input
                    title="Salary (Min)"
                    type="text"
                    name="salaryMin"
                    value={formData.salaryMin}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Link
                  </label>
                  <div className="relative">
                    <input
                      title="Link"
                      type="url"
                      name="link"
                      value={formData.link}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <Link className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title
                  </label>
                  <input
                    title="Job Title"
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Location
                  </label>
                  <div className="relative">
                    <input
                      title="Job Location"
                      type="text"
                      name="jobLocation"
                      value={formData.jobLocation}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Website
                  </label>
                  <div className="relative">
                    <input
                      title="Website"
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <Globe className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Salary (Max)
                  </label>
                  <input
                    title="Salary (Max)"
                    type="text"
                    name="salaryMax"
                    value={formData.salaryMax}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Per Month (Salary Frequency)
                  </label>
                  <select
                    title="Salary Frequency"
                    name="salaryFrequency"
                    value={formData.salaryFrequency}
                    onChange={handleSelectChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="Per Month">Per Month</option>
                    <option value="Per Year">Per Year</option>
                    <option value="Per Hour">Per Hour</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Job Description and Image Upload */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Description
                </label>
                <div className="border border-gray-300 rounded-md">
                  {/* Rich Text Editor Toolbar */}
                  <div className="flex items-center gap-2 p-2 border-b border-gray-300 bg-gray-50">
                    <button
                      type="button"
                      className="p-1 hover:bg-gray-200 rounded text-sm font-bold"
                    >
                      B
                    </button>
                    <button
                      type="button"
                      className="p-1 hover:bg-gray-200 rounded text-sm underline"
                    >
                      U
                    </button>
                    <button
                      type="button"
                      className="p-1 hover:bg-gray-200 rounded text-sm italic"
                    >
                      I
                    </button>
                    <button
                      type="button"
                      className="p-1 hover:bg-gray-200 rounded text-sm line-through"
                    >
                      ----
                    </button>
                    <div className="w-px h-4 bg-gray-300 mx-1"></div>
                    <button
                      type="button"
                      className="p-1 hover:bg-gray-200 rounded"
                    >
                      •
                    </button>
                    <button
                      type="button"
                      className="p-1 hover:bg-gray-200 rounded"
                    >
                      1.
                    </button>
                    <div className="w-px h-4 bg-gray-300 mx-1"></div>
                    <button
                      type="button"
                      className="p-1 hover:bg-gray-200 rounded"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      className="p-1 hover:bg-gray-200 rounded"
                    >
                      →
                    </button>
                    <button
                      type="button"
                      className="p-1 hover:bg-gray-200 rounded"
                    >
                      →
                    </button>
                  </div>
                  <textarea
                    name="jobDescription"
                    value={formData.jobDescription}
                    onChange={handleInputChange}
                    rows={8}
                    className="w-full px-3 py-2 border-0 focus:outline-none resize-none"
                    placeholder="Enter job description..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Image
                </label>
                <div
                  className={`border-2 border-dashed rounded-md p-6 text-center transition-colors ${
                    dragOver ? "border-blue-500 bg-blue-50" : "border-gray-300"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-1">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    SVG, PNG, JPG or GIF (max. 800x400px)
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="job-image-upload"
                  />
                  <label htmlFor="job-image-upload" className="cursor-pointer">
                    <span className="sr-only">Upload job image</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostJobModal;
