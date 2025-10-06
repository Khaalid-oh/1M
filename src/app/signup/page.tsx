"use client";

import React, { useState } from "react";
import PlayIcon from "../components/icons/play-icon";
import Image from "next/image";
import Link from "next/link";
import ArrowLeft from "../components/icons/arrow-left";
import ArrowRight from "../components/icons/arrow-right";

export default function SignupPage() {
  const [showModal, setShowModal] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[45%] bg-white flex flex-col justify-center px-8 lg:px-16">
        <div className="w-[40%] absolute top-8 left-8 flex items-center  justify-between gap-4">
          <Image
            src="/svg/1m-circle.svg"
            alt="1M Circle"
            width={118}
            height={46}
          />
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Go back
          </Link>
        </div>

        <div className="max-w-md mx-auto w-full">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sign up</h1>
          <p className="text-gray-600 mb-8">
            Enter your details to get started with 1MCircle
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                required
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="johndoe@examplemail.com"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none cursor-pointer"
            >
              Register
            </button>
          </form>

          <p className="text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>

      <div className="w-[55%] h-[96vh] bg-[url('/images/section-right.png')] mr-4 rounded-2xl bg-cover bg-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-md opacity-10"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full opacity-15"></div>
          <div className="absolute bottom-40 left-20 w-40 h-40 bg-white rounded-full opacity-5"></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-white rounded-full opacity-10"></div>
        </div>

        {showModal && (
          <div className="pt-32 flex items-center justify-center p-12">
            <div className="bg-white rounded-xl p-8 max-w-xl w-full mx-4 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/1m.png"
                    alt="1M Circle"
                    width={48}
                    height={48}
                  />
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-xl"
                >
                  ×
                </button>
              </div>

              <div className="border-b border-gray-200">
                <h2 className="text-2xl text-center font-bold text-gray-900 mb-2">
                  Turn your network into revenue
                </h2>
                <p className="text-gray-600 mb-3 text-center">
                  Join Tech1m's referral program and earn commissions by
                  connecting top tech talent with leading companies.
                </p>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-4 mt-8">
                Why Choose Tech1m?
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Image
                      src="/svg/check.svg"
                      alt="Check Circle"
                      width={24}
                      height={24}
                    />
                  </div>
                  <span className="text-gray-700">
                    Earn commissions with transparent payment structure
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Image
                      src="/svg/check.svg"
                      alt="Check Circle"
                      width={24}
                      height={24}
                    />
                  </div>
                  <span className="text-gray-700">
                    Established reputation with Fortune 500 clients
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Image
                      src="/svg/check.svg"
                      alt="Check Circle"
                      width={24}
                      height={24}
                    />
                  </div>
                  <span className="text-gray-700">
                    Access to opportunities worldwide with our global reach
                  </span>
                </li>
              </ul>

              <div className="flex gap-4">
                <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                  <PlayIcon />
                  How it works
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="absolute bottom-12 left-8 right-8 text-center">
          <div className="bg-white/10 rounded-full border border-white px-4 py-2 inline-block mb-4">
            <span className="text-white text-sm font-medium">WHAT'S NEXT?</span>
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">
            Start Earning Today
          </h3>
          <p className="text-white text-opacity-90 mb-8 max-w-md mx-auto">
            Whether you're an individual or organization, we have the perfect
            program for you.
          </p>

          <div className="flex justify-center gap-8">
            <button
              aria-label="Previous"
              className="w-14 h-14 border border-white rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all hover:bg-white/10 cursor-pointer"
            >
              <ArrowLeft />
            </button>
            <button
              aria-label="Next"
              className="w-14 h-14 border border-white rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all hover:bg-white/10 cursor-pointer"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 w-full h-full"
          aria-label="Show modal"
        ></button>
      </div>
    </div>
  );
}
