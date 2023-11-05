import Image from "next/image";

const BackgroundwImage = ({ heading, description }: any) => {
  return (
    <div className="relative sm:overflow-hidden bg-gray-100">
      <Image
        className="select-none object-cover"
        src="/img/svg/hero-pattern.svg"
        fill
        alt="Background"
        style={{
          opacity: 0,
          animation: "pointonefadein 1.5s forwards",
        }}
      />
      <div className="relative px-6 py-8 sm:py-12 lg:px-16 lg:py-20">
        <h1 className="text-center text-2xl font-bold sm:text-3xl lg:text-4xl">
          <span className="block">{heading}</span>
          <hr className="border-sky-600 opacity-90 border-b-[2px] mx-auto w-28 my-8" />
        </h1>
        <p className="mx-auto max-w-lg text-center text-xl text-gray-900 sm:max-w-3xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BackgroundwImage;
