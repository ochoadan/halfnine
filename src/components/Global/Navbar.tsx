"use client";

import { Fragment, useState } from "react";

import { Dialog, Popover, PopoverButton, PopoverGroup, PopoverPanel, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { PiPhone } from "react-icons/pi";

import {
  ChevronDownIcon,
  PhoneIcon,
  RectangleGroupIcon,
} from "@heroicons/react/20/solid";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Global/Logo";
import {
  FaCloud,
  FaCode,
  FaHeadset,
  FaRegCompass,
  FaRegEnvelope,
  FaShield,
} from "react-icons/fa6";
import { GoChecklist } from "react-icons/go";

const products = [
  // {
  //   name: "Strategy",
  //   description: "Crafting and executing technical roadmaps",
  //   href: "#",
  //   icon: FaRegCompass,
  // },
  // {
  //   name: "Planning",
  //   description: "Defining requirements and timelines",
  //   href: "#",
  //   icon: GoChecklist,
  // },
  // {
  //   name: "Development",
  //   description: "Building and testing software systems",
  //   href: "/services/software-development",
  //   icon: FaCode,
  // },
  // {
  //   name: "Deployment",
  //   description: "Deploying and configuring systems",
  //   href: "/services/cloud",
  //   icon: FaCloud,
  // },
  // {
  //   name: "Support",
  //   description: "Training and troubleshooting systems",
  //   href: "#",
  //   icon: FaHeadset,
  // },
  // {
  //   name: "Maintenance",
  //   description: "Monitoring and updating systems",
  //   href: "#",
  //   icon: GrVmMaintenance,
  // },
  {
    name: "Strategy & Consulting",
    description: "Crafting technical roadmaps and providing expert advice",
    href: "/services/consulting",
    icon: FaRegCompass,
  },
  {
    name: "Design & Experience",
    description: "Defining requirements, timelines, and system design",
    href: "/services/design",
    icon: GoChecklist,
  },
  {
    name: "Development & Testing",
    description: "Building, testing, and ensuring quality of software systems",
    href: "/services/software-development",
    icon: FaCode,
  },
  {
    name: "Deployment & Integration",
    description: "Deploying, configuring, and integrating systems",
    href: "/services/cloud",
    icon: FaCloud,
  },
  {
    name: "Support & Maintenance",
    description: "Training, troubleshooting, monitoring, and updating systems",
    href: "/services/support",
    icon: FaHeadset,
  },
  {
    name: "Security & Compliance",
    description:
      "Ensuring the safety, integrity, and regulatory compliance of systems",
    href: "/services/security",
    icon: FaShield,
  },
];

const solutions = [
  { name: "ERP", href: "/solutions/erp" },
  { name: "CRM", href: "/solutions/crm" },
  { name: "BI", href: "/solutions/bi" },
  { name: "Analytics", href: "/solutions/analytics" },
  { name: "E-commerce", href: "/solutions/e-commerce" },
  { name: "AI & Machine Learning", href: "/solutions/ai-machine-learning" },
  { name: "Internet of Things", href: "/solutions/iot" },
  { name: "Blockchain", href: "/solutions/blockchain" },
  { name: "Cybersecurity", href: "/solutions/cybersecurity" },
  { name: "Big Data", href: "/solutions/big-data" },
  { name: "Virtual Reality", href: "/solutions/virtual-reality" },
  { name: "Augmented Reality", href: "/solutions/augmented-reality" },
  { name: "Cloud Computing", href: "/solutions/cloud-computing" },
];

const callsToAction = [
  // { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "View all services", href: "/services", icon: RectangleGroupIcon },
  // { name: "And more...", href: "/services", icon: RectangleGroupIcon },
  { name: "Contact us", href: "/contact", icon: PhoneIcon },
];

const industries = [
  { name: "Healthcare", href: "/industries/healthcare" },
  { name: "Finance", href: "/industries/finance" },
  { name: "Retail", href: "/industries/retail" },
  { name: "Education", href: "/industries/education" },
  { name: "Manufacturing", href: "/industries/manufacturing" },
  { name: "Nonprofit", href: "/industries/nonprofit" },
];

const services = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "Mobile Development", href: "/services/mobile-development" },
  { name: "Cloud Services", href: "/services/cloud" },
  { name: "Data Services", href: "/services/data" },
  { name: "Automation", href: "/services/automation" },
  { name: "Integration", href: "/services/integration" },
];

