import { FadeIn, FadeInStagger } from "@/components/Global/FadeIn";
import { FaGears, FaClipboardCheck, FaUserLock } from "react-icons/fa6";

const features = [
  {
    name: "Simplicity in Complexity",
    description:
      "We specialize in complex systems and can help you navigate the challenges of integrating new technologies, systems, and processes into your existing infrastructure",
    href: "#",
    icon: FaGears,
  },
  {
    name: "Regulatory Adherence",
    description:
      "We understand the importance of regulatory compliance and data privacy. Our team is well-versed in the latest regulations and can help you navigate the complexities of compliance",
    href: "#",
    icon: FaClipboardCheck,
  },
  {
    name: "Robust Security",
    description:
      "Security is a top priority for us. We implement best practices to ensure that your data is secure and protected from unauthorized access, data breaches, and other security threats",
    href: "#",
    icon: FaUserLock,
  },
];

export default function RootFeature() {
  return (
    <FadeInStagger faster>
      <FadeIn className="mx-auto lg:text-center">
        {/* <h2 className="text-base font-semibold leading-7 text-brand-600">
          Deploy faster
        </h2> */}
        <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
          Experience Confidence with Us
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Our skilled team ensures a seamless experience for complex systems
          with strong security and regulatory compliance
        </p>
      </FadeIn>
      <div className="mx-auto mt-16 max-w-3xl sm:mt-20 lg:max-w-none">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <FadeIn key={feature.name} className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <feature.icon
                  className="h-5 w-5 flex-none text-brand-600"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{feature.description}</p>
                {/* <p className="mt-6">
                  <a
                    href={feature.href}
                    className="text-sm font-semibold leading-6 text-brand-600"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </p> */}
              </dd>
            </FadeIn>
          ))}
        </dl>
      </div>
    </FadeInStagger>
  );
}
