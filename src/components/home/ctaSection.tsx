import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function CTABannerSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* CTA Banner */}
      <div className="relative rounded-3xl overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="relative h-[400px] md:h-[450px]">
          <Image
            src="/ctaImage.png"
            alt="Payment terminal and coffee"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          {/* <div className="absolute inset-0 bg-black/60"></div> */}
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl leading-tight">
            Ready to experience seamless<br />
            secure payments globally
          </h2>
          
          <p className="text-white/90 text-sm md:text-base max-w-3xl mb-8 leading-relaxed">
            Ready for hassle-free, secure payments anywhere in the world? Start using Monks<br />
            Pay today It's fast, free, and focused on keeping your transactions secure!
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full font-semibold text-base">
              Download the App
            </Button>
            <Button className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-6 rounded-full font-semibold text-base">
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}