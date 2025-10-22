"use client";

import React, { useState } from "react";
import { X, ExternalLink } from "lucide-react";
import Button from "../buttons/button";
import Image from "next/image";
import CustomSelect from "./CustomSelect";
interface InviteCandidateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShare: (candidateData: CandidateFormData) => void;
}

interface CandidateFormData {
  fullName: string;
  email: string;
  selectedJob: string;
}

const InviteCandidateModal: React.FC<InviteCandidateModalProps> = ({
  isOpen,
  onClose,
  onShare,
}) => {
  const [formData, setFormData] = useState<CandidateFormData>({
    fullName: "John Doe",
    email: "johndoe@example.email",
    selectedJob: "Flutter Senior Frontend Developer",
  });

  if (!isOpen) return null;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleShare = () => {
    onShare(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-x-hidden">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-gray-900">
              Invite a Candidate
            </h2>{" "}
            <p className="text-gray-600 text-sm">
              Add a talented candidate to your circle and start earning rewards.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            title="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Potential Earnings Section */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/avatars.png"
                  alt="Invite Candidate"
                  width={100}
                  height={100}
                  quality={100}
                />
                <div>
                  <h3 className="font-medium text-gray-900">
                    Potential Earnings
                  </h3>
                  <p className="text-sm text-gray-600">
                    Earn rewards when your candidate successfully onboards.
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-gray-900">$0.00</div>
                <div className="text-sm text-gray-600">Per Candidate</div>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Left Column - Form Fields */}
            <div className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  title="Full Name"
                  placeholder="Enter your full name"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormData((prev) => ({
                      ...prev,
                      fullName: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  title="Email Address"
                  placeholder="Enter your email address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Select Job */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Job
                </label>
                <CustomSelect
                  name="selectedJob"
                  value={formData.selectedJob}
                  options={[]}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setFormData((prev) => ({
                      ...prev,
                      selectedJob: e.target.value,
                    }))
                  }
                />
              </div>
            </div>

            {/* Right Column - Job Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Job Details
                </h3>

                {/* Job Information Grid */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Company Name
                    </label>
                    <p className="text-gray-900">Flutterwave</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Job Type
                    </label>
                    <p className="text-gray-900">Full-time</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Job Location
                    </label>
                    <p className="text-gray-900">Nigeria</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Job Link
                    </label>
                    <a
                      href="https://www.company1Mcircle.com/job"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      <span className="text-sm">
                        https://www.company1Mcircle.com/job
                      </span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Job Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Description
                  </label>
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-4 max-h-40 overflow-y-auto">
                    <p className="text-sm text-gray-700">
                      Flutterwave is a global brand protection & consumer
                      engagement solutions provider specialized in leveraging
                      cutting-edge technology to combat counterfeiting, enhance
                      product traceability, and create unique consumer
                      experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-4 p-6 border-t border-gray-200">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleShare}>
            Share
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InviteCandidateModal;
