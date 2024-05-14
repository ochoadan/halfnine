import Link from "next/link";

type SolutionCheckListEvenProps = {
  heading: string;
  description?: string;
  features: {
    icon?: any;
    name: string;
    description?: string;
    furtherList?: { name: string; description?: string }[];
  }[];
  background?: "light" | "gray";
  noContact?: boolean;
};

const SolutionIconListThrice = ({
  heading,
  description,
  features,
  background = "light",
  noContact,
}: SolutionCheckListEvenProps) => {
  const containerClassName = background === "gray" ? "bg-gray-50" : "bg-white";
  return (
    <div className={`${containerClassName} py-24 sm:py-32`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl lg:text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {heading}
          </h2>
          {description && (
            <p className="mt-6 mb-12 text-base leading-8 text-gray-600">
              {description}
            </p>
          )}
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  {feature.icon && (
                    <feature.icon
                      className="h-5 w-5 flex-none text-brand-600"
                      aria-hidden="true"
                    />
                  )}
                  <h3>{feature.name}</h3>
                </dt>
                <div>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                  {feature.furtherList && (
                    <ul className="mt-2 pl-4 ml-2 space-y-2 list-disc">
                      {feature.furtherList.map((further) => (
                        <li key={further.name}>
                          <h4 className="text-gray-800 inline">
                            {further.name}
                          </h4>
                          {further.description && (
                            <>
                              {": "}
                              <p className="mt-1 inline text-gray-600">
                                {further.description}
                              </p>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </dl>
        </div>
        {noContact || (
          <div className="mt-8 flex justify-center">
            <p className="relative rounded-full bg-white px-4 py-1.5 text-sm leading-6 text-gray-700 ring-2 ring-inset ring-gray-900/10">
              Need a service not listed here?{" "}
              <Link
                href="/contact"
                className="text-brand-600 hover:text-brand-500 hover:underline"
              >
                Contact us
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SolutionIconListThrice;
