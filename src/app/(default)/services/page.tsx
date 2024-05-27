import { RootOffering } from "../(root)";
import { Metadata } from "next";
import CustomHero from "@/components/Global/CustomHero";
import Link from "next/link";
import { services } from "./pageData";
import ContactForm from "@/components/Global/ContactForm";
import { InboxIcon, TrashIcon, UsersIcon } from "@heroicons/react/24/outline";
import { GoDotFill } from "react-icons/go";
import { SiGoogleanalytics } from "react-icons/si";
import { PiStrategy } from "react-icons/pi";
import { FaUserAstronaut } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Full Service IT Development, Management & Consulting • Halfnine",
  description:
    "Halfnine is a software development company that delivers full-service solutions to businesses. Contact us to learn more about how we can help you grow",
  alternates: { canonical: "https://www.halfnine.com/services" },
  openGraph: {
    url: "https://www.halfnine.com/services",
  },
};

const Page = () => {
  return (
    <>
      <CustomHero
        heading="Full Service IT Development, Management & Consulting"
        subtext="Solutions That Grow With You"
        description="Full-service means we handle every aspect of your project from start to finish. Ensuring that your project is delivered on time, on budget, and meets your business goals."
        imgSrc="/img/index/product-iteration.svg"
        imgAlt="Man standing besides a product iteration illustration"
        disableButton
      />
      <div className="bg-white pt-12 md:pt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Process />
        </div>
      </div>
      {/* {[SnC, DnP, DnT, AdditionalServices, RootOffering, DnI, SnM, SnC2].map( */}
      {[
        DiscoveryPhase,
        DefinePhase,
        DevelopPhase,
        DeliverPhase,
        AdditionalServices,
        RootOffering,
      ].map((Component, index) => (
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
      ))}
      <div className="bg-white py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Page;

const AdditionalServices = () => (
  <>
    <h2 className="text-3xl font-bold text-gray-900">Situational Services</h2>
    <p className="text-lg text-gray-700 pb-2">
      Our situational services are designed to help you with specific needs.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map((servicex, actionIdx) => (
        <div key={actionIdx}>
          {/* <div className="flex flex-col justify-center items-center"> */}
          {servicex?.url ? (
            <Link href={servicex?.url}>
              <h3 className="font-semibold text-xl hover:text-brand-600">
                {servicex.name}
              </h3>
            </Link>
          ) : (
            <h3 className="font-semibold text-xl">{servicex.name}</h3>
          )}
          {servicex?.list && (
            <ul
              key={servicex.name}
              className="my-2 gap-x-4 gap-y-3 flex flex-wrap"
            >
              {servicex.list.map((action, actionIdx) => (
                <li key={actionIdx}>
                  <Link
                    href={action.url}
                    className="group flex w-full items-center justify-between space-x-3 rounded-lg py-1 px-1.5 border border-gray-100 text-left bg-white shadow-sm shadow-gray-100"
                  >
                    <h4 className="block truncate text-sm font-medium text-gray-900 group-hover:text-brand-600">
                      {action.name}
                    </h4>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  </>
);

const Process = () => (
  <div className=" lg:text-center">
    <h2 className="text-3xl font-bold text-gray-900">Our Process</h2>
    <p className="text-lg text-gray-700">
      Our process is designed to help you achieve your goals and grow your
      business.
    </p>
  </div>
);

const Card = ({ title, url, description, icon, listItems }: any) => (
  <div className="flex flex-col mt-4 md:mt-0">
    <dt className="text-base font-semibold leading-7 text-gray-900">
      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600">
        {icon}
      </div>
      <h4>
        {url ? (
          <Link className="hover:text-sky-600" href={url}>
            {title}
          </Link>
        ) : (
          <>{title}</>
        )}
      </h4>
    </dt>
    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
      <p className="flex-auto">{description}</p>
      {listItems && (
        <ul className="mt-4 space-y-2">
          {listItems.map((item: any, index: any) => (
            <li key={index} className="flex items-center text-gray-600">
              <GoDotFill className="h-3 w-3" />
              {item.url ? (
                <Link
                  href={item.url}
                  className="ml-2 text-base hover:text-brand-600"
                >
                  {item.name}
                </Link>
              ) : (
                <p className="ml-2 text-base">{item.name}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </dd>
  </div>
);

type GridCardProps = {
  heading: string;
  description: string;
  cardData: {
    icon: any;
    title: string;
    url?: string;
    description: string;
    listItems?: { name: string; url?: string }[];
  }[];
};

const GridCards = ({ heading, description, cardData }: GridCardProps) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold text-gray-900">{heading}</h2>
      <p className="text-lg text-gray-700">{description}</p>
    </div>
    {cardData.map((item, index) => (
      <Card
        key={index}
        title={item.title}
        url={item.url}
        description={item.description}
        icon={item.icon}
        listItems={item.listItems}
      />
    ))}
  </div>
);

const DiscoveryPhase = () => (
  <GridCards
    heading="Discovery Phase"
    description="Our discovery phase is designed to help you find the right solution for your business."
    cardData={[
      {
        icon: <SiGoogleanalytics className="h-6 w-6 text-white" />,
        title: "Data & Analytics",
        description:
          "We help you make data-driven decisions by providing you with the insights you need to grow your business.",
        listItems: [
          { name: "Artificial Intelligence" },
          { name: "Enterprise Data Warehousing" },
          { name: "Operational Reporting" },
        ],
      },
      {
        icon: <PiStrategy className="h-6 w-6 text-white" />,
        title: "Business Strategy",
        description:
          "We help you create a roadmap that is tailored to your business goals and needs, so you can achieve success.",
        listItems: [
          { name: "Product Ownership" },
          { name: "Product Management" },
          { name: "Business Analysis" },
        ],
      },
    ]}
  />
);

const DefinePhase = () => (
  <GridCards
    heading="Define Phase"
    description="Our define phase is designed to help you blueprint your ideal solution."
    cardData={[
      {
        icon: <FaUserAstronaut className="h-6 w-6 text-white" />,
        title: "User Experience & Design",
        description: "Create a seamless journey focused on the user experience",
        listItems: [
          { name: "UX Research" },
          { name: "UI Design" },
          { name: "UX Execution" },
        ],
      },
      {
        icon: <TrashIcon className="h-6 w-6 text-white" />,
        title: "Architecture",
        description: "Blueprint solutions to scale and grow with your business",
        listItems: [
          { name: "Enterprise Architecture" },
          { name: "Technology Architecture" },
          { name: "Solution Architecture" },
        ],
      },
    ]}
  />
);

const DevelopPhase = () => (
  <GridCards
    heading="Develop Phase"
    description="Our develop phase is designed to help you build and test your solution"
    cardData={[
      {
        icon: <InboxIcon className="h-6 w-6 text-white" />,
        title: "Product Engineering",
        description:
          "Building solutions needed to achieve your objectives, goals, and vision",
        listItems: [
          { name: "Methodology" },
          { name: "DevOps" },
          { name: "Development" },
        ],
      },
      {
        icon: <TrashIcon className="h-6 w-6 text-white" />,
        title: "Quality Assurance",
        description:
          "Ensuring your solution meets your requirements and are aligned with your goals",
        listItems: [
          { name: "Test Strategies" },
          { name: "Test Automation" },
          { name: "Test Execution" },
        ],
      },
    ]}
  />
);

const DeliverPhase = () => (
  <GridCards
    heading="Deliver Phase"
    description="Our deliver phase is designed to help you keep your solution running smoothly."
    cardData={[
      {
        icon: <InboxIcon className="h-6 w-6 text-white" />,
        title: "Cloud and Infrastructure",
        description:
          "Find strategic and scalable solutions for the entire project lifecycle",
        listItems: [
          { name: "Strategic Efficiencies" },
          { name: "Operations" },
          { name: "Migration" },
        ],
      },
      {
        icon: <TrashIcon className="h-6 w-6 text-white" />,
        title: "IT Operations",
        description:
          "Ensure your solution continues to run smoothly and securely, meeting your business needs",
        listItems: [
          { name: "Security" },
          { name: "Monitoring & Triage" },
          { name: "Support" },
        ],
      },
    ]}
  />
);

// const SnC = () => (
//   <CustomHero
//     heading="Strategy and Consulting"
//     subtext="Find your roadmap to success"
//     description="Don't get lost or stuck by the overwhelming amount of options and technologies. We help you find the right path to success by creating a roadmap that is tailored to your business goals and needs."
//     imgSrc="/img/index/roadmap.svg"
//     imgAlt="User finding the right path to success with a roadmap"
//     buttonRef="/services/consulting"
//     buttonText="Learn more"
//     turnToH2
//     container={false}
//   />
// );

// const DnP = () => (
//   <CustomHero
//     heading="Design and Planning"
//     subtext="Blueprint your ideal solution"
//     description="Find the right solution for your business by creating a blueprint that outlines the features and functionalities that will help you achieve your goals."
//     imgSrc="/img/index/scalemodel.svg"
//     imgAlt="Woman showing a scale model of a building"
//     buttonRef="/services/design"
//     buttonText="Learn more"
//     isReverse
//     turnToH2
//     container={false}
//   />
// );

// const DnT = () => (
//   <CustomHero
//     heading="Development and Testing"
//     subtext="Build and test your solution"
//     description="Our team of developers will build and test your solution to ensure it meets your requirements and goals."
//     imgSrc="/img/index/application.svg"
//     imgAlt="Developers clicking an application"
//     buttonRef="/services/software-development"
//     buttonText="Learn more"
//     turnToH2
//     container={false}
//   />
// );

// const DnI = () => (
//   <CustomHero
//     heading="Deployment and Integration"
//     subtext="Launch and integrate your solution"
//     description="We help you launch and integrate your solution with your existing systems and processes to ensure a seamless transition."
//     imgSrc="/img/index/onservers.svg"
//     imgAlt="Man deploying a solution on servers"
//     buttonRef="/services/cloud"
//     buttonText="Learn more"
//     isReverse
//     turnToH2
//     container={false}
//   />
// );

// const SnM = () => (
//   <CustomHero
//     heading="Support and Maintenance"
//     subtext="Keep your solution running smoothly"
//     description="We provide ongoing support and maintenance to ensure your solution continues to run smoothly and meets your business needs."
//     imgSrc="/img/index/supporting.svg"
//     imgAlt="Woman showing other woman how to use a solution"
//     buttonRef="/services/support"
//     buttonText="Learn more"
//     turnToH2
//     container={false}
//   />
// );

// const SnC2 = () => (
//   <CustomHero
//     heading="Security and Compliance"
//     subtext="Stop unwanted surprises"
//     description="We help you keep your data safe and secure by implementing the latest security measures and ensuring compliance with industry standards."
//     imgSrc="/img/index/security.svg"
//     imgAlt="Man and shield icon protecting application"
//     buttonRef="/services/security"
//     buttonText="Learn more"
//     isReverse
//     turnToH2
//     container={false}
//   />
// );
