"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Box,
  LineChart,
  Users,
  GraduationCap,
  Wallet,
  Settings,
  User,
  MoreHorizontal,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import DashboardIcon from "../icons/dashboard-icon";
import JobsIcon from "../icons/jobs-icon";
import CandidatesIcon from "../icons/candidates-icon";
import ReferralIcon from "../icons/referral-icon";

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
  count?: number;
  subItems?: NavItem[];
}

interface NavMetrics {
  jobs: number;
  performance: number;
  candidates: number;
  courses: number;
}

function Sidebar() {
  const pathname = usePathname();
  const [metrics, setMetrics] = useState<NavMetrics>({
    jobs: 0,
    performance: 0,
    candidates: 0,
    courses: 0,
  });

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Mock data
        setMetrics({
          jobs: Math.floor(Math.random() * 50),
          performance: Math.floor(Math.random() * 20),
          candidates: Math.floor(Math.random() * 100),
          courses: Math.floor(Math.random() * 10),
        });
      } catch (error) {
        console.error("Error fetching metrics:", error);
      }
    };

    fetchMetrics();
  }, []);

  const navigation: NavItem[] = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <DashboardIcon isActive={pathname === "/dashboard"} />,
    },
    {
      name: "Jobs",
      href: "/dashboard/jobs",
      icon: (
        <JobsIcon
          isActive={
            pathname === "/dashboard/jobs" ||
            pathname?.startsWith("/dashboard/jobs/")
          }
        />
      ),
      count: metrics.jobs,
    },
    {
      name: "Referrals",
      href: "/dashboard/referrals",
      icon: (
        <ReferralIcon
          isActive={
            pathname === "/dashboard/referrals" ||
            pathname?.startsWith("/dashboard/referrals/")
          }
        />
      ),
      count: metrics.performance,
    },
    {
      name: "Candidates",
      href: "/dashboard/candidates",
      icon: (
        <CandidatesIcon
          isActive={
            pathname === "/dashboard/candidates" ||
            pathname?.startsWith("/dashboard/candidates/")
          }
        />
      ),
      count: metrics.performance,
    },
  ];

  const bottomNavigation: NavItem[] = [
    {
      name: "Payments",
      href: "/dashboard/payments",
      icon: <Wallet className="w-6 h-6 text-gray-500" />,
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: <Settings className="w-5 h-5" />,
    },
  ];

  const user = {
    name: "James Brown",
    email: "Jamesbrown@hotmail.com",
    image: "/avatar.png",
  };

  return (
    <div className="flex flex-col text-gray-700 h-screen border-r border-gray-200 bg-white sticky top-0 left-0">
      <div className="py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/svg/1m-circle.svg"
            alt="Circle Logo"
            className="rounded-full"
            width={118}
            height={46}
          />
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-3">
        {navigation.map((item) => (
          <div key={item.name}>
            <Link
              href={item.href}
              className={`flex items-center justify-between px-3 py-2 text-sm rounded-lg group
                ${
                  pathname === item.href ||
                  pathname?.startsWith(item.href + "/")
                    ? "bg-blue-50 text-blue-600"
                    : "hover:bg-gray-50 hover:text-gray-600"
                }`}
            >
              <div className="flex items-center gap-3">
                {React.isValidElement(item.icon)
                  ? item.icon
                  : React.createElement(item?.icon as any, {
                      isActive:
                        pathname === item.href ||
                        pathname?.startsWith(item.href + "/"),
                    })}
                <span>{item.name}</span>
              </div>
              {typeof item.count === "number" && (
                <span
                  className={`${
                    pathname === item.href ||
                    pathname?.startsWith(item.href + "/")
                      ? "bg-blue-100 text-blue-500"
                      : "text-gray-500 bg-gray-100 group-hover:bg-gray-100 group-hover:text-gray-500"
                  } rounded-full px-2 py-1`}
                >
                  {item.count}
                </span>
              )}
            </Link>

            {item.subItems && item.subItems.length > 0 && (
              <div className="ml-7 mt-1 space-y-1">
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.name}
                    href={subItem.href}
                    className={`flex items-center justify-between px-3 py-2 text-sm rounded-lg group
                      ${
                        pathname === subItem.href
                          ? "text-blue-600"
                          : "hover:text-gray-600"
                      }`}
                  >
                    <span>{subItem.name}</span>
                    {typeof subItem.count === "number" && (
                      <span
                        className={`${
                          pathname === subItem.href
                            ? "bg-blue-100 text-blue-500"
                            : "text-gray-500 bg-gray-100 group-hover:bg-gray-100 group-hover:text-gray-500"
                        } rounded-full px-2 py-1`}
                      >
                        {subItem.count}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        <div className="pt-4 mt-4">
          <p className="px-3 mb-2 text-sm font-medium text-gray-500">
            Earnings
          </p>
          <Link
            key={bottomNavigation[0].name}
            href={bottomNavigation[0].href}
            className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg
              ${
                pathname === bottomNavigation[0].href
                  ? "bg-blue-50 text-blue-600"
                  : "hover:bg-gray-50 hover:text-gray-600"
              }`}
          >
            {bottomNavigation[0].icon}
            <span>{bottomNavigation[0].name}</span>
          </Link>
        </div>
      </nav>

      <div className="px-4">
        <Link
          key={bottomNavigation[1].name}
          href={bottomNavigation[1].href}
          className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg
            ${
              pathname === bottomNavigation[1].href
                ? "bg-blue-50 text-blue-600"
                : "hover:bg-gray-50 hover:text-gray-600"
            }`}
        >
          {bottomNavigation[1].icon}
          <span>{bottomNavigation[1].name}</span>
        </Link>
      </div>

      {/* User Profile */}
      <div className="px-2 py-4 m-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
            <User className="w-4 h-4 text-gray-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">{user.name}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
          </div>
          <button title="Settings" className="p-1 rounded hover:bg-gray-100">
            <MoreHorizontal className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
