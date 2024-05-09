import Link from "next/link";
import {
  FaCode,
  FaPeopleGroup,
  FaBuildingShield,
  FaMoneyCheckDollar,
  FaChartLine,
} from "react-icons/fa6";
import { GiSpeedometer, GiUpgrade } from "react-icons/gi";
import { TbTransfer } from "react-icons/tb";
const services = [
  {
    name: "Software Development",
    description:
      "We create custom software solutions that drive your business forward.",
    icon: FaCode,
  },
  {
    name: "Managed IT Services",
    description:
      "Get the support you need to keep your IT infrastructure running smoothly.",
    icon: FaChartLine,
  },
  {
    name: "IT Cost Optimization",
    description:
      "Reduce your IT costs without compromising on reliability or performance.",
    icon: FaMoneyCheckDollar,
  },
  {
    name: "Service Migration",
    description:
      "Migrate your services with continuous delivery and minimal downtime.",
    icon: TbTransfer,
  },
  // {
  //   name: "Enterprise Architecture",
  //   description:
  //     "Design a robust architecture that aligns with your business goals.",
  //   icon: FaCode,
  // },
  {
    name: "Nearshore Development",
    description: "Reduce costs by choosing to work with a nearshore team.",
    icon: FaPeopleGroup,
  },
  // {
  //   name: "Local Development",
  //   description:
  //     "Work with a local team to ensure clear communication and collaboration.",
  //   icon: FaPeopleGroup,
  // },
  {
    name: "Performance Optimization",
    description:
      "Optimize your systems for maximum performance and efficiency.",
    icon: GiSpeedometer,
  },
  {
    name: "Legacy System Modernization",
    description:
      // "Upgrade your legacy systems to keep up with the demands of modern business.",
      "Upgrade to keep up with modern security, compliance, and performance standards.",
    icon: GiUpgrade,
  },
  {
    name: "Security & Compliance",
    description:
      "Protect your data and ensure compliance with industry regulations.",
    icon: FaBuildingShield,
  },
  // {
  //   name: "IT Consulting",
  //   description: "Navigate the complex IT landscape with our expert guidance.",
  //   icon: FaPeopleGroup,
  // },
  // {
  //   name: "Cloud Services",
  //   description:
  //     "Leverage the power of cloud computing for enhanced efficiency.",
  //   icon: FaCloudArrowUp,
  // },
  // {
  //   name: "Cybersecurity",
  //   description:
  //     "Safeguard your digital assets with our robust security measures.",
  //   icon: FaBuildingShield,
  // },
];

const Services = () => {
  return (
    <>
      <h2 className="text-3xl font-bold">Our Service Offerings</h2>
      {/* <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-brand-600">
          Deploy faster
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Everything you need to deploy your app
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
          Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
          In mi viverra elit nunc.
        </p>
      </div> */}
      <div className="mt-6">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 lg:gap-y-8">
          {services.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-lg font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600">
                  <feature.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-1 text-base leading-7 text-gray-600">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="mt-4">
        <Link
          href="/services"
          className="text-brand-600 hover:text-brand-500 hover:underline"
        >
          View all services
        </Link>
      </div>
      <div className="mt-8 flex justify-center">
        <p className="relative rounded-full bg-white px-4 py-1.5 text-base leading-6 text-gray-700 ring-2 ring-inset ring-gray-900/10">
          {"For tailored solutions, don't hesitate to "}
          <Link
            href="/contact"
            className="text-brand-600 hover:text-brand-500 hover:underline"
          >
            Contact us
          </Link>
        </p>
      </div>
    </>
  );
};

export default Services;
