"use client";

import { Logo } from "@/components";
import { useState } from "react";

import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { PiPhone } from "react-icons/pi";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

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
  return (
    <header
      className={`isolate w-full fixed filter bg-white z-[100] h-[64px] lg:h-[92px] ${
        isRootPage || mobileMenuOpen
          ? scrollPosition > 20
            ? "shadow-md"
            : ""
          : "shadow-md"
      }`}
    >
      <div className="bg-stone-50 h-6 hidden lg:block">
        <div className="flex mx-auto max-w-7xl text-center justify-end px-4 text-xs font-small lg:px-8 gap-x-5 rounded-md py-1">
          <Link
            href="tel:+13212709110"
            className="hover:text-blue-800 inline-flex gap-x-1.5"
          >
            <Image
              src="/img/en.svg"
              width={16}
              height={16}
              className=""
              alt=""
              aria-hidden="true"
            />
            <span className="leading-tight">+1 (321) 270-9110</span>
          </Link>
          <Link
            href="mailto:contact@halfnine.com"
            className="hover:text-blue-800 inline-flex gap-x-1.5"
          >
            <HiOutlineEnvelope
              className="h-4 w-4 text-gray-800"
              aria-hidden="true"
            />
            <span className="leading-tight">contact@halfnine.com</span>
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
        </div>
        <div className="flex lg:hidden gap-x-5">
          <Link
            type="button"
            href="tel:+13212709110"
            className="items-center rounded-md px-3 py-2 text-xs font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-gray-700 hover:text-blue-600"
          >
            <span className="hidden md:inline-flex gap-x-1.5">
              <Image
                src="/img/en.svg"
                width={20}
                height={20}
                className="-ml-0.5"
                alt=""
                aria-hidden="true"
              />
              +1 (321) 270-9110
            </span>
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
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href={"/contact"}
            className="select-none font-bold inline-flex items-center gap-x-1.5 rounded-md bg-sky-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            type="button"
          >
            Contact Us
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0" />
        <Dialog.Panel className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end">
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
