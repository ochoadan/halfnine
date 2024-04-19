import GlobalFooter from "@/components/Global/Footer";
import GlobalNavbar from "@/components/Global/Navbar";
import Image from "next/image";
import { GoDot } from "react-icons/go";
const features = [
  {
    name: "Increase Profits.",
    description: "See what's happening at HalfNine on our awesome blog.",
  },
  {
    name: "Beat Competition.",
    description:
      "Read more about our service offering in our main page.",
  },
  {
    name: "Market Dominance.",
    description:
      "Book a free consultation for your business!",
  },
];
export default function NotFound() {
  return (
    <>
      <GlobalNavbar />
      <div className="overflow-hidden bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-8 lg:grid-cols-2 mx-auto max-w-2xl lg:max-w-none">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-xl">
                <h1 className="mt-2 text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Even the things we love break sometimes.
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-600">
                  Thanks for your patience while we put the pieces back
                  together.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  In the meantime, you can...
                </p>
                <dl className="mt-6 max-w-xl space-y-6 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <GoDot
                          className="absolute left-1 top-1 h-5 w-5 text-brand-600"
                          aria-hidden="true"
                        />
                        {/* {feature.name} */}
                      </dt>
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <Image
              src="/icons/heartbroken.svg"
              alt="Heartbroken"
              // className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[30rem] md:-ml-4 lg:-ml-0"
              width={700}
              height={600}
            />
            {/* <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[30rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          /> */}
          </div>
        </div>
      </div>
      <GlobalFooter />
    </>
  );
}
