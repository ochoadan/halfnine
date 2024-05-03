import Link from "next/link";
import React from "react";
import { FadeIn } from "@/components/Global/FadeIn";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/20/solid";

interface TechnologyInfoProps {
  technology: string;
  imgSrc: string;
  message: string;
}

const TechnologyInfo: React.FC<TechnologyInfoProps> = ({
  technology,
  imgSrc,
  message,
}) => {
  return (
    <div className="bg-white py-12 md:py-24 md:pt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2 mx-auto">
          <div className="lg:pr-8">
            <div className="lg:max-w-xl">
              <h1 className="text-base font-semibold leading-7 text-brand-600">
                {`${technology} Software Development Company`}
              </h1>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {`Custom ${technology} Solutions`}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {`Our team of ${technology} developers can help you build custom software solutions that meet your unique business requirements.`}
              </p>
            </div>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href={`/contact${message ? `?message=${message}` : ""}`}
                className="rounded-md bg-brand-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
              >
                Talk to our team
              </Link>
              <div>
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {`Clients rate our ${technology} services`}
                </p>
                <p className="text-md font-bold tracking-tight text-brand-600">
                  4.9/5.0
                  {/* <div className="flex gap-x-1 pl-3">
                    <StarIcon
                      className="h-5 w-5 flex-none"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 flex-none"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 flex-none"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 flex-none"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 flex-none"
                      aria-hidden="true"
                    />
                  </div> */}
                </p>
              </div>
              {/* <Link
          href="#"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          View on GitHub <span aria-hidden="true">→</span>
        </Link> */}
            </div>
          </div>
          <FadeIn className="mx-auto">
            <Image
              src={`${imgSrc ? imgSrc : "/img/hero.svg"}`}
              alt="Product screenshot"
              // className="w-[20rem] max-w-none p-5 rounded-xl shadow ring-1 ring-gray-400/10 sm:w-[30rem] md:-ml-4 lg:-ml-0"
              width={500}
              height={500}
            />
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default TechnologyInfo;
