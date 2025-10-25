import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F7EEFF_50%,#FFFFFF_100%)] border-t border-gray-200 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-20">
        
        {/* Left Section */}
        <div className="flex-1 max-w-sm">
          <div className="flex items-center gap-2 mb-4">
            <Image src={"/logo.png"} alt="Easy Pay Logo" width={30} height={30} />
            <span className="text-xl font-semibold text-gray-800">Easy Pay</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Easy Pay offers secure, seamless, and fee-free payments for effortless
            global transactions.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-20">
          <div>
            <h3 className="text-gray-800 font-semibold mb-3">Short links</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-gray-700">Features</a></li>
              <li><a href="#" className="hover:text-gray-700">How it works</a></li>
              <li><a href="#" className="hover:text-gray-700">Security</a></li>
              <li><a href="#" className="hover:text-gray-700">Testimonial</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-800 font-semibold mb-3">Other pages</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-gray-700">Privacy policy</a></li>
              <li><a href="#" className="hover:text-gray-700">Terms &amp; conditions</a></li>
              <li><a href="#" className="hover:text-gray-700">404</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-200 mt-10 pt-4 text-center text-gray-400 text-sm">
        2024 ©Easy Pay. All rights reserved. Fintech Landing Page by{" "}
        <span className="text-gray-500 font-medium">MUHIB</span>
      </div>
    </footer>
  );
};

export default Footer;
