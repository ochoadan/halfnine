"use client";

import { FadeIn } from "@/components/Global/FadeIn";
import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

const faqs = [
  {
    question: "What Services Do You Offer?",
    answer: `We offer "Full-Service Technology Solutions", Meaning we can help you with any technology-related project, from start to finish.`,
  },
  {
    question: "How Much Do You Charge?",
    answer: `Our pricing is simple, we charge a small flat rate for the people involved in your project, and a success based fee when we meet your goals. Ensuring we are always aligned with your success.`,
  },
  {
    question: "How Long Do You Take To Complete A Project?",
    answer: `We work quickly, but we also work carefully. We will give you a realistic timeline for your project, and we will stick to it. We will also keep you updated on our progress.`,
  },
];
const GlobalFAQ = () => {
  return (
    <>
      <div className="text-3xl font-extrabold leading-10 text-gray-900">
        <h2>Frequently asked questions:</h2>
        <hr className="border-brand-600 opacity-90 border-b-[2px] w-20 my-2" />
      </div>
      <dl className="mt-4 divide-y divide-gray-900/10">
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
                        <MinusIcon className="h-6 w-6" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-6 w-6" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel className="pr-12 mb-6">
                  <p className="text-base leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </dl>
    </>
  );
};

export default GlobalFAQ;