const technologies = [
  { name: "React", href: "/technologies/react" },
  { name: "Node.js", href: "/technologies/nodejs" },
  { name: "Python", href: "/technologies/python" },
  { name: "Ruby", href: "/technologies/ruby" },
  { name: "Java", href: "/technologies/java" },
  { name: "PHP", href: "/technologies/php" },
  { name: "C#", href: "/technologies/csharp" },
  { name: "Go", href: "/technologies/go" },
  { name: "Swift", href: "/technologies/swift" },
  { name: "Kotlin", href: "/technologies/kotlin" },
  { name: "Dart", href: "/technologies/dart" },
  { name: "JavaScript", href: "/technologies/javascript" },
  { name: "TypeScript", href: "/technologies/typescript" },
  { name: "HTML", href: "/technologies/html" },
  { name: "CSS", href: "/technologies/css" },
  { name: "Sass", href: "/technologies/sass" },
  { name: "Less", href: "/technologies/less" },
  { name: "Tailwind CSS", href: "/technologies/tailwindcss" },
  { name: "Bootstrap", href: "/technologies/bootstrap" },
  { name: "Material-UI", href: "/technologies/material-ui" },
  { name: "Ant Design", href: "/technologies/ant-design" },
  { name: "Chakra UI", href: "/technologies/chakra-ui" },
  { name: "Next.js", href: "/technologies/nextjs" },
  { name: "Gatsby", href: "/technologies/gatsby" },
  { name: "Nuxt.js", href: "/technologies/nuxtjs" },
  { name: "Vue.js", href: "/technologies/vuejs" },
  { name: "Angular", href: "/technologies/angular" },
  { name: "Svelte", href: "/technologies/svelte" },
  { name: "Ember.js", href: "/technologies/emberjs" },
  { name: "React Native", href: "/technologies/react-native" },
];

