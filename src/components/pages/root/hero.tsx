import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import Image from "next/image";

const RootHeading = () => {
  return (
    <>
      <div className="relative">
        <img
          className="absolute -z-10 select-none hidden lg:block"
          // className="absolute opacity-[0.1] -z-10"
          alt="Background"
          src="/img/index/indxbg.png"
          style={{
            // transition: "opacity 1.5s",
            opacity: 0,
            animation: "pointonefadein 1.5s forwards",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 lg:pt-32">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold">
            Software Consulting and Development
          </h1>
          <p className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mt-2">
            For your Digital Success
          </p>
        </div>
        <hr className="border-sky-600 opacity-90 border-b-[3px] mx-auto w-40 my-6" />
        <div className="max-w-5xl mx-auto text-center">
          <p className="px-4 lg:px-24 my-4 text-lg md:text-xl text-gray-700">
            {/* Our digital solutions are powerful and flexible, meeting the demands
          of the present while unlocking future potential for countless users
        and businesses. */}
            We empower businesses to thrive by providing flexible and scalable
            solutions that meet their needs of the present and the future.
          </p>
        </div>
      </div>
      <FadeInStagger className="max-w-7xl pt-16 mx-auto px-6 lg:px-8 pb-20 lg:pb-40">
        <FadeIn className="mb-10 flex justify-center">
          <p className="relative rounded-full bg-white px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/10">
            Join over 20+ Businesses improving with us.
          </p>
        </FadeIn>
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <FadeIn className="col-span-2 max-h-12 w-full lg:col-span-1">
            <Image
              className="w-full max-h-10 object-contain"
              src="/img/svg/luxuryportfolio.svg"
              alt="luxuryportfolio"
              width={158}
              height={48}
            />
          </FadeIn>
          <FadeIn className="col-span-2 lg:col-span-1">
            <Image
              // className="w-full max-h-12"
              className="w-full max-h-16 object-contain"
              src="/img/svg/leadingre.svg"
              alt="LeadingRE"
              width={158}
              height={48}
            />
          </FadeIn>
          <FadeIn className="col-span-2 lg:col-span-1">
            <Image
              className="w-full max-h-12 object-contain"
              src="/img/svg/qpay.svg"
              alt="QueuePay"
              width={158}
              height={48}
            />
          </FadeIn>
          <FadeIn className="col-span-2 sm:col-start-2 lg:col-span-1">
            <Image
              className="max-h-8 w-full object-contain"
              src="/img/svg/bitscan.svg"
              alt="Bitscan"
              width={158}
              height={48}
            />
          </FadeIn>
          <FadeIn className="col-span-2 col-start-2 sm:col-start-auto lg:col-span-1">
            <Image
              className="max-h-10 w-full object-contain"
              src="/img/svg/temper.svg"
              alt="Temper Works"
              width={158}
              height={48}
            />
          </FadeIn>
        </div>
      </FadeInStagger>
    </>
  );
};

export default RootHeading;
