"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and stress-free. Say goodbye to confusion and hello to straightforward payments.",
      name: "Ethan Williams",
      role: "Digital Marketing Specialist",
      avatar: "EW"
    },
    {
      id: 2,
      rating: 5,
      text: "Discover a payment app focused on transparency. Enjoy a seamless experience with no hidden fees, providing clarity at every transaction. It's designed to put you in control of your payments.",
      name: "Daniel Thompson",
      role: "Product Designer",
      avatar: "DT"
    },
    {
      id: 3,
      rating: 5,
      text: "An outstanding payment solution that prioritizes user experience. The interface is intuitive and the transaction process is incredibly smooth. Highly recommended for anyone looking for a reliable payment app.",
      name: "Sarah Mitchell",
      role: "Business Analyst",
      avatar: "SM"
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 2; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <p className="text-purple-600 font-semibold text-sm uppercase tracking-wide mb-3">
                TESTIMONIAL
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                We've build trust with reviews from real users
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Boost your credibility by featuring genuine testimonials from real users, showcasing their positive experiences and satisfaction with Monks Pay services.
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-3">
              <Button
                onClick={handlePrevious}
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-gray-900 hover:bg-white"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                onClick={handleNext}
                size="icon"
                className="w-12 h-12 rounded-full bg-gray-900 hover:bg-gray-800 text-white"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right Content - Testimonials */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getVisibleTestimonials().map((testimonial) => (
                <Card key={testimonial.id} className="border-0 shadow-md bg-white">
                  <CardContent className="p-8">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                      {testimonial.text}
                    </p>

                    {/* User Info */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}