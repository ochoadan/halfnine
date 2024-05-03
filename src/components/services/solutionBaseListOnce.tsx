type SolutionCheckListEvenProps = {
  heading: string;
  description?: string;
  features: {
    name: string;
    description?: string;
    furtherList?: {
      name: string;
      description?: string;
      furtherList?: { name: string; description?: string }[];
    }[];
  }[];
  background: "light" | "dark";
};

const SolutionCheckListEven = ({
  heading,
  description,
  features,
  background,
}: SolutionCheckListEvenProps) => {
  const containerClassName = background === "dark" ? "bg-gray-50" : "bg-white";
  return (
    <div className={`${containerClassName} py-24 sm:py-32`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:mx-0">
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {heading}
          </h2>
          {description && (
            <p className="mt-6 text-lg leading-8 text-gray-700">
              {description}
            </p>
          )}
        </div>
        <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt className="inline font-semibold text-black">
                <h3>{feature.name}</h3>
              </dt>
              {feature.description && <dd>{feature.description}</dd>}
              {feature.furtherList && (
                <ul className="mt-4 pl-4 ml-2 space-y-2 list-disc">
                  {feature.furtherList.map((further) => (
                    <>
                      <li key={further.name}>
                        <h4 className="ml-2 text-gray-900 font-semibold inline">
                          {further.name}
                        </h4>
                        {further.description && (
                          <>
                            {": "}
                            <p className="mt-1 inline">{further.description}</p>
                          </>
                        )}
                      </li>
                      {further.furtherList && (
                        <ul className="mt-4 pl-4 ml-2 space-y-2 list-disc">
                          {further.furtherList.map((furtherFurther) => (
                            <li key={furtherFurther.name}>
                              <h5 className="ml-2 text-gray-900 font-semibold inline">
                                {furtherFurther.name}
                              </h5>
                              {furtherFurther.description && (
                                <>
                                  {": "}
                                  <p className="mt-1 inline">
                                    {furtherFurther.description}
                                  </p>
                                </>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default SolutionCheckListEven;
