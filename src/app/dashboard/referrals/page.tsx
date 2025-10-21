"use client";

import React, { useState } from "react";
import Button from "../../components/buttons/button";
import { Plus, Copy, Users, MousePointer, Coins, Gift } from "lucide-react";
import { mockDashboardData } from "../../mocks/dashboardData";
import Toast from "../../components/ui/Toast";
import Image from "next/image";
import CandidatesIcon from "@/app/components/icons/candidates-icon";
import ClickIcon from "@/app/components/icons/click-icon";
import CoinsIcon from "@/app/components/icons/coins-icon";

interface ReferralActivity {
  id: string;
  name: string;
  action: string;
  time: string;
  status: "pending" | "completed";
  amount?: string;
}

interface ToastState {
  show: boolean;
  message: string;
  type: "success" | "error" | "info";
}

const ReferralPage = () => {
  const [activeTab, setActiveTab] = useState("talent");
  const [referralLink] = useState("https://tech1m.ai/ref/Vmh54r46");
  const [toast, setToast] = useState<ToastState>({
    show: false,
    message: "",
    type: "success",
  });
  const referralCode = "TECH1M-CODE-123456";

  const referralActivities: ReferralActivity[] = [
    {
      id: "1",
      name: "John Doe",
      action: "Clicked",
      time: "2 minutes ago",
      status: "pending",
    },
    {
      id: "2",
      name: "Jane Smith",
      action: "Signed up",
      time: "37 minutes ago",
      status: "completed",
      amount: "$32.30",
    },
    {
      id: "3",
      name: "Erick Taiwo",
      action: "Joined Elite",
      time: "4 hours ago",
      status: "completed",
      amount: "$80.00",
    },
    {
      id: "4",
      name: "Erick Taiwo",
      action: "Joined Elite",
      time: "4 hours ago",
      status: "completed",
      amount: "$80.00",
    },
    {
      id: "5",
      name: "John Doe",
      action: "Clicked",
      time: "2 minutes ago",
      status: "pending",
    },
  ];

  const copyToClipboard = async () => {
    try {
      if (activeTab === "talent") {
        await navigator.clipboard.writeText(referralLink);
      } else if (activeTab === "company") {
        await navigator.clipboard.writeText(referralCode);
      }
      setToast({
        show: true,
        message:
          activeTab === "code"
            ? "Referral code copied to clipboard!"
            : "Referral link copied to clipboard!",
        type: "success",
      });
    } catch (err) {
      setToast({
        show: true,
        message: "Failed to copy link. Please try again.",
        type: "error",
      });
    }
  };

  const closeToast = () => {
    setToast((prev) => ({ ...prev, show: false }));
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Toast Notification */}
      {toast.show && (
        <Toast message={toast.message} type={toast.type} onClose={closeToast} />
      )}

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
          <Button variant="primary" size="md" icon={Plus} iconPosition="left">
            Invite to Tech1M
          </Button>
        </div>
      </div>

      {/* Affiliate Program Banner */}
      <div className="bg-gradient-to-r from-blue-500 via-blue-800 to-blue-900 rounded-lg py-12 p-8 mb-8 relative overflow-hidden border-4 border-blue-200">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-white mb-2">
            Earn Big with Our Affiliate Program
          </h2>
          <p className="text-blue-100 text-lg">
            Earn big with our affiliate program, share your unique link and earn
            up to $1,000 per referral!
          </p>
        </div>
        <Image
          src="/images/coins.png"
          alt="Coins"
          width={240}
          height={240}
          className="absolute right-0 bottom-0"
        />
      </div>

      {/* Referral Actions and Link Section */}
      <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div className="flex space-x-1">
            <button
              onClick={() => setActiveTab("talent")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "talent"
                  ? "bg-blue-600 text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Refer a Talent
            </button>
            <button
              onClick={() => setActiveTab("company")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "company"
                  ? "bg-blue-600 text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Refer a Company
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "code"
                  ? "bg-blue-600 text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Get Referral Code
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-3">
            <Gift className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-gray-600">
              {activeTab === "code" ? "Referral Code" : "Invite Link"}
            </span>
          </div>
          <div className="flex items-center gap-3">
            {activeTab === "code" ? (
              <span className="text-gray-600 font-mono">{referralCode}</span>
            ) : (
              <span className="text-gray-600 font-mono">{referralLink}</span>
            )}
            <button
              title="Copy referral link"
              onClick={copyToClipboard}
              className="p-2 hover:bg-gray-200 rounded-md transition-colors"
            >
              <Copy className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Referral Card */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <CandidatesIcon isActive={true} />
            </div>
          </div>
          <h3 className="text-sm font-medium text-gray-600 mb-1">
            Total Referral
          </h3>
          <p className="text-2xl font-bold text-gray-900 mb-1">0</p>
          <p className="text-sm text-green-600">↑ 0% this month</p>
        </div>

        {/* Clicked Card */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <ClickIcon />
            </div>
          </div>
          <h3 className="text-sm font-medium text-gray-600 mb-1">Clicked</h3>
          <p className="text-2xl font-bold text-gray-900 mb-1">0</p>
          <p className="text-sm text-green-600">↑ 0% this month</p>
        </div>

        {/* Earned Card */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-pink-100 rounded-lg">
              <CoinsIcon />
            </div>
          </div>
          <h3 className="text-sm font-medium text-gray-600 mb-1">Earned</h3>
          <p className="text-2xl font-bold text-gray-900 mb-1">0</p>
          <p className="text-sm text-green-600">↑ 0% this month</p>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 text-sm">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Recent Activities
          </h3>
        </div>
        <div className="divide-y divide-gray-200">
          {referralActivities.map((activity) => (
            <div
              key={activity.id}
              className="p-6 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-600">
                    {activity.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{activity.name}</p>
                  <p className="text-sm text-gray-500">
                    {activity.action} • {activity.time}
                  </p>
                </div>
              </div>
              <div className="text-right">
                {activity.status === "pending" ? (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    Pending
                  </span>
                ) : (
                  <span className="text-sm font-semibold text-green-600">
                    {activity.amount}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReferralPage;
