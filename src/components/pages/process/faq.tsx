'use client'

import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

const faqs = [
  {
    question: "How much does it cost to build an app?",
    answer:
      "The cost to build an app can vary widely, typically ranging from $5,000 to $500,000. However, The final cost depends on several factors such as the complexity of the app, the experience of the developers, and the number of features included.",
  },
  {
    question: "How long does it take to build custom software?",
    answer:
      "Our custom software applications typically take three to nine months to deliver the first release, depending on the chosen objectives. To provide a more accurate timeline for your project, we need to understand your objectives and core features through our discovery process.",
  },
  {
    question: "Do you have any experience in my industry?",
    answer:
      "Our experience spans across a diverse range of industries such as software products, manufacturing, retail, startups, and much more.",
  },
];
const Faq = () => {
  return (
    <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
      <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
        Frequently asked questions
      </h2>
      <dl className="mt-10 divide-y divide-gray-900/10">
        {faqs.map((faq) => (
          <Disclosure as="div" key={faq.question}>
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
                        <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
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
        ))}
      </dl>
    </div>
  );
};

export default Faq;
