"use client";

import { FadeIn } from "@/components/FadeIn";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
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
  // {
  //   question: "",
  //   answer:
  //     "",
  // },
];

const RootFrequentlyAsked = () => {
  return (
    <>
      <FadeIn className="mx-auto max-w-5xl divide-y divide-gray-900/10">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          Frequently asked questions
        </h2>
        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="pt-6">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
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
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </FadeIn>
      {/* </div> */}
    </>
  );
};

export default RootFrequentlyAsked;
