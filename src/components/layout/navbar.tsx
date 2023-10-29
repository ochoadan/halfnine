"use client";

import { Logo } from "@/components";
import { Fragment, useState } from "react";

import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChartPieIcon,
  CheckCircleIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
} from "@heroicons/react/20/solid";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { PiPhone } from "react-icons/pi";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding where your traffic is coming from",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers with our engagement tool",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: SquaresPlusIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
  { name: "View all products", href: "#", icon: RectangleGroupIcon },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll, { passive: true });
  }
  const pathname = usePathname();

  const isRootPage = pathname === "/";
  // const isShadowPage = pathname === "/" || pathname === "/contact";
  const isShadowPage = pathname === "/";
  return (
    // <header className="relative isolate z-10 bg-white">
    <header
      className={`isolate w-full fixed bg-white z-50 ${isShadowPage || mobileMenuOpen
        ? scrollPosition > 20
          ? "shadow-md"
          : ""
        : "shadow-md"
        }`}
    >
      <div className="bg-stone-50 h-6 hidden lg:block">
        <div className="flex mx-auto max-w-7xl text-center justify-end px-4 text-xs font-small lg:px-8 gap-x-5 rounded-md py-1">
          <Link href="tel:+16606318718" className="hover:text-blue-800 inline-flex gap-x-1.5">
            <Image src='/img/en.svg' width={16} height={16} className="" alt='' aria-hidden="true" />
            <span className="leading-tight">
              +1 (660) 631-8718
            </span>
            {/* +1 (660) 631-8718 */}
          </Link>
          <Link href="mailto:contact@halfnine.com" className="hover:text-blue-800 inline-flex gap-x-1.5">
            <HiOutlineEnvelope className="h-4 w-4 text-gray-800" aria-hidden="true" />
            <span className="leading-tight">
              contact@halfnine.com
            </span>
          </Link>
        </div>
      </div>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          {isRootPage ? (
            <Logo />
          ) : (
            <Link href={"/"} className="-m-1.5 p-1.5">
              <span className="sr-only">Halfnine LLC</span>
              <Logo />
            </Link>
          )}
          {/* <Link href="#" className="-m-1.5 p-1.5">
 <span className="sr-only">Your Company</span>
 <Logo className="h-8 w-auto" />
</Link> */}
        </div>
        <div className="flex lg:hidden gap-x-5">
          <Link type="button" href="tel:+16606318718" className="hidden md:inline-flex items-center gap-x-1.5 rounded-md px-3 py-2 text-xs font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:text-blue-600">
            <Image src='/img/en.svg' width={20} height={20} className="-ml-0.5" alt='' aria-hidden="true" />
            +1 (660) 631-8718
            <PiPhone className="h-6 w-6 flex md:hidden hover:text-blue-800" />
          </Link>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
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
        {/* <Popover.Group className="hidden lg:flex lg:gap-x-12">
 <Popover>
 <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-600 hover:text-gray-900">
 Product
 <ChevronDownIcon
 className="h-5 w-5 flex-none text-gray-400"
 aria-hidden="true"
 />
 </Popover.Button>

 <Transition
 as={Fragment}
 enter="transition ease-out duration-200"
 enterFrom="opacity-0 -translate-y-1"
 enterTo="opacity-100 translate-y-0"
 leave="transition ease-in duration-150"
 leaveFrom="opacity-100 translate-y-0"
 leaveTo="opacity-0 -translate-y-1"
 >
 <Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5">
 <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
 {products.map((item) => (
 <div
 key={item.name}
 className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50"
 >
 <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
 <item.icon
 className="h-6 w-6 text-gray-600 group-hover:text-sky-600"
 aria-hidden="true"
 />
 </div>
 <Link
 href={item.href}
 className="mt-6 block font-semibold text-gray-900"
 >
 {item.name}
 <span className="absolute inset-0" />
 </Link>
 <p className="mt-1 text-gray-600">{item.description}</p>
 </div>
 ))}
 </div>
 <div className="bg-gray-50">
 <div className="mx-auto max-w-7xl px-6 lg:px-8">
 <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
 {callsToAction.map((item) => (
 <Link
 key={item.name}
 href={item.href}
 className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
 >
 <item.icon
 className="h-5 w-5 flex-none text-gray-400"
 aria-hidden="true"
 />
 {item.name}
 </Link>
 ))}
 </div>
 </div>
 </div>
 </Popover.Panel>
 </Transition>
 </Popover> */}
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/process"
            className="font-semibold leading-6 text-gray-500 hover:text-gray-900 select-none"
          >
            Process
          </Link>
          <Link
            href="/pricing"
            className="font-semibold leading-6 text-gray-500 hover:text-gray-900 select-none"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="font-semibold leading-6 text-gray-500 hover:text-gray-900 select-none"
          >
            About
          </Link>
        </div>
        {/* </Popover.Group> */}
        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
 <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
 Log in <span aria-hidden="true">&rarr;</span>
 </a>
 </div> */}
        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end"> */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href={"/contact"}
            // className="hidden lg:flex lg:flex-1 lg:justify-end"
            className="select-none font-bold inline-flex items-center gap-x-1.5 rounded-md bg-sky-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            type="button"
          >
            {/* <button> */}
            Contact Us
            {/* <ForwardIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" /> */}
            {/* </button> */}
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-51" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* <Disclosure as="div" className="-mx-3">
 {({ open }) => (
 <>
 <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
 Product
 <ChevronDownIcon
 className={classNames(
 open ? "rotate-180" : "",
 "h-5 w-5 flex-none"
 )}
 aria-hidden="true"
 />
 </Disclosure.Button>
 <Disclosure.Panel className="mt-2 space-y-2">
 {[...products, ...callsToAction].map((item) => (
 <Disclosure.Button
 key={item.name}
 as="a"
 href={item.href}
 className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
 >
 {item.name}
 </Disclosure.Button>
 ))}
 </Disclosure.Panel>
 </>
 )}
 </Disclosure> */}
                <a
                  href="/process"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Process
                </a>
                <a
                  href="/pricing"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Pricing
                </a>
                <a
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </a>
              </div>
              <div className="py-6">
                <a
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
