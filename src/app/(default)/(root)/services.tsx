import Link from "next/link";
import {
  FaCode,
  FaPeopleGroup,
  FaBuildingShield,
  FaCloudArrowUp,
} from "react-icons/fa6";
const services = [
  {
    name: "Software Development",
    description:
      "We create custom software solutions that drive your business forward.",
    icon: FaCode,
  },
  {
    name: "IT Consulting",
    description: "Navigate the complex IT landscape with our expert guidance.",
    icon: FaPeopleGroup,
  },
  {
    name: "Cloud Services",
    description:
      "Leverage the power of cloud computing for enhanced efficiency.",
    icon: FaCloudArrowUp,
  },
  {
    name: "Cybersecurity",
    description:
      "Safeguard your digital assets with our robust security measures.",
    icon: FaBuildingShield,
  },
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
        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 lg:gap-y-16">
          {services.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600">
                  <feature.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="mt-6 flex justify-center">
        <p className="relative rounded-full bg-white px-4 py-1.5 text-sm leading-6 text-gray-700 ring-2 ring-inset ring-gray-900/10">
          Need a service not listed here?{" "}
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
