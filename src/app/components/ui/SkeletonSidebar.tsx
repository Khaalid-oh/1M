import Image from "next/image";
import Link from "next/link";
import React from "react";

const SkeletonSidebar = () => {
  return (
    <div className="flex flex-col text-gray-700 h-screen border-r bg-white">
      <div className="py-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Circle Logo"
            className="rounded-full"
            width={118}
            height={46}
          />
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-6">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-3 py-2 text-sm rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gray-200 rounded animate-pulse" />
              <div className="w-20 h-4 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="w-8 h-6 bg-gray-200 rounded-full animate-pulse" />
          </div>
        ))}

        <div className="pt-4 mt-4">
          <div className="w-16 h-4 bg-gray-200 rounded mb-2 animate-pulse" />
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-5 h-5 bg-gray-200 rounded animate-pulse" />
            <div className="w-20 h-4 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      </nav>

      <div className="px-2 py-4 m-4 border-t">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
          <div className="flex-1">
            <div className="w-24 h-4 bg-gray-200 rounded mb-1 animate-pulse" />
            <div className="w-32 h-3 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonSidebar;
