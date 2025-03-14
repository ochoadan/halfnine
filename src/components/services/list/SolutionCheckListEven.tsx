import { FaRegCircleCheck } from "react-icons/fa6";

type SolutionCheckListEvenProps = {
  heading: string;
  description?: string;
  features: {
    name: string;
    description?: string;
    furtherList?: { name: string; description?: string }[];
  }[];
  background?: "light" | "gray";
};

const SolutionCheckListEven = ({
  heading,
  description,
  features,
  background = "light",
}: SolutionCheckListEvenProps) => {
  const containerClassName = background === "gray" ? "bg-gray-50" : "bg-white";
  return (
    <div className={`${containerClassName} py-12 md:py-24`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-6 text-base leading-7 text-gray-600">{description}</p>
        <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16 pt-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="font-semibold text-lg text-gray-900">
                <FaRegCircleCheck
                  className="absolute left-0 top-1 h-5 w-5 text-brand-500"
                  aria-hidden="true"
                />
                <h3>{feature.name}</h3>
              </dt>
              {feature.description && (
                <dd className="mt-2">{feature.description}</dd>
              )}
              {feature.furtherList && (
                <ul className="mt-4 pl-4 ml-2 space-y-2 list-disc">
                  {feature.furtherList.map((further) => (
                    <li key={further.name}>
                      <h4 className="text-gray-900 font-semibold inline">
                        {further.name}
                      </h4>
                      {further.description && (
                        <>
                          {": "}
                          <p className="mt-1 inline">{further.description}</p>
                        </>
                      )}
                    </li>
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
