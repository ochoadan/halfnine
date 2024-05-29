"use client";
import { categories } from "./categories";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

interface CategoryItemProps {
  item: {
    url?: string;
    icon?: string;
    name: string;
  };
}

const CategoryItem: React.FC<CategoryItemProps> = ({ item }) => {
  return (
    <li>
      {item.url ? (
        <Link
          href={item.url}
          className="group flex w-full items-center justify-between space-x-3 rounded-lg py-1 px-1.5 border border-gray-100 text-left bg-white shadow-sm shadow-gray-100"
        >
          <span className="flex min-w-0 flex-1 items-center space-x-2">
            <span className="block flex-shrink-0 rounded-md overflow-hidden">
              <Image
                priority
                quality={10}
                src={item.icon || "/icons/error.svg"}
                alt={item.name + " icon"}
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
            </span>
            <span className="block min-w-0 flex-1">
              <span className="block truncate text-sm font-medium text-gray-900 group-hover:text-brand-700 group-hover:underline">
                {item.name}
              </span>
            </span>
          </span>
        </Link>
      ) : (
        <div className="flex w-full items-center justify-between space-x-3 rounded-lg py-1 px-1.5 border border-gray-100 text-left bg-white shadow-sm shadow-gray-100">
          <span className="flex min-w-0 flex-1 items-center space-x-2">
            <span className="block flex-shrink-0 rounded-md overflow-hidden">
              <Image
                priority
                quality={10}
                src={item.icon || "/icons/error.svg"}
                alt={item.name + " icon"}
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
            </span>
            <span className="block min-w-0 flex-1">
              <span className="block truncate text-sm font-medium text-gray-900">
                {item.name}
              </span>
            </span>
          </span>
        </div>
      )}
    </li>
  );
};

interface CategoryProps {
  gridView?: boolean;
  category: {
    title: string;
    items: {
      url?: string;
      icon?: string;
      name: string;
    }[];
  };
}

const Category: React.FC<CategoryProps> = ({ category, gridView }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="py-2">
      <h3 className="text-base sm:text-xl font-bold text-gray-900">
        {category.title}
      </h3>
      <ul
        role="list"
        className={clsx(
          "my-2 gap-x-4 gap-y-3 flex flex-wrap",
          // category.items.length > (gridView ? 8 : 22) &&
          category.items.length > (gridView ? 4 : 22) &&
            !showMore &&
            // "max-h-[80px] overflow-hidden"
            (gridView ? "max-h-[36px]" : "max-h-[80px]") + " overflow-hidden"
        )}
      >
        {category.items.map((item, itemIdx) => (
          <CategoryItem key={itemIdx} item={item} />
        ))}
      </ul>
      {category.items.length > (gridView ? 4 : 22) && (
        <button
          className="text-brand-600 hover:text-brand-500 hover:underline text-sm font-medium"
          onClick={toggleShowMore}
        >
          {showMore ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

interface OfferingProps {
  gridView?: boolean;
}

export default function Offering({ gridView }: OfferingProps) {
  return (
    <>
      <div className="mx-auto lg:mx-0">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Our Technical Capabilities
          <hr className="border-brand-600 opacity-90 border-b-[2px] w-24 my-2" />
        </h2>
        <p className="text-lg text-gray-900">
          We are capable of providing solutions with the following technologies:
        </p>
      </div>
      <div
        className={clsx(
          gridView
            ? "grid grid-cols-1 md:grid-cols-2 md:gap-x-4"
            : "divide-y divide-gray-200",
          "py-2"
        )}
      >
        {categories.map((category, index) => (
          <Category key={index} category={category} gridView={gridView} />
        ))}
      </div>
      <div className="pt-2 sm:pt-4 md:flex md:items-center">
        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
          Find a solution not listed here? <span>We might work with it! </span>
          <span>
            <Link
              href="/contact"
              className="text-brand-600 hover:text-brand-500 hover:underline"
            >
              Contact us
            </Link>
          </span>
        </h3>
      </div>
    </>
  );
}
