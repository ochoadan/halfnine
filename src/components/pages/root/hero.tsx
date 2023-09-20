const RootHeading = () => {
  return (
    <>
      <div className="relative">
        <img
          alt="Background Image"
          src="/img/index/indxbg.png"
          loading="lazy"
          className="absolute opacity-[0.03] -z-10"
        />
      </div>
      <div className="max-w-6xl mx-auto pt-12">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold space-y-2">
            {`INFORMATION TECHNOLOGY DEVELOPMENT`}
            <div className="mt-2">{`MADE FOR DIGITAL SUCCESS`}</div>
          </h1>
        </div>
      </div>
      <hr className="border-sky-600 opacity-90 border-b-[3px] mx-auto w-32 my-4" />
      <div className="max-w-5xl mx-auto text-center">
        <p className="px-0 lg:px-24 my-4 text-lg md:text-xl text-gray-700">
          Our digital solutions are powerful and flexible, meeting the demands
          of the present while unlocking future potential for countless users
          and businesses.
        </p>
      </div>
    </>
  );
};

export default RootHeading;
