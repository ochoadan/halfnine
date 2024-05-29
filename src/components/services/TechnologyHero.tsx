import Link from "next/link";
import React from "react";
import { FadeIn } from "@/components/Global/FadeIn";
import Image from "next/image";

interface TechnologyInfoProps {
  technology: string;
  imgSrc: string;
  message: string;
}

const TechnologyInfoHero: React.FC<TechnologyInfoProps> = ({
  technology,
  imgSrc,
}) => {
  return (
    <div className="bg-white py-12 md:py-24 md:pt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid items-center gap-x-16 gap-y-10 grid-cols-12 mx-auto">
          <div className="lg:pr-8 col-span-12 lg:col-span-6 xl:col-span-7">
            {/* <h1 className="text-base font-semibold leading-7 text-brand-600"> */}
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {`${technology} Development Company`}
            </h1>
            {/* <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {`Custom ${technology} Software Solutions`}
              </p> */}
            <p className="mt-4 text-lg leading-8 text-gray-600">
              {/* {`Our team of ${technology} developers can help you build custom software solutions that meet your unique business requirements.`} */}
              {/* {`Halfnine offers ${technology} development services to help you build scalable, secure, and high-performance applications.`} */}
              {/* {`Halfnine offers ${technology} development services and hire our ${technology} developers for your needs and projects.`} */}
              {`Custom ${technology} software develoment services from Halfnine. Hire our ${technology} developers for your needs and projects.`}
            </p>
            <div className="mt-5 flex items-center">
              <Link
                // href={`/contact${message ? `?message=${message}` : ""}`}
                href={`/contact`}
                className="rounded-md bg-brand-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
              >
                Talk to our team
              </Link>
              {/* <div className="text-yellow-500">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {`Clients rate our ${technology} services`}
                </p>
                <p className="pr-2 text-yellow-500 font-bold">
                  4.9/5 - Excellent
                </p>
              </div> */}
              {/* <Link
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                View on GitHub <span aria-hidden="true">→</span>
              </Link> */}
            </div>
          </div>
          <FadeIn className="mx-auto col-span-12 lg:col-span-6 xl:col-span-5">
            <Image
              src={`${imgSrc ? imgSrc : "/img/hero.svg"}`}
              alt={`Software developer working with ${technology}`}
              // className="object-contain w-[32rem]"
              // className="w-[20rem] max-w-none p-5 rounded-xl shadow ring-1 ring-gray-400/10 sm:w-[30rem] md:-ml-4 lg:-ml-0"
              width={500}
              height={363}
            />
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default TechnologyInfoHero;
