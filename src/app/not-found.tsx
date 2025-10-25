"use client";

import {
  Home,
  ArrowLeft
} from "lucide-react";
import { useRouter } from "next/navigation";

const NotFoundPage: React.FC = () => {
  const router = useRouter();


  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#334CEC]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 py-12 max-w-6xl relative z-10">
        <div
          className="text-center"
        >
          {/* 404 Number with Animation */}
              
              <h1 className="text-[150px] sm:text-[200px] lg:text-[250px] font-black leading-none relative">
                <span className="bg-linear-to-r from-[#334CEC] via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  404
                </span>
              </h1>

          {/* Title and Description */}
          <div
            className="mb-8"
          >

            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-1 w-20 bg-linear-to-r from-transparent to-[#334CEC] rounded-full"></div>
              <div className="h-1 w-8 bg-[#334CEC] rounded-full"></div>
              <div className="h-1 w-20 bg-linear-to-l from-transparent to-[#334CEC] rounded-full"></div>
            </div>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Oops! Looks like you've ventured into uncharted territory.{" "}
              <span className="text-[#334CEC] font-semibold">Don't worry</span>, even the best explorers get lost sometimes!
            </p>
          </div>

          {/* Action Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button
              onClick={() => router.back()}
              className="px-8 py-4 rounded-xl bg-linear-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-gray-500/50 transition-all"
             
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>

            <button
              onClick={() => router.push("/")}
              className="px-8 py-4 rounded-xl bg-linear-to-r from-[#334CEC] to-purple-600 text-white font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-[#334CEC]/50 transition-all"
              
            >
              <Home className="w-5 h-5" />
              Go Home
            </button>
          </div>

          {/* Error Code */}
          <div
            className="mt-12"
          >
            <p className="text-sm text-gray-500 dark:text-gray-500 font-mono">
              ERROR_CODE: PAGE_NOT_FOUND_404
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;