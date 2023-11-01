import { FadeIn, FadeInStagger } from "@/components/FadeIn";

export default function DevProcess() {
  return (
    <>
      <FadeInStagger>
        <FadeIn className="mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Development Process and Costs
            <hr className="border-sky-600 opacity-90 border-b-[2px] w-24 my-2" />
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            General estimates for a wide range of software development tasks,
            including mobile apps, web apps, and platform enhancements.
            {/* These are general estimates, covering a wide array of specialized
            tasks assigned to each process. The scope of potential applications
            to be developed may include mobile app development, custom web-based
            software applications, or enhancements to existing platforms. */}
          </p>
        </FadeIn>
        <div className="mx-auto mt-16 flex flex-col gap-8 lg:mx-0 lg:mt-20 lg:flex-row lg:items-end">
          <FadeIn className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-100 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
            <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">
              $15k+
            </p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-2xl font-semibold tracking-tight text-gray-900">
                Discovery
              </p>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Gathering the essential elements, crafting designs, and building
                prototypes
              </p>
            </div>
          </FadeIn>
          <FadeIn className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
            <p className="flex-none text-3xl font-bold tracking-tight text-white">
              $20k - $1M+
            </p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-2xl font-semibold tracking-tight text-white">
                Development
              </p>
              <p className="mt-2 text-base leading-7 text-gray-400">
                Designing technology that is both reliable and ready for
                deployment after testing
              </p>
            </div>
          </FadeIn>
          <FadeIn className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-sky-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
            <p className="flex-none text-3xl font-bold tracking-tight text-white">
              $5k - 10k+ / month
            </p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-2xl font-semibold tracking-tight text-white">
                Maintenance
              </p>
              <p className="mt-2 text-base leading-7 text-sky-200">
                Our software is dynamic and adaptable, with regular updates and
                new features
              </p>
            </div>
          </FadeIn>
        </div>
      </FadeInStagger>
    </>
  );
}
