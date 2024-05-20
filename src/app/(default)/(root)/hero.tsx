import { FadeIn } from "@/components/Global/FadeIn";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import { FaArrowsToCircle, FaFlagUsa } from "react-icons/fa6";
import { MdOutlineAutoGraph } from "react-icons/md";

const features = [
  {
    name: "United States Based",
    description:
      "Don't worry about intellectual property, legal, or communication issues.",
    icon: FaFlagUsa,
  },
  // {
  //   name: "Full-Service",
  //   description:
  //     "We provide a full range of services to meet all of your technology needs and goals.",
  //   icon: ServerIcon,
  // },
  {
    name: "ROI Focused",
    description:
      "Your success is our success. We are committed to delivering a positive return on investment.",
    icon: MdOutlineAutoGraph,
  },
  // {
  //   name: "Success-Based Consulting",
  //   description:
  //     "We are only successful when you are successful. We are committed to your success.",
  //   icon: LockClosedIcon,
  // },
  {
    name: "Complete Coverage",
    description:
      "We provide a full range of services to meet all of your technology needs and goals.",
    icon: FaArrowsToCircle,
  },
];

const Hero = () => {
  return (
    <div className="overflow-hidden bg-white py-24 pt-12 lg:py-24 lg:pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"> */}
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2 mx-auto">
          <div className="lg:pr-8">
            <div className="lg:max-w-xl">
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                US-Based Software Development Company
                {/* Delivering Full-Service Technology Solutions */}
                {/* Delivering Comprehensive Technology Solutions */}
              </h1>
              <p className="text-base font-semibold leading-7 text-brand-600 mt-4">
                Full-Service Technology Solutions
                {/* tailored to your needs and goals. */}
              </p>
              {/* <p className="mt-6 text-xs text-gray-600">
                We Provide Full-Service Technology Solutions tailored to meet your
                needs and goals.
                 We are committed to your success and will not work with you unless we believe we can deliver a positive return on investment.
              </p> */}
              <dl className="mt-6 max-w-xl space-y-6 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-brand-600"
                        aria-hidden="true"
                      />
                      {feature.name}:{" "}
                    </dt>
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <FadeIn className="mx-auto">
            <Image
              priority
              src="/img/hero.svg"
              alt="Product screenshot"
              // className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[30rem] md:-ml-4 lg:-ml-0"
              width={400}
              height={400}
            />
          </FadeIn>
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
  );
};

export default Hero;

// import { FadeIn, FadeInStagger } from "@/components/Global/FadeIn";
// import Image from "next/image";
// import RootClientLogoCloud from "./logocloud";

// const RootHeading = () => {
//   return (
//     <>
//       <div className="relative">
//         <Image
//           className="absolute -z-10 select-none hidden lg:block -mt-24"
//           // className="absolute opacity-[0.1] -z-10"
//           alt="Background"
//           src="/img/index/indxbg.png"
//           width={1920}
//           height={1080}
//           loading="eager"
//           style={{
//             // transition: "opacity 1.5s",
//             opacity: 0,
//             animation: "pointonefadein 1.5s forwards",
//           }}
//         />
//         <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center font-extrabold">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl">
//             Tech Restructuring & Turnaround
//           </h1>
//           <hr className="border-brand-600 opacity-90 border-b-[2px] mx-auto w-40 mt-4 mb-2" />
//           <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
//             Realize your digital success
//           </p>
//         </div>
//         {/* <hr className="border-brand-600 opacity-90 border-b-[3px] mx-auto w-40 my-6" /> */}
//         <div className="max-w-5xl mx-auto text-center mt-12">
//           <p className="px-4 lg:px-24 my-4 text-lg md:text-xl text-gray-700">
//             We empower struggling businesses to thrive by providing solutions
//             that meet their needs and goals for the present and the future.
//           </p>
//         </div>
//       </div>
//       {/* <RootClientLogoCloud /> */}
//     </>
//   );
// };

// export default RootHeading;
