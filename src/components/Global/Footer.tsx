"use client";

import Link from "next/link";
import { FaLinkedin, FaXTwitter, FaFacebook, FaGithub } from "react-icons/fa6";
import Logo from "./Logo";
const navigation = {
  solutions: [
    { name: "Software Development", href: "/services/software-development" },
    { name: "Deployment & Integration", href: "/services/cloud" },
    { name: "Support & Maintenance", href: "/services/support" },
    // { name: "Web Development", href: "/services/web-development" },
    // { name: "Mobile Development", href: "/services/mobile-development" },
    // { name: "DevOps", href: "/services/devops" },
    // { name: "Cloud Computing", href: "/services/cloud-computing" },
    // { name: "IT Consulting", href: "/services/it-consulting" },
  ],
  consulting: [
    { name: "Information Technology", href: "/services/consulting" },
    { name: "Enterprise Architecture", href: "/services/architecture" },
    { name: "Security & Compliance", href: "/services/security" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Services", href: "/services" },
  ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/tos" },
    { name: "Contact", href: "/contact" },
  ],
  main: [
    { name: "About", href: "/about" },
    { name: "Investors", href: "/investors" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/tos" },
    // { name: "Blog", href: "/blog" },
    // { name: "Jobs", href: "/careers" },
    // { name: "Press", href: "#" },
    // { name: "Accessibility", href: "#" },
    // { name: "Partners", href: "#" },
  ],
};

export default function GlobalFooter() {
  return (
    // <footer className="bg-white border-gray-200 border-t-[2px]">
    <footer className="bg-white border-gray-200 border-t-[2px]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-12 sm:pt-16 lg:px-8 lg:pt-24">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Logo className="h-10" />
            {/* <img
              className="h-7"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Company name"
            /> */}
            <p className="text-sm leading-6 text-gray-600">
              Providing IT services that empower you to build the future.
            </p>
            <div className="flex space-x-6">
              <Link
                href="https://www.linkedin.com/company/halfnine-llc/"
                target="_blank"
                className="text-gray-400 hover:text-[#0077B5] scale-95 hover:scale-{1.02}"
              >
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="h-6 w-6" aria-hidden="true" />
              </Link>
              <Link
                href="https://twitter.com/halfnine"
                target="_blank"
                className="text-gray-400 hover:text-black scale-100 hover:scale-{1.02}"
              >
                <span className="sr-only">Twitter</span>
                <FaXTwitter className="h-6 w-6" aria-hidden="true" />
              </Link>
              <Link
                href="https://www.facebook.com/halfnineus"
                target="_blank"
                className="text-gray-400 hover:text-[#0165E1] scale-100 hover:scale-{1.02}"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebook className="h-6 w-6" aria-hidden="true" />
              </Link>
              <Link
                href="https://github.com/halfnineus"
                target="_blank"
                className="text-gray-400 hover:text-black scale-100 hover:scale-{1.02}"
              >
                <span className="sr-only">GitHub</span>
                <FaGithub className="h-6 w-6" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Solutions
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Consulting
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.consulting.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="https://www.halfnine.com" target="_blank">
              Halfnine
            </Link>{" "}
            LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
// <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-14 lg:px-8">
//   <nav
//     className="-mb-6 columns-2 sm:flex sm:justify-center sm:gap-x-12"
//     aria-label="Footer"
//   >
//     {navigation.main.map((item) => (
//       <div key={item.name} className="pb-6">
//         <Link
//           href={item.href}
//           className="text-sm leading-6 text-gray-600 hover:text-gray-900"
//         >
//           {item.name}
//         </Link>
//       </div>
//     ))}
//   </nav>
//   <div className="mt-10 flex justify-center gap-x-10">
//     <Link
//       href="https://www.linkedin.com/company/halfnine-llc/"
//       target="_blank"
//       className="text-gray-400 hover:text-[#0077B5] scale-95 hover:scale-{1.02}"
//     >
//       <span className="sr-only">LinkedIn</span>
//       <FaLinkedin className="h-6 w-6" aria-hidden="true" />
//     </Link>
//     <Link
//       href="https://twitter.com/halfnine"
//       target="_blank"
//       className="text-gray-400 hover:text-black scale-100 hover:scale-{1.02}"
//     >
//       <span className="sr-only">Twitter</span>
//       <FaXTwitter className="h-6 w-6" aria-hidden="true" />
//     </Link>
//     <Link
//       href="https://www.facebook.com/halfnineus"
//       target="_blank"
//       className="text-gray-400 hover:text-[#0165E1] scale-100 hover:scale-{1.02}"
//     >
//       <span className="sr-only">Facebook</span>
//       <FaFacebook className="h-6 w-6" aria-hidden="true" />
//     </Link>
//     <Link
//       href="https://github.com/halfnineus"
//       target="_blank"
//       className="text-gray-400 hover:text-black scale-100 hover:scale-{1.02}"
//     >
//       <span className="sr-only">GitHub</span>
//       <FaGithub className="h-6 w-6" aria-hidden="true" />
//     </Link>
//   </div>
//   <p className="mt-10 text-center text-xs leading-5 text-gray-500">
//     &copy; {new Date().getFullYear()}{" "}
//     <Link href="https://www.halfnine.com" target="_blank">
//       Halfnine
//     </Link>{" "}
//     LLC. All rights reserved.
//   </p>
// </div>
