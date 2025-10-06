"use client";

import React from "react";
import { CheckCircle, ChevronLeft } from "lucide-react";
import Link from "next/link";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen text-sm bg-bg-white p-8">
      <div className="mt-10 px-8 flex items-start mx-auto">
        <Link
          href="/onboarding"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-8"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back</span>
        </Link>

        <div className="bg-white mx-auto mt-32 shadow-sm p-12 px-16 border border-gray-200 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
          </div>

          <h1 className="text-2xl mb-4">Thank You</h1>

          <div className="max-w-lg mx-auto">
            <p className="text-gray-600 mb-8 font-light">
              Thank you for your response. Your application has been received,
              and we are excited about the possibility of collaborating with
              you. We will reach out to you using the contact details provided
              in your application by February 2024 regarding the status of your
              application.
            </p>

            <Link
              href="/dashboard"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              View 1M Circle
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
