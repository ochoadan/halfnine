import PageHero from "@/components/Global/PageHero";
import { RootOffering } from "../(root)";
import { Metadata } from "next";
import CustomHero from "@/components/services/CustomHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software Development Services • Halfnine",
  description:
    "Halfnine is a software development company that delivers full-service solutions to businesses. Contact us to learn more about how we can help you grow",
  alternates: { canonical: "https://www.halfnine.com/services" },
  openGraph: {
    url: "https://www.halfnine.com/services",
  },
};

const service = [
  {
    name: "IT Outsourcing Services",
    role: "Outsource your IT needs to us",
    url: "/services/it-outsourcing",
  },
  {
    name: "Software Development Outsourcing Services",
    role: "Outsource your software development needs to us",
    url: "/services/software-development/outsourcing",
  },
  {
    name: "Cloud Migration Services",
    role: "Migrate your business to the cloud",
    url: "/services/cloud-migration",
  },
  {
    name: "Web Development Services",
    role: "Develop your website with us",
    url: "/services/web-development",
  },
  // {
  //   name: "Mobile App Development Services",
  //   role: "Develop your mobile app with us",
  //   url: "/services/mobile-app-development",
  // },
];

const Page = () => {
  return (
    <>
      <PageHero
        heading="Full-Service IT Development & Consulting"
        description="Our solutions are customized to your needs and goals"
      />
      {[SnC, DnP, DnT, AdditionalServices, RootOffering, DnI, SnM, SnC2].map(
        (Component, index) => (
          <div
            key={index}
            className={`${
              index % 2 === 0 ? "bg-white" : "bg-gray-50"
            } py-12 md:py-24`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <Component />
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Page;

const AdditionalServices = () => (
  <>
    <h2 className="text-3xl font-bold text-gray-900">Additional Services</h2>
    <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {service.map((servicex) => (
        <div
          key={servicex.name}
          className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-brand-500 focus-within:ring-offset-2 hover:border-gray-400"
        >
          <div className="min-w-0 flex-1">
            <Link href={servicex.url} className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900">
                {servicex.name}
              </p>
              <p className="truncate text-sm text-gray-500">{servicex.role}</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </>
);

const SnC = () => (
  <CustomHero
    heading="Strategy and Consulting"
    subtext="Find your roadmap to success"
    description="Don't get lost or stuck by the overwhelming amount of options and technologies. We help you find the right path to success by creating a roadmap that is tailored to your business goals and needs."
    imgSrc="/img/index/roadmap.svg"
    imgAlt="User finding the right path to success with a roadmap"
    buttonRef="/services/consulting"
    buttonText="Learn more"
    turnToH2
    container={false}
  />
);

const DnP = () => (
  <CustomHero
    heading="Design and Planning"
    subtext="Blueprint your ideal solution"
    description="Find the right solution for your business by creating a blueprint that outlines the features and functionalities that will help you achieve your goals."
    imgSrc="/img/index/scalemodel.svg"
    imgAlt="Woman showing a scale model of a building"
    buttonRef="/services/architecture"
    buttonText="Learn more"
    isReverse
    turnToH2
    container={false}
  />
);

const DnT = () => (
  <CustomHero
    heading="Development and Testing"
    subtext="Build and test your solution"
    description="Our team of developers will build and test your solution to ensure it meets your requirements and goals."
    imgSrc="/img/index/application.svg"
    imgAlt="Developers clicking an application"
    buttonRef="/services/software-development"
    buttonText="Learn more"
    turnToH2
    container={false}
  />
);

const DnI = () => (
  <CustomHero
    heading="Deployment and Integration"
    subtext="Launch and integrate your solution"
    description="We help you launch and integrate your solution with your existing systems and processes to ensure a seamless transition."
    imgSrc="/img/index/onservers.svg"
    imgAlt="Man deploying a solution on servers"
    buttonRef="/services/cloud"
    buttonText="Learn more"
    isReverse
    turnToH2
    container={false}
  />
);

const SnM = () => (
  <CustomHero
    heading="Support and Maintenance"
    subtext="Keep your solution running smoothly"
    description="We provide ongoing support and maintenance to ensure your solution continues to run smoothly and meets your business needs."
    imgSrc="/img/index/supporting.svg"
    imgAlt="Woman showing other woman how to use a solution"
    buttonRef="/services/support"
    buttonText="Learn more"
    turnToH2
    container={false}
  />
);

const SnC2 = () => (
  <CustomHero
    heading="Security and Compliance"
    subtext="Stop unwanted surprises"
    description="We help you keep your data safe and secure by implementing the latest security measures and ensuring compliance with industry standards."
    imgSrc="/img/index/security.svg"
    imgAlt="Man and shield icon protecting application"
    buttonRef="/services/security"
    buttonText="Learn more"
    isReverse
    turnToH2
    container={false}
  />
);
