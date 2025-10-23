"use client";

import React, { useState, useCallback } from "react";
import Button from "../../components/buttons/button";
import { Plus, Search, Filter, ChevronDown } from "lucide-react";
import { mockDashboardData } from "../../mocks/dashboardData";
import { mockCandidates, Candidate } from "../../mocks/candidatesData";
import InviteCandidateModal from "../../components/ui/InviteCandidateModal";
import Image from "next/image";
import CandidatesIcon from "@/app/components/icons/candidates-icon";
import CoinsIcon from "@/app/components/icons/coins-icon";
import EliteIcon from "@/app/components/icons/elite-icon";
import FilterIcon from "@/app/components/icons/filter-icon";

interface CandidateFormData {
  fullName: string;
  email: string;
  selectedJob: string;
}

interface ToastState {
  show: boolean;
  message: string;
  type: "success" | "error" | "info";
}

// Mock data for the candidates table based on the screenshot
const mockCandidatesData = [
  {
    id: "1",
    name: "Rara Kay",
    role: "Product Designer",
    avatar: "/images/avatar-group.png",
    onboardingProgress: { completed: 5, total: 9 },
    employmentType: "Full Time",
    startDate: "22/02/2022",
    potentialEarnings: "$35.50",
  },
  {
    id: "2",
    name: "Kodak Sloth",
    role: "Software Engineer",
    avatar: "/images/avatar-group.png",
    onboardingProgress: { completed: 5, total: 9 },
    employmentType: "Part-Time",
    startDate: "22/02/2022",
    potentialEarnings: "$28.50",
  },
  {
    id: "3",
    name: "Kendrick Bing",
    role: "Data Scientist",
    avatar: "/images/avatar-group.png",
    onboardingProgress: { completed: 3, total: 9 },
    employmentType: "Full Time",
    startDate: "22/02/2022",
    potentialEarnings: "$35.00",
  },
  {
    id: "4",
    name: "Iyanu Alao",
    role: "Digital Marketer",
    avatar: "/images/avatar-group.png",
    onboardingProgress: { completed: 6, total: 9 },
    employmentType: "Part-Time",
    startDate: "22/02/2022",
    potentialEarnings: "$25.50",
  },
  {
    id: "5",
    name: "Tomiwa Olaniyi",
    role: "Web Developer",
    avatar: "/images/avatar-group.png",
    onboardingProgress: { completed: 4, total: 9 },
    employmentType: "Full Time",
    startDate: "22/02/2022",
    potentialEarnings: "$35.50",
  },
  {
    id: "6",
    name: "Ayoabami Lake",
    role: "Software Engineer",
    avatar: null, // Will show initials
    onboardingProgress: { completed: 6, total: 9 },
    employmentType: "Part-Time",
    startDate: "22/02/2022",
    potentialEarnings: "$200",
  },
];

const CandidatesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [candidates, setCandidates] = useState(mockCandidatesData);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [toast, setToast] = useState<ToastState>({
    show: false,
    message: "",
    type: "success",
  });

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    // Filter candidates based on search query
    const filteredCandidates = mockCandidatesData.filter(
      (candidate) =>
        candidate.name.toLowerCase().includes(query.toLowerCase()) ||
        candidate.role.toLowerCase().includes(query.toLowerCase())
    );
    setCandidates(filteredCandidates);
  }, []);

  const handleInviteCandidate = (candidateData: CandidateFormData) => {
    console.log("Inviting candidate:", candidateData);
    setIsInviteModalOpen(false);

    setToast({
      show: true,
      message: "Candidate invitation sent successfully!",
      type: "success",
    });
  };

  const closeToast = () => {
    setToast((prev) => ({ ...prev, show: false }));
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const getEmploymentTypeColor = (type: string) => {
    return type === "Full Time"
      ? "bg-green-100 text-green-800"
      : "bg-orange-100 text-orange-800";
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed top-4 right-4 z-50 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full ${
                toast.type === "success"
                  ? "bg-green-500"
                  : toast.type === "error"
                  ? "bg-red-500"
                  : "bg-blue-500"
              }`}
            />
            <span className="text-sm text-gray-700">{toast.message}</span>
            <button
              onClick={closeToast}
              className="ml-2 text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Invite Candidate Modal */}
      <InviteCandidateModal
        isOpen={isInviteModalOpen}
        onClose={() => setIsInviteModalOpen(false)}
        onShare={handleInviteCandidate}
      />

      {/* Header Section */}
      <div className="mb-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {mockDashboardData.profile.name}
            </h1>
            <p className="text-gray-600">
              Welcome to your circle, manage your circle details here.
            </p>
          </div>
          <Button
            variant="primary"
            size="md"
            icon={Plus}
            iconPosition="left"
            onClick={() => setIsInviteModalOpen(true)}
          >
            Invite a Talent
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Regular Candidates */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <CandidatesIcon isActive={true} />
            </div>
          </div>
          <h3 className="text-sm font-medium text-gray-600 mb-1">
            Regular Candidates
          </h3>
          <p className="text-2xl font-bold text-gray-900 mb-1">0</p>
          <p className="text-sm text-green-600">↑ 0% this month</p>
        </div>

        {/* Elite Candidates */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <EliteIcon />
            </div>
          </div>
          <h3 className="text-sm font-medium text-gray-600 mb-1">
            Elite Candidates
          </h3>
          <p className="text-2xl font-bold text-gray-900 mb-1">0</p>
          <p className="text-sm text-green-600">↑ 0% this month</p>
        </div>

        {/* Earned */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-pink-100 rounded-lg">
              <CoinsIcon />
            </div>
          </div>
          <h3 className="text-sm font-medium text-gray-600 mb-1">Earned</h3>
          <p className="text-2xl font-bold text-gray-900 mb-1">0</p>
          <p className="text-sm text-green-600">↑ $345.45 Potential Earnings</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            placeholder="Search"
          />
        </div>
        <Button
          variant="secondary"
          size="md"
          icon={FilterIcon}
          iconPosition="left"
          className="text-gray-600 text-md font-medium"
        >
          Filters
        </Button>
      </div>

      {/* Candidates Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            All Candidates
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-gray-700 bg-gray-50">
              <tr>
                <th className="py-3 px-6 font-medium">Talent name</th>
                <th className="py-3 px-6 font-medium">Onboarding Progress</th>
                <th className="py-3 px-6 font-medium">Employment Type</th>
                <th className="py-3 px-6 font-medium flex items-center gap-1">
                  Start Date
                  <ChevronDown className="w-4 h-4" />
                </th>
                <th className="py-3 px-6 font-medium">Potential Earnings</th>
                <th className="py-3 px-6 font-medium"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {candidates.map((candidate) => (
                <tr key={candidate.id} className="hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      {candidate.avatar ? (
                        <Image
                          src={candidate.avatar}
                          alt={candidate.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      ) : (
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-blue-600">
                            {getInitials(candidate.name)}
                          </span>
                        </div>
                      )}
                      <div>
                        <p className="font-medium text-gray-900">
                          {candidate.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {candidate.role}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{
                            width: `${
                              (candidate.onboardingProgress.completed /
                                candidate.onboardingProgress.total) *
                              100
                            }%`,
                          }}
                        />
                      </div>
                      <span className="text-sm text-gray-600">
                        {candidate.onboardingProgress.completed}/
                        {candidate.onboardingProgress.total}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getEmploymentTypeColor(
                        candidate.employmentType
                      )}`}
                    >
                      {candidate.employmentType}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-500">
                    {candidate.startDate}
                  </td>
                  <td className="py-4 px-6 font-medium text-gray-900">
                    {candidate.potentialEarnings}
                  </td>
                  <td className="py-4 px-6">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CandidatesPage;
