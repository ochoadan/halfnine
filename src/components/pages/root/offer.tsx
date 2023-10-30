"use client";

import { Tab } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { panels } from "./offerdata";

const Panel = ({ panel }: any) => (
  <Tab.Panel className="bg-white py-8 sm:py-12 outline-none">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {panel.name}
          <hr className="border-sky-600 opacity-90 border-b-[2px] w-20 my-2" />
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          {panel.description}
        </p>
        <ul
          role="list"
          className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 sm:grid-cols-2"
        >
          {panel.features.map((feature: any) => (
            <li key={feature.name} className="flex gap-x-3">
              <CheckCircleIcon
                className="h-7 w-5 flex-none text-sky-600"
                aria-hidden="true"
              />
              {feature.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Tab.Panel>
);

const Offer = () => (
  <Tab.Group>
    <div className="flex">
      <Tab.List className="flex-col w-64 grid grid-rows-1 lg:grid-rows-2">
        {panels.map((panel, index) => (
          <Tab
            key={index}
            className={({ selected }) =>
              `text-left font-semibold p-2 outline-none ${
                selected ? "bg-sky-200" : "bg-slate-200"
              }`
            }
          >
            {panel.name}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {panels.map((panel, index) => (
          <Panel key={index} panel={panel} />
        ))}
      </Tab.Panels>
    </div>
  </Tab.Group>
);

export default Offer;
