"use client";

import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

const ServicesFAQ = ({ features }: any) => {
  return (
    <div className="mx-auto max-w-5xl py-24 sm:py-32">
      <div className="text-3xl font-extrabold leading-10 text-gray-900">
        <h2>Frequently asked questions:</h2>
        <hr className="border-sky-600 opacity-90 border-b-[2px] w-20 my-2" />
      </div>
      <dl className="mt-10 divide-y divide-gray-900/10">
        {features.map((faq: any) => (
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
    </div>
  );
};

export default ServicesFAQ;
