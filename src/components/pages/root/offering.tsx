import { FadeIn, FadeInStagger } from "@/components/Global/FadeIn";
import { categories } from "./categories";
import Link from "next/link";

export default function DevProcess() {
  return (
    <>
      <FadeInStagger>
        <FadeIn className="mx-auto lg:mx-0">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Technical Capabilities
            <hr className="border-sky-600 opacity-90 border-b-[2px] w-24 my-2" />
          </h2>
        </FadeIn>
        <div className="divide-y divide-gray-200">
          {categories.map((category, index) => (
            <FadeIn className="py-4" key={index}>
              <h3 className="text-md sm:text-lg font-extrabold text-gray-900">
                {category.title}
              </h3>
              <ul role="list" className="mt-2 gap-4 flex flex-wrap">
                {category.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <div className="group flex w-full items-center justify-between space-x-3 rounded-xl py-1 px-2 border border-gray-100 text-left">
                      <span className="flex min-w-0 flex-1 items-center space-x-2">
                        <span className="block flex-shrink-0 rounded-lg overflow-hidden">
                          <item.icon className={`h-6 w-6`} />
                        </span>
                        <span className="block min-w-0 flex-1">
                          <span className="block truncate text-sm font-medium text-gray-900">
                            {item.name}
                          </span>
                        </span>
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="py-4 sm:py-8 md:flex md:items-center gap-20">
          <h3 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
            Find a solution not listed here?
            <br />
            <span>
              We might work with it!
            </span>
          </h3>
          <div className="group mt-2 flex items-center gap-x-6 md:mt-0 md:flex-shrink-0">
            <Link href="/contact" className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
              Contact us<span aria-hidden="true" className="ml-1">→</span>
            </Link>
          </div>
        </FadeIn>
        {/* Find a solution not listed here? We might work with it! Contact us today. */}
      </FadeInStagger >
    </>
  );
}
