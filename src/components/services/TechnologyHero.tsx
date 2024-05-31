import Link from "next/link";
import React from "react";
import { FadeIn } from "@/components/Global/FadeIn";
import Image from "next/image";

interface TechnologyInfoProps {
  technology: string;
  isCompany?: boolean;
  imgSrc: string;
  message: string;
}

const TechnologyInfoHero: React.FC<TechnologyInfoProps> = ({
  technology,
  isCompany,
  imgSrc,
}) => {
  return (
    <div className="bg-white pt-8 py-12 lg:py-24 lg:pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-4 lg:grid-cols-2 mx-auto">
          <div className="lg:pr-8">
            {/* <h1 className="text-base font-semibold leading-7 text-brand-600"> */}
            <p className="text-base font-semibold leading-7 text-brand-600">
              {isCompany
                ? `Halfnine ${technology} development company`
                : `Halfnine's ${technology} development services`}
              {/* {`Halfnine's ${technology} development services`} */}
            </p>
            <p className="sr-only">
              {`Custom ${technology} services and solutions`}
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {`${technology} Development Company`}
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-600 max-w-lg lg:max-w-none">
              {`Do you need professional ${technology} development services? Hire our ${technology} developers for your needs and projects.`}
            </p>
            <div className="mt-5 flex items-center">
              <Link
                // href={`/contact${message ? `?message=${message}` : ""}`}
                href={`/contact`}
                className="rounded-md bg-brand-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
              >
                Talk to our team
              </Link>
              {/* <Link
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                GapText CTA <span aria-hidden="true">→</span>
              </Link> */}
            </div>
          </div>
          <FadeIn className="mx-auto">
            <Image
              src={`${imgSrc ? imgSrc : "/img/hero.svg"}`}
              alt={`Software developer working with ${technology}`}
              className="object-contain w-[500px] h-[363px] max-w-screen"
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
