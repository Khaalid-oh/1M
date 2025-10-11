"use client";
import Navbar from "./components/navbar/navbar";
import Link from "next/link";
import { UserIcon, Building2, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to 1MCircle
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your path and start your journey with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Link href="/signup">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-blue-500 group">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <UserIcon className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Individual
                </h3>
                <p className="text-gray-600 mb-6">
                  Join as an individual to explore job opportunities, earn
                  through referrals, and connect with top companies
                </p>
                <ul className="space-y-2 text-sm text-gray-700 mb-6 text-left w-full">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    Access exclusive job listings
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    Earn referral commissions
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    Track your applications
                  </li>
                </ul>
                <div className="mt-auto">
                  <span className="text-blue-600 font-semibold group-hover:underline">
                    Get Started →
                  </span>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/partner-onboarding">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-purple-500 group">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                  <Building2 className="w-10 h-10 text-purple-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Recruitment Organization
                </h3>
                <p className="text-gray-600 mb-6">
                  Partner with us to post jobs, find top talent, and leverage
                  our referral network for quality hires
                </p>
                <ul className="space-y-2 text-sm text-gray-700 mb-6 text-left w-full">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    Post unlimited job listings
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    Access quality candidates
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    Manage recruitment pipeline
                  </li>
                </ul>
                <div className="mt-auto">
                  <span className="text-purple-600 font-semibold group-hover:underline">
                    Become a Partner →
                  </span>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/join-as-a-partner">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-green-500 group">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                  <Users className="w-10 h-10 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Community Organization
                </h3>
                <p className="text-gray-600 mb-6">
                  Bring your community to our platform and help your members
                  discover tailored job opportunities
                </p>
                <ul className="space-y-2 text-sm text-gray-700 mb-6 text-left w-full">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Curated job boards for your community
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Earn revenue share
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Support your members' careers
                  </li>
                </ul>
                <div className="mt-auto">
                  <span className="text-green-600 font-semibold group-hover:underline">
                    Join as Partner →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Not sure which option is right for you?{" "}
            <a href="#" className="text-blue-600 hover:underline font-medium">
              Learn more about each role
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
