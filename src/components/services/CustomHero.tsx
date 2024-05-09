import Link from "next/link";
import React from "react";
import { FadeIn } from "@/components/Global/FadeIn";
import Image from "next/image";
import clsx from "clsx";

interface TechnologyInfoProps {
  heading: string;
  turnToH2?: boolean;
  subtext?: string;
  description?: string;
  technology?: string;
  imgSrc?: string;
  imgAlt?: string;
  disableButton?: boolean;
  buttonRef?: string;
  buttonText?: string;
  isReverse?: boolean;
  container?: boolean;
}

const CustomHero: React.FC<TechnologyInfoProps> = ({
  heading,
  turnToH2,
  subtext,
  description,
  imgSrc,
  imgAlt,
  technology,
  disableButton,
  buttonRef,
  buttonText,
  isReverse,
  container = true,
}) => {
  const headingClassName = "text-base font-semibold leading-7 text-brand-600";
  const Container = ({ children }: any) => (
    <div className="bg-white py-12 md:py-24 md:pt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
    </div>
  );
  const Content = () => (
    <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2 mx-auto">
      <div className={clsx(isReverse ? "order-last lg:pl-8" : " lg:pr-8")}>
        <div className="lg:max-w-xl">
          {turnToH2 ? (
            <h2 className={headingClassName}>{heading}</h2>
          ) : (
            <h1 className={headingClassName}>{heading}</h1>
          )}
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {subtext
              ? subtext
              : technology
              ? `Custom ${technology} Solutions`
              : "Custom Solutions"}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {description
              ? description
              : technology
              ? `Our team of ${technology.toLowerCase()} developers can help you design, build and manage ${technology.toLowerCase()} solutions that meet your unique requirements.`
              : "Our team of developers can help you design, build and manage custom solutions that meet your unique requirements."}
          </p>
        </div>
        {disableButton ? null : (
          <div className="mt-4 flex items-center gap-x-6">
            <Link
              href={buttonRef ? buttonRef : "/contact"}
              className="rounded-md bg-brand-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              {buttonText ? buttonText : "Get in touch"}
            </Link>
          </div>
        )}
      </div>
      <FadeIn className="mx-auto">
        <Image
          src={`${imgSrc ? imgSrc : "/img/hero.svg"}`}
          alt={imgAlt ? imgAlt : "Custom Solutions"}
          className="object-contain max-w-[500px] max-h-[375px]"
          width={500}
          height={375}
        />
      </FadeIn>
    </div>
  );
  return (
    <>
      {container ? (
        <Container>
          <Content />
        </Container>
      ) : (
        <Content />
      )}
    </>
  );
};

export default CustomHero;
