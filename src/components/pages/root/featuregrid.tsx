import { FadeIn, FadeInStagger } from "@/components/Global/FadeIn";
import {
  FaPeopleGroup,
  FaRegLightbulb,
  FaRegFlag,
  FaMedal,
} from "react-icons/fa6";

const features = [
  {
    name: "Teamwork",
    description:
      "Collaborating with a shared vision builds a foundation for creativity, efficiency, and outstanding results in teamwork.",
    icon: FaPeopleGroup,
  },
  {
    name: "Innovation",
    description:
      "Expertise and imagination are leveraged to innovate valuable solutions that optimize processes and lower costs.",
    icon: FaRegLightbulb,
  },
  {
    name: "Challenge",
    description:
      "We welcome challenges and push boundaries to achieve efficiency and productivity breakthroughs.",
    icon: FaRegFlag,
  },
  {
    name: "Solutions",
    description:
      "Our automation solutions address issues, create value, and have a positive impact on individuals and communities.",
    icon: FaMedal,
  },
];

export default function FeatureGrid() {
  return (
    <FadeInStagger>
      <FadeIn className="mx-auto lg:text-center">
        <h2 className=" text-base font-semibold leading-7 text-sky-600">
          Our Driving Forces
        </h2>
        <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
          {/* Everything you need to deploy your app */}
          What we are passionate for
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Collaborating for results, innovating for value, embrace challenges for
          efficiency, and designing impactful solutions.
        </p>
      </FadeIn>
      <div className="mx-auto mt-12 max-w-3xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
        <dl className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <FadeIn key={feature.name} className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600">
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
            </FadeIn>
          ))}
        </dl>
      </div>
    </FadeInStagger>
  );
}
