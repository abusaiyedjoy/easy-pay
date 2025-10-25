import { Card, CardContent } from "@/components/ui/card";
import { FileText, Shield, Wallet, CreditCard } from "lucide-react";
import "./features"

export default function FeaturesSection() {
  const features = [
    {
      icon: FileText,
      title: "Instant payments",
      description: "Send money to friends or family in real-time, for free.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Shield,
      title: "No hidden fees",
      description: "Clear and simple pricing. Always be aware of your costs.",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      icon: Wallet,
      title: "Digital wallet",
      description: "Store money securely and make fast transfers or purchases.",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600",
    },
    {
      icon: CreditCard,
      title: "Secure transactions",
      description: "End-to-end encryption for all transactions.",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
  ];

  const logos = [
    "Logoipsum Brand Standard",
    "logoipsum",
    "logo-ipsum",
    "logoipsum",
    "Logoipsum",
    "Logoipsum",
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-purple-600 font-semibold text-sm uppercase tracking-wide mb-3">
          FEATURES
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Why choose Easy Pay for
          <br />
          effortless payments?
        </h2>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {features.map((feature, index) => (
          <Card key={index} className="bg-[#f3f7ff] border-0 shadow-sm">
            <CardContent className="p-8">
              <div
                className={`w-16 h-16 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6`}
              >
                <feature.icon
                  className={`w-8 h-8 ${feature.iconColor}`}
                  strokeWidth={2}
                />
              </div>
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

      {/* Logo Carousel */}
      <div className="overflow-hidden relative w-full">
        <div className="flex items-center gap-8 animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-gray-400 whitespace-nowrap opacity-60"
            >
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
              </div>
              <span className="font-semibold text-lg">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
