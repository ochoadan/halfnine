import BackgroundwImage from "@/components/layout/background-image";
import CTA from "@/components/pages/pricing/cta";
import First from "@/components/pages/pricing/first";
import Second from "@/components/pages/pricing/second";
import Third from "@/components/pages/pricing/third";
import Fourth from "@/components/pages/pricing/fourth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halfnine - Pricing: How much does it cost to develop an app?",
  description:
    "Explore app development costs with Halfnine. Understand pricing based on your needs. Maximize your app’s potential with us.",
  alternates: {
    canonical: "https://www.halfnine.com/pricing",
  },
};

const Page = () => {
  return (
    <>
      <BackgroundwImage
        heading="Pricing"
        // heading="What's the app development cost?"
        description="Find the Pricing for custom software development"
      />
      <div className="overflow-hidden bg-white py-16 sm:py-28">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <First />
        </div>
      </div>
      <div className="overflow-hidden bg-gray-100 py-16 sm:py-28">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <Second />
        </div>
      </div>
      <div className="overflow-hidden bg-white py-16 sm:py-28">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <Third />
        </div>
      </div>
      <div className="overflow-hidden bg-gray-100 py-16 sm:py-28">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <Fourth />
        </div>
      </div>
      <div className="overflow-hidden bg-white py-16 sm:py-28">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <CTA />
        </div>
      </div>
    </>
  );
};

export default Page;
