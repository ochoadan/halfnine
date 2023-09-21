import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { FaGears, FaClipboardCheck, FaUserLock } from "react-icons/fa6";


const features = [
  {
    name: "Simplicity in Complexity",
    description:
      "Complex applications can be challenging to modify or for user education. Yet, by leveraging proven technologies and frameworks, we can simplify the user experience.",
    href: "#",
    icon: FaGears,
  },
  {
    name: "Regulatory Adherence",
    description:
      "Compliance with regulations like GDPR, CCPA, SOC 2, HIPAA, PCI, ISO 27001 is crucial in app development. Non-compliance risks penalties. We prioritize regulatory compliance in our technology.",
    href: "#",
    icon: FaClipboardCheck,
  },
  {
    name: "Robust Security",
    description:
      "Given daily vulnerabilities, updating IT assets, protecting accounts, and guarding users against social engineering is vital. Our developer team is skilled and security-aware, a key factor for any app.",
    href: "#",
    icon: FaUserLock,
  },
];

export default function RootFeature() {
  return (
    <>
      <FadeIn className="mx-auto max-w-3xl lg:text-center">
        {/* <h2 className="text-base font-semibold leading-7 text-sky-600">
          Deploy faster
        </h2> */}
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Experience Confidence with Us
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Our skilled team ensures a seamless experience for complex systems
          with strong security and regulatory compliance.
        </p>
      </FadeIn>
      <FadeInStagger className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <FadeIn key={feature.name} className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <feature.icon
                  className="h-5 w-5 flex-none text-sky-600"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{feature.description}</p>
                {/* <p className="mt-6">
                  <a
                    href={feature.href}
                    className="text-sm font-semibold leading-6 text-sky-600"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </p> */}
              </dd>
            </FadeIn>
          ))}
        </dl>
      </FadeInStagger>
    </>
  );
}
