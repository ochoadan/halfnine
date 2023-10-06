"use client";

import { Tab } from "@headlessui/react";

const offer = () => {
  return (
    <Tab.Group>
      <div className="flex">
        <Tab.List className="flex flex-col">
          <Tab className="mb-4 text-left">Software Development </Tab>
          <Tab className="mb-4 text-left">Testing & QA</Tab>
          <Tab className="mb-4 text-left">Application Services</Tab>
          <Tab className="mb-4 text-left">UX/UI Design</Tab>
          <Tab className="mb-4 text-left">IT Consulting</Tab>
          <Tab className="mb-4 text-left">Data Analytics</Tab>
          <Tab className="mb-4 text-left">Help Desk Services</Tab>
          <Tab className="mb-4 text-left">Infrastructure Services</Tab>
          <Tab className="mb-4 text-left">Cybersecurity Services</Tab>
        </Tab.List>
        <Tab.Panels className="ml-8">
          <Tab.Panel>Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
          <Tab.Panel>Content 4</Tab.Panel>
          <Tab.Panel>Content 5</Tab.Panel>
          <Tab.Panel>Content 6</Tab.Panel>
          <Tab.Panel>Content 7</Tab.Panel>
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
};

export default offer;
