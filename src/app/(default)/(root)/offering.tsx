import { FadeIn, FadeInStagger } from "@/components/Global/FadeIn";
import { categories } from "./categories";
import Link from "next/link";

export default function DevProcess() {
  return (
    <>
      <FadeInStagger faster>
        <FadeIn className="mx-auto lg:mx-0">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Technical Capabilities
            <hr className="border-brand-600 opacity-90 border-b-[2px] w-24 my-2" />
          </h2>
        </FadeIn>
        <div className="divide-y divide-gray-200">
          {categories.map((category, index) => (
            <FadeIn className="py-4" key={index}>
              <h3 className="text-base sm:text-lg font-extrabold text-gray-900">
                {category.title}
              </h3>
              <ul role="list" className="mt-2 gap-4 flex flex-wrap">
                {category.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <div className="group flex w-full items-center justify-between space-x-3 rounded-xl py-1 px-2 border border-gray-100 text-left bg-white shadow-sm shadow-gray-100">
                      <span className="flex min-w-0 flex-1 items-center space-x-2">
                        <span className="block flex-shrink-0 rounded-lg overflow-hidden">
                          <item.icon className="h-6 w-6" />
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
        <FadeIn className="pt-4 sm:pt-6 md:flex md:items-center">
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            Find a solution not listed here? <span>We might work with it! </span><span>
              <Link href="/contact" className="text-brand-600 hover:text-brand-500 hover:underline">
                Contact us
              </Link>
            </span>
          </h3>
        </FadeIn>
        {/* Find a solution not listed here? We might work with it! Contact us today. */}
      </FadeInStagger >
    </>
  );
}
