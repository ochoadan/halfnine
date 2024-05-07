import { categories } from "./categories";
import Link from "next/link";
import Image from "next/image";

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
                loading="lazy"
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
                loading="lazy"
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

export default function Offering() {
  return (
    <>
      <div className="mx-auto lg:mx-0">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Our Technical Capabilities
          <hr className="border-brand-600 opacity-90 border-b-[2px] w-24 my-2" />
        </h2>
      </div>
      <div className="divide-y divide-gray-200">
        {categories.map((category, index) => (
          <div className="py-4" key={index}>
            <h3 className="text-base sm:text-xl font-bold text-gray-900">
              {category.title}
            </h3>
            <ul role="list" className="mt-2 gap-3.5 flex flex-wrap">
              {category.items.map((item, itemIdx) => (
                <CategoryItem key={itemIdx} item={item} />
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="pt-4 sm:pt-6 md:flex md:items-center">
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
