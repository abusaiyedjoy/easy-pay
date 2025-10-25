import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

export default function PricingSection() {
  const plans = [
    {
      name: "Free Plan",
      description: "Free for personal payments.",
      price: "$0",
      period: "/month",
      features: [
        "Up to 100 transactions per month",
        "Basic proud protection",
        "Email support"
      ],
      buttonText: "Get Free Plan",
      buttonVariant: "outline",
      featured: false
    },
    {
      name: "Advanced",
      description: "Minimal fees for advanced transactions",
      price: "$19",
      period: "/month",
      features: [
        "Up to 1000 transactions per month",
        "Advanced proud protection",
        "Detailed transaction reports",
        "Priority email & chat support"
      ],
      buttonText: "Get Advanced Plan",
      buttonVariant: "primary",
      featured: true
    },
    {
      name: "Business",
      description: "Premium business transactions",
      price: "$29",
      period: "/month",
      features: [
        "Unlimited transactions per month",
        "Premium proud protection",
        "Detailed transaction reports",
        "Priority email & chat support"
      ],
      buttonText: "Get Business Plan",
      buttonVariant: "outline",
      featured: false
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-purple-600 font-semibold text-sm uppercase tracking-wide mb-3">
          PRICING
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Simple transparent pricing<br />
          no hidden fees
        </h2>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {plans.map((plan, index) => (
          <Card 
            key={index} 
            className={`${
              plan.featured 
                ? 'bg-gray-900 text-white border-0 shadow-xl' 
                : 'bg-white border border-gray-200'
            } overflow-hidden`}
          >
            <CardContent className="p-8">
              {/* Plan Header */}
              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.featured ? 'text-gray-300' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className={`text-5xl font-bold ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ml-1 ${plan.featured ? 'text-gray-300' : 'text-gray-600'}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className={`mt-0.5 ${plan.featured ? 'text-blue-400' : 'text-blue-600'}`}>
                      <Check className="w-5 h-5" strokeWidth={2.5} />
                    </div>
                    <span className={`text-sm ${plan.featured ? 'text-gray-200' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                className={`w-full rounded-full py-6 font-semibold ${
                  plan.featured 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-900'
                }`}
              >
                {plan.buttonText}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}