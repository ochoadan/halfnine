"use client";

import { FadeIn, FadeInStagger } from "@/components/Global/FadeIn";
import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

const faqs = [
  {
    question: "My company is struggling. How can you help?",
    answer:
      "We provide a range of services to help struggling businesses. We can help you identify the root causes of your problems and develop a plan to address them. We can also help you implement that plan and monitor your progress to ensure that you are on track to achieve your goals.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "The time it takes to see results will depend on the nature of your problems and the solutions we develop. Some businesses see results quickly, while others take longer to achieve their goals. We will work with you to develop a timeline that meets your needs and expectations.",
  },
  {
    question: "How much does your service cost?",
    answer:
      "The cost of our services will depend on the nature of your problems and the solutions we develop. We offer a range of pricing options to meet your needs and budget. We will work with you to develop a pricing plan that meets your needs and expectations. This means usually a fixed fee or a percentage of the value we create for you.",
  },
  {
    question: "What makes you different from other consulting firms?",
    answer:
      "We do not only identify the root causes of your problems, but we also develop tangible solutions that address them. We work closely with you to implement those solutions and actively monitor and get involved in the transformation process to ensure that you are on track to achieve your goals.",
  },
  {
    question: "How do I get started?",
    answer:
      "The first step is to contact us to schedule an initial consultation. During this consultation, we will discuss your needs and goals and develop a plan to address them. We will work with you to develop a timeline and pricing plan that meets your needs and expectations.",
  },
];
const GlobalFAQ = () => {
  return (
    <FadeInStagger className="mx-auto max-w-5xl">
      <FadeIn className="text-3xl font-extrabold leading-10 text-gray-900">
        <h2>Frequently asked questions:</h2>
        <hr className="border-sky-600 opacity-90 border-b-[2px] w-20 my-2" />
      </FadeIn>
      <dl className="mt-10 divide-y divide-gray-900/10">
        {faqs.map((faq) => (
          <FadeIn key={faq.question}>
            <dl>
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
                            <MinusIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-6 w-6" aria-hidden="true" />
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
            </dl>
          </FadeIn>
        ))}
      </dl>
    </FadeInStagger>
  );
};

export default GlobalFAQ;
