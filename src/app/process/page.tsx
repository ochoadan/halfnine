import BackgroundwImage from "@/components/layout/background-image";

import Link from "next/link";
import {
  Discover,
  Define,
  Develop,
  Deliver,
} from "@/components/pages/process/01";
import LifeCycle from "@/components/pages/process/lifecycle";
import Faq from "@/components/pages/process/faq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "The Halfnine Approach: Leveraging Technology for Problem-Solution Lifecycle",
  description:
    "Learn how we utilize technology to solve problems effectively. Discover our comprehensive Development Lifecycle.",
  alternates: {
    canonical: "https://www.halfnine.com/process",
  },
};

const Page = () => {
  return (
    <>
      <BackgroundwImage
        heading="The Halfnine Development Lifecycle"
        description="Here we explain how we leverage technology from problem to solution"
      />
      <div className="overflow-hidden bg-white py-8 sm:py-12">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <LifeCycle />
        </div>
      </div>
      <div className="overflow-hidden bg-gray-100 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <Discover />
        </div>
      </div>
      <div className="overflow-hidden bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8 [counter-reset:reversed]">
          <div className="sr-only" />
          <Define />
        </div>
      </div>
      <div className="overflow-hidden bg-gray-100 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <Develop />
        </div>
      </div>
      <div className="overflow-hidden bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8 [counter-reset:reversed]">
          <div className="sr-only" />
          <Deliver />
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <Faq />
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-16 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Prepared to Start Our Journey?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Join us on a journey to realize your software vision. We’ll guide
              you from discovery to delivery, ensuring a smooth and efficient
              process.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Lets Talk!
              </Link>
            </div>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stopColor="#75B5D6" />
                  <stop offset={1} stopColor="#3538E9" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
