import { FadeIn, FadeInStagger } from "@/components/Global/FadeIn";
import Image from "next/image";
import RootClientLogoCloud from "./logocloud";

const RootHeading = () => {
  return (
    <>
      <div className="relative">
        <Image
          className="absolute -z-10 select-none hidden lg:block -mt-32"
          // className="absolute opacity-[0.1] -z-10"
          alt="Background"
          src="/img/index/indxbg.png"
          width={1920}
          height={1080}
          loading="lazy"
          style={{
            // transition: "opacity 1.5s",
            opacity: 0,
            animation: "pointonefadein 1.5s forwards",
          }}
        />
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center font-extrabold">
          <h1 className="text-3xl sm:text-4xl md:text-5xl">
            Tech Restructuring & Turnaround
          </h1>
          <hr className="border-brand-600 opacity-90 border-b-[2px] mx-auto w-40 mt-6 mb-4" />
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Realize your digital success
          </p>
        </div>
        {/* <hr className="border-brand-600 opacity-90 border-b-[3px] mx-auto w-40 my-6" /> */}
        <div className="max-w-5xl mx-auto text-center mt-8">
          <p className="px-4 lg:px-24 my-4 text-lg md:text-xl text-gray-700">
            We empower struggling businesses to thrive by providing solutions
            that meet their needs and goals for the present and the future.
          </p>
        </div>
      </div>
      {/* <RootClientLogoCloud /> */}
    </>
  );
};

export default RootHeading;
