"use client";

import { useState } from "react";
import { Tab } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { FadeIn, FadeInStagger } from "@/components/Global/FadeIn";
import clsx from "clsx";

export default function Services() {
  let [categories] = useState({
    "Technology Development": {
      description:
        "Our team can create reliable and secure software applications that work with all operating systems, browsers, and devices. We use advanced technology to deliver custom solutions that meet user needs and preferences.",
      features: [
        { name: "Software Development" },
        { name: "Hardware Development" },
        { name: "Firmware Development" },
        { name: "Web Development" },
        { name: "Mobile App Development" },
        { name: "Desktop App Development" },
        { name: "Custom Software Development" },
        { name: "Software Development Outsourcing" },
        { name: "Software Product Development" },
        { name: "Cloud Application Development" },
        { name: "Legacy Software Modernization" },
      ],
    },
    "Technology Consulting": {
      description:
        "We aid in crafting IT strategies, facilitating digital transformation and system integration, and enhancing your digital customer experience.",
      features: [
        { name: "Digital Transformation Consulting" },
        { name: "Project Management Consulting" },
        { name: "Digital Crisis Management Consulting" },
        { name: "IT Service Management Consulting" },
        { name: "Solution consulting" },
        { name: "Platform consulting" },
        { name: "Enterprise IT consulting" },
      ],
    },
    "UI/UX Design": {
      description:
        "We design user interfaces and experiences for websites, SaaS, and apps, blending latest trends with client goals for impactful, business-boosting designs.",
      features: [
        { name: "User Interface (UI) Design" },
        { name: "Responsive Web App Design" },
        { name: "Software-as-as-Service (SaaS) UI Design" },
        { name: "Ecommerce Website Design" },
        { name: "User Experience (UX) Design" },
        { name: "Website Redesign" },
        { name: "Responsive Web Design" },
      ],
    },
    "Technology Investments": {
      description:
        "We provide an efficient and effective way to invest in technology through acquisition and manage these digital assets to ensure optimal operation and cost-effectiveness.",
      features: [
        { name: "Digital Asset Management"},
        { name: "Digital Asset Acquisition"},
        { name: "Digital Asset Consulting"},
        { name: "Digital Asset Evaluation" },
        { name: "Technology Acquisition" },
        { name: "Technology Management" },
        { name: "Technology Investment" },
        { name: "Technology Consulting" },
        { name: "Technology Strategy" },
      ],
    },
    "Technology Management": {
      description:
        "Our dedicated team provides comprehensive assistance to businesses in effectively managing their digital solutions, thereby ensuring optimal operation and cost-effectiveness.",
      features: [
        { name: "Application management" },
        { name: "Application modernization" },
        { name: "Application integration" },
        { name: "Application security services" },
        { name: "Application development" },
        { name: "Application testing" },
        { name: "Application maintenance and support" },
      ],
    },
    "Staffing & Training": {
      description:
        "We provide a flexible team of IT professionals, or help you find the right talent for your projects, and provide training to help you grow your team's skills and knowledge.",
      features: [
        { name: "IT staff augmentation" },
        { name: "IT recruitment process outsourcing" },
        { name: "IT recruitment consulting" },
        { name: "IT recruitment" },
        { name: "IT headhunting" },
        { name: "IT staffing" },
      ],
    },
    "Modernization": {
      description:
        "We maintain your digital assets and ensure they are up-to-date and secure, reducing and eliminating depreciation and increasing efficiency and cost-effectiveness.",
      features: [
        { name: "Application modernization" },
        { name: "Legacy software modernization" },
        { name: "Cloud migration" },
        { name: "Data migration" },
        { name: "Database migration" },
        { name: "Platform migration" },
        { name: "Framework migration" },
        { name: "Technology migration" },
      ],
    },
    // Software: {
    //   description:
    //     "We offer comprehensive testing services, can help improve your QA, and guide you in setting up your own Testing Center. We test mobile, web, and desktop apps throughout their development.",
    //   features: [
    //     { name: "QA outsourcing" },
    //     { name: "QA consulting" },
    //     { name: "Security testing" },
    //     { name: "Functional testing" },
    //     { name: "Usability testing" },
    //     { name: "Performance testing" },
    //     { name: "Test automation" },
    //     { name: "Manual testing" },
    //     { name: "Security testing" },
    //     { name: "Compatibility testing" },
    //   ],
    // },
    // Hardware: {
    //   description:
    //     "We provide comprehensive infrastructure services and are pursuing ISO 27001 certification to ensure secure collaboration and protect our customers data.",
    //   features: [
    //     { name: "Managed IT support" },
    //     { name: "Data center support and management" },
    //     { name: "Cloud consulting and management" },
    //     { name: "DevOps consulting and implementation" },
    //     { name: "Virtual desktop consulting, implementation and support" },
    //     { name: "Networking management services" },
    //   ],
    // },
    // Firmware: {
    //   description:
    //     "We provide comprehensive infrastructure services and are pursuing ISO 27001 certification to ensure secure collaboration and protect our customers data.",
    //   features: [
    //     { name: "Managed IT support" },
    //     { name: "Data center support and management" },
    //     { name: "Cloud consulting and management" },
    //     { name: "DevOps consulting and implementation" },
    //     { name: "Virtual desktop consulting, implementation and support" },
    //     { name: "Networking management services" },
    //   ],
    // },
    // "Software Development": {
    //   description:
    //     "Our team can create reliable and secure software applications that work with all operating systems, browsers, and devices. We use advanced technology to deliver custom solutions that meet user needs and preferences.",
    //   features: [
    //     { name: "Software consulting" },
    //     { name: "Custom software development" },
    //     { name: "Software development outsourcing" },
    //     { name: "Software product development" },
    //     { name: "Team augmentation" },
    //     { name: "Cloud application development" },
    //     { name: "Legacy software modernization" },
    //   ],
    // },
    // "Testing & QA": {
    //   description:
    //     "We offer comprehensive testing services, can help improve your QA, and guide you in setting up your own Testing Center. We test mobile, web, and desktop apps throughout their development.",
    //   features: [
    //     { name: "QA outsourcing" },
    //     { name: "QA consulting" },
    //     { name: "Security testing" },
    //     { name: "Functional testing" },
    //     { name: "Usability testing" },
    //     { name: "Performance testing" },
    //     { name: "Test automation" },
    //     { name: "Manual testing" },
    //     { name: "Security testing" },
    //     { name: "Compatibility testing" },
    //   ],
    // },
    // "Application Services": {
    //   description:
    //     "Our dedicated team provides comprehensive assistance to businesses in effectively managing their digital solutions, thereby ensuring optimal operation and cost-effectiveness.",
    //   features: [
    //     { name: "Application management" },
    //     { name: "Application modernization" },
    //     { name: "Application integration" },
    //     { name: "Application security services" },
    //     { name: "Application development" },
    //     { name: "Application testing" },
    //     { name: "Application maintenance and support" },
    //   ],
    // },
    // "UX/UI Design": {
    //   description:
    //     "We design user interfaces and experiences for websites, SaaS, and apps, blending latest trends with client goals for impactful, business-boosting designs.",
    //   features: [
    //     { name: "User Interface (UI) Design" },
    //     { name: "Responsive Web App Design" },
    //     { name: "Software-as-as-Service (SaaS) UI Design" },
    //     { name: "Ecommerce Website Design" },
    //     { name: "User Experience (UX) Design" },
    //     { name: "Website Redesign" },
    //     { name: "Responsive Web Design" },
    //   ],
    // },
    // "IT Consulting": {
    //   description:
    //     "We aid in crafting IT strategies, facilitating digital transformation and system integration, and enhancing your digital customer experience.",
    //   features: [
    //     { name: "Digital Transformation Consulting" },
    //     { name: "Project Management Consulting" },
    //     { name: "Digital Crisis Management Consulting" },
    //     { name: "IT Service Management Consulting" },
    //     { name: "Solution consulting" },
    //     { name: "Platform consulting" },
    //     { name: "Enterprise IT consulting" },
    //   ],
    // },
    // "Data Analytics": {
    //   description:
    //     "We transform historical and real-time data into actionable insights for businesses, preparing the raw data environment and enhancing businesses with advanced analytics.",
    //   features: [
    //     { name: "Business Intelligence" },
    //     { name: "Big Data" },
    //     { name: "Data Warehousing" },
    //     { name: "Data Science" },
    //     { name: "Data Management" },
    //     { name: "Machine and Deep Learning" },
    //     { name: "Data Analytics as a Service" },
    //   ],
    // },
    // "Help Desk Services": {
    //   description:
    //     "Our help desk services resolve various issues, from application queries to code-level enhancements, ensuring smooth software functioning and user satisfaction.",
    //   features: [
    //     { name: "Help desk outsourcing" },
    //     { name: "IT help desk services" },
    //     { name: "Outsourced help desk for MSP" },
    //     { name: "NOC outsourcing" },
    //     { name: "Offshore Call Center" },
    //   ],
    // },
    // "Infrastructure Services": {
    //   description:
    //     "We provide comprehensive infrastructure services and are pursuing ISO 27001 certification to ensure secure collaboration and protect our customers data.",
    //   features: [
    //     { name: "Managed IT support" },
    //     { name: "Data center support and management" },
    //     { name: "Cloud consulting and management" },
    //     { name: "DevOps consulting and implementation" },
    //     { name: "Virtual desktop consulting, implementation and support" },
    //     { name: "Networking management services" },
    //   ],
    // },
    "Cybersecurity Services": {
      description:
        "We improve the security of your applications and networks. Our team identifies vulnerabilities and implements countermeasures  to protect your infrastructure.",
      features: [
        { name: "Security assessment" },
        { name: "Managed security services" },
        { name: "Security testing" },
        { name: "Information security consulting" },
        { name: "Security code review" },
        { name: "Compliance assessment" },
        { name: "Penetration testing" },
      ],
    },
    // "IT Staffing": {
    //   description:
    //     "We provide IT staffing services to help you find the right talent for your projects.",
    //   features: [
    //     { name: "IT staff augmentation" },
    //     { name: "IT recruitment process outsourcing" },
    //     { name: "IT recruitment consulting" },
    //     { name: "IT recruitment" },
    //     { name: "IT headhunting" },
    //     // { name: "IT staffing" },
    //   ],
    // },
    // "IT Training": {
    //   description:
    //     "We provide IT training services to help you find the right talent for your projects.",
    //   features: [
    //     { name: "IT training" },
    //     { name: "IT training outsourcing" },
    //     { name: "IT training consulting" },
    //     { name: "IT training courses" },
    //     { name: "IT training programs" },
    //     { name: "IT training services" },
    //   ],
    // },
    // "IT Outsourcing": {
    //   description:
    //     "We provide IT outsourcing services to help you find the right talent for your projects.",
    //   features: [
    //     { name: "IT outsourcing" },
    //     { name: "IT outsourcing services" },
    //     { name: "IT outsourcing companies" },
    //     { name: "IT outsourcing consulting" },
    //     { name: "IT outsourcing solutions" },
    //     { name: "IT outsourcing firms" },
    //   ],
    // },
  });

  return (
    <FadeInStagger>
      <FadeIn>
        <h2 className="text-3xl font-extrabold leading-10 text-gray-900 pb-4 sm:text-4xl">
          Our popular service offerings
          <hr className="border-brand-600 opacity-90 border-b-[2px] w-24 my-2" />
        </h2>
      </FadeIn>
      <Tab.Group vertical>
        <FadeIn className="bg-white p-4 rounded-2xl shadow-md shadow-gray-900/5 sm:flex sm:space-x-6">
          <Tab.List className="flex flex-1 flex-wrap sm:flex-col gap-y-[1px] sm:w-1/5">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  clsx(
                    "p-2 group flex rounded-lg text-base leading-6 font-semibold text-left",
                    selected
                      ? "bg-gray-50 text-brand-500 cursor-default"
                      : "text-gray-700 hover:text-brand-600"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="sm:w-4/5 px-2 mt-4 sm:mt-0">
            {/* <Tab.Panels className="w-4/5 outline-none px-2 flex items-center"> */}
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel key={idx} className="outline-brand-600">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  {Object.keys(categories)[idx]}
                  <hr className="border-brand-600 opacity-90 border-b-[2px] w-20 my-2" />
                </h2>
                <p>{he.decode(posts.description)}</p>
                <ul role="list" className="mt-6 gap-4 flex flex-wrap">
                  {posts.features.map((feature: any) => (
                    <li key={feature.name}>
                      <div className="group flex w-full items-center justify-between space-x-3 rounded-xl py-1 px-2 border border-gray-100">
                        <span className="flex min-w-0 flex-1 items-center space-x-2">
                          <span className="block flex-shrink-0 rounded-lg overflow-hidden">
                            <CheckCircleIcon
                              className="h-4 w-4 sm:h-5 sm:w-5 flex-none text-brand-500"
                              aria-hidden="true"
                            />
                          </span>
                          <span className="block min-w-0 flex-1">
                            <span className="block truncate text-sm sm:text-base font-medium text-gray-900">
                              {feature.name}
                            </span>
                          </span>
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </FadeIn>
      </Tab.Group>
    </FadeInStagger>
  );
}
