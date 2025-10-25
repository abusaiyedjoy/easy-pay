import Banner from "@/components/home/banner";
import CTABannerSection from "@/components/home/ctaSection";
import FeaturesSection from "@/components/home/features";
import HowItWorksSection from "@/components/home/howItWork";
import PricingSection from "@/components/home/pricingSection";
import SecuritySection from "@/components/home/securitySection";
import TestimonialSection from "@/components/home/testimonial";

const Home = () => {
  return (
    <div>
      <Banner/>
      <FeaturesSection/>
      <HowItWorksSection/>
      <SecuritySection/>
      <PricingSection/>
      <TestimonialSection/>
      <CTABannerSection/>
    </div>
  );
};

export default Home;