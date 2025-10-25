import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export default function SecuritySection() {
  const securityFeatures = [
    {
      title: "Two-factor authentication",
      description: "Two-factor authentication ensures added protection by using verification steps.",
      dotColor: "bg-blue-500"
    },
    {
      title: "Fraud detection and alerts",
      description: "Fraud detection safeguards your money, sending instant alerts for any activity.",
      dotColor: "bg-red-500"
    },
    {
      title: "Transaction notifications",
      description: "Instant notifications for transaction keep you informed to manage your finances.",
      dotColor: "bg-emerald-500"
    },
    {
      title: "Biometric access",
      description: "Easily and securely log in with biometric features, and facial recognition.",
      dotColor: "bg-blue-500"
    },
    {
      title: "End-to-end encryption",
      description: "By encryption, protecting your data from unauthorized access.",
      dotColor: "bg-orange-500"
    },
    {
      title: "24/7 Protection support",
      description: "Our dedicated team is available around the clock to help you.",
      dotColor: "bg-purple-500"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12 gap-8">
        <div className="lg:max-w-md">
          <p className="text-purple-600 font-semibold text-sm uppercase tracking-wide mb-3">
            SECURITY
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            We protect your money at every step with Easy Pay
          </h2>
        </div>
        <div className="lg:max-w-md">
          <p className="text-gray-600 leading-relaxed">
            Easy Pay ensures your money is protected at every step with advanced encryption, real-time monitoring, and multi-factor authentication.
          </p>
        </div>
      </div>

      {/* Security Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {securityFeatures.map((feature, index) => (
          <Card key={index} className="border-0 bg-gray-50 shadow-none hover:shadow-md transition-shadow">
            <CardContent className="p-8">
              {/* Colored Dot */}
              <div className="mb-6">
                <div className={`w-3 h-3 ${feature.dotColor} rounded-full`}></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}