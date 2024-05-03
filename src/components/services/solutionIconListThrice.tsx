type SolutionCheckListEvenProps = {
  heading: string;
  description: string;
  features: {
      icon: any ; name: string; description: string 
}[];
  background: "light" | "dark";
};

const SolutionIconListThrice = ({
  heading,
  description,
  features,
  background,
}: SolutionCheckListEvenProps) => {
  const containerClassName = background === "dark" ? "bg-gray-50" : "bg-white";
  return (
    <div className={`${containerClassName} py-24 sm:py-32`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Key .NET Development Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A .NET software development company offers a wide array of services
            designed to cater to various business needs, ensuring custom
            solutions that enhance operational efficiency and strategic growth.
            Below is a detailed look at the key .NET development services
            available:
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon
                    className="h-5 w-5 flex-none text-brand-600"
                    aria-hidden="true"
                  />
                  <h3>{feature.name}</h3>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default SolutionIconListThrice;
