"use client";

import React, { useState } from "react";
import Link from "next/link";
import HandShake from "../components/icons/hand-shake";
import Building01 from "../components/icons/building-01";
import Navbar from "../components/navbar/navbar";
import { useRouter } from "next/navigation";

export default function JoinAsPartnerPage() {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const router = useRouter();

  const handleContinue = () => {
    if (selectedOption) {
      router.push("/partner-onboarding");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navbar />
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 py-12">
        {/* Back Button & Continue Button Row */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 5L7.5 10L12.5 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back
          </Link>

          <button
            onClick={handleContinue}
            disabled={!selectedOption}
            className={`flex items-center gap-2 px-8 py-2.5 rounded-md font-medium transition-all ${
              selectedOption
                ? "bg-primary text-white hover:bg-blue-700 cursor-pointer"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Continue →
          </button>
        </div>

        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4 bg-blue-50 rounded-lg p-2 w-fit mx-auto">
            <HandShake />
            <span className="text-blue-600 text-sm font-medium">
              Partner Registration
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Join Our Partner Network
          </h1>
          <p className="text-gray-600 text-lg">
            Connect top tech talent with leading companies and earn competitive
            commissions
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
          {/* Organization Affiliation Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <Building01 />
              </div>
              <div className="flex flex-col items-start">
                <h2 className="text-xl font-bold text-gray-900">
                  Organization Affiliation
                </h2>
                <p className="text-gray-600">
                  Do you represent an organization or are you registering as an
                  individual recruiter?
                </p>
              </div>
            </div>
          </div>

          {/* Options */}
          <div className="space-y-4">
            {/* Organization Representative */}
            <label
              className={`block border rounded-lg p-6 cursor-pointer transition-all ${
                selectedOption === "organization"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-start gap-4">
                <input
                  type="radio"
                  name="affiliation"
                  value="organization"
                  checked={selectedOption === "organization"}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="mt-1 w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Organization Representative
                  </h3>
                  <p className="text-gray-600">
                    I represent a recruitment agency, staffing firm, or other
                    organization
                  </p>
                </div>
              </div>
            </label>

            {/* Individual Recruiter */}
            <label
              className={`block border rounded-lg p-6 cursor-pointer transition-all ${
                selectedOption === "individual"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-start gap-4">
                <input
                  type="radio"
                  name="affiliation"
                  value="individual"
                  checked={selectedOption === "individual"}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="mt-1 w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Individual Recruiter
                  </h3>
                  <p className="text-gray-600">
                    I'm registering as an independent recruiter working on my
                    own
                  </p>
                </div>
              </div>
            </label>

            {/* Community Leader/Manager */}
            <label
              className={`block border rounded-lg p-6 cursor-pointer transition-all ${
                selectedOption === "community"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-start gap-4">
                <input
                  type="radio"
                  name="affiliation"
                  value="community"
                  checked={selectedOption === "community"}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="mt-1 w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Community Leader/Manager
                  </h3>
                  <p className="text-gray-600">
                    I manage a community and supervise network of talents
                  </p>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
