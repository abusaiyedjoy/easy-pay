import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, CreditCard, DollarSign } from 'lucide-react';
import Image from 'next/image';

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Download,
      title: "Download Easy Pay",
      description: "Get the Easy Pay app today from the App store or Google Play hassle free.",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: CreditCard,
      title: "Link your bank or card",
      description: "Easily connect your account in seconds with advanced security for peace of mind.",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: DollarSign,
      title: "Start paying",
      description: "Easily split bills, send money to friends, and make smooth online payments safely.",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600"
    }
  ];

  return (
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <p className="text-purple-600 font-semibold text-xs uppercase tracking-wider mb-2">
              HOW IT WORKS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Make payments, transfers, and<br />
              more in 3 simple steps
            </h2>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full mt-6 md:mt-0 self-start md:self-auto">
            Get Started Now
          </Button>
        </div>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative">
          {/* Vertical line between steps - hidden on mobile */}
          <div className="hidden md:block absolute left-[33.33%] top-0 bottom-0 w-0.5 bg-yellow-400 h-24"></div>
          <div className="hidden md:block absolute left-[66.66%] top-0 bottom-0 w-0.5 bg-yellow-400 h-24"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-0 shadow-none bg-white">
                <CardContent className="p-6">
                  {/* Step Number */}
                  <div className="text-8xl font-bold text-gray-200 mb-4 leading-none">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-12 h-12 ${step.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                    <step.icon className={`w-6 h-6 ${step.iconColor}`} strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Yellow line separator - only show between items on mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden w-0.5 h-12 bg-yellow-400 mx-auto"></div>
              )}
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image
              src="/man-using-laptop-coffee.png"
              alt="Person working on laptop"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}