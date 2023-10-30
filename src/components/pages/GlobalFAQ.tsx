'use client'

import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

const faqs = [
  // {
  //   question: "How much does it cost to build an app?",
  //   answer:
  //     "The cost to build an app can vary widely, typically ranging from $5,000 to $500,000. However, The final cost depends on several factors such as the complexity of the app, the experience of the developers, and the number of features included.",
  // },
  // {
  //   question: "How long does it take to build custom software?",
  //   answer:
  //     "Our custom software applications typically take three to nine months to deliver the first release, depending on the chosen objectives. To provide a more accurate timeline for your project, we need to understand your objectives and core features through our discovery process.",
  // },
  // {
  //   question: "Do you have any experience in my industry?",
  //   answer:
  //     "Our experience spans across a diverse range of industries such as software products, manufacturing, retail, startups, and much more.",
  // },
  {
    question: "Are you capable of providing end-to-end software solutions?",
    answer:
      "Yes, we can offer full-stack software development services, including end-to-end software delivery. We have a deep understanding of the software development lifecycle on complex software solutions. We also have a strong network of offshore partners that we can leverage to augment our team and deliver even more value to our clients.",
  },
  {
    question: "I need to get this done fast, what are my options?",
    answer:
      "Based on the scope of your project, we can deliver your minimum viable product (MVP) in 2 to 4 months. After that, we can release new features every 2 to 6 weeks. Please contact us to discuss your specific needs so we can develop a plan that meets your goals.",
  },
  {
    question: "What affects the cost of software development?",
    answer:
      "Software development costs for medium/large applications can vary widely, from $40,000 to $1 million or more. The primary factors influencing cost are the number and complexity of features, the number of platforms supported, the type of development, the UI design, the number of integrations, and availability, security, and performance requirements.",
  },
];
const GlobalFAQ = () => {
  return (
    <FadeInStagger className="mx-auto max-w-5xl">
      <FadeIn className="text-3xl font-bold leading-10 tracking-tight text-gray-900">
        <h2>Frequently asked questions:</h2>
        <hr className="border-sky-600 opacity-90 border-b-[2px] w-20 my-2" />
      </FadeIn>
      <dl className="mt-10 divide-y divide-gray-900/10">
        {faqs.map((faq) => (
          <FadeIn key={faq.question}>
            <Disclosure as="div">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button
                      className={clsx(
                        "flex w-full items-start justify-between text-left text-gray-700 hover:text-black",
                        {
                          "pt-6 pb-4": open,
                          "py-6": !open,
                        }
                      )}
                    >
                      <span className="text-base font-semibold leading-7">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="pr-12 mb-6">
                    <p className="text-base leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </FadeIn>
        ))}
      </dl>
    </FadeInStagger>
  );
};

export default GlobalFAQ;
