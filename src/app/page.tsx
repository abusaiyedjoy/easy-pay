import AppStoreBadge from "@/components/ui/AppStore";
import { Button } from "@/components/ui/button";
import Navbar from "@/shared/Navbar";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

// Reusable Logo Component
const Logo = () => (
  <div className="flex justify-center items-center">
    <Image src={"/logo.png"} width={41} height={53} alt="logo" />
    <div className="text-2xl font-bold text-gray-900">Easy Pay</div>
  </div>
);

// Reusable Stats Card Component
const StatsCard = ({
  label,
  value,
  date,
  change,
}: {
  label: string;
  value: string;
  date: string;
  change: string;
}) => (
  <div className="bg-white rounded-2xl shadow-lg p-4 w-[200px] space-y-1">
    <div className="text-sm text-gray-600">{label}</div>
    <div className="text-xl font-bold text-blue-600">{value}</div>
    <div className="flex items-center justify-between text-sm">
      <span className="text-gray-500">{date}</span>
      <span className="text-green-600 flex items-center gap-1 font-medium">
        {change} <ArrowUpRight className="w-4 h-4" />
      </span>
    </div>
  </div>
);

// Reusable User Avatar Group Component
const UserAvatarGroup = ({ count }: { count: string }) => (
  <div className="bg-white rounded-xl shadow-md px-4 py-3 flex items-center gap-3">
    <div className="flex -space-x-2">
      <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
      <div className="w-8 h-8 rounded-full bg-linear-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
      <div className="w-8 h-8 rounded-full bg-linear-to-br from-amber-400 to-amber-600 border-2 border-white"></div>
    </div>
    <div>
      <div className="text-sm font-bold text-gray-900">{count}</div>
      <div className="text-xs text-gray-600">Active users</div>
    </div>
  </div>
);

// Main Banner Component
const EasyPayBanner = () => {
  return (
    <div className="min-h-screen bg-[linear-gradient(90deg,#E7EEFF_0%,#F3EFFF_50%,#EEDBFF_100%)]">
      {/* Header */}
      <header className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="hidden md:block">
            <Navbar />
          </div>
          <Button className="text-sm rounded-full sm:text-base bg-[#2e68fd] px-4 sm:px-6 py-3 sm:py-4">
            Contact Us
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 sm:px-6 pt-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              <span className="text-xs sm:text-sm font-semibold text-gray-600 tracking-wider uppercase">
                Easy Payment
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span>Pay </span>
                <span className="relative inline-block">
                  <span className="relative z-10"> fast and smarter</span>
                  <span className="absolute -bottom-1 md:-bottom-1 left-0 w-full h-2 sm:h-3 bg-[#2e68fd] z-0"></span>
                </span>
                <span> from anywhere</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Experience the future of payments: fast, secure, and tailored
                for the next generation's convenience and trust.
              </p>
            </div>

            {/* App Store Badges */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start">
              <AppStoreBadge store="apple" />
              <AppStoreBadge store="google" />
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative order-first lg:order-last">
            {/* Main Image Area */}
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
              {/* Person with phone - using linear placeholder */}
              <div className="absolute bottom-0 right-0 w-full h-full flex items-end justify-center">
                <Image
                  src={"/man.png"}
                  fill
                  style={{ objectFit: "cover" }}
                  alt="logo"
                />
              </div>

              {/* Stats Card - Floating */}
              <div className="absolute bottom-4 sm:bottom-8 lg:bottom-12 left-2 sm:left-4 lg:left-8 z-10 scale-75 sm:scale-90 lg:scale-100 origin-bottom-left">
                <StatsCard
                  label="Payment Received"
                  value="+35,890.00"
                  date="1th Jan, 2024"
                  change="3.09%"
                />
              </div>

              {/* User Count - Floating */}
              <div className="absolute top-16 sm:top-20 lg:top-64 right-2 sm:right-4 lg:right-14 z-10 scale-75 sm:scale-90 lg:scale-100 origin-top-right">
                <UserAvatarGroup count="120K+" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EasyPayBanner;