function SolutionsPopover() {
  return (
    <Popover>
      {({ open }) => (
        <>
          <PopoverButton className="group flex items-center gap-x-1 font-semibold leading-6 text-gray-500 hover:text-gray-900 -mr-3 outline-none">
            {/* -mr-6 */}
            Solutions
            <ChevronDownIcon
              className={`h-5 w-5 mt-1 flex-none text-gray-400 group-hover:text-gray-900 ${
                open ? "rotate-180" : "rotate-0"
              }`}
              aria-hidden="true"
            />
          </PopoverButton>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            // enter="transition ease-out duration-200"
            // enterFrom="opacity-0 -translate-y-1"
            // enterTo="opacity-100 translate-y-0"
            // leave="transition ease-in duration-150"
            // leaveFrom="opacity-100 translate-y-0"
            // leaveTo="opacity-0 -translate-y-1"
          >
            <PopoverPanel className="absolute inset-x-0 top-0 -z-10 bg-white mt-[68px] shadow-lg border-t-[1px] border-neutral-200">
              <div className="mx-auto grid max-w-7xl grid-cols-3 gap-x-4 px-6 py-6 lg:px-8 xl:gap-x-8">
                {products.map((item) => (
                  <PopoverButton
                    as={Link}
                    href={item.href}
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        className="h-6 w-6 text-gray-600 group-hover:text-brand-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        // href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </PopoverButton>
                ))}
              </div>
              <div className="bg-gray-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 border-x border-gray-900/5">
                    {callsToAction.map((item) => (
                      <PopoverButton
                        as={Link}
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon
                          className="h-5 w-5 flex-none text-gray-400"
                          aria-hidden="true"
                        />
                        {item.name}
                      </PopoverButton>
                    ))}
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

const company = [
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Investors", href: "/investors" },
];

function CompanyPopover() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <PopoverButton className="group flex items-center gap-x-1 font-semibold leading-6 text-gray-500 hover:text-gray-900 -mr-3 outline-none">
            <span>Company</span>
            <ChevronDownIcon
              className={`h-5 w-5 mt-1 flex-none text-gray-400 group-hover:text-gray-900 ${
                open ? "rotate-180" : "rotate-0"
              }`}
              aria-hidden="true"
            />
          </PopoverButton>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <PopoverPanel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4">
              <div className="w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
                {company.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block p-2 hover:text-brand-600"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export default function GlobalNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [scrollPosition, setScrollPosition] = useState(0);

  // const handleScroll = () => {
  //   const position = window.scrollY;
  //   setScrollPosition(position);
  // };
  // if (typeof window !== "undefined") {
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  // }

  const pathname = usePathname();
  const isRootPage = pathname === "/";

  return (
    <>
      <div className="bg-stone-50 h-6 hidden lg:block">
        <div className="flex mx-auto max-w-7xl text-center justify-end px-4 text-xs font-small lg:px-8 gap-x-5 rounded-lg py-1 tracking-wide">
          <Link
            href="tel:+13213120362"
            className="hover:text-blue-800 inline-flex gap-x-1.5"
            aria-label="Call Halfnine LLC"
          >
            <Image
              src="/img/en.svg"
              alt="USA Flag"
              width={16}
              height={12}
              aria-hidden="true"
            />
            <span className="leading-tight">+1 (321) 312-0362</span>
          </Link>
          <Link
            href="mailto:contact@halfnine.com"
            className="hover:text-blue-800 inline-flex gap-x-1.5"
          >
            <FaRegEnvelope
              className="h-4 w-4 text-gray-800"
              aria-hidden="true"
            />
            <span className="leading-tight">contact@halfnine.com</span>
          </Link>
        </div>
      </div>
      <header className="sticky top-0 isolate w-full filter bg-white z-[100] ring-1 ring-gray-900/5">
        <div>
          <nav
            className="mx-auto max-w-7xl flex items-center justify-between p-4 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              {isRootPage ? (
                <Logo />
              ) : (
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Home</span>
                  <Logo />
                </Link>
              )}
            </div>
            <div className="flex lg:hidden gap-x-5">
              <Link
                type="button"
                href="tel:+13213516474"
                className="items-center rounded-lg px-3 py-2 text-xs font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-gray-700 hover:text-blue-600"
                aria-label="Call Halfnine LLC"
              >
                <span className="hidden md:inline-flex gap-x-1.5">
                  <Image
                    src="/img/en.svg"
                    width={20}
                    height={15}
                    className="-ml-0.5"
                    alt="USA Flag"
                    aria-hidden="true"
                  />
                  +1 (321) 351-6474
                </span>
                <PiPhone className="h-6 w-6 flex md:hidden hover:text-blue-800" />
              </Link>
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
            <PopoverGroup className="hidden lg:flex lg:gap-x-10">
              {/* <SolutionsPopover /> */}
              {/* <Link
              href="/process"
              className="font-semibold leading-6 text-gray-500 hover:text-gray-900 select-none"
            >
              Process
            </Link> */}
              <Link
                href="/services"
                className="font-semibold leading-6 text-gray-500 hover:text-gray-900 select-none"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="font-semibold leading-6 text-gray-500 hover:text-gray-900 select-none"
              >
                About
              </Link>
              {/* <Link
                href="/investors"
                className="font-semibold leading-6 text-gray-500 hover:text-gray-900 select-none"
              >
                Investors
              </Link> */}
              {/* <CompanyPopover /> */}
              <Link
                href="/blog"
                className="font-semibold leading-6 text-gray-500 hover:text-gray-900 select-none"
              >
                Blog
              </Link>
            </PopoverGroup>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link
                href="/contact"
                // href="https://engagement.halfnine.com/"
                // target="_blank"
                className="select-none font-bold inline-flex items-center gap-x-1.5 rounded-lg bg-brand-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                type="button"
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-[102]" />
          <Dialog.Panel className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 z-[103]">
            <div className="flex items-center justify-end">
              <button
                type="button"
                className="-m-2.5 rounded-lg p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {/* <Link
                  href="/process"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Process
                </Link>
                <Link
                  href="/pricing"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link> */}
                  <Link
                    href="/services"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    href="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  {/* <Link
                    href="/investors"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Investors
                  </Link> */}
                  <Link
                    href="/blog"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    href="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}
